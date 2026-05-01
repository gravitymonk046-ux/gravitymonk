"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import Image from "next/image";

const CartDrawer = dynamic(() => import("@/components/layout/CartDrawer"), { ssr: false });

export default function AboutPage() {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar onCartOpen={() => setCartOpen(true)} />
            
            <main className="flex-1 pt-32 pb-20 container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground">Our Story</h1>
                        <p className="text-muted-foreground leading-relaxed">
                            Welcome to Gravity Monk™. We believe that true skincare begins with nature's purest ingredients. Our journey started in 2026 with a simple mission: to create artisanal, handmade soaps that nourish the skin without relying on harsh chemicals or synthetic additives.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Every bar of Gravity Monk soap is carefully handcrafted in small batches to ensure the highest quality. We use traditional cold-process soap-making methods, which allow us to preserve the natural glycerin that helps lock in moisture.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            From earthy charcoal and invigorating coffee to soothing shea butter and vibrant turmeric, our ingredients are thoughtfully sourced. Experience the transformative power of nature and turn your daily cleanse into a mindful ritual.
                        </p>
                    </div>
                    <div className="flex-1 w-full relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                        <Image 
                            src="/images/landing-page.png" 
                            alt="Gravity Monk Soaps Collection" 
                            fill 
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </main>
            
            <Footer />
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
    );
}
