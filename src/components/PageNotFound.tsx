import React from 'react';
import './not-found.css';

export function PageNotFound() {
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
              Nothing here. <em>Plenty of room.</em>
            </h1>
            <div className="nf-btns">
              <a
                className="nf-btn big tert"
                href="https://vendly.markaz.network/signup?ref=404-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a free store
              </a>
              <a className="nf-btn big ghost" href="https://vendly.markaz.network/">
                Back home
              </a>
            </div>
          </div>
          <div className="nf-art">
            <svg
              viewBox="0 0 480 420"
              role="img"
              aria-label="A little parcel wandering past a signpost that points nowhere"
            >
              <defs>
                <g id="cl-page">
                  <circle cx="18" cy="26" r="16" />
                  <circle cx="42" cy="18" r="20" />
                  <circle cx="68" cy="26" r="15" />
                  <rect x="18" y="26" width="50" height="16" />
                </g>
                <path
                  id="st-page"
                  d="M0 -13Q0 0 13 0Q0 0 0 13Q0 0 -13 0Q0 0 0 -13Z"
                />
              </defs>
              <circle cx="92" cy="76" r="30" className="nf-svg-o nf-svg-f-acc" />
              <g transform="translate(220 44)">
                <g className="nf-anim-drift" style={{ animationDelay: '-0s' }}>
                  <use
                    href="#cl-page"
                    style={{
                      fill: 'var(--surface, #fff)',
                      stroke: 'var(--ink, #201a1d)',
                      strokeWidth: 6,
                    }}
                  />
                  <use href="#cl-page" style={{ fill: 'var(--surface, #fff)', stroke: 'none' }} />
                </g>
              </g>
              <g transform="translate(380 96)">
                <g className="nf-anim-drift" style={{ animationDelay: '-3s' }}>
                  <use
                    href="#cl-page"
                    style={{
                      fill: 'var(--surface, #fff)',
                      stroke: 'var(--ink, #201a1d)',
                      strokeWidth: 6,
                    }}
                  />
                  <use href="#cl-page" style={{ fill: 'var(--surface, #fff)', stroke: 'none' }} />
                </g>
              </g>
              <path
                d="M0 330Q120 250 240 320T480 300V420H0Z"
                className="nf-svg-o nf-svg-f-sec"
              />
              <path
                d="M0 372Q150 322 300 366T480 352V420H0Z"
                className="nf-svg-o nf-svg-f-cont"
              />
              <path
                d="M20 396C110 364 120 334 200 344S320 386 380 336"
                className="nf-svg-nf nf-svg-o nf-anim-dash"
                style={{ strokeWidth: 4 }}
              />
              <rect x="330" y="176" width="12" height="184" className="nf-svg-o nf-svg-f-sec" />
              <circle cx="336" cy="172" r="8" className="nf-svg-o nf-svg-f-acc" />
              <path d="M276 196L292 182H378V210H292Z" className="nf-svg-o nf-svg-f-brand" />
              <text x="302" y="201" className="nf-svg-f-onb" fontSize="13" fontWeight="700">
                HOME?
              </text>
              <path d="M310 218H394L410 233L394 248H310Z" className="nf-svg-o nf-svg-f-surf" />
              <text x="320" y="238" className="nf-svg-f-ink" fontSize="13" fontWeight="700">
                SHOP?
              </text>
              <g transform="rotate(-7 336 272)">
                <rect
                  x="296"
                  y="258"
                  width="84"
                  height="26"
                  rx="5"
                  className="nf-svg-o nf-svg-f-acc"
                />
                <text
                  x="338"
                  y="277"
                  textAnchor="middle"
                  className="nf-svg-f-ink"
                  fontSize="14"
                  fontWeight="700"
                >
                  ???
                </text>
              </g>
              <ellipse
                cx="188"
                cy="354"
                rx="42"
                ry="7"
                className="nf-svg-f-ink"
                style={{ opacity: 0.14 }}
              />
              <g transform="translate(150 268)">
                <g className="nf-anim-bob">
                  <line
                    x1="20"
                    y1="62"
                    x2="16"
                    y2="76"
                    className="nf-svg-o"
                    style={{ strokeWidth: 4 }}
                  />
                  <line
                    x1="56"
                    y1="62"
                    x2="60"
                    y2="76"
                    className="nf-svg-o"
                    style={{ strokeWidth: 4 }}
                  />
                  <rect
                    x="0"
                    y="0"
                    width="76"
                    height="62"
                    rx="6"
                    className="nf-svg-o nf-svg-f-cont"
                  />
                  <rect x="30" y="0" width="16" height="62" className="nf-svg-f-brand" />
                  <rect
                    x="0"
                    y="0"
                    width="76"
                    height="62"
                    rx="6"
                    className="nf-svg-o nf-svg-nf"
                  />
                  <circle
                    cx="18"
                    cy="28"
                    r="6"
                    className="nf-svg-o nf-svg-f-surf"
                    style={{ strokeWidth: 2 }}
                  />
                  <circle
                    cx="58"
                    cy="28"
                    r="6"
                    className="nf-svg-o nf-svg-f-surf"
                    style={{ strokeWidth: 2 }}
                  />
                  <circle cx="19" cy="29" r="2.5" className="nf-svg-f-ink" />
                  <circle cx="59" cy="29" r="2.5" className="nf-svg-f-ink" />
                  <path
                    d="M30 46Q38 38 46 46"
                    className="nf-svg-o nf-svg-nf"
                    style={{ strokeWidth: 2.5 }}
                  />
                  <text
                    x="38"
                    y="-10"
                    textAnchor="middle"
                    className="nf-svg-t nf-svg-f-tert"
                    fontSize="46"
                  >
                    ?
                  </text>
                </g>
              </g>
              <g transform="translate(40 200)">
                <use
                  href="#st-page"
                  className="nf-anim-spark nf-svg-f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-0s' }}
                />
              </g>
              <g transform="translate(450 190)">
                <use
                  href="#st-page"
                  className="nf-anim-spark nf-svg-f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-1s' }}
                />
              </g>
              <g transform="translate(420 330)">
                <use
                  href="#st-page"
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
export default PageNotFound;
