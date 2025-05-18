import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: "Ewhent Launches Advanced AI-Powered Security Platform",
      date: "March 15, 2024",
      category: "Product Updates",
      excerpt: "Revolutionary new platform leverages artificial intelligence to enhance threat detection and response capabilities.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
      title: "New Partnership Announcement: Ewhent Teams Up with Leading Cloud Provider",
      date: "March 10, 2024",
      category: "Company News",
      excerpt: "Strategic partnership aims to deliver enhanced cloud security solutions to enterprise customers.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
    {
      title: "Ewhent Recognized as Top Security Solution Provider",
      date: "March 5, 2024",
      category: "Awards",
      excerpt: "Industry analysts recognize Ewhent's innovative approach to cybersecurity and compliance automation.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    },
    {
      title: "Cybersecurity Trends 2024: Ewhent's Annual Report",
      date: "March 1, 2024",
      category: "Research",
      excerpt: "Comprehensive analysis of emerging cybersecurity threats and industry trends for the coming year.",
      image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg"
    }
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Newspaper className="w-16 h-16 mx-auto mb-8 text-primary-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News</h1>
            <p className="text-xl text-primary-100">
              Stay updated with the latest news and announcements from Ewhent
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-primary-600 font-medium">{article.category}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link 
                    to={`/news/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
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

export default NewsPage;