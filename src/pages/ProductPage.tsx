import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BarChart, ServerCog, Zap, Database, CheckCheck } from 'lucide-react';
import Button from '../components/ui/Button';

const ProductPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Compliance Automation",
      description: "Automate the collection, management, and monitoring of compliance evidence across your organization."
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary-600" />,
      title: "Risk Management",
      description: "Identify, assess, and mitigate risks with our comprehensive risk management platform."
    },
    {
      icon: <ServerCog className="w-8 h-8 text-primary-600" />,
      title: "Security Monitoring",
      description: "Monitor your security posture in real-time and get alerted to potential security issues."
    },
    {
      icon: <Database className="w-8 h-8 text-primary-600" />,
      title: "Vendor Management",
      description: "Streamline your vendor risk assessment process and ensure your vendors are compliant."
    },
    {
      icon: <CheckCheck className="w-8 h-8 text-primary-600" />,
      title: "Audit Readiness",
      description: "Be audit-ready at all times with continuous compliance monitoring and evidence collection."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "Integrations",
      description: "Connect with 50+ tools you already use to automate evidence collection and streamline your workflow."
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                The Complete Compliance Automation Platform
              </h1>
              <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-2xl">
                Ewhent streamlines and automates your compliance journey, saving you time and reducing the risk of human error.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  as={Link}
                  to="/demo"
                  className="bg-white text-primary-600 hover:bg-gray-100"
                >
                  Get a Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  as={Link}
                  to="/product/integrations"
                  className="bg-transparent border-white text-white hover:bg-primary-500"
                >
                  View Integrations
                </Button>
              </div>
            </div>
            <div className="hidden lg:block bg-white bg-opacity-10 p-4 rounded-lg">
              {/* Placeholder for product screenshot/illustration */}
              <div className="bg-gray-200 bg-opacity-20 rounded-lg w-full aspect-[4/3]"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Platform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our all-in-one platform helps you manage all aspects of your compliance and security programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Ewhent Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform simplifies the compliance process from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="relative">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 h-full">
                  <div className="bg-primary-100 text-primary-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {step === 1 && "Connect Your Systems"}
                    {step === 2 && "Automate Evidence Collection"}
                    {step === 3 && "Maintain Continuous Compliance"}
                  </h3>
                  <p className="text-gray-600">
                    {step === 1 && "Easily integrate with your existing tools and systems through our 50+ native integrations."}
                    {step === 2 && "Automatically collect and organize evidence from connected systems to streamline your compliance process."}
                    {step === 3 && "Stay compliant with real-time monitoring, automated testing, and detailed reports."}
                  </p>
                </div>
                {step < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 border-t-2 border-r-2 border-primary-300 transform rotate-45"></div>
                  </div>
                )}
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
              Ready to simplify your compliance journey?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Join thousands of companies using Ewhent to automate their compliance and security programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/pricing"
                className="bg-transparent border-white text-white hover:bg-primary-700"
              >
                View Pricing
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

export default ProductPage;