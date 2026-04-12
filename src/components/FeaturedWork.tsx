import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
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

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-brand-dark md:aspect-auto',
        project.size === 'large' ? 'md:col-span-2 md:h-[520px] lg:h-[560px]' :
        project.size === 'full' ? 'md:col-span-3 md:h-[480px] lg:h-[520px]' :
        'md:col-span-1 md:h-[440px]'
      )}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />

      <div className="absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-dark/84 via-brand-dark/10 to-transparent p-6 md:p-8 lg:p-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl tracking-[-0.05em] text-brand-offwhite md:text-[1.75rem]">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/18 bg-black/24 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-offwhite backdrop-blur-md"
              >
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
    <section id="portfolio" className="bg-brand-beige px-3 pt-14 pb-6 md:px-5 md:pt-20 md:pb-8">
      <div className="mx-auto w-full max-w-[2048px]">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-[clamp(2.8rem,6vw,5rem)] leading-[0.94] tracking-[-0.08em] text-brand-dark">
            Featured Work
          </h2>
          <ArrowDown size={28} className="mt-2 text-brand-dark" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
