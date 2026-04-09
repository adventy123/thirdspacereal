import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const services = [
  {
    title: 'Branding Identity',
    description: 'We design brands, systems, and experiences that feel intentional from the first tap to the last interaction.',
    image: 'https://framerusercontent.com/images/fsnxfPl4xnUJdyQSiOcHEYxg.png',
  },
  {
    title: 'Web Design & Dev',
    description: 'High-performance websites built with a focus on motion, interaction, and conversion.',
    image: 'https://framerusercontent.com/images/o5rue2juXI7jXmJGLCQ0tEIHzw.png',
  },
  {
    title: 'Motion Systems',
    description: 'Bringing brands to life through fluid motion, 3D elements, and dynamic storytelling.',
    image: 'https://framerusercontent.com/images/oxZu28Q6bOJFLSa6KzaVpa1ZuI.png',
  }
];

export const Services = () => {
  return (
    <section id="services" className="relative mx-3 mt-6 overflow-hidden rounded-xl rounded-b-none bg-[#141414] pb-16 pt-12 md:mx-5 lg:mx-6 md:pt-16">
      <div className="w-full px-8 md:px-[52px] lg:px-[68px]">
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between gap-8 rounded-xl border border-white/8 bg-[#141414] p-6 transition-all duration-500 hover:border-brand-orange/30 hover:bg-[linear-gradient(180deg,rgba(255,90,0,0.06)_0%,rgba(20,20,20,1)_46%)] md:p-8"
            >
              <div className="flex aspect-[1.04] items-center justify-center overflow-hidden rounded-[14px] bg-black ring-1 ring-white/5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[1.7rem] leading-[1] tracking-[-0.05em] text-brand-offwhite">{service.title}</h3>
                <p className="max-w-[26ch] text-sm leading-relaxed text-white/62">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
