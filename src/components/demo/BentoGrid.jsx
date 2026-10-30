import { ProductVisual } from './ProductVisual';
import { imagesOf, money } from '@/utils/helpers'

export function BentoGrid({ products, onSelectProduct, currency }) {
  const topProducts = products.slice(0, 3);

  return (
    <section className="wrap">
      <div className="bento" id="tiles">
        {topProducts.map((p, i) => {
          const initials = String(p.name || '?')
            .split(' ')
            .slice(0, 2)
            .map(w => w[0])
            .join('');
          const firstImg = imagesOf(p)[0];

          return (
            <button
              key={p.id}
              type="button"
              className="tile"
              aria-label={`View ${p.name}`}
              onClick={() => onSelectProduct(p.id)}
            >
              <ProductVisual item={firstImg} product={p} index={i} className="v" />
              <span className="lbl" aria-hidden="true">
                <span className="l-a">{initials}</span>
                <span className="l-b">
                  <b>{p.name}</b>
                  {money(p.price, currency)}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
