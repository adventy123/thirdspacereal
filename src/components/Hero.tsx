import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-brand-dark p-4 md:p-6 overflow-hidden">
      <div className="relative w-full h-full min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-4rem)] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[4px] md:border-[8px] border-white flex items-center justify-center">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,_#d97706_0%,_#000000_70%)] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </div>

        {/* 3D Motion Element Placeholder */}
        <motion.div 
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="absolute bottom-0 right-0 w-full max-w-3xl z-10 pointer-events-none"
        >
          <img 
            src="https://framerusercontent.com/images/WLlehktco1TfNksSpRJQdyFeN5M.webp" 
            alt="Motion Element" 
            className="w-full h-auto object-contain translate-y-1/4 translate-x-1/4 md:translate-x-0"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col items-start gap-8"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="text-brand-offwhite font-mono text-[10px] uppercase tracking-widest">[ We are Stōkt ]</span>
            <ArrowRight size={12} className="text-brand-offwhite" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-brand-offwhite leading-[0.9]"
          >
            MOVING <br />
            BRANDS <br />
            FORWARD
          </motion.h1>

          <motion.div variants={itemVariants} className="max-w-sm">
            <p className="text-brand-grey text-xs md:text-sm leading-relaxed">
              Stōkt builds motion-driven brand systems, unifying branding, web, and motion into a single evolving execution.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-lg font-mono text-[10px] uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all duration-300">
              <span>View Projects</span>
              <ArrowRight size={12} />
            </button>
            <button 
              onClick={onOpenQuote}
              className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg font-mono text-[10px] uppercase tracking-wider hover:bg-brand-orange transition-all duration-300 border border-white/10"
            >
              <span>Get a quote</span>
              <ArrowRight size={12} />
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Indicators */}
        <div className="absolute bottom-12 left-12 right-12 z-30 hidden lg:flex items-end justify-between pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col gap-2"
          >
            <span className="text-brand-grey font-mono text-[10px] uppercase tracking-widest">Scroll for more</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-4 text-brand-grey"
            >
              ↓
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-brand-grey font-mono text-[10px] uppercase tracking-widest">Est. in 2019</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
