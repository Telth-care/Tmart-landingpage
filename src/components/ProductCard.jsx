import React from 'react';
import { Plus, Star, Eye } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  return (
    <article className="product-card">
      <div className="card-image-wrap" onClick={() => onQuickView(product)}>
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="badge-pill">{product.badge}</span>}
        <button
          className="quick-view-btn"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
        >
          <Eye size={14} style={{ display: 'inline', marginRight: '4px' }} />
          Quick View
        </button>
      </div>

      <div className="card-content">
        <div className="product-meta">
          <span className="product-weight">{product.weight}</span>
          <div className="rating-badge">
            <Star size={14} fill="#d97706" color="#d97706" />
            <span>{product.rating}</span>
          </div>
        </div>

        <h3 className="product-name" onClick={() => onQuickView(product)}>
          {product.name}
        </h3>

        <div className="card-footer">
          <div className="price-box">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <button
            className="add-btn"
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </article>
  );
}

