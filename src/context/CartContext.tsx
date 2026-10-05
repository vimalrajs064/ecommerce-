import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';
import { BenefitPillar } from '../data/benefits';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string) => void;
  updateQuantity: (productId: string, selectedColor: string, newQuantity: number) => void;
  removeFromCart: (productId: string, selectedColor: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartSavings: number;
  cartCount: number;
  freeShippingProgress: number;
  remainingForFreeShipping: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  activeQuickView: Product | null;
  setActiveQuickView: (product: Product | null) => void;
  activeBenefitModal: BenefitPillar | null;
  setActiveBenefitModal: (benefit: BenefitPillar | null) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  appliedPromo: string | null;
  appliedDiscount: number;
  promoFeedback: { success: boolean; message: string } | null;
  applyPromoCode: (code: string) => void;
  removePromoCode: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aethelgard_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aethelgard_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeQuickView, setActiveQuickView] = useState<Product | null>(null);
  const [activeBenefitModal, setActiveBenefitModal] = useState<BenefitPillar | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoFeedback, setPromoFeedback] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    localStorage.setItem('aethelgard_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('aethelgard_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    const color = selectedColor || product.colors[0]?.name || 'Standard';
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + quantity,
        };
        return next;
      }
      return [...prev, { product, quantity, selectedColor: color }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, selectedColor: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, selectedColor);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedColor === selectedColor
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string, selectedColor: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedColor === selectedColor)
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedPromo(null);
    setAppliedDiscount(0);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const cartSavings = cart.reduce(
    (acc, item) => acc + (item.product.retailComparePrice - item.product.price) * item.quantity,
    0
  );
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const freeShippingThreshold = 75;
  const freeShippingProgress = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'WELCOME10') {
      const discount = Math.round(cartTotal * 0.1);
      setAppliedPromo('WELCOME10');
      setAppliedDiscount(discount);
      setPromoFeedback({ success: true, message: '10% New Buyer Atelier Privilege applied!' });
    } else if (clean === 'DIRECT') {
      const discount = 25;
      setAppliedPromo('DIRECT');
      setAppliedDiscount(discount);
      setPromoFeedback({ success: true, message: '$25 Direct Craftsmanship credit applied!' });
    } else if (clean === 'FREESHIP') {
      setAppliedPromo('FREESHIP');
      setAppliedDiscount(0);
      setPromoFeedback({ success: true, message: 'Complimentary Express Courier unlocked!' });
    } else {
      setPromoFeedback({ success: false, message: 'Code not recognized. Try WELCOME10 or DIRECT' });
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setAppliedDiscount(0);
    setPromoFeedback(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
        cartSavings,
        cartCount,
        freeShippingProgress,
        remainingForFreeShipping,
        isCartOpen,
        setIsCartOpen,
        activeQuickView,
        setActiveQuickView,
        activeBenefitModal,
        setActiveBenefitModal,
        isCheckoutOpen,
        setIsCheckoutOpen,
        wishlist,
        toggleWishlist,
        appliedPromo,
        appliedDiscount,
        promoFeedback,
        applyPromoCode,
        removePromoCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
