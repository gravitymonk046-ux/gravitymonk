export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  weight: string;
  ingredients: string[];
  benefits: string[];
  rating: number;
  reviews: number;
  outOfStock?: boolean;
}

export const products: Product[] = [
  {
    id: "charcoal",
    name: "Charcoal",
    subtitle: "Handmade Face & Body Soap",
    price: 189,
    originalPrice: 289,
    image: "/images/Charcoal - Front Side.jpg",
    images: ["/images/Charcoal - Front Side.jpg", "/images/Charcoal - Back Side.jpg", "/images/Charcoal - Side Front.jpg"],
    category: "Deep Cleansing",
    description: "Deep cleansing charcoal soap that removes impurities, toxins, and excess oil. Gently exfoliates and leaves skin refreshed, smooth, and clear. Suitable for all skin types.",
    weight: "100g",
    ingredients: ["Activated charcoal powder", "Coconut oil", "Olive oil", "Shea butter extract", "Castor oil", "Glycerin", "Sunflower oil", "Jojoba oil", "Essential oils"],
    benefits: ["Deep detox & cleansing", "Removes excess oil & dirt", "Helps reduce body tan", "Smooth & clearer skin"],
    rating: 4.8,
    reviews: 145,
  },
  {
    id: "turmeric",
    name: "Turmeric",
    subtitle: "Handmade Face & Body Soap",
    price: 219,
    originalPrice: 319,
    image: "/images/Turmeric - Front Side.jpg",
    images: ["/images/Turmeric - Front Side.jpg", "/images/Turmeric - Side Front.jpg"],
    category: "Brightening",
    description: "Turmeric-based soap for brightening and cleansing. Helps remove impurities while improving skin tone and glow.",
    weight: "100g",
    ingredients: ["Kojic acid", "Turmeric extract", "Shea butter oil", "Almond oil", "Vitamin E", "Glycerin", "Sunflower oil", "Essential oils", "Sulphate-free soap base"],
    benefits: ["Skin brightening", "Reduces tan", "Gentle exfoliation", "Natural glow boost"],
    rating: 4.7,
    reviews: 178,
  },
  {
    id: "coffee",
    name: "Coffee",
    subtitle: "Handmade Face & Body Soap",
    price: 189,
    originalPrice: 289,
    image: "/images/Coffee - Front Side.jpg",
    images: ["/images/Coffee - Front Side.jpg", "/images/Coffee - Back Side.jpg", "/images/Coffee - Side Front.jpg"],
    category: "Exfoliating",
    description: "Coffee-infused soap that exfoliates dead skin, boosts circulation, and energizes skin with natural aroma.",
    weight: "100g",
    ingredients: ["Organic coffee grounds", "Coconut oil", "Olive oil", "Shea butter", "Castor oil", "Glycerin", "Jojoba oil", "Vitamin E", "Fragrance"],
    benefits: ["Removes dead skin", "Reduces puffiness", "Improves blood circulation", "Helps reduce dark spots & cellulite"],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "rose",
    name: "Rose",
    subtitle: "Handmade Face & Body Soap",
    price: 189,
    originalPrice: 289,
    image: "/images/Rose - Front Side.jpg",
    images: ["/images/Rose - Front Side.jpg", "/images/Rose - Back Front.jpg", "/images/Rose - Side Front.jpg"],
    category: "Moisturizing",
    description: "Hydrating and soothing soap with floral aroma. Rich in antioxidants for healthy glowing skin.",
    weight: "100g",
    ingredients: ["Rose oil", "Rose petal extract", "Aloe vera", "Coconut oil", "Shea butter", "Jojoba oil", "Vitamin E", "Glycerin"],
    benefits: ["Deep hydration", "Soothes skin", "Anti-aging properties", "Natural glow enhancer"],
    rating: 4.9,
    reviews: 89,
    outOfStock: true,
  },
  {
    id: "shea-butter",
    name: "Shea Butter",
    subtitle: "Handmade Soap",
    price: 209,
    originalPrice: 309,
    image: "/images/Shea Butter - Front Side.jpg",
    images: ["/images/Shea Butter - Front Side.jpg", "/images/Shea Butter - Back Side.jpg", "/images/Shea Butter - Side Front.jpg"],
    category: "Moisturizing",
    description: "Highly moisturizing soap for dry and sensitive skin. Helps improve elasticity and reduce irritation.",
    weight: "100g",
    ingredients: ["Shea butter", "Coconut oil", "Almond oil", "Sunflower oil", "Vitamin E", "Glycerin", "Sulphate-free base"],
    benefits: ["Deep hydration", "Reduces dryness & irritation", "Anti-inflammatory", "Improves skin elasticity"],
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "the-magic",
    name: "The Magic",
    subtitle: "Handmade Face & Body Soap",
    price: 228,
    originalPrice: 328,
    image: "/images/The Magic - Front Side.jpg",
    images: ["/images/The Magic - Front Side.jpg", "/images/The Magic - Back Side.jpg", "/images/The Magic - Side Front.jpg"],
    category: "Premium",
    description: "Premium moisturizing soap with nourishing ingredients for soft, glowing, and healthy skin.",
    weight: "100g",
    ingredients: ["Shea butter", "Coconut oil", "Almond oil", "Sunflower oil", "Vitamin E", "Glycerin"],
    benefits: ["Deep nourishment", "Smooth skin texture", "Improves skin softness", "Enhances glow"],
    rating: 4.9,
    reviews: 203,
  },
];

export const categories = ["All", "Exfoliating", "Moisturizing", "Premium", "Brightening", "Deep Cleansing"];
