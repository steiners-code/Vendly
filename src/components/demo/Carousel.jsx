"use client"

import { useState, useEffect, useRef } from 'react';
import { norm } from '@/utils/helpers'

export function Carousel({ store }) {
  const cData = (store.carousel || []).slice(0, 2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (cData.length <= 1 || paused) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % cData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cData.length, paused]);

  if (!cData.length) return null;

  const go = index => {
    setCurrentIndex((index + cData.length) % cData.length);
  };

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const handleTouchEnd = e => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 40) {
      go(currentIndex + (dx < 0 ? 1 : -1));
    }
    setPaused(false);
  };

  return (
    <section id="carouselWrap">
      <div
        className="carousel"
        id="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {cData.map((s, i) => {
          const normS = norm(s);
          const grad =
            normS.hue !== undefined
              ? `linear-gradient(120deg, hsl(${normS.hue} 45% 28%), hsl(${(normS.hue + 35) % 360} 50% 50%))`
              : i % 2
                ? 'linear-gradient(120deg, var(--brand), var(--secondary))'
                : 'linear-gradient(120deg, var(--brand-dark), var(--brand))';

          const bg = normS.src ? (
            <img src={normS.src} alt={normS.text || store.name} />
          ) : (
            <div className="cbg" style={{ background: grad }} />
          );

          return (
            <div key={i} className={`cslide ${i === currentIndex ? 'on' : ''}`}>
              {bg}
              {normS.text && <div className="ctext">{normS.text}</div>}
            </div>
          );
        })}

        {cData.length > 1 && (
          <>
            <button
              type="button"
              className="cnav cprev"
              aria-label="Previous slide"
              onClick={() => go(currentIndex - 1)}
            >
              &#8249;
            </button>
            <button
              type="button"
              className="cnav cnext"
              aria-label="Next slide"
              onClick={() => go(currentIndex + 1)}
            >
              &#8250;
            </button>
            <div className="dots">
              {cData.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className="dot"
                  aria-label={`Slide ${i + 1}`}
                  aria-current={i === currentIndex}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
