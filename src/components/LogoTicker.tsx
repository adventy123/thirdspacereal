import React from 'react';
import { motion } from 'motion/react';

const logos = [
  { name: 'Kimfu', url: 'https://framerusercontent.com/images/54ipZYE0Xs5Fw2s8RRC1Xw5MwOU.png' },
  { name: 'Enzo Drew', url: 'https://framerusercontent.com/images/jzNbMKEQfKGZWGyXkWyH9UEnY.png' },
  { name: 'Sidehit', url: 'https://framerusercontent.com/images/K18ubhU4pp49OY7JLgpFwvKV7lU.png' },
  { name: 'Boombox', url: 'https://framerusercontent.com/images/t2JJSMOlfu93XD3jRMv9yDyUlsg.svg' },
  { name: 'Outside', url: 'https://framerusercontent.com/images/sLzH4rMcDu6Hw2kF6Or04Y9g9BM.png' },
  { name: 'Major', url: 'https://framerusercontent.com/images/UfWxvnwlpSLBegF6HT8zbaD9x8.svg' },
  { name: 'Red Bull', url: 'https://framerusercontent.com/images/jY4sMQ7GRZcZ3BQUPxHlQlFWRo.png' },
];

export const LogoTicker = () => {
  return (
    <div className="py-20 bg-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex items-center gap-3">
        <span className="text-brand-grey font-mono text-[10px] uppercase tracking-widest">( Moving Forward )</span>
        <div className="w-4 h-px bg-brand-grey/30" />
      </div>
      
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div 
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-none gap-24 pr-24 items-center"
        >
          {[...logos, ...logos].map((logo, index) => (
            <img 
              key={index}
              src={logo.url} 
              alt={logo.name} 
              className="h-8 md:h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
