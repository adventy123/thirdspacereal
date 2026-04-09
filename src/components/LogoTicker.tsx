import React from 'react';
import { ArrowDown } from 'lucide-react';

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
    <section className="overflow-hidden bg-[#F2F2F0] px-3 py-[4.5rem] md:px-5 md:py-24">
      <div className="mx-auto max-w-[2048px]">
        <div className="mb-12 flex items-center gap-3 px-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-grey">[ Moving Forward ]</span>
          <ArrowDown size={12} className="text-brand-grey/80" />
        </div>

        <div className="grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-4 lg:flex lg:justify-between lg:gap-14">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center lg:flex-1">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 w-auto grayscale opacity-38 transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:h-10"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
