import React, { useState, useRef, useEffect } from 'react';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Hammer,
  Cpu,
  BookOpen,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Search,
  Layers,
  Zap,
} from 'lucide-react';

/* -------------------------------------------------------------
   1. Interactive Preview Widgets for Each Project
------------------------------------------------------------- */

// Interactive Preview for Apex Peak Roofing
function ApexPeakPreview() {
  const [activeView, setActiveView] = useState('restoration');

  return (
    <div className="h-full flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          <span className="text-[10px] font-mono text-zinc-400 ml-2">apexpeakroofing.com</span>
        </div>
        <div className="flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>100 Mobile Score</span>
        </div>
      </div>

      <div className="py-2.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-semibold flex items-center gap-1">
            <Hammer className="w-3 h-3" /> Contractor Lead Funnel
          </span>
          <div className="flex gap-1 bg-black/50 p-0.5 rounded-lg border border-white/5">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setActiveView('restoration'); }}
              className={`text-[10px] px-2 py-0.5 rounded transition-colors ${
                activeView === 'restoration' ? 'bg-orange-500 text-white font-medium' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Hail Damage
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setActiveView('shingle'); }}
              className={`text-[10px] px-2 py-0.5 rounded transition-colors ${
                activeView === 'shingle' ? 'bg-orange-500 text-white font-medium' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Architectural
            </button>
          </div>
        </div>

        <div className="bg-zinc-900/90 rounded-lg p-2.5 border border-white/5 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-300 font-medium">
              {activeView === 'restoration' ? 'DFW Storm Inspection Lead' : 'Class-4 Impact Resistant Roof'}
            </span>
            <span className="text-orange-400 font-mono text-[11px] font-bold">
              {activeView === 'restoration' ? 'Insurance Support' : '$14,500 Avg Job'}
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 line-clamp-1">
            {activeView === 'restoration'
              ? 'Multi-point digital inspection report with drone photography intake.'
              : 'Lifetime GAF architectural shingles with transferable 50-year warranty.'}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 text-[10px] text-zinc-400 font-mono">
        <span className="flex items-center gap-1 text-amber-400">
          <ShieldCheck className="w-3 h-3 text-amber-400" /> 4.9 (184 Verified Reviews)
        </span>
        <span className="text-zinc-400">TX Lic #8291</span>
        <span className="text-emerald-400 font-medium">SMS Lead Alert: Active</span>
      </div>
    </div>
  );
}

// Interactive Preview for RealityCheck AI
function RealityCheckPreview() {
  const [analyzing, setAnalyzing] = useState(false);
  const [confidence, setConfidence] = useState(98.4);

  const runAnalysis = (e) => {
    e.stopPropagation();
    setAnalyzing(true);
    setTimeout(() => {
      setConfidence((prev) => (prev === 98.4 ? 99.2 : 98.4));
      setAnalyzing(false);
    }, 600);
  };

  return (
    <div className="h-full flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-mono text-zinc-300 font-semibold">Forensic Detection Engine</span>
        </div>
        <button
          type="button"
          onClick={runAnalysis}
          disabled={analyzing}
          className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 hover:bg-emerald-500/25 transition-colors"
        >
          <RefreshCw className={`w-3 h-3 ${analyzing ? 'animate-spin' : ''}`} />
          <span>{analyzing ? 'Scanning...' : 'Run Scan'}</span>
        </button>
      </div>

      <div className="py-2.5 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-300">Authenticity Verification</span>
          <span className="text-emerald-400 font-mono font-bold">{confidence}% Validated</span>
        </div>

        <div className="w-full bg-zinc-800/80 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${confidence}%` }}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1 text-[10px] font-mono">
          <div className="bg-zinc-900/90 p-1.5 rounded border border-white/5">
            <span className="text-zinc-500 block">Hallucination Delta</span>
            <span className="text-emerald-400 font-semibold">&lt; 0.03 Risk</span>
          </div>
          <div className="bg-zinc-900/90 p-1.5 rounded border border-white/5">
            <span className="text-zinc-500 block">Synthetic Media</span>
            <span className="text-zinc-300 font-semibold">Zero Artifacts</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 text-[10px] font-mono text-zinc-400">
        <span>Latency: 28ms</span>
        <span>Python &amp; REST</span>
        <span className="text-emerald-400">Telemetry Live</span>
      </div>
    </div>
  );
}

