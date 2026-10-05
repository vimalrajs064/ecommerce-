import React, { useState } from 'react';
import { VERIFIED_REVIEWS } from '../data/benefits';
import { Star, CheckCircle2, ChevronDown, HelpCircle, Shield, Truck, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How does your Lifetime Craftsmanship Guarantee actually work?',
    answer: 'Every piece purchased in our store is registered to your email. If a stitch tears, a zipper jams, hardware tarnishes prematurely, or an acoustic component requires servicing at any time in the future, you simply contact our concierge. We provide a prepaid shipping label to our North American or European master workshop, perform the restoration with authentic original materials, and return it to you at zero cost.'
  },
  {
    question: 'What is included in the 45-day in-home trial?',
    answer: 'You have 45 calendar days from the date of delivery to experience your piece. Place the ceramic vase in your natural lighting, listen to your records on the walnut speaker, or pack the leather weekender for a trip. If it doesn’t exceed your expectations, you can request a complimentary doorstep pickup. We refund 100% of your payment without restocking or handling fees.'
  },
  {
    question: 'Why are your prices 35% to 45% lower than traditional luxury department stores?',
    answer: 'Traditional luxury labels spend enormous budgets on high-street boutique leases, wholesale distribution networks, and licensing agents. By producing in small batches directly with independent artisan workshops and selling exclusively through this digital atelier, we eliminate middleman markups while paying makers higher living wages.'
  },
  {
    question: 'How are orders packaged for transit?',
    answer: 'We use zero plastic bubble wrap or synthetic tape. Every piece is wrapped in unbleached GOTS-certified organic cotton dust bags and secured in custom-molded rigid recycled paper pulp armor. Fragile items like our hand-thrown stoneware undergo rigorous 6-foot drop testing before being cleared for shipment.'
  },
  {
    question: 'What happens if a parcel is delayed or damaged in transit?',
    answer: 'All shipments carry full complimentary insurance. In the rare event of transit damage, send a quick photo to our concierge and we immediately dispatch a replacement piece via expedited courier—no lengthy courier investigations required.'
  }
];

export const ReviewsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="customer-reviews" className="py-16 md:py-24 bg-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-500 mb-2">
            <span>Verified Collector Experiences</span>
            <span aria-hidden="true">·</span>
            <span>4.9 / 5.0 Average</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 leading-tight">
            Hear from buyers who chose to buy direct.
          </h2>

          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Over 14,800 heirloom pieces dispatched across 32 countries with zero compromise on craftsmanship or customer care.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {VERIFIED_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Star rating & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                    Verified Direct Buyer
                  </span>
                </div>

                {/* Review Title */}
                <h3 className="font-display text-base font-semibold text-stone-900 mb-2">
                  "{review.headline}"
                </h3>

                {/* Content */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {review.content}
                </p>
              </div>

              {/* Author & Piece */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-stone-900">{review.author}</h4>
                  <p className="text-[11px] text-stone-500">{review.role} · {review.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-stone-400 block">{review.date}</span>
                  <span className="text-[11px] font-medium text-amber-900 block truncate max-w-[120px]">
                    {review.productPurchased}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Store Trust Ribbon */}
        <div className="bg-[#2A241E] text-white rounded-2xl p-8 mb-16 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-stone-700">
            <div className="pt-4 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl font-medium text-amber-300 block mb-1">
                100%
              </span>
              <span className="text-xs text-stone-300">
                Carbon-Neutral Express Shipping
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl font-medium text-amber-300 block mb-1">
                Lifetime
              </span>
              <span className="text-xs text-stone-300">
                Atelier Free Repair Guarantee
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl font-medium text-amber-300 block mb-1">
                45 Days
              </span>
              <span className="text-xs text-stone-300">
                Risk-Free In-Home Trial
              </span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl font-medium text-amber-300 block mb-1">
                38%
              </span>
              <span className="text-xs text-stone-300">
                Average Direct Savings vs. Retail
              </span>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div id="craft-ethics" className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
              <span>Frequently Asked Store Questions</span>
            </div>
            <h3 className="font-display text-2xl font-medium text-stone-900">
              Everything you need to know about shopping with us.
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display text-base font-medium text-stone-900 hover:text-stone-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-stone-900' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
