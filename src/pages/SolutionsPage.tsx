import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Building, BarChart2, Guitar as Hospital, Landmark } from 'lucide-react';
import Button from '../components/ui/Button';

const SolutionsPage: React.FC = () => {
  const industries = [
    {
      icon: <Building size={48} className="text-primary-600" />,
      title: "For Startups",
      description: "Scale your compliance program along with your business. Get SOC 2 compliant quickly and easily to close more enterprise deals.",
      benefits: [
        "Fast-track compliance achievement",
        "Startup-friendly pricing",
        "Template policies and procedures",
        "Dedicated compliance experts"
      ],
      link: "/solutions/startups"
    },
    {
      icon: <BarChart2 size={48} className="text-primary-600" />,
      title: "For Enterprise",
      description: "Streamline complex compliance requirements across multiple frameworks and jurisdictions with our enterprise-grade platform.",
      benefits: [
        "Multi-framework compliance",
        "Custom controls mapping",
        "Advanced reporting and analytics",
        "Enterprise SSO and role-based access control"
      ],
      link: "/solutions/enterprise"
    },
    {
      icon: <Hospital size={48} className="text-primary-600" />,
      title: "For Healthcare",
      description: "Meet HIPAA, HITRUST, and other healthcare-specific compliance requirements with our specialized solutions.",
      benefits: [
        "HIPAA and HITRUST compliance automation",
        "PHI protection controls",
        "Healthcare-specific policy templates",
        "Vendor risk management for healthcare providers"
      ],
      link: "/solutions/healthcare"
    },
    {
      icon: <Landmark size={48} className="text-primary-600" />,
      title: "For Finance",
      description: "Stay compliant with financial regulations like SOX, PCI DSS, and GDPR with our tailored financial services solution.",
      benefits: [
        "Financial regulation compliance automation",
        "Customized risk assessments",
        "Audit trail and evidence management",
        "Third-party risk management"
      ],
      link: "/solutions/finance"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Solutions Tailored to Your Business
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a startup or enterprise, we have compliance solutions designed specifically for your industry and business needs.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              as={Link}
              to="/demo"
            >
              Get a Custom Demo
            </Button>
          </div>
        </div>
      </section>
      
      {/* Solutions Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="mb-4">{industry.icon}</div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{industry.title}</h2>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Benefits</h3>
                <ul className="mb-6 space-y-2">
                  {industry.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={18} className="text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  as={Link}
                  to={industry.link}
                  className="mt-auto"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how organizations like yours have successfully implemented Ewhent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {index === 1 && "TechStart Achieves SOC 2 in Record Time"}
                    {index === 2 && "HealthCorp Streamlines HIPAA Compliance"}
                    {index === 3 && "FinanceX Automates Regulatory Reporting"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {index === 1 && "Learn how this fast-growing startup achieved SOC 2 compliance in just 6 weeks with Ewhent."}
                    {index === 2 && "Discover how HealthCorp reduced compliance costs by 60% while improving security posture."}
                    {index === 3 && "See how FinanceX automated 85% of their regulatory reporting tasks with our platform."}
                  </p>
                  <Link 
                    to="/resources/case-studies" 
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Read Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find the right solution for your business
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Our team will work with you to identify the perfect solution for your specific compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/solutions"
                className="bg-transparent border-white text-white hover:bg-primary-700"
              >
                Explore All Solutions
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/demo"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;