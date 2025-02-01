import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-sienna-700/80 border-t border-terracotta-500/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h4 className="text-xl font-decorative text-white">Visit Us</h4>
                        <p className="text-white/80">123 Museum Street</p>
                        <p className="text-white/80">City, Country</p>
                        <p className="text-white/80">+1 234 567 8900</p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-decorative text-white">Opening Hours</h4>
                        <p className="text-white/80">Mon-Fri: 9:00 - 18:00</p>
                        <p className="text-white/80">Sat-Sun: 10:00 - 20:00</p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-decorative text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {['FAQ', 'Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-white/80 hover:text-lapis-400">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-decorative text-white">Newsletter</h4>
                        <div className="flex gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="ancient-input w-80"
                            />
                            <button className="ancient-button">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
