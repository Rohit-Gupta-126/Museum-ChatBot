import React from 'react'

export default function ContactForm() {
    return (
        <div className="glass-panel p-6 space-y-6">
            <h2 className="text-3xl font-decorative text-white">Get in Touch</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-white mb-2">Name</label>
                    <input
                        type="text"
                        className="ancient-input"
                    />
                </div>
                <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                        type="email"
                        className="ancient-input"
                    />
                </div>
                <div>
                    <label className="block text-white mb-2">Message</label>
                    <textarea
                        rows="4"
                        className="ancient-input"
                    ></textarea>
                </div>
                <button className="ancient-button">
                    Send Message
                </button>
            </form>
        </div>
    );
};