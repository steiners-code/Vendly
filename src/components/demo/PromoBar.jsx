import { vl } from '@/utils/helpers'

export function PromoBar({ store }) {
  if (store.plan?.showPromo === false) return null;

  return (
    <div className="promo" id="promo">
      This store runs on{' '}
      <a href={vl('/', store.slug)} target="_blank" rel="noopener noreferrer">
        Vendly
      </a>
      . Open yours free.
    </div>
  );
}
