import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  onClick,
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    ghost: 'text-gray-600 hover:bg-gray-100',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon size={20} className="mr-2" />}
      {children}
    </button>
  );
};