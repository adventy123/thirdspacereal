import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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
          <div className="lg:col-span-2 bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col justify-between gap-8 min-h-[300px]">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-1"
              >
                <span className="text-3xl font-medium text-brand-offwhite tracking-tighter">{stat.value}</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-grey">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* 3D Art Card Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-[#111] border border-white/5 rounded-2xl p-8 flex items-center justify-center overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff6d28_0%,_transparent_60%)] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
            <img src="https://framerusercontent.com/images/tyrFyrRI41KJlV39p6QD9rGJdqQ.png" alt="3D Abstract Art" className="w-2/3 h-auto object-contain opacity-60 mix-blend-screen group-hover:scale-105 transition-transform duration-1000" />
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex items-start justify-between">
                 <h3 className="text-sm font-mono tracking-widest text-brand-offwhite mb-4 uppercase">Based in Los Angeles, California</h3>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-[10px] font-mono uppercase tracking-widest text-brand-grey">Available Worldwide</span>
                 </div>
              </div>
            </div>
            {/* World Map Placeholder */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mt-12">
               <img src="https://framerusercontent.com/images/9MGIf21V2NJoMgEdygDwEv9OvRQ.png" alt="World Map" className="w-full h-full object-cover scale-150 translate-y-1/4 opacity-10 blur-sm" />
               <div className="w-full h-full absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-orange/20 via-transparent to-transparent" />
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
