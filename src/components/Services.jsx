import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Smartphone, Search, Palette, PhoneCall, Gauge, AlertCircle } from 'lucide-react';

export default function Services() {
  const deliverables = [
    {
      icon: <Palette className="w-5 h-5 text-orange-400" />,
      title: 'Bespoke Visual Design & 3D Depth',
      description: 'Zero generic templates or cookie-cutter themes. A unique dark-mode or custom-branded aesthetic that positions your contracting business as the #1 premium choice in your market.',
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-orange-400" />,
      title: 'High-Ticket Lead Conversion Funnel',
      description: 'Engineered specifically for $10k–$60k roofing and remodeling jobs: 60-second instant estimate forms, storm damage photo uploads, and persistent mobile tap-to-call bars.',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-orange-400" />,
      title: 'Mobile-First Smartphone Experience',
      description: 'Over 75% of homeowners looking for roofing repairs browse on smartphones. Your site is tested across iOS and Android for frictionless navigation and thumb-friendly tapping.',
    },
    {
      icon: <Search className="w-5 h-5 text-orange-400" />,
      title: 'Local SEO & Contractor Schema',
      description: 'Built-in RoofingContractor and GeneralContractor structured data, OpenGraph cards, localized city landing page structures, and lightning-fast Core Web Vitals to rank higher.',
    },
    {
      icon: <Gauge className="w-5 h-5 text-orange-400" />,
      title: 'Sub-Second Loading Speeds',
      description: 'Custom React & Vite code means zero slow WordPress plugins or bloated builders. Your pages load in under 1 second, keeping impatient homeowners from bouncing to competitors.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-orange-400" />,
      title: 'Turnkey Launch & 30-Day Guarantee',
      description: 'Complete domain setup, SSL security, contact form email routing, analytics tracking, and 30 days of complimentary adjustments after the site goes live.',
    },
  ];

  const comparison = [
    { feature: 'Page Load Speed', custom: '< 0.9s (Custom Code)', template: '3.5s - 6s+ (Bloated Plugins)' },
    { feature: 'Visual Uniqueness', custom: '100% Unique & Premium', template: 'Identical to 500 other roofers' },
    { feature: 'Homeowner Conversion', custom: 'Tailored 60-sec Quote Funnel', template: 'Generic contact form with low response' },
    { feature: 'Security & Maintenance', custom: 'Zero Plugin Hacks / No Updates Needed', template: 'Constant updates, vulnerability risks' },
    { feature: 'Pricing Transparency', custom: 'Flat $2,500 One-Time (You Own It)', template: '$150-$400/month recurring forever' },
  ];

  return (
    <section id="services" className="relative py-28 bg-[#09090b] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-orange-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Turnkey Contractor Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Complete Website Design & Development for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Roofing & Remodeling
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A single, comprehensive package built to position your company as the premier contractor in your service area and generate qualified homeowner inquiries.
          </p>
        </div>

        {/* Pricing Card Highlight */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-orange-500/30 shadow-2xl shadow-orange-500/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full mb-3">
                <span>The Flagship Contractor Package</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Everything Your Business Needs to Dominate Online
              </h3>
              <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
                Custom visual design, interactive before/after gallery, quote estimator, local SEO foundation, and mobile optimization. Completed in 2–3 weeks.
              </p>
            </div>

            <div className="text-left lg:text-right shrink-0 bg-black/40 p-6 rounded-2xl border border-white/5">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Fixed Investment</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono text-orange-400 my-1">
                $2,500
              </div>
              <div className="text-xs text-zinc-400">Flat rate • No monthly retainers</div>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
              >
                Discuss This Package
              </a>
            </div>
          </div>
        </div>

        {/* 6-Grid Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">
              Why Custom Engineering Beats WordPress & Generic Templates
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Homeowners make subconscious decisions in 3 seconds. An outdated or sluggish website costs contractors tens of thousands in lost contracts.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse rounded-2xl overflow-hidden bg-zinc-900/60 border border-white/10">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/80">
                  <th className="py-4 px-6 text-zinc-300 font-semibold font-mono text-xs uppercase">Evaluation Factor</th>
                  <th className="py-4 px-6 text-orange-400 font-bold font-mono text-xs uppercase bg-orange-500/10">Fazil's Custom Build ($2,500)</th>
                  <th className="py-4 px-6 text-zinc-400 font-semibold font-mono text-xs uppercase">Generic WordPress / Agency Templates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-800/20 transition-colors">
                    <td className="py-4 px-6 font-medium text-white">{row.feature}</td>
                    <td className="py-4 px-6 text-orange-300 font-medium bg-orange-500/5">{row.custom}</td>
                    <td className="py-4 px-6 text-zinc-400">{row.template}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
