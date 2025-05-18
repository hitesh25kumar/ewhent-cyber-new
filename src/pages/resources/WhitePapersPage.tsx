import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, ArrowRight, Search, Filter } from 'lucide-react';
import Button from '../../components/ui/Button';

const WhitePapersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'compliance',
    'security',
    'risk-management',
    'best-practices'
  ];

  const whitepapers = [
    {
      title: "The Complete Guide to SOC 2 Compliance",
      description: "Learn everything you need to know about achieving and maintaining SOC 2 compliance, including best practices, common challenges, and practical implementation steps.",
      category: "compliance",
      downloadCount: "2.5k",
      date: "March 2024",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
    },
    {
      title: "Zero Trust Architecture Implementation Guide",
      description: "A comprehensive guide to implementing Zero Trust Architecture in your organization, including technical requirements, security controls, and deployment strategies.",
      category: "security",
      downloadCount: "1.8k",
      date: "February 2024",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
    {
      title: "Risk Management Framework for Financial Institutions",
      description: "Detailed analysis of risk management strategies specifically tailored for financial institutions, including regulatory compliance and security measures.",
      category: "risk-management",
      downloadCount: "3.2k",
      date: "January 2024",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg"
    },
    {
      title: "Cloud Security Best Practices",
      description: "Essential security practices and configurations for protecting cloud infrastructure across major cloud providers.",
      category: "best-practices",
      downloadCount: "4.1k",
      date: "March 2024",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
      title: "GDPR Compliance Checklist",
      description: "A comprehensive checklist and guide for ensuring GDPR compliance, including data protection measures and privacy controls.",
      category: "compliance",
      downloadCount: "2.9k",
      date: "February 2024",
      image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg"
    },
    {
      title: "Incident Response Playbook",
      description: "Step-by-step guide for creating and implementing an effective incident response plan for your organization.",
      category: "security",
      downloadCount: "1.5k",
      date: "January 2024",
      image: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg"
    }
  ];

  const filteredWhitepapers = whitepapers.filter(whitepaper => {
    const matchesSearch = whitepaper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         whitepaper.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || whitepaper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-8 text-primary-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">White Papers</h1>
            <p className="text-xl text-primary-100">
              In-depth research and insights on cybersecurity and compliance
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
                    placeholder="Search white papers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter size={20} className="text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* White Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWhitepapers.map((whitepaper, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <img 
                  src={whitepaper.image} 
                  alt={whitepaper.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary-600 font-medium px-3 py-1 bg-primary-50 rounded-full">
                      {whitepaper.category.charAt(0).toUpperCase() + whitepaper.category.slice(1).replace('-', ' ')}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Download size={14} className="mr-1" />
                      {whitepaper.downloadCount} downloads
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">{whitepaper.title}</h2>
                  <p className="text-gray-600 mb-4">{whitepaper.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{whitepaper.date}</span>
                    <Button
                      variant="primary"
                      size="sm"
                      as={Link}
                      to={`/resources/white-papers/${whitepaper.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center"
                    >
                      Download <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </div>
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
            <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive notifications when we publish new white papers and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 flex-grow"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapersPage;