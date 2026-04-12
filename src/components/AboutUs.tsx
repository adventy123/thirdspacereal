import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { LocationGlobe } from './LocationGlobe';

const stats = [
  { label: 'Years of Experience', value: '13+' },
  { label: 'Awards & Recognition', value: '15+' },
  { label: 'Satisfied Clients', value: '350+' }
];

const tools = [
  'https://framerusercontent.com/images/BMe8vlkPa8N2JjxcYLPmKLGiBzM.png',
  'https://framerusercontent.com/images/tyrFyrRI41KJlV39p6QD9rGJdqQ.png',
  'https://framerusercontent.com/images/FGGGajHla0WnjjtcGnGW7goBjk.svg',
  'https://framerusercontent.com/images/VuAmmArWANl1IkqLWKaUA4bGlw.png',
  'https://framerusercontent.com/images/hrb7ZJ8C0JfUTXU3LHoy5mAGeM.svg',
  'https://framerusercontent.com/images/dFaAjllKgR12icoWbwt5LRMd8Co.svg',
  'https://framerusercontent.com/images/VC5o6lscCcFa03XfPOdeZltqxdQ.png',
];

export const AboutUs = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  return (
    <section id="about-us" className="-mt-px mx-3 overflow-hidden rounded-xl rounded-t-none bg-[#141414] pb-20 pt-[4.5rem] md:mx-5">
      <div className="w-full px-8 md:px-[52px] lg:px-[68px]">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/52">[ About Us ]</span>
          <ArrowDown size={12} className="text-white/38" />
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-4 lg:h-[400px]">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-white/8 bg-[#141414] px-4 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] text-center"
              >
                <span className="text-[clamp(2.2rem,3vw,3.2rem)] font-medium leading-none tracking-tight text-brand-offwhite">{stat.value}</span>
                <span className="text-[11px] tracking-tight text-white/50">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] overflow-hidden rounded-xl border border-white/8 bg-[#141414] px-6 pt-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:px-8 lg:col-span-8 lg:px-10 flex flex-col"
          >

            <div className="relative z-20 flex flex-col items-center gap-2 text-center mt-2">
              <h3 className="text-[20px] md:text-[22px] tracking-tight text-[#f3efe7]">
                Based in Los Angeles, California
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="relative flex h-2 w-2 items-center justify-center">
                  <div className="absolute h-full w-full animate-[availability-pulse_3s_ease-out_infinite] rounded-full bg-[#71f15e] opacity-75" />
                  <div className="relative h-1.5 w-1.5 rounded-full bg-[#71f15e] shadow-[0_0_12px_rgba(113,241,94,1)]" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">Available Worldwide</span>
              </div>
            </div>
            
            <div className="absolute left-1/2 top-[30%] md:top-[35%] z-[5] w-[130%] md:w-[115%] lg:w-[120%] max-w-[600px] -translate-x-1/2 pointer-events-auto">
              <LocationGlobe markerLabel="Wireframe globe centered on North America with Los Angeles highlighted" />
            </div>
          </motion.div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-10 rounded-xl border border-white/5 bg-[#141414] p-8 md:grid-cols-[40%_1fr] md:p-10 lg:col-span-12 lg:grid-cols-[30%_1fr] lg:gap-16"
          >
            <div className="group/photo relative aspect-[4/5] overflow-hidden rounded-xl transition-all duration-700">
              <div className="pointer-events-none absolute inset-0 z-10 bg-brand-orange opacity-0 mix-blend-color transition-opacity duration-500 group-hover/photo:opacity-40" />
              <img
                src="/founder-photo.png"
                alt="Ian Lagac"
                className="h-full w-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1">
                <span className="text-xl text-white">Ian Lagac</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">Founder and CEO</span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 py-2">
              <div className="flex flex-col gap-6">
                <h3 className="text-3xl tracking-[-0.05em] text-brand-offwhite">The Founder</h3>
                <p className="text-xs leading-relaxed text-brand-grey lg:text-sm">
                  Ian founded ThirdSpace after spending the early part of his career in agencies. His ambition has always been to bring movement into traditionally static brand systems, a vision now fully aligned with today&apos;s digital landscape.
                </p>
                <p className="text-xs leading-relaxed text-brand-grey lg:text-sm">
                  His work blends art direction, motion, and web development, with a focus on cohesive, motion-driven brand systems. Working from concept to execution, Ian designs experiences guided by clarity, intent, and precision, believing aesthetics only matter when they serve a clear purpose.
                </p>
                <p className="text-xs leading-relaxed text-brand-grey lg:text-sm">
                  From small to large-scale projects, Ian leads independently or assembles tailored teams as needed. Through ThirdSpace, he partners closely with brands seeking meaningful growth, remaining deeply involved to ensure every decision is intentional and built to last.
                </p>
                <div className="mt-4 font-mono text-xl text-brand-offwhite/50">*</div>
              </div>
              <button 
                onClick={onOpenQuote}
                className="flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-grey transition-colors hover:text-brand-orange"
              >
                <span>Work with Ian</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>


        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex w-full flex-col justify-start gap-8 overflow-hidden rounded-xl border border-white/5 bg-[#141414] py-6 pl-6 pr-0 md:flex-row md:items-center md:gap-10 md:py-8 md:pl-8"
        >
          <div className="z-20 flex flex-none flex-col gap-1 bg-[#141414]">
            <h3 className="font-mono text-sm text-brand-offwhite">Everyday&apos;s Toolbox</h3>
            <p className="text-[10px] uppercase tracking-[0.22em] text-brand-grey">Mastered for every project.</p>
          </div>
          <div className="relative z-10 flex flex-1 items-center gap-4 overflow-x-hidden">
            <div className="pointer-events-none absolute bottom-0 top-0 -left-1 z-20 w-8 bg-gradient-to-r from-[#141414] to-transparent" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-[#141414] to-transparent" />
            <div className="flex w-max items-center gap-4">
              {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
                <div
                  key={index}
                  className="flex aspect-square w-12 flex-none items-center justify-center rounded-2xl border border-white/5 bg-[#141414] p-3 transition-colors hover:border-brand-orange/30 md:w-16"
                >
                  <img
                    src={tool}
                    alt="Tool logo"
                    className="h-full w-full object-contain opacity-50 drop-shadow-md transition-opacity hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
