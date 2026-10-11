import React from 'react';
import { Compass, PenTool, Code2, Rocket, Clock, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Market Strategy',
      duration: 'Days 1–3',
      icon: <Compass className="w-6 h-6 text-orange-400" />,
      description: 'We kick off with a focused 30-minute discovery call to map out your high-margin service focus (e.g., storm replacement, standing seam metal, luxury master baths), target service zip codes, and competitor weaknesses in your city.',
      deliverables: ['Target service blueprint', 'High-margin messaging strategy', 'Asset & photo intake'],
    },
    {
      number: '02',
      title: 'Bespoke UI & 3D Interactive Design',
      duration: 'Days 4–8',
      icon: <PenTool className="w-6 h-6 text-orange-400" />,
      description: 'I design an entirely custom website concept tailored to your brand. No generic WordPress templates. You review an interactive prototype featuring realistic project showcases, quote funnels, and homeowner trust badges.',
      deliverables: ['Complete desktop & mobile design', 'Interactive lead funnels', 'Collaborative revision round'],
    },
    {
      number: '03',
      title: 'Modern Frontend Development',
      duration: 'Days 9–14',
      icon: <Code2 className="w-6 h-6 text-orange-400" />,
      description: 'I build your site from scratch using clean, modern code (React, Tailwind CSS, lightweight 3D transforms). Every page is optimized for sub-second loading speeds, zero plugin vulnerabilities, and effortless mobile navigation.',
      deliverables: ['Custom frontend codebase', '60-second quote calculator', 'Instant phone & SMS routing'],
    },
    {
      number: '04',
      title: 'Testing, SEO & Official Launch',
      duration: 'Days 15–18',
      icon: <Rocket className="w-6 h-6 text-orange-400" />,
      description: 'Rigorous cross-device testing across modern iPhones, Androids, tablets, and desktop browsers. We configure RoofingContractor schema for Google, wire up email notifications, connect your custom domain, and launch.',
      deliverables: ['Core Web Vitals > 95 score', 'Domain & SSL deployment', '30-day warranty & support'],
    },
  ];

  return (
    <section id="process" className="relative py-28 bg-[#0b0c10] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-orange-500/30 text-xs font-mono text-orange-400 mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Structured 4-Step Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Build Your Website In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              2 to 3 Weeks
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A clear, transparent development workflow. You always know what is being built, when to expect milestones, and when you can start booking more high-ticket jobs.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-orange-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black font-mono text-zinc-700 group-hover:text-orange-500/60 transition-colors">
                      {step.number}
                    </span>
                    <div className="text-[11px] font-mono text-orange-400 font-semibold">
                      {step.duration}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables list */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                  Milestone Output
                </div>
                {step.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
