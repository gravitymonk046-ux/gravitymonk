"use client";

import { useEffect, useState } from "react";
import { Product, products } from "@/lib/products";
import { getWishlist } from "@/lib/cart";
import ProductCard from "@/components/product/ProductCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import { motion } from "framer-motion";

export default function WishlistPage() {
    const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const update = () => {
            const wishlistIds = getWishlist();
            const filtered = products.filter((p) => wishlistIds.includes(p.id));
            setWishlistProducts(filtered);
        };
        update();
        window.addEventListener("wishlist-updated", update);
        return () => window.removeEventListener("wishlist-updated", update);
    }, []);

    return (
        <main className="min-h-screen bg-background">
            <Navbar onCartOpen={() => setIsCartOpen(true)} />
            <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-display font-medium mb-4">Your Wishlist</h1>
                    <p className="text-muted-foreground body-large">Items you've saved for later.</p>
                </header>

                {wishlistProducts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <p className="text-xl text-muted-foreground mb-8">Your wishlist is empty.</p>
                        <a href="/" className="btn-primary">
                            Continue Shopping
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {wishlistProducts.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} />
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
