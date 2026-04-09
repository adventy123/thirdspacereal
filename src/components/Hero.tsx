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
    <section className="relative min-h-screen overflow-hidden bg-brand-beige p-3 md:p-5">
      <div className="relative flex min-h-[calc(100vh-1.5rem)] w-full items-center justify-center overflow-hidden rounded-[26px] bg-brand-dark shadow-lg md:min-h-[calc(100vh-2.5rem)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#070506]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_110%,_#f4c07d_0%,_#eb9250_20%,_#cf5f31_37%,_#982521_56%,_#4f0710_76%,_rgba(7,5,6,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_48%,_rgba(179,39,44,0.34)_0%,_rgba(115,15,33,0.18)_30%,_rgba(7,5,6,0)_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_28%,_rgba(0,0,0,0.98)_0%,_rgba(0,0,0,0.92)_24%,_rgba(0,0,0,0.4)_46%,_rgba(0,0,0,0)_68%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_96%_18%,_rgba(0,0,0,0.78)_0%,_rgba(0,0,0,0.34)_20%,_rgba(0,0,0,0)_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.22)_18%,rgba(0,0,0,0.04)_43%,rgba(0,0,0,0.14)_62%,rgba(0,0,0,0.5)_82%,rgba(0,0,0,0.82)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-[18%] bg-[linear-gradient(180deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0)_100%)]" />
          <div className="absolute bottom-[-20%] left-1/2 h-[44%] w-[88%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_0%,_rgba(242,242,240,0.34)_0%,_rgba(242,242,240,0.1)_22%,_rgba(242,242,240,0)_66%)] blur-3xl" />
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="pointer-events-none absolute bottom-[-11%] right-[-18%] z-10 w-[155%] max-w-none md:bottom-[-18%] md:right-[-8%] md:w-[76%] md:max-w-[1320px]"
        >
          <img src="/hero-graphic.png" alt="ThirdSpace Graphic" className="h-auto w-full object-contain" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 flex w-full max-w-[1600px] flex-col items-start gap-5 px-8 pb-28 pt-32 md:gap-7 md:px-12 md:pb-20 md:pt-40 lg:px-12"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-brand-offwhite">
              [ We are ThirdSpace ]
            </span>
            <ArrowRight size={12} className="text-brand-offwhite" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-[7ch] text-[3.3rem] font-medium leading-[0.86] tracking-[-0.08em] text-brand-offwhite md:text-[5.5rem] lg:text-[6.6rem]"
          >
            Let&apos;s Take
            <br />
            Space Together
          </motion.h1>

          <motion.div variants={itemVariants} className="max-w-[520px]">
            <p className="text-[15px] leading-[1.34] text-[#f2f2f0]/80 md:text-[1.05rem]">
              We empower businesses by delivering innovative, data-driven strategies tailored to
              their unique goals. From crafting a strong brand identity to implementing high-impact
              digital marketing solutions, our team is dedicated to helping you establish a
              compelling presence in the digital space.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-2 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-[10px] bg-white px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-dark transition-all duration-300 hover:bg-brand-orange hover:text-white">
              <span>View Projects</span>
              <ArrowRight size={12} />
            </button>
            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 rounded-[10px] border border-white/10 bg-brand-dark px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-brand-orange"
            >
              <span>Get a quote</span>
              <ArrowRight size={12} />
            </button>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-12 left-12 right-12 z-30 hidden items-end justify-between lg:flex">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col gap-2"
          >
            <span className="font-sans text-[1.05rem] text-brand-offwhite">Scroll for more</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="h-4 w-4 text-brand-offwhite"
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="font-sans text-[1.05rem] text-brand-offwhite">Est. in 2019</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
