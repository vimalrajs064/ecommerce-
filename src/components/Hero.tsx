import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Clock, RefreshCw } from 'lucide-react';
import { ProductArtwork } from './ProductArtwork';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const Hero: React.FC = () => {
  const { setActiveQuickView } = useCart();
  const heroFeaturedProduct = PRODUCTS[1]; // Saddle-Stitched Leather Weekender

  return (
    <section className="relative overflow-hidden border-b border-stone-200/80 bg-gradient-to-b from-[#FAF9F5] via-[#F4EFEB] to-[#FAF9F5] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Message & Direct Buying Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-2xl">
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-500 mb-4">
              <span>Independent Atelier Collective</span>
              <span aria-hidden="true">·</span>
              <span>Direct-to-Collector</span>
            </div>

            {/* Headline with text-wrap balance */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 leading-[1.12] mb-6 text-balance">
              Objects crafted for a lifetime of living, direct from the makers.
            </h1>

            {/* Body prose */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed mb-8 max-w-xl">
              Discover our permanent catalog of handcrafted Tuscan leather travel gear, wheel-thrown volcanic ceramics, and solid walnut studio acoustics. By bypassing luxury retail markups, we deliver heirloom craftsmanship with unmatched customer guarantees.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#catalog"
                className="px-6 py-3 text-sm font-semibold tracking-wide text-white bg-[#2A241E] hover:bg-[#3D352D] rounded-lg shadow-sm transition-all duration-200 inline-flex items-center gap-2 active:scale-[0.98]"
              >
                <span>Explore Store Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#buyer-benefits"
                className="px-6 py-3 text-sm font-semibold tracking-wide text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg shadow-2xs transition-colors inline-flex items-center gap-2"
              >
                <span>Why Buy In Our Shop</span>
                <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Save 38%
                </span>
              </a>
            </div>

            {/* Proof & Store Benefit Quick Badges */}
            <div className="pt-6 border-t border-stone-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800 mb-0.5">
                  <Truck className="w-3.5 h-3.5 text-stone-700" />
                  <span>Free Priority 2-Day</span>
                </div>
                <p className="text-xs text-stone-500">Orders over $75</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800 mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-700" />
                  <span>Lifetime Repairs</span>
                </div>
                <p className="text-xs text-stone-500">Zero labor fees</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800 mb-0.5">
                  <RefreshCw className="w-3.5 h-3.5 text-stone-700" />
                  <span>45-Day Home Trial</span>
                </div>
                <p className="text-xs text-stone-500">Free courier pickup</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800 mb-0.5">
                  <Clock className="w-3.5 h-3.5 text-stone-700" />
                  <span>Direct Pricing</span>
                </div>
                <p className="text-xs text-stone-500">Zero retail markups</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 bg-white shadow-xl group">
              <div className="aspect-4/3 w-full relative">
                <ProductArtwork
                  type="bag"
                  name={heroFeaturedProduct.name}
                  badge="Core Heirloom"
                />
              </div>

              <div className="p-6 bg-white border-t border-stone-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                    <span>{heroFeaturedProduct.origin}</span>
                    <span className="text-emerald-700 font-medium">In Stock · Only 4 Left</span>
                  </div>
                  <h3 className="font-display text-xl font-medium text-stone-900 mb-1">
                    {heroFeaturedProduct.name}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 mb-4">
                    {heroFeaturedProduct.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                  <div>
                    <span className="text-lg font-semibold text-stone-900 font-mono tabular-nums">
                      ${heroFeaturedProduct.price}
                    </span>
                    <span className="text-xs text-stone-400 line-through ml-2 font-mono tabular-nums">
                      ${heroFeaturedProduct.retailComparePrice}
                    </span>
                    <span className="text-xs text-amber-700 font-medium block">
                      Save $220 buying direct from our atelier
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveQuickView(heroFeaturedProduct)}
                    className="px-4 py-2 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Quick Inspect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
