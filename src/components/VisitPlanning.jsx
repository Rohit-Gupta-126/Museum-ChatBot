import React from 'react'

export default function VisitPlanning() {
    return (
        <section className="py-16 bg-sienna-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-decorative text-white mb-8">Plan Your Visit</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-panel p-6">
                        <h3 className="text-xl font-decorative text-white mb-4">Getting Here</h3>
                        <p className="text-white/80">123 Museum Street, City, Country</p>
                        <p className="text-white/80">+1 234 567 8900</p>
                        <p className="text-white/80">Open Monday - Friday: 9am - 6pm, Saturday - Sunday: 10am - 8pm</p>
                    </div>
                    <div className="glass-panel p-6">
                        <h3 className="text-xl font-decorative text-white mb-4">Accessibility</h3>
                        <p className="text-white/80">Our museum is wheelchair accessible with ramps and elevators.</p>
                        <p className="text-white/80">Assistive listening devices are available upon request.</p>
                        <p className="text-white/80">Service animals are welcome.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
