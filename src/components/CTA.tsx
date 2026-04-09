import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const CTA = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f2f2f0_0%,#f0d4cd_100%)] py-40 text-center"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(179,39,44,0.18)_0%,rgba(179,39,44,0)_72%)]" />
      <div className="flex w-full flex-col items-center gap-12 px-11 md:px-[52px] lg:px-[68px]">
        <div className="flex items-center gap-3">
          <div className="h-px w-4 bg-brand-orange/30" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand-orange">
            ( Seriously )
          </span>
          <div className="h-px w-4 bg-brand-orange/30" />
        </div>

        <div className="flex flex-col gap-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl font-medium leading-[0.8] tracking-tighter text-brand-orange md:text-9xl"
          >
            LET&apos;S CUT
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-7xl font-medium leading-[0.8] tracking-tighter text-brand-dark md:text-9xl"
          >
            THE BS.
          </motion.h2>
        </div>

        <motion.button
          onClick={onOpenQuote}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group flex items-center gap-3 rounded-2xl bg-brand-orange px-8 py-4 font-mono text-sm uppercase tracking-wider text-brand-offwhite shadow-xl shadow-brand-orange/20 transition-all duration-300 hover:bg-brand-orange-deep"
        >
          <span>Get a custom quote</span>
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </section>
  );
};
