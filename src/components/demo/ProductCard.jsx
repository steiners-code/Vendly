"use client"

import { useState, useEffect } from 'react';
import { ProductVisual } from './ProductVisual';
import { imagesOf, money } from '@/utils/helpers'

export function ProductCard({ product, maxImages, currency, onSelectProduct }) {
  const imgs = imagesOf(product, maxImages);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered || imgs.length < 2) return;

    setActiveImageIndex(prev => (prev + 1) % imgs.length);

    const interval = setInterval(() => {
      setActiveImageIndex(prev => (prev + 1) % imgs.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      setActiveImageIndex(0);
    };
  }, [isHovered, imgs.length]);

  return (
    <button
      type="button"
      className="card"
      aria-label={`View ${product.name}`}
      onClick={() => onSelectProduct(product.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="media">
        {product.tag && <span className="tag">{product.tag}</span>}
        {imgs.map((s, k) => (
          <ProductVisual
            key={k}
            item={s}
            product={product}
            index={k}
            className={`slide ${k === activeImageIndex ? 'on' : ''}`}
          />
        ))}
      </div>
      <h3>{product.name}</h3>
      <div className="cat">{product.category || ''}</div>
      <div className="price">
        {money(product.price, currency)}
        {product.compareAt ? <s>{money(product.compareAt, currency)}</s> : null}
      </div>
    </button>
  );
}
