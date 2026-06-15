"use client";

import React from 'react';
import { FaShieldAlt, FaBolt, FaMagic, FaLaptop, FaStar, FaCrown, FaCheck } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section id = "home" className="relative min-h-screen w-full bg-slate-50 text-slate-900 overflow-hidden flex items-center justify-center py-12 sm:py-20 lg:py-32">
      
      {/* 🌟 Soft Glowing Gradient Background Blobs (Opacities adjusted for light mode) */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#00c4cc]/10 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none content-['']" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#7b2ff7]/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none content-['']" />
      <div className="absolute top-[25%] right-[20%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[#ff4fd8]/5 rounded-full blur-[90px] sm:blur-[150px] pointer-events-none content-['']" />

      {/* Subtle Background Grid Pattern for Depth (Color changed to dark) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT SIDE CONTENT ================= */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/80 backdrop-blur-md text-xs sm:text-sm font-medium text-slate-700 animate-fade-in shadow-[0_2px_10px_rgba(0,196,204,0.08)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c4cc] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c4cc]"></span>
              </span>
              🔥 Canva Premium Access
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-950 max-w-2xl">
              Create Insanely Beautiful Designs with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] bg-[size:200%_auto] hover:bg-right transition-all duration-1000">
                Canva Premium Plans
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-light">
              Unlock premium Canva features instantly on your email. Use on Mobile & Desktop with AI tools, templates, and pro editing features.
            </p>

            {/* Feature Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md sm:max-w-xl">
              {[
                { label: 'Multi Device Access (Mobile + PC)', icon: FaLaptop },
                { label: 'Secure Activation', icon: FaShieldAlt },
                { label: 'Instant Setup', icon: FaBolt },
                { label: 'AI Design Tools', icon: FaMagic },
              ].map((chip, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-white border border-slate-100 hover:border-slate-200 px-4 py-3.5 rounded-2xl transition-all duration-300 group hover:bg-slate-50 shadow-sm hover:shadow-md"
                >
                  <div className="p-2 rounded-xl bg-gradient-to-br from-slate-100 to-transparent group-hover:from-[#7b2ff7]/10 group-hover:to-[#00c4cc]/10 transition-all duration-300">
                    <chip.icon className="w-4 h-4 text-[#00c4cc] group-hover:text-[#ff4fd8] transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-slate-950 transition-colors duration-300">{chip.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <button className="relative group overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] text-white font-bold tracking-wide shadow-[0_4px_20px_rgba(123,47,247,0.3)] hover:shadow-[0_4px_25px_rgba(255,79,216,0.5)] transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-52">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ff4fd8] via-[#7b2ff7] to-[#00c4cc] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                <span className="relative z-10">Get Started</span>
              </button>
              
              <button className="px-8 py-4 rounded-xl bg-white border border-slate-200 backdrop-blur-md text-slate-900 font-semibold tracking-wide hover:bg-slate-50 hover:border-slate-300 transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-52 shadow-sm">
                View Pricing
              </button>
            </div>

            {/* Trust Text */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4 border-t border-slate-200 w-full max-w-md sm:max-w-xl lg:max-w-none">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00c4cc] to-[#7b2ff7] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">JD</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7b2ff7] to-[#ff4fd8] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">AM</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff4fd8] to-[#00c4cc] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">KR</div>
              </div>
              <div className="flex flex-col items-start text-left">
                <div className="flex text-amber-500 text-xs gap-0.5">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                  Trusted by <span className="text-slate-900 font-bold">1000+ creators</span> and designers
                </p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE CONTENT ================= */}
          <div className="lg:col-span-5 flex justify-center relative w-full pt-8 lg:pt-0">
            
            {/* Outer glowing frame for the pricing card */}
            <div className="relative w-full max-w-sm p-[1px] rounded-3xl bg-gradient-to-b from-slate-200 via-slate-100 to-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] group">
              
              {/* Card Aura Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00c4cc] via-[#7b2ff7] to-[#ff4fd8] opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

              {/* Glassmorphism pricing card inner (Light version) */}
              <div className="relative rounded-[23px] bg-white/90 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">
                
                {/* "Best Seller" Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#7b2ff7] to-[#ff4fd8] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md border border-white/10">
                  Best Seller
                </div>

                {/* Card Title & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-[#00c4cc]/10 to-[#7b2ff7]/10 border border-slate-100">
                    <FaCrown className="w-6 h-6 text-[#00c4cc]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950">Canva Premium</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#ff4fd8] mt-0.5">
                      AI Tools • Templates • Pro Editing
                    </p>
                  </div>
                </div>

                <hr className="border-slate-100 my-5" />

                {/* Core Perks Checklist */}
                <div className="space-y-3.5 mb-8">
                  {[
                    '100+ Million Premium Assets',
                    'Magic Studio AI Features Suite',
                    'Brand Kit & Custom Typography',
                    'Background Remover Tool',
                    'Cloud Storage & Direct Publishing',
                  ].map((perk, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="mt-0.5 p-0.5 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200">
                        <FaCheck className="w-3 h-3" />
                      </div>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Price Highlight */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-6 flex items-center justify-between shadow-inner">
                  <div>
                    <p className="text-xs font-medium text-slate-600 uppercase tracking-wider">Access Plan</p>
                    <p className="text-xs text-slate-500 mt-0.5">Instant Digital Delivery</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">₹89</p>
                    <p className="text-xs font-medium text-[#00c4cc] mt-0.5">/ month</p>
                  </div>
                </div>

                {/* Card CTA Button */}
                <button className="w-full relative group/btn overflow-hidden py-4 rounded-xl bg-gradient-to-r from-[#00c4cc] to-[#7b2ff7] text-white font-bold tracking-wide shadow-lg transition-all duration-300 transform active:scale-95">
                   <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#7b2ff7] to-[#ff4fd8] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ease-out" />
                   <span className="relative z-10">Activate Now</span>
                </button>

                {/* Guarantee Note */}
                <p className="text-[11px] text-center text-slate-500 mt-4 font-medium tracking-wide">
                  🔒 Secure payment. Cancel anytime hassle-free.
                </p>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}