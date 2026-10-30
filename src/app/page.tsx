export default function Home() {
  return (
    <footer id="contact" className="m-0! min-h-screen">
      <div className="wrap h-full min-h-[90vh] flex flex-col justify-between">
        <div className="cta" id="vCta">
          <div>
            <h2>Your store could look like this.</h2>
            <p>
              Open a free Vendly store with a catalog, WhatsApp ordering and up to 10 products. Live in minutes.
            </p>
            <div className="vlinks">
              <a href='/templates?ref=footer' target="_blank" rel="noopener noreferrer">
                Templates
              </a>
              <a href='/pricing?ref=footer' target="_blank" rel="noopener noreferrer">
                Pricing
              </a>
              <a href='/addons?ref=footer' target="_blank" rel="noopener noreferrer">
                Addons
              </a>
              <a href='/?ref=footer' target="_blank" rel="noopener noreferrer">
                Vendly.pk
              </a>
            </div>
          </div>
          <div className="acts">
            <a
              className="btn big gold"
              href='/signup?ref=footer'
              target="_blank"
              rel="noopener noreferrer"
            >
              Create your free store
            </a>
            <a
              className="btn big line"
              href='/pricing?ref=footer'
              target="_blank"
              rel="noopener noreferrer"
            >
              See pricing
            </a>
          </div>
        </div>

        <div className="mark">
          2026 &copy; Made with vendly.pk by
          &nbsp;
          <a
            href="https://ateeb.markaz.network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ateeb Hussain
          </a>
        </div>
      </div>
    </footer >
  );
}
