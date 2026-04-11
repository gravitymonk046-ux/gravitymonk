import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { products, categories } from "@/lib/products";

interface ProductGridProps {
  searchQuery?: string;
}

const ProductGrid = ({ searchQuery = "" }: ProductGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case "price-low": return [...result].sort((a, b) => a.price - b.price);
      case "price-high": return [...result].sort((a, b) => b.price - a.price);
      case "rating": return [...result].sort((a, b) => b.rating - a.rating);
      default: return result;
    }
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="shop" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-4">Our Collection</h2>
          <p className="body-large max-w-xl mx-auto">
            Each bar is handcrafted with love, using only the finest natural ingredients.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${activeCategory === cat
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
