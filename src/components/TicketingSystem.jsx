import React from 'react'

export default function TicketingSystem() {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-6 space-y-6">
                <h2 className="text-3xl font-decorative text-white">Book Your Tickets</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-white mb-2">Select Date</label>
                        <input
                            type="date"
                            className="ancient-input"
                        />
                    </div>
                    <div>
                        <label className="block text-white mb-2">Number of Tickets</label>
                        <select className="ancient-input">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>
                    <button className="ancient-button w-full">
                        Proceed to Payment
                    </button>
                </div>
            </div>

            <div className="glass-panel p-6">
                <h3 className="text-xl font-decorative text-white mb-4">Pricing</h3>
                <ul className="space-y-4">
                    <li className="flex justify-between text-white/80">
                        <span>Adult</span>
                        <span>$20</span>
                    </li>
                    <li className="flex justify-between text-white/80">
                        <span>Child (under 12)</span>
                        <span>$10</span>
                    </li>
                    <li className="flex justify-between text-white/80">
                        <span>Senior</span>
                        <span>$15</span>
                    </li>
                    <li className="flex justify-between text-white/80">
                        <span>Student</span>
                        <span>$15</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
