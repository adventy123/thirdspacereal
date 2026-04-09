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
    <section id="about-us" className="py-32 bg-brand-dark px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-brand-grey font-mono text-[10px] uppercase tracking-widest text-white/50">( About Us )</span>
          <div className="w-4 h-px bg-white/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Stats Column */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-2"
              >
                <span className="text-4xl md:text-5xl font-medium text-brand-offwhite tracking-tighter">{stat.value}</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-grey">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Framer Partnership Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-medium text-brand-offwhite mb-2">Framer Pro Expert & Partner</h3>
              <button className="flex items-center gap-2 text-brand-grey hover:text-brand-orange transition-colors text-xs font-mono uppercase">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </button>
            </div>
            <div className="absolute bottom-[-20%] right-[-10%] w-2/3 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <img src="https://framerusercontent.com/images/9MGIf21V2NJoMgEdygDwEv9OvRQ.png" alt="Framer" className="w-full h-auto rotate-12" />
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#0a0a0a] border border-white/5 rounded-2xl flex flex-col justify-between relative overflow-hidden"
            style={{ minHeight: '400px' }}
          >
            <div className="relative z-10 flex flex-col items-center justify-start text-center pt-10 px-8">
              <h3 className="text-2xl font-medium text-brand-offwhite mb-2">Based in Los Angeles, California</h3>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#4ade80] rounded-full shadow-[0_0_15px_rgba(74,222,128,0.6)] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#a3a3a3]">Available Worldwide</span>
              </div>
            </div>
            
            {/* World Map Background Image */}
            <div className="absolute top-[35%] md:top-[30%] left-[-5%] right-[-5%] bottom-[-20%] z-0 pointer-events-none opacity-[0.85] mix-blend-screen scale-[1.15]">
               <img src="/globe.png" alt="World Map Globe" className="w-full h-full object-cover object-top" />
               <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-10" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Founder Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-[#111] border border-white/5 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-medium text-brand-offwhite tracking-tight">The Founder</h3>
                <p className="text-brand-grey text-sm leading-relaxed">
                  Ian founded ThirdSpace after spending the early part of his career in agencies. His ambition has always been to bring movement into traditionally static brand systems, a vision now fully aligned with today’s digital landscape.
                </p>
                <p className="text-brand-grey text-sm leading-relaxed">
                  His work blends art direction, motion, and web development, with a focus on cohesive, motion-driven brand systems. Believing aesthetics only matter when they serve a clear purpose.
                </p>
              </div>
              <button className="flex items-center gap-2 text-brand-offwhite hover:text-brand-orange transition-colors text-xs font-mono uppercase w-fit">
                <span>Work with Ian</span>
                <ArrowRight size={14} />
              </button>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://framerusercontent.com/images/0OJxePdXlSnOuYrBCi4z3nrwBY.png" 
                alt="Ian Lagac" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                <span className="text-xl font-medium text-white">Ian Lagac</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">Founder and CEO</span>
              </div>
            </div>
          </motion.div>

          {/* Toolbox Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium text-brand-offwhite tracking-tight">Everyday's Toolbox</h3>
              <p className="text-brand-grey text-xs leading-relaxed">Mastered for every project.</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="aspect-square bg-brand-dark border border-white/5 rounded-lg p-2 flex items-center justify-center hover:border-brand-orange/30 transition-colors">
                  <img src={tool} alt="Tool" className="w-full h-full object-contain opacity-50 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
