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

export const AboutUs = () => {
  return (
    <section id="about-us" className="-mt-px mx-3 overflow-hidden rounded-[28px] rounded-t-none bg-brand-dark pb-20 pt-[4.5rem] md:mx-5 lg:mx-6">
      <div className="w-full px-8 md:px-[52px] lg:px-[68px]">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/52">[ About Us ]</span>
          <ArrowDown size={12} className="text-white/38" />
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex min-h-[300px] flex-col gap-6 lg:col-span-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-1 flex-col items-start justify-center gap-3 rounded-[24px] border border-white/8 bg-[#0b0b0b] px-8 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <span className="text-[clamp(2.8rem,4vw,4.2rem)] leading-none tracking-[-0.08em] text-brand-offwhite">{stat.value}</span>
                <span className="max-w-[10ch] text-[11px] tracking-[-0.03em] text-white/58">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative min-h-[520px] overflow-hidden rounded-[24px] border border-white/8 bg-[#0b0b0b] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:col-span-4"
          >
            <div className="relative z-10 flex flex-col gap-1">
              <h3 className="text-[13px] tracking-[-0.04em] text-brand-offwhite">Framer Pro Expert & Partner</h3>
              <button className="mb-1 flex items-center gap-2 text-[11px] tracking-[-0.03em] text-white/52 transition-colors hover:text-brand-offwhite">
                <span>Learn More</span>
                <ArrowRight size={10} />
              </button>
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-12 transition-transform duration-700 group-hover:scale-[1.04]">
              <img
                src="https://framerusercontent.com/images/tyrFyrRI41KJlV39p6QD9rGJdqQ.png"
                alt="3D abstract art"
                className="h-auto w-[58%] object-contain opacity-80 mix-blend-screen"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative min-h-[520px] overflow-hidden rounded-[24px] border border-white/8 bg-[#090909] px-6 pt-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:px-8 lg:col-span-6 lg:px-10"
          >
            <div className="pointer-events-none absolute inset-x-[12%] top-10 h-24 rounded-full bg-white/5 blur-[90px]" />
            <div className="relative z-10 flex flex-col items-center gap-3 text-center">
              <h3 className="max-w-[14ch] text-[clamp(1.9rem,2.8vw,3rem)] leading-[1.04] tracking-[-0.08em] text-[#f3efe7]">
                Based in Los Angeles, California
              </h3>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-[#71f15e] shadow-[0_0_18px_rgba(113,241,94,0.8)] animate-[availability-pulse_1.9s_ease-in-out_infinite]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/62">Available Worldwide</span>
              </div>
            </div>
            <div className="relative mt-8 w-[135%] max-w-none md:mt-10 lg:mt-2">
              <LocationGlobe markerLabel="Wireframe globe centered on North America with Los Angeles highlighted" />
            </div>
          </motion.div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-10 rounded-[24px] border border-white/5 bg-[#0b0b0b] p-8 md:grid-cols-[40%_1fr] md:p-10 lg:col-span-8 lg:gap-16"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl grayscale transition-all duration-700 hover:grayscale-0">
              <div className="absolute inset-0 z-10 bg-brand-orange opacity-40 mix-blend-overlay transition-all duration-500 hover:opacity-0" />
              <img
                src="https://framerusercontent.com/images/0OJxePdXlSnOuYrBCi4z3nrwBY.png"
                alt="Ian Lagac"
                className="h-full w-full object-cover"
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
              <button className="flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-grey transition-colors hover:text-brand-orange">
                <span>Work with Ian</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative min-h-[400px] overflow-hidden rounded-[24px] border border-white/5 bg-[#0b0b0b] p-8 lg:col-span-4"
          >
            <div className="relative z-10 flex flex-col gap-1">
              <h3 className="font-mono text-sm uppercase tracking-[0.24em] text-brand-offwhite">Framer Pro Expert</h3>
              <button className="mb-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-grey transition-colors hover:text-brand-orange">
                <span>Learn More</span>
                <ArrowRight size={10} />
              </button>
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 transition-opacity duration-500 group-hover:opacity-60">
              <img
                src="https://framerusercontent.com/images/9MGIf21V2NJoMgEdygDwEv9OvRQ.png"
                alt="Framer expert"
                className="h-auto w-1/2 rotate-12"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex w-full flex-col justify-start gap-8 overflow-hidden rounded-[24px] border border-white/5 bg-[#0b0b0b] py-6 pl-6 pr-0 md:flex-row md:items-center md:gap-10 md:py-8 md:pl-8"
        >
          <div className="z-20 flex flex-none flex-col gap-1 bg-[#0b0b0b]">
            <h3 className="font-mono text-sm text-brand-offwhite">Everyday&apos;s Toolbox</h3>
            <p className="text-[10px] uppercase tracking-[0.22em] text-brand-grey">Mastered for every project.</p>
          </div>
          <div className="relative z-10 flex flex-1 items-center gap-4 overflow-x-hidden">
            <div className="pointer-events-none absolute bottom-0 top-0 -left-1 z-20 w-8 bg-gradient-to-r from-[#0b0b0b] to-transparent" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-[#0b0b0b] to-transparent" />
            <div className="flex w-max items-center gap-4">
              {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
                <div
                  key={index}
                  className="flex aspect-square w-12 flex-none items-center justify-center rounded-2xl border border-white/5 bg-brand-dark p-3 transition-colors hover:border-brand-orange/30 md:w-16"
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
