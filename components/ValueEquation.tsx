import React from 'react';
import { Check, X } from 'lucide-react';

const ValueEquation: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-accent">The "Distribution Baked In" Advantage</h2>
                    <p className="text-xl text-accent/70 leading-relaxed">
                        Most agencies charge you to build marketing assets, then leave you to find the audience.
                        We build the assets AND bring the audience with us.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-accent/5 mb-20">
                    <div className="grid grid-cols-3 bg-accent text-white py-6 px-4 md:px-8 text-sm md:text-lg font-bold text-center">
                        <div className="text-left pl-4">Comparison</div>
                        <div className="opacity-70">Traditional Agency</div>
                        <div className="text-primary">Digest Studio</div>
                    </div>

                    {/* Row 1 */}
                    <div className="grid grid-cols-3 border-b border-accent/5 py-6 px-4 md:px-8 items-center text-center">
                        <div className="text-left font-bold text-accent">Audience</div>
                        <div className="text-accent/60">Starts at 0</div>
                        <div className="text-primary font-bold bg-primary/5 py-1 px-3 rounded-full inline-block mx-auto">7,000+ Locals Ready</div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-3 border-b border-accent/5 py-6 px-4 md:px-8 items-center text-center">
                        <div className="text-left font-bold text-accent">Speed</div>
                        <div className="text-accent/60">Month 1: "Strategy"</div>
                        <div className="text-accent font-medium">Work Starts in 48 Hours</div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-3 border-b border-accent/5 py-6 px-4 md:px-8 items-center text-center">
                        <div className="text-left font-bold text-accent">Reach</div>
                        <div className="text-accent/60">Pay extra for ads</div>
                        <div className="text-accent font-medium">Included in package</div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-3 py-6 px-4 md:px-8 items-center text-center">
                        <div className="text-left font-bold text-accent">Focus</div>
                        <div className="text-accent/60">Deliverables</div>
                        <div className="text-accent font-medium">Outcomes (Calls/Bookings)</div>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default ValueEquation;
