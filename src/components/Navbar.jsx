import React, { useState } from 'react';
import { ShoppingBag, Search, Store, Menu, X } from 'lucide-react';

export default function Navbar({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

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
            <button
              className="mobile-menu-btn"
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <div id="mobile-navigation" className={`mobile-navigation${isMenuOpen ? ' is-open' : ''}`}>
          <div className="container mobile-navigation-content">
            <div className="search-box mobile-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search farm fresh items, bakery, pantry..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            <a href="#products" onClick={closeMenu}>Shop All</a>
            <a href="#deals" onClick={closeMenu}>Weekly Specials</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#locations" onClick={closeMenu}>Store Locator</a>
          </div>
        </div>
      </nav>
    </>
  );
}

