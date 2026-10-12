import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Check, Mail, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    website: '',
    budget: '$500 (Standard Turnkey)',
    requirements: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'fazilshaik103@gmail.com'; // Verified contact address

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your contracting business name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.requirements.trim()) {
      errs.requirements = 'Please describe your project or primary goals';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoSubject = encodeURIComponent(`Website Inquiry: ${formData.businessName || 'Contractor Project'}`);
  const mailtoBody = encodeURIComponent(
    `Hi Fazil,\n\nName: ${formData.name}\nBusiness: ${formData.businessName}\nWork Email: ${formData.email}\nExisting Website: ${formData.website || 'None'}\nBudget: ${formData.budget}\n\nProject Requirements:\n${formData.requirements}\n\nLooking forward to discussing!`
  );
  const mailtoLink = `mailto:${directEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="relative py-28 bg-[#09090b] border-t border-zinc-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-orange-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Top-down entrance) */}
        <div data-aos="fade-down" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-orange-400 mb-4">
            <Send className="w-3.5 h-3.5" />
            <span>Direct Project Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Discuss Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Contractor Website
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Tell me about your roofing or remodeling business, your target markets, and when you want to launch. I review every submission personally within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Availability (Bottom-up entrance) */}
          <div data-aos="fade-up" data-aos-delay="100" className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-3xl bg-zinc-900/80 border border-white/10 shadow-xl space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Accepting New Projects (Q4 / Q1)
                </span>
                <h3 className="text-xl font-bold text-white mt-3">
                  Direct Line to the Engineer
                </h3>
                <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                  No pushy sales reps or high-pressure pitches. Just an honest discussion about your digital presence, timeline, and how to increase your homeowner discovery calls.
                </p>
              </div>

              {/* Direct email card */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Direct Email
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-white font-mono break-all">
                    {directEmail}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Verified Turnkey Highlights */}
              <div className="space-y-3 pt-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Target Flat Price: <strong>$500</strong> turnkey</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Delivery in <strong>2 to 3 weeks</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>30-Day post-launch warranty included</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Notice (Bottom-up entrance) */}
            <div data-aos="fade-up" data-aos-delay="200" className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-200/90 leading-relaxed">
              <strong className="block text-white font-semibold mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" /> Free 15-Minute Website Audit
              </strong>
              Already have an existing roofing or remodeling website? Include your URL and I will personally review your mobile responsiveness, page load speed, and conversion roadblocks prior to our call.
            </div>

          </div>

          {/* Right Column: Inquiry Form (Bottom-up entrance) */}
          <div data-aos="fade-up" data-aos-delay="150" className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-white/10 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Project Inquiry Prepared!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your project brief for <strong>{formData.businessName}</strong> has been structured and validated.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-left text-xs font-mono space-y-1.5 max-w-md mx-auto">
                    <div><span className="text-zinc-500">Business:</span> <span className="text-zinc-200">{formData.businessName}</span></div>
                    <div><span className="text-zinc-500">Work Email:</span> <span className="text-zinc-200">{formData.email}</span></div>
                    <div><span className="text-zinc-500">Target Budget:</span> <span className="text-orange-400">{formData.budget}</span></div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-colors"
                    >
                      <Send className="w-4 h-4 mr-2" /> Open in Email Client
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-sm transition-colors"
                    >
                      Edit Inquiry Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                        Your Full Name <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                          errors.name ? 'border-red-500' : 'border-zinc-700'
                        } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 transition-colors`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                        Contracting Business <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Miller Roofing & Exteriors"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                          errors.businessName ? 'border-red-500' : 'border-zinc-700'
                        } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 transition-colors`}
                      />
                      {errors.businessName && <p className="mt-1 text-xs text-red-400">{errors.businessName}</p>}
                    </div>
                  </div>

                  {/* Work Email & Existing Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                        Work Email <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@millerroofing.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                          errors.email ? 'border-red-500' : 'border-zinc-700'
                        } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 transition-colors`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                        Existing Website <span className="text-zinc-500 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="url"
                        placeholder="https://yourcurrentsite.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                      Target Project Investment <span className="text-zinc-500 font-normal lowercase">(optional)</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-700 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="$500 (Standard Turnkey)">$500 (Standard Turnkey Package - Recommended)</option>
                      <option value="$500 - $1,000 (Multi-City / Expanded Services)">$500 - $1,000 (Multi-City SEO / Expanded Services)</option>
                      <option value="$1,000+ (Custom Enterprise / Portal)">$1,000+ (Custom Enterprise / Contractor Portal)</option>
                    </select>
                  </div>

                  {/* Requirements */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                      Project Requirements & Target Launch Date <span className="text-orange-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="We need a new high-converting website for our residential roofing and siding business in the Dallas metro area. We want homeowners to be able to request drone inspections and instant quote ranges..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-black/50 border ${
                        errors.requirements ? 'border-red-500' : 'border-zinc-700'
                      } text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 transition-colors`}
                    />
                    {errors.requirements && <p className="mt-1 text-xs text-red-400">{errors.requirements}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-base shadow-xl shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Project Inquiry</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 text-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Strict confidentiality. No spam. You will hear back in &lt; 24 hours.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
