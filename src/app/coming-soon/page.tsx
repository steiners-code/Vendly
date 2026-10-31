import type { Metadata } from 'next';
import '@/components/not-found.css';

export const metadata: Metadata = {
  title: 'Coming soon | Vendly',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonPage() {
  return (
    <div className="nf-body">
      <header>
        <div className="nf-wrap nf-bar">
          <a className="nf-logo" href="/">
            Vendly
          </a>
          <div id="userSlot" />
        </div>
      </header>
      <main className="nf-main">
        <div className="nf-wrap nf-stage">
          <div className="nf-copy">
            <h1>
              You’re in. <em>The builder opens soon.</em>
            </h1>
            <p className="sub">
              Your account is ready. The store builder will open right here when it is done.
            </p>
            <div className="nf-btns">
              <a className="nf-btn big" href="/demo/noor-atelier">
                See a live demo
              </a>
              <a className="nf-btn big ghost" href="/">
                Back home
              </a>
            </div>
          </div>
          <div className="nf-art">
            <svg
              viewBox="0 0 480 420"
              role="img"
              aria-label="A shopfront getting ready to open, with a ladder, a traffic cone and a mannequin in a hard hat"
            >
              <defs>
                <g id="cl-soon">
                  <circle cx="18" cy="26" r="16" />
                  <circle cx="42" cy="18" r="20" />
                  <circle cx="68" cy="26" r="15" />
                  <rect x="18" y="26" width="50" height="16" />
                </g>
                <path
                  id="st-soon"
                  d="M0 -13Q0 0 13 0Q0 0 0 13Q0 0 -13 0Q0 0 0 -13Z"
                />
              </defs>
              <rect x="0" y="360" width="480" height="60" className="nf-svg-f-cont" />
              <line x1="0" y1="360" x2="480" y2="360" className="nf-svg-o" />
              <circle cx="404" cy="62" r="26" className="nf-svg-o nf-svg-f-acc" />
              <g transform="translate(36 52)">
                <g className="nf-anim-drift" style={{ animationDelay: '-0s' }}>
                  <use
                    href="#cl-soon"
                    style={{
                      fill: 'var(--surface, #fff)',
                      stroke: 'var(--ink, #201a1d)',
                      strokeWidth: 6,
                    }}
                  />
                  <use href="#cl-soon" style={{ fill: 'var(--surface, #fff)', stroke: 'none' }} />
                </g>
              </g>
              <rect x="70" y="112" width="340" height="248" className="nf-svg-o nf-svg-f-surf" />
              <rect
                x="120"
                y="58"
                width="240"
                height="54"
                rx="10"
                className="nf-svg-o nf-svg-f-brand"
              />
              <text
                x="240"
                y="92"
                textAnchor="middle"
                className="nf-svg-t nf-svg-f-onb"
                fontSize="21"
                letterSpacing="1"
              >
                OPENING SOON
              </text>
              <path d="M60 154a30 30 0 0 0 60 0Z" className="nf-svg-o nf-svg-f-brand" />
              <path d="M120 154a30 30 0 0 0 60 0Z" className="nf-svg-o nf-svg-f-surf" />
              <path d="M180 154a30 30 0 0 0 60 0Z" className="nf-svg-o nf-svg-f-brand" />
              <path d="M240 154a30 30 0 0 0 60 0Z" className="nf-svg-o nf-svg-f-surf" />
              <path d="M300 154a30 30 0 0 0 60 0Z" className="nf-svg-o nf-svg-f-brand" />
              <path d="M360 154a30 30 0 0 0 60 0Z" className="nf-svg-o nf-svg-f-surf" />
              <rect x="60" y="118" width="60" height="36" className="nf-svg-o nf-svg-f-brand" />
              <rect x="120" y="118" width="60" height="36" className="nf-svg-o nf-svg-f-surf" />
              <rect x="180" y="118" width="60" height="36" className="nf-svg-o nf-svg-f-brand" />
              <rect x="240" y="118" width="60" height="36" className="nf-svg-o nf-svg-f-surf" />
              <rect x="300" y="118" width="60" height="36" className="nf-svg-o nf-svg-f-brand" />
              <rect x="360" y="118" width="60" height="36" className="nf-svg-o nf-svg-f-surf" />
              <rect
                x="96"
                y="190"
                width="176"
                height="146"
                rx="6"
                className="nf-svg-o nf-svg-f-tint"
              />
              <line
                x1="124"
                y1="326"
                x2="168"
                y2="204"
                style={{
                  stroke: 'var(--surface, #fff)',
                  strokeWidth: 9,
                  opacity: 0.8,
                  strokeLinecap: 'round',
                }}
              />
              <line
                x1="146"
                y1="326"
                x2="172"
                y2="254"
                style={{
                  stroke: 'var(--surface, #fff)',
                  strokeWidth: 9,
                  opacity: 0.8,
                  strokeLinecap: 'round',
                }}
              />
              <rect
                x="88"
                y="336"
                width="192"
                height="14"
                rx="3"
                className="nf-svg-o nf-svg-f-cont"
              />
              <line
                x1="184"
                y1="268"
                x2="184"
                y2="332"
                className="nf-svg-o"
                style={{ strokeWidth: 5 }}
              />
              <ellipse cx="184" cy="332" rx="32" ry="6" className="nf-svg-o nf-svg-f-sec" />
              <path
                d="M158 218Q184 206 210 218L218 256Q184 274 150 256Z"
                className="nf-svg-o nf-svg-f-sec"
              />
              <circle cx="184" cy="203" r="8" className="nf-svg-o nf-svg-f-tert" />
              <path d="M171 201a13 13 0 0 1 26 0Z" className="nf-svg-o nf-svg-f-acc" />
              <rect x="166" y="199" width="36" height="6" rx="3" className="nf-svg-o nf-svg-f-acc" />
              <rect
                x="300"
                y="190"
                width="76"
                height="170"
                rx="4"
                className="nf-svg-o nf-svg-f-tert"
              />
              <rect
                x="312"
                y="204"
                width="52"
                height="64"
                rx="3"
                className="nf-svg-o nf-svg-f-tint"
              />
              <circle cx="366" cy="300" r="5" className="nf-svg-o nf-svg-f-acc" />
              <line
                x1="400"
                y1="360"
                x2="418"
                y2="200"
                className="nf-svg-o nf-svg-nf"
                style={{ strokeWidth: 4 }}
              />
              <line
                x1="428"
                y1="360"
                x2="446"
                y2="200"
                className="nf-svg-o nf-svg-nf"
                style={{ strokeWidth: 4 }}
              />
              <line
                x1="403.1"
                y1="332"
                x2="431.1"
                y2="332"
                className="nf-svg-o"
                style={{ strokeWidth: 3 }}
              />
              <line
                x1="406.8"
                y1="300"
                x2="434.8"
                y2="300"
                className="nf-svg-o"
                style={{ strokeWidth: 3 }}
              />
              <line
                x1="410.4"
                y1="268"
                x2="438.4"
                y2="268"
                className="nf-svg-o"
                style={{ strokeWidth: 3 }}
              />
              <line
                x1="413.9"
                y1="236"
                x2="441.9"
                y2="236"
                className="nf-svg-o"
                style={{ strokeWidth: 3 }}
              />
              <line
                x1="417.6"
                y1="204"
                x2="445.6"
                y2="204"
                className="nf-svg-o"
                style={{ strokeWidth: 3 }}
              />
              <path d="M26 360L40 318L54 360Z" className="nf-svg-o nf-svg-f-acc" />
              <line
                x1="31"
                y1="344"
                x2="49"
                y2="344"
                className="nf-svg-o"
                style={{ strokeWidth: 3 }}
              />
              <rect x="20" y="358" width="40" height="5" rx="2" className="nf-svg-o nf-svg-f-ink" />
              <g transform="translate(40 190)">
                <use
                  href="#st-soon"
                  className="nf-anim-spark nf-svg-f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-0s' }}
                />
              </g>
              <g transform="translate(454 300)">
                <use
                  href="#st-soon"
                  className="nf-anim-spark nf-svg-f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-1s' }}
                />
              </g>
              <g transform="translate(36 110)">
                <use
                  href="#st-soon"
                  className="nf-anim-spark nf-svg-f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-2s' }}
                />
              </g>
            </svg>
          </div>
        </div>
      </main>
      <footer className="nf-footer">
        Made with{' '}
        <a href="https://vendly.markaz.network/" target="_blank" rel="noopener noreferrer">
          Vendly
        </a>{' '}
        by{' '}
        <a href="https://ateeb.markaz.network/" target="_blank" rel="noopener noreferrer">
          Ateeb Hussain
        </a>
      </footer>
    </div>
  );
}
