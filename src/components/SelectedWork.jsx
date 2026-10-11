import React, { useState, useRef } from 'react';
import { ExternalLink, Github, Sparkles, Layers, ArrowRight, Check, Hammer, Cpu, BookOpen, Calculator } from 'lucide-react';

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div className="perspective-container h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative preserve-3d h-full rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-orange-500/40 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-300 shadow-xl overflow-hidden group"
      >
        {/* Dynamic Glare Overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl z-20"
          style={{
            background: `radial-gradient(circle 300px at ${glare.x}% ${glare.y}%, rgba(249, 115, 22, ${glare.opacity}), transparent 80%)`,
          }}
        />

        {/* Card Header & Category */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${project.badgeStyle}`}>
              {project.icon}
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-zinc-300">
              {project.year}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-200">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          {/* Interactive Preview Mockup Box inside Card */}
          <div className="mt-5 rounded-xl bg-black/60 border border-white/5 p-4 relative overflow-hidden group-hover:border-orange-500/20 transition-colors">
            <div className="text-[11px] font-mono text-orange-400 font-semibold mb-1 uppercase tracking-wider">
              {project.previewLabel}
            </div>
            <div className="text-xs text-zinc-400 font-normal">
              {project.previewHighlight}
            </div>

            {/* Visual metric pill */}
            <div className="mt-3 flex items-center gap-2 flex-wrap">
              {project.metrics.map((metric, i) => (
                <span key={i} className="text-[11px] font-mono bg-zinc-800/80 text-zinc-300 px-2.5 py-1 rounded-md border border-white/5">
                  {metric}
                </span>
              ))}
            </div>
          </div>

          {/* Actual Contribution Section */}
          <div className="mt-5 pt-4 border-t border-zinc-800/80">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
              My Contribution
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.contribution}
            </p>
          </div>
        </div>

        {/* Card Footer: Tech tags and Action buttons */}
        <div className="mt-6 pt-4 border-t border-zinc-800/80">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono bg-zinc-800/60 text-zinc-400 px-2 py-0.5 rounded border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md shadow-orange-500/20 transition-all duration-200"
              >
                <span>{project.liveLabel || 'Live Preview'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 transition-colors duration-200"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const projects = [
    {
      title: 'Apex Peak Roofing & Remodeling Showcase',
      category: 'Contractor Flagship ($2,500 Turnkey)',
      year: 'Contractor Architecture',
      badgeStyle: 'bg-orange-500/15 text-orange-400 border border-orange-500/30',
      icon: <Hammer className="w-3.5 h-3.5" />,
      description: 'A bespoke high-converting digital storefront engineered specifically for Texas & US roofing and residential remodeling contractors.',
      previewLabel: 'Conversion Feature Showcase',
      previewHighlight: 'Multi-step 60-second instant roof estimate calculator, interactive before/after photo slider, storm damage insurance claim workflow, and tap-to-call mobile bar.',
      metrics: ['< 0.8s Mobile Load', '4.9 Star Trust Schema', 'SMS Lead Routing'],
      contribution: 'Complete UX architecture, 3D perspective mockup interactions, high-converting funnel copy, and ultra-fast responsive frontend code.',
      tech: ['React', 'Tailwind CSS', '3D Perspective Transforms', 'Vite', 'Lucide'],
      liveUrl: '#contact',
      liveLabel: 'Request Demo Walkthrough',
    },
    {
      title: 'RealityCheck AI',
      category: 'Engineering & Open Source',
      year: 'AI Application',
      badgeStyle: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
      icon: <Cpu className="w-3.5 h-3.5" />,
      description: 'Full-stack AI content verification platform designed to detect synthetic media, hallucinated claims, and algorithmic anomalies with real-time scoring.',
      previewLabel: 'Verification Engine',
      previewHighlight: 'Multi-layer text forensics, confidence scoring dashboard, model comparison telemetry, and clean exportable verification reports.',
      metrics: ['Real-time Scoring', 'Full-Stack Integration', 'REST APIs'],
      contribution: 'Engineered frontend application structure, dynamic scorecards, data visualization modules, and API payload handlers.',
      tech: ['React', 'Python', 'AI APIs', 'Tailwind CSS', 'Vite'],
      repoUrl: 'https://github.com/fazil-shaik/RealityCheck-AI',
      liveUrl: 'https://github.com/fazil-shaik/RealityCheck-AI',
      liveLabel: 'View Repository',
    },
    {
      title: 'AcronymVerse',
      category: 'Developer Knowledge System',
      year: 'Web Tool',
      badgeStyle: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
      icon: <BookOpen className="w-3.5 h-3.5" />,
      description: 'Comprehensive developer dictionary and tech terminology catalog built with instant client-side fuzzy search and taxonomy filtering.',
      previewLabel: 'Glossary Engine',
      previewHighlight: 'Sub-millisecond query parsing, keyboard navigation shortcuts, category tags, and clean markdown documentation rendering.',
      metrics: ['Zero Lag Search', 'Keyboard Accessible', 'Clean Taxonomy'],
      contribution: 'Designed and implemented the user interface, search indexing logic, mobile responsive drawer, and theme tokens.',
      tech: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
      repoUrl: 'https://github.com/fazil-shaik/acroymnverse',
      liveUrl: 'https://github.com/fazil-shaik/acroymnverse',
      liveLabel: 'View Repository',
    },
    {
      title: 'Contractor Estimate Engine & Lead System',
      category: 'Contractor Utility',
      year: 'Interactive Tool',
      badgeStyle: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
      icon: <Calculator className="w-3.5 h-3.5" />,
      description: 'Interactive roofing and remodel cost estimator that allows homeowners to calculate square footage estimates while qualifying intent.',
      previewLabel: 'Lead Qualification Funnel',
      previewHighlight: 'Automatic pitch multiplier calculations, material selection (Architectural, Metal, Tile), and direct webhook dispatch to contractor CRM/email.',
      metrics: ['3x Form Completion Rate', 'Filtered Spam Leads', 'CRM Ready'],
      contribution: 'Built mathematical estimation formulas, stepped wizard transitions, input validation, and direct email dispatch triggers.',
      tech: ['React', 'Tailwind CSS', 'Form Validation', 'State Management'],
      liveUrl: '#contact',
      liveLabel: 'Integrate On Your Site',
    },
  ];

  return (
    <section id="work" className="relative py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-orange-500/30 text-xs font-mono text-orange-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio & Interactive Demos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected Work &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Interactive Systems
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Every project demonstrates custom engineering, refined interaction design, and conversion-first thinking. Contractor architectures are built specifically to convert high-ticket roofing and remodeling jobs.
          </p>
        </div>

        {/* 2x2 Grid of 3D Interactive Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              Need a custom website built for your roofing or remodeling company?
            </h4>
            <p className="text-sm text-zinc-400 mt-1">
              Flat $2,500 investment. Completed in 2-3 weeks with everything included.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-orange-500/20"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
