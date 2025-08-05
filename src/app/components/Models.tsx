"use client";
import React from 'react';

export default function SpaServicesDetailSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-stone-50">
      <div className="container mx-auto px-6 space-y-20">
        
        {/* Massage Therapy Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/left.jpeg" 
                alt="Massage therapy session" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Small Heading */}
            <p className="text-sm uppercase tracking-wider text-gray-500 font-light">
              Relax and Unwind
            </p>
            
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
              Massage
              <br />
              <span className="italic text-green-700">Therapy</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-700 leading-relaxed max-w-md">
              Indulge in our therapeutic massage treatments, 
              where skilled therapists use gentle, flowing 
              techniques to alleviate muscle tension, improve 
              circulation, and promote deep relaxation
            </p>
            
            {/* CTA Button */}
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 uppercase tracking-wide">
              Book Now
            </button>
          </div>
        </div>

        {/* Facial Treatments Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-6">
            {/* Small Heading */}
            <p className="text-sm uppercase tracking-wider text-gray-500 font-light">
              Revitalize Your Skin
            </p>
            
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
              Facial
              <br />
              <span className="italic text-green-700">Treatments</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-700 leading-relaxed max-w-md">
              Treat your skin to our luxurious facial treatments, 
              tailored to your unique needs. Our expert estheticians 
              use only the finest natural ingredients to deeply cleanse, 
              nourish, and rejuvenate your complexion
            </p>
            
            {/* CTA Button */}
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 uppercase tracking-wide">
              Book Now
            </button>
          </div>
          
          {/* Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/right.jpeg" 
                alt="Facial treatment session" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}