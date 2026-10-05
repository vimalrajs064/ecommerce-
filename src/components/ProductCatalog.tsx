import React, { useState, useMemo } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { ProductArtwork } from './ProductArtwork';
import { useCart } from '../context/CartContext';
import {
  Heart,
  Plus,
  Eye,
  SlidersHorizontal,
  Check,
  Search,
  Sparkles,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

interface ProductCatalogProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  searchQuery,
  onSearchQueryChange,
}) => {
  const { addToCart, setActiveQuickView, wishlist, toggleWishlist } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = ['All', 'Living & Decor', 'Carry & Leather', 'Acoustic & Studio', 'Apothecary & Scent'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesMaterials = product.materials.some((m) => m.toLowerCase().includes(query));
        const matchesOrigin = product.origin.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesMaterials && !matchesOrigin) {
          return false;
        }
      }
      // In-stock match
      if (onlyInStock && product.stockCount <= 0) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, onlyInStock, sortBy]);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-500 mb-2">
              <span>Store Catalog</span>
              <span aria-hidden="true">·</span>
              <span>Available Handcrafted Works</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 leading-tight">
              Our Curated Atelier Collection
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              Each piece is individually numbered and accompanied by our Lifetime Craftsmanship Guarantee.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
            <span>Showing</span>
            <span className="font-bold text-stone-900">{filteredProducts.length}</span>
            <span>of {PRODUCTS.length} heirloom works</span>
          </div>
        </div>

        {/* Filter Bar & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2A241E] text-white shadow-2xs'
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Tools: In-Stock Toggle & Sort */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setOnlyInStock(!onlyInStock)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                onlyInStock
                  ? 'bg-amber-50 border-amber-300 text-amber-900'
                  : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900'
              }`}
            >
              <div
                className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                  onlyInStock ? 'bg-amber-800 border-amber-800 text-white' : 'border-stone-400'
                }`}
              >
                {onlyInStock && <Check className="w-2.5 h-2.5" />}
              </div>
              <span>Ready to Ship in 24h</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-stone-200 text-xs font-medium text-stone-700 py-1.5 px-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-800"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Search Indicator */}
        {searchQuery && (
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-600 bg-amber-50/80 px-4 py-2 rounded-lg border border-amber-200/60 w-fit">
            <span>Filtered by: <strong>"{searchQuery}"</strong></span>
            <button
              onClick={() => onSearchQueryChange('')}
              className="text-stone-400 hover:text-stone-800 ml-2 underline cursor-pointer"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Product Cards Grid: 3-Column Desktop, 2-Column Tablet */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              const savings = product.retailComparePrice - product.price;

              return (
                <div
                  key={product.id}
                  onClick={() => setActiveQuickView(product)}
                  className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  {/* Top Image Showcase (Takes 65% of visual focus) */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
                    <ProductArtwork
                      type={product.iconType}
                      name={product.name}
                      badge={product.badge}
                    />

                    {/* Quick Action Badges Overlay */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-600 hover:text-rose-600 transition-colors shadow-2xs"
                        aria-label="Save to Wishlist"
                        title="Save to Wishlist"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isWishlisted ? 'fill-rose-500 text-rose-500' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Hover Quick Inspect pill */}
                    <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                      <span className="bg-stone-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-md backdrop-blur-xs flex items-center gap-1.5 shadow-sm">
                        <Eye className="w-3.5 h-3.5" />
                        Quick Inspect
                      </span>
                    </div>
                  </div>

                  {/* Product Details Section */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Quiet Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
                        <span>{product.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{product.origin.split('/')[0]}</span>
                      </div>

                      {/* Product Title */}
                      <h3 className="font-display text-lg font-medium text-stone-900 group-hover:text-stone-700 transition-colors line-clamp-1 mb-1">
                        {product.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-4">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Price, Direct Savings, and Buy Action */}
                    <div className="pt-3 border-t border-stone-100">
                      <div className="flex items-baseline justify-between mb-2">
                        <div>
                          <span className="text-base font-semibold text-stone-900 font-mono tabular-nums">
                            ${product.price}
                          </span>
                          <span className="text-xs text-stone-400 line-through ml-2 font-mono tabular-nums">
                            ${product.retailComparePrice}
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                          Save ${savings}
                        </span>
                      </div>

                      {/* Stock & Delivery Note */}
                      <div className="flex items-center justify-between text-[11px] text-stone-500 mb-3">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {product.leadTime}
                        </span>
                        <span className="font-mono tabular-nums text-stone-400">
                          ★ {product.rating} ({product.reviewCount})
                        </span>
                      </div>

                      {/* Primary Buy CTA */}
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          justAddedId === product.id
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#2A241E] text-white hover:bg-[#3E362C] active:scale-[0.98]'
                        }`}
                      >
                        {justAddedId === product.id ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added to Bag</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Bag · ${product.price}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-white rounded-xl border border-stone-200 p-8 max-w-lg mx-auto">
            <Search className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="font-display text-xl font-medium text-stone-900 mb-2">
              No matching pieces found
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-6">
              We couldn't find any products matching "{searchQuery}". Try browsing by category or reset filters.
            </p>
            <button
              onClick={() => {
                onSearchQueryChange('');
                setSelectedCategory('All');
                setOnlyInStock(false);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
