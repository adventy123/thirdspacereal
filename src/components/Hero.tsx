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
    <section className="relative overflow-hidden bg-brand-beige px-3 pb-0 pt-[84px] md:px-5 md:pt-[108px]">
      <div className="relative flex min-h-[780px] w-full overflow-hidden rounded-[28px] bg-brand-dark shadow-[0_26px_90px_rgba(20,20,20,0.18)] md:min-h-[860px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#080707]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_84%,rgba(237,182,120,0.98)_0%,rgba(226,116,57,0.94)_18%,rgba(179,39,44,0.88)_46%,rgba(115,15,33,0.72)_70%,rgba(8,7,7,0.88)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_32%,rgba(179,39,44,0.54)_0%,rgba(115,15,33,0.16)_34%,rgba(8,7,7,0)_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_42%,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.93)_22%,rgba(0,0,0,0.58)_42%,rgba(0,0,0,0)_68%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_6%,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.42)_24%,rgba(0,0,0,0)_48%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.16)_30%,rgba(0,0,0,0)_52%,rgba(0,0,0,0.18)_76%,rgba(0,0,0,0.5)_100%)]" />
          <div className="absolute inset-x-[8%] bottom-[-16%] h-[42%] rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(242,242,240,0.42)_0%,rgba(242,242,240,0.12)_30%,rgba(242,242,240,0)_74%)] blur-3xl" />
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="pointer-events-none absolute bottom-[-22%] right-[-32%] z-10 w-[138%] min-w-[720px] max-w-[1540px] md:bottom-[-24%] md:right-[-14%] md:w-[88%]"
        >
          <img
            src="/hero-graphic.png"
            alt="ThirdSpace emblem"
            className="h-auto w-full object-contain saturate-[1.08]"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 flex min-h-[780px] w-full flex-col justify-between px-6 py-10 md:min-h-[860px] md:px-10 md:py-12 lg:px-12"
        >
          <div className="flex flex-1 flex-col justify-center">
            <div className="max-w-[440px]">
              <motion.div variants={itemVariants} className="mb-6 flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/64">[ We are ThirdSpace ]</span>
                <ArrowRight size={12} className="text-white/64" />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="max-w-[8ch] text-[clamp(3.6rem,8vw,7rem)] leading-[0.9] tracking-[-0.08em] text-brand-offwhite"
              >
                MOVING BRANDS FORWARD
              </motion.h1>

              <motion.div variants={itemVariants} className="mt-6 max-w-[32rem]">
                <p className="text-sm leading-relaxed text-[#f2f2f0]/84 md:text-base">
                  ThirdSpace builds motion-led brand systems, unifying identity, web, and digital storytelling into one evolving execution.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="flex items-center gap-2 rounded-[10px] bg-brand-offwhite px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-dark transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span>View Projects</span>
                  <ArrowRight size={12} />
                </a>
                <button
                  onClick={onOpenQuote}
                  className="flex items-center gap-2 rounded-[10px] bg-[#090909] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-brand-orange"
                >
                  <span>Get a quote</span>
                  <ArrowRight size={12} />
                </button>
              </motion.div>
            </div>
          </div>

          <div className="relative z-30 flex flex-col gap-6 pt-12 md:flex-row md:items-end md:justify-between">
            <motion.a
              href="#portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="inline-flex items-center gap-2 font-sans text-sm text-white/82 transition-colors hover:text-white"
            >
              <span>Scroll for more</span>
              <ArrowDown size={14} />
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="font-sans text-sm text-white/82 md:text-right"
            >
              Est. in 2019
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
