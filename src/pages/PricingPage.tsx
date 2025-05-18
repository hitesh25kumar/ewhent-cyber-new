import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, HelpCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');
  
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for startups and small teams",
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        "Up to 25 users",
        "SOC 2 compliance automation",
        "Basic policy templates",
        "5 integrations",
        "Email support",
        "Basic dashboard"
      ],
      recommended: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "For growing businesses with compliance needs",
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        "Up to 100 users",
        "Multi-framework compliance (SOC 2, ISO 27001, GDPR)",
        "Custom policy templates",
        "25 integrations",
        "Priority email & chat support",
        "Advanced dashboard and reporting"
      ],
      recommended: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Unlimited users",
        "Full framework library (SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and more)",
        "Custom controls and mapping",
        "Unlimited integrations",
        "24/7 dedicated support",
        "Advanced analytics and custom reporting",
        "Single Sign-On (SSO)",
        "Custom contracts and SLAs"
      ],
      recommended: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div>
      {/* Pricing Header */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Choose the plan that's right for your organization. All plans come with a 14-day free trial.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center p-1 bg-gray-200 rounded-lg mb-8">
              <button
                className={`px-4 py-2 rounded-md ${
                  billingPeriod === 'monthly' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'bg-transparent text-gray-600'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  billingPeriod === 'annual' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'bg-transparent text-gray-600'
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual <span className="text-primary-600 font-medium text-sm">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-8 md:py-12 bg-white -mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl border ${
                  plan.recommended 
                  ? 'border-primary-400 shadow-lg relative' 
                  : 'border-gray-200 shadow-sm'
                } bg-white p-8`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.monthlyPrice !== null ? (
                    <div className="flex items-end">
                      <span className="text-4xl font-bold text-gray-900">
                        ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                      </span>
                      <span className="text-gray-600 ml-2 mb-1">/ mo</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-gray-900">Custom Pricing</div>
                  )}
                  {billingPeriod === 'annual' && plan.monthlyPrice && (
                    <div className="text-sm text-primary-600 mt-1">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </div>
                  )}
                </div>
                
                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-4">Features include:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={16} className="text-primary-600 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button
                  variant={plan.recommended ? 'primary' : 'outline'}
                  fullWidth
                  as={Link}
                  to={plan.buttonText === 'Contact Sales' ? '/contact' : '/signup'}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Do you offer discounts for startups?",
                  answer: "Yes, we offer special pricing for qualified startups. Contact our sales team to learn more about our startup program."
                },
                {
                  question: "Can I change plans later?",
                  answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing period."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also offer invoicing."
                },
                {
                  question: "Is there a setup fee?",
                  answer: "No, there are no setup fees for any of our plans. You only pay the advertised price."
                },
                {
                  question: "Do you offer refunds?",
                  answer: "We offer a 14-day money-back guarantee for all plans. If you're not satisfied with our service, contact us within 14 days of your purchase for a full refund."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start">
                    <HelpCircle size={20} className="text-primary-600 mr-2 flex-shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Have more questions? We're here to help.
              </p>
              <Button
                variant="outline"
                as={Link}
                to="/contact"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started with Ewhent?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Join thousands of companies using Ewhent to automate their compliance and security programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/contact"
                className="bg-transparent border-white text-white hover:bg-primary-700"
              >
                Talk to Sales
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/signup"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;