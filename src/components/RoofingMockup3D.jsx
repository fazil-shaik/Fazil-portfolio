import React, { useState, useRef } from 'react';
import { ShieldCheck, Star, PhoneCall, Sparkles, ArrowRight, Zap, CheckCircle2, ChevronRight } from 'lucide-react';

export default function RoofingMockup3D() {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 12, y: -14 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('residential');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates from -1 to 1
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 16;
    const rotateX = -((y - centerY) / centerY) * 16;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly return to natural isometric float angle
    setRotate({ x: 10, y: -12 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto perspective-container py-6">
      {/* Ambient background glow behind the mockup */}
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-amber-500/15 to-transparent rounded-3xl blur-3xl pointer-events-none transform -rotate-2"></div>

      {/* Outer 3D Tilt Wrapper */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative preserve-3d cursor-pointer select-none rounded-2xl p-1 bg-gradient-to-b from-zinc-700/60 via-zinc-800/40 to-orange-500/30 shadow-3d-mockup"
      >
        {/* Dynamic Specular Glare Layer */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 350px at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 80%)`,
          }}
        />

        {/* Browser Mockup Window */}
        <div className="relative rounded-xl bg-[#0d0e12] border border-white/10 overflow-hidden shadow-2xl">
          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-white/5 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            {/* Address Bar */}
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-md text-[11px] font-mono text-zinc-300 border border-white/5 w-64 justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>apexridgeroofing.com</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>100 Score</span>
            </div>
          </div>

          {/* Website Hero Inside Mockup */}
          <div className="relative p-5 sm:p-7 bg-gradient-to-b from-[#111217] via-[#0d0e12] to-[#09090b]">
            {/* Mini Contractor Topbar */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center font-bold text-black text-xs">
                  A
                </div>
                <span className="font-bold text-sm tracking-tight text-white">
                  APEX RIDGE <span className="text-orange-400 font-normal">ROOFING & REMODELING</span>
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-300 font-medium">
                <span className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.9 (184 Reviews)
                </span>
                <span className="bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20 text-[10px] font-mono">
                  TX License #8291
                </span>
              </div>
            </div>

            {/* Contractor Hero Headline */}
            <div className="max-w-md">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] font-medium text-orange-300 mb-3">
                <Sparkles className="w-3 h-3 text-orange-400" />
                <span>Storm-Damaged Roof Specialists in Texas</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                Engineered to Protect. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  Built to Last 50+ Years.
                </span>
              </h4>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Premium architectural shingles, metal roofs, and luxury kitchen & bath remodels with full insurance claims support.
              </p>
            </div>

            {/* Interactive Lead Generation Form inside Mockup */}
            <div className="mt-5 p-3.5 rounded-xl bg-zinc-900/80 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-semibold flex items-center gap-1.5">
                  <PhoneCall className="w-3 h-3" /> Get Instant 60-Second Roof Quote
                </span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setActiveTab('residential'); }}
                    className={`text-[10px] px-2 py-0.5 rounded ${
                      activeTab === 'residential' ? 'bg-orange-500 text-white font-semibold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Roofing
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setActiveTab('remodel'); }}
                    className={`text-[10px] px-2 py-0.5 rounded ${
                      activeTab === 'remodel' ? 'bg-orange-500 text-white font-semibold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Remodel
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  readOnly
                  value="1248 Oak Creek Dr, Austin"
                  className="bg-black/60 border border-zinc-700/60 rounded-lg px-2.5 py-1.5 text-xs text-zinc-300 font-mono"
                />
                <input
                  type="text"
                  readOnly
                  value="Architectural Shingle"
                  className="bg-black/60 border border-zinc-700/60 rounded-lg px-2.5 py-1.5 text-xs text-zinc-300"
                />
                <button
                  type="button"
                  className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs py-1.5 px-3 rounded-lg flex items-center justify-center gap-1 shadow-md shadow-orange-500/20"
                >
                  Estimate <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-2.5 flex items-center justify-between text-[10px] text-zinc-400 border-t border-zinc-800/60 pt-2">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Free Drone Inspection
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> $0 Down Financing
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 25-Yr Workmanship
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 3D Badge 1: Top Right (Lifted in Z-space) */}
        <div
          style={{ transform: 'translateZ(45px)' }}
          className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/95 border border-orange-500/40 shadow-xl shadow-orange-500/15 backdrop-blur-md"
        >
          <div className="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
            <Zap className="w-4 h-4 fill-orange-400" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-zinc-400">Conversion Rate</div>
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              +42% Homeowner Leads
            </div>
          </div>
        </div>

        {/* Floating 3D Badge 2: Bottom Left (Lifted in Z-space) */}
        <div
          style={{ transform: 'translateZ(55px)' }}
          className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/95 border border-white/10 shadow-2xl backdrop-blur-md"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
          <div>
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              Project Architecture
            </div>
            <div className="text-xs font-bold text-white flex items-center gap-1">
              $2,500 High-Ticket Turnkey
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
