import React from 'react';
import { ArrowDown } from 'lucide-react';

const logos = [
  { name: 'Emma Sleep Company', url: '/emma-logo.png' },
  { name: 'Cafe', url: '/cafe-logo.png' },
  { name: 'Doquaos', url: '/doquaos-logo.png' },
  { name: 'Livewright', url: '/livewright-logo.webp' },
  { name: 'Naya', url: '/naya-logo.webp' }
];

export const LogoTicker = () => {
  return (
    <section className="overflow-hidden bg-[#F2F2F0] px-3 pt-[4.5rem] pb-10 md:px-5 md:pt-24 md:pb-12">
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
                className="h-14 w-auto object-contain grayscale opacity-38 transition-all duration-500 hover:scale-105 hover:opacity-100 hover:grayscale-0 md:h-16 lg:h-20"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
