import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-text-col">
          <div className="hero-pill">
            <Leaf size={16} />
            <span>100% Certified Organic & Farm Fresh</span>
          </div>

          <h1 className="hero-title">
            Farm-to-Door <br />
            Everyday <span className="highlight">Groceries & Mart</span>.
          </h1>

          <p className="hero-subtitle">
            Experience hand-picked fruits, artisan sourdough, organic dairy, and everyday kitchen essentials sourced directly from responsible local growers. Delivered to your doorstep within hours.
          </p>

          <div className="hero-cta-group">
            <a href="#products" className="btn-primary">
              <span>Start Shopping</span>
              <ArrowRight size={18} />
            </a>
            <a href="#deals" className="btn-secondary">
              <Zap size={18} color="#d97706" />
              <span>Explore Weekly Deals</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>5,000+</h3>
              <p>Fresh Products</p>
            </div>
            <div className="stat-item">
              <h3>120+</h3>
              <p>Partner Farms</p>
            </div>
            <div className="stat-item">
              <h3>4.9 ★</h3>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-banner">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
              alt="Fresh farm produce showcase at T-Mart"
              loading="lazy"
            />
            <div className="hero-float-badge">
              <div className="float-icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.95rem' }}>Purity Guaranteed</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Rigorous cold-chain freshness testing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );


  
}

