import { vl, contactLink, contactLabel } from '@/utils/helpers'

export function Footer({ store }) {
  const showWatermark = store.plan?.showWatermark !== false;
  const cLink = contactLink(store);
  const cLabel = contactLabel(store);

  return (
    <footer id="contact">
      <div className="wrap">
        {showWatermark ? (
          <div className="cta" id="vCta">
            <div>
              <h2>Your store could look like this.</h2>
              <p>
                Open a free Vendly store with a catalog, WhatsApp ordering and up to 10 products. Live in minutes.
              </p>
              <div className="vlinks">
                <a href={vl('/templates', store.slug)} target="_blank" rel="noopener noreferrer">
                  Templates
                </a>
                <a href={vl('/pricing', store.slug)} target="_blank" rel="noopener noreferrer">
                  Pricing
                </a>
                <a href={vl('/addons', store.slug)} target="_blank" rel="noopener noreferrer">
                  Addons
                </a>
                <a href={vl('/', store.slug)} target="_blank" rel="noopener noreferrer">
                  Vendly.pk
                </a>
              </div>
            </div>
            <div className="acts">
              <a
                className="btn big tert"
                href={vl('/signup', store.slug)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Create your free store
              </a>
              <a
                className="btn big line"
                href={vl('/pricing', store.slug)}
                target="_blank"
                rel="noopener noreferrer"
              >
                See pricing
              </a>
            </div>
          </div>
        ) : null}

        <div className="foot">
          <div>
            <strong>{store.name}</strong>
            <span>{store.about}</span>
          </div>
          <div id="fContact">
            <div>{store.city}</div>
            <a href={cLink} target="_blank" rel="noopener noreferrer">
              {cLabel}: {store.contact.value}
            </a>
          </div>
        </div>

        <div className="mark">
          {showWatermark ? (
            <>
              Made with{' '}
              <a href={vl('/', store.slug)} target="_blank" rel="noopener noreferrer">
                Vendly.pk
              </a>{' '}
              by{' '}
              <a
                href="https://ateeb.markaz.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ateeb Hussain
              </a>
            </>
          ) : (
            <>&copy; {new Date().getFullYear()} {store.name}</>
          )}
        </div>
      </div>
    </footer>
  );
}
