"use client";
import React from 'react';
import Image from 'next/image';


export default function SpaDiscoverSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icon - Top Left */}
      <div className="absolute top-20 left-20 z-10 animate-float">
        <div className="relative">
          <Image 
            src="/icon.png" 
            alt="Spa Icon" 
            width={60} 
            height={60} 
            className="drop-shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-white/20 rounded-full blur-sm -z-10 animate-pulse"></div>
        </div>
      </div>

      {/* Additional Floating Icons for Enhanced Effect */}
      <div className="absolute top-1/3 right-20 z-10 animate-float-delayed">
        <div className="relative">
          <Image 
            src="/icon.png" 
            alt="Spa Icon" 
            width={40} 
            height={40} 
            className="drop-shadow-md opacity-60 hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-rose-200/30 rounded-full blur-sm -z-10 animate-pulse"></div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-32 z-10 animate-float-slow">
        <div className="relative">
          <Image 
            src="/icon.png"
            alt="Spa Icon" 
            width={35} 
            height={35} 
            className="drop-shadow-md opacity-50 hover:opacity-70 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-amber-200/30 rounded-full blur-sm -z-10 animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-1 text-center lg:text-left space-y-6">
            {/* Small Heading */}
            <div className="inline-block">
              <span className="text-black text-sm font-medium tracking-wide uppercase bg-rose-50 px-4 py-2 rounded-full">
                Discover the Difference
              </span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Elevate
              <span className="block text-[#a3b18a]">Your</span>
              <span className="block text-[#d4a373]">Wellness</span>
            </h1>

            {/* Description Text */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Our experienced team of wellness professionals is dedicated to guiding you on a transformative
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#ccd5ae] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-rose-600 hover:to-amber-600">
                Book Now
              </button>
            </div>
          </div>

          {/* Center - Image */}
          <div className="lg:col-span-1 relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/img.jpg" 
                alt="Spa Experience" 
                className="w-full h-full object-cover"
              />
              {/* Image Overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Icon on Image */}
            <div className="absolute -top-4 -right-4 animate-float-reverse">
              <div className="relative">
                <Image 
                  src="/icon.png" 
                  alt="Spa Icon" 
                  width={50} 
                  height={50} 
                  className="drop-shadow-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-white/40 rounded-full blur-md -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="lg:col-span-1 space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              At our premium spa, we believe in the power of holistic wellness to restore balance and vitality.
              Escape the everyday and immerse yourself in a sanctuary of serenity, where every detail is
              thoughtfully designed to promote deep relaxation and rejuvenation. Our skilled therapists and
              wellness experts are here to guide you on a transformative journey, tailoring each experience
              to your unique needs.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-50/50 to-transparent"></div>

      {/* Custom CSS for floating animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite 4s;
        }
        
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
}