import React from 'react';
import type { Metadata } from 'next';
import { STORES, VENDLY } from '@/data/stores';
import { generateThemeStyle } from '@/utils/theme';
import { PromoBar } from '@/components/demo/PromoBar';
import { Header } from '@/components/demo/Header';
import { Footer } from '@/components/demo/Footer';
import { JsonLd } from '@/components/JsonLd';
import { DemoNotFound } from '@/components/DemoNotFound';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: any }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const store = (STORES as Record<string, any>)[slug];

    if (!store) {
        return {
            title: 'Demo not found | Vendly',
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const canonicalUrl = `${VENDLY}/demo/${store.slug || slug}`;
    const logoUrl = typeof store.logo === 'string' ? store.logo : store.logo?.src;

    return {
        title: `${store.name} | ${store.tagline} | Powered by Vendly.pk`,
        description: `${store.about}. Build your own free online store with WhatsApp ordering in 5 minutes on Vendly.pk!`,
        ...(logoUrl
            ? {
                icons: {
                    icon: logoUrl,
                    shortcut: logoUrl,
                    apple: logoUrl,
                },
            }
            : {}),
        keywords: [
            store.name,
            'free WhatsApp store',
            'Vendly',
            'Vendly.pk',
            'free online store builder Pakistan',
            'WhatsApp catalog store',
            'e-commerce storefront',
        ],
        metadataBase: new URL('https://demo.vendly.pk'),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${store.name} | Online Storefront Powered by Vendly`,
            description: `${store.about} Open your own free online store with WhatsApp ordering on Vendly.pk.`,
            url: canonicalUrl,
            siteName: `${store.name} on Vendly`,
            locale: 'en_PK',
            type: 'website',
            images: [
                {
                    url: `${VENDLY}/og-banner.png`,
                    width: 1200,
                    height: 630,
                    alt: `${store.name} | Create a free online store on Vendly.pk`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${store.name} | Powered by Vendly.pk`,
            description: store.about,
            creator: '@vendly_pk',
            images: [`${VENDLY}/og-banner.png`],
        },
        other: {
            'generator': 'Vendly.pk | Free WhatsApp E-Commerce Builder',
        },
    };
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ slug: any }>;
}) {
    const { slug } = await params;
    const store = (STORES as Record<string, any>)[slug];

    if (!store) {
        return <DemoNotFound />;
    }

    const primary = store.theme?.primary || '#7a1f4b';
    const themeStyle = generateThemeStyle(primary) as React.CSSProperties;

    return (
        <body className="app-container" style={themeStyle}>
            <PromoBar store={store} />
            <Header store={store} />
            {children}
            <Footer store={store} />

            <JsonLd store={store} />
        </body>
    );
}
