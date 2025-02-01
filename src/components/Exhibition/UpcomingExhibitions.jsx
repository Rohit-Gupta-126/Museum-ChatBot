"use client"
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const UpcomingExhibitions = () => {
  const upcomingExhibitions = [
    {
      title: "Ancient AI: The Birth of Computing",
      date: "Opening April 2024",
      description: "Explore the fascinating evolution of computational thinking",
      image: "/ai_picture.jpg"
    },
    {
      title: "Lost Cities: Digital Reconstruction",
      date: "Opening May 2024",
      description: "Experience ancient metropolises through VR technology",
      image: "/thelostcity.jpg"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {upcomingExhibitions.map((exhibition, index) => (
        <motion.div
          key={exhibition.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="glass-panel overflow-hidden"
        >
          <img
            src={exhibition.image}
            alt={exhibition.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-decorative text-white">{exhibition.title}</h3>
            <p className="text-lapis-400">{exhibition.date}</p>
            <p className="text-white/80">{exhibition.description}</p>
            <button className="flex items-center text-white hover:text-lapis-400 transition-colors">
              Get Notified <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UpcomingExhibitions;