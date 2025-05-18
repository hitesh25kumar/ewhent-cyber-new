import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const ConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      title: "Security Strategy Development",
      description: "Develop comprehensive security strategies aligned with your business goals",
      features: [
        "Risk assessment and analysis",
        "Security roadmap development",
        "Policy and procedure creation",
        "Security awareness programs"
      ]
    },
    {
      title: "Compliance Advisory",
      description: "Expert guidance on meeting regulatory requirements and industry standards",
      features: [
        "Gap analysis",
        "Compliance roadmap",
        "Control implementation",
        "Audit preparation"
      ]
    },
    {
      title: "Security Architecture Review",
      description: "Assessment and optimization of your security infrastructure",
      features: [
        "Architecture assessment",
        "Design recommendations",
        "Security controls review",
        "Technology stack optimization"
      ]
    },
    {
      title: "Incident Response Planning",
      description: "Prepare for and respond to security incidents effectively",
      features: [
        "IR plan development",
        "Team training",
        "Tabletop exercises",
        "Post-incident analysis"
      ]
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Technology",
    "Manufacturing",
    "Retail",
    "Government"
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-8 text-primary-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Consulting</h1>
            <p className="text-xl text-primary-100">
              Expert guidance to strengthen your security posture and achieve compliance
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
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
            <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <span className="text-gray-900">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to get started?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                as={Link}
                to="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                as={Link}
                to="/resources/case-studies"
                className="border-white text-white hover:bg-primary-700"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingPage;