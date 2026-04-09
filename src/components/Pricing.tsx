import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Branding',
    price: '5,000',
    description: 'Perfect for startups looking to establish a strong visual foundation.',
    features: [
      'Visual Identity System',
      'Logo Design & Variations',
      'Typography & Color Palette',
      'Brand Style Guidelines',
      'Social Media Assets',
      '2-3 Weeks Delivery'
    ],
    cta: 'Start Branding',
    popular: false
  },
  {
    name: 'Digital',
    price: '12,000',
    description: 'High-end web experiences that convert and tell your brand story.',
    features: [
      'Custom Web Design',
      'Framer / Webflow Development',
      'Motion & Interactions',
      'SEO Optimization',
      'CMS Integration',
      '4-6 Weeks Delivery'
    ],
    cta: 'Build My Site',
    popular: true
  },
  {
    name: 'Full Studio',
    price: '25,000',
    description: 'The complete package for brands ready to dominate their market.',
    features: [
      'Full Brand Identity',
      'Premium Web Experience',
      'Custom Motion Systems',
      'Content Strategy',
      '3 Months Support',
      '8-12 Weeks Delivery'
    ],
    cta: 'Partner with Us',
    popular: false
  }
];

export const Pricing = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  return (
    <section id="pricing" className="py-32 bg-brand-beige">
      <div className="w-full px-11 md:px-[52px] lg:px-[68px]">
        <div className="flex flex-col gap-12 mb-20">
          <div className="flex items-center gap-3">
            <span className="text-brand-grey font-mono text-[10px] uppercase tracking-widest">( Investment )</span>
            <div className="w-4 h-px bg-brand-grey/30" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-brand-dark leading-[0.9]">
              Transparent Pricing.<br />
              No Hidden BS.
            </h2>
            <p className="text-brand-grey max-w-xl">
              We believe in clear communication and fair value. Choose a plan that fits your current stage or reach out for a custom execution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border ${
                plan.popular 
                  ? 'bg-brand-orange border-brand-orange shadow-2xl scale-105 z-10' 
                  : 'bg-white border-black/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-medium mb-2 ${plan.popular ? 'text-brand-offwhite' : 'text-brand-dark'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-sm font-mono ${plan.popular ? 'text-white/72' : 'text-brand-grey'}`}>From</span>
                  <span className={`text-4xl font-medium tracking-tighter ${plan.popular ? 'text-brand-offwhite' : 'text-brand-dark'}`}>
                    ${plan.price}
                  </span>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${plan.popular ? 'text-white/76' : 'text-brand-grey'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow flex flex-col gap-4 mb-10">
                <span className={`text-[10px] font-mono uppercase tracking-widest ${plan.popular ? 'text-white/72' : 'text-brand-grey'}`}>
                  What's included:
                </span>
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.popular ? 'bg-white/18 text-white' : 'bg-brand-orange/10 text-brand-orange'}`}>
                        <Check size={10} />
                      </div>
                      <span className={`text-xs ${plan.popular ? 'text-brand-offwhite' : 'text-brand-dark'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenQuote}
                className={`group flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                  plan.popular
                    ? 'bg-brand-offwhite text-brand-dark hover:bg-brand-orange-deep hover:text-white'
                    : 'bg-brand-orange text-brand-offwhite hover:bg-brand-orange-deep'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
