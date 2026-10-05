import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ProductArtwork } from './ProductArtwork';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  ShoppingBag,
  Tag
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartSavings,
    freeShippingProgress,
    remainingForFreeShipping,
    appliedPromo,
    appliedDiscount,
    promoFeedback,
    applyPromoCode,
    removePromoCode,
    setIsCheckoutOpen,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');

  if (!isCartOpen) return null;

  const finalTotal = Math.max(0, cartTotal - appliedDiscount);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs transition-opacity"
      onClick={() => setIsCartOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className="w-screen max-w-md bg-[#FAF9F5] border-l border-stone-200 shadow-2xl flex flex-col justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header */}
          <div className="p-5 border-b border-stone-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-stone-900" />
              <h2 id="cart-drawer-title" className="font-display text-xl font-medium text-stone-900">
                Your Atelier Bag
              </h2>
              <span className="text-xs font-mono text-stone-500">
                ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-amber-50/90 border-b border-amber-200/80 px-5 py-3">
            <div className="flex items-center justify-between text-xs font-medium text-stone-800 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-amber-800" />
                {remainingForFreeShipping === 0 ? (
                  <strong className="text-emerald-800">Complimentary Priority Shipping Unlocked!</strong>
                ) : (
                  <span>
                    Add <strong className="text-amber-900">${remainingForFreeShipping}</strong> more for Free Shipping
                  </span>
                )}
              </span>
              <span className="font-mono text-[11px] text-stone-500">
                {Math.round(freeShippingProgress)}%
              </span>
            </div>
            <div className="w-full bg-amber-200/60 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-amber-800 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Itemized List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-stone-200/80">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}`} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-stone-100 border border-stone-200 shrink-0 relative">
                    <ProductArtwork
                      type={item.product.iconType}
                      name={item.product.name}
                      className="w-full h-full p-1"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display text-sm font-medium text-stone-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                          className="text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-stone-500 mt-0.5">
                        Finish: {item.selectedColor}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-stone-300 rounded bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity - 1)}
                          className="px-2 py-0.5 text-stone-600 hover:text-stone-900 text-xs font-semibold cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 py-0.5 text-xs font-mono text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity + 1)}
                          className="px-2 py-0.5 text-stone-600 hover:text-stone-900 text-xs font-semibold cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Item Subtotal */}
                      <div className="text-right">
                        <span className="text-xs font-semibold text-stone-900 font-mono tabular-nums">
                          ${item.product.price * item.quantity}
                        </span>
                        <span className="block text-[10px] text-emerald-800 font-mono">
                          Saved ${(item.product.retailComparePrice - item.product.price) * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <h3 className="font-display text-lg font-medium text-stone-800 mb-1">
                  Your bag is currently empty
                </h3>
                <p className="text-xs text-stone-500 mb-6">
                  Explore our permanent catalog of handcrafted lifestyle and acoustic essentials.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Explore Store Products
                </button>
              </div>
            )}
          </div>

          {/* Bottom Checkout & Summary Module */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-stone-200 space-y-3">
              {/* Promo Code Input */}
              <div>
                {appliedPromo ? (
                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                    <span className="flex items-center gap-1 font-medium">
                      <Tag className="w-3.5 h-3.5" />
                      Privilege: {appliedPromo} (-${appliedDiscount})
                    </span>
                    <button
                      onClick={removePromoCode}
                      className="text-stone-500 hover:text-stone-900 underline text-[11px] cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      applyPromoCode(promoInput);
                      setPromoInput('');
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Promo (try WELCOME10 or DIRECT)"
                      className="flex-1 px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-800 uppercase tracking-wider"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-md border border-stone-200 cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {promoFeedback && (
                  <p
                    className={`text-[11px] mt-1 ${
                      promoFeedback.success ? 'text-emerald-700' : 'text-rose-600'
                    }`}
                  >
                    {promoFeedback.message}
                  </p>
                )}
              </div>

              {/* Subtotal & Calculations */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <div className="flex justify-between">
                  <span>Store Subtotal</span>
                  <span className="font-mono tabular-nums font-medium text-stone-900">
                    ${cartTotal}
                  </span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-800">
                    <span>Atelier Privilege Applied</span>
                    <span className="font-mono tabular-nums">-${appliedDiscount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Priority Carbon-Neutral Shipping</span>
                  <span className="font-mono tabular-nums text-emerald-800 font-medium">
                    {remainingForFreeShipping === 0 ? 'COMPLIMENTARY' : '$15'}
                  </span>
                </div>

                <div className="flex justify-between text-stone-500">
                  <span>Direct Savings vs. Retail Stores</span>
                  <span className="font-mono tabular-nums text-emerald-700">
                    -${cartSavings}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-semibold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Total Due</span>
                  <span className="font-mono tabular-nums text-base">
                    ${finalTotal + (remainingForFreeShipping === 0 ? 0 : 15)}
                  </span>
                </div>
              </div>

              {/* Primary Checkout CTA */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#2A241E] hover:bg-[#3D352D] rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Proceed to Guaranteed Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Protected by 45-Day Trial & Lifetime Atelier Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
