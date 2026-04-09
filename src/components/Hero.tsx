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
    <section className="relative overflow-hidden bg-[#060403] p-2 md:p-3 h-[100svh] min-h-[600px] flex flex-col">
      <div className="relative flex flex-1 w-full overflow-hidden rounded-xl rounded-b-none bg-[#060403]">
        <div className="absolute inset-0 z-0 bg-[#060403]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_65%,rgba(224,90,30,0.95)_0%,rgba(168,36,10,0.85)_25%,rgba(50,8,4,0.7)_55%,rgba(6,4,3,0.98)_85%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_50%)]" />
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="pointer-events-none absolute bottom-[-10%] right-[-10%] z-10 w-[110%] min-w-[500px] max-w-[800px] md:bottom-[-20%] md:right-[-5%] md:w-[55%] lg:w-[45%]"
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
          className="relative z-20 flex h-full w-full flex-col justify-center px-5 pt-16 md:px-[36px]"
        >
          <div className="max-w-[900px]">
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/50">( We are ThirdSpace )</span>
              <ArrowRight size={10} className="text-white/50" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.98] tracking-[-0.04em] text-white"
            >
              Let’s Take Space<br />Together.
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-4 max-w-[42rem]">
              <p className="text-[13px] leading-[1.6] text-white/80 md:text-[14px]">
                We empower businesses by delivering innovative, data-driven strategies tailored to their unique goals. From crafting a strong brand identity to implementing high-impact digital marketing solutions, our team is dedicated to helping you establish a compelling presence in the digital space.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="flex items-center gap-2 rounded-lg bg-[#f3f3f3] px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.24em] text-brand-dark transition-all duration-300 hover:scale-105 hover:bg-brand-orange hover:text-white"
              >
                <span>View Projects</span>
                <ArrowRight size={10} />
              </a>
              <button
                onClick={onOpenQuote}
                className="flex items-center gap-2 rounded-lg bg-[#181818] px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-brand-orange hover:text-white"
              >
                <span>Get a quote</span>
                <ArrowRight size={10} />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer anchors */}
        <div className="pointer-events-none absolute bottom-8 z-30 flex w-full items-end justify-between px-5 font-sans text-xs text-white/60 md:bottom-10 md:px-[36px]">
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
