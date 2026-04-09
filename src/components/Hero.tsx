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
    <section className="relative min-h-screen bg-brand-beige p-3 md:p-5 overflow-hidden">
      <div className="relative w-full h-full min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-2.5rem)] bg-brand-dark rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,_#ff6d28_0%,_#141414_80%)] opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/50 via-transparent to-[#141414]/80" />
        </div>

        {/* 3D Motion Element Placeholder */}
        <motion.div 
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="absolute bottom-[-5%] right-[-5%] w-[120%] md:w-full max-w-4xl z-10 pointer-events-none"
        >
          <img 
            src="/hero-graphic.png" 
            alt="ThirdSpace Graphic" 
            className="w-full h-auto object-contain translate-y-[10%] translate-x-[5%]"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full px-8 lg:px-12 flex flex-col items-start gap-6 md:gap-8 translate-y-[-5%]"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="text-brand-offwhite font-mono text-[10px] uppercase tracking-widest">[ We are ThirdSpace ]</span>
            <ArrowRight size={12} className="text-brand-offwhite" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter text-brand-offwhite leading-[0.9] -ml-1"
          >
            Let's Take <br />
            Space Together
          </motion.h1>

          <motion.div variants={itemVariants} className="max-w-xl">
            <p className="text-brand-grey text-sm md:text-base leading-relaxed">
              We empower businesses by delivering innovative, data-driven strategies tailored to their unique goals. From crafting a strong brand identity to implementing high-impact digital marketing solutions, our team is dedicated to helping you establish a compelling presence in the digital space.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
            <button className="flex items-center gap-2 bg-white text-brand-dark px-6 py-2.5 rounded-[10px] font-mono text-[10px] uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all duration-300">
              <span>View Projects</span>
              <ArrowRight size={12} />
            </button>
            <button 
              onClick={onOpenQuote}
              className="flex items-center gap-2 bg-brand-dark text-white px-6 py-2.5 rounded-[10px] font-mono text-[10px] uppercase tracking-wider hover:bg-brand-orange transition-all duration-300 border border-white/10"
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
