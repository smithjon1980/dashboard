import React from 'react';
import { Menu, Truck, MapPin, Building2, BarChart3, Settings } from 'lucide-react';

const navigationItems = [
  { icon: Truck, label: 'Shipments' },
  { icon: MapPin, label: 'Locations' },
  { icon: Building2, label: 'Facilities' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

const Sidebar = () => {
  return (
    <div className="w-16 bg-gray-900 min-h-screen flex flex-col items-center py-4">
      <button className="p-3 text-gray-400 hover:text-white transition-colors">
        <Menu size={24} />
      </button>
      <nav className="mt-8 space-y-6">
        {navigationItems.map((item) => (
          <button
            key={item.label}
            className="p-3 text-gray-400 hover:text-white transition-colors group relative"
            title={item.label}
          >
            <item.icon size={24} />
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;