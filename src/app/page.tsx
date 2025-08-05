"use client";
import React, { useState, useEffect } from 'react';
import SpaServicesSection from '@/app/components/About';
import SpaDiscoverSection from '@/app/components/Showcase';
import SpaReconnectSection from '@/app/components/Service';
import SpaServicesDetailSection from '@/app/components/Models';
import SpaFooter from './components/Footer';

export default function SpaHeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-stone-50 to-green-50">
      {/* Fixed Header with Scroll Effects */}
      {/* Fixed Header with Scroll Effects */}
<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
  isScrolled 
    ? 'backdrop-blur-xl bg-gradient-to-r from-rose-100/85 via-blue-100/85 to-purple-100/85 shadow-xl' 
    : 'bg-transparent'
}`}>
  {/* Watercolor Background Elements - Only visible when scrolled */}
  <div className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${
    isScrolled ? 'opacity-100' : 'opacity-0'
  }`}>
    {/* Large Watercolor Blobs - Hidden on small screens */}
    <div className="hidden sm:block absolute -top-20 -left-20 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-rose-200/40 to-pink-300/40 rounded-full blur-3xl animate-float-slow"></div>
    <div className="hidden md:block absolute -top-10 left-1/3 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-br from-blue-200/40 to-cyan-300/40 rounded-full blur-2xl animate-float-delayed"></div>
    <div className="hidden lg:block absolute -top-16 right-1/4 w-32 sm:w-36 h-32 sm:h-36 bg-gradient-to-br from-purple-200/40 to-indigo-300/40 rounded-full blur-3xl animate-float"></div>
    <div className="hidden sm:block absolute -top-12 -right-16 w-24 sm:w-28 h-24 sm:h-28 bg-gradient-to-br from-green-200/40 to-emerald-300/40 rounded-full blur-2xl animate-float-reverse"></div>
    
    {/* Mobile-optimized smaller watercolor spots */}
    <div className="absolute -top-4 left-1/4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br from-yellow-200/30 to-orange-300/30 rounded-full blur-lg sm:blur-xl animate-pulse"></div>
    <div className="absolute -top-2 right-1/3 w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 bg-gradient-to-br from-teal-200/30 to-cyan-300/30 rounded-full blur-md sm:blur-lg animate-float-slow"></div>
    
    {/* Mobile-specific subtle watercolor elements */}
    <div className="sm:hidden absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-100/20 via-transparent to-purple-100/20"></div>
  </div>

  <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative z-10">
    <div className="flex justify-between items-center">
      {/* Logo - Responsive sizing */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <img 
          src="/logo.png" 
          alt="Beauty Secret Logo" 
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
        />
        <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-semibold transition-colors duration-300 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <span className="hidden sm:inline">Beauty Secret</span>
          <span className="sm:hidden">Beauty</span>
        </h1>
      </div>
      
      {/* Desktop Navigation Menu */}
      <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
        <a href="#" className={`transition-colors duration-300 text-sm xl:text-base font-medium ${
          isScrolled 
            ? 'text-gray-700 hover:text-rose-600' 
            : 'text-white hover:text-green-600'
        }`}>
          Home
        </a>
        <a href="#" className={`transition-colors duration-300 text-sm xl:text-base font-medium ${
          isScrolled 
            ? 'text-gray-700 hover:text-rose-600' 
            : 'text-white hover:text-green-600'
        }`}>
          About
        </a>
        <a href="#" className={`transition-colors duration-300 text-sm xl:text-base font-medium ${
          isScrolled 
            ? 'text-gray-700 hover:text-rose-600' 
            : 'text-white hover:text-green-600'
        }`}>
          Services
        </a>
        <a href="#" className={`transition-colors duration-300 text-sm xl:text-base font-medium ${
          isScrolled 
            ? 'text-gray-700 hover:text-rose-600' 
            : 'text-white hover:text-green-600'
        }`}>
          Contact
        </a>
        <button className={`px-4 py-2 xl:px-6 xl:py-2 rounded-full transition-all duration-300 hover:shadow-md transform hover:scale-105 text-sm xl:text-base font-medium ${
          isScrolled
            ? 'bg-gradient-to-r from-rose-200 to-purple-200 hover:from-rose-300 hover:to-purple-300 text-gray-800'
            : 'bg-green-200 hover:bg-green-300 text-green-800'
        }`}>
          Book
        </button>
      </div>

      {/* Tablet Navigation - Simplified */}
      <div className="hidden md:flex lg:hidden items-center space-x-4">
        <button className={`px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md transform hover:scale-105 text-sm font-medium ${
          isScrolled
            ? 'bg-gradient-to-r from-rose-200 to-purple-200 hover:from-rose-300 hover:to-purple-300 text-gray-800'
            : 'bg-green-200 hover:bg-green-300 text-green-800'
        }`}>
          Book Now
        </button>
        
        {/* Hamburger Menu for Tablet */}
        <button className={`transition-colors duration-300 p-2 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className={`md:hidden transition-colors duration-300 p-2 rounded-lg ${
        isScrolled 
          ? 'text-gray-800 hover:bg-gray-100/50' 
          : 'text-white hover:bg-white/10'
      }`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    {/* Mobile Navigation Menu - Collapsible */}
    <div className="md:hidden mt-4 pt-4 border-t border-white/10 hidden" id="mobile-menu">
      <div className="flex flex-col space-y-3">
        <a href="#" className={`text-center py-2 rounded-lg transition-colors duration-300 ${
          isScrolled 
            ? 'text-gray-700 hover:bg-gray-100/50' 
            : 'text-white hover:bg-white/10'
        }`}>
          Home
        </a>
        <a href="#" className={`text-center py-2 rounded-lg transition-colors duration-300 ${
          isScrolled 
            ? 'text-gray-700 hover:bg-gray-100/50' 
            : 'text-white hover:bg-white/10'
        }`}>
          About
        </a>
        <a href="#" className={`text-center py-2 rounded-lg transition-colors duration-300 ${
          isScrolled 
            ? 'text-gray-700 hover:bg-gray-100/50' 
            : 'text-white hover:bg-white/10'
        }`}>
          Services
        </a>
        <a href="#" className={`text-center py-2 rounded-lg transition-colors duration-300 ${
          isScrolled 
            ? 'text-gray-700 hover:bg-gray-100/50' 
            : 'text-white hover:bg-white/10'
        }`}>
          Contact
        </a>
        <button className={`mx-4 mt-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
          isScrolled
            ? 'bg-gradient-to-r from-rose-200 to-purple-200 text-gray-800'
            : 'bg-green-200 text-green-800'
        }`}>
          Book Appointment
        </button>
      </div>
    </div>
  </nav>

  {/* Watercolor Drip Effect - Responsive */}
  <div className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 transition-opacity duration-500 ${
    isScrolled ? 'opacity-100' : 'opacity-0'
  }`}>
    <div className="h-full bg-gradient-to-r from-rose-300/40 via-blue-300/40 via-purple-300/40 to-green-300/40 blur-sm"></div>
  </div>
