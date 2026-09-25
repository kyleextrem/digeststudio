export const GROWTH_AUDIT_PATH = '/growth-audit';

export const IMPROVEMENT_OPTIONS = [
  'More enquiries',
  'More customers',
  'Better Google visibility',
  'Better website',
  'More reviews',
  'Better content',
  'Better local visibility',
  'Not sure',
] as const;

export const INDUSTRIES = [
  'Hospitality',
  'Trades',
  'Retail',
  'Health & Wellness',
  'Professional Services',
  'Other',
] as const;

export const SUBURB_SUGGESTIONS = [
  'Newcastle',
  'Merewether',
  'Hamilton',
  'The Junction',
  'Cooks Hill',
  'Adamstown',
  'New Lambton',
  'Mayfield',
  'Wallsend',
  'Charlestown',
  'Warners Bay',
  'Belmont',
  'Toronto',
  'Maitland',
  'Stockton',
] as const;

export type ImprovementOption = (typeof IMPROVEMENT_OPTIONS)[number];

export type GrowthAuditFields = {
  businessName: string;
  website: string;
  industry: string;
  suburb: string;
  improvements: string[];
  frustration: string;
  opportunity: string;
  name: string;
  email: string;
  phone: string;
  consent: boolean;
  dsHp: string;
};

export type GrowthAuditField = keyof GrowthAuditFields;

export type GrowthAuditErrors = Partial<Record<GrowthAuditField, string>>;

const LIMITS = {
  businessName: 160,
  website: 300,
  industry: 80,
  suburb: 120,
  frustration: 4000,
  opportunity: 4000,
  name: 120,
  email: 200,
  phone: 40,
} as const;

export function emptyGrowthAuditFields(): GrowthAuditFields {
  return {
    businessName: '',
    website: '',
    industry: '',
    suburb: '',
    improvements: [],
    frustration: '',
    opportunity: '',
    name: '',
    email: '',
    phone: '',
    consent: false,
    dsHp: '',
  };
}

export function normaliseWebsite(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function isPlausibleWebsite(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed || /\s/.test(trimmed)) return false;

  try {
    const url = new URL(normaliseWebsite(trimmed));
    const host = url.hostname.toLowerCase();
    return (
      (url.protocol === 'http:' || url.protocol === 'https:') &&
      host.includes('.') &&
      !host.startsWith('.') &&
      !host.endsWith('.') &&
      host !== 'localhost'
    );
  } catch {
    return false;
  }
}

function isAllowedImprovement(value: string): value is ImprovementOption {
  return (IMPROVEMENT_OPTIONS as readonly string[]).includes(value);
}

export function validateGrowthAudit(input: GrowthAuditFields): GrowthAuditErrors {
  const errors: GrowthAuditErrors = {};

  const businessName = input.businessName.trim();
  const website = input.website.trim();
  const industry = input.industry.trim();
  const suburb = input.suburb.trim();
  const frustration = input.frustration.trim();
  const opportunity = input.opportunity.trim();
  const name = input.name.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const phoneDigits = phone.replace(/\D/g, '');

  if (!businessName) errors.businessName = 'Add your business name.';
  else if (businessName.length > LIMITS.businessName) {
    errors.businessName = 'That business name is too long.';
  }

  if (!website) errors.website = 'Add your website.';
  else if (!isPlausibleWebsite(website) || website.length > LIMITS.website) {
    errors.website = 'Enter a website we can open, like yourbusiness.com.au.';
  }

  if (!industry) errors.industry = 'Choose an industry.';
  else if (
    !(INDUSTRIES as readonly string[]).includes(industry) ||
    industry.length > LIMITS.industry
  ) {
    errors.industry = 'Choose an industry from the list.';
  }

  if (!suburb) errors.suburb = 'Add your suburb or location.';
  else if (suburb.length > LIMITS.suburb) errors.suburb = 'That location is too long.';

  const improvements = input.improvements.filter(isAllowedImprovement);
  if (improvements.length === 0) {
    errors.improvements = 'Choose at least one thing you want to improve.';
  } else if (improvements.length !== input.improvements.length) {
    errors.improvements = 'Choose from the options listed.';
  }

  if (!frustration) {
    errors.frustration = 'Tell us what is not working. A sentence is enough.';
  } else if (frustration.length < 12) {
    errors.frustration = 'Give us a little more so the review is actually useful.';
  } else if (frustration.length > LIMITS.frustration) {
    errors.frustration = 'That is a bit long. Keep it to the main frustration.';
  }

  if (opportunity.length > LIMITS.opportunity) {
    errors.opportunity = 'That is a bit long. Keep it to the main opportunity.';
  }

  if (!name) errors.name = 'Add your name.';
  else if (name.length > LIMITS.name) errors.name = 'That name is too long.';

  if (!email) errors.email = 'Add your email.';
  else if (email.length > LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!phone) errors.phone = 'Add a phone number.';
  else if (phone.length > LIMITS.phone || phoneDigits.length < 8 || phoneDigits.length > 15) {
    errors.phone = 'Enter a phone number we can call.';
  }

  if (!input.consent) {
    errors.consent = 'We need your ok to contact you about the audit.';
  }

  return errors;
}

export function firstGrowthAuditError(errors: GrowthAuditErrors): GrowthAuditField | null {
  const order: GrowthAuditField[] = [
    'businessName',
    'website',
    'industry',
    'suburb',
    'improvements',
    'frustration',
    'opportunity',
    'name',
    'email',
    'phone',
    'consent',
  ];

  return order.find((field) => errors[field]) ?? null;
}
