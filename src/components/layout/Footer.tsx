import { Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => (
  <footer id="contact" className="bg-foreground py-16 overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-4 gap-12"
      >
        <div className="md:col-span-1">
          <div className="flex items-center gap-4 mb-6">
            <Image src="/images/logo.png" alt="Gravity Monk" width={48} height={48} className="rounded-md invert opacity-90" />
            <span className="font-display text-xl text-background font-bold tracking-widest uppercase">Gravity Monk™</span>
          </div>
          <p className="text-sm text-background/60 leading-relaxed">
            Handmade face & body soaps crafted with love and nature's finest ingredients. Estd. 2026.
          </p>
        </div>
        <div>
          <h4 className="font-display text-background text-lg mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            <a href="/#shop" className="text-sm text-background/60 hover:text-background transition-colors">Shop</a>
            <a href="/about" className="text-sm text-background/60 hover:text-background transition-colors">About</a>
            <a href="/#ingredients" className="text-sm text-background/60 hover:text-background transition-colors">Ingredients</a>
            <a href="/contact" className="text-sm text-background/60 hover:text-background transition-colors">Contact</a>
          </nav>
        </div>
        <div>
          <h4 className="font-display text-background text-lg mb-4">Legal & Policies</h4>
          <nav className="flex flex-col gap-2">
            <a href="/privacy" className="text-sm text-background/60 hover:text-background transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-sm text-background/60 hover:text-background transition-colors">Terms of Service</a>
            <a href="/refund-policy" className="text-sm text-background/60 hover:text-background transition-colors">Refund Policy</a>
            <a href="/shipping-policy" className="text-sm text-background/60 hover:text-background transition-colors">Shipping Policy</a>
          </nav>
        </div>
        <div>
          <h4 className="font-display text-background text-lg mb-4">Get in Touch</h4>
          <div className="space-y-3">
            <a href="mailto:hello@gravitymonk.com" className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors">
              <Mail size={16} /> hello@gravitymonk.com
            </a>
            <a href="https://wa.me/919207090505" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors">
              <Phone size={16} /> +91 92070 90505
            </a>
            <a href="https://www.instagram.com/gravitymonkofficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors">
              <Instagram size={16} /> @gravitymonkofficial
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="border-t border-background/10 mt-12 pt-8 text-center"
      >
        <p className="text-xs text-background/40">© 2026 Gravity Monk™. All rights reserved.</p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
