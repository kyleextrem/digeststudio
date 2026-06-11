// Requires HUBSPOT_PRIVATE_APP_TOKEN in .env.local — Personal Access Key from HubSpot Development > Keys > Personal Access Key

import { NextRequest, NextResponse } from "next/server";

const HUBSPOT_CONTACTS_URL = "https://api.hubapi.com/crm/v3/objects/contacts";

interface AuditLeadBody {
    firstname?: string;
    email?: string;
    phone?: string;
    audit_score?: number;
    audit_band?: string;
    audit_suburb?: string;
    audit_industry?: string;
}

function buildHubSpotProperties(body: AuditLeadBody): Record<string, string> {
    const properties: Record<string, string> = {
        firstname: body.firstname!.trim(),
        email: body.email!.trim(),
        audit_score: String(body.audit_score ?? 0),
        audit_band: body.audit_band ?? "",
        audit_suburb: body.audit_suburb ?? "",
        audit_industry: body.audit_industry ?? "",
        lead_source_audit: "Visibility Audit",
    };

    if (body.phone?.trim()) {
        properties.phone = body.phone.trim();
    }

    return properties;
}

function extractContactIdFromConflict(errorBody: unknown): string | null {
    if (typeof errorBody !== "object" || errorBody === null) return null;

    const message = (errorBody as { message?: string }).message;
    if (!message) return null;

    const match = message.match(/Existing ID:\s*(\d+)/i);
    return match ? match[1] : null;
}

async function hubSpotFetch(url: string, method: string, properties: Record<string, string>) {
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
    if (!token) {
        throw new Error("HUBSPOT_PRIVATE_APP_TOKEN is not configured");
    }

    return fetch(url, {
        method,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ properties }),
    });
}

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as AuditLeadBody;

        if (!body.firstname?.trim() || !body.email?.trim()) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const properties = buildHubSpotProperties(body);

        let response = await hubSpotFetch(HUBSPOT_CONTACTS_URL, "POST", properties);

        if (response.status === 409) {
            const conflictBody = await response.json().catch(() => ({}));
            const contactId = extractContactIdFromConflict(conflictBody);

            if (!contactId) {
                console.error(
                    "[audit-lead] HubSpot 409 conflict — could not extract contact ID:",
                    JSON.stringify(conflictBody)
                );
                return NextResponse.json(
                    { error: "Something went wrong. Please try again." },
                    { status: 500 }
                );
            }

            response = await hubSpotFetch(
                `${HUBSPOT_CONTACTS_URL}/${contactId}`,
                "PATCH",
                properties
            );
        }

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(
                `[audit-lead] HubSpot API error (${response.status}):`,
                errorBody
            );
            return NextResponse.json(
                { error: "Something went wrong. Please try again." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("[audit-lead] Unexpected error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
