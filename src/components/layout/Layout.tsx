import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        <Header />
        <main className="p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;