// Interactive Preview for AcronymVerse
function AcronymVersePreview() {
  const acronyms = [
    { code: 'REST', def: 'Representational State Transfer', category: 'Architecture' },
    { code: 'JWT', def: 'JSON Web Token Authentication', category: 'Security' },
    { code: 'SSR', def: 'Server-Side Rendering Pipeline', category: 'Performance' },
    { code: 'CI/CD', def: 'Continuous Integration & Deployment', category: 'DevOps' },
  ];

  const [selected, setSelected] = useState(acronyms[0]);

  return (
    <div className="h-full flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
        <div className="flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] font-mono text-zinc-300">Fuzzy Index &lt; 0.2ms</span>
        </div>
        <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
          Client-Side In-Memory
        </span>
      </div>

      <div className="py-2.5 space-y-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          {acronyms.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={(e) => { e.stopPropagation(); setSelected(item); }}
              className={`text-[10px] font-mono px-2 py-1 rounded transition-colors ${
                selected.code === item.code
                  ? 'bg-blue-500 text-white font-bold shadow-sm'
                  : 'bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700'
              }`}
            >
              {item.code}
            </button>
          ))}
        </div>

        <div className="bg-zinc-900/90 rounded-lg p-2.5 border border-white/5 space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white font-bold">{selected.code}</span>
            <span className="text-[10px] font-mono text-blue-400">{selected.category}</span>
          </div>
          <p className="text-[11px] text-zinc-300 font-mono">{selected.def}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 text-[10px] font-mono text-zinc-400">
        <span>Instant Query Engine</span>
        <span>Keyboard Nav Ready</span>
        <span className="text-blue-400">Zero Dependencies</span>
      </div>
    </div>
  );
}

