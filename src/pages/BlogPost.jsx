import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiClock, FiUser, FiArrowLeft, FiShare2, FiBookmark, FiThumbsUp } = FiIcons;

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    title: '10 Essential Leadership Skills for the Modern Workplace',
    content: `
      <p>Leadership in today's rapidly evolving workplace requires a unique blend of traditional management skills and modern competencies. As organizations become more distributed, diverse, and digital, leaders must adapt their approach to remain effective.</p>

      <h2>1. Emotional Intelligence</h2>
      <p>The ability to understand and manage your own emotions while effectively reading and responding to others' emotions is fundamental to modern leadership. Leaders with high emotional intelligence create psychologically safe environments where team members feel valued and heard.</p>

      <h2>2. Digital Fluency</h2>
      <p>Today's leaders must be comfortable with technology and understand how digital tools can enhance productivity and collaboration. This doesn't mean being a technical expert, but rather understanding the strategic implications of digital transformation.</p>

      <h2>3. Adaptive Communication</h2>
      <p>With remote and hybrid work becoming the norm, leaders must master various communication channels and adapt their style to different contexts. This includes everything from video calls to asynchronous messaging and written documentation.</p>

      <h2>4. Cultural Intelligence</h2>
      <p>As workforces become increasingly diverse and global, leaders need the ability to work effectively across cultures. This involves understanding different perspectives, communication styles, and working preferences.</p>

      <h2>5. Strategic Thinking</h2>
      <p>Modern leaders must think beyond day-to-day operations and consider long-term implications of decisions. This involves analyzing trends, anticipating challenges, and positioning their teams for future success.</p>

      <h2>6. Agile Decision Making</h2>
      <p>In a fast-paced business environment, leaders must make quality decisions quickly, often with incomplete information. This requires developing good judgment and the ability to iterate based on feedback.</p>

      <h2>7. Coaching and Development</h2>
      <p>Rather than simply managing tasks, modern leaders focus on developing their team members' capabilities. This involves providing regular feedback, identifying growth opportunities, and supporting career advancement.</p>

      <h2>8. Change Management</h2>
      <p>With constant organizational changes, leaders must become skilled at guiding their teams through transitions. This includes communicating the vision for change and helping team members adapt to new processes or structures.</p>

      <h2>9. Data-Driven Decision Making</h2>
      <p>Modern leaders use data and analytics to inform their decisions rather than relying solely on intuition. This involves understanding key metrics and being able to interpret data to drive strategy.</p>

      <h2>10. Resilience and Well-being</h2>
      <p>Leaders must model resilience and prioritize both their own well-being and that of their team members. This includes managing stress, maintaining work-life balance, and creating sustainable work practices.</p>

      <h2>Developing These Skills</h2>
      <p>Building these leadership competencies is an ongoing journey that requires intentional practice and continuous learning. Consider seeking feedback from colleagues, working with a coach, and taking advantage of leadership development programs.</p>

      <p>Remember that effective leadership is not about perfection—it's about continuous improvement and authentic connection with your team. Start with one or two areas that resonate most with your current challenges and build from there.</p>
    `,
    category: 'leadership',
    author: 'Sarah Mitchell',
    authorBio: 'Sarah is a leadership coach and organizational development expert with over 15 years of experience helping executives and teams reach their full potential.',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    publishDate: new Date('2024-01-15'),
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Leadership', 'Management', 'Skills', 'Workplace'],
    slug: '10-essential-leadership-skills-modern-workplace'
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Building High-Performance Teams in Remote Environments',
      slug: 'building-high-performance-teams-remote',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'The Future of Leadership: Trends to Watch',
      slug: 'future-of-leadership-trends',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      title: 'Developing Your Executive Presence',
      slug: 'developing-executive-presence',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

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
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center mb-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Leadership
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{blogPost.title}</h1>
              <div className="flex items-center text-white/90">
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="mr-6">
                  <div className="font-medium">{blogPost.author}</div>
                  <div className="text-sm text-white/75">Leadership Coach</div>
                </div>
                <div className="flex items-center mr-6">
                  <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                  {format(blogPost.publishDate, 'MMMM dd, yyyy')}
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiClock} className="h-4 w-4 mr-1" />
                  {blogPost.readTime}
                </div>
              </div>
            </div>
          </div>

          {/* Article Actions */}
          <div className="px-8 py-4 bg-gray-50 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <SafeIcon icon={FiThumbsUp} className="h-5 w-5 mr-2" />
                  <span className="text-sm">24 likes</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <SafeIcon icon={FiBookmark} className="h-5 w-5 mr-2" />
                  <span className="text-sm">Save</span>
                </button>
              </div>
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <SafeIcon icon={FiShare2} className="h-5 w-5 mr-2" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-8 py-12">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start">
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">About {blogPost.author}</h3>
                  <p className="text-gray-600 mb-4">{blogPost.authorBio}</p>
                  <div className="flex space-x-4">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Follow
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-blue-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Develop Your Leadership Skills?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Take your leadership to the next level with our personalized coaching programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/subscription"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Coaching Programs
            </Link>
            <Link
              to="/courses"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Leadership Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;