</header>

      
     {/* Hero Section */}
<section className="min-h-screen flex items-center relative overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: 'url("/girls1.jpeg")',
    }}
  >
    {/* Responsive overlay for better text contrast */}
    <div className="absolute inset-0 bg-black/30 sm:bg-black/20"></div>
  </div>

  {/* Hero Content Container */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full pt-20 pb-10 lg:pt-0 lg:pb-0">
      
      {/* Left side - Empty space on desktop, hidden on mobile */}
      <div className="hidden lg:block"></div>
      
      {/* Right side - Hero Content */}
      <div className="flex justify-center lg:justify-start">
        <div className="w-full max-w-lg lg:max-w-xl">
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-2xl border border-white/20">
            
            {/* Small Heading */}
            <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-3 sm:mb-4 font-light text-center lg:text-left">
              Discover the Art of Relaxation
            </p>
            
            {/* Large Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-gray-800 mb-4 sm:mb-6 leading-tight text-center lg:text-left">
              Welcome to Our
              <span className="block text-green-700 italic">Sanctuary</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed text-center lg:text-left">
              Step into a world of tranquility and rejuvenation at our premium spa, where wellness meets luxury.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto max-w-xs">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative Elements - Responsive positioning */}
  <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10">
    <div className="flex flex-col items-center text-white/80">
      <span className="text-xs sm:text-sm mb-2 hidden sm:block">Scroll to explore</span>
      <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>

  {/* Mobile-specific decorative elements */}
  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 lg:hidden">
    <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-full"></div>
  </div>
  
  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 lg:hidden">
    <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-full"></div>
  </div>

  {/* Additional responsive background elements */}
  <div className="absolute top-20 left-8 sm:left-16 lg:left-24 z-10">
    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/40 rounded-full animate-pulse"></div>
  </div>
  
  <div className="absolute top-32 right-8 sm:right-16 lg:right-24 z-10">
    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full animate-pulse delay-300"></div>
  </div>
  
  <div className="absolute bottom-32 left-12 sm:left-20 lg:left-32 z-10">
    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/50 rounded-full animate-pulse delay-700"></div>
  </div>
</section>

      {/* Additional Content Section */}
      <SpaServicesSection />
      <SpaDiscoverSection />
      <SpaReconnectSection />
      <SpaServicesDetailSection />
      <SpaFooter />

      {/* Custom CSS for watercolor floating animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10px, -10px) scale(1.05); }
          66% { transform: translate(-5px, 5px) scale(0.95); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-8px, -15px) scale(1.1); }
          66% { transform: translate(12px, 8px) scale(0.9); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -20px) scale(1.08); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-12px, 10px) scale(0.95); }
          75% { transform: translate(8px, -12px) scale(1.05); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite 4s;
        }
        
        .animate-float-reverse {
          animation: float-reverse 9s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
}