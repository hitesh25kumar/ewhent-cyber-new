import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, Calendar, Globe, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const CommunityPage: React.FC = () => {
  const upcomingEvents = [
    {
      title: "Compliance Automation Workshop",
      date: "March 25, 2024",
      time: "2:00 PM EST",
      type: "Virtual",
      description: "Learn how to automate your compliance processes with hands-on exercises."
    },
    {
      title: "Security Best Practices Meetup",
      date: "April 5, 2024",
      time: "6:00 PM EST",
      type: "In-Person",
      location: "New York City",
      description: "Join us for an evening of networking and security discussions."
    },
    {
      title: "Cloud Security Conference",
      date: "April 15-16, 2024",
      type: "Hybrid",
      location: "San Francisco + Virtual",
      description: "Two days of expert talks on cloud security and compliance."
    }
  ];

  const forumTopics = [
    {
      title: "Getting Started with SOC 2",
      replies: 45,
      views: 1200,
      lastActivity: "2 hours ago"
    },
    {
      title: "Best Practices for Evidence Collection",
      replies: 32,
      views: 890,
      lastActivity: "5 hours ago"
    },
    {
      title: "Automating Compliance Controls",
      replies: 28,
      views: 750,
      lastActivity: "1 day ago"
    },
    {
      title: "Integration Tips and Tricks",
      replies: 56,
      views: 1500,
      lastActivity: "2 days ago"
    }
  ];

  const resources = [
    {
      title: "Community Guidelines",
      description: "Learn about our community rules and best practices for participation."
    },
    {
      title: "Getting Started Guide",
      description: "New to the community? Start here for helpful resources and tips."
    },
    {
      title: "Contribution Guide",
      description: "How to contribute to discussions and share your expertise."
    }
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-8 text-primary-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ewhent Community</h1>
            <p className="text-xl text-primary-100">
              Connect, learn, and share with security and compliance professionals
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                as={Link}
                to="/community/join"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Join the Community
              </Button>
              <Button
                variant="outline"
                size="lg"
                as={Link}
                to="/community/forum"
                className="border-white text-white hover:bg-primary-700"
              >
                Visit Forum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary-600 font-medium px-3 py-1 bg-primary-50 rounded-full">
                    {event.type}
                  </span>
                  <Calendar size={20} className="text-gray-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <div>{event.date}</div>
                  {event.time && <div>{event.time}</div>}
                  {event.location && <div>{event.location}</div>}
                </div>
                <Button
                  variant="primary"
                  as={Link}
                  to={`/community/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full"
                >
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forum */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Community Forum</h2>
            <p className="text-gray-600">
              Join discussions with other security and compliance professionals
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="divide-y divide-gray-200">
              {forumTopics.map((topic, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{topic.replies} replies</span>
                        <span>{topic.views} views</span>
                        <span>Last activity: {topic.lastActivity}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      as={Link}
                      to={`/community/forum/topics/${topic.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      View Discussion
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Button
              variant="primary"
              as={Link}
              to="/community/forum"
            >
              View All Discussions
            </Button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Community Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link 
                  to={`/community/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
            <p className="text-primary-100 mb-8">
              Connect with thousands of security and compliance professionals, share knowledge, and grow together.
            </p>
            <Button
              variant="outline"
              size="lg"
              as={Link}
              to="/community/join"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Join Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;