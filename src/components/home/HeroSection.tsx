import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxRTNBOEEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNGMyLjIxIDAgNC0xLjc5MSA0LTRtMC0xOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0YzIuMjEgMCA0LTEuNzkxIDQtNG0tMTggMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0YzIuMjEgMCA0LTEuNzkxIDQtNG0wIDE4YzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDRjMi4yMSAwIDQtMS43OTEgNC00TTU0IDM0YzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDRjMi4yMSAwIDQtMS43OTEgNC00bTAtMThjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNGMyLjIxIDAgNC0xLjc5MSA0LTRtLTE4IDBjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNGMyLjIxIDAgNC0xLjc5MSA0LTRtMCAxOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0YzIuMjEgMCA0LTEuNzkxIDQtNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Automate Security & Compliance For Your Business
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Ewhent helps businesses of all sizes streamline and automate their security and compliance programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              as={Link}
              to="/demo"
              className="bg-white text-primary-700 hover:bg-gray-100"
            >
              Get a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              as={Link}
              to="/product"
              className="bg-transparent border-white text-white hover:bg-primary-700"
            >
              See the Platform <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Trusted By Logos */}
        <div className="mt-12 md:mt-16">
          <p className="text-center text-primary-100 mb-6 text-sm uppercase tracking-wider font-medium">
            Trusted by leading companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center opacity-80">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="h-8 bg-white bg-opacity-20 rounded-md w-24 md:w-32"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;