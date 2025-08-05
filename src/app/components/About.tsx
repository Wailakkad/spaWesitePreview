"use client";
import React from 'react';

export default function SpaServicesSection() {
  const services = [
    {
      id: 1,
      title: "Massage",
      description: "Immerse yourself in the therapeutic benefits of our massage treatments, where skilled therapists use gentle techniques to release tension and restore balance to your body and mind.",
      icon: "💆‍♀️",
      color: "from-green-100 to-green-200"
    },
    {
      id: 2,
      title: "Facial",
      description: "Revitalize your skin with our rejuvenating facial treatments, tailored to your unique needs and designed to leave you with a radiant, healthy glow that shines from within.",
      icon: "✨",
      color: "from-sage-100 to-sage-200"
    },
    {
      id: 3,
      title: "Sauna",
      description: "Unwind and detoxify in our tranquil sauna, where you can enjoy the soothing warmth and a moment of peaceful solitude to cleanse both body and spirit.",
      icon: "🧖‍♀️",
      color: "from-stone-100 to-stone-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-green-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-green-700 mb-4 font-light">
            Indulge in Our Holistic Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 mb-6">
            Elevate Your <span className="italic text-green-700">Well-being</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our wide range of expertly-crafted treatments, from soothing 
            massages and revitalizing facials to luxurious sauna experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 overflow-hidden`}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Service Icon/Logo */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-serif text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-green-700 font-medium group-hover:text-green-800 transition-colors duration-300">
                  <span className="mr-2">Learn More</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-200/30 to-green-300/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8 text-lg">
            Ready to begin your journey to wellness?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
              Book Your Treatment
            </button>
            <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}