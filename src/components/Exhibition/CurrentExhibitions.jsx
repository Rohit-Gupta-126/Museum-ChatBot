"use client"
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const CurrentExhibitions = () => {
  const currentExhibitions = [
    {
      title: "Digital Hieroglyphs",
      description: "Interactive digital displays showcasing ancient writing systems",
      duration: "Until March 30, 2024",
      location: "East Wing, Floor 2",
      image: "/digital-hieroglyphys.jpg"
    },
    {
      title: "Tech of the Pharaohs",
      description: "Ancient Egyptian engineering meets modern technology",
      duration: "Until April 15, 2024",
      location: "West Wing, Floor 1",
      image: "/pyramids.jpg"
    }
  ];

  return (
    <div className="space-y-8">
      {currentExhibitions.map((exhibition, index) => (
        <motion.div
          key={exhibition.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="glass-panel p-6 flex flex-col md:flex-row gap-6"
        >
          <img
            src={exhibition.image}
            alt={exhibition.title}
            className="w-full md:w-64 h-48 object-cover rounded-lg"
          />
          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-decorative text-white">{exhibition.title}</h3>
            <p className="text-white/80">{exhibition.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-lapis-400">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">{exhibition.duration}</span>
              </div>
              <div className="flex items-center text-lapis-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{exhibition.location}</span>
              </div>
            </div>
            <button className="ancient-button mt-4">Learn More</button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CurrentExhibitions;