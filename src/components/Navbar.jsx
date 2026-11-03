import React from 'react';
import { ShoppingBag, Search, Store, Sparkles } from 'lucide-react';

export default function Navbar({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange
}) {
  return (
    <>
      <div className="top-banner">
        <span>🎉 Free 2-hour delivery on orders over $35</span>
        <span className="hide-mobile">| Use code <strong>FRESH20</strong> for 20% off your first order!</span>
      </div>

      <nav className="navbar">
        <div className="container nav-wrapper">
          <a href="#" className="brand-logo">
            <div className="brand-badge">
              <Store size={22} />
            </div>
            <span>T-Mart<span className="brand-tag">.</span></span>
          </a>

          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search farm fresh items, bakery, pantry..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          <div className="nav-links">
            <a href="#products">Shop All</a>
            <a href="#deals">Weekly Specials</a>
            <a href="#reviews">Reviews</a>
            <a href="#locations">Store Locator</a>
          </div>

          <div className="nav-actions">
            <button className="cart-btn" onClick={onOpenCart} aria-label="Open Cart">
              <ShoppingBag size={18} />
              <span>Cart</span>
              <span className="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
