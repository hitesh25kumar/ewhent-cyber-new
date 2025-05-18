import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      position: "CEO & Co-Founder",
      bio: "Former cybersecurity consultant with 15 years of experience helping companies achieve compliance.",
      imageSrc: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Michael Rodriguez",
      position: "CTO & Co-Founder",
      bio: "Previously led engineering teams at major tech companies, focusing on security and infrastructure.",
      imageSrc: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Product Officer",
      bio: "Product leader with a background in compliance automation and enterprise software.",
      imageSrc: "https://images.pexels.com/photos/8446196/pexels-photo-8446196.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "James Wilson",
      position: "Chief Revenue Officer",
      bio: "Experienced sales leader with a history of scaling B2B SaaS companies.",
      imageSrc: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const values = [
    {
      title: "Customer Success",
      description: "We're committed to our customers' success in achieving and maintaining compliance."
    },
    {
      title: "Innovation",
      description: "We constantly innovate to stay ahead of evolving compliance requirements and security threats."
    },
    {
      title: "Integrity",
      description: "We operate with the highest standards of integrity and transparency in everything we do."
    },
    {
      title: "Simplicity",
      description: "We believe compliance should be simple and accessible to businesses of all sizes."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              About Ewhent
            </h1>
            <p className="text-lg md:text-xl text-primary-50 mb-6">
              We're on a mission to make compliance simple, accessible, and automated for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Ewhent, we believe that security and compliance shouldn't be barriers to innovation and growth. Our mission is to empower organizations to achieve and maintain compliance with ease, allowing them to focus on what they do best.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2021, Ewhent has quickly become the leading compliance automation platform, helping thousands of companies streamline their compliance programs and build trust with their customers.
              </p>
              <p className="text-lg text-gray-600">
                Our platform automates the most time-consuming aspects of compliance, from evidence collection to control monitoring, making compliance accessible to businesses of all sizes.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at Ewhent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced team behind Ewhent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.imageSrc} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about Ewhent? We'd love to hear from you. Reach out to our team for more information.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin size={20} className="text-primary-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Our Headquarters</p>
                    <p className="text-gray-600">123 Compliance Way, San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="text-primary-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Email Us</p>
                    <a href="mailto:hello@ewhent.com" className="text-primary-600 hover:text-primary-700">
                      hello@ewhent.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="text-primary-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Call Us</p>
                    <a href="tel:+15551234567" className="text-primary-600 hover:text-primary-700">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="primary" 
                size="lg"
                as={Link}
                to="/contact"
              >
                Contact Us
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Join Our Team</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals to join our team. Check out our current openings and apply today.
              </p>
              <div className="space-y-4">
                {[
                  "Senior Software Engineer",
                  "Compliance Specialist",
                  "Customer Success Manager",
                  "Product Marketing Manager"
                ].map((position, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-md border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-1">{position}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Remote</span>
                      <Link to="/careers" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/careers" className="text-primary-600 hover:text-primary-700 font-medium">
                  View All Openings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your compliance program?
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
                Contact Us
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

export default AboutPage;