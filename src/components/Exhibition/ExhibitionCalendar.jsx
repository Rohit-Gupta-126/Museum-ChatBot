"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ExhibitionCalendar = () => {
  const events = [
    { date: '2024-02-15', title: 'Ancient Computing Workshop', type: 'Workshop' },
    { date: '2024-02-20', title: 'Digital Archaeology Talk', type: 'Lecture' },
    { date: '2024-03-01', title: 'New Exhibition Opening', type: 'Exhibition' }
  ];

  const getMonthDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <div className="glass-panel p-10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-decorative text-white">February 2024</h3>
        <div className="flex gap-2">
          <button className="p-2 rounded-full border border-terracotta-500/20 text-white">
            ←
          </button>
          <button className="p-2 rounded-full border border-terracotta-500/20 text-white">
            →
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-white/60 text-sm">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {getMonthDays().map(day => {
          const hasEvent = events.some(event => new Date(event.date).getDate() === day);
          return (
            <motion.button
              key={day}
              whileHover={{ scale: 1.1 }}
              className={`p-2 rounded-lg text-center ${
                hasEvent ? 'bg-lapis-500/20 text-white' : 'text-white/60'
              }`}
            >
              {day}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-6 space-y-4">
        {events.map(event => (
          <div key={event.title} className="flex items-center justify-between p-3 rounded-lg bg-sienna-800/30">
            <div>
              <h4 className="text-white font-medium">{event.title}</h4>
              <p className="text-white/60 text-sm">{event.date}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm bg-lapis-500/20 text-lapis-400">
              {event.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionCalendar;