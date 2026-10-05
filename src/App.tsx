import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BenefitsSection } from './components/BenefitsSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { BenefitModal } from './components/BenefitModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAF9F5] text-stone-900 flex flex-col font-sans selection:bg-amber-100 selection:text-stone-900">
        {/* Navigation Bar */}
        <Navbar
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Campaign & Value Proposition */}
          <Hero />

          {/* Core Store Buyer Benefits (Answers "What are the benefits to buy in our shop") */}
          <BenefitsSection />

          {/* Full Interactive Store Catalog (Answers "What are the products are in our store") */}
          <ProductCatalog
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
          />

          {/* Customer Reviews, Social Proof & FAQs */}
          <ReviewsSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Interactive Overlays */}
        <ProductModal />
        <BenefitModal />
        <CartDrawer />
        <CheckoutModal />
      </div>
    </CartProvider>
  );
}
