import React from 'react';
import { Shield } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  const iconColor = variant === 'light' ? '#ffffff' : '#2563EB';
  
  return (
    <div className="flex items-center">
      <Shield size={32} color={iconColor} fill={iconColor} strokeWidth={1.5} className="mr-2" />
      <span className={`text-xl font-bold ${textColor}`}>Ewhent</span>
    </div>
  );
};

export default Logo;