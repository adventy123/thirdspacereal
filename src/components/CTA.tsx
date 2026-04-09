import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const CTA = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  return (
    <section id="cta" className="py-40 bg-brand-beige px-4 md:px-8 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="flex items-center gap-3">
          <div className="w-4 h-px bg-brand-grey/30" />
          <span className="text-brand-grey font-mono text-[10px] uppercase tracking-widest">( Seriously )</span>
          <div className="w-4 h-px bg-brand-grey/30" />
        </div>

        <div className="flex flex-col gap-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl md:text-9xl font-medium tracking-tighter text-brand-dark leading-[0.8]"
          >
            LET'S CUT
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl font-medium tracking-tighter text-brand-dark leading-[0.8]"
          >
            THE BS. 💩
          </motion.h2>
        </div>

        <motion.button 
          onClick={onOpenQuote}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group flex items-center gap-3 bg-brand-dark text-brand-offwhite px-8 py-4 rounded-2xl font-mono text-sm uppercase tracking-wider hover:bg-brand-orange transition-all duration-300 shadow-xl hover:shadow-brand-orange/20"
        >
          <span>Get a custom quote</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};
