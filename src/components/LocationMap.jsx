"use client"
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  const facilities = [
    { name: "Main Entrance", floor: "Ground Floor" },
    { name: "Exhibition Halls", floor: "Floors 1-2" },
    { name: "Virtual Reality Zone", floor: "Floor 3" },
    { name: "Cafe & Gift Shop", floor: "Ground Floor" }
  ];

  return (
    <div className="glass-panel p-6 space-y-6">
      <div className="relative h-64 bg-sienna-800/30 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/api/placeholder/600/400" 
            alt="Museum Map" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin className="w-12 h-12 text-lapis-600" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-decorative text-white">Museum Facilities</h3>
        <div className="grid gap-4">
          {facilities.map(facility => (
            <div key={facility.name} className="flex justify-between items-center p-3 rounded-lg bg-sienna-800/30">
              <span className="text-white">{facility.name}</span>
              <span className="text-lapis-400 text-sm">{facility.floor}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-decorative text-white">Getting Here</h3>
        <p className="text-white/80">📍 123 Museum Street, City</p>
        <p className="text-white/80">🚇 Nearest Metro: Ancient Tech Station</p>
        <p className="text-white/80">🚌 Bus Routes: 42, 51, 63</p>
      </div>
    </div>
  );
};

export default LocationMap;