import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{number}</div>
      <div className="font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  );
};

export default StatCard;