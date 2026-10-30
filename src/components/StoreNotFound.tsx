'use client';

import React, { useState } from 'react';
import './not-found.css';

interface StoreNotFoundProps {
  initialSlug?: string;
}

const cleanSlug = (v: string) =>
  String(v || '')
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 30);

export function StoreNotFound({ initialSlug = 'your-brand' }: StoreNotFoundProps) {
  const [rawInput, setRawInput] = useState(initialSlug);
  const currentSlug = cleanSlug(rawInput) || 'your-brand';
  const claimUrl = `https://vendly.markaz.network/signup?slug=${encodeURIComponent(currentSlug)}&ref=404-store`;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      window.location.href = claimUrl;
    }
  };

  const displaySlugText = '/' + currentSlug.slice(0, 9) + (currentSlug.length > 9 ? '…' : '');

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
              Nobody owns this name yet. <em>Be first.</em>
            </h1>
            <div className="nf-claim">
              <label className="nf-mono" htmlFor="claimIn">
                vendly.markaz.network/
              </label>
              <input
                id="claimIn"
                className="nf-mono"
                type="text"
                maxLength={30}
                autoComplete="off"
                spellCheck={false}
                aria-label="Store address"
                value={rawInput}
                onChange={(e) => setRawInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <a
                id="claim"
                className="nf-btn tert"
                href={claimUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Claim it
              </a>
            </div>
          </div>
          <div className="nf-art">
            <svg
              viewBox="0 0 480 420"
              role="img"
              aria-label="An empty market stall with a flag, unclaimed and waiting for an owner"
            >
              <defs>
                <g id="cl-store">
                  <circle cx="18" cy="26" r="16" />
                  <circle cx="42" cy="18" r="20" />
                  <circle cx="68" cy="26" r="15" />
                  <rect x="18" y="26" width="50" height="16" />
                </g>
                <path
                  id="st-store"
                  d="M0 -13Q0 0 13 0Q0 0 0 13Q0 0 -13 0Q0 0 0 -13Z"
                />
              </defs>
              <rect x="0" y="360" width="480" height="60" className="nf-svg-f-cont" />
              <line x1="0" y1="360" x2="480" y2="360" className="nf-svg-o" />
              <g transform="translate(300 34)">
                <g className="nf-anim-drift" style={{ animationDelay: '-0s' }}>
                  <use
                    href="#cl-store"
                    style={{
                      fill: 'var(--surface, #fff)',
                      stroke: 'var(--ink, #201a1d)',
                      strokeWidth: 6,
                    }}
                  />
                  <use href="#cl-store" style={{ fill: 'var(--surface, #fff)', stroke: 'none' }} />
                </g>
              </g>
              <rect x="124" y="140" width="12" height="220" className="nf-svg-o nf-svg-f-sec" />
              <rect x="344" y="140" width="12" height="220" className="nf-svg-o nf-svg-f-sec" />
              <rect x="136" y="216" width="208" height="9" className="nf-svg-o nf-svg-f-sec" />
              <rect x="132" y="276" width="216" height="84" className="nf-svg-o nf-svg-f-cont" />
              <rect
                x="122"
                y="262"
                width="236"
                height="16"
                rx="4"
                className="nf-svg-o nf-svg-f-brand"
              />
              <rect
                x="204"
                y="292"
                width="72"
                height="50"
                rx="4"
                className="nf-svg-o nf-svg-f-ink"
              />
              <text
                x="240"
                y="324"
                textAnchor="middle"
                className="nf-svg-t nf-svg-f-surf"
                fontSize="18"
              >
                YOURS
              </text>
              <g transform="translate(152 246)">
                <g className="nf-anim-coin" style={{ animationDelay: '-0s' }}>
                  <circle r="13" className="nf-svg-o nf-svg-f-acc" />
                  <circle r="7" className="nf-svg-nf nf-svg-o" style={{ strokeWidth: 2 }} />
                </g>
              </g>
              <g transform="translate(312 246)">
                <g className="nf-anim-coin" style={{ animationDelay: '-1.1s' }}>
                  <circle r="13" className="nf-svg-o nf-svg-f-acc" />
                  <circle r="7" className="nf-svg-nf nf-svg-o" style={{ strokeWidth: 2 }} />
                </g>
              </g>
              <g transform="translate(336 246)">
                <g className="nf-anim-coin" style={{ animationDelay: '-2.1s' }}>
                  <circle r="13" className="nf-svg-o nf-svg-f-acc" />
                  <circle r="7" className="nf-svg-nf nf-svg-o" style={{ strokeWidth: 2 }} />
                </g>
              </g>
              <path d="M128 112L160 70H320L352 112Z" className="nf-svg-o nf-svg-f-brand" />
              <path d="M120 148a20 20 0 0 0 40 0Z" className="nf-svg-o nf-svg-f-brand" />
              <path d="M160 148a20 20 0 0 0 40 0Z" className="nf-svg-o nf-svg-f-surf" />
              <path d="M200 148a20 20 0 0 0 40 0Z" className="nf-svg-o nf-svg-f-brand" />
              <path d="M240 148a20 20 0 0 0 40 0Z" className="nf-svg-o nf-svg-f-surf" />
              <path d="M280 148a20 20 0 0 0 40 0Z" className="nf-svg-o nf-svg-f-brand" />
              <path d="M320 148a20 20 0 0 0 40 0Z" className="nf-svg-o nf-svg-f-surf" />
              <rect x="120" y="112" width="40" height="36" className="nf-svg-o nf-svg-f-brand" />
              <rect x="160" y="112" width="40" height="36" className="nf-svg-o nf-svg-f-surf" />
              <rect x="200" y="112" width="40" height="36" className="nf-svg-o nf-svg-f-brand" />
              <rect x="240" y="112" width="40" height="36" className="nf-svg-o nf-svg-f-surf" />
              <rect x="280" y="112" width="40" height="36" className="nf-svg-o nf-svg-f-brand" />
              <rect x="320" y="112" width="40" height="36" className="nf-svg-o nf-svg-f-surf" />
              <g transform="translate(240 166)">
                <g className="nf-anim-swing">
                  <line x1="0" y1="0" x2="0" y2="22" className="nf-svg-o" />
                  <rect
                    x="-46"
                    y="22"
                    width="92"
                    height="28"
                    rx="6"
                    className="nf-svg-o nf-svg-f-acc"
                  />
                  <text
                    x="0"
                    y="41"
                    textAnchor="middle"
                    className="nf-svg-f-ink"
                    fontSize="13"
                    fontWeight="700"
                    letterSpacing=".5"
                  >
                    UNCLAIMED
                  </text>
                </g>
              </g>
              <rect x="44" y="236" width="10" height="124" className="nf-svg-o nf-svg-f-sec" />
              <path d="M14 212H98L114 229L98 246H14Z" className="nf-svg-o nf-svg-f-surf" />
              <text
                id="slugText"
                x="22"
                y="233"
                className="nf-svg-f-ink nf-mono"
                fontSize="11"
                fontWeight="700"
              >
                {displaySlugText}
              </text>
              <line
                x1="404"
                y1="360"
                x2="404"
                y2="96"
                className="nf-svg-o"
                style={{ strokeWidth: 5 }}
              />
              <circle cx="404" cy="92" r="7" className="nf-svg-o nf-svg-f-acc" />
              <g transform="translate(406 104)">
                <g className="nf-anim-wave">
                  <path d="M0 0H60L48 22L60 44H0Z" className="nf-svg-o nf-svg-f-tert" />
                  <text
                    x="25"
                    y="29"
                    textAnchor="middle"
                    className="nf-svg-t nf-svg-f-ont"
                    fontSize="16"
                  >
                    YOU
                  </text>
                </g>
              </g>
              <g transform="translate(70 130)">
                <use
                  href="#st-store"
                  className="nf-anim-spark nf-svg-f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-0s' }}
                />
              </g>
              <g transform="translate(30 320)">
                <use
                  href="#st-store"
                  className="nf-anim-spark nf-svg-f-acc"
                  style={{ stroke: 'var(--ink, #201a1d)', strokeWidth: 2, animationDelay: '-1.2s' }}
                />
              </g>
              <g transform="translate(450 300)">
                <use
                  href="#st-store"
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
export default StoreNotFound;
