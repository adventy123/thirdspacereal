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
    <section id="services" className="relative mx-3 mt-6 overflow-hidden rounded-[28px] rounded-b-none bg-brand-dark pb-16 pt-28 md:mx-5 lg:mx-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(179,39,44,0.24)_0%,rgba(179,39,44,0)_72%)]" />
      <div className="w-full px-8 md:px-[52px] lg:px-[68px]">
        <div className="mb-20 flex flex-col gap-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/52">[ Services & Expertise ]</span>
            <ArrowDown size={12} className="text-white/38" />
          </div>

          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2">
            <h2 className="text-[clamp(3rem,6vw,5.6rem)] leading-[0.92] tracking-[-0.08em] text-brand-offwhite">
              Digital Design Powerhouse
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-white/62 md:text-base">
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
              className="group relative flex flex-col justify-between gap-8 rounded-[26px] border border-white/8 bg-[#0b0b0b] p-6 transition-all duration-500 hover:border-brand-orange/30 hover:bg-[linear-gradient(180deg,rgba(179,39,44,0.08)_0%,rgba(11,11,11,1)_46%)] md:p-8"
            >
              <div className="flex aspect-[1.04] items-center justify-center overflow-hidden rounded-[22px] bg-black ring-1 ring-white/5">
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
