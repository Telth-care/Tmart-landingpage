import React from 'react';
import { Truck, Sparkles, DollarSign, Clock } from 'lucide-react';

const FEATURES = [
  {
    icon: Truck,
    title: 'Express 2-Hr Delivery',
    desc: 'Temperature-monitored refrigerated vehicles straight to your kitchen table.'
  },
  {
    icon: Sparkles,
    title: '100% Organic & Non-GMO',
    desc: 'Sourced strictly from certified regenerative farms and clean producers.'
  },
  {
    icon: DollarSign,
    title: 'Wholesale Fair Prices',
    desc: 'No middlemen markup. Directly supporting farmers while keeping your cart affordable.'
  },
  {
    icon: Clock,
    title: 'Hassle-Free Replacements',
    desc: 'Not 100% happy with any item? Instant 1-click refund or replacement, no questions asked.'
  }
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {FEATURES.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div key={index} className="feature-box">
                <div className="feature-icon-wrapper">
                  <Icon size={24} />
                </div>
                <div className="feature-info">
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
