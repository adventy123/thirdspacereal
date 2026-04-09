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
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about-us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-8 pointer-events-none">
      <div 
        className={cn(
          "flex items-center justify-between w-full px-4 py-3 md:px-6 md:py-4 lg:px-4 rounded-xl transition-all duration-500 pointer-events-auto",
          isScrolled 
            ? "bg-brand-dark/50 backdrop-blur-xl border border-white/10 shadow-2xl" 
            : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="ThirdSpace Logo" 
              className="h-6 md:h-8 invert brightness-0"
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-brand-offwhite hover:text-brand-orange transition-colors mix-blend-difference"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-3 py-2 rounded-lg cursor-pointer">
            <Globe size={14} className="text-brand-offwhite" />
            <span className="text-[10px] font-mono text-brand-offwhite">EN</span>
          </div>
          
          <button 
            onClick={onOpenQuote}
            className="group flex items-center gap-2 bg-brand-orange text-white px-4 py-2 rounded-lg font-mono text-[10px] uppercase tracking-wider hover:bg-brand-orange-deep transition-all duration-300 shadow-[0_10px_30px_rgba(179,39,44,0.25)]"
          >
            <span>Get an estimate</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-brand-offwhite"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 bg-brand-dark border border-white/10 rounded-xl p-6 flex flex-col gap-4 md:hidden pointer-events-auto"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-brand-offwhite hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
