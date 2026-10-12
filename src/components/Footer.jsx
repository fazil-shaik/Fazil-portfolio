import React from 'react';
import { ArrowUp, Hammer, Github, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070709] border-t border-zinc-900 py-12 text-zinc-500 text-xs">
      <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Description */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Hammer className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold text-sm tracking-tight block">
                FAZIL SHAIK
              </span>
              <span className="text-zinc-500 text-[11px] font-mono">
                Custom Web Design for Roofing & Remodeling Contractors
              </span>
            </div>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/fazil-shaik"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:fazilshaik103@gmail.com"
              className="text-zinc-400 hover:text-orange-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>fazilshaik103@gmail.com</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-600">
          <div>
            © {new Date().getFullYear()} Fazil Shaik. Built with precision for US roofing and remodeling businesses.
          </div>
          <div className="font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>$500 Target Turnkey • Available for Projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
