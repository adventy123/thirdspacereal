import React from 'react';
import { Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    index: [
      { name: 'Home', href: '#' },
      { name: 'Services', href: '#services' },
      { name: 'About Us', href: '#about-us' },
      { name: 'Index', href: '#index' },
    ],
    terms: [
      { name: 'License Agreement', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Settings', href: '#' },
    ],
    socials: [
      { name: 'Facebook', href: 'https://www.facebook.com/thirdspaceus', icon: <Facebook size={14} /> },
      { name: 'Instagram', href: 'https://www.instagram.com/thirdspaceus', icon: <Instagram size={14} /> },
      { name: 'TikTok', href: 'https://www.tiktok.com/@thirdspaceus', icon: <ArrowUpRight size={14} /> },
      { name: 'Linktree', href: 'https://linktr.ee/thirdspaceus', icon: <ArrowUpRight size={14} /> },
      { name: 'Behance', href: 'https://www.behance.net/thirdspaceus', icon: <ArrowUpRight size={14} /> },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/thirdspaceus/', icon: <Linkedin size={14} /> },
    ]
  };

  return (
    <footer className="bg-brand-beige px-3 pb-3 md:px-5 md:pb-5">
      <div className="flex min-h-[420px] flex-col justify-between rounded-xl bg-brand-dark px-6 py-10 md:px-8 md:py-12 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <h2 className="text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.06em] text-brand-offwhite">ThirdSpace US.</h2>
            <div className="flex flex-col gap-1 text-sm text-white/62">
              <p>Los Angeles, California</p>
              <a href="mailto:hello@thirdspaceus.com" className="transition-colors hover:text-brand-offwhite">
                hello@thirdspaceus.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:col-span-8">
            <div className="flex flex-col gap-6">
              <span className="text-sm text-brand-offwhite">Index</span>
              <ul className="flex flex-col gap-3">
                {links.index.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-white/56 transition-colors hover:text-brand-offwhite">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-sm text-brand-offwhite">Terms & Policies</span>
              <ul className="flex flex-col gap-3">
                {links.terms.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-white/56 transition-colors hover:text-brand-offwhite">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>



            <div className="flex flex-col gap-6">
              <span className="text-sm text-brand-offwhite">Socials</span>
              <ul className="flex flex-col gap-3">
                {links.socials.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center gap-2 text-sm text-white/56 transition-colors hover:text-brand-offwhite">
                      <span>{link.name}</span>
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12">
          <p className="text-xs text-white/58">
            &copy; {currentYear} ThirdSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
