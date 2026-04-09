import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'LZ Granderson',
    title: 'Creative Producer',
    company: 'Independent',
    content:
      "Everyone at this level has technical competence, but Jay's actual superpowers are the care he takes to understand the goal, collaborate on solutions, communicate, and bring the vision to life.",
    avatar: 'https://framerusercontent.com/images/aK2N9pQjZF2ezpCvk9hSL3G8hk.png',
  },
  {
    name: 'Rishi Choudhary',
    title: 'CEO & Co-Founder',
    company: 'Kastle AI',
    content:
      "Jay is a beast. High quality work in a short timeframe. His motion and graphic work is truly game-changing, and the entire process felt sharp, thoughtful, and easy from start to finish.",
    avatar: 'https://framerusercontent.com/images/8z04o6v7rIqxWxJ75fNYMhGKsuU.jpeg',
  },
  {
    name: 'Dinesh Dave',
    title: 'Co-Founder',
    company: 'Work Is Play',
    content:
      "Jay's the real deal. Not only a Framer pro, but someone who genuinely cares. He brought ideas, polish, and extra miles we didn't even ask for, and the final result was better because of it.",
    avatar: 'https://framerusercontent.com/images/ib8eUVV7MoIJY6gFvoxjarXfCs.jpeg',
  },
  {
    name: 'Max Gilberg',
    title: 'Founding Partner',
    company: 'Major Media',
    content:
      "Jay is truly in a league of his own. He's incredibly talented and creative, but also easy and fun to work with. The collaboration felt clear, fast, and genuinely enjoyable the whole way through.",
    avatar: 'https://framerusercontent.com/images/EUj0OQgRkkRHSjBTt9kvwUhUA.jpeg',
  },
];

const marqueeTestimonials = [...testimonials, ...testimonials];
const cardOffsets = [
  'mt-16 md:mt-20',
  '-mt-2 md:-mt-4',
  'mt-24 md:mt-32',
  'mt-6 md:mt-8',
];
const cardWidths = [
  'w-[308px] md:w-[380px]',
  'w-[360px] md:w-[420px]',
  'w-[336px] md:w-[390px]',
  'w-[324px] md:w-[385px]',
];

export const Testimonials = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.getAnimations().forEach((anim) => {
        anim.playbackRate = 0.25;
      });
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.getAnimations().forEach((anim) => {
        anim.playbackRate = 1;
      });
    }
  };

  return (
    <section id="testimonials" className="overflow-hidden bg-brand-beige py-32 md:py-48 flex flex-col items-center">
      <div className="w-full px-5 md:px-[52px] lg:px-[68px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mx-auto mb-16 flex max-w-[980px] flex-col items-center gap-4 text-center md:mb-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/38">
            [ Testimonials ]
          </span>
          <div className="flex flex-col items-center gap-1">
            <h2 className="max-w-[14ch] text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-0.05em] text-brand-dark">
              Don't take our word for it<span className="text-brand-orange">*</span>
            </h2>
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-brand-orange mt-2">
              *Take theirs
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative left-1/2 w-screen -translate-x-1/2"
      >
        <div className="group/testimonial overflow-hidden">
          <div 
            ref={marqueeRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex items-start w-max gap-6 [--testimonial-gap:1.5rem] animate-[testimonial-marquee_40s_linear_infinite] py-10"
          >
            {marqueeTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className={`group/card relative shrink-0 rounded-2xl border border-black/5 bg-[#090909] px-7 py-8 text-brand-offwhite shadow-lg transition-colors duration-500 hover:bg-brand-orange hover:border-brand-orange ${cardWidths[index % cardWidths.length]} ${cardOffsets[index % cardOffsets.length]}`}
              >
                 <div className="flex flex-col justify-between gap-8 h-full min-h-[250px]">
                  <p className="relative z-10 text-[13px] leading-[1.65] tracking-tight text-[#f2eee7] transition-colors duration-500 group-hover/card:text-white md:text-[14px]">
                    {testimonial.content}
                  </p>

                  <div className="relative z-10 flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover shadow-sm transition-transform group-hover/card:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col mt-1">
                      <span className="text-[12px] font-medium tracking-tight text-white mb-1 leading-none">
                        {testimonial.name}
                      </span>
                      <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/40 transition-colors duration-500 group-hover/card:text-white/80">
                        {testimonial.title}
                      </span>
                      <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/40 mt-1 transition-colors duration-500 group-hover/card:text-white/80">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>

                <Quote
                  size={46}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute bottom-6 right-6 text-white/5 transition-colors duration-500 group-hover/card:text-white/20"
                />
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
