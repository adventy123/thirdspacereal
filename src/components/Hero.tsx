import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';

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
    <section className="relative overflow-hidden bg-brand-beige p-2 md:p-3 h-[100svh] min-h-[600px] flex flex-col">
      <div className="relative flex flex-1 w-full overflow-hidden rounded-[20px] bg-[#060403] shadow-[0_26px_90px_rgba(20,20,20,0.18)]">
        <div className="absolute inset-0 z-0 bg-[#060403]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_65%,rgba(224,90,30,0.95)_0%,rgba(168,36,10,0.85)_25%,rgba(50,8,4,0.7)_55%,rgba(6,4,3,0.98)_85%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_50%)]" />
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="pointer-events-none absolute bottom-[0%] right-[-10%] z-10 w-[110%] min-w-[500px] max-w-[900px] md:bottom-[5%] md:right-[0%] md:w-[60%] lg:w-[50%]"
        >
          <img
            src="/hero-graphic.png"
            alt="ThirdSpace emblem"
            className="h-auto w-full object-contain saturate-110 drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 flex h-full w-full flex-col justify-center px-8 pt-16 md:px-16 lg:px-24"
        >
          <div className="max-w-[900px]">
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/50">( We are ThirdSpace )</span>
              <ArrowRight size={10} className="text-white/50" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(3.8rem,7.5vw,8.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-white"
            >
              MOVING BRANDS<br />FORWARD
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-4 max-w-[28rem]">
              <p className="text-[13px] leading-[1.6] text-white/80 md:text-[14px]">
                ThirdSpace builds motion-led brand systems, unifying identity, web, and digital storytelling into one evolving execution.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="flex items-center gap-2 rounded-lg bg-[#f3f3f3] px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.24em] text-brand-dark transition-transform duration-300 hover:scale-105"
              >
                <span>View Projects</span>
                <ArrowRight size={10} />
              </a>
              <button
                onClick={onOpenQuote}
                className="flex items-center gap-2 rounded-lg bg-[#181818] px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-[#252525]"
              >
                <span>Get a quote</span>
                <ArrowRight size={10} />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer anchors */}
        <div className="pointer-events-none absolute bottom-8 left-8 right-8 z-30 flex items-end justify-between font-sans text-xs text-white/60 md:bottom-10 md:left-16 md:right-16 lg:left-24 lg:right-24">
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pointer-events-auto flex items-center gap-2 transition-colors hover:text-white"
          >
            <span>Scroll for more</span>
            <ArrowDown size={12} />
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Est. in 2019
          </motion.div>
        </div>
      </div>
    </section>
  );
};
