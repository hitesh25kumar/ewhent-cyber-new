import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Lock, CheckCircle } from 'lucide-react';
import Button from '../../components/ui/Button';

const CyberOperationsPage: React.FC = () => {
  const operationalAreas = [
    {
      title: "SecOps & DevSecOps",
      description: "Integrating security into your development and operations workflow",
      features: [
        "Security automation",
        "CI/CD pipeline security",
        "Infrastructure as Code security",
        "Container security"
      ]
    },
    {
      title: "Prevention and Protection",
      description: "Proactive security measures to prevent cyber threats",
      features: [
        "Strong Passwords and MFA",
        "Software Updates",
        "Firewalls (Network & WAF)",
        "Antivirus/Anti-Malware deployment",
        "Network Monitoring"
      ]
    },
    {
      title: "Threat Detection and Response",
      description: "Advanced threat detection and incident response capabilities",
      features: [
        "Security Information and Event Management (SIEM)",
        "Vulnerability Scanning",
        "Penetration Testing",
        "Incident Response"
      ]
    },
    {
      title: "Access Control and Security",
      description: "Comprehensive access management and data protection",
      features: [
        "Principle of Least Privilege",
        "Access Control (ACLs)",
        "Data Encryption",
        "Data Loss Prevention (DLP)",
        "Security Awareness Training"
      ]
    }
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Server className="w-16 h-16 mx-auto mb-8 text-primary-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cyber Operations</h1>
            <p className="text-xl text-primary-100">
              Comprehensive security operations to protect your organization
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {operationalAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-primary-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <ul className="space-y-3">
                  {area.features.map((feature, i) => (
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
            <h2 className="text-3xl font-bold mb-8">Ready to enhance your security operations?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                as={Link}
                to="/contact"
              >
                Contact Operations Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                as={Link}
                to="/security-audit"
                className="text-primary-600"
              >
                Get a Security Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberOperationsPage;