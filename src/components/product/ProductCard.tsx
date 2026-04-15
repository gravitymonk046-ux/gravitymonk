import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Share2, Star } from "lucide-react";
import { Product } from "@/lib/products";
import { addToCart, toggleWishlist, isInWishlist, checkoutWhatsApp } from "@/lib/cart";
import { useState } from "react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index: number;
}

import CheckoutDialog from "./CheckoutDialog";

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [wishlisted, setWishlisted] = useState(isInWishlist(product.id));
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`, {
      icon: <ShoppingBag className="w-4 h-4 text-primary" />,
    });
  };

  const handleBuyNow = () => {
    addToCart(product);
    setIsCheckoutOpen(true);
  };

  const handleWishlist = () => {
    const isAdding = !wishlisted;
    toggleWishlist(product.id);
    setWishlisted(isAdding);

    if (isAdding) {
      toast.success(`${product.name} added to wishlist`, {
        icon: <Heart className="w-4 h-4 text-destructive fill-destructive" />,
      });
    } else {
      toast(`${product.name} removed from wishlist`, {
        icon: <Heart className="w-4 h-4" />,
      });
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({ title: product.name, text: product.description, url: window.location.href });
    } catch {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied!");
    }
  };

  return (
    <div className={`card-product group relative ${product.outOfStock ? "opacity-90" : ""}`}>
      <div className="relative overflow-hidden aspect-square">
        <Link href={`/product/${product.id}`} className="block w-full h-full relative">
          <Image
            src={product.image}
            alt={`${product.name} - Handmade Natural ${product.category} Soap by Gravity Monk™`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-transform duration-700 ${!product.outOfStock ? "group-hover:scale-105" : "grayscale"}`}
          />
        </Link>
        {!product.outOfStock && (
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300" />
        )}

        <div className="absolute top-4 right-4 flex flex-col gap-2 pointer-events-auto">
          <button
            onClick={handleWishlist}
            className="w-10 h-10 rounded-full bg-card/90 backdrop-blur flex items-center justify-center transition-all hover:scale-110"
          >
            <Heart size={18} className={wishlisted ? "fill-destructive text-destructive" : "text-foreground"} />
          </button>
          {!product.outOfStock && (
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-card/90 backdrop-blur flex items-center justify-center transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <Share2 size={16} className="text-foreground" />
            </button>
          )}
        </div>

        {product.outOfStock ? (
          <span className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
            Out of Stock
          </span>
        ) : product.originalPrice && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            Save ₹{product.originalPrice - product.price}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-border"} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
        </div>

        <span className="badge-category text-[10px] mb-2 inline-block">{product.category}</span>
        <h3 className="font-display text-xl font-medium text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-1">{product.subtitle}</p>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-3 mb-6">
          <span className="font-display text-xl font-semibold text-foreground">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={!product.outOfStock ? handleAddToCart : undefined}
            disabled={product.outOfStock}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-[10px] sm:text-xs transition-all ${product.outOfStock
              ? "bg-muted text-muted-foreground cursor-not-allowed rounded-full"
              : "btn-primary hover:scale-[1.02] active:scale-[0.98]"
              }`}
          >
            {product.outOfStock ? "Unavailable" : "Add to Cart"}
          </button>
          {!product.outOfStock && (
            <button
              onClick={handleBuyNow}
              className="bg-foreground text-background flex-1 flex items-center justify-center gap-2 py-3 text-[10px] sm:text-xs hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Buy Now
            </button>
          )}
        </div>
      </div>
      <CheckoutDialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen} />
    </div>
  );
};

export default ProductCard;
