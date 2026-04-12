import React from 'react';
import { ArrowDown } from 'lucide-react';

const logos = [
  { name: 'Emma - The Sleep Company', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Emma_The_Sleep_Company_Logo.svg/512px-Emma_The_Sleep_Company_Logo.svg.png' },
  { name: 'Nike', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/512px-Logo_NIKE.svg.png' },
  { name: 'Under Armour', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/512px-Under_armour_logo.svg.png' },
  { name: 'Sony', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/512px-Sony_logo.svg.png' },
  { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png' }
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
