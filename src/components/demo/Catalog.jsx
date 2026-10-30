import { ProductCard } from './ProductCard';

export function Catalog({
  products,
  activeCategory,
  onSelectCategory,
  maxImagesPerProduct,
  currency,
  onSelectProduct
}) {
  const categories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))];

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(p => p.category === activeCategory);

  return (
    <section className="wrap catalog" id="catalog">
      <div className="head">
        <h2>{activeCategory === 'All' ? 'New arrivals' : activeCategory}</h2>
        <div className="chips" role="group" aria-label="Filter by category">
          {categories.map(c => (
            <button
              key={c}
              type="button"
              className="chip"
              aria-pressed={c === activeCategory}
              onClick={() => onSelectCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="grid items-start">
        {filteredProducts.length ? (
          filteredProducts.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              maxImages={maxImagesPerProduct}
              currency={currency}
              onSelectProduct={onSelectProduct}
            />
          ))
        ) : (
          <p className="empty">Nothing here yet. Check back soon.</p>
        )}
      </div>
    </section>
  );
}
