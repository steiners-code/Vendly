import { contactLink, contactLabel } from '@/utils/helpers'
import Image from 'next/image';

export function Header({ store }) {
  const cLabel = contactLabel(store);
  const cLink = contactLink(store);

  return (
    <header>
      <div className="wrap bar">
        <a className="logo flex items-center gap-2 justify-start" href="#top">
          {store.logo && (
            <Image
              width={48}
              height={48}
              alt={store.logo}
              src={store.logo}
              className='w-full h-full aspect-square object-cover'
            />
          )}

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
