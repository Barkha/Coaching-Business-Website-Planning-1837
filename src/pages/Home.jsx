import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../theme/ThemeProvider';

const { FiArrowRight, FiUsers, FiTarget, FiTrendingUp, FiStar, FiCheck } = FiIcons;

const Home = () => {
  const theme = useTheme();
  
  const features = [
    {
      icon: FiTarget,
      title: "Goal-Oriented Approach",
      description: "We help you set clear, achievable goals and create actionable plans to reach them."
    },
    {
      icon: FiUsers,
      title: "Expert AI Coaching",
      description: "Our advanced AI coaches provide personalized guidance tailored to your unique needs and challenges."
    },
    {
      icon: FiTrendingUp,
      title: "Proven Results",
      description: "Track your progress with measurable outcomes and continuous improvement strategies."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "The AI coaching program transformed my approach to technical interviews. I landed a senior role at a top tech company after just 6 weeks!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content: "WitVoices helped me develop leadership skills I never knew I had. The personalized feedback was exactly what I needed to advance my career.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Tech Startup Founder",
      content: "The basic program was perfect for getting started. The AI coach helped me refine my pitch and secure our first round of funding.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                AI-Powered Career Coaching for Tech Professionals
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Unlock your potential with personalized AI coaching designed to elevate your skills, advance your career, and help you achieve your professional goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/subscription"
                  className="bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Journey
                  <SafeIcon icon={FiArrowRight} className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/courses"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-500 transition-colors inline-flex items-center justify-center"
                >
                  View Courses
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI-powered coaching session"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose {theme.name}?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tired of generic advice that doesn't address your specific career challenges?
              <br />
              Our AI-powered platform delivers personalized coaching that evolves with you, providing guidance when you need it most.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={feature.icon} className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Program</h2>
            <p className="text-xl text-gray-600">
              Select the AI coaching program that best fits your needs and goals.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Career Starter",
                price: "$49",
                features: [
                  "Weekly AI coaching sessions",
                  "Resume optimization",
                  "Interview preparation",
                  "Job search strategy"
                ]
              },
              {
                name: "Professional Growth",
                price: "$99",
                features: [
                  "Unlimited AI coaching",
                  "Leadership skill development",
                  "Performance optimization",
                  "Career advancement planning"
                ]
              },
              {
                name: "Executive Path",
                price: "$199",
                features: [
                  "Unlimited AI coaching",
                  "Executive presence training",
                  "Strategic thinking development",
                  "1-on-1 human expert sessions"
                ]
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-lg shadow-lg border-2 ${
                  index === 1
                    ? 'border-primary-500 transform scale-105'
                    : 'border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                <div className="text-4xl font-bold text-primary-500 mb-6">
                  {program.price}<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/subscription"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-block text-center ${
                    index === 1
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Real results from real tech professionals who transformed their careers with our AI coaching.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-400 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of tech professionals who have transformed their careers with our AI-powered coaching platform.
            </p>
            <Link
              to="/subscription"
              className="bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Your Journey Today
              <SafeIcon icon={FiArrowRight} className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;