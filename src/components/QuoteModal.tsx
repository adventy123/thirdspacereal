import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'branding',
    budget: '5k-10k',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-brand-beige rounded-3xl shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-brand-dark/50 hover:text-brand-dark transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-6"
                >
                  <div className="w-20 h-20 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center">
                    <CheckCircle2 size={48} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl font-medium tracking-tight">Request Received!</h3>
                    <p className="text-brand-grey">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-brand-orange font-mono text-[10px] uppercase tracking-widest">Get Started</span>
                    <h2 className="text-4xl font-medium tracking-tighter">Tell us about your project</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-brand-grey">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="bg-white border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-brand-grey">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="bg-white border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-brand-grey">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        className="bg-white border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-brand-grey">Project Type</label>
                      <select 
                        className="bg-white border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors appearance-none"
                        value={formData.projectType}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      >
                        <option value="branding">Branding & Identity</option>
                        <option value="web">Web Design & Dev</option>
                        <option value="motion">Motion Systems</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-brand-grey">Project Details</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Tell us a bit about what you're looking for..."
                        className="bg-white border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-colors resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <div className="md:col-span-2 pt-4">
                      <button 
                        type="submit"
                        className="w-full group flex items-center justify-center gap-3 bg-brand-dark text-brand-offwhite py-4 rounded-2xl font-mono text-sm uppercase tracking-wider hover:bg-brand-orange transition-all duration-300 shadow-xl"
                      >
                        <span>Send Request</span>
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
