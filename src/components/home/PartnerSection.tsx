import React from 'react';

const PartnerSection: React.FC = () => {
  // Placeholder logos - in a real implementation these would be actual partner logos
  const partners = [
    { name: 'Partner 1', logoUrl: 'https://via.placeholder.com/150x50?text=Partner+1' },
    { name: 'Partner 2', logoUrl: 'https://via.placeholder.com/150x50?text=Partner+2' },
    { name: 'Partner 3', logoUrl: 'https://via.placeholder.com/150x50?text=Partner+3' },
    { name: 'Partner 4', logoUrl: 'https://via.placeholder.com/150x50?text=Partner+4' },
    { name: 'Partner 5', logoUrl: 'https://via.placeholder.com/150x50?text=Partner+5' },
    { name: 'Partner 6', logoUrl: 'https://via.placeholder.com/150x50?text=Partner+6' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Integration Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ewhent integrates seamlessly with the tools you already use, making compliance automation easier than ever.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all">
              <img
                src={partner.logoUrl}
                alt={partner.name}
                className="max-h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;