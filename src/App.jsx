import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import DealsBanner from './components/DealsBanner';
import Testimonials from './components/Testimonials';
import StoreLocator from './components/StoreLocator';
import Footer from './components/Footer';
import { CATEGORIES, PRODUCTS } from './data/products';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('tmart_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Persist cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('tmart_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to cart!`);
  };

  const handleUpdateQty = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => {
    const totalCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);
    setCartItems([]);
    setIsCartOpen(false);
    showToast(`🎉 Order placed successfully for ${totalCount} items!`);
  };

  const handleApplyPromo = (code) => {
    showToast(`Promo code "${code}" applied: 20% discount activated!`);
    setIsCartOpen(true);
  };

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.origin.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main>
        <Hero />
        <Features />

        <section id="products" className="container" style={{ padding: '24px 20px 48px' }}>
          <div className="section-header">
            <div>
              <h2>Fresh Market Catalog</h2>
              <p>
                {filteredProducts.length} items available • Showing{' '}
                {selectedCategory === 'all' ? 'All Categories' : selectedCategory}
              </p>
            </div>
          </div>

          <CategoryFilter
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            totalItems={PRODUCTS.length}
          />

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
                No products found matching "{searchQuery}"
              </p>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                Try searching for apples, bread, avocados, or clear your filters.
              </p>
              <button
                className="btn-secondary"
                style={{ marginTop: '16px' }}
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onQuickView={setActiveModalProduct}
                />
              ))}
            </div>
          )}

          <DealsBanner onApplyCode={handleApplyPromo} />
        </section>

        <Testimonials />
        <StoreLocator />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {toastMessage && (
        <div className="toast-notice">
          <CheckCircle2 size={18} color="#34d399" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
