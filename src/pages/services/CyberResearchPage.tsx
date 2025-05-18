import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const CyberResearchPage: React.FC = () => {
  const researchAreas = [
    {
      title: "Essential Cyber Security Principles",
      description: "Foundational research in core security concepts and practices",
      features: [
        "Secure coding practices",
        "Software Bill of Materials (SBOM)",
        "Advanced encryption methodologies",
        "Authentication systems research"
      ]
    },
    {
      title: "Data Protection & Security",
      description: "Cutting-edge research in data security and privacy",
      features: [
        "Privacy-preserving technologies",
        "Data encryption advances",
        "Zero-trust architecture",
        "Quantum-safe cryptography"
      ]
    },
    {
      title: "Global Risk & Compliance",
      description: "Research in risk management and compliance frameworks",
      features: [
        "Risk identification methodologies",
        "Assessment frameworks",
        "Mitigation strategies",
        "Incident response protocols"
      ]
    },
    {
      title: "Business Continuity & Disaster Recovery",
      description: "Research in ensuring operational resilience",
      features: [
        "Data protection strategies",
        "Business continuity planning",
        "Disaster recovery methodologies",
        "Compliance automation"
      ]
    }
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Brain className="w-16 h-16 mx-auto mb-8 text-primary-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cyber Research</h1>
            <p className="text-xl text-primary-100">
              Advancing cybersecurity through innovative research and development
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
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
            <h2 className="text-3xl font-bold mb-8">Interested in our research?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                as={Link}
                to="/contact"
              >
                Contact Research Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                as={Link}
                to="/resources/white-papers"
                className="text-primary-600"
              >
                View Research Papers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberResearchPage;