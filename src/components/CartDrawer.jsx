import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

const FREE_SHIPPING_THRESHOLD = 35.0;

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shippingPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const shippingCost = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 4.99;
  const estimatedTotal = subtotal + shippingCost;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} color="var(--primary)" />
            <h3>Your Cart ({items.reduce((acc, i) => acc + i.quantity, 0)})</h3>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        <div className="drawer-body">
          {items.length > 0 && (
            <div className="shipping-bar">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', fontWeight: 600 }}>
                {remainingForFreeShipping > 0 ? (
                  <span>Add <strong>${remainingForFreeShipping.toFixed(2)}</strong> for FREE Delivery</span>
                ) : (
                  <span style={{ color: '#059669', fontWeight: 700 }}>🎉 You qualified for FREE Express Delivery!</span>
                )}
                <span>{Math.round(shippingPercent)}%</span>
              </div>
              <div className="shipping-bar-track">
                <div className="shipping-bar-fill" style={{ width: `${shippingPercent}%` }} />
              </div>
            </div>
          )}

          {items.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag className="empty-cart-icon" strokeWidth={1.5} />
              <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-main)' }}>Your cart is empty</h4>
              <p style={{ fontSize: '0.875rem' }}>Browse our organic produce, bakery and pantry goods to fill it up!</p>
            </div>
          ) : (
            <div className="cart-items-list">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h4 className="cart-item-title">{item.name}</h4>
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                  </div>

                  <div className="qty-control">
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="qty-num">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-item-btn"
                    onClick={() => onRemoveItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="drawer-footer">
            <div className="cost-row">
              <span>Subtotal</span>
              <span style={{ fontWeight: 700 }}>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cost-row">
              <span>Estimated Delivery</span>
              <span>{shippingCost === 0 ? <strong style={{ color: '#059669' }}>FREE</strong> : `$${shippingCost.toFixed(2)}`}</span>
            </div>
            <div className="cost-row total">
              <span>Estimated Total</span>
              <span>${estimatedTotal.toFixed(2)}</span>
            </div>

            <button className="checkout-btn" onClick={onCheckout}>
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '12px', fontSize: '0.785rem', color: 'var(--text-muted)' }}>
              <ShieldCheck size={15} color="var(--primary)" />
              <span>Static demo checkout • Instant test order</span>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
