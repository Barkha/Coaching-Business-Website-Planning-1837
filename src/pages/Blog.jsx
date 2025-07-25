import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { getAllPosts } from '../utils/markdownUtils';

const { FiCalendar, FiClock, FiUser, FiTag, FiSearch, FiTrendingUp, FiArrowRight } = FiIcons;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Load all blog posts
    const allPosts = getAllPosts();
    setPosts(allPosts);
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'business', name: 'Business Strategy' },
    { id: 'personal', name: 'Personal Development' },
    { id: 'communication', name: 'Communication' }
  ];

  const filteredPosts = posts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const searchMatch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredPosts = posts.filter(post => post.featured);
  const popularPosts = posts.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Blog & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and strategies to help you achieve your goals and maximize your potential.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div className="relative flex-1">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-60">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                          {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                        </span>
                        <h3 className="text-xl font-bold text-white">{post.title}</h3>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                        {format(new Date(post.publishDate), 'MMM dd, yyyy')}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            {searchTerm && ` containing "${searchTerm}"`}
            {filteredPosts.length > 0 ? ` (${filteredPosts.length})` : ''}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found. Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-48">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                        {format(new Date(post.publishDate), 'MMM dd, yyyy')}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <SafeIcon icon={FiClock} className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center"
                      >
                        Read more
                        <SafeIcon icon={FiArrowRight} className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Popular Posts Sidebar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex items-center mb-6">
            <SafeIcon icon={FiTrendingUp} className="h-5 w-5 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-900">Popular Articles</h2>
          </div>
          <div className="space-y-4">
            {popularPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900 line-clamp-2">{post.title}</h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <SafeIcon icon={FiCalendar} className="h-3 w-3 mr-1" />
                    {format(new Date(post.publishDate), 'MMM dd, yyyy')}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-6">Get the latest articles, resources, and insights delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-900 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;