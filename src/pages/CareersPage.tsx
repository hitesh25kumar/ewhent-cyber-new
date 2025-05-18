import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';
import Button from '../components/ui/Button';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior Security Engineer',
      location: 'Bengaluru, India',
      type: 'Full-time',
      department: 'Engineering',
      experience: '5+ years',
      description: 'We are looking for a Senior Security Engineer to join our team and help build and maintain our security infrastructure.',
    },
    {
      title: 'Compliance Specialist',
      location: 'Remote',
      type: 'Full-time',
      department: 'Compliance',
      experience: '3+ years',
      description: 'Join our compliance team to help customers achieve and maintain their compliance requirements.',
    },
    {
      title: 'Security Consultant',
      location: 'Delhi, India',
      type: 'Full-time',
      department: 'Professional Services',
      experience: '4+ years',
      description: 'Work with enterprise customers to assess their security needs and implement solutions.',
    },
    {
      title: 'Product Marketing Manager',
      location: 'Bengaluru, India',
      type: 'Full-time',
      department: 'Marketing',
      experience: '3+ years',
      description: 'Drive product marketing initiatives and help position our solutions in the market.',
    },
  ];

  const benefits = [
    {
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family',
    },
    {
      title: 'Learning & Development',
      description: 'Annual training budget and certification support',
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible working hours',
    },
    {
      title: 'Stock Options',
      description: 'Equity ownership in a fast-growing company',
    },
  ];

  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-primary-100">
              Help us build the future of cybersecurity and compliance
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6 mb-16">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.department}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button
                      as={Link}
                      to={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}
                      variant="primary"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't see the right position?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              We're always looking for talented individuals to join our team.
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button
              as={Link}
              to="/careers/general"
              variant="outline"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Submit General Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;