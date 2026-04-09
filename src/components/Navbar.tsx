import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ArrowRight, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="pointer-events-none fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
      <div
        className={cn(
          'pointer-events-auto mx-auto flex w-full max-w-[2048px] items-center justify-between rounded-[20px] px-4 py-3 transition-all duration-500 md:px-7 md:py-5',
          isScrolled
            ? 'bg-[#1b1918]/88 border border-white/8 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl'
            : 'bg-transparent border-transparent'
        )}
      >
        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="ThirdSpace Logo"
            className="h-6 w-auto md:h-8"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/72 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden cursor-pointer items-center gap-2 rounded-[12px] bg-brand-offwhite px-3 py-2 text-brand-dark transition-colors hover:bg-white sm:flex">
            <Globe size={14} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">EN</span>
          </div>

          <button
            onClick={onOpenQuote}
            className="group hidden items-center gap-2 rounded-[12px] bg-brand-orange px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-brand-orange-deep md:flex"
          >
            <span>Get an estimate</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button
            className="rounded-[12px] border border-white/10 p-2 text-brand-offwhite lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pointer-events-auto absolute left-3 right-3 top-full mt-2 rounded-[20px] border border-white/10 bg-brand-dark p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-sm uppercase tracking-[0.22em] text-brand-offwhite transition-colors hover:text-brand-orange"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-[14px] bg-brand-orange px-4 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white"
              >
                <span>Get an estimate</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
