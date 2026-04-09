import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'LZ Granderson',
    role: 'Creative Producer',
    content: "Everyone at this level has technical competence, but Jay's actual superpowers are the care he takes to understand the goal, collaborate on solutions, communicate, and, yes, bring the vision to life.",
    avatar: 'https://framerusercontent.com/images/aK2N9pQjZF2ezpCvk9hSL3G8hk.png'
  },
  {
    name: 'Rishi Choudhary',
    role: 'CEO & Co-Founder, Kastle AI',
    content: "Jay is a beast!! High quality work in a short timeframe. His motion and graphic work is truly gamechanging. Can't recommend him enough!",
    avatar: 'https://framerusercontent.com/images/8z04o6v7rIqxWxJ75fNYMhGKsuU.jpeg'
  },
  {
    name: 'Dinesh Dave',
    role: 'Co-Founder, Work is Play',
    content: "Jay’s the real deal. Not only a Framer pro, but he truly cares—bringing ideas, polish, and extra miles we didn’t even ask for.",
    avatar: 'https://framerusercontent.com/images/ib8eUVV7MoIJY6gFvoxjarXfCs.jpeg'
  },
  {
    name: 'Max Gilberg',
    role: 'Founding Partner, Major Media',
    content: "Jay is truly in a league of his own. Not only is he incredibly talented and creative, but he’s also easy and fun to work with.",
    avatar: 'https://framerusercontent.com/images/EUj0OQgRkkRHSjBTt9kvwUhUA.jpeg'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-brand-beige px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 mb-24 items-center text-center">
          <div className="flex items-center gap-3">
            <span className="text-brand-grey font-mono text-[10px] uppercase tracking-widest">( Testimonials )</span>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-brand-dark leading-[0.9]">
              Don't take our word for it<span className="text-brand-orange">*</span>
            </h2>
            <p className="text-brand-orange font-mono text-[10px] uppercase tracking-widest">*Take theirs</p>
          </div>
        </div>

        <div className="flex gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 flex-none"
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <div 
                key={index}
                className="w-[350px] md:w-[450px] bg-white border border-black/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between gap-12"
              >
                <div className="flex flex-col gap-6">
                  <Quote size={32} className="text-brand-orange/20" />
                  <p className="text-lg md:text-xl text-brand-dark leading-relaxed font-medium">
                    "{t.content}"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-8 border-t border-black/5">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-brand-dark">{t.name}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-grey">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
