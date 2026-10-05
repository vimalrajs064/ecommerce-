import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Search, Heart, X, Check } from 'lucide-react';

interface NavbarProps {
  onSearchQueryChange: (query: string) => void;
  searchQuery: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchQueryChange, searchQuery }) => {
  const { cartCount, setIsCartOpen, wishlist } = useCart();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      {/* Slim Top Benefit Announcement Bar */}
      <div className="bg-[#2A241E] text-[#EDE7DC] px-4 py-1.5 text-center text-xs tracking-wide font-medium flex items-center justify-center gap-3">
        <span>Complimentary Carbon-Neutral Priority Delivery on all orders over $75</span>
        <span className="hidden md:inline text-stone-400">·</span>
        <span className="hidden md:inline text-amber-200/90 font-normal">All pieces backed by our Lifetime Atelier Guarantee</span>
      </div>

      {/* Strict 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-stone-900 hover:text-stone-700 transition-colors shrink-0"
        >
          Aethelgard Atelier
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a
            href="#catalog"
            className="hover:text-stone-900 transition-colors py-1 hover:border-b hover:border-stone-800"
          >
            Store Catalog
          </a>
          <a
            href="#buyer-benefits"
            className="hover:text-stone-900 transition-colors py-1 hover:border-b hover:border-stone-800 flex items-center gap-1.5 text-amber-950 font-semibold"
          >
            Why Buy Direct
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
          </a>
          <a
            href="#comparison"
            className="hover:text-stone-900 transition-colors py-1 hover:border-b hover:border-stone-800"
          >
            Store Comparison
          </a>
          <a
            href="#craft-ethics"
            className="hover:text-stone-900 transition-colors py-1 hover:border-b hover:border-stone-800"
          >
            Craft Ethics
          </a>
          <a
            href="#customer-reviews"
            className="hover:text-stone-900 transition-colors py-1 hover:border-b hover:border-stone-800"
          >
            Buyer Reviews
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick Search Toggle */}
          {showSearchInput ? (
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchQueryChange(e.target.value)}
                placeholder="Search catalog..."
                autoFocus
                className="w-40 sm:w-56 pl-3 pr-8 py-1.5 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-800"
              />
              <button
                onClick={() => {
                  setShowSearchInput(false);
                  onSearchQueryChange('');
                }}
                className="absolute right-2 text-stone-400 hover:text-stone-700"
                aria-label="Close search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowSearchInput(true)}
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
              aria-label="Search products"
              title="Search products"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          {/* Wishlist Indicator */}
          <a
            href="#catalog"
            className="relative p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
            title="Saved pieces"
            aria-label="Wishlist items"
          >
            <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500" />
            )}
          </a>

          {/* Shopping Bag Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide text-white bg-[#2A241E] hover:bg-[#3D352D] rounded-lg transition-colors shadow-xs whitespace-nowrap active:scale-[0.98]"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag</span>
            <span className="bg-white/20 text-white px-1.5 py-0.5 rounded text-[11px] font-mono tabular-nums">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
