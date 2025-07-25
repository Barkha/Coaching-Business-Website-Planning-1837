import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Logo from './Logo';
import { useTheme } from '../theme/ThemeProvider';

const { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } = FiIcons;

const Footer = () => {
  const theme = useTheme();
  
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Logo variant="light" className="mb-4" />
            <p className="text-gray-300 mb-4">
              {theme.tagline}
            </p>
            <div className="flex space-x-4">
              <a href={theme.socialMedia.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <SafeIcon icon={FiFacebook} className="h-5 w-5 text-gray-400 hover:text-primary-300 cursor-pointer transition-colors" />
              </a>
              <a href={theme.socialMedia.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <SafeIcon icon={FiTwitter} className="h-5 w-5 text-gray-400 hover:text-primary-300 cursor-pointer transition-colors" />
              </a>
              <a href={theme.socialMedia.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <SafeIcon icon={FiLinkedin} className="h-5 w-5 text-gray-400 hover:text-primary-300 cursor-pointer transition-colors" />
              </a>
              <a href={theme.socialMedia.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <SafeIcon icon={FiInstagram} className="h-5 w-5 text-gray-400 hover:text-primary-300 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/subscription" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Career Starter</span></li>
              <li><span className="text-gray-300">Professional Growth</span></li>
              <li><span className="text-gray-300">Executive Path</span></li>
              <li><span className="text-gray-300">Custom Enterprise Solutions</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <SafeIcon icon={FiMail} className="h-5 w-5 text-primary-300 mr-3" />
                <span className="text-gray-300">hello@WitVoices.ai</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiPhone} className="h-5 w-5 text-primary-300 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiMapPin} className="h-5 w-5 text-primary-300 mr-3" />
                <span className="text-gray-300">123 AI Avenue, Suite 100</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {theme.name}. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;