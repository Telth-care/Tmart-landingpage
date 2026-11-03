import React from 'react';
import { Tag, Sparkles } from 'lucide-react';

export default function DealsBanner({ onApplyCode }) {
  return (
    <section id="deals" className="deal-banner">
      <div className="deal-content">
        <div className="deal-badge">
          <Sparkles size={14} />
          <span>Special Weekend Super-Saver</span>
        </div>
        <h2 className="deal-title">
          Stock Up on Healthy Essentials & Save Up to 35%
        </h2>
        <p className="deal-desc">
          Get fresh farm fruits, hand-crafted artisan sourdough, and local pantry items at subscriber-exclusive discounts. Enter your promo code at checkout.
        </p>

        <div className="deal-coupon">
          <Tag size={16} color="var(--primary)" />
          <span>Use Promo Code:</span>
          <code>FRESH20</code>
          <button
            onClick={() => onApplyCode('FRESH20')}
            style={{
              background: 'var(--primary)',
              color: '#fff',
              fontSize: '0.8rem',
              fontWeight: 700,
              padding: '6px 14px',
              borderRadius: '99px'
            }}
          >
            Apply Code
          </button>
        </div>
      </div>
    </section>
  );
}
