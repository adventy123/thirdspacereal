/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { FeaturedWork } from './components/FeaturedWork';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      <Navbar onOpenQuote={openQuoteModal} />
      <main>
        <Hero onOpenQuote={openQuoteModal} />
        <LogoTicker />
        <FeaturedWork />
        <Services />
        <AboutUs onOpenQuote={openQuoteModal} />
        <Testimonials />
        <Pricing onOpenQuote={openQuoteModal} />
        <CTA onOpenQuote={openQuoteModal} />
      </main>
      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}
