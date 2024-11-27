import React from 'react';
import { Menu, Truck, MapPin, Building2, BarChart3, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-16 bg-gray-900 min-h-screen flex flex-col items-center py-4">
      <button className="p-3 text-gray-400 hover:text-white">
        <Menu size={24} />
      </button>
      <div className="mt-8 space-y-6">
        <button className="p-3 text-gray-400 hover:text-white">
          <Truck size={24} />
        </button>
        <button className="p-3 text-gray-400 hover:text-white">
          <MapPin size={24} />
        </button>
        <button className="p-3 text-gray-400 hover:text-white">
          <Building2 size={24} />
        </button>
        <button className="p-3 text-gray-400 hover:text-white">
          <BarChart3 size={24} />
        </button>
        <button className="p-3 text-gray-400 hover:text-white">
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;