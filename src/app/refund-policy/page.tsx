"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

const CartDrawer = dynamic(() => import("@/components/layout/CartDrawer"), { ssr: false });

export default function RefundPolicy() {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar onCartOpen={() => setCartOpen(true)} />
            
            <main className="flex-1 pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <div className="bg-card p-8 md:p-12 rounded-2xl shadow-sm border border-border">
                    <h1 className="font-display text-4xl font-medium mb-8 text-foreground">Refund & Return Policy</h1>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                        <p>Last updated: May 2026</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">1. Returns</h2>
                        <p>Due to the personal nature of our handmade soap products, we do not accept returns or exchanges for items that have been opened or used. If you receive an incorrect item, please contact us within 7 days of delivery.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">2. Refunds</h2>
                        <p>Refunds are only issued for products that arrive damaged or defective. To request a refund, please email us at hello@gravitymonk.com with your order number and photos of the damaged product.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">3. Processing Time</h2>
                        <p>Once your refund request is approved, it will be processed, and a credit will automatically be applied to your original method of payment within 5-7 business days.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">4. Late or Missing Refunds</h2>
                        <p>If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, as it may take some time before your refund is officially posted.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">5. Non-refundable Items</h2>
                        <p>Gift cards, sale items, and limited edition drops are final sale and cannot be refunded.</p>
                    </div>
                </div>
            </main>
            
            <Footer />
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
    );
}
