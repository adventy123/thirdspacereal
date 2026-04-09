import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { LocationGlobe } from './LocationGlobe';

const stats = [
  { label: 'Years of Experience', value: '13+' },
  { label: 'Awards & Recognition', value: '15+' },
  { label: 'Satisfied Clients', value: '350+' }
];

const tools = [
  'https://framerusercontent.com/images/BMe8vlkPa8N2JjxcYLPmKLGiBzM.png', // C4D
  'https://framerusercontent.com/images/tyrFyrRI41KJlV39p6QD9rGJdqQ.png', // Spline
  'https://framerusercontent.com/images/FGGGajHla0WnjjtcGnGW7goBjk.svg', // Figma
  'https://framerusercontent.com/images/VuAmmArWANl1IkqLWKaUA4bGlw.png', // AE
  'https://framerusercontent.com/images/hrb7ZJ8C0JfUTXU3LHoy5mAGeM.svg', // PS
  'https://framerusercontent.com/images/dFaAjllKgR12icoWbwt5LRMd8Co.svg', // AI
  'https://framerusercontent.com/images/VC5o6lscCcFa03XfPOdeZltqxdQ.png', // Framer
];

export const AboutUs = () => {
  return (
    <section id="about-us" className="py-32 bg-brand-dark overflow-hidden">
      <div className="w-full px-11 md:px-[52px] lg:px-[68px]">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-brand-grey font-mono text-[10px] uppercase tracking-widest text-white/50">( About Us )</span>
          <div className="w-4 h-px bg-white/20" />
        </div>

        {/* Tier 1: Stats, Art, Location */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* Stats Column */}
          <div className="lg:col-span-2 flex flex-col gap-6 min-h-[300px]">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0b0b0b] border border-white/8 rounded-[26px] px-8 py-7 flex flex-col items-start justify-center gap-3 flex-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <span className="text-[clamp(2.8rem,4vw,4.2rem)] leading-none font-medium text-brand-offwhite tracking-[-0.08em]">{stat.value}</span>
                <span className="max-w-[10ch] text-[11px] font-sans tracking-[-0.03em] text-white/58">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Framer Middle Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-[#0b0b0b] border border-white/8 rounded-[26px] p-8 flex flex-col justify-end overflow-hidden relative group min-h-[520px] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            <div className="relative z-10 flex flex-col gap-1">
              <h3 className="text-[13px] font-medium text-brand-offwhite tracking-[-0.04em]">Framer Pro Expert & Partner</h3>
              <button className="flex items-center gap-2 text-white/52 hover:text-brand-offwhite transition-colors text-[11px] tracking-[-0.03em] mb-1">
                <span>Learn More</span>
                <ArrowRight size={10} />
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 pb-12 group-hover:scale-[1.04]">
              <img src="https://framerusercontent.com/images/tyrFyrRI41KJlV39p6QD9rGJdqQ.png" alt="3D Abstract Art" className="w-[58%] h-auto object-contain opacity-80 mix-blend-screen" />
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-[#090909] border border-white/8 rounded-[26px] px-6 md:px-8 lg:px-10 pt-10 flex flex-col items-center relative overflow-hidden min-h-[520px] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            <div className="pointer-events-none absolute inset-x-[12%] top-10 h-24 rounded-full bg-white/5 blur-[90px]" />
            <div className="relative z-10 flex flex-col items-center gap-3 text-center">
               <h3 className="max-w-[14ch] text-[clamp(1.9rem,2.8vw,3rem)] leading-[1.04] font-medium tracking-[-0.08em] text-[#f3efe7]">Based in Los Angeles, California</h3>
               <div className="flex items-center gap-3">
                 <div className="h-4 w-4 rounded-full bg-[#71f15e] shadow-[0_0_18px_rgba(113,241,94,0.8)] animate-[availability-pulse_1.9s_ease-in-out_infinite]" />
                 <span className="text-[11px] font-mono uppercase tracking-[0.32em] text-white/62">Available Worldwide</span>
               </div>
            </div>
            <div className="relative mt-8 w-[135%] max-w-none md:mt-10 lg:mt-2">
              <LocationGlobe markerLabel="Wireframe globe centered on North America with Los Angeles highlighted" />
            </div>
          </motion.div>
          
        </div>

        {/* Tier 2: Founder & Expert */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* Founder Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-[#111] border border-white/5 rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-[40%_1fr] gap-10 lg:gap-16"
          >
            {/* LEFT: Image */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 bg-brand-orange mix-blend-overlay opacity-40 hover:opacity-0 transition-all duration-500 z-10" />
              <img 
                src="https://framerusercontent.com/images/0OJxePdXlSnOuYrBCi4z3nrwBY.png" 
                alt="Ian Lagac" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 flex flex-col gap-1 z-20">
                <span className="text-xl font-medium text-white">Ian Lagac</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">Founder and CEO</span>
              </div>
            </div>

            {/* RIGHT: Text */}
            <div className="flex flex-col gap-8 justify-between py-2">
              <div className="flex flex-col gap-6">
                <h3 className="text-3xl font-medium text-brand-offwhite tracking-tight">The Founder</h3>
                <p className="text-brand-grey text-xs lg:text-sm leading-relaxed">
                  Ian founded ThirdSpace after spending the early part of his career in agencies. His ambition has always been to bring movement into traditionally static brand systems, a vision now fully aligned with today’s digital landscape.
                </p>
                <p className="text-brand-grey text-xs lg:text-sm leading-relaxed">
                  His work blends art direction, motion, and web development, with a focus on cohesive, motion-driven brand systems. Working from concept to execution, Ian designs experiences guided by clarity, intent, and precision, believing aesthetics only matter when they serve a clear purpose.
                </p>
                <p className="text-brand-grey text-xs lg:text-sm leading-relaxed">
                  From small to large-scale projects, Ian leads independently or assembles tailored teams as needed. Through ThirdSpace, he partners closely with brands seeking meaningful growth, remaining deeply involved to ensure every decision is intentional and built to last.
                </p>
                <div className="text-brand-offwhite opacity-50 text-xl font-mono mt-4">*</div>
              </div>
              <button className="flex items-center gap-2 text-brand-grey hover:text-brand-orange transition-colors text-[10px] font-mono uppercase w-fit tracking-widest">
                <span>Work with Ian</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>

          {/* Expert Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col justify-end group overflow-hidden relative min-h-[400px]"
          >
            <div className="relative z-10 flex flex-col gap-1">
              <h3 className="text-sm font-medium text-brand-offwhite tracking-widest font-mono">Framer Pro Expert</h3>
              <button className="flex items-center gap-2 text-brand-grey hover:text-brand-orange transition-colors text-[10px] font-mono uppercase tracking-widest mb-1">
                <span>Learn More</span>
                <ArrowRight size={10} />
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500">
              <img src="https://framerusercontent.com/images/9MGIf21V2NJoMgEdygDwEv9OvRQ.png" alt="Framer Expert" className="w-1/2 h-auto rotate-12" />
            </div>
          </motion.div>
          
        </div>

        {/* Tier 3: Toolbox Ribbon */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-white/5 rounded-2xl py-6 md:py-8 pl-6 md:pl-8 pr-0 flex flex-col md:flex-row md:items-center justify-start gap-8 md:gap-10 w-full relative overflow-hidden"
        >
          <div className="flex flex-col gap-1 z-20 bg-[#111] flex-none">
            <h3 className="text-sm font-medium text-brand-offwhite tracking-widest font-mono">Everyday's Toolbox</h3>
            <p className="text-brand-grey text-[10px] uppercase tracking-widest">Mastered for every project.</p>
          </div>
          <div className="flex flex-1 items-center gap-4 overflow-x-hidden relative z-10">
            <div className="absolute top-0 bottom-0 -left-1 w-8 bg-gradient-to-r from-[#111] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#111] to-transparent z-20 pointer-events-none" />
            <div className="flex items-center gap-4 w-max">
              {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
                <div key={index} className="aspect-square flex-none w-12 md:w-16 bg-brand-dark border border-white/5 rounded-2xl p-3 flex items-center justify-center hover:border-brand-orange/30 transition-colors">
                  <img src={tool} alt="Tool" className="w-full h-full object-contain opacity-50 hover:opacity-100 transition-opacity drop-shadow-md" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
