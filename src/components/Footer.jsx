import React from 'react';
import { Store, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div className="brand-badge">
                <Store size={22} />
              </div>
              <h3 style={{ margin: 0 }}>T-Mart<span style={{ color: 'var(--primary)' }}>.</span></h3>
            </div>
            <p>
              Your local neighbourhood grocery store reinvented for fast modern living. Sourced responsibly, packaged eco-consciously, delivered fresh.
            </p>
            <div className="static-pill">
              ⚡ Static HTML/JS Build • Lightning Fast
            </div>
          </div>

          <div className="footer-col">
            <h4>Shop Categories</h4>
            <ul className="footer-links">
              <li><a href="#products">Fresh Fruits & Vegetables</a></li>
              <li><a href="#products">Farm Fresh Dairy & Eggs</a></li>
              <li><a href="#products">Artisan Bakery Loaves</a></li>
              <li><a href="#products">Pantry Staples & Grains</a></li>
              <li><a href="#deals">Weekly Value Deals</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Customer Care</h4>
            <ul className="footer-links">
              <li><a href="#locations">Store Locations</a></li>
              <li><a href="#">Delivery Coverage Map</a></li>
              <li><a href="#">Organic Quality Guarantee</a></li>
              <li><a href="#">Returns & Refund Policy</a></li>
              <li><a href="#">Help Center & FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Static Website Info</h4>
            <ul className="footer-links">
              <li><a href="#">Vite + React SSG/SPA</a></li>
              <li><a href="#">Zero Server Dependency</a></li>
              <li><a href="#">GitHub Pages / Vercel Ready</a></li>
              <li><a href="#">Clean Component Architecture</a></li>
              <li><a href="#">Production Optimized</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} T-Mart Inc. All rights reserved. Built with React & Vite.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Crafted with <Heart size={14} color="#ef4444" fill="#ef4444" /> for static web deployments.
          </div>
        </div>
      </div>
    </footer>
  );
}
