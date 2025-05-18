import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="bg-primary-900 text-white py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        <span className="inline-flex items-center mx-4">
          🔥 Special offer: Get 20% off your first year of Ewhent Enterprise
        </span>
        <span className="inline-flex items-center mx-4">
          📢 New: Automated evidence collection for SOC 2 compliance
        </span>
        <span className="inline-flex items-center mx-4">
          🌟 Join our webinar: Streamlining Compliance Workflows - Register Now
        </span>
        <span className="inline-flex items-center mx-4">
          📋 Download our free compliance checklist template
        </span>
      </div>
    </div>
  );
};

export default Marquee;