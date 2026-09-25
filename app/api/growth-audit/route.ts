import { NextRequest, NextResponse } from 'next/server';
import {
  normaliseWebsite,
  validateGrowthAudit,
  type GrowthAuditFields,
} from '@/lib/growth-audit';

const HUBSPOT_CONTACTS_URL = 'https://api.hubapi.com/crm/v3/objects/contacts';
const HUBSPOT_NOTES_URL = 'https://api.hubapi.com/crm/v3/objects/notes';
const NOTE_TO_CONTACT = 202;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function readString(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function readBoolean(value: unknown): boolean {
  return value === true;
}

function readImprovements(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === 'string');
}

function parseBody(value: unknown): GrowthAuditFields {
  const body = isRecord(value) ? value : {};

  return {
    businessName: readString(body.businessName),
    website: readString(body.website),
    industry: readString(body.industry),
    suburb: readString(body.suburb),
    improvements: readImprovements(body.improvements),
    frustration: readString(body.frustration),
    opportunity: readString(body.opportunity),
    name: readString(body.name),
    email: readString(body.email),
    phone: readString(body.phone),
    consent: readBoolean(body.consent),
    dsHp: readString(body.dsHp),
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toHtml(value: string): string {
  return escapeHtml(value.trim()).replace(/\n/g, '<br>');
}

function splitName(fullName: string): { firstname: string; lastname: string } {
  const parts = fullName.trim().split(/\s+/);
  return {
    firstname: parts[0] ?? '',
    lastname: parts.slice(1).join(' '),
  };
}

function buildBrief(input: GrowthAuditFields): string {
  const lines = [
    'Newcastle Business Growth Audit application',
    '',
    `Business: ${input.businessName.trim()}`,
    `Website: ${normaliseWebsite(input.website)}`,
    `Industry: ${input.industry.trim()}`,
    `Suburb: ${input.suburb.trim()}`,
    `Trying to improve: ${input.improvements.join(', ')}`,
    '',
    'What is frustrating them:',
    input.frustration.trim(),
  ];

  const opportunity = input.opportunity.trim();
  if (opportunity) {
    lines.push('', 'Biggest difference over the next 6-12 months:', opportunity);
  }

  lines.push(
    '',
    `Name: ${input.name.trim()}`,
    `Email: ${input.email.trim()}`,
    `Phone: ${input.phone.trim()}`,
    'Consent: yes',
  );

  return lines.join('\n');
}

function buildNoteHtml(input: GrowthAuditFields): string {
  const opportunity = input.opportunity.trim();

  return [
    '<p><strong>Newcastle Business Growth Audit</strong></p>',
    `<p><strong>Business:</strong> ${toHtml(input.businessName)}</p>`,
    `<p><strong>Website:</strong> ${toHtml(normaliseWebsite(input.website))}</p>`,
    `<p><strong>Industry:</strong> ${toHtml(input.industry)}</p>`,
    `<p><strong>Suburb:</strong> ${toHtml(input.suburb)}</p>`,
    `<p><strong>Trying to improve:</strong> ${toHtml(input.improvements.join(', '))}</p>`,
    `<p><strong>What is frustrating them:</strong><br>${toHtml(input.frustration)}</p>`,
    opportunity
      ? `<p><strong>Biggest difference over 6-12 months:</strong><br>${toHtml(opportunity)}</p>`
      : '',
    `<p><strong>Name:</strong> ${toHtml(input.name)}<br><strong>Email:</strong> ${toHtml(input.email)}<br><strong>Phone:</strong> ${toHtml(input.phone)}</p>`,
    '<p>Consent to be contacted about the Growth Audit: yes</p>',
  ]
    .filter(Boolean)
    .join('');
}

function invalidPropertyNames(errorBody: unknown): string[] {
  const message = isRecord(errorBody) ? readString(errorBody.message) : '';
  const names = new Set<string>();
  const pattern = /"name"\s*:\s*"([^"]+)"/g;
  let match = pattern.exec(message);
  while (match) {
    if (match[1]) names.add(match[1]);
    match = pattern.exec(message);
  }
  return [...names];
}

function contactIdFromConflict(errorBody: unknown): string | null {
  const message = isRecord(errorBody) ? readString(errorBody.message) : '';
  const match = message.match(/Existing ID:\s*(\d+)/i);
  return match?.[1] ?? null;
}

function hubSpotToken(): string {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) {
    throw new Error('HUBSPOT_PRIVATE_APP_TOKEN is not configured');
  }
  return token;
}

