import { VENDLY } from '@/data/stores';

interface Product {
  id: number;
  name: string;
  price: number;
  category?: string;
  description?: string;
}

interface Store {
  slug: string;
  name: string;
  about: string;
  city: string;
  currency: string;
  contact?: { type: string; value: string };
  products?: Product[];
}

export function JsonLd({ store }: { store: Store }) {
  const storeUrl = `https://demo.vendly.pk/stores/${store.slug}`;

  // 1. Storefront Schema
  const storeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: store.name,
    description: store.about,
    url: storeUrl,
    telephone: store.contact?.value ? `+${store.contact.value}` : undefined,
    priceRange: `${store.currency} 2,400 - ${store.currency} 9,600`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: store.city,
      addressCountry: 'PK',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vendly',
      url: VENDLY,
      logo: `${VENDLY}/logo.png`,
    },
  };

  // 2. Catalog Product List Schema
  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${store.name} Product Collection`,
    itemListElement: (store.products || []).map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        description: p.description || p.name,
        category: p.category,
        offers: {
          '@type': 'Offer',
          price: p.price,
          priceCurrency: 'PKR',
          availability: 'https://schema.org/InStock',
          url: `${storeUrl}#catalog`,
        },
      },
    })),
  };

  // 3. SaaS Platform Schema (Promoting Vendly)
  const saasPlatformSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Vendly',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: VENDLY,
    description: 'Free online store builder with WhatsApp ordering for small businesses.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PKR',
      description: 'Free Tier with catalog and WhatsApp ordering',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(saasPlatformSchema) }}
      />
    </>
  );
}