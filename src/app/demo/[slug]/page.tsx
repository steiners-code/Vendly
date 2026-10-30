'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { STORES } from '@/data/stores';
import { Hero } from '@/components/demo/Hero';
import { Carousel } from '@/components/demo/Carousel';
import { BentoGrid } from '@/components/demo/BentoGrid';
import { Catalog } from '@/components/demo/Catalog';
import { ProductModal } from '@/components/demo/ProductModal';

export default function StorePage({
    params,
}: {
    params: Promise<{ slug: any }>;
}) {
    const { slug } = use(params);
    const store = (STORES as Record<string, any>)[slug];

    if (!store) {
        notFound();
    }

    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [selectedProductId, setSelectedProductId] = useState<number | string | null>(null);

    const products = (store.products || []).slice(0, store.plan?.maxProducts ?? 10);
    const selectedProduct = products.find((p: any) => p.id === selectedProductId) || null;

    return (
        <main id="top">
            <Carousel store={store} />
            <Hero store={store} />
            <BentoGrid
                products={products}
                currency={store.currency}
                onSelectProduct={(id: number | string) => setSelectedProductId(id)}
            />
            <Catalog
                products={products}
                activeCategory={activeCategory}
                onSelectCategory={(cat: string) => setActiveCategory(cat)}
                maxImagesPerProduct={store.plan?.maxImagesPerProduct ?? 4}
                currency={store.currency}
                onSelectProduct={(id: number | string) => setSelectedProductId(id)}
            />

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    store={store}
                    onClose={() => setSelectedProductId(null)}
                />
            )}
        </main>
    );
}
