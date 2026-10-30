/* ─── CIELAB / LCH colour utilities ─────────────────────────────────────────
   Ported from the HTML reference (stores.html palette() function).
   All colour math is in CIE L*C*h° space so chroma and tone are perceptually
   uniform — the same approach Material Design 3 uses for its tonal palettes.
   ─────────────────────────────────────────────────────────────────────────── */

const lin = v => (v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
const gam = v => (v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055);

function hexToRgb(hex) {
  return [1, 3, 5].map(i => parseInt(hex.substr(i, 2), 16));
}

function hexToLch(hex) {
  const [r, g, b] = hexToRgb(hex).map(v => lin(v / 255));
  const X = 0.4124564 * r + 0.3575761 * g + 0.1804375 * b;
  const Y = 0.2126729 * r + 0.7151522 * g + 0.072175 * b;
  const Z = 0.0193339 * r + 0.119192 * g + 0.9503041 * b;
  const f = t => (t > 216 / 24389 ? Math.cbrt(t) : (24389 / 27 * t + 16) / 116);
  const fx = f(X / 0.95047), fy = f(Y), fz = f(Z / 1.08883);
  const a = 500 * (fx - fy), bb = 200 * (fy - fz);
  return [116 * fy - 16, Math.hypot(a, bb), (Math.atan2(bb, a) * 180 / Math.PI + 360) % 360];
}

function lchToLinear(L, C, H) {
  const h = H * Math.PI / 180;
  const fy = (L + 16) / 116, fx = fy + C * Math.cos(h) / 500, fz = fy - C * Math.sin(h) / 200;
  const inv = t => (t * t * t > 216 / 24389 ? t * t * t : (116 * t - 16) / (24389 / 27));
  const X = 0.95047 * inv(fx), Y = inv(fy), Z = 1.08883 * inv(fz);
  return [
    3.2404542 * X - 1.5371385 * Y - 0.4985314 * Z,
    -0.969266 * X + 1.8760108 * Y + 0.041556 * Z,
    0.0556434 * X - 0.2040259 * Y + 1.0572252 * Z,
  ];
}

/** Convert LCH → hex, clamping chroma to stay inside sRGB gamut. */
function tone(H, C, T) {
  if (T <= 0) return '#000000';
  if (T >= 100) return '#ffffff';
  const ok = c => lchToLinear(T, c, H).every(v => v >= -0.0005 && v <= 1.0005);
  let lo = 0, hi = C;
  if (ok(C)) lo = C;
  else for (let i = 0; i < 24; i++) { const m = (lo + hi) / 2; ok(m) ? lo = m : hi = m; }
  return '#' + lchToLinear(T, lo, H)
    .map(v => Math.round(255 * gam(Math.min(1, Math.max(0, v)))).toString(16).padStart(2, '0'))
    .join('');
}

function mixHex(a, b, t) {
  const A = hexToRgb(a), B = hexToRgb(b);
  return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join('');
}

function lum(hex) {
  const [r, g, b] = hexToRgb(hex).map(v => lin(v / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(a, b) {
  return (Math.max(lum(a), lum(b)) + 0.05) / (Math.min(lum(a), lum(b)) + 0.05);
}

export function isValidHex(v) {
  return /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v || '');
}

export function normalizeHex(v) {
  v = v.replace('#', '');
  if (v.length === 3) v = [...v].map(c => c + c).join('');
  return '#' + v.toLowerCase();
}

/* ─── Material 3-style tonal palette ────────────────────────────────────────
   Generates 20 semantic colour roles from:
     • brand   — the store's primary brand colour (required)
     • comp    — an optional complementary hex; defaults to opposite hue
   ─────────────────────────────────────────────────────────────────────────── */
export function palette(brand, comp) {
  brand = normalizeHex(brand);
  const [, C, H] = hexToLch(brand);
  const pc = Math.max(C, 48);

  let Hc, Cc;
  if (comp && isValidHex(comp)) {
    const [, Cc0, Hc0] = hexToLch(normalizeHex(comp));
    Hc = Hc0;
    Cc = Math.max(Cc0, 36);
  } else {
    Hc = (H + 180) % 360;
    Cc = Math.max(C * 0.85, 40);
  }

  const darkText = tone(H, 4, 10);
  const bg = tone(H, 4, 98);
  const onBrand = contrastRatio(brand, '#ffffff') >= contrastRatio(brand, darkText)
    ? '#ffffff'
    : darkText;

  return {
    brand,
    'on-brand': onBrand,
    'brand-hover': mixHex(brand, onBrand, 0.1),
    'brand-tint': mixHex(bg, brand, 0.08),
    'brand-container': tone(H, pc, 90),
    'on-brand-container': tone(H, pc, 10),
    'secondary-container': tone(H, 16, 90),
    'on-secondary-container': tone(H, 16, 10),
    tertiary: tone(Hc, Cc, 40),
    'on-tertiary': '#ffffff',
    accent: tone(Hc, Cc, 80),
    'on-accent': tone(Hc, Cc, 10),
    bg,
    surface: '#ffffff',
    container: tone(H, 4, 94),
    ink: tone(H, 4, 10),
    muted: tone(H, 8, 30),
    line: tone(H, 8, 80),
    inverse: tone(H, 4, 20),
    'on-inverse': tone(H, 4, 95),
  };
}

/** Returns an object of CSS custom properties ready for React inline styles. */
export function generateThemeStyle(primaryHex = '#7a1f4b', complementHex) {
  const p = palette(primaryHex, complementHex);
  return Object.fromEntries(Object.entries(p).map(([k, v]) => [`--${k}`, v]));
}
