"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

const CartDrawer = dynamic(() => import("@/components/layout/CartDrawer"), { ssr: false });

export default function TermsOfService() {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar onCartOpen={() => setCartOpen(true)} />
            
            <main className="flex-1 pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <div className="bg-card p-8 md:p-12 rounded-2xl shadow-sm border border-border">
                    <h1 className="font-display text-4xl font-medium mb-8 text-foreground">Terms of Service</h1>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                        <p>Last updated: May 2026</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing and using gravitymonk.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">2. Products and Pricing</h2>
                        <p>We strive to accurately display the colors and details of our products. However, due to the handmade nature of our soaps, slight variations may occur. Prices are subject to change without notice.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">3. User Accounts</h2>
                        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. We reserve the right to terminate accounts that violate our terms.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">4. Intellectual Property</h2>
                        <p>All content on this website, including text, graphics, logos, and images, is the property of Gravity Monk™ and protected by copyright and other intellectual property laws.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">5. Limitation of Liability</h2>
                        <p>Gravity Monk shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of our products or website.</p>
                    </div>
                </div>
            </main>
            
            <Footer />
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
    );
}
