"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus, Share2 } from "lucide-react";
import { Product } from "@/lib/products";
import { addToCart } from "@/lib/cart";
import { toast } from "sonner";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ProductCard from "./ProductCard";
import CheckoutDialog from "./CheckoutDialog";

export default function ProductDetail({ product, similarProducts }: { product: Product; similarProducts: Product[] }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const images = product.images?.length ? product.images : [product.image];

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        toast.success(`${quantity} ${product.name} added to cart`);
    };

    const handleBuyNow = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        setIsCheckoutOpen(true);
    };

    const handleShare = async () => {
        const shareData = {
            title: product.name,
            text: `Experience the Ritual of Purity with ${product.name}.`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                toast.success("Link copied to clipboard");
            }
        } catch (err) {
            console.error("Error sharing:", err);
        }
    };

    return (
        <div className="container mx-auto px-6 py-12 text-foreground font-body bg-transparent">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pt-10">

                {/* Left Side: Images */}
                <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4 h-auto md:h-[600px]">
                    {/* Thumbnails */}
                    <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar w-full md:w-24 shrink-0">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImageIndex(idx)}
                                className={`w-20 h-24 shrink-0 flex items-center justify-center relative overflow-hidden transition-all ${idx === activeImageIndex ? 'border-2 border-foreground opacity-100' : 'border border-transparent opacity-60 hover:opacity-100'}`}
                            >
                                <div className="absolute inset-0 bg-[#e5decd]" />
                                <img src={img} alt={`${product.name} thumbnail ${idx}`} className="object-cover w-full h-full mix-blend-multiply relative z-10" />
                            </button>
                        ))}
                    </div>

                    {/* Main Image View */}
                    <div className="relative w-full aspect-square md:aspect-auto md:h-full bg-[#f1efe9] flex items-center justify-center overflow-hidden flex-1 group">
                        <div className="absolute inset-0 bg-[#ebe5d6]" />
                        <img
                            src={images[activeImageIndex]}
                            alt={product.name}
                            className="w-full h-full object-cover mix-blend-multiply transition-opacity duration-300 relative z-10"
                        />

                        {/* Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={() => setActiveImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                >
                                    <ChevronLeft size={36} strokeWidth={1} />
                                </button>
                                <button
                                    onClick={() => setActiveImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                >
                                    <ChevronRight size={36} strokeWidth={1} />
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-display font-medium tracking-wide uppercase mb-4 text-foreground">
                        {product.name} · {product.subtitle.toUpperCase()}
                    </h1>
                    <p className="text-lg mb-8 font-medium">₹{product.price}</p>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-semibold">
                        {product.description}
                    </p>

                    <p className="text-xs text-muted-foreground mb-8 uppercase font-semibold tracking-wider">
                        {product.weight}
                    </p>

                    <div className="mb-8">
                        <label className="block text-sm mb-3 font-medium">Quantity:</label>
                        <div className="flex items-center border border-border w-fit">
                            <button
                                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                className="px-4 py-3 hover:bg-secondary transition-colors border-r border-border"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="px-8 py-3 font-medium min-w-[60px] text-center">
                                {quantity}
                            </span>
                            <button
                                onClick={() => setQuantity(prev => prev + 1)}
                                className="px-4 py-3 hover:bg-secondary transition-colors border-l border-border"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-2 lg:w-[90%]">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 border border-foreground bg-transparent hover:bg-secondary text-foreground transition-colors duration-300 py-4 uppercase text-sm tracking-widest font-medium"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={handleBuyNow}
                            className="flex-1 border border-foreground bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 py-4 uppercase text-sm tracking-widest font-medium"
                        >
                            Buy Now
                        </button>
                    </div>

                    <button
                        onClick={handleShare}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity mb-12"
                    >
                        <Share2 size={16} />
                        Share this Ritual
                    </button>

                    {/* Accordions */}
                    <Accordion type="multiple" className="w-full sm:w-[80%] lg:w-[90%] border-t border-border">
                        <AccordionItem value="how-to-use" className="border-border">
                            <AccordionTrigger className="uppercase text-sm tracking-widest font-semibold pb-4 pt-5 hover:no-underline font-body">
                                How to Use
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                Lather soap with water and gently massage onto damp skin. Rinse thoroughly. Avoid contact with eyes. Perfect for everyday body and facial use.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="ingredients" className="border-border">
                            <AccordionTrigger className="uppercase text-sm tracking-widest font-semibold pb-4 pt-5 hover:no-underline font-body">
                                Ingredients
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                <ul className="list-disc pl-4 space-y-1">
                                    {product.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="shipping" className="border-border">
                            <AccordionTrigger className="uppercase text-sm tracking-widest font-semibold pb-4 pt-5 hover:no-underline font-body">
                                Shipping & Returns
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                Free shipping on all orders over ₹1000. Orders are processed within 1-2 business days.
                                Returns are accepted within 30 days of purchase for unused products in original packaging.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            {/* You Might Also Like Section */}
            {similarProducts.length > 0 && (
                <div className="mt-32 border-t border-border pt-16">
                    <h2 className="text-2xl font-display uppercase tracking-widest mb-10 text-foreground">You Might Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {similarProducts.map((p, idx) => (
                            <ProductCard key={p.id} product={p} index={idx} />
                        ))}
                    </div>
                </div>
            )}
            <CheckoutDialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen} />
        </div>
    );
}
