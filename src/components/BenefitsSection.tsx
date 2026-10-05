import React, { useState } from 'react';
import { STORE_BENEFITS, STORE_COMPARISON, BenefitPillar } from '../data/benefits';
import { useCart } from '../context/CartContext';
import {
  Truck,
  ShieldCheck,
  RefreshCw,
  Tag,
  Leaf,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Package,
  Award,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const { setActiveBenefitModal } = useCart();
  const [activeTab, setActiveTab] = useState<'grid' | 'comparison' | 'unboxing'>('grid');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const getIcon = (name: BenefitPillar['iconName']) => {
    switch (name) {
      case 'truck':
        return <Truck className="w-5 h-5 text-amber-900" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-amber-900" />;
      case 'refresh':
        return <RefreshCw className="w-5 h-5 text-amber-900" />;
      case 'tag':
        return <Tag className="w-5 h-5 text-amber-900" />;
      case 'leaf':
        return <Leaf className="w-5 h-5 text-amber-900" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-amber-900" />;
      default:
        return <Award className="w-5 h-5 text-amber-900" />;
    }
  };

  return (
    <section id="buyer-benefits" className="py-16 md:py-24 bg-[#F5F2EB] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-500 mb-3">
            <span>The Atelier Buyer Privilege</span>
            <span aria-hidden="true">·</span>
            <span>Why Buy In Our Shop</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 leading-[1.15] mb-5 text-balance">
            Six enduring reasons to purchase directly from our independent atelier.
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            When you purchase from our store, you aren't paying for department store rents, distributor markups, or disposable products. You receive heirloom objects protected by genuine lifetime guarantees and direct artisan care.
          </p>

          {/* Interactive Navigation Tabs for Buyer Benefits */}
          <div className="flex items-center gap-2 mt-8 p-1 bg-stone-200/70 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('grid')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'grid'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              The 6 Core Guarantees
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Shop vs. Standard Retail
            </button>
            <button
              onClick={() => setActiveTab('unboxing')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'unboxing'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Archival Unboxing Promise
            </button>
          </div>
        </div>

        {/* Tab 1: The 6 Core Guarantees Grid */}
        {activeTab === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORE_BENEFITS.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white rounded-xl p-7 border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-amber-100/70 flex items-center justify-center border border-amber-200/60">
                      {getIcon(benefit.iconName)}
                    </div>
                    <span className="text-[11px] font-medium text-stone-500 bg-stone-100 px-2.5 py-1 rounded">
                      Buyer Perk
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl font-medium text-stone-900 mb-2 group-hover:text-stone-700 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-800 mb-3">
                    {benefit.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                    {benefit.shortDesc}
                  </p>

                  {/* Key Perks Checklist */}
                  <ul className="space-y-2 mb-6 border-t border-stone-100 pt-4">
                    {benefit.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-stone-700 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with proof metric & deep dive action */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                  <span className="text-[11px] font-mono text-stone-500">
                    {benefit.quantitativeProof}
                  </span>

                  <button
                    onClick={() => setActiveBenefitModal(benefit)}
                    className="text-xs font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Policy</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Shop vs. Standard Retail Comparison Matrix */}
        {activeTab === 'comparison' && (
          <div id="comparison" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 bg-[#2A241E] text-white">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                Transparent Comparison
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium mt-1 mb-2">
                Why Buying in Our Store is Radically Different
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
                See exactly how our direct-to-artisan model compares with traditional luxury department stores and mass-market online marketplaces.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-xs font-semibold text-stone-600 uppercase tracking-wider">
                    <th className="py-4 px-6 w-1/4">Criterion</th>
                    <th className="py-4 px-6 w-1/3 bg-amber-50/70 text-amber-950 font-bold border-x border-amber-200/70">
                      Aethelgard Atelier (Our Shop)
                    </th>
                    <th className="py-4 px-6 w-1/5">Department Stores</th>
                    <th className="py-4 px-6 w-1/5">Mass Market Online</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-xs sm:text-sm text-stone-700">
                  {STORE_COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-stone-900">
                        {row.feature}
                      </td>

                      {/* Our Shop */}
                      <td className="py-4 px-6 bg-amber-50/40 border-x border-amber-200/50">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium text-stone-900">{row.ourStore}</span>
                        </div>
                      </td>

                      {/* Department Stores */}
                      <td className="py-4 px-6 text-stone-500">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                          <span>{row.departmentStores}</span>
                        </div>
                      </td>

                      {/* Mass Market */}
                      <td className="py-4 px-6 text-stone-500">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                          <span>{row.massMarket}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-500">
                Data audited quarterly against top North American and European luxury retailers.
              </span>
              <a
                href="#catalog"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2A241E] hover:bg-[#3D352D] rounded-lg transition-colors shadow-2xs"
              >
                Experience the Difference in Our Catalog
              </a>
            </div>
          </div>
        )}

        {/* Tab 3: Archival Unboxing Promise */}
        {activeTab === 'unboxing' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
                  Zero Waste · Heirloom Quality
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-stone-900 mt-1 mb-4">
                  What arrives on your doorstep with every order.
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  We treat unboxing as an extension of the craft itself. We never use cheap plastic bubble wrap, synthetic tape, or styrofoam. Every piece arrives packaged like a timeless gift to yourself.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-stone-50 border border-stone-200/60">
                    <Package className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-stone-900 mb-0.5">
                        Archival Rigid Gift Box & Pulp Armor
                      </h4>
                      <p className="text-xs text-stone-500">
                        100% recycled unbleached kraft paper board, engineered to withstand heavy courier handling without plastic fill.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-stone-50 border border-stone-200/60">
                    <Leaf className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-stone-900 mb-0.5">
                        Organic Cotton Dust Bag & Plantable Seed Card
                      </h4>
                      <p className="text-xs text-stone-500">
                        Each item rests inside an unbleached GOTS-certified linen dust pouch. The thank-you card contains wild mountain thyme seeds you can plant in your garden.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-stone-50 border border-stone-200/60">
                    <Award className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-stone-900 mb-0.5">
                        Serialized Atelier Certificate of Authenticity
                      </h4>
                      <p className="text-xs text-stone-500">
                        Individually stamped and hand-numbered with the artisan’s guild seal and direct warranty registration code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Box Simulation */}
              <div className="lg:col-span-6 bg-[#FAF9F5] p-6 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center">
                <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-sm border border-stone-200">
                  <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-amber-800" />
                  </div>
                  <h4 className="font-display text-lg font-medium text-stone-900 mb-1">
                    Atelier Lifetime Master Certificate
                  </h4>
                  <p className="text-xs text-stone-500 mb-4">
                    Sample Certificate #AETHEL-2026-8942
                  </p>
                  <div className="text-left text-xs bg-stone-50 p-3 rounded border border-stone-200 space-y-1 font-mono text-stone-600 mb-4">
                    <div>Status: Registered & Active</div>
                    <div>Warranty: Lifetime Free Workshop Labor</div>
                    <div>Trial Coverage: 45 Days (Free Return Pickup)</div>
                    <div>Craft Guild: Florence & Grasse Master Workshop</div>
                  </div>
                  <button
                    onClick={() => setActiveBenefitModal(STORE_BENEFITS[1])}
                    className="w-full py-2 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded transition-colors"
                  >
                    Read Lifetime Warranty Terms
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
