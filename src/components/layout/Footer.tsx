import { Instagram, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer id="contact" className="bg-foreground py-16 overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-12"
      >
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img src="/images/logo.png" alt="Gravity Monk" className="h-12 w-auto rounded-md invert opacity-90" />
            <span className="font-display text-xl text-background font-bold tracking-widest uppercase">Gravity Monk™</span>
          </div>
          <p className="text-sm text-background/60 leading-relaxed">
            Handmade face & body soaps crafted with love and nature's finest ingredients. Estd. 2026.
          </p>
        </div>
        <div>
          <h4 className="font-display text-background text-lg mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {["Shop", "About", "Ingredients", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-background/60 hover:text-background transition-colors">
                {l}
              </a>
            ))}
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
