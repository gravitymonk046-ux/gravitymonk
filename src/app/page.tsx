"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ComboOffer from "@/components/sections/ComboOffer";
import ProductGrid from "@/components/sections/ProductGrid";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
// import Testimonials from "@/components/sections/Testimonials";
import dynamic from "next/dynamic";

const CartDrawer = dynamic(() => import("@/components/layout/CartDrawer"), { ssr: false });
import Footer from "@/components/layout/Footer";

export default function Home() {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar onCartOpen={() => setCartOpen(true)} />
            <Hero />
            <ComboOffer />
            <ProductGrid />
            <AboutSection />
            <FAQSection />
            {/* <Testimonials /> */}
            <Footer />
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
    );
}
