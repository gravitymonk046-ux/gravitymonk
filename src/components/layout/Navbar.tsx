import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Heart, Menu, X } from "lucide-react";
import { getCartCount, getWishlist } from "@/lib/cart";

interface NavbarProps {
  onCartOpen: () => void;
}

const Navbar = ({ onCartOpen }: NavbarProps) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      setCartCount(getCartCount());
      setWishlistCount(getWishlist().length);
    };
    update();
    window.addEventListener("cart-updated", update);
    window.addEventListener("wishlist-updated", update);
    return () => {
      window.removeEventListener("cart-updated", update);
      window.removeEventListener("wishlist-updated", update);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Shop", "About", "Ingredients", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-16 min-h-[64px] max-h-[64px] overflow-hidden ${scrolled ? "glass-panel shadow-sm border-b" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 h-full grid grid-cols-3 items-center">
        {/* Left Section: Nav Links & Mobile Wishlist */}
        <div className="flex items-center h-full">
          <Link href="/wishlist" className="sm:hidden p-2 -ml-2 text-[#0A3A2A] relative">
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileOpen(true)} className="hidden sm:flex md:hidden p-2 text-[#0A3A2A]">
            <Menu size={22} />
          </button>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.slice(0, 2).map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-black text-[12px] uppercase tracking-widest font-bold hover:opacity-70 transition-opacity whitespace-nowrap">
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Center Section: Branding (Text -> Logo) */}
        <div className="flex justify-center items-center h-full">
          <Link href="/" className="flex flex-col items-center justify-center">
            <div className="relative flex justify-center items-center h-10 min-w-[140px] sm:min-w-[200px]">
              <motion.span
                animate={{
                  opacity: scrolled ? 0 : 1,
                  scale: scrolled ? 0.95 : 1
                }}
                transition={{ duration: 0.3 }}
                className="font-display text-lg sm:text-2xl font-bold tracking-[0.1em] sm:tracking-[0.15em] text-black uppercase whitespace-nowrap absolute"
              >
                Gravity Monk
              </motion.span>
              <motion.img
                src="/images/logo.png"
                alt="Gravity Monk"
                animate={{
                  opacity: scrolled ? 1 : 0,
                  scale: scrolled ? 1 : 0.95
                }}
                transition={{ duration: 0.3 }}
                className="h-10 w-auto rounded-md absolute"
              />
            </div>
          </Link>
        </div>

        {/* Right Section: Icons & Extra Links */}
        <div className="flex items-center justify-end h-full">
          <nav className="hidden lg:flex items-center gap-6 mr-8">
            {navLinks.slice(2).map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-black text-[12px] uppercase tracking-widest font-bold hover:opacity-70 transition-opacity whitespace-nowrap">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">


            <Link href="/wishlist" className="hidden sm:block p-2 relative text-[#0A3A2A] hover:bg-secondary/50 rounded-full transition-colors">
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button onClick={onCartOpen} className="p-2 relative text-[#0A3A2A] hover:bg-secondary/50 rounded-full transition-colors">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
            <button onClick={() => setMobileOpen(true)} className="sm:hidden p-2 text-[#0A3A2A]">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-50 bg-background"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} className="text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 mt-20">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-display text-3xl text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header >
  );
};

export default Navbar;
