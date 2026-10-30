"use client"

import { useState, useEffect } from 'react';
import { ProductVisual } from './ProductVisual';
import { imagesOf, money, contactLink, contactLabel } from '@/utils/helpers'

export function ProductModal({ product, store, onClose }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    setActiveImgIndex(0);
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product?.id, onClose]);

  if (!product) return null;

  const maxImgs = store.plan?.maxImagesPerProduct ?? 4;
  const imgs = imagesOf(product, maxImgs);
  const msg = `Hi ${store.name}, I’d like to order: ${product.name} (${money(product.price, store.currency)}).`;
  const cLink = contactLink(store, msg);
  const cLabel = contactLabel(store);

  return (
    <div
      className="modal-backdrop"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content" role="dialog" aria-modal="true">
        <div className="pd">
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={onClose}
          >
            &times;
          </button>
          <div className="gallery">
            {imgs.length > 1 && (
              <div className="thumbs">
                {imgs.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    className="th"
                    aria-pressed={i === activeImgIndex}
                    aria-label={`Show image ${i + 1}`}
                    onClick={() => setActiveImgIndex(i)}
                  >
                    <ProductVisual item={s} product={product} index={i} className="tv" />
                  </button>
                ))}
              </div>
            )}
            <div className="stage">
              {imgs.map((s, i) => (
                <ProductVisual
                  key={i}
                  item={s}
                  product={product}
                  index={i}
                  className={`slide ${i === activeImgIndex ? 'on' : ''}`}
                />
              ))}
            </div>
          </div>
          <div className="info">
            <div className="cat">{product.category || ''}</div>
            <h3>{product.name}</h3>
            <div className="price">
              {money(product.price, store.currency)}
              {product.compareAt ? <s>{money(product.compareAt, store.currency)}</s> : null}
            </div>
            <p className="desc">{product.description || ''}</p>
            <a
              className="btn"
              href={cLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on {cLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
