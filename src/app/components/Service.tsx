"use client";
import React from 'react';

export default function SpaReconnectSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-100 to-rose-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-0 left-0 w-48 h-48 opacity-40">
        <svg viewBox="0 0 200 200" className="w-full h-full text-green-600/20">
          <ellipse cx="100" cy="50" rx="80" ry="40" fill="currentColor"/>
        </svg>
      </div> */}
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-light">
            Unwind in Nature
          </p>
          <h2 className="text-5xl lg:text-6xl font-serif text-gray-800 italic">
            Reconnect
          </h2>
        </div>

        {/* Two Cards Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Left Card - Embrace Tranquility */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 8C15.31 8 18 10.69 18 14C18 17.31 15.31 20 12 20C8.69 20 6 17.31 6 14C6 10.69 8.69 8 12 8ZM12 10C9.79 10 8 11.79 8 14C8 16.21 9.79 18 12 18C14.21 18 16 16.21 16 14C16 11.79 14.21 10 12 10Z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif text-gray-800 mb-4 text-center italic">
              Embrace Tranquility
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center leading-relaxed mb-8">
              Our serene spa setting, inspired by the beauty of nature, is the perfect backdrop 
              for your journey to well-being
            </p>

            {/* Service Options */}
            <div className="grid grid-cols-2 gap-4">
              <button className="text-gray-700 hover:text-green-700 transition-colors duration-200 text-left font-medium">
                Massage
              </button>
              <button className="text-gray-700 hover:text-green-700 transition-colors duration-200 text-left font-medium">
                Facial
              </button>
            </div>
          </div>

          {/* Right Card - Renew and Revive */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,18.5C15.5,18.5 19,16.86 19,15V12.5C19,11.12 16.41,9.5 12,9.5C7.59,9.5 5,11.12 5,12.5V15C5,16.86 8.5,18.5 12,18.5M12,8C16.42,8 20,9.79 20,12C20,14.21 16.42,16 12,16C7.58,16 4,14.21 4,12C4,9.79 7.58,8 12,8M12,5.5C9.84,5.5 8.08,6.67 8.08,8.13C8.08,9.58 9.84,10.75 12,10.75C14.16,10.75 15.92,9.58 15.92,8.13C15.92,6.67 14.16,5.5 12,5.5Z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif text-gray-800 mb-4 text-center italic">
              Renew and Revive
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center leading-relaxed mb-8">
              Step into our wellness sanctuary and discover a haven of tranquility. Our range 
              of holistic services, from calming massages to nourishing facials
            </p>

            {/* Service Options */}
            <div className="grid grid-cols-2 gap-4">
              <button className="text-gray-700 hover:text-green-700 transition-colors duration-200 text-left font-medium">
                Sauna
              </button>
              <button className="text-gray-700 hover:text-green-700 transition-colors duration-200 text-left font-medium">
                Body Treatments
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="bg-green-200 hover:bg-green-300 text-green-800 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95">
            Book Your Experience
          </button>
        </div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-600/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-rose-300/20 rounded-full blur-3xl"></div>
    </section>
  );
}