import { Product } from "./products";

export interface CartItem {
  product: Product;
  quantity: number;
}

const CART_KEY = "gravity-monk-cart";
const WISHLIST_KEY = "gravity-monk-wishlist";
const RECENT_KEY = "gravity-monk-recent";

export const getCart = (): CartItem[] => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
};

export const addToCart = (product: Product): CartItem[] => {
  const cart = getCart();
  const existing = cart.find((item) => item.product.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
  return cart;
};

export const removeFromCart = (productId: string): CartItem[] => {
  const cart = getCart().filter((item) => item.product.id !== productId);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
  return cart;
};

export const updateQuantity = (productId: string, quantity: number): CartItem[] => {
  const cart = getCart();
  const item = cart.find((i) => i.product.id === productId);
  if (item) {
    if (quantity <= 0) return removeFromCart(productId);
    item.quantity = quantity;
  }
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
  return cart;
};

export const getCartTotal = (): number => {
  return getCart().reduce((sum, item) => sum + item.product.price * item.quantity, 0);
};

export const getCartCount = (): number => {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event("cart-updated"));
};

// Wishlist
export const getWishlist = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
  } catch {
    return [];
  }
};

export const toggleWishlist = (productId: string): string[] => {
  let wishlist = getWishlist();
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter((id) => id !== productId);
  } else {
    wishlist.push(productId);
  }
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  window.dispatchEvent(new Event("wishlist-updated"));
  return wishlist;
};

export const isInWishlist = (productId: string): boolean => {
  return getWishlist().includes(productId);
};

// Recently Viewed
export const getRecentlyViewed = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
  } catch {
    return [];
  }
};

export const addToRecentlyViewed = (productId: string) => {
  let recent = getRecentlyViewed().filter((id) => id !== productId);
  recent.unshift(productId);
  recent = recent.slice(0, 6);
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
};

export interface ShippingDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  pinCode: string;
}

// WhatsApp Checkout
export const checkoutWhatsApp = (details: ShippingDetails, phoneNumber: string = "919207090505") => {
  const cart = getCart();
  const total = getCartTotal();
  const items = cart.map((item) => `• ${item.product.name} × ${item.quantity} — ₹${item.product.price * item.quantity}`).join("\n");

  const message = `🛒 *New Order - Gravity Monk™*

👤 *Customer Details:*
Name: ${details.name}
Phone: ${details.phone}
Address: ${details.address}, ${details.city} - ${details.pinCode}

🛍️ *Order Items:*
${items}

*Total: ₹${total}*

Please confirm my order.`;

  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
};
