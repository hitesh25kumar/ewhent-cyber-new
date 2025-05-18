import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const CyberDefensePage: React.FC = () => {
  const services = [
    {
      title: "Cyber Security & IT Essentials",
      description: "Comprehensive security solutions tailored to your organization's needs",
      features: [
        "Security architecture design",
        "Network security implementation",
        "Endpoint protection",
        "Security policy development"
      ]
    },
    {
      title: "Artificial Intelligence",
      description: "AI-powered security solutions for advanced threat detection",
      features: [
        "Machine learning-based threat detection",
        "Automated response systems",
        "Behavioral analytics",
        "Predictive security measures"
      ]
    },
    {
      title: "Threat Hunting & Incident Response",
      description: "Proactive threat hunting and rapid incident response capabilities",
      features: [
        "24/7 threat monitoring",
        "Advanced threat hunting",
        "Digital forensics",
        "Incident response planning"
      ]
    },
    {
      title: "Offensive Security Operations",
      description: "Comprehensive penetration testing and red team operations",
      features: [
        "Penetration testing",
        "Red team assessments",
        "Vulnerability assessments",
        "Security architecture review"
      ]
    }
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-8 text-primary-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cyber Defense Solutions</h1>
            <p className="text-xl text-primary-100">
              Protecting your organization with advanced cyber defense strategies and solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-primary-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to enhance your cyber defense?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                as={Link}
                to="/contact"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                as={Link}
                to="/security-audit"
                className="text-primary-600"
              >
                Get a Free Security Audit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberDefensePage;