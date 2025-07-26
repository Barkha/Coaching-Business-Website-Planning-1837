import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../theme/ThemeProvider';

const { FiArrowRight, FiUsers, FiTarget, FiTrendingUp, FiStar, FiCheck } = FiIcons;

const Home = () => {
  const theme = useTheme();
  
  const videotestimonials = [
    {
      video: "Tatiana.mp4",
      name: "Tatiana Montenegro",
      title: "Sr. Sales Executive, Juniper Networks",
      description: "Hello My name is Tatiana Montenegro and WitToast has allowed me to go from zero to presentation in three months. So I am extremely excited to be part of the team and the group, and as I finish my first talk, I am very fortunate to have found WitToast and I've been able to organize the presentation and actually do it, and obviously get feedback from my presentation on how I can improve it and make the next ones better. I highly recommend it."
    }
  ]
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
      <section className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Empowering Women in Tech to Take the Stage at Conferences
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Unlock your potential with personalized public speaking training designed to elevate your skills, advance your career, and help you achieve your professional goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/subscription"
                  className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center justify-center"
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
                src="/hero-1.png"
                alt="WitVoices: Find your voice!"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-5 bg-accent-300">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
        <div className="grid grid-cols-1 md:grid-cols-6 text-center">
          <img src="/clients/amazon-rect.png" alt="Amazon" style={{ height:100, width:140 }} />
          <img src="/clients/Juniper-Networks-rect.png" alt="Juniper" style={{ height:100, width:140 }} />
          <img src="/clients/Miami-Dade-rect.png" alt="Miami Dade" style={{ height:100, width:140 }} />
          <img src="/clients/microsoft-rect.png" alt="Microsoft" style={{ height:100, width:140 }} />
          <img src="/clients/paloalto-rect.png" alt="Palo Alto" style={{ height:100, width:140 }} />
          <img src="/clients/startree-rect.png" alt="StarTree" style={{ height:100, width:140 }} />
        </div>
        </motion.div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-primary-500 text-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
        <h2 className="text-4xl font-bold text-accent-50 mb-4">Ready to transform your career via Public Speaking?</h2>
        <p className="mb-5">Are you ready to make your mark on the tech industry? Do you dream of sharing your expertise and insights on a prestigious stage?</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src="Tatiana-1.jpg" alt="Tatianan Speaking" />
          </div>
          <div className="text-left ml-10 mt-10">
            <h4>Why This Program?</h4>
            <p>WiTVoices exists to address the gender disparity in tech conference speakers. The program was born out of the need to empower more women in tech to confidently share their expertise on global stages.</p>
            <p>Despite the growing number of women in tech, they are underrepresented in speaking roles at conferences and events. This program seeks to change that by providing the necessary tools, resources, and support.</p>
            <p>By increasing the visibility of women in tech, WiTVoices not only helps individuals grow their careers but also inspires future generations and drives diversity in the industry.</p>
          </div>
          <div className="text-right mr-10 mt-10">
            <h4>How Does It Works?</h4>
            <p>Self-Paced Courses: Access a library of courses designed to help members build their public speaking skills, from topic selection to mastering delivery techniques.</p>
            <p>Weekly Group Coaching: Engage in interactive coaching sessions that provide feedback, foster peer learning, and build confidence through regular practice.</p>
            <p>Quarterly In-Person Events: Participate in events that offer real-world speaking opportunities, allowing members to put their skills into practice in a supportive environment.</p>
          </div>
            <div>
            <img src="group-1.jpg" alt="WiTVoices Speaking Event" />
          </div>
          <div>
            <img src="grou-2.jpg" alt="Keynote Speaker" />
          </div>
          <div className="text-left ml-10 mt-10">
            <h4>Who Is It For?</h4>
            <p>WiTVoices is designed for women in tech who are passionate about sharing their knowledge and expertise on a larger platform. It caters to:</p>
            <p>Tech Enthusiasts and Professionals: Women looking to establish themselves as thought leaders in their field.</p>
            <p>Educators and Students: Those who want to enhance their public speaking skills and share their insights with a broader audience.</p>
            <p>Community Leaders: Women who are leading initiatives and want to amplify their message.</p>
            <p>While focused on women in tech, the program is open to anyone who supports the mission of increasing diversity on conference stages.</p>          </div>
          <div className="text-right mr-10 mt-10">
            <h4>Training Details</h4>
            <p>WiTVoices offers free webinars, self paced courses as well as annual membership, providing ongoing support and resources throughout the year.</p>
            <p>Group coaching sessions are held every week, offering continuous improvement opportunities.</p>
            <p>In-person events are scheduled four times a year, allowing members to speak and network in different locations.</p>
            <p>The self-paced courses can be accessed at any time, allowing members to progress according to their own schedules.</p>
            <p>Members are encouraged to apply to conferences and practice regularly, with WiTVoices offering guidance and feedback as needed.</p>
          </div>
          <div>
            <img src="group-3.jpg" alt="Community" />
          </div>
        </div>
        </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
          <h2 className="text-4xl font-bold text-primary-600 mb-4">Member Success Stories</h2>            
          </motion.div>
          {testimonials.map((testimonial, index) => (
<div></div>
          ))}
          <div className="flex gap-8 mb-8">
            <div>
              <video widht="250" controls>
                <source src="/video/Tatiana.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-primary-600 content-center">
            <h3 className="text-xl font-semibold mb-4">Tatiana Montenegro</h3>
            <h5 className="mb-3">Sr. Sales Executive, Juniper Networks</h5>
            <p>Hello My name is Tatiana Montenegro and WitToast has allowed me to go from zero to presentation in three months.</p>
            <p>So I am extremely excited to be part of the team and the group, and as I finish my first talk, I am very fortunate to have found WitToast and I've been able to organize the presentation and actually do it, and obviously get feedback from my presentation on how I can improve it and make the next ones better. I highly recommend it.</p>
            </div>
          </div>
          <hr/>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-primary-600">
            <h3 className="text-xr font-semibold mb-4">Reneida Leon</h3>
            <h5 className="mb-3">Sr. Sales Executive, Juniper Networks</h5>
            <p>Hello My name is Tatiana Montenegro and WitToast has allowed me to go from zero to presentation in three months.</p>
            <p>So I am extremely excited to be part of the team and the group, and as I finish my first talk, I am very fortunate to have found WitToast and I've been able to organize the presentation and actually do it, and obviously get feedback from my presentation on how I can improve it and make the next ones better. I highly recommend it.</p>
            </div>
            <div>
              <video className="text-right, right" width="250" controls>
                <source src="/video/Reneida.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <hr/>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <video className="text-right, right" width="250" controls>
                <source src="/video/Pallavi.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-primary-600">
            <h3 className="text-xl font-semibold mb-4">Tatiana Montenegro</h3>
            <h5 className="mb-3">Sr. Sales Executive, Juniper Networks</h5>
            <p>Hello My name is Tatiana Montenegro and WitToast has allowed me to go from zero to presentation in three months.</p>
            <p>So I am extremely excited to be part of the team and the group, and as I finish my first talk, I am very fortunate to have found WitToast and I've been able to organize the presentation and actually do it, and obviously get feedback from my presentation on how I can improve it and make the next ones better. I highly recommend it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-accent-50 mb-4">Choose Your Program</h2>
            <p className="text-xl text-accent-50">
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
                price: "$97",
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
                className={`bg-accent-50 p-8 rounded-lg shadow-lg border-2 ${
                  index === 1
                    ? 'border-primary-500 transform scale-105'
                    : 'border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-2">{program.name}</h3>
                <div className="text-4xl font-bold text-primary-500 mb-6">
                  {program.price}<span className="text-lg text-primary-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-primary-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/subscription"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-block text-center ${
                    index === 1
                      ? 'bg-accent-500 text-white hover:bg-primary-600'
                      : 'bg-secondary-300 text-gray-900 hover:bg-gray-200'
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
      <section className="py-20 bg-accent-300">
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
      <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
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