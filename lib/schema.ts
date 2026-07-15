const AREAS_SERVED = [
    "Newcastle",
    "Lake Macquarie",
    "Port Stephens",
    "Maitland",
    "Cessnock",
] as const;

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "@id": "https://digeststudio.com.au/#organization",
    name: "Digest Studio",
    url: "https://digeststudio.com.au",
    telephone: "+61417668744",
    description:
        "Newcastle's local marketing partner. We optimize your local presence AND distribute your message to our 7,000+ local subscribers.",
    areaServed: AREAS_SERVED.map((name) => ({
        "@type": "Place",
        name,
        containedInPlace: {
            "@type": "AdministrativeArea",
            name: "New South Wales",
            containedInPlace: {
                "@type": "Country",
                name: "Australia",
            },
        },
    })),
    priceRange: "$$",
};

export function serviceSchema(name: string, description: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: {
            "@type": "MarketingAgency",
            "@id": "https://digeststudio.com.au/#organization",
            name: "Digest Studio",
        },
        areaServed: AREAS_SERVED.map((area) => ({
            "@type": "Place",
            name: area,
        })),
    };
}
