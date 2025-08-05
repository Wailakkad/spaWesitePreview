"use client";
import React from 'react';


export default function SpaFooter() {
  return (
    <footer className="bg-gradient-to-br from-sage-100 to-green-100 py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo Icon */}
              <img src="/logo.png" alt="" className='w-22 h-22' />
            </div>
            
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              <p>© 2025 Beauty Spa, Inc.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Explore More */}
          <div>
            <h3 className="text-gray-800 font-medium mb-6 text-lg">
              Explore More
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h3 className="text-gray-800 font-medium mb-6 text-lg">
              Connect with Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-gray-800 font-medium mb-6 text-lg">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@beautyspa.com" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  Phone
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  Address
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
                  Directions
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-green-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>Crafted with care for your wellness journey</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-700 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-700 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}