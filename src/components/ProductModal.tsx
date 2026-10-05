import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ProductArtwork } from './ProductArtwork';
import {
  X,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  Star,
  MapPin,
  Ruler,
  Clock,
  Heart,
  PackageCheck
} from 'lucide-react';

export const ProductModal: React.FC = () => {
  const { activeQuickView, setActiveQuickView, addToCart, wishlist, toggleWishlist, setIsCheckoutOpen } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!activeQuickView) return null;

  const product = activeQuickView;
  const currentColor = selectedColor || product.colors[0]?.name || 'Standard';
  const isWishlisted = wishlist.includes(product.id);
  const savings = product.retailComparePrice - product.price;

  const handleAdd = () => {
    addToCart(product, quantity, currentColor);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const handleInstantBuy = () => {
    addToCart(product, quantity, currentColor);
    setActiveQuickView(null);
    setIsCheckoutOpen(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={() => setActiveQuickView(null)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden border border-stone-200 my-8 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveQuickView(null)}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/90 text-stone-500 hover:text-stone-900 hover:bg-stone-100 shadow-xs transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Showcase (Sticky gallery) */}
        <div className="md:w-1/2 bg-[#F5F2EB] relative flex flex-col items-center justify-center min-h-[320px] md:min-h-full p-6 border-b md:border-b-0 md:border-r border-stone-200">
          <div className="w-full aspect-4/3 max-w-sm">
            <ProductArtwork
              type={product.iconType}
              name={product.name}
              badge={product.badge}
            />
          </div>

          {/* Quick Craft Certifications */}
          <div className="w-full max-w-sm mt-4 p-3 bg-white/80 rounded-lg border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
            <div className="flex items-center gap-1.5 font-medium text-stone-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>{product.warranty}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              <span>Workshop Provenance: {product.origin}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>{product.leadTime}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contiguous Purchase Module (Scrollable) */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
              <span>{product.category}</span>
              <div className="flex items-center gap-1 text-amber-900 font-medium">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span className="font-mono tabular-nums">{product.rating}</span>
                <span className="text-stone-400 font-mono">({product.reviewCount} verified reviews)</span>
              </div>
            </div>

            {/* Product Title & Tagline */}
            <h2 id="modal-product-title" className="font-display text-2xl sm:text-3xl font-medium text-stone-900 mb-2">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
              {product.tagline}
            </p>

            {/* Pricing Breakdown & Direct Savings */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 mb-6">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-2xl font-bold font-mono tabular-nums text-stone-900">
                  ${product.price}
                </span>
                <span className="text-sm font-mono line-through text-stone-400">
                  ${product.retailComparePrice}
                </span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                  Direct Savings: ${savings}
                </span>
              </div>
              <p className="text-[11px] text-stone-500">
                Direct-to-consumer transparent pricing. Zero distributor or department store markup.
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-stone-600 leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Color Finish Selection */}
            {product.colors.length > 0 && (
              <div className="mb-5">
                <div className="flex items-center justify-between text-xs font-medium text-stone-700 mb-2">
                  <span>Selected Finish: <strong className="text-stone-900">{currentColor}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                        currentColor === color.name
                          ? 'border-stone-900 bg-stone-100 text-stone-900'
                          : 'border-stone-200 bg-white text-stone-600 hover:border-stone-400'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/10 inline-block"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dimensions & Craft Details */}
            <div className="space-y-2 mb-6 text-xs text-stone-600 border-t border-stone-100 pt-4">
              <div className="flex items-start gap-2">
                <Ruler className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>Dimensions: <strong>{product.dimensions}</strong> ({product.weight})</span>
              </div>
              <div className="flex items-start gap-2">
                <PackageCheck className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>Materials: {product.materials.join(' · ')}</span>
              </div>
            </div>
          </div>

          {/* Quantity Stepper & Buy Action Buttons */}
          <div className="pt-4 border-t border-stone-200">
            <div className="flex items-center gap-3 mb-3">
              {/* Stepper */}
              <div className="flex items-center border border-stone-300 rounded-lg bg-stone-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-stone-600 hover:text-stone-900 text-sm font-semibold cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-3 py-2 text-xs font-mono font-semibold text-stone-900 min-w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-stone-600 hover:text-stone-900 text-sm font-semibold cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAdd}
                className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  addedSuccess
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#2A241E] text-white hover:bg-[#3D352D] active:scale-[0.98]'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <span>Add to Bag · ${(product.price * quantity).toLocaleString()}</span>
                )}
              </button>

              {/* Wishlist button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-2.5 rounded-lg border border-stone-300 hover:border-stone-400 transition-colors cursor-pointer ${
                  isWishlisted ? 'text-rose-600 bg-rose-50' : 'text-stone-600 bg-white'
                }`}
                aria-label="Save to wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            {/* Instant Direct Checkout */}
            <button
              onClick={handleInstantBuy}
              className="w-full py-2 px-4 text-xs font-semibold text-amber-950 bg-amber-100 hover:bg-amber-200 rounded-lg border border-amber-300 transition-colors cursor-pointer"
            >
              Express Direct Checkout with Buyer Guarantees
            </button>

            {/* Micro guarantees */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 mt-3">
              <span className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-stone-400" />
                Free 2-Day Delivery
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <RotateCcw className="w-3 h-3 text-stone-400" />
                45-Day In-Home Trial
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
