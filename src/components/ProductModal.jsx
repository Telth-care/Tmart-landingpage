import React from 'react';
import { X, Star, ShoppingBag, MapPin, CheckCircle } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="modal-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="modal-details">
          <div className="product-meta" style={{ marginBottom: '10px' }}>
            <span className="product-weight">{product.weight}</span>
            <div className="rating-badge">
              <Star size={16} fill="#d97706" color="#d97706" />
              <span>{product.rating} ({product.reviewsCount} reviews)</span>
            </div>
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '10px', lineHeight: 1.25 }}>
            {product.name}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '14px' }}>
            <MapPin size={15} color="var(--primary)" />
            <span>Origin: <strong>{product.origin}</strong></span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '14px' }}>
            {product.description}
          </p>

          <div className="nutrition-grid">
            <div className="nutri-item">
              <label>Calories</label>
              <span>{product.nutrition.calories}</span>
            </div>
            <div className="nutri-item">
              <label>Fat</label>
              <span>{product.nutrition.fat}</span>
            </div>
            <div className="nutri-item">
              <label>Carbs</label>
              <span>{product.nutrition.carbs}</span>
            </div>
            <div className="nutri-item">
              <label>Protein</label>
              <span>{product.nutrition.protein}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.85rem', fontWeight: 600, marginBottom: '20px' }}>
            <CheckCircle size={16} />
            <span>In Stock • Ready for 2-hour dispatch</span>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
            <div className="price-box">
              <span className="current-price" style={{ fontSize: '1.6rem' }}>${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="original-price" style={{ fontSize: '1rem' }}>${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <button
              className="btn-primary"
              style={{ padding: '10px 22px' }}
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            >
              <ShoppingBag size={18} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