// Interactive Preview for Contractor Cost Estimator
function ContractorEstimatePreview() {
  const [size, setSize] = useState(2400);
  const [material, setMaterial] = useState('shingle');

  const unitRate = material === 'shingle' ? 4.9 : 8.6;
  const estimate = Math.round(size * unitRate);

  return (
    <div className="h-full flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
        <div className="flex items-center gap-1.5">
          <Calculator className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-mono text-zinc-300 font-semibold">Homeowner Intent Funnel</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
          <span>Real-time Math</span>
        </div>
      </div>

      <div className="py-2 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-400">Roof Area: <strong className="text-white font-mono">{size.toLocaleString()} sq ft</strong></span>
          <div className="flex gap-1">
            {[1800, 2400, 3200].map((s) => (
              <button
                key={s}
                type="button"
                onClick={(e) => { e.stopPropagation(); setSize(s); }}
                className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                  size === s ? 'bg-amber-500 text-black font-bold' : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {s / 100} sq
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setMaterial('shingle'); }}
            className={`flex-1 text-[10px] py-1 px-2 rounded border text-center transition-colors ${
              material === 'shingle'
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 font-semibold'
                : 'bg-zinc-900/80 border-white/5 text-zinc-400'
            }`}
          >
            Architectural Shingle
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setMaterial('metal'); }}
            className={`flex-1 text-[10px] py-1 px-2 rounded border text-center transition-colors ${
              material === 'metal'
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 font-semibold'
                : 'bg-zinc-900/80 border-white/5 text-zinc-400'
            }`}
          >
            Standing Seam Metal
          </button>
        </div>

        <div className="bg-black/60 rounded-lg p-2 border border-white/5 flex items-center justify-between">
          <span className="text-[11px] text-zinc-400">Estimated Project Range:</span>
          <span className="text-sm font-mono font-bold text-amber-400">
            ${(estimate - 1200).toLocaleString()} to ${(estimate + 1500).toLocaleString()}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 text-[10px] text-zinc-400 font-mono">
        <span className="flex items-center gap-1 text-emerald-400">
          <CheckCircle2 className="w-3 h-3" /> Spam Filtered
        </span>
        <span>Lead Webhook: Active</span>
        <span className="text-amber-400">+42% Form Submits</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   2. Butter-Smooth, Soothing Flicker-Free Project Card
------------------------------------------------------------- */
function ProjectCard({ project, index }) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const targetRef = useRef({
    x: 0,
    y: 0,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
  });

  const currentRef = useRef({
    x: 0,
    y: 0,
    glareOpacity: 0,
  });

  useEffect(() => {
    let animId;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    const render = () => {
      if (!isTouch) {
        // Soothing silky smooth interpolation
        currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
        currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;
        currentRef.current.glareOpacity += (targetRef.current.glareOpacity - currentRef.current.glareOpacity) * 0.08;

        if (cardRef.current) {
          cardRef.current.style.transform = `rotateX(${currentRef.current.x.toFixed(2)}deg) rotateY(${currentRef.current.y.toFixed(2)}deg)`;
        }
        if (glareRef.current) {
          glareRef.current.style.background = `radial-gradient(circle 350px at ${targetRef.current.glareX.toFixed(1)}% ${targetRef.current.glareY.toFixed(1)}%, ${project.glareColor}, transparent 80%)`;
          glareRef.current.style.opacity = currentRef.current.glareOpacity.toFixed(3);
        }
      }
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [project.glareColor]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Track relative to stable, non-transforming container
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Gentle, soothing tilt range (max ±4 degrees)
    const targetY = ((x - centerX) / centerX) * 4;
    const targetX = -((y - centerY) / centerY) * 4;

    targetRef.current.x = targetX;
    targetRef.current.y = targetY;
    targetRef.current.glareX = (x / rect.width) * 100;
    targetRef.current.glareY = (y / rect.height) * 100;
    targetRef.current.glareOpacity = 1;
  };

  const handleMouseEnter = () => {
    targetRef.current.glareOpacity = 1;
  };

  const handleMouseLeave = () => {
    targetRef.current.x = 0;
    targetRef.current.y = 0;
    targetRef.current.glareOpacity = 0;
  };

  const delayClass = index === 0 ? 'data-aos-delay="100"' : index === 1 ? 'data-aos-delay="200"' : index === 2 ? 'data-aos-delay="300"' : 'data-aos-delay="400"';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-aos="fade-up"
      data-aos-delay={index * 120 + 100}
      className="perspective-container h-full flex flex-col"
    >
      <div
        ref={cardRef}
        style={{
          transform: 'rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
        }}
        className={`relative h-full rounded-2xl bg-zinc-900/80 border ${project.borderHover} p-6 sm:p-7 flex flex-col justify-between transition-colors duration-300 shadow-xl overflow-hidden group will-change-transform`}
      >
        {/* Dynamic Specular Glare Layer */}
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none rounded-2xl z-20 transition-opacity duration-200"
          style={{
            opacity: 0,
            background: `radial-gradient(circle 350px at 50% 50%, ${project.glareColor}, transparent 80%)`,
          }}
        />

        {/* Top Section */}
        <div className="flex flex-col flex-1">
          {/* Header & Meta Row */}
          <div className="flex items-center justify-between gap-2 mb-3.5">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${project.badgeStyle}`}>
              {project.icon}
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800/60 px-2.5 py-0.5 rounded-full border border-white/5">
              {project.pillTag}
            </span>
          </div>

          {/* Title - Fixed min-height for clean horizontal alignment */}
          <div className="min-h-[3.25rem] sm:min-h-[3.75rem] flex flex-col justify-center mb-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-200 leading-snug">
              {project.title}
            </h3>
          </div>

          {/* Description - Standardized min-height */}
          <div className="min-h-[3.5rem] sm:min-h-[4rem] mb-2 flex items-start">
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Interactive Feature Preview Widget - Equal Fixed Dimensions */}
          <div className="h-60 sm:h-64 my-2 rounded-xl bg-black/70 border border-white/10 p-3.5 sm:p-4 relative overflow-hidden group-hover:border-white/20 transition-colors">
            {project.previewComponent}
          </div>

          {/* Contribution Section - Standardized min-height */}
          <div className="pt-3.5 mt-2 border-t border-zinc-800/80 min-h-[4.5rem]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1 flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>Engineering Contribution</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.contribution}
            </p>
          </div>
        </div>

        {/* Bottom Section: Tech Stack & Standardized Action Buttons */}
        <div className="mt-4 pt-3.5 border-t border-zinc-800/80">
          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-4 min-h-[2.25rem] items-center">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono bg-zinc-800/80 text-zinc-300 px-2.5 py-0.5 rounded border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Harmonized Button Actions */}
          <div className="flex items-center gap-2.5 pt-1">
            {project.primaryButton && (
              <a
                href={project.primaryButton.href}
                target={project.primaryButton.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white ${project.primaryButton.style} transition-all duration-200 shadow-md`}
              >
                {project.primaryButton.icon}
                <span>{project.primaryButton.label}</span>
                {project.primaryButton.href.startsWith('http') && <ExternalLink className="w-3.5 h-3.5 shrink-0" />}
              </a>
            )}

            {project.secondaryButton && (
              <a
                href={project.secondaryButton.href}
                target={project.secondaryButton.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 transition-colors duration-200 shrink-0"
              >
                {project.secondaryButton.icon}
                <span>{project.secondaryButton.label}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   3. Main SelectedWork Section with Category Filters
------------------------------------------------------------- */
export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'apex-roofing',
      title: 'Apex Peak Roofing & Remodeling Showcase',
      filterCategory: 'contractor',
      category: 'Contractor Flagship',
      pillTag: 'Turnkey Client Build',
      badgeStyle: 'bg-orange-500/15 text-orange-400 border border-orange-500/30',
      borderHover: 'hover:border-orange-500/40',
      glareColor: 'rgba(249, 115, 22, 0.15)',
      icon: <Hammer className="w-3.5 h-3.5" />,
      description: 'A bespoke high-converting digital storefront engineered specifically for Texas & US roofing and residential remodeling contractors.',
      previewComponent: <ApexPeakPreview />,
      contribution: 'Complete UX architecture, 3D perspective mockup interactions, high-converting funnel copy, and sub-second responsive frontend build.',
      tech: ['React', 'Tailwind CSS', '3D Transforms', 'Vite', 'Lucide'],
      primaryButton: {
        label: 'Request Demo Walkthrough',
        href: '#contact',
        style: 'bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-orange-500/20',
        icon: <ArrowRight className="w-3.5 h-3.5" />,
      },
      secondaryButton: null,
    },
    {
      id: 'reality-check',
      title: 'RealityCheck AI Platform',
      filterCategory: 'engineering',
      category: 'Full-Stack & AI',
      pillTag: 'Open-Source System',
      badgeStyle: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
      borderHover: 'hover:border-emerald-500/40',
      glareColor: 'rgba(16, 185, 129, 0.15)',
      icon: <Cpu className="w-3.5 h-3.5" />,
      description: 'Full-stack AI content verification platform designed to detect synthetic media, hallucinated claims, and algorithmic anomalies with real-time scoring.',
      previewComponent: <RealityCheckPreview />,
      contribution: 'Engineered frontend application structure, dynamic scorecards, data visualization modules, and API payload handlers.',
      tech: ['React', 'Python', 'AI APIs', 'Tailwind CSS', 'Vite'],
      primaryButton: {
        label: 'View GitHub Repository',
        href: 'https://github.com/fazil-shaik/RealityCheck-AI',
        style: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-500/20',
        icon: <Github className="w-3.5 h-3.5" />,
      },
      secondaryButton: null,
    },
    {
      id: 'acronymverse',
      title: 'AcronymVerse Developer Glossary',
      filterCategory: 'engineering',
      category: 'Developer Knowledge System',
      pillTag: 'Fast Search Engine',
      badgeStyle: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
      borderHover: 'hover:border-blue-500/40',
      glareColor: 'rgba(59, 130, 246, 0.15)',
      icon: <BookOpen className="w-3.5 h-3.5" />,
      description: 'Comprehensive developer dictionary and tech terminology catalog built with instant client-side fuzzy search and taxonomy filtering.',
      previewComponent: <AcronymVersePreview />,
      contribution: 'Designed and implemented the user interface, search indexing logic, mobile responsive drawer, and theme tokens.',
      tech: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
      primaryButton: {
        label: 'View GitHub Repository',
        href: 'https://github.com/fazil-shaik/acroymnverse',
        style: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-blue-500/20',
        icon: <Github className="w-3.5 h-3.5" />,
      },
      secondaryButton: null,
    },
    {
      id: 'contractor-estimator',
      title: 'Contractor Estimate Engine & Funnel',
      filterCategory: 'contractor',
      category: 'Contractor Utility',
      pillTag: 'Lead Capture Engine',
      badgeStyle: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
      borderHover: 'hover:border-amber-500/40',
      glareColor: 'rgba(245, 158, 11, 0.15)',
      icon: <Calculator className="w-3.5 h-3.5" />,
      description: 'Interactive roofing and remodel cost estimator that allows homeowners to calculate square footage estimates while qualifying intent.',
      previewComponent: <ContractorEstimatePreview />,
      contribution: 'Built mathematical estimation formulas, stepped wizard transitions, input validation, and direct email dispatch triggers.',
      tech: ['React', 'Tailwind CSS', 'Form Validation', 'State Management'],
      primaryButton: {
        label: 'Integrate On Your Website',
        href: '#contact',
        style: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-amber-500/20',
        icon: <ArrowRight className="w-3.5 h-3.5" />,
      },
      secondaryButton: null,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.filterCategory === activeFilter;
  });

  return (
    <section id="work" className="relative py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with AOS top-down animation */}
        <div data-aos="fade-down" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-orange-500/30 text-xs font-mono text-orange-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Curated Portfolio &amp; Interactive Demos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected Work &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Interactive Systems
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Every project demonstrates custom engineering, refined interaction design, and conversion-first thinking. Contractor platforms are engineered specifically to generate high-ticket roofing and remodeling jobs.
          </p>

          {/* Category Filter Pills with AOS top-down animation */}
          <div data-aos="fade-down" data-aos-delay="100" className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('contractor')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === 'contractor'
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              Contractor Platforms ({projects.filter((p) => p.filterCategory === 'contractor').length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('engineering')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === 'engineering'
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              AI &amp; Software Engineering ({projects.filter((p) => p.filterCategory === 'engineering').length})
            </button>
          </div>
        </div>

        {/* 2x2 Responsive Grid with Standardized Height and Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom Callout with AOS bottom-up animation */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-lg font-bold text-white">
              Need a custom website built for your roofing or remodeling company?
            </h4>
            <p className="text-sm text-zinc-400 mt-1">
              Flat $500 investment. Completed in 2-3 weeks with everything included.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/20"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
