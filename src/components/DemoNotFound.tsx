import React from 'react';
import './not-found.css';

export function DemoNotFound() {
  return (
    <div className="nf-body">
      <header>
        <div className="nf-wrap nf-bar">
          <a className="nf-logo" href="https://vendly.markaz.network/">
            Vendly
          </a>
        </div>
      </header>
      <main className="nf-main">
        <div className="nf-wrap nf-stage">
          <div className="nf-copy">
            <h1>
              No demo here. <em>Your brand could.</em>
            </h1>
            <div className="nf-btns">
              <a
                className="nf-btn big"
                href="https://vendly.markaz.network/signup?ref=404-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open my free store
              </a>
            </div>
          </div>
          <div className="nf-art">
            <svg
              viewBox="0 0 480 420"
              role="img"
              aria-label="An empty boutique shopfront with a mannequin waiting for stock"
            >
              <defs>
                <g id="cl-demo">
                  <circle cx="18" cy="26" r="16" />
                  <circle cx="42" cy="18" r="20" />
                  <circle cx="68" cy="26" r="15" />
                  <rect x="18" y="26" width="50" height="16" />
                </g>
                <path
                  id="st-demo"
                  d="M0 -13Q0 0 13 0Q0 0 0 13Q0 0 -13 0Q0 0 0 -13Z"
                />
              </defs>
              <rect x="0" y="360" width="480" height="60" className="nf-svg-f-cont" />
              <line x1="0" y1="360" x2="480" y2="360" className="nf-svg-o" />
              <circle cx="404" cy="62" r="26" className="nf-svg-o nf-svg-f-acc" />
              <g transform="translate(36 52)">
                <g className="nf-anim-drift" style={{ animationDelay: '-0s' }}>
                  <use
                    href="#cl-demo"
                    style={{
                      fill: 'var(--surface, #fff)',
                      stroke: 'var(--ink, #201a1d)',
                      strokeWidth: 6,
                    }}
                  />
                  <use href="#cl-demo" style={{ fill: 'var(--surface, #fff)', stroke: 'none' }} />
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
                YOUR DEMO HERE
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
              <g transform="translate(214 238)">
                <g className="nf-anim-swing">
                  <line x1="0" y1="0" x2="0" y2="22" className="nf-svg-o" />
                  <rect
                    x="-17"
                    y="22"
                    width="34"
                    height="26"
                    rx="5"
                    className="nf-svg-o nf-svg-f-acc"
                  />
                  <text
                    x="0"
                    y="42"
                    textAnchor="middle"
                    className="nf-svg-t nf-svg-f-ink"
                    fontSize="18"
                  >
                    ?
                  </text>
                </g>
              </g>
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
              <rect
                x="314"
                y="282"
                width="48"
                height="24"
                rx="5"
                className="nf-svg-o nf-svg-f-surf"
              />
              <text
                x="338"
                y="299"
                textAnchor="middle"
                className="nf-svg-f-ink"
                fontSize="11"
                fontWeight="700"
                letterSpacing="1"
              >
                SOON
              </text>
              <path d="M392 360L396 334H430L434 360Z" className="nf-svg-o nf-svg-f-brand" />
              <ellipse cx="413" cy="304" rx="8" ry="22" className="nf-svg-o nf-svg-f-tert" />
              <ellipse
                cx="404"
                cy="312"
                rx="8"
                ry="20"
                transform="rotate(-24 404 312)"
                className="nf-svg-o nf-svg-f-tert"
              />
              <ellipse
                cx="422"
                cy="310"
                rx="8"
                ry="20"
                transform="rotate(24 422 310)"
                className="nf-svg-o nf-svg-f-tert"
              />
              <g transform="translate(40 190)">
                <use
                  href="#st-demo"
                  className="nf-anim-spark nf-svg-f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-0s' }}
                />
              </g>
              <g transform="translate(452 160)">
                <use
                  href="#st-demo"
                  className="nf-anim-spark nf-svg-f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-1s' }}
                />
              </g>
              <g transform="translate(448 262)">
                <use
                  href="#st-demo"
                  className="nf-anim-spark nf-svg-f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-2s' }}
                />
              </g>
              <g transform="translate(30 300)">
                <use
                  href="#st-demo"
                  className="nf-anim-spark nf-svg-f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-1.5s' }}
                />
              </g>
            </svg>
          </div>
        </div>
      </main>
      <footer className="nf-footer">
        Made with{' '}
        <a href="https://vendly.markaz.network/?ref=404" target="_blank" rel="noopener noreferrer">
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
export default DemoNotFound;
