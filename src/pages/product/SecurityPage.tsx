import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import Button from '../../components/ui/Button';

const SecurityPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Enterprise-Grade Security Controls
            </h1>
            <p className="text-lg md:text-xl text-primary-50 mb-8">
              Protect your organization with comprehensive security monitoring and automated controls.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              as={Link}
              to="/demo"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Get a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <Shield className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Access Control</h3>
              <p className="text-gray-600">
                Granular role-based access control and SSO integration for secure user management.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <Lock className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Data Encryption</h3>
              <p className="text-gray-600">
                End-to-end encryption for data in transit and at rest using industry-standard protocols.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <AlertCircle className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Threat Detection</h3>
              <p className="text-gray-600">
                Real-time monitoring and alerts for potential security threats and vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Security Measures
            </h2>
            <p className="text-lg text-gray-600">
              We implement multiple layers of security controls to protect your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Infrastructure Security",
                items: [
                  "SOC 2 Type II certified infrastructure",
                  "Regular penetration testing",
                  "DDoS protection",
                  "24/7 infrastructure monitoring"
                ]
              },
              {
                title: "Application Security",
                items: [
                  "Multi-factor authentication",
                  "Regular security updates",
                  "Secure API endpoints",
                  "Input validation and sanitization"
                ]
              },
              {
                title: "Data Security",
                items: [
                  "AES-256 encryption at rest",
                  "TLS 1.3 encryption in transit",
                  "Regular backups",
                  "Data retention policies"
                ]
              },
              {
                title: "Compliance",
                items: [
                  "GDPR compliance",
                  "HIPAA compliance",
                  "PCI DSS compliance",
                  "Regular compliance audits"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to secure your organization?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Get started with Ewhent's enterprise-grade security controls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/contact"
                className="bg-transparent border-white text-white hover:bg-primary-700"
              >
                Contact Sales
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/demo"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;