import React from 'react';

export const metadata = {
    title: "Terms of Service | Digest Studio",
    description: "Our terms of service for working with Digest Studio.",
};

const TermsPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-h1 font-heading font-bold mb-12">Terms of Service</h1>

                <div className="prose prose-lg max-w-none text-accent/70 space-y-8">
                    <section>
                        <h2 className="text-3xl font-heading font-bold text-accent mb-4">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using Digest Studio's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-heading font-bold text-accent mb-4">2. Services</h2>
                        <p>
                            Digest Studio provides local marketing, SEO, and content creation services. The specific scope of work, deliverables, and timelines will be outlined in your individual service agreement or package description.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-heading font-bold text-accent mb-4">3. Fees and Payment</h2>
                        <p>
                            Fees for our services are as stated on our website or in your specific service agreement. Payments are due according to the schedule outlined in your package (e.g., monthly for Growth Partner, one-off for Visibility Boost).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-heading font-bold text-accent mb-4">4. Intellectual Property</h2>
                        <p>
                            Unless otherwise agreed, Digest Studio retains ownership of all underlying strategies and processes. However, you are granted a full license to use all creative deliverables (copy, designs, reports) produced specifically for your business upon full payment.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-heading font-bold text-accent mb-4">5. Limitation of Liability</h2>
                        <p>
                            Digest Studio shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-heading font-bold text-accent mb-4">6. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of New South Wales, Australia, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-heading font-bold text-accent mb-4">7. Changes to Terms</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
