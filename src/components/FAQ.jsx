import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How much does a custom contractor website cost?',
      a: 'The flagship turnkey contractor website package is a flat $500 investment. This includes custom 3D and UI design, complete frontend development, interactive quote calculator, mobile-first responsive optimization, local SEO schema, domain configuration, and 30 days of post-launch support. No surprise hourly fees.',
    },
    {
      q: 'What is the turnaround timeline from kickoff to launch?',
      a: 'Most projects launch in 2 to 3 weeks. Week 1 is dedicated to discovery, positioning, and bespoke UI design. Week 2 covers custom coding and lead capture funnel development. Week 3 focuses on cross-device testing, SEO verification, and live domain deployment.',
    },
    {
      q: 'What materials do you need from me to get started?',
      a: 'Very little to begin: your company logo, a list of your top service areas (cities/zip codes), photos of past roof or remodeling projects (smartphones photos work great), and any existing reviews. I handle the copywriting structure, visual layout, and technical build.',
    },
    {
      q: 'Will the website be optimized for mobile smartphones?',
      a: 'Absolutely. Over 75% of homeowners looking for roofing and remodeling contractors browse from mobile devices (often right after a storm or during evening research). Every component, button, and quote form is engineered specifically for thumb navigation and rapid loading on 4G/5G mobile connections.',
    },
    {
      q: 'Are there mandatory monthly retainers or locked contracts?',
      a: 'No. You own 100% of your website code, assets, and domain. Modern static and serverless architectures cost pennies (often $0 - $15/month for cloud hosting via Vercel or Netlify) compared to expensive $200 - $500/month agency retainers. If you want ongoing monthly updates or SEO campaigns, we can arrange that separately.',
    },
    {
      q: 'How do homeowner leads reach me when they submit a form or estimate?',
      a: 'Form submissions trigger instant email alerts directly to your phone and office inbox with complete homeowner project details (address, material interest, roof size, phone number). We can also route submissions directly into your CRM (JobNimbus, AccuLynx, HubSpot, etc.) via webhooks.',
    },
  ];

  return (
    <section id="faq" className="relative py-28 bg-[#0b0c10] border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (Top-down entrance) */}
        <div data-aos="fade-down" className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-orange-500/30 text-xs font-mono text-orange-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clear Answers About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Pricing & Process
            </span>
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Straightforward details with zero agency jargon. If you have any additional questions, feel free to reach out directly.
          </p>
        </div>

        {/* Accordion (Staggered bottom-up entrance) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 60 + 50}
                className="rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-orange-500/30 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-orange-500/20 text-orange-400' : 'text-zinc-400'
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-zinc-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
