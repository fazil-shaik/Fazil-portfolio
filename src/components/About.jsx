import React from 'react';
import { User, Code2, Award, Terminal, Github, Linkedin, Mail, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#09090b] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Profile Card (Bottom-up entrance) */}
          <div data-aos="fade-up" data-aos-delay="100" className="lg:col-span-5">
            <div className="relative rounded-3xl bg-zinc-900/80 border border-white/10 p-7 sm:p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />
              
              {/* Profile Avatar / Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-orange-500/30">
                  FS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Fazil Shaik</h3>
                  <p className="text-xs font-mono text-orange-400">Full-Stack Engineer & Designer</p>
                  <p className="text-xs text-zinc-400">Specializing in Contractor Websites</p>
                </div>
              </div>

              {/* Bio summary */}
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                I build high-performance, conversion-focused websites for US roofing and remodeling businesses. I combine clean software engineering with creative 3D design to help contractors win high-ticket jobs.
              </p>

              {/* Quick Specs */}
              <div className="space-y-3 border-t border-zinc-800/80 pt-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-mono">Specialization</span>
                  <span className="text-white font-semibold">Roofing & Remodeling Sites</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-mono">Core Stack</span>
                  <span className="text-white font-semibold">React, Tailwind, 3D Web, Vite</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-mono">Delivery Model</span>
                  <span className="text-orange-400 font-semibold">Direct Collaboration (No Middlemen)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-mono">Target Rate</span>
                  <span className="text-emerald-400 font-semibold">$500 Flat Investment</span>
                </div>
              </div>

              {/* Verified Links */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center gap-3">
                <a
                  href="https://github.com/fazil-shaik"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 text-xs font-medium text-zinc-300 hover:text-white flex items-center justify-center gap-2 border border-white/5 transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="#contact"
                  className="flex-1 py-2 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors shadow-md shadow-orange-500/20"
                >
                  <Mail className="w-4 h-4" /> Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div data-aos="fade-down" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-orange-400">
              <User className="w-3.5 h-3.5" />
              <span>Developer Background & Approach</span>
            </div>

            <h2 data-aos="fade-down" data-aos-delay="100" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why I Specialize in Websites for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Roofing & Remodeling Contractors
              </span>
            </h2>

            <div data-aos="fade-up" data-aos-delay="150" className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                In the home improvement industry, trust is everything. Homeowners are deciding whether to spend <strong className="text-white">$15,000 to $60,000+</strong> on a new roof replacement, luxury kitchen renovation, or siding overhaul.
              </p>
              <p>
                Yet most contractor websites look like they were built ten years ago: slow, cluttered, difficult to navigate on mobile, and powered by vulnerable WordPress plugins. When a prospective homeowner visits a site like that after a hailstorm or during a remodel search, they lose confidence and click over to your competitor.
              </p>
              <p>
                I eliminate that bottleneck. By combining custom frontend architecture with modern 3D design and instant estimate lead funnels, I give contractors an unfair advantage in their local markets.
              </p>
            </div>

            {/* Core Values (Bottom-up entrance) */}
            <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  Direct Pair Engineering
                </div>
                <p className="text-xs text-zinc-400">
                  You work directly with me from kickoff to launch. No junior account managers or offshore communication breakdowns.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  Honest Flat Pricing
                </div>
                <p className="text-xs text-zinc-400">
                  A predictable $500 target price. No hidden fees, surprise hourly invoices, or mandatory monthly retainers.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
