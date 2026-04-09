import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

const services = [
  {
    title: 'Branding Identity',
    description: 'We design brands, systems, and experiences that feel intentional from the first tap to the last interaction.',
    video: 'https://framerusercontent.com/images/fsnxfPl4xnUJdyQSiOcHEYxg.png', // Placeholder image as video
    tags: ['Identity Branding', 'UX Design', 'UI Design', 'Art Direction']
  },
  {
    title: 'Web Design & Dev',
    description: 'High-performance websites built with a focus on motion, interaction, and conversion.',
    video: 'https://framerusercontent.com/images/o5rue2juXI7jXmJGLCQ0tEIHzw.png', // Placeholder image
    tags: ['Framer', 'React', 'Animation', 'E-commerce']
  },
  {
    title: 'Motion Systems',
    description: 'Bringing brands to life through fluid motion, 3D elements, and dynamic storytelling.',
    video: 'https://framerusercontent.com/images/oxZu28Q6bOJFLSa6KzaVpa1ZuI.png', // Placeholder image
    tags: ['2D/3D Animation', 'Product Renders', 'VFX', 'Sound Design']
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-brand-dark px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 mb-24">
          <div className="flex items-center gap-3">
            <span className="text-brand-grey font-mono text-[10px] uppercase tracking-widest text-white/50">( Services & Expertise )</span>
            <div className="w-4 h-px bg-white/20" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-brand-offwhite leading-[0.9]">
              Digital Design Powerhouse
            </h2>
            <p className="text-brand-grey text-base md:text-lg max-w-md leading-relaxed">
              Over the last decade, we’ve refined a wide range of skills in digital design, offering services mastered to perfection and always driven by the purpose of motion.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-12 hover:border-brand-orange/30 transition-all duration-500"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-brand-dark/50 flex items-center justify-center">
                <img 
                  src={service.video} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-brand-offwhite tracking-tight">{service.title}</h3>
                  <ArrowDownRight size={20} className="text-brand-grey group-hover:text-brand-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-brand-grey text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {service.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-brand-grey">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
