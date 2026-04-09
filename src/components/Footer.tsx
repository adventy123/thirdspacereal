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
    <footer className="bg-brand-dark px-4 md:px-8 pb-12">
      <div className="max-w-7xl mx-auto bg-black rounded-3xl p-8 md:p-16 flex flex-col gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <img 
              src="https://framerusercontent.com/images/6C6SkLHoYirr9jR1KrYBlH0qsA.png" 
              alt="Stōkt Logo" 
              className="h-10 w-fit invert brightness-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col gap-2">
              <p className="text-brand-grey text-sm">Saint-Sauveur — Canada</p>
              <a href="mailto:hello@wearestokt.com" className="text-brand-offwhite hover:text-brand-orange transition-colors text-lg font-medium">
                hello@wearestokt.com
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

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-4">
          <p className="text-brand-grey text-xs font-mono uppercase tracking-widest">
            © {currentYear} Stōkt Creative Co.
          </p>
          <p className="text-brand-grey text-xs font-mono uppercase tracking-widest">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