async function hubSpot(url: string, method: string, body: unknown) {
  return fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${hubSpotToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

function contactProperties(input: GrowthAuditFields): Record<string, string> {
  const { firstname, lastname } = splitName(input.name);
  const properties: Record<string, string> = {
    firstname,
    email: input.email.trim(),
    phone: input.phone.trim(),
    company: input.businessName.trim(),
    website: normaliseWebsite(input.website),
    city: input.suburb.trim(),
    audit_suburb: input.suburb.trim(),
    audit_industry: input.industry.trim(),
    lead_source_audit: 'Growth Audit',
  };

  if (lastname) properties.lastname = lastname;
  return properties;
}

function withoutProperties(
  properties: Record<string, string>,
  invalid: string[],
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(properties).filter(([key]) => !invalid.includes(key)),
  );
}

async function saveContact(input: GrowthAuditFields): Promise<string> {
  let properties = contactProperties(input);

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const response = await hubSpot(HUBSPOT_CONTACTS_URL, 'POST', { properties });

    if (response.status === 409) {
      const conflictBody = await response.json().catch(() => ({}));
      const contactId = contactIdFromConflict(conflictBody);
      if (!contactId) {
        console.error('[growth-audit] HubSpot conflict without a contact id:', JSON.stringify(conflictBody));
        throw new Error('HubSpot conflict');
      }

      const patched = await hubSpot(`${HUBSPOT_CONTACTS_URL}/${contactId}`, 'PATCH', { properties });
      if (patched.ok) return contactId;

      if (patched.status === 400) {
        const errorBody = await patched.json().catch(() => ({}));
        const invalid = invalidPropertyNames(errorBody);
        const next = withoutProperties(properties, invalid);
        if (invalid.length > 0 && Object.keys(next).length < Object.keys(properties).length) {
          properties = next;
          continue;
        }
        console.error('[growth-audit] HubSpot update rejected:', JSON.stringify(errorBody));
        throw new Error('HubSpot contact update failed');
      }

      const errorBody = await patched.text();
      console.error(`[growth-audit] HubSpot update failed (${patched.status}):`, errorBody);
      throw new Error('HubSpot contact update failed');
    }

    if (response.status === 400) {
      const errorBody = await response.json().catch(() => ({}));
      const invalid = invalidPropertyNames(errorBody);
      const next = withoutProperties(properties, invalid);
      if (invalid.length > 0 && Object.keys(next).length < Object.keys(properties).length) {
        properties = next;
        continue;
      }
      console.error('[growth-audit] HubSpot rejected the contact:', JSON.stringify(errorBody));
      throw new Error('HubSpot contact create failed');
    }

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[growth-audit] HubSpot create failed (${response.status}):`, errorBody);
      throw new Error('HubSpot contact create failed');
    }

    const created = (await response.json()) as { id?: string };
    if (!created.id) throw new Error('HubSpot contact id missing');
    return created.id;
  }

  throw new Error('HubSpot contact create failed');
}

async function readResponseBody(response: Response): Promise<string> {
  try {
    return await response.text();
  } catch {
    return '';
  }
}

async function saveNote(contactId: string, html: string, brief: string) {
  const response = await hubSpot(HUBSPOT_NOTES_URL, 'POST', {
    properties: {
      hs_timestamp: Date.now().toString(),
      hs_note_body: html,
    },
    associations: [
      {
        to: { id: contactId },
        types: [
          {
            associationCategory: 'HUBSPOT_DEFINED',
            associationTypeId: NOTE_TO_CONTACT,
          },
        ],
      },
    ],
  });

  if (!response.ok) {
    const errorBody = await readResponseBody(response);
    console.error(`[growth-audit] Note was not saved (${response.status}):`, errorBody);
    console.error('[growth-audit] Brief for recovery:', brief);
  }
}


export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get('content-length') ?? 0);
    if (contentLength > 40_000) {
      return NextResponse.json({ error: 'That application is too long.' }, { status: 413 });
    }

    const input = parseBody(await request.json());

    if (input.dsHp.trim()) {
      return NextResponse.json({ success: true });
    }

    const fields = validateGrowthAudit(input);
    if (Object.keys(fields).length > 0) {
      return NextResponse.json(
        { error: 'Check the highlighted fields and try again.', fields },
        { status: 400 },
      );
    }

    const contactId = await saveContact(input);
    const brief = buildBrief(input);

    await saveNote(contactId, buildNoteHtml(input), brief);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[growth-audit] Unexpected error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
