import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const CTA = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  return (
    <section id="cta" className="relative overflow-hidden bg-brand-beige px-3 py-28 text-center md:px-5 md:py-[8.5rem]">
      <div className="flex w-full flex-col items-center gap-12 px-8 md:px-[52px] lg:px-[68px]">
        <div className="flex items-center gap-3">
          <div className="h-px w-4 bg-black/12" />
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-black/42">
            ( Seriously )
          </span>
          <div className="h-px w-4 bg-black/12" />
        </div>

        <div className="flex max-w-[980px] flex-col gap-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(4rem,11vw,8rem)] leading-[0.82] tracking-[-0.08em] text-brand-dark"
          >
            LET&apos;S CUT
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(4rem,11vw,8rem)] leading-[0.82] tracking-[-0.08em] text-brand-dark"
          >
            THE BS<span className="text-brand-orange">.</span>
          </motion.h2>
        </div>

        <motion.button
          onClick={onOpenQuote}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group flex items-center gap-3 rounded-[12px] bg-brand-dark px-6 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-offwhite transition-all duration-300 hover:bg-brand-orange"
        >
          <span>Get a custom quote</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </section>
  );
};
