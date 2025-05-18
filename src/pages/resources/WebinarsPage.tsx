import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Video, Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const WebinarsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const webinars = [
    {
      title: "Automating SOC 2 Compliance: A Practical Guide",
      date: "March 25, 2024",
      time: "11:00 AM EST",
      status: "upcoming",
      speakers: ["Sarah Johnson", "Michael Chen"],
      description: "Learn how to automate your SOC 2 compliance process using modern tools and best practices.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
    },
    {
      title: "Zero Trust Architecture Implementation",
      date: "March 20, 2024",
      time: "2:00 PM EST",
      status: "upcoming",
      speakers: ["David Williams", "Emma Rodriguez"],
      description: "Discover the key principles of Zero Trust and how to implement it in your organization.",
      image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg"
    },
    {
      title: "AI in Cybersecurity: Trends and Applications",
      date: "March 15, 2024",
      status: "recorded",
      speakers: ["Alex Thompson", "Maria Garcia"],
      description: "Explore how AI is transforming the cybersecurity landscape and what it means for your organization.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      title: "Cloud Security Best Practices",
      date: "March 10, 2024",
      status: "recorded",
      speakers: ["James Wilson", "Lisa Chen"],
      description: "Learn essential security practices for protecting your cloud infrastructure.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    }
  ];

  const filteredWebinars = filter === 'all' 
    ? webinars 
    : webinars.filter(webinar => webinar.status === filter);

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Video className="w-16 h-16 mx-auto mb-8 text-primary-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Webinars</h1>
            <p className="text-xl text-primary-100">
              Join our expert-led webinars to learn about the latest in cybersecurity and compliance
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant={filter === 'all' ? 'primary' : 'outline'}
                onClick={() => setFilter('all')}
              >
                All Webinars
              </Button>
              <Button
                variant={filter === 'upcoming' ? 'primary' : 'outline'}
                onClick={() => setFilter('upcoming')}
              >
                Upcoming
              </Button>
              <Button
                variant={filter === 'recorded' ? 'primary' : 'outline'}
                onClick={() => setFilter('recorded')}
              >
                Recorded
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredWebinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <img 
                  src={webinar.image} 
                  alt={webinar.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      webinar.status === 'upcoming' 
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">{webinar.title}</h2>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  
                  {webinar.status === 'upcoming' && (
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {webinar.time}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <Users size={16} className="text-gray-500 mr-2" />
                    <div className="text-sm text-gray-600">
                      Speakers: {webinar.speakers.join(', ')}
                    </div>
                  </div>
                  
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/webinars/${webinar.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full"
                  >
                    {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Never Miss a Webinar</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive notifications about upcoming webinars and get access to our recorded sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 flex-grow"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage;