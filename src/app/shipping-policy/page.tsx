"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

const CartDrawer = dynamic(() => import("@/components/layout/CartDrawer"), { ssr: false });

export default function ShippingPolicy() {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar onCartOpen={() => setCartOpen(true)} />
            
            <main className="flex-1 pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <div className="bg-card p-8 md:p-12 rounded-2xl shadow-sm border border-border">
                    <h1 className="font-display text-4xl font-medium mb-8 text-foreground">Shipping Policy</h1>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                        <p>Last updated: May 2026</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">1. Order Processing</h2>
                        <p>All orders are processed within 1-3 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">2. Domestic Shipping Rates</h2>
                        <p>Shipping charges for your order will be calculated and displayed at checkout. We offer free standard shipping on all domestic orders over ₹999.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">3. International Shipping</h2>
                        <p>Currently, we only ship within India. We do not offer international shipping at this time.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">4. How do I check the status of my order?</h2>
                        <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">5. Shipping to P.O. boxes</h2>
                        <p>Some carriers have limitations around shipping to P.O. Boxes. If one of your carriers falls into this group, you should look up their policy and communicate it to your customers here.</p>
                    </div>
                </div>
            </main>
            
            <Footer />
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
    );
}
