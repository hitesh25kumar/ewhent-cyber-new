import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company, imageSrc }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-200">
    <Quote size={32} className="text-primary-200 mb-4" />
    <blockquote className="text-lg md:text-xl font-medium text-gray-800 mb-6 leading-relaxed">
      "{quote}"
    </blockquote>
    <div className="flex items-center">
      <div className="flex-shrink-0 mr-4">
        <img 
          src={imageSrc} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div>
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-gray-600 text-sm">
          {position}, {company}
        </div>
      </div>
    </div>
  </div>
);

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Ewhent has transformed our compliance process. What used to take months now takes days, and the automation has freed up our team to focus on more strategic initiatives.",
      author: "Sarah Johnson",
      position: "CISO",
      company: "TechCorp Inc.",
      imageSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "The platform's intuitive interface and comprehensive dashboard make it easy for our team to track compliance status in real-time. It's been a game-changer for our security program.",
      author: "Michael Chen",
      position: "VP of Security",
      company: "Innovate Solutions",
      imageSrc: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "As a fast-growing startup, Ewhent helped us establish a solid compliance foundation that scales with our business. The onboarding process was smooth, and their support team is exceptional.",
      author: "Emma Rodriguez",
      position: "CTO",
      company: "NextGen Startup",
      imageSrc: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from companies that have transformed their compliance and security programs with Ewhent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;