import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { getPostBySlug } from '../utils/markdownUtils';

const { FiCalendar, FiClock, FiUser, FiArrowLeft, FiShare2, FiBookmark, FiThumbsUp } = FiIcons;

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = () => {
      const postData = getPostBySlug(slug);
      setPost(postData);
    };
    loadPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Featured Image */}
          <div className="relative h-96">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center mb-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center text-white/90">
                <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
                <div className="mr-6">
                  <div className="font-medium">{post.author}</div>
                  <div className="text-sm text-white/75">Leadership Coach</div>
                </div>
                <div className="flex items-center mr-6">
                  <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                  {format(new Date(post.publishDate), 'MMMM dd, yyyy')}
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiClock} className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-8 py-12">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;