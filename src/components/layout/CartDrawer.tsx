import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { getCart, updateQuantity, removeFromCart, getCartTotal, clearCart, checkoutWhatsApp, CartItem } from "@/lib/cart";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

import CheckoutDialog from "@/components/product/CheckoutDialog";

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    const update = () => setCart(getCart());
    update();
    window.addEventListener("cart-updated", update);
    return () => window.removeEventListener("cart-updated", update);
  }, []);

  const total = getCartTotal();

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md z-50 bg-background shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-2xl font-medium text-foreground">Your Cart</h2>
              <button onClick={onClose} className="p-2 hover:bg-secondary rounded-full transition-colors">
                <X size={20} className="text-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="body-large text-center">Your cart is empty</p>
                  <button onClick={onClose} className="btn-primary mt-4">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-display font-medium text-foreground">{item.product.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.product.weight}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                          >
                            <Minus size={14} className="text-foreground" />
                          </button>
                          <span className="text-sm font-medium text-foreground">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                          >
                            <Plus size={14} className="text-foreground" />
                          </button>
                          <button onClick={() => removeFromCart(item.product.id)} className="ml-auto p-1 text-muted-foreground hover:text-destructive transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      <span className="font-display font-medium text-foreground">₹{item.product.price * item.quantity}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-display text-xl font-semibold text-foreground">₹{total}</span>
                </div>
                <button onClick={handleCheckout} className="btn-primary w-full flex items-center justify-center gap-2">
                  <MessageCircle size={18} />
                  Checkout via WhatsApp
                </button>
                <button onClick={() => { clearCart(); }} className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
          <CheckoutDialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen} />
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
