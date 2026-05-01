"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

const CartDrawer = dynamic(() => import("@/components/layout/CartDrawer"), { ssr: false });

export default function PrivacyPolicy() {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar onCartOpen={() => setCartOpen(true)} />
            
            <main className="flex-1 pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <div className="bg-card p-8 md:p-12 rounded-2xl shadow-sm border border-border">
                    <h1 className="font-display text-4xl font-medium mb-8 text-foreground">Privacy Policy</h1>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                        <p>Last updated: May 2026</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">1. Information We Collect</h2>
                        <p>We collect information that you provide directly to us when you make a purchase, create an account, or contact us for support. This may include your name, email address, shipping address, and payment details.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to process your orders, communicate with you about products or promotions, and improve our services. We do not sell your personal information to third parties.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">3. Data Security</h2>
                        <p>We implement reasonable security measures to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the internet is completely secure.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">4. Cookies</h2>
                        <p>We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookies through your browser settings.</p>
                        
                        <h2 className="text-xl font-medium text-foreground mt-8 mb-4">5. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at hello@gravitymonk.com.</p>
                    </div>
                </div>
            </main>
            
            <Footer />
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
    );
}
