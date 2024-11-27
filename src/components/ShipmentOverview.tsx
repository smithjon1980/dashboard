import React from 'react';
import { Package, Clock, AlertTriangle, XCircle } from 'lucide-react';
import { Card } from './ui/Card';

const ShipmentOverview = () => {
  const stats = [
    { label: 'Delivered', count: 5, icon: Package, color: 'bg-green-100 text-green-600' },
    { label: 'Tracking on time', count: 31, icon: Clock, color: 'bg-blue-100 text-blue-600' },
    { label: 'At risk', count: 23, icon: AlertTriangle, color: 'bg-yellow-100 text-yellow-600' },
    { label: 'Past due', count: 17, icon: XCircle, color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold mt-1">{stat.count}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ShipmentOverview;