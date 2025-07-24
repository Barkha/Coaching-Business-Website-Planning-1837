import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiStar, FiUsers, FiClock, FiTarget, FiTrendingUp } = FiIcons;

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: 'Basic Coaching',
      monthlyPrice: 99,
      annualPrice: 990,
      description: 'Perfect for individuals starting their coaching journey',
      features: [
        'Monthly group coaching sessions',
        'Email support within 48 hours',
        'Access to resource library',
        'Goal tracking tools',
        'Community forum access',
        'Monthly progress reports'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Coaching',
      monthlyPrice: 199,
      annualPrice: 1990,
      description: 'Ideal for professionals seeking accelerated growth',
      features: [
        'Bi-weekly 1-on-1 coaching sessions',
        'Priority email & phone support',
        'Custom action plans',
        'Progress analytics dashboard',
        'Quarterly strategy sessions',
        'Access to exclusive workshops',
        'Peer networking opportunities',
        'Resource library + premium content'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: '1-on-1 Premium',
      monthlyPrice: 399,
      annualPrice: 3990,
      description: 'Maximum support for serious achievers',
      features: [
        'Weekly 1-on-1 coaching sessions',
        '24/7 priority support',
        'Completely personalized curriculum',
        'Unlimited resource access',
        'Monthly deep-dive strategy sessions',
        'Direct coach communication',
        'Custom tools and assessments',
        'VIP workshop access',
        'Success guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: FiTarget,
      title: 'Achieve Your Goals Faster',
      description: 'Our proven methodology helps you reach your objectives 3x faster than going alone.'
    },
    {
      icon: FiUsers,
      title: 'Expert Guidance',
      description: 'Work with certified coaches who have helped thousands achieve success.'
    },
    {
      icon: FiTrendingUp,
      title: 'Measurable Results',
      description: 'Track your progress with detailed analytics and regular assessments.'
    },
    {
      icon: FiClock,
      title: 'Flexible Scheduling',
      description: 'Book sessions at times that work for your busy schedule.'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Marketing Director',
      content: 'The Professional plan gave me the structure I needed. I was promoted within 8 months!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'David Thompson',
      role: 'Entrepreneur',
      content: 'Premium coaching was worth every penny. My business revenue doubled in the first year.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const getPrice = (plan) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan) => {
    const annualTotal = plan.monthlyPrice * 12;
    return annualTotal - plan.annualPrice;
  };

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
            Choose Your Coaching Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Invest in yourself with our proven coaching programs. Join thousands of successful individuals who have transformed their lives and careers.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
                Save up to 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500 transform scale-105'
                  : selectedPlan === plan.id
                  ? 'border-blue-300'
                  : 'border-gray-200'
              } hover:shadow-xl cursor-pointer`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ${getPrice(plan)}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-green-600 text-sm font-medium mt-1">
                      Save ${getSavings(plan)} per year
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors ${
                    selectedPlan === plan.id
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Coaching Programs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={benefit.icon} className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our community of achievers and start your transformation today.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your {plans.find(p => p.id === selectedPlan)?.name} Journey
          </button>
          <p className="text-blue-100 mt-4">
            30-day money-back guarantee • Cancel anytime • No setup fees
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Subscription;