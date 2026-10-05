import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#241F1A] text-[#EDE7DC] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl font-medium tracking-tight text-white mb-3">
              Aethelgard Atelier
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm mb-6">
              An independent guild of master leatherworkers, ceramicists, and acoustic engineers crafting small-batch objects made for generational permanence.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-200/90 bg-stone-900/60 p-3 rounded-lg border border-stone-800 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Registered B-Corp Partner Guild · Certified Direct Trade</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-300 mb-4">
              Store Catalog
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Living & Ceramic Ware
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Full-Grain Leather Gear
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Solid Timber Acoustics
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Botanical Fragrances
                </a>
              </li>
            </ul>
          </div>

          {/* Buyer Benefits */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-300 mb-4">
              Buyer Privileges
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#buyer-benefits" className="hover:text-white transition-colors">
                  Lifetime Repair Guarantee
                </a>
              </li>
              <li>
                <a href="#buyer-benefits" className="hover:text-white transition-colors">
                  45-Day In-Home Trial
                </a>
              </li>
              <li>
                <a href="#buyer-benefits" className="hover:text-white transition-colors">
                  Zero Middleman Pricing
                </a>
              </li>
              <li>
                <a href="#buyer-benefits" className="hover:text-white transition-colors">
                  Carbon-Neutral Shipping
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Atelier Gazette */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
              The Atelier Gazette
            </h4>
            <p className="text-xs text-stone-400 mb-4 leading-relaxed">
              Receive private notifications when a new small batch is released from the kilns and workshops.
            </p>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-xs bg-stone-900 border border-stone-700 text-stone-200 rounded-lg focus:outline-none focus:border-amber-400 placeholder-stone-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-amber-700 hover:bg-amber-600 text-white rounded text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 pt-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the Atelier Collector Circle.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Aethelgard Atelier Guild. Handcrafted with reverence for natural materials.</p>
          <div className="flex items-center gap-6">
            <a href="#buyer-benefits" className="hover:text-stone-300 transition-colors">
              Guarantee Terms
            </a>
            <a href="#buyer-benefits" className="hover:text-stone-300 transition-colors">
              Privacy & Provenance
            </a>
            <a href="#customer-reviews" className="hover:text-stone-300 transition-colors">
              Concierge Care
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
