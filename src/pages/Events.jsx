import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays, addWeeks, addMonths } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiClock, FiMapPin, FiUsers, FiVideo, FiMic, FiGift, FiArrowRight } = FiIcons;

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'webinar', name: 'Webinars' },
    { id: 'networking', name: 'Networking' },
    { id: 'masterclass', name: 'Masterclasses' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Leadership in the Digital Age',
      description: 'Learn how to lead effectively in our rapidly changing digital landscape. This interactive workshop covers modern leadership strategies, remote team management, and digital communication skills.',
      category: 'workshop',
      type: 'Free Workshop',
      date: addDays(new Date(), 5),
      time: '2:00 PM - 4:00 PM EST',
      location: 'Online',
      capacity: 100,
      registered: 67,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speaker: 'Sarah Mitchell',
      speakerTitle: 'Leadership Coach & Author',
      isFree: true,
      featured: true
    },
    {
      id: 2,
      title: 'Building High-Performance Teams',
      description: 'Discover the secrets to creating and managing teams that consistently deliver exceptional results. Perfect for managers and team leaders.',
      category: 'webinar',
      type: 'Live Webinar',
      date: addWeeks(new Date(), 1),
      time: '1:00 PM - 2:30 PM EST',
      location: 'Online',
      capacity: 500,
      registered: 234,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speaker: 'Michael Chen',
      speakerTitle: 'Business Strategy Expert',
      isFree: true,
      featured: false
    },
    {
      id: 3,
      title: 'Networking Night: Connect & Grow',
      description: 'Join fellow professionals for an evening of meaningful connections, shared experiences, and mutual growth opportunities.',
      category: 'networking',
      type: 'Networking Event',
      date: addWeeks(new Date(), 2),
      time: '6:00 PM - 8:00 PM EST',
      location: 'Downtown Conference Center',
      capacity: 80,
      registered: 45,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speaker: 'Multiple Speakers',
      speakerTitle: 'Industry Leaders',
      isFree: true,
      featured: false
    },
    {
      id: 4,
      title: 'Productivity Masterclass: Time Management 2.0',
      description: 'Master advanced time management techniques and productivity systems used by top executives and entrepreneurs worldwide.',
      category: 'masterclass',
      type: 'Free Masterclass',
      date: addWeeks(new Date(), 3),
      time: '11:00 AM - 1:00 PM EST',
      location: 'Online',
      capacity: 200,
      registered: 156,
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speaker: 'Emily Rodriguez',
      speakerTitle: 'Productivity Expert',
      isFree: true,
      featured: true
    },
    {
      id: 5,
      title: 'Communication Skills for Leaders',
      description: 'Enhance your communication abilities with proven techniques for inspiring, motivating, and influencing others effectively.',
      category: 'workshop',
      type: 'Interactive Workshop',
      date: addMonths(new Date(), 1),
      time: '10:00 AM - 12:00 PM EST',
      location: 'Online',
      capacity: 75,
      registered: 28,
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speaker: 'David Thompson',
      speakerTitle: 'Communication Coach',
      isFree: true,
      featured: false
    },
    {
      id: 6,
      title: 'Mindful Leadership Summit',
      description: 'A comprehensive summit exploring the intersection of mindfulness and leadership for sustainable success and well-being.',
      category: 'webinar',
      type: 'Virtual Summit',
      date: addMonths(new Date(), 1.5),
      time: '9:00 AM - 5:00 PM EST',
      location: 'Online',
      capacity: 1000,
      registered: 342,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      speaker: 'Alex Kim',
      speakerTitle: 'Mindfulness Expert',
      isFree: true,
      featured: true
    }
  ];

  const filteredEvents = upcomingEvents.filter(event => 
    selectedCategory === 'all' || event.category === selectedCategory
  );

  const featuredEvents = upcomingEvents.filter(event => event.featured);

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
            Free Events & Workshops
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of learners and professionals at these exclusive free events. Gain valuable insights, network with peers, and accelerate your growth.
          </p>
        </motion.div>

        {/* Featured Events Banner */}
        {featuredEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white"
          >
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiGift} className="h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">Featured Events</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredEvents.slice(0, 3).map((event, index) => (
                <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-sm text-blue-100 mb-2">
                    <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                    {format(event.date, 'MMM dd, yyyy')}
                  </div>
                  <div className="flex items-center text-sm text-blue-100">
                    <SafeIcon icon={FiClock} className="h-4 w-4 mr-1" />
                    {event.time}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Events</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FREE
                  </span>
                </div>
                {event.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {event.type}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <SafeIcon icon={FiUsers} className="h-4 w-4 mr-1" />
                    {event.registered}/{event.capacity}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-2 text-blue-500" />
                    {format(event.date, 'EEEE, MMMM dd, yyyy')}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <SafeIcon icon={FiClock} className="h-4 w-4 mr-2 text-blue-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <SafeIcon 
                      icon={event.location === 'Online' ? FiVideo : FiMapPin} 
                      className="h-4 w-4 mr-2 text-blue-500" 
                    />
                    {event.location}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <SafeIcon icon={FiMic} className="h-4 w-4 text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{event.speaker}</div>
                        <div className="text-xs text-gray-500">{event.speakerTitle}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center whitespace-nowrap">
                      Register Free
                      <SafeIcon icon={FiArrowRight} className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-2">
                    {event.capacity - event.registered} spots remaining
                  </div>
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
          className="bg-gray-900 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Never Miss an Event</h2>
          <p className="text-xl mb-8 text-gray-300">
            Subscribe to our newsletter and be the first to know about upcoming free events, workshops, and exclusive opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            Join 5,000+ professionals who get exclusive access to our events.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;