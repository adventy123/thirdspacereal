import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const studioIndex = [
  {
    title: 'Brand Strategy',
    scope: 'Positioning, voice, architecture, and launch planning.',
    focus: 'For new launches, bold rebrands, and teams that need clarity fast.',
    timeline: '/ 02-04 weeks',
  },
  {
    title: 'Identity Systems',
    scope: 'Logos, typography, color systems, and scalable design kits.',
    focus: 'For brands that want consistency across every touchpoint.',
    timeline: '/ 03-05 weeks',
  },
  {
    title: 'Web Experiences',
    scope: 'Custom sites with motion, narrative structure, and CMS support.',
    focus: 'For launches, campaigns, and digital homes built to convert.',
    timeline: '/ 04-08 weeks',
  },
  {
    title: 'Motion Direction',
    scope: '2D, 3D, transitions, loops, and product storytelling assets.',
    focus: 'For brands that need movement baked into the system, not added later.',
    timeline: '/ 02-06 weeks',
  },
  {
    title: 'Campaign Assets',
    scope: 'Launch visuals, social cutdowns, display graphics, and toolkits.',
    focus: 'For teams moving quickly across paid, organic, and owned channels.',
    timeline: '/ 01-03 weeks',
  },
  {
    title: 'Creative Retainers',
    scope: 'Ongoing design support for iteration, updates, and new releases.',
    focus: 'For companies that need a steady studio partner after launch.',
    timeline: '/ Monthly',
  },
];

export const Pricing = ({ onOpenQuote: _onOpenQuote }: { onOpenQuote: () => void }) => {
  return (
    <section id="index" className="bg-brand-beige px-3 py-28 md:px-5 md:py-32">
      <div className="mx-auto max-w-[2048px]">
        <div className="mb-12 flex items-center gap-3 px-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-grey">[ Studio Index ]</span>
          <ArrowDown size={12} className="text-brand-grey/80" />
        </div>

        <div className="mb-14 flex flex-col gap-4 px-2">
          <h2 className="max-w-[10ch] text-[clamp(3rem,6vw,5.6rem)] leading-[0.92] tracking-[-0.08em] text-brand-dark">
            We Build For Longevity<span className="text-brand-orange">.</span>
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand-orange">
            *Not for templates
          </p>
        </div>

        <div className="hidden border-b border-black/10 px-2 pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-black/36 lg:grid lg:grid-cols-[1.05fr_1.45fr_1.3fr_auto] lg:gap-8">
          <span>Focus</span>
          <span>Scope</span>
          <span>Best For</span>
          <span>Timing</span>
        </div>

        <div className="mt-2 flex flex-col">
          {studioIndex.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="grid gap-4 border-b border-black/10 px-2 py-6 lg:grid-cols-[1.05fr_1.45fr_1.3fr_auto] lg:gap-8 lg:py-7"
            >
              <div className="text-[1.45rem] leading-none tracking-[-0.05em] text-brand-dark">
                {item.title}
              </div>
              <p className="text-sm leading-relaxed text-black/56">
                {item.scope}
              </p>
              <p className="text-sm leading-relaxed text-black/56">
                {item.focus}
              </p>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/42 lg:text-right">
                {item.timeline}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
