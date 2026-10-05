import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Truck,
  CreditCard,
  Banknote,
  Lock,
  ArrowRight,
  Package,
  Printer,
  Sparkles
} from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartTotal,
    appliedDiscount,
    remainingForFreeShipping,
    clearCart,
  } = useCart();

  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod' | 'apple_pay'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string>('');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United States',
    orderNotes: '',
  });

  if (!isCheckoutOpen) return null;

  const shippingCost = remainingForFreeShipping === 0 ? 0 : 15;
  const finalTotal = Math.max(0, cartTotal - appliedDiscount) + shippingCost;

  const handlePreFill = () => {
    setFormData({
      fullName: 'Genevieve Vance',
      email: 'genevieve.vance@atelier-arch.com',
      phone: '+1 (555) 234-8901',
      address: '742 Montgomery St, Apt 4B',
      city: 'San Francisco, CA',
      postalCode: '94111',
      country: 'United States',
      orderNotes: 'Please ring Apt 4B bell or leave inside concierge lobby.',
    });
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.address) {
      handlePreFill();
    }
    setStep('payment');
  };

  const handleCompleteOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const orderNum = `AETHEL-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedOrderId(orderNum);
      setIsProcessing(false);
      setStep('confirmation');
      clearCart();
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={() => setIsCheckoutOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden border border-stone-200 my-8 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsCheckoutOpen(false)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator Header */}
        <div className="mb-6 pb-4 border-b border-stone-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-800">
                Guaranteed Atelier Checkout
              </span>
              <h2 id="checkout-modal-title" className="font-display text-2xl font-medium text-stone-900">
                {step === 'details' && '1. Shipping & Customer Address'}
                {step === 'payment' && '2. Payment & Guarantee Confirmation'}
                {step === 'confirmation' && 'Order Confirmed & Registered'}
              </h2>
            </div>

            {/* Quick Demo Pre-fill helper */}
            {step === 'details' && (
              <button
                type="button"
                onClick={handlePreFill}
                className="text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                ⚡ Pre-fill Sample Address
              </button>
            )}
          </div>
        </div>

        {/* STEP 1: Details */}
        {step === 'details' && (
          <form onSubmit={handleProceedToPayment} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Genevieve Vance"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="For tracking & guarantee certificate"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Delivery Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Street, suite, or apartment number"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  City & State / Region *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. San Francisco, CA"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Postal Code *
                </label>
                <input
                  type="text"
                  required
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  placeholder="e.g. 94111"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Phone (for courier delivery SMS)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>

            {/* Courier Preference */}
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-emerald-700" />
                  Carbon-Neutral Priority Courier (2-3 Business Days)
                </span>
                <span className="font-mono text-emerald-800 font-medium">
                  {shippingCost === 0 ? 'COMPLIMENTARY' : '$15'}
                </span>
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                Packaged in rigid archival pulp armor with reusable cotton dust bag.
              </p>
            </div>

            {/* Total Due & Continue Button */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-500 block">Total Due:</span>
                <span className="text-lg font-bold font-mono text-stone-900">
                  ${finalTotal}
                </span>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2A241E] hover:bg-[#3D352D] rounded-lg transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Continue to Payment Method</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Payment */}
        {step === 'payment' && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-2">
                Select Secure Payment Option:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                      : 'border-stone-200 hover:border-stone-400'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-stone-800 mb-2" />
                  <div>
                    <span className="text-xs font-semibold text-stone-900 block">
                      Credit / Debit Card
                    </span>
                    <span className="text-[10px] text-stone-500">Visa, Mastercard, Amex</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple_pay')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    paymentMethod === 'apple_pay'
                      ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                      : 'border-stone-200 hover:border-stone-400'
                  }`}
                >
                  <Sparkles className="w-5 h-5 text-stone-800 mb-2" />
                  <div>
                    <span className="text-xs font-semibold text-stone-900 block">
                      Apple / Google Pay
                    </span>
                    <span className="text-[10px] text-stone-500">1-Touch biometric</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    paymentMethod === 'cod'
                      ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                      : 'border-stone-200 hover:border-stone-400'
                  }`}
                >
                  <Banknote className="w-5 h-5 text-stone-800 mb-2" />
                  <div>
                    <span className="text-xs font-semibold text-stone-900 block">
                      Pay on Delivery
                    </span>
                    <span className="text-[10px] text-stone-500">Inspect before paying</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Payment Fields (Card simulation) */}
            {paymentMethod === 'card' && (
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    defaultValue="4242 •••• •••• 4242"
                    readOnly
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded font-mono text-stone-700"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      defaultValue="12/28"
                      readOnly
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded font-mono text-stone-700"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Security Code (CVC)
                    </label>
                    <input
                      type="text"
                      defaultValue="892"
                      readOnly
                      className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded font-mono text-stone-700"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Summary Order Review */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-600">Delivering to:</span>
                <span className="font-medium text-stone-900 truncate max-w-xs">
                  {formData.fullName || 'Genevieve Vance'}, {formData.city || 'San Francisco'}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-600">Guarantees included:</span>
                <span className="text-emerald-800 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Lifetime Warranty & 45-Day Trial
                </span>
              </div>
            </div>

            {/* Back & Pay CTA */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="text-xs font-semibold text-stone-600 hover:text-stone-900 underline cursor-pointer"
              >
                Back to Address
              </button>

              <button
                type="button"
                onClick={handleCompleteOrder}
                disabled={isProcessing}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2A241E] hover:bg-[#3D352D] rounded-lg transition-colors cursor-pointer flex items-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>
                  {isProcessing ? 'Securing Atelier Guarantee...' : `Authorize & Pay $${finalTotal}`}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Confirmation */}
        {step === 'confirmation' && (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="w-8 h-8 text-emerald-700" />
            </div>

            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
              Payment & Guarantee Authenticated
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-medium text-stone-900 mt-1 mb-2">
              Thank you, {formData.fullName || 'Collector'}.
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-6">
              Your order has been recorded into the Atelier Master Registry. Your piece is currently being hand-inspected by master artisans.
            </p>

            {/* Order Serial & Receipt Card */}
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 text-left max-w-md mx-auto mb-6 text-xs space-y-2">
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Order Serial Number:</span>
                <span className="font-mono font-bold text-stone-900">{confirmedOrderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Registered Guarantee:</span>
                <span className="font-medium text-emerald-800">Lifetime Free Workshop Repair</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">In-Home Trial Active:</span>
                <span className="font-medium text-stone-900">45 Days (Free Doorstep Pickup)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Dispatched Via:</span>
                <span className="font-medium text-stone-900">Tracked Carbon-Neutral Express</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200 font-bold">
                <span className="text-stone-900">Total Paid:</span>
                <span className="font-mono text-stone-900">${finalTotal}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Official Receipt</span>
              </button>

              <button
                onClick={() => {
                  setIsCheckoutOpen(false);
                  setStep('details');
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#2A241E] hover:bg-[#3D352D] rounded-lg transition-colors cursor-pointer"
              >
                Return to Store Catalog
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
