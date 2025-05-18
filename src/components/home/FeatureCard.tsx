import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:underline"
      >
        Learn more <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default FeatureCard;