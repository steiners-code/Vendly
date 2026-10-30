import { contactLink, contactLabel } from '@/utils/helpers'

export function Header({ store }) {
  const cLabel = contactLabel(store);
  const cLink = contactLink(store);

  return (
    <header>
      <div className="wrap bar">
        <a className="logo" href="#top">
          {store.name}
        </a>
        <nav>
          <a href="#catalog">Shop</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn" href={cLink} target="_blank" rel="noopener noreferrer">
          Message on {cLabel}
        </a>
      </div>
    </header>
  );
}
