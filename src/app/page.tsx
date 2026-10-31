import type { Metadata } from 'next';
import { LandingHeader } from '@/components/LandingHeader';
import './landing.css';

export const metadata: Metadata = {
  title: 'Vendly | Turn your followers into orders, free',
  description:
    'Give your shop one link with every product, price and photo, plus an Order on WhatsApp button. Free to start, no card needed.',
  openGraph: {
    title: 'Vendly | Turn your followers into orders, free',
    description:
      'One link for your whole catalog. Customers order on WhatsApp with the product and price already filled in.',
  },
};

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="landing-page">
      <LandingHeader />

      <main>
        {/* Hero Section */}
        <section className="wrap hero">
          <div>
            <h1>
              Turn followers into orders. <em>Free.</em>
            </h1>
            <p className="sub">
              Vendly gives your shop one link with every product, price and photo, plus an Order on
              WhatsApp button. Customers see everything before they message you.
            </p>
            <div className="btns">
              <a className="btn big" href="/signup">
                Start free
              </a>
              <a className="btn big ghost" href="#demo">
                See a live demo
              </a>
            </div>
            <ul className="ticks">
              <li>
                <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                  <circle cx="11" cy="11" r="10" className="f-tert" />
                  <path
                    d="M6.5 11.5l3 3 6-6.5"
                    fill="none"
                    stroke="var(--on-tertiary, #fff)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                No card needed
              </li>
              <li>
                <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                  <circle cx="11" cy="11" r="10" className="f-tert" />
                  <path
                    d="M6.5 11.5l3 3 6-6.5"
                    fill="none"
                    stroke="var(--on-tertiary, #fff)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                No code
              </li>
              <li>
                <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                  <circle cx="11" cy="11" r="10" className="f-tert" />
                  <path
                    d="M6.5 11.5l3 3 6-6.5"
                    fill="none"
                    stroke="var(--on-tertiary, #fff)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Made for boutiques first
              </li>
            </ul>
          </div>
          <div className="art">
            <svg
              viewBox="0 0 420 470"
              role="img"
              aria-label="A phone showing an online store, with customer questions on one side and a new order on the other"
            >
              <defs>
                <g id="cl-landing">
                  <circle cx="18" cy="26" r="16" />
                  <circle cx="42" cy="18" r="20" />
                  <circle cx="68" cy="26" r="15" />
                  <rect x="18" y="26" width="50" height="16" />
                </g>
                <path
                  id="st-landing"
                  d="M0 -13Q0 0 13 0Q0 0 0 13Q0 0 -13 0Q0 0 0 -13Z"
                />
              </defs>
              <ellipse cx="210" cy="452" rx="110" ry="9" className="f-ink" style={{ opacity: 0.12 }} />
              <g transform="translate(0 0)">
                <g className="bob">
                  <rect x="110" y="20" width="200" height="420" rx="32" className="o f-surf" />
                  <rect x="186" y="32" width="48" height="8" rx="4" className="f-ink" />
                  <rect x="126" y="52" width="168" height="20" rx="6" className="f-ink" />
                  <text
                    x="210"
                    y="66"
                    textAnchor="middle"
                    className="f-surf"
                    fontSize="10"
                    fontWeight="700"
                  >
                    Built with Vendly
                  </text>
                  <rect x="126" y="80" width="168" height="62" rx="10" className="o f-sec" />
                  <text x="140" y="118" className="t f-ink" fontSize="22">
                    Your Store
                  </text>
                  <rect x="126" y="152" width="80" height="62" rx="8" className="o f-cont" />
                  <circle cx="194" cy="162" r="9" className="o f-acc" style={{ strokeWidth: 2 }} />
                  <rect x="126" y="222" width="52" height="6" rx="3" className="f-ink" style={{ opacity: 0.8 }} />
                  <rect x="126" y="234" width="32" height="6" rx="3" className="f-ink" style={{ opacity: 0.35 }} />
                  <rect x="214" y="152" width="80" height="62" rx="8" className="o f-tint" />
                  <rect x="214" y="222" width="52" height="6" rx="3" className="f-ink" style={{ opacity: 0.8 }} />
                  <rect x="214" y="234" width="32" height="6" rx="3" className="f-ink" style={{ opacity: 0.35 }} />
                  <rect x="126" y="252" width="80" height="62" rx="8" className="o f-tint" />
                  <rect x="126" y="322" width="52" height="6" rx="3" className="f-ink" style={{ opacity: 0.8 }} />
                  <rect x="126" y="334" width="32" height="6" rx="3" className="f-ink" style={{ opacity: 0.35 }} />
                  <rect x="214" y="252" width="80" height="62" rx="8" className="o f-cont" />
                  <rect x="214" y="322" width="52" height="6" rx="3" className="f-ink" style={{ opacity: 0.8 }} />
                  <rect x="214" y="334" width="32" height="6" rx="3" className="f-ink" style={{ opacity: 0.35 }} />
                  <rect x="126" y="372" width="168" height="44" rx="22" className="o f-tert" />
                  <text
                    x="210"
                    y="399"
                    textAnchor="middle"
                    className="f-ont"
                    fontSize="13"
                    fontWeight="700"
                  >
                    Order on WhatsApp
                  </text>
                </g>
              </g>
              <g transform="translate(4 150)">
                <rect width="66" height="30" rx="12" className="o f-surf" style={{ strokeWidth: 2.5 }} />
                <text x="33.0" y="20" textAnchor="middle" className="f-ink" fontSize="12" fontWeight="700">
                  Price?
                </text>
              </g>
              <g transform="translate(4 196)">
                <rect width="92" height="30" rx="12" className="o f-surf" style={{ strokeWidth: 2.5 }} />
                <text x="46.0" y="20" textAnchor="middle" className="f-ink" fontSize="12" fontWeight="700">
                  Available?
                </text>
              </g>
              <g transform="translate(4 242)">
                <rect width="74" height="30" rx="12" className="o f-surf" style={{ strokeWidth: 2.5 }} />
                <text x="37.0" y="20" textAnchor="middle" className="f-ink" fontSize="12" fontWeight="700">
                  Pics?
                </text>
              </g>
              <g transform="translate(306 330)">
                <rect width="108" height="30" rx="12" className="o f-tert" style={{ strokeWidth: 2.5 }} />
                <text x="54.0" y="20" textAnchor="middle" className="f-ont" fontSize="12" fontWeight="700">
                  New order
                </text>
              </g>
              <g transform="translate(350 70) rotate(-12)">
                <circle r="36" className="o f-acc" />
                <text y="9" textAnchor="middle" className="t f-ink" fontSize="25">
                  FREE
                </text>
              </g>
              <g transform="translate(40 110)">
                <use
                  href="#st-landing"
                  className="spark f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-0s' }}
                />
              </g>
              <g transform="translate(392 200)">
                <use
                  href="#st-landing"
                  className="spark f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-1s' }}
                />
              </g>
              <g transform="translate(30 420)">
                <use
                  href="#st-landing"
                  className="spark f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-2s' }}
                />
              </g>
            </svg>
          </div>
        </section>

        {/* Why Vendly */}
        <section className="sec band" id="why">
          <div className="wrap">
            <span className="label">The problem</span>
            <h2>Selling from your DMs is costing you orders.</h2>
            <p className="lead">
              If your shop lives on Instagram, Facebook and WhatsApp, you already know how the day goes.
            </p>
            <div className="cards c3">
              <div className="card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 5h16v11H9l-5 4z" />
                  </svg>
                </span>
                <h3>The same questions, all day</h3>
                <p>Every customer asks for the price, the sizes and more pictures, and you answer one by one.</p>
                <span className="q">“Price? Is it available?”</span>
              </div>
              <div className="card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 13l3-8h12l3 8v6H3z" />
                    <path d="M3 13h5l1 2h6l1-2h5" />
                  </svg>
                </span>
                <h3>Orders buried in chats</h3>
                <p>A real order lands between a hundred messages. It gets missed, or answered late.</p>
                <span className="q">“Sent you a message yesterday…”</span>
              </div>
              <div className="card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
                    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
                  </svg>
                </span>
                <h3>Nowhere proper to send people</h3>
                <p>A bio link that goes nowhere makes a serious shop look temporary, and followers don’t buy from temporary.</p>
                <span className="q">“Do you have a website?”</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="sec" id="how">
          <div className="wrap how">
            <div>
              <span className="label">The fix</span>
              <h2>One link that answers everything.</h2>
              <p className="lead">
                Customers browse your products, prices and photos, then tap Order on WhatsApp. The
                message reaches you with the product and price already in it.
              </p>
              <ol className="steps">
                <li>
                  <b>1</b>
                  <div>
                    <h3>Sign up free</h3>
                    <p>Create your account. No card, nothing to install.</p>
                  </div>
                </li>
                <li>
                  <b>2</b>
                  <div>
                    <h3>Add your products</h3>
                    <p>Photos, prices and categories. Up to 10 on the free plan.</p>
                  </div>
                </li>
                <li>
                  <b>3</b>
                  <div>
                    <h3>Share your link</h3>
                    <p>Put it in your bio, your status and your replies. Every “price?” now has an answer.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="chat" aria-label="Example of an order message">
              <span className="cap">Example: what lands in your WhatsApp</span>
              <div className="head">
                <span className="av">N</span>
                <div>
                  <b>Noor Atelier</b>
                  <small>online</small>
                </div>
              </div>
              <div className="bubble out">
                Hi Noor Atelier, I’d like to order: Mulberry Embroidered Lawn (Rs. 6,800).
              </div>
              <div className="bubble in">Thank you! Which dupatta colour would you like?</div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="sec band">
          <div className="wrap">
            <span className="label">What you get</span>
            <h2>A real storefront, without the website project.</h2>
            <div className="cards f">
              <div className="card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="8" height="8" rx="2" />
                    <rect x="13" y="3" width="8" height="8" rx="2" />
                    <rect x="3" y="13" width="8" height="8" rx="2" />
                    <rect x="13" y="13" width="8" height="8" rx="2" />
                  </svg>
                </span>
                <h3>A catalog that sells</h3>
                <p>Product photos, prices, categories, and Sale or New tags with the old price crossed out.</p>
              </div>
              <div className="card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 5h16v11H9l-5 4z" />
                    <path d="M8.5 10.5l2 2 4-4" />
                  </svg>
                </span>
                <h3>Order on WhatsApp</h3>
                <p>One tap opens a chat with you, with the product name and price already typed.</p>
              </div>
              <div className="card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="6" y="3" width="15" height="15" rx="2" />
                    <path d="M3 7v12a2 2 0 0 0 2 2h12" />
                  </svg>
                </span>
                <h3>Up to 4 photos per product</h3>
                <p>Show the front, the back and the details so fewer people ask for pictures.</p>
              </div>
              <div className="card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="9" cy="10" r="1.6" />
                    <path d="M4 18l5-5 4 4 3-3 4 4" />
                  </svg>
                </span>
                <h3>Your photos, your look</h3>
                <p>Add a hero image and a two-image banner, using the same photos you post on Instagram.</p>
              </div>
              <div className="card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
                    <path d="M11 18.5h2" />
                  </svg>
                </span>
                <h3>Built for phones</h3>
                <p>Your customers browse on their phones, so the store is designed for them first.</p>
              </div>
              <div className="card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M13 2L5 13h6l-1 9 8-11h-6z" />
                  </svg>
                </span>
                <h3>Nothing to set up</h3>
                <p>No hosting, no code and no developer. Add products and share the link.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo */}
        <section className="sec" id="demo">
          <div className="wrap center">
            <span className="label">Live demo</span>
            <h2>See a store before you make one.</h2>
            <p className="lead">This is a real Vendly store. Scroll it, open a product and try the order button.</p>
            <div className="frame" style={{ textAlign: 'left' }}>
              <div className="top">
                <span className="d" />
                <span className="d" />
                <span className="d" />
                <span className="url">vendly.markaz.network/demo/noor-atelier</span>
              </div>
              <div className="view">
                <iframe src="/demo/noor-atelier" title="Live demo store" loading="lazy" />
                <a className="tap" href="/demo/noor-atelier" aria-label="Open the live demo">
                  <span className="btn sm">Tap to open the demo</span>
                </a>
              </div>
            </div>
            <div className="under">
              <a className="btn big ghost" href="/demo/noor-atelier">
                Open the full demo
              </a>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="sec band">
          <div className="wrap">
            <span className="label">Who it’s for</span>
            <h2>Made for boutiques first.</h2>
            <p className="lead">
              Vendly is built around fashion brands that sell through Instagram and WhatsApp. If you
              have products to show and customers to answer, it fits.
            </p>
            <div className="chips">
              <span className="chip">Lawn and ready-to-wear</span>
              <span className="chip">Bridal and occasion wear</span>
              <span className="chip">Jewellery</span>
              <span className="chip">Accessories</span>
              <span className="chip">Home-based brands</span>
              <span className="chip">Any shop with products</span>
            </div>
            <div className="cmp">
              <div className="card">
                <h3>Selling from DMs only</h3>
                <ul className="rows">
                  <li>
                    <b>Cost</b>
                    <span>Free</span>
                  </li>
                  <li>
                    <b>Setup</b>
                    <span>None</span>
                  </li>
                  <li>
                    <b>Customers see</b>
                    <span>Photos scattered across posts and chats</span>
                  </li>
                  <li>
                    <b>Orders</b>
                    <span>Buried in conversations</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3>Hiring a developer</h3>
                <ul className="rows">
                  <li>
                    <b>Cost</b>
                    <span>Money upfront</span>
                  </li>
                  <li>
                    <b>Setup</b>
                    <span>Days to weeks</span>
                  </li>
                  <li>
                    <b>Customers see</b>
                    <span>A custom website</span>
                  </li>
                  <li>
                    <b>Orders</b>
                    <span>Depends on what gets built</span>
                  </li>
                </ul>
              </div>
              <div className="card hl">
                <h3>Vendly</h3>
                <ul className="rows">
                  <li>
                    <b>Cost</b>
                    <span>Free to start</span>
                  </li>
                  <li>
                    <b>Setup</b>
                    <span>Minutes</span>
                  </li>
                  <li>
                    <b>Customers see</b>
                    <span>One clean catalog with prices and photos</span>
                  </li>
                  <li>
                    <b>Orders</b>
                    <span>Straight to your WhatsApp, product and price included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Free Plan */}
        <section className="sec" id="free">
          <div className="wrap">
            <div className="plan">
              <div>
                <span className="tag">Free plan</span>
                <h2>Everything you need to start selling.</h2>
                <p className="l">Open your store today and pay nothing. Upgrade later if you outgrow it.</p>
                <a className="btn big" href="/signup">
                  Start free
                </a>
              </div>
              <div>
                <ul>
                  <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                      <circle cx="11" cy="11" r="10" className="f-tert" />
                      <path
                        d="M6.5 11.5l3 3 6-6.5"
                        fill="none"
                        stroke="var(--on-tertiary, #fff)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>A storefront for your catalog, up to 10 products</span>
                  </li>
                  <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                      <circle cx="11" cy="11" r="10" className="f-tert" />
                      <path
                        d="M6.5 11.5l3 3 6-6.5"
                        fill="none"
                        stroke="var(--on-tertiary, #fff)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>One contact button: WhatsApp, Instagram, phone or email</span>
                  </li>
                  <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                      <circle cx="11" cy="11" r="10" className="f-tert" />
                      <path
                        d="M6.5 11.5l3 3 6-6.5"
                        fill="none"
                        stroke="var(--on-tertiary, #fff)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Your own photos with basic image customization</span>
                  </li>
                  <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                      <circle cx="11" cy="11" r="10" className="f-tert" />
                      <path
                        d="M6.5 11.5l3 3 6-6.5"
                        fill="none"
                        stroke="var(--on-tertiary, #fff)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>A single page, ready to share anywhere</span>
                  </li>
                  <li>
                    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                      <circle cx="11" cy="11" r="10" className="f-tert" />
                      <path
                        d="M6.5 11.5l3 3 6-6.5"
                        fill="none"
                        stroke="var(--on-tertiary, #fff)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>A small Vendly badge on your store</span>
                  </li>
                </ul>
                <div className="soon">
                  <b>Coming soon</b>
                  <span>
                    Remove the Vendly badge, add more products, get product, search and category pages,
                    and use custom templates. Planned as one-time upgrades.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec band" id="faq">
          <div className="wrap center">
            <span className="label">Questions</span>
            <h2>Good to know before you start.</h2>
            <div className="faq">
              <details>
                <summary>Is it really free?</summary>
                <p>
                  Yes. The free plan gives you a one-page store with up to 10 products and one contact button.
                  Free stores show a small Vendly badge.
                </p>
              </details>
              <details>
                <summary>Do I need to know how to code?</summary>
                <p>
                  No. You sign up, add your products and share your link. There is nothing to install or host.
                </p>
              </details>
              <details>
                <summary>How do customers order?</summary>
                <p>
                  They tap Order on a product. That opens a chat with you, on the contact option you chose,
                  with the product name and price already in the message.
                </p>
              </details>
              <details>
                <summary>Can customers pay on the store?</summary>
                <p>
                  Not yet. Customers message you and you settle payment with them the way you already do.
                </p>
              </details>
              <details>
                <summary>Can I use my own domain?</summary>
                <p>
                  Not yet. Your store lives on a Vendly link that you can put in your bio and share anywhere.
                </p>
              </details>
              <details>
                <summary>What is the Vendly badge?</summary>
                <p>
                  A small “Built with Vendly” bar at the top of your store and a credit in the footer. It comes
                  with the free plan.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="sec cta">
          <div className="wrap">
            <h2>Your followers are already asking for prices.</h2>
            <p className="lead">Give them one link, and let the orders come to your WhatsApp.</p>
            <div className="btns">
              <a className="btn big light" href="/signup">
                Start free
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <div className="fgrid">
            <div>
              <a className="logo" href="/">
                Vendly
              </a>
              <p>Online stores for shops that sell on Instagram and WhatsApp.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <a href="#how">How it works</a>
              <a href="#demo">Live demo</a>
              <a href="#free">Free plan</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h4>Account</h4>
              <a href="/signup">Start free</a>
              <a href="/signin">Sign in</a>
            </div>
          </div>
          <div className="legal">
            <span>© {currentYear} Vendly</span>
            <span>
              Built by{' '}
              <a href="https://ateeb.markaz.network/" target="_blank" rel="noopener noreferrer">
                Ateeb Hussain
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
