"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import ProductDetail from "@/components/product/ProductDetail";
import { products } from "@/lib/products";

export default function ProductPage() {
    const params = useParams();
    const id = params?.id as string;

    if (!id) return null;

    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    const [cartOpen, setCartOpen] = useState(false);

    const similarProducts = products.filter(p => p.id !== product.id).slice(0, 3);

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
