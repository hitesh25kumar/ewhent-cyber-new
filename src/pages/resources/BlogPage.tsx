import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, Search, Tag } from 'lucide-react';
import Button from '../../components/ui/Button';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const tags = [
    'all',
    'compliance',
    'security',
    'best-practices',
    'industry-news',
    'tutorials'
  ];

  const blogPosts = [
    {
      title: "The Future of Compliance Automation in 2024",
      excerpt: "Explore how AI and machine learning are transforming compliance automation and what it means for your organization.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["compliance", "industry-news"],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
    {
      title: "Implementing Zero Trust Architecture: A Step-by-Step Guide",
      excerpt: "Learn how to implement a zero trust security model in your organization with this comprehensive guide.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "12 min read",
      tags: ["security", "tutorials"],
      image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg"
    },
    {
      title: "Top 10 Compliance Mistakes to Avoid",
      excerpt: "Common compliance pitfalls and how to avoid them in your compliance program.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      tags: ["compliance", "best-practices"],
      image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
    },
    {
      title: "The Role of AI in Cybersecurity",
      excerpt: "How artificial intelligence is revolutionizing threat detection and response in cybersecurity.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "10 min read",
      tags: ["security", "industry-news"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      title: "Building a Strong Security Culture",
      excerpt: "Tips and strategies for fostering a security-first mindset across your organization.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "7 min read",
      tags: ["security", "best-practices"],
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
    },
    {
      title: "GDPR Compliance Checklist for 2024",
      excerpt: "Updated guidance on maintaining GDPR compliance in the evolving regulatory landscape.",
      author: "Thomas Anderson",
      date: "March 3, 2024",
      readTime: "9 min read",
      tags: ["compliance", "tutorials"],
      image: "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-8 text-primary-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-primary-100">
              Insights and updates from the Ewhent team
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={20} className="text-gray-500" />
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {tags.map(tag => (
                      <option key={tag} value={tag}>
                        {tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-full">
                    <img 
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {filteredPosts[0].tags.map(tag => (
                        <span 
                          key={tag}
                          className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full"
                        >
                          {tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {filteredPosts[0].date}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={16} className="mr-1" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      as={Link}
                      to={`/blog/${filteredPosts[0].title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Read Article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span 
                        key={tag}
                        className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full"
                      >
                        {tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={16} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full"
                  >
                    Read Article
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest insights and updates delivered directly to your inbox.
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

export default BlogPage;