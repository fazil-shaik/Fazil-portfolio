import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Check, Mail, MessageSquare, ArrowRight, ShieldCheck, Loader2, ExternalLink } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'fazilshaik103@gmail.com';
  const directMailtoLink = `mailto:${directEmail}?subject=${encodeURIComponent('Contractor Website Inquiry - Fazil Shaik')}`;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${directEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          website: formData.website || 'None provided',
          budget: formData.budget,
          requirements: formData.requirements,
          _subject: `New Client Project Inquiry: ${formData.businessName} (${formData.name})`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
          _url: typeof window !== 'undefined' ? window.location.href : 'https://fazil-portfolio-ivory.vercel.app',
        }),
      });

      const result = await response.json().catch(() => ({}));

      const isSuccess = response.ok && (result.success === 'true' || result.success === true);

      if (isSuccess) {
        setSubmitStatus('success');
      } else {
        throw new Error(result.message || 'Unable to deliver message at this time.');
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setSubmitStatus('error');
      setErrorMessage(
        err.message || 'Network or browser extension prevented automated delivery. You can send your inquiry directly via your email client using the button below.'
      );
    } finally {
      setIsSubmitting(false);
    }
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

              {/* Direct email card with direct access */}
              <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-orange-400" />
                    <span>Direct Email Access</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Direct Inbox
                  </span>
                </div>
                
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-zinc-900/90 border border-white/5">
                  <a
                    href={directMailtoLink}
                    className="text-sm font-semibold text-white font-mono break-all hover:text-orange-400 transition-colors"
                    title="Click to open your email app"
                  >
                    {directEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0 flex items-center gap-1 text-xs"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-[11px] font-mono">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-zinc-400 text-[11px] font-mono">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={directMailtoLink}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-300 hover:text-white font-mono text-xs font-semibold transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>Open in Email App (Direct Mail)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-zinc-500 text-center font-mono">
                  Opens Gmail, Outlook, or Apple Mail directly
                </p>
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
              
              {submitStatus === 'success' ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Delivered to Inbox
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                      Inquiry Sent to Fazil!
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your project brief has been dispatched directly to <strong>{directEmail}</strong>. I review every submission personally within 24 hours.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-left text-xs font-mono space-y-1.5 max-w-md mx-auto shadow-inner">
                    <div className="flex justify-between items-center text-zinc-400 border-b border-zinc-800/80 pb-2 mb-1">
                      <span className="text-[11px] uppercase tracking-wider">Transmission Receipt</span>
                      <span className="text-emerald-400 text-[11px] font-semibold">Status: Delivered</span>
                    </div>
                    <div><span className="text-zinc-500">Business:</span> <span className="text-zinc-200">{formData.businessName}</span></div>
                    <div><span className="text-zinc-500">Work Email:</span> <span className="text-zinc-200">{formData.email}</span></div>
                    <div><span className="text-zinc-500">Target Budget:</span> <span className="text-orange-400">{formData.budget}</span></div>
                    <div><span className="text-zinc-500">Delivered To:</span> <span className="text-zinc-300">{directEmail}</span></div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-colors gap-2"
                    >
                      <Mail className="w-4 h-4" /> Email Additional Files
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitStatus(null);
                        setFormData({
                          name: '',
                          businessName: '',
                          email: '',
                          website: '',
                          budget: '$500 (Standard Turnkey)',
                          requirements: '',
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-sm transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 space-y-2">
                      <div className="flex items-center gap-2 font-semibold text-red-200">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>Could not dispatch automated form</span>
                      </div>
                      <p>{errorMessage}</p>
                      <a
                        href={mailtoLink}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 text-orange-200 hover:text-white font-medium transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send directly via Email Client instead</span>
                      </a>
                    </div>
                  )}
                  
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
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base shadow-xl shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Transmitting to Fazil's Inbox...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Directly to My Inbox</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 pt-1">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Drops directly to {directEmail}</span>
                    </div>
                    <a
                      href={mailtoLink}
                      className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1 font-mono text-[11px]"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Or compose in email client</span>
                    </a>
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
