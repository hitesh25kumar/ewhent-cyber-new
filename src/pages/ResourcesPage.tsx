import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Video, Calendar, Download, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      icon: <BookOpen size={24} className="text-primary-600" />,
      title: "Blog",
      description: "Latest insights on compliance, security, and risk management",
      path: "/resources/blog"
    },
    {
      icon: <FileText size={24} className="text-primary-600" />,
      title: "Documentation",
      description: "Detailed guides to help you get the most out of Ewhent",
      path: "/resources/docs"
    },
    {
      icon: <Video size={24} className="text-primary-600" />,
      title: "Webinars",
      description: "Watch live and on-demand webinars from our experts",
      path: "/resources/webinars"
    },
    {
      icon: <Calendar size={24} className="text-primary-600" />,
      title: "Events",
      description: "Join us at upcoming conferences and meetups",
      path: "/resources/events"
    },
    {
      icon: <Download size={24} className="text-primary-600" />,
      title: "Downloads",
      description: "Free templates, guides, and tools for compliance",
      path: "/resources/downloads"
    },
    {
      icon: <ExternalLink size={24} className="text-primary-600" />,
      title: "Community",
      description: "Connect with other compliance professionals",
      path: "/resources/community"
    }
  ];

  const featuredResources = [
    {
      type: "Guide",
      title: "The Complete Guide to SOC 2 Compliance",
      description: "Everything you need to know about achieving and maintaining SOC 2 compliance.",
      path: "/resources/guides/soc2-compliance"
    },
    {
      type: "Webinar",
      title: "Automating Security Controls in a Cloud Environment",
      description: "Learn how to implement automated security controls across your cloud infrastructure.",
      path: "/resources/webinars/automating-security-controls"
    },
    {
      type: "Template",
      title: "Information Security Policy Templates",
      description: "Download our free, customizable information security policy templates.",
      path: "/resources/templates/security-policies"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Resources for Compliance Success
            </h1>
            <p className="text-lg md:text-xl text-primary-50 mb-8">
              Learn, grow, and stay informed with our comprehensive library of resources.
            </p>
            <div className="relative w-full max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-4 py-3 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 text-gray-900"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resource Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the information you need to achieve your compliance goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <Link key={index} to={category.path} className="group">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 transition-all hover:shadow-md hover:border-primary-200 h-full">
                  <div className="mb-4 p-3 bg-primary-50 rounded-full w-max group-hover:bg-primary-100 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Resources */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most popular guides, webinars, and templates to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="h-48 bg-primary-100 flex items-center justify-center">
                  <div className="text-primary-600 font-semibold text-lg">{resource.type}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link 
                    to={resource.path} 
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Access Resource
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent-600 to-accent-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-lg text-accent-100 mb-8">
              Get the latest compliance insights, tips, and resources delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 text-gray-900 flex-grow"
              />
              <Button 
                variant="primary" 
                className="bg-white text-accent-600 hover:bg-gray-100 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-accent-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;