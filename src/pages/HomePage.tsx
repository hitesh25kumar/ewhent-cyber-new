import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Brain, Target, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cyberDefensePoints = [
    'Cyber Security & IT Essentials',
    'Artificial Intelligence',
    'Threat hunting, digital forensics & Incident Responses',
    'Offensive operations, Pen Testing & Red Teaming'
  ];

  const cyberResearchPoints = [
    'Essential Cyber Security Principles',
    'Data Protection & Security',
    'GRC – Global Risk & Compliance',
    'BCDR – Protecting Data, Ensuring Business Continuity & Compliance'
  ];

  const cyberOperationsPoints = {
    prevention: [
      'Strong Passwords and MFA',
      'Software Updates',
      'Firewalls (Network & WAF)',
      'Antivirus/Anti-Malware deployment',
      'Network Monitoring'
    ],
    detection: [
      'Security Information and Event Management (SIEM)',
      'Vulnerability Scanning',
      'Penetration Testing',
      'Incident Response'
    ],
    access: [
      'Principle of Least Privilege',
      'Access Control (ACLs)',
      'Data Encryption',
      'Data Loss Prevention (DLP)',
      'Security Awareness Training'
    ]
  };

  const industries = [
    'Telecommunications',
    'Healthcare',
    'Manufacturing',
    'Logistics & Transportation',
    'Information Technology',
    'Oil & Gas',
    'Consumer Electronics & Equipment Manufacturers',
    'Utilities'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxRTNBOEEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNGMyLjIxIDAgNC0xLjc5MSA0LTRtMC0xOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0YzIuMjEgMCA0LTEuNzkxIDQtNG0tMTggMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0YzIuMjEgMCA0LTEuNzkxIDQtNG0wIDE4YzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDRjMi4yMSAwIDQtMS43OTEgNC00TTU0IDM0YzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDRjMi4yMSAwIDQtMS43OTEgNC00bTAtMThjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNGMyLjIxIDAgNC0xLjc5MSA0LTRtLTE4IDBjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNGMyLjIxIDAgNC0xLjc5MSA0LTRtMCAxOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0YzIuMjEgMCA0LTEuNzkxIDQtNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-100">
              The Center of AI Research & Excellence in Cyber Security
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Empowering organizations with advanced cybersecurity solutions and AI-driven protection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/contact"
                className="bg-transparent border-white text-white hover:bg-primary-700 transform hover:scale-105 transition-all"
              >
                Speak to our expert
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/security-audit"
                className="bg-transparent border-white text-white hover:bg-primary-700 transform hover:scale-105 transition-all"
              >
                Get a free Security Audit
              </Button>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
       
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cyber Defense Card */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <Shield className="w-12 h-12 text-primary-600 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cyber Defense</h3>
              <ul className="space-y-3">
                {cyberDefensePoints.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-600 group-hover:text-gray-900 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cyber Research Card */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <Brain className="w-12 h-12 text-primary-600 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cyber Research</h3>
              <ul className="space-y-3">
                {cyberResearchPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-600 group-hover:text-gray-900 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cyber Operations Card */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <Server className="w-12 h-12 text-primary-600 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cyber Operations</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary-600">Prevention and Protection:</h4>
                  <ul className="space-y-2">
                    {cyberOperationsPoints.prevention.map((point, index) => (
                      <li key={index} className="flex items-start text-gray-600 group-hover:text-gray-900 transition-colors">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary-600">Threat Detection and Response:</h4>
                  <ul className="space-y-2">
                    {cyberOperationsPoints.detection.map((point, index) => (
                      <li key={index} className="flex items-start text-gray-600 group-hover:text-gray-900 transition-colors">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary-600">Access Control and Security:</h4>
                  <ul className="space-y-2">
                    {cyberOperationsPoints.access.map((point, index) => (
                      <li key={index} className="flex items-start text-gray-600 group-hover:text-gray-900 transition-colors">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="group bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-gray-700 group-hover:text-primary-600 transition-colors">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Strategic Partners
          </h2>
          <div className="grid grid-cols-2 gap-8 items-center justify-items-center max-w-2xl mx-auto">
            <div className="group w-48 h-24 bg-gray-50 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-primary-500">
              <p className="text-gray-600 font-medium group-hover:text-primary-600 transition-colors">Stormwall</p>
            </div>
            <div className="group w-48 h-24 bg-gray-50 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-primary-500">
              <p className="text-gray-600 font-medium group-hover:text-primary-600 transition-colors">AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxRTNBOEEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNGMyLjIxIDAgNC0xLjc5MSA0LTRtMC0xOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0YzIuMjEgMCA0LTEuNzkxIDQtNG0tMTggMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0YzIuMjEgMCA0LTEuNzkxIDQtNG0wIDE4YzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDRjMi4yMSAwIDQtMS43OTEgNC00TTU0IDM0YzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDRjMi4yMSAwIDQtMS43OTEgNC00bTAtMThjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNGMyLjIxIDAgNC0xLjc5MSA0LTRtLTE4IDBjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNGMyLjIxIDAgNC0xLjc5MSA0LTRtMCAxOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0YzIuMjEgMCA0LTEuNzkxIDQtNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to secure your organization?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Get in touch with our experts to discuss your cybersecurity needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/contact"
                className="bg-transparent border-white text-white hover:bg-primary-700 transform hover:scale-105 transition-all"
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/security-audit"
                className="bg-transparent border-white text-white hover:bg-primary-700 transform hover:scale-105 transition-all"
               >
                Free Security Audit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;