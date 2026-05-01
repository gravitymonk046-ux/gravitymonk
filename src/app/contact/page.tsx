"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin } from "lucide-react";

const CartDrawer = dynamic(() => import("@/components/layout/CartDrawer"), { ssr: false });

export default function ContactPage() {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar onCartOpen={() => setCartOpen(true)} />
            
            <main className="flex-1 pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">Contact Us</h1>
                    <p className="text-muted-foreground text-lg">We'd love to hear from you. Get in touch with the Gravity Monk team.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-card p-8 rounded-2xl border border-border shadow-sm space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Mail className="text-primary w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground text-lg mb-1">Email</h3>
                                <p className="text-muted-foreground mb-2">Our friendly team is here to help.</p>
                                <a href="mailto:hello@gravitymonk.com" className="text-primary font-medium hover:underline">hello@gravitymonk.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Phone className="text-primary w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground text-lg mb-1">Phone & WhatsApp</h3>
                                <p className="text-muted-foreground mb-2">Mon-Fri from 9am to 6pm.</p>
                                <a href="https://wa.me/919207090505" className="text-primary font-medium hover:underline">+91 92070 90505</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <MapPin className="text-primary w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground text-lg mb-1">Office</h3>
                                <p className="text-muted-foreground">Gravity Monk HQ<br/>Kerala, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                        <h3 className="font-medium text-foreground text-xl mb-6">Send us a message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                                <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-2.5 outline-none focus:border-primary transition-colors" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                                <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-2.5 outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                                <textarea rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-primary text-primary-foreground font-medium rounded-lg px-4 py-3 hover:opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            
            <Footer />
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
    );
}
