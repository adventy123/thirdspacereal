import React from 'react';
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
  'mt-20 md:mt-36',
  'mt-2 md:-mt-2',
  'mt-28 md:mt-44',
  'mt-10 md:mt-16',
];
const cardWidths = [
  'w-[308px] md:w-[360px]',
  'w-[360px] md:w-[402px]',
  'w-[336px] md:w-[392px]',
  'w-[324px] md:w-[378px]',
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="overflow-hidden bg-brand-beige py-32 md:py-36">
      <div className="w-full px-11 md:px-[52px] lg:px-[68px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mx-auto mb-16 flex max-w-[980px] flex-col items-center gap-5 text-center md:mb-20"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-black/38">
            [ Testimonials ]
          </span>
          <div className="flex flex-col items-center gap-4">
            <h2 className="max-w-[12ch] text-[clamp(3rem,7vw,6.1rem)] leading-[0.92] tracking-[-0.08em] text-brand-dark">
              Don't take our word for it<span className="text-brand-orange">*</span>
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand-orange">
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
        <div className="group/testimonial overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
          <div className="flex w-max gap-[var(--testimonial-gap)] [--testimonial-gap:2rem] [--testimonial-speed:40s] animate-[testimonial-marquee_var(--testimonial-speed)_linear_infinite] py-5 group-hover/testimonial:[--testimonial-speed:110s]">
            {marqueeTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className={`group/card relative shrink-0 rounded-[28px] border border-black/8 bg-[#090909] px-8 py-9 text-brand-offwhite shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[background-color,border-color] duration-500 hover:border-brand-orange/60 hover:bg-brand-orange ${cardWidths[index % cardWidths.length]} ${cardOffsets[index % cardOffsets.length]}`}
              >
                <div className="flex min-h-[290px] flex-col justify-between gap-10 md:min-h-[332px]">
                  <p className="relative z-10 text-[1.1rem] leading-[1.45] tracking-[-0.045em] text-[#f2eee7] transition-colors duration-500 group-hover/card:text-white md:text-[1.32rem]">
                    {testimonial.content}
                  </p>

                  <div className="relative z-10 flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full border border-white/10 object-cover transition-colors duration-500 group-hover/card:border-white/20"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-[15px] leading-none tracking-[-0.04em] text-white">
                        {testimonial.name}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/34 transition-colors duration-500 group-hover/card:text-white/72">
                        {testimonial.title}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/34 transition-colors duration-500 group-hover/card:text-white/72">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>

                <Quote
                  size={54}
                  strokeWidth={1.3}
                  className="pointer-events-none absolute bottom-7 right-7 text-white/8 transition-colors duration-500 group-hover/card:text-white/16"
                />
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
