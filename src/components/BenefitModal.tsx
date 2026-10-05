import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Download,
  Check,
  ArrowRight
} from 'lucide-react';

export const BenefitModal: React.FC = () => {
  const { activeBenefitModal, setActiveBenefitModal } = useCart();
  const [downloadedCert, setDownloadedCert] = useState(false);

  if (!activeBenefitModal) return null;

  const benefit = activeBenefitModal;

  const handleSimulateDownload = () => {
    setDownloadedCert(true);
    setTimeout(() => setDownloadedCert(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={() => setActiveBenefitModal(null)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-benefit-title"
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-stone-200 my-8 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveBenefitModal(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-800 mb-2">
            <span>Official Atelier Policy</span>
            <span aria-hidden="true">·</span>
            <span>Customer Guarantee</span>
          </div>

          <h2 id="modal-benefit-title" className="font-display text-2xl sm:text-3xl font-medium text-stone-900 mb-2">
            {benefit.title}
          </h2>

          <p className="text-xs sm:text-sm font-medium text-amber-900">
            {benefit.tagline}
          </p>
        </div>

        {/* Quantitative Proof Ribbon */}
        <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/80 mb-6 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0" />
          <div className="text-xs text-amber-950 font-medium">
            <span className="block font-semibold">Standard Atelier Protection Level:</span>
            <span>{benefit.quantitativeProof}</span>
          </div>
        </div>

        {/* Full Detailed Description */}
        <div className="space-y-4 mb-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>{benefit.fullDesc}</p>
        </div>

        {/* Policy Inclusions List */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-3">
            Guaranteed Inclusions for Every Buyer:
          </h4>
          <ul className="space-y-2.5">
            {benefit.perks.map((perk, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Atelier Commitment Note */}
        <div className="p-4 bg-stone-100/80 rounded-xl border border-stone-200/80 mb-6">
          <h5 className="text-xs font-semibold text-stone-900 mb-1">
            Our Atelier Pledge
          </h5>
          <p className="text-xs text-stone-600 italic">
            "{benefit.atelierCommitment}"
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleSimulateDownload}
            className={`w-full sm:w-auto px-4 py-2.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 border transition-all cursor-pointer ${
              downloadedCert
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                : 'bg-white border-stone-300 text-stone-800 hover:bg-stone-50'
            }`}
          >
            {downloadedCert ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span>Certificate Saved to Downloads</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-stone-600" />
                <span>Download Serialized Guarantee Policy (PDF)</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setActiveBenefitModal(null);
              const catalogEl = document.getElementById('catalog');
              if (catalogEl) {
                catalogEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#2A241E] hover:bg-[#3D352D] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Shop Protected Pieces</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
