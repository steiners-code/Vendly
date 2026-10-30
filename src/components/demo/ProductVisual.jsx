import { norm } from '@/utils/helpers'

export function ProductVisual({ item, product, index = 0, className = '' }) {
  const normItem = norm(item);
  if (normItem.src) {
    return (
      <img
        className={className}
        src={normItem.src}
        alt={product?.name || ''}
        loading="lazy"
      />
    );
  }

  const hue = normItem.hue ?? product?.hue ?? ((index * 47) % 360);
  const initials = String(product?.name || '?')
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('');
  const background = `linear-gradient(155deg, hsl(${hue} 45% 38%), hsl(${(hue + 30) % 360} 50% 62%))`;

  return (
    <div
      className={`ph ${className}`}
      role="img"
      aria-label={product?.name || 'Product'}
      style={{ background }}
    >
      {initials}
    </div>
  );
}
