import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Building, ArrowRight, Search } from 'lucide-react';
import Button from '../../components/ui/Button';

const CaseStudiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    'all',
    'technology',
    'healthcare',
    'finance',
    'manufacturing',
    'retail'
  ];

  const caseStudies = [
    {
      title: "How TechCorp Achieved SOC 2 Compliance in 8 Weeks",
      company: "TechCorp Inc.",
      industry: "technology",
      results: [
        "Reduced compliance preparation time by 60%",
        "Automated 85% of evidence collection",
        "Saved $150,000 in consulting fees"
      ],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
    {
      title: "HealthCare Plus Streamlines HIPAA Compliance",
      company: "HealthCare Plus",
      industry: "healthcare",
      results: [
        "Achieved HIPAA compliance in 12 weeks",
        "Reduced audit preparation time by 70%",
        "Improved security posture significantly"
      ],
      image: "https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg"
    },
    {
      title: "FinTech Solutions Automates Compliance Monitoring",
      company: "FinTech Solutions",
      industry: "finance",
      results: [
        "Real-time compliance monitoring",
        "90% reduction in manual compliance tasks",
        "Enhanced regulatory reporting efficiency"
      ],
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg"
    },
    {
      title: "Manufacturing Co Implements Zero Trust Security",
      company: "Global Manufacturing Co",
      industry: "manufacturing",
      results: [
        "Implemented zero trust architecture",
        "Reduced security incidents by 75%",
        "Achieved ISO 27001 certification"
      ],
      image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg"
    },
    {
      title: "RetailGiant Secures Multi-Cloud Infrastructure",
      company: "RetailGiant",
      industry: "retail",
      results: [
        "Unified security across cloud platforms",
        "Reduced cloud costs by 40%",
        "Enhanced data protection measures"
      ],
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-8 text-primary-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-primary-100">
              See how organizations like yours succeed with Ewhent
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Building size={20} className="text-gray-500" />
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>
                        {industry.charAt(0).toUpperCase() + industry.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <img 
                  src={study.image} 
                  alt={study.company}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary-600 font-medium px-3 py-1 bg-primary-50 rounded-full">
                      {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">{study.company}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-4 text-gray-900">{study.title}</h2>
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <ArrowRight size={16} className="text-primary-600 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/resources/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full"
                  >
                    Read Full Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to achieve similar results?</h2>
            <p className="text-gray-600 mb-8">
              Let us help you transform your security and compliance program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                as={Link}
                to="/contact"
              >
                Contact Sales
              </Button>
              <Button
                variant="outline"
                size="lg"
                as={Link}
                to="/demo"
                className="text-primary-600"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;