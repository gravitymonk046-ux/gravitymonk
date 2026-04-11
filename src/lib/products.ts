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
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "coffee",
    name: "Coffee",
    subtitle: "Handmade Face & Body Soap",
    price: 299,
    originalPrice: 399,
    image: "/images/Coffee - Front Side.jpg",
    images: ["/images/Coffee - Front Side.jpg", "/images/Coffee - Back Side.jpg", "/images/Coffee - Side Front.jpg"],
    category: "Exfoliating",
    description: "Awaken your skin with our coffee-infused soap. Natural exfoliation meets deep cleansing for a radiant, energized glow.",
    weight: "100g",
    ingredients: ["Coffee Extract", "Coconut Oil", "Shea Butter", "Olive Oil"],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "rose",
    name: "Rose",
    subtitle: "Handmade Face & Body Soap",
    price: 349,
    originalPrice: 449,
    image: "/images/Rose - Front Side.jpg",
    images: ["/images/Rose - Front Side.jpg", "/images/Rose - Back Front.jpg", "/images/Rose - Side Front.jpg"],
    category: "Moisturizing",
    description: "Indulge in the delicate fragrance of rose petals. This luxurious soap hydrates and softens while leaving a subtle floral scent.",
    weight: "100g",
    ingredients: ["Rose Extract", "Glycerin", "Coconut Oil", "Vitamin E"],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "shea-butter",
    name: "Shea Butter",
    subtitle: "Handmade Face & Body Soap",
    price: 329,
    originalPrice: 429,
    image: "/images/Shea Butter - Front Side.jpg",
    images: ["/images/Shea Butter - Front Side.jpg", "/images/Shea Butter - Back Side.jpg", "/images/Shea Butter - Side Front.jpg"],
    category: "Moisturizing",
    description: "Deep nourishment from pure shea butter. Perfect for dry skin, this soap locks in moisture for all-day softness.",
    weight: "100g",
    ingredients: ["Shea Butter", "Cocoa Butter", "Almond Oil", "Honey"],
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "the-magic",
    name: "The Magic",
    subtitle: "Handmade Face & Body Soap",
    price: 399,
    image: "/images/The Magic - Front Side.jpg",
    images: ["/images/The Magic - Front Side.jpg", "/images/The Magic - Back Side.jpg", "/images/The Magic - Side Front.jpg"],
    category: "Premium",
    description: "Our signature blend of rare botanicals and essential oils. A mystical bathing experience that transforms your daily ritual.",
    weight: "100g",
    ingredients: ["Essential Oil Blend", "Activated Charcoal", "Tea Tree", "Lavender"],
    rating: 4.9,
    reviews: 203,
  },
  {
    id: "turmeric",
    name: "Turmeric",
    subtitle: "Handmade Face & Body Soap",
    price: 279,
    originalPrice: 379,
    image: "/images/Turmeric - Side Front.jpg",
    images: ["/images/Turmeric - Side Front.jpg", "/images/Turmeric - Back Side.jpg"],
    category: "Brightening",
    description: "Harness the ancient power of turmeric for naturally glowing skin. Anti-inflammatory and brightening properties in every wash.",
    weight: "100g",
    ingredients: ["Turmeric Extract", "Sandalwood", "Coconut Oil", "Neem"],
    rating: 4.6,
    reviews: 178,
  },
  {
    id: "charcoal",
    name: "Charcoal",
    subtitle: "Handmade Face & Body Soap",
    price: 299,
    originalPrice: 399,
    image: "/images/Charcoal - Front Side.jpg",
    images: ["/images/Charcoal - Front Side.jpg", "/images/Charcoal - Back Side.jpg", "/images/Charcoal - Side Front.jpg"],
    category: "Deep Cleansing",
    description: "Activated charcoal draws out impurities for a deep, detoxifying cleanse. Perfect for oily and acne-prone skin.",
    weight: "100g",
    ingredients: ["Activated Charcoal", "Tea Tree Oil", "Bentonite Clay", "Coconut Oil"],
    rating: 4.8,
    reviews: 145,
  },
];

export const categories = ["All", "Exfoliating", "Moisturizing", "Premium", "Brightening", "Deep Cleansing"];
