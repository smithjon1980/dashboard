import React from 'react';
import { Bell, Grid, User } from 'lucide-react';
import { Button } from '../ui/Button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">Bev's Beverages Operations</h1>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" icon={Grid} className="!p-2" />
        <Button variant="ghost" icon={Bell} className="!p-2" />
        <button className="flex items-center space-x-2 p-2">
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <User size={18} />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;