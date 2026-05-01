import { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { products, categories } from "@/lib/products";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }
    switch (sortBy) {
      case "price-low": return [...result].sort((a, b) => a.price - b.price);
      case "price-high": return [...result].sort((a, b) => b.price - a.price);
      case "rating": return [...result].sort((a, b) => b.rating - a.rating);
      default: return result;
    }
  }, [activeCategory, sortBy]);

  return (
    <section id="shop" className="editorial-shop-section">
      {/* Large italic watermark behind grid */}
      <span className="editorial-shop-watermark" aria-hidden="true">Collection</span>

      <div className="editorial-shop-inner container mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <p className="editorial-eyebrow mb-3">Our Collection</p>
          <h2 className="editorial-heading mb-2">
            All-in-One<br />
            <span className="editorial-heading--italic">Skincare Complex</span>
          </h2>
          <p className="editorial-body">
            Each bar is handcrafted with love, using only the finest natural ingredients.
          </p>
        </div>

        {/* Filter + Sort bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm bg-transparent text-foreground border-none focus:outline-none cursor-pointer font-body"
            >
              <option value="default">Featured</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center body-large mt-12">No products found. Try a different search or category.</p>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
