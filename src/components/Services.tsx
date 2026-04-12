import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const services = [
  {
    title: 'Branding Identity',
    description: 'We design brands, systems, and experiences that feel intentional from the first tap to the last interaction.',
    image: 'https://framerusercontent.com/images/fsnxfPl4xnUJdyQSiOcHEYxg.png',
    features: [
      'Identity Branding', 'UI Design', 'Art Direction', 'Interactive Design', 
      'UX Design / Research', 'UX Copywriting', 'Creative Direction'
    ]
  },
  {
    title: 'Web Design & Dev',
    description: 'We build fast, responsive, and future-ready digital products using modern tools and frameworks.',
    image: 'https://framerusercontent.com/images/o5rue2juXI7jXmJGLCQ0tEIHzw.png',
    features: [
      'Creative Development', 'CMS Building', 'E-Commerce', 
      'Website Responsiveness', 'Web Application', 'AI Workflow Integration'
    ]
  },
  {
    title: 'Motion Systems',
    description: 'We design bold, scalable visuals—built for impact, movement, and modern storytelling. Whether crafted by hand or powered by AI, these systems bring your brand to life.',
    image: 'https://framerusercontent.com/images/oxZu28Q6bOJFLSa6KzaVpa1ZuI.png',
    features: [
      '3D Design & Rendering', 'Custom Icon Systems', 'AI-Powered VFX', 
      'Motion Design', 'AI-Generated Video', 'AI Imagery & Compositing'
    ]
  }
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSelection = (index: number) => {
    // If they click the active one, optionally close it back to default view
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services" className="relative mx-3 overflow-hidden rounded-xl rounded-b-none bg-[#141414] pb-16 pt-12 md:mx-5 md:pt-16">
      <div className="w-full px-5 md:px-[52px] lg:px-[68px]">
        <div className="mb-10 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/52">[ Services & Expertise ]</span>
            <ArrowDown size={12} className="text-white/38" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-brand-offwhite">
              Digital Design Powerhouse
            </h2>
            <p className="max-w-xl text-[13px] leading-relaxed text-white/50 md:text-[14px]">
              Over the last decade, we&apos;ve refined a wide range of digital skills, offering services mastered to feel sharp, modern, and always driven by the purpose of motion.
            </p>
          </div>
        </div>

        {/* Dynamic Accordion Tri-State Wrapper */}
        <div className="flex flex-col md:flex-row w-full h-[650px] md:h-[580px] gap-4 md:gap-5">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isDefault = activeIndex === null;
            
            return (
              <div
                key={service.title}
                onClick={() => handleSelection(index)}
                className={`group relative overflow-hidden rounded-xl border border-white/5 bg-[#080808] cursor-pointer transition-all duration-500 ease-in-out hover:border-white/10 ${
                  isDefault
                    ? "flex-1 h-full"
                    : isActive 
                      ? "flex-[1_0_100%] md:flex-[10] h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" 
                      : "flex-[0_0_70px] md:flex-[0_0_80px] lg:flex-[0_0_90px] h-[70px] md:h-full"
                }`}
              >
                {/* DEFAULT STATE - 3 Equal Panels */}
                <div 
                  className={`absolute inset-0 flex flex-col p-8 transition-opacity duration-300 ${
                    isDefault ? "opacity-100 delay-150" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex-1 w-full h-full relative flex items-center justify-center pb-8 px-6">
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-orange-500 uppercase text-center leading-[0.9] tracking-tighter drop-shadow-lg transition-transform duration-[800ms] ease-out group-hover:scale-105">
                       {service.title}
                     </h2>
                  </div>
                </div>

                {/* INACTIVE/COLLAPSED STATE - Vertical Strip */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 md:delay-100 ${
                    !isDefault && !isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="md:-rotate-90 whitespace-nowrap text-brand-offwhite font-heading font-bold text-xl md:text-2xl tracking-tight opacity-40 transition-opacity duration-300 group-hover:opacity-100">
                    {service.title}
                  </span>
                </div>

                {/* ACTIVE/EXPANDED STATE - Detailed Reveal */}
                <div 
                  className={`absolute inset-0 flex flex-col md:flex-row items-center transition-opacity duration-300 ${
                    isActive ? "opacity-100 delay-150" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {/* Left Content Context - Fixed width container prevents text wrap squishing! */}
                  <div className="relative z-20 flex-shrink-0 flex flex-col justify-center p-8 md:p-12 lg:p-[4rem] h-full order-2 md:order-1 overflow-y-auto no-scrollbar w-full md:w-[480px] lg:w-[600px]">
                    <p className="max-w-[48ch] text-[13px] md:text-[14px] leading-relaxed text-white/50 mb-10 mt-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {service.features.map(feat => (
                        <div key={feat} className="flex items-center gap-3 text-[11px] md:text-[12px] text-white/50">
                          <span className="text-white/20 text-[10px] mt-px">→</span>
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Graphical Overlay */}
                  <div className="relative z-10 w-full h-[40%] md:flex-1 md:h-full md:absolute right-0 top-0 order-1 md:order-2 flex items-center justify-center pointer-events-none p-6 md:p-8">
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent z-10 w-1/3 left-0" />
                    <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-orange-500 uppercase text-center md:text-right leading-[0.85] tracking-tighter drop-shadow-2xl md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2 opacity-90">
                      {service.title}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
