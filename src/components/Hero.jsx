import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Flame, Hammer, Sparkles } from 'lucide-react';
import RoofingMockup3D from './RoofingMockup3D';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-orange-500/15 via-amber-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-orange-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Main Grid: Copy on Left, 3D Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning & Copy */}
          <div className="lg:col-span-6 space-y-7 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-orange-500/30 shadow-lg shadow-orange-500/10 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-orange-300 tracking-wide uppercase">
                Bespoke Web Design For US Contractors
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.15]">
              Custom Websites That Help{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                  Contractors Stand Out.
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-orange-500/40"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-xl">
              I design and build professional, mobile-friendly websites for roofing and remodeling businesses that want to showcase their work, build trust, and make it easier for homeowners to get in touch.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 rounded-xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Discuss Your Website Project</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 hover:border-orange-500/40 rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                <span>Explore My Work</span>
              </a>
            </div>

            {/* Trust Points / Highlights */}
            <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="text-xl font-bold text-white font-mono">$2,500</div>
                <div className="text-xs text-zinc-400">Fixed Project Rate</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold text-orange-400 font-mono">2-3 Weeks</div>
                <div className="text-xs text-zinc-400">Fast Turnaround</div>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <div className="text-xl font-bold text-emerald-400 font-mono">100% Custom</div>
                <div className="text-xs text-zinc-400">Zero Generic Templates</div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400" /> Mobile-First Optimization
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400" /> High-Ticket Lead Funnels
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400" /> Direct Engineer Communication
              </span>
            </div>
          </div>

          {/* Right Column: 3D Interactive Floating Mockup */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <RoofingMockup3D />
          </div>
        </div>

        {/* Minimal Scroll Down Indicator */}
        <div className="pt-16 sm:pt-20 flex flex-col items-center justify-center gap-2 text-zinc-500">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
            Scroll to discover
          </span>
          <a
            href="#work"
            className="w-8 h-8 rounded-full border border-zinc-700/60 flex items-center justify-center text-zinc-400 hover:text-orange-400 hover:border-orange-500/40 transition-colors animate-bounce"
            aria-label="Scroll down to Selected Work"
          >
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
