import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  return (
    <section id="reviews" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Loved by Over 25,000+ Happy Households</h2>
            <p>See why neighborhood families choose T-Mart for fresh daily groceries.</p>
          </div>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="test-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="test-comment">"{item.comment}"</p>

              <div className="test-author">
                <img src={item.avatar} alt={item.name} />
                <div>
                  <h4 className="test-name">{item.name}</h4>
                  <span className="test-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
