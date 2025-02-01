import React from 'react';
import ExhibitionCard from './ExhibitionCard';

const exhibitions = [
    {
        title: "Ancient Wonders",
        date: "Jan 1 - Mar 31, 2024",
        description: "Explore the mysteries of ancient civilizations through holographic displays.",
        image: "/ancientwonder.jpg"
    },

    {
        title: "Ancient AI: The Birth of Computing",
        date: "April 2024",
        description: "Explore the fascinating evolution of computational thinking and artificial intelligence.",
        image: "/ai_picture.jpg"
    },

    {
        title: "Lost Cities: Digital Reconstruction",
        date: "May 2024",
        description: "Experience ancient metropolises through VR technology and digital reconstruction.",
        image: "/thelostcity.jpg"
    }
    // Your exhibition data here
];

export default function ExhibitionPreview() {
    return (
        <section className="py-16 bg-sienna-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-decorative text-white mb-8">Upcoming Exhibitions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {exhibitions.map((exhibition, index) => (
                        <ExhibitionCard key={index} {...exhibition} />
                    ))}
                </div>
            </div>
        </section>
    );
};