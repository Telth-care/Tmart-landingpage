import React from 'react';
import { Sparkles, Apple, Milk, Wheat, PackageOpen } from 'lucide-react';

const ICON_MAP = {
  Sparkles,
  Apple,
  Milk,
  Wheat,
  PackageOpen
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  totalItems
}) {
  return (
    <div className="categories-bar">
      {categories.map((cat) => {
        const IconComponent = ICON_MAP[cat.icon] || Sparkles;
        const isActive = selectedCategory === cat.id;

        return (
          <button
            key={cat.id}
            className={`cat-pill ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            <IconComponent size={16} />
            <span>{cat.name}</span>
            <span className="cat-count">
              {cat.id === 'all' ? totalItems : cat.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

