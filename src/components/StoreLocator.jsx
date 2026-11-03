import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { LOCATIONS } from '../data/products';

export default function StoreLocator() {
  return (
    <section id="locations" className="store-section">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Visit Our Neighborhood Stores</h2>
            <p>Prefer in-person shopping or curbside pickup? Stop by one of our physical locations.</p>
          </div>
        </div>

        <div className="stores-grid">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="store-card">
              <h3 className="store-name">{loc.name}</h3>

              <div className="store-detail">
                <MapPin size={18} />
                <span>{loc.address}</span>
              </div>

              <div className="store-detail">
                <Clock size={18} />
                <span>{loc.hours}</span>
              </div>

              <div className="store-detail">
                <Phone size={18} />
                <span>{loc.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
