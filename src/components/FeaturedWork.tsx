import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const projects = [
  {
    id: 'kastle',
    title: 'Kastle AI',
    tags: ['Motion & 3D', 'Web Design & Development'],
    image: 'https://framerusercontent.com/images/VB82dEnl1ArluP1RIAvtcy8cKII.png',
    video: 'https://stokt.b-cdn.net/hero-mockup-kastle-01.mp4',
    size: 'large'
  },
  {
    id: 'wescale',
    title: 'We Scale It',
    tags: ['Brand Identity', 'Web Design & Development'],
    image: 'https://framerusercontent.com/images/KWqrwJ1XgAuAFpxNQlXvLl03Hk.jpg',
    video: 'https://stokt.b-cdn.net/WSI%20Trim%20SR.webm',
    size: 'small'
  },
  {
    id: 'wyoming',
    title: 'Wildly Wyoming',
    tags: ['Brand Identity', 'Motion & 3D'],
    image: 'https://framerusercontent.com/images/BF7bCtJWiPlNYlGtyEA3HqIaH4.webp',
    video: 'https://stokt.b-cdn.net/WW-SERIES_TRAILER-FINAL-30S-16X9-H264HD.mp4',
    size: 'full'
  },
  {
    id: 'jeremie',
    title: 'Jeremie Bouchard',
    tags: ['Brand Identity', 'Web Design & Development'],
    image: 'https://framerusercontent.com/images/6cGsflAPFCSTYGPeNRuSZsTt8Y.png',
    video: 'https://stokt.b-cdn.net/H-BEAM-MACBOOK-16-9-4k.mp4',
    size: 'small'
  },
  {
    id: 'enzo',
    title: 'Enzo Drew',
    tags: ['Web Design & Development'],
    image: 'https://framerusercontent.com/images/H2qpUZT3Cys5cpksCNCl5TnNgw.png',
    video: 'https://stokt.b-cdn.net/fish-eye-laptop%202.mp4',
    size: 'small'
  },
  {
    id: 'kimfu',
    title: 'Kimfu',
    tags: ['Web Design & Development'],
    image: 'https://framerusercontent.com/images/yuxzIjC3pbbIWqenyUJ9reQL2I.jpg',
    video: 'https://stokt.b-cdn.net/kimfu-mockup-16-9.mp4',
    size: 'small'
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0], key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative rounded-2xl overflow-hidden bg-brand-dark aspect-video md:aspect-auto cursor-pointer",
        project.size === 'large' ? "md:col-span-2 md:h-[600px]" : 
        project.size === 'full' ? "md:col-span-3 md:h-[500px]" : 
        "md:col-span-1 md:h-[400px]"
      )}
    >
      {/* Background Image */}
      <img 
        src={project.image} 
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      
      {/* Video Overlay on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <video 
          src={project.video} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent p-6 md:p-10 flex flex-col justify-end">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl md:text-3xl font-medium text-brand-offwhite tracking-tight">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-brand-orange/20 backdrop-blur-md border border-brand-orange/30 rounded-full text-[10px] font-mono uppercase tracking-wider text-brand-offwhite">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturedWork = () => {
  return (
    <section id="portfolio" className="py-32 bg-brand-beige">
      <div className="w-full px-11 md:px-[52px] lg:px-[68px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-brand-grey font-mono text-[10px] uppercase tracking-widest">( Featured Work )</span>
              <div className="w-4 h-px bg-brand-grey/30" />
            </div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-brand-dark">
              Featured Work
            </h2>
          </div>
          
          <button className="group flex items-center gap-2 bg-brand-orange text-brand-offwhite px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider hover:bg-brand-orange-deep transition-all duration-300 shadow-[0_14px_34px_rgba(179,39,44,0.2)]">
            <span>All Work</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
