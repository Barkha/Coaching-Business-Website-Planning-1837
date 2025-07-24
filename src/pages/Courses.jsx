import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiUsers, FiStar, FiPlay, FiBookOpen, FiAward, FiFilter } = FiIcons;

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'business', name: 'Business' },
    { id: 'personal', name: 'Personal Development' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'communication', name: 'Communication' }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Leadership Fundamentals',
      description: 'Master the essential skills needed to become an effective leader in any organization.',
      category: 'leadership',
      level: 'beginner',
      duration: '6 weeks',
      students: 1250,
      rating: 4.8,
      price: 149,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      instructor: 'Sarah Mitchell',
      lessons: 24
    },
    {
      id: 2,
      title: 'Strategic Business Planning',
      description: 'Learn how to create comprehensive business strategies that drive growth and success.',
      category: 'business',
      level: 'intermediate',
      duration: '8 weeks',
      students: 890,
      rating: 4.9,
      price: 199,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      instructor: 'Michael Chen',
      lessons: 32
    },
    {
      id: 3,
      title: 'Personal Productivity Mastery',
      description: 'Transform your productivity with proven systems and techniques used by top performers.',
      category: 'productivity',
      level: 'beginner',
      duration: '4 weeks',
      students: 2100,
      rating: 4.7,
      price: 99,
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      instructor: 'Emily Rodriguez',
      lessons: 16
    },
    {
      id: 4,
      title: 'Advanced Communication Skills',
      description: 'Develop exceptional communication abilities for professional and personal success.',
      category: 'communication',
      level: 'intermediate',
      duration: '5 weeks',
      students: 1560,
      rating: 4.8,
      price: 129,
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      instructor: 'David Thompson',
      lessons: 20
    },
    {
      id: 5,
      title: 'Executive Presence & Influence',
      description: 'Build commanding presence and influence to excel in senior leadership roles.',
      category: 'leadership',
      level: 'advanced',
      duration: '10 weeks',
      students: 450,
      rating: 4.9,
      price: 299,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      instructor: 'Jennifer Martinez',
      lessons: 40
    },
    {
      id: 6,
      title: 'Mindfulness for Peak Performance',
      description: 'Integrate mindfulness practices to enhance focus, reduce stress, and boost performance.',
      category: 'personal',
      level: 'beginner',
      duration: '6 weeks',
      students: 1800,
      rating: 4.6,
      price: 89,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      instructor: 'Alex Kim',
      lessons: 18
    }
  ];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Professional Development Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your career with our comprehensive library of expert-led courses designed to build essential skills and knowledge.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <div className="flex items-center mb-4">
            <SafeIcon icon={FiFilter} className="h-5 w-5 text-gray-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Filter Courses</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Course Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <SafeIcon icon={FiBookOpen} className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{courses.length}+</div>
            <div className="text-gray-600">Expert Courses</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <SafeIcon icon={FiUsers} className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">10,000+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <SafeIcon icon={FiAward} className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">95%</div>
            <div className="text-gray-600">Completion Rate</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <SafeIcon icon={FiStar} className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    course.level === 'beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <SafeIcon icon={FiPlay} className="h-4 w-4 text-blue-600" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <SafeIcon icon={FiClock} className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiBookOpen} className="h-4 w-4 mr-1" />
                    {course.lessons} lessons
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <SafeIcon
                          key={i}
                          icon={FiStar}
                          className={`h-4 w-4 ${
                            i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {course.rating} ({course.students} students)
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    ${course.price}
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
                
                <div className="mt-3 text-sm text-gray-500">
                  Instructor: {course.instructor}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals who have transformed their careers with our courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse All Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Coaching Program
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;