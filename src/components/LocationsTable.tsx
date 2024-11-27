import React from 'react';
import { Search, Plus } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import type { Location } from '../types';

const LocationsTable = () => {
  const locations: Location[] = [
    {
      id: '00123',
      name: "Bev's Beverages East",
      type: 'Shipper',
      address: '123 Main Street',
      city: 'Austin',
      state: 'TX',
      postalCode: '78741',
      country: 'USA',
      status: 'Active',
      openHours: '00:01-23:59',
      contactName: 'Dallas Waters',
      contactPhone: '555-555-5555',
      endDate: '04/01/2024 00:00'
    },
  ];

  return (
    <Card>
      <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          <h2 className="text-lg font-semibold">Locations</h2>
          <Input
            type="text"
            placeholder="Search locations..."
            icon={Search}
            className="w-full sm:w-64"
          />
        </div>
        <Button icon={Plus}>
          Create location
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {locations.map((location) => (
              <tr key={location.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{location.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{location.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{`${location.address}, ${location.city}, ${location.state}`}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    {location.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{location.contactName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default LocationsTable;