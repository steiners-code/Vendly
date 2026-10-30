import { norm, contactLink } from '@/utils/helpers';

export function Hero({ store }) {
  const src = norm(store.hero?.bg).src;
  const hasBg = Boolean(src);

  const bgStyle = hasBg
    ? { backgroundImage: `url("${String(src).replace(/"/g, '%22')}")` }
    : {};

  const cLink = contactLink(store);

  return (
    <section className={`hero${hasBg ? ' has-bg' : ''}`} id="hero" style={bgStyle}>
      <div className="wrap hero-in">
        <h1>{store.tagline}</h1>
        <p>{store.about}</p>
        <div className="row">
          <a className="btn" href="#catalog">
            Shop the collection
          </a>
          <a className="btn ghost" href={cLink} target="_blank" rel="noopener noreferrer">
            Ask about an item
          </a>
        </div>
      </div>
    </section>
  );
}
