"use client"
import * as React from "react";
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: "Booking Interface",
      description: "Book tickets instantly with our AI-powered chatbot assistant",
      icon: "📅"
    },
    {
      title: "Exhibition Calendar",
      description: "Browse upcoming exhibitions and special events",
      icon: "🏛️"
    },
    {
      title: "Visit Planning",
      description: "Plan your visit with interactive guides and maps",
      icon: "🗺️"
    }
  ];

  return (
    <section className="py-16 bg-sienna-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-panel p-6"
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-decorative text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}