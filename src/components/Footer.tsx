import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    index: [
      { name: 'Home', href: '#' },
      { name: 'Work', href: '#portfolio' },
      { name: 'Services', href: '#services' },
      { name: 'About Us', href: '#about-us' },
      { name: 'Store', href: '#' },
    ],
    terms: [
      { name: 'License Agreement', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Settings', href: '#' },
    ],
    store: [
      { name: 'Mockups', href: '#' },
      { name: 'Framer Templates', href: '#' },
      { name: 'Freebies', href: '#' },
    ],
    socials: [
      { name: 'Instagram', href: '#', icon: <Instagram size={14} /> },
      { name: 'LinkedIn', href: '#', icon: <Linkedin size={14} /> },
      { name: 'Behance', href: '#', icon: <ArrowUpRight size={14} /> },
      { name: 'Awwwards', href: '#', icon: <ArrowUpRight size={14} /> },
    ]
  };

  return (
    <footer className="bg-[linear-gradient(180deg,#141414_0%,#251214_38%,#141414_100%)] px-8 lg:px-12 pt-16 pb-8 md:pt-24 min-h-[50vh] flex flex-col justify-between border-t border-brand-orange/20">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl text-brand-offwhite font-medium tracking-tight">ThirdSpace</h2>
            <div className="flex flex-col gap-2">
              <p className="text-brand-grey text-sm">Los Angeles, California</p>
              <a href="mailto:hello@thirdspace.com" className="text-brand-grey hover:text-brand-orange transition-colors text-sm">
                hello@thirdspace.com
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-brand-offwhite font-medium text-sm">Index</span>
              <ul className="flex flex-col gap-3">
                {links.index.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-brand-grey hover:text-brand-orange transition-colors text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-brand-offwhite font-medium text-sm">Terms & Policies</span>
              <ul className="flex flex-col gap-3">
                {links.terms.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-brand-grey hover:text-brand-orange transition-colors text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-brand-offwhite font-medium text-sm">Digital Store</span>
              <ul className="flex flex-col gap-3">
                {links.store.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-brand-grey hover:text-brand-orange transition-colors text-sm">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-brand-offwhite font-medium text-sm">Socials</span>
              <ul className="flex flex-col gap-3">
                {links.socials.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center gap-2 text-brand-grey hover:text-brand-orange transition-colors text-sm">
                      <span>{link.name}</span>
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col pt-12 mt-24">
        <p className="text-brand-grey text-xs">
          © {currentYear} ThirdSpace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
