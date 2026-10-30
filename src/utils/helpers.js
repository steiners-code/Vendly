import { VENDLY } from '../data/stores';

export const norm = x => (typeof x === "string" ? { src: x } : x || {});

export const money = (n, currency = "Rs.") => currency + " " + Number(n).toLocaleString("en-PK");

export const vl = (path, slug = "noor-atelier") => `${VENDLY}${path || "/"}?ref=demo-${encodeURIComponent(slug)}`;

export function contactLink(store, text) {
  const c = store.contact || {};
  const msg = encodeURIComponent(text || `Hi ${store.name}, I’d like to ask about your collection.`);
  if (c.type === "whatsapp") return `https://wa.me/${c.value}?text=${msg}`;
  if (c.type === "instagram") return `https://ig.me/m/${c.value}`;
  if (c.type === "phone") return `tel:${c.value}`;
  if (c.type === "email") return `mailto:${c.value}?subject=${encodeURIComponent(store.name)}&body=${msg}`;
  return "#";
}

export const contactLabel = (store) => {
  const labels = { whatsapp: "WhatsApp", instagram: "Instagram", phone: "Call", email: "Email" };
  return labels[store.contact?.type] || "Contact";
};

export const imagesOf = (product, maxImgs = 4) => {
  const imgs = Array.isArray(product.images) && product.images.length
    ? product.images
    : product.image
    ? [product.image]
    : [{}];
  return imgs.slice(0, maxImgs);
};
