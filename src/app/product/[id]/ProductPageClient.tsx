"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import ProductDetail from "@/components/product/ProductDetail";
import { Product } from "@/lib/products";

export default function ProductPageClient({ 
    product, 
    similarProducts 
}: { 
    product: Product; 
    similarProducts: Product[] 
}) {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar onCartOpen={() => setCartOpen(true)} />

            <main className="flex-1 mt-[80px]">
                <ProductDetail product={product} similarProducts={similarProducts} />
            </main>

            <Footer />
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
    );
}
