export interface Store {
  id: string
  name: string
  logo: string
  description: string
  category: string
  website: string
  totalCoupons: number
  rating: number
  featured: boolean
  coupons: Coupon[]
}

export interface Coupon {
  id: string
  store: string
  storeLogo: string
  title: string
  description: string
  code: string
  type: "code" | "deal"
  discount: string
  savings: string
  category: string
  featured: boolean
  verified: boolean
  expiryDate: string
  expiryDays: number
  usedCount: number
  storeRating: number
  terms: string[]
}

export interface GiftCard {
  id: string
  name: string
  logo: string
  description: string
  category: string
  discount: string
  cashback: string
  color: string
  featured: boolean
  rating: number
  customAmount: {
    min: number
    max: number
  }
  fixedAmounts: number[]
  terms: string[]
}

export interface Category {
  name: string
  icon: string
  color: string
  items: {
    name: string
    image: string
    deals: number
  }[]
}

export interface TopDeal {
  coupons: Coupon[]
  giftCards: GiftCard[]
}

// Stores Data
export const storesData: Record<string, Store> = {
  amazon: {
    id: "amazon",
    name: "Amazon",
    logo: "/amazon-logo.png",
    description: "World's largest online marketplace with everything you need",
    category: "E-commerce",
    website: "https://amazon.in",
    totalCoupons: 45,
    rating: 4.8,
    featured: true,
    coupons: [
      {
        id: "amazon-1",
        store: "Amazon",
        storeLogo: "/amazon-logo.png",
        title: "Extra 20% Off on Electronics",
        description: "Get additional 20% discount on laptops, smartphones, and accessories",
        code: "TECH20",
        type: "code",
        discount: "20%",
        savings: "₹5,000",
        category: "Electronics",
        featured: true,
        verified: true,
        expiryDate: "2025-01-31",
        expiryDays: 15,
        usedCount: 1250,
        storeRating: 4.8,
        terms: ["Valid on electronics only", "Minimum order ₹10,000", "Not valid with other offers"],
      },
      {
        id: "amazon-2",
        store: "Amazon",
        storeLogo: "/amazon-logo.png",
        title: "Free Delivery on All Orders",
        description: "No minimum order value required for free shipping",
        code: "",
        type: "deal",
        discount: "Free Shipping",
        savings: "₹200",
        category: "Shipping",
        featured: false,
        verified: true,
        expiryDate: "2025-02-28",
        expiryDays: 45,
        usedCount: 3500,
        storeRating: 4.8,
        terms: ["Valid for all products", "No minimum order value"],
      },
    ],
  },
  flipkart: {
    id: "flipkart",
    name: "Flipkart",
    logo: "/flipkart-logo.png",
    description: "India's leading e-commerce platform for all your shopping needs",
    category: "E-commerce",
    website: "https://flipkart.com",
    totalCoupons: 38,
    rating: 4.6,
    featured: true,
    coupons: [
      {
        id: "flipkart-1",
        store: "Flipkart",
        storeLogo: "/flipkart-logo.png",
        title: "Big Billion Days Sale",
        description: "Mega discounts across all categories during the biggest sale",
        code: "BIGBILLION",
        type: "code",
        discount: "Up to 80%",
        savings: "₹15,000",
        category: "Fashion",
        featured: true,
        verified: true,
        expiryDate: "2025-01-25",
        expiryDays: 10,
        usedCount: 2800,
        storeRating: 4.6,
        terms: ["Valid on all categories", "Maximum discount ₹15,000", "Limited time offer"],
      },
    ],
  },
  myntra: {
    id: "myntra",
    name: "Myntra",
    logo: "/myntra-logo.png",
    description: "India's largest fashion destination with latest trends",
    category: "Fashion",
    website: "https://myntra.com",
    totalCoupons: 32,
    rating: 4.5,
    featured: true,
    coupons: [
      {
        id: "myntra-1",
        store: "Myntra",
        storeLogo: "/myntra-logo.png",
        title: "Fashion Sale - Extra 40% Off",
        description: "Additional discount on already discounted fashion items",
        code: "FASHION40",
        type: "code",
        discount: "40%",
        savings: "₹3,000",
        category: "Fashion",
        featured: true,
        verified: true,
        expiryDate: "2025-01-30",
        expiryDays: 14,
        usedCount: 1800,
        storeRating: 4.5,
        terms: ["Valid on fashion items only", "Minimum purchase ₹2,999", "Cannot be combined with other offers"],
      },
    ],
  },
  nykaa: {
    id: "nykaa",
    name: "Nykaa",
    logo: "/nykaa-logo.png",
    description: "Beauty and wellness products from top brands",
    category: "Beauty",
    website: "https://nykaa.com",
    totalCoupons: 28,
    rating: 4.4,
    featured: true,
    coupons: [
      {
        id: "nykaa-1",
        store: "Nykaa",
        storeLogo: "/nykaa-logo.png",
        title: "Beauty Bonanza - 30% Off",
        description: "Flat 30% off on all beauty and skincare products",
        code: "BEAUTY30",
        type: "code",
        discount: "30%",
        savings: "₹1,500",
        category: "Beauty",
        featured: true,
        verified: true,
        expiryDate: "2025-02-15",
        expiryDays: 30,
        usedCount: 950,
        storeRating: 4.4,
        terms: ["Valid on beauty products", "Minimum order ₹1,999", "Free shipping included"],
      },
    ],
  },
  ajio: {
    id: "ajio",
    name: "Ajio",
    logo: "/ajio-logo.png",
    description: "Trendy fashion and lifestyle products",
    category: "Fashion",
    website: "https://ajio.com",
    totalCoupons: 25,
    rating: 4.3,
    featured: false,
    coupons: [
      {
        id: "ajio-1",
        store: "Ajio",
        storeLogo: "/ajio-logo.png",
        title: "Style Sale - 50% Off",
        description: "Huge discounts on trending fashion and accessories",
        code: "STYLE50",
        type: "code",
        discount: "50%",
        savings: "₹2,500",
        category: "Fashion",
        featured: false,
        verified: true,
        expiryDate: "2025-01-28",
        expiryDays: 12,
        usedCount: 720,
        storeRating: 4.3,
        terms: ["Valid on fashion items", "Minimum purchase ₹1,999", "Limited time offer"],
      },
    ],
  },
}

// Gift Cards Data
export const giftCardsData: GiftCard[] = [
  {
    id: "amazon-gift",
    name: "Amazon",
    logo: "/amazon-logo.png",
    description: "Perfect for any occasion - shop everything on Amazon",
    category: "E-commerce",
    discount: "Up to 5% Off",
    cashback: "2% Cashback",
    color: "from-orange-400 to-yellow-500",
    featured: true,
    rating: 4.9,
    customAmount: { min: 100, max: 50000 },
    fixedAmounts: [500, 1000, 2000, 5000, 10000],
    terms: ["Valid for 1 year", "No expiry on balance", "Can be used for all products"],
  },
  {
    id: "flipkart-gift",
    name: "Flipkart",
    logo: "/flipkart-logo.png",
    description: "India's favorite shopping destination gift card",
    category: "E-commerce",
    discount: "Up to 3% Off",
    cashback: "1.5% Cashback",
    color: "from-blue-500 to-indigo-600",
    featured: true,
    rating: 4.7,
    customAmount: { min: 100, max: 25000 },
    fixedAmounts: [500, 1000, 2000, 5000],
    terms: ["Valid for 1 year", "Applicable on all products", "Cannot be transferred"],
  },
  {
    id: "myntra-gift",
    name: "Myntra",
    logo: "/myntra-logo.png",
    description: "Fashion lover's paradise - latest trends and styles",
    category: "Fashion",
    discount: "Up to 4% Off",
    cashback: "2.5% Cashback",
    color: "from-pink-500 to-rose-600",
    featured: true,
    rating: 4.6,
    customAmount: { min: 500, max: 20000 },
    fixedAmounts: [1000, 2000, 3000, 5000],
    terms: ["Valid for 1 year", "Fashion and lifestyle only", "Free shipping on gift card orders"],
  },
  {
    id: "nykaa-gift",
    name: "Nykaa",
    logo: "/nykaa-logo.png",
    description: "Beauty and wellness products for the perfect you",
    category: "Beauty",
    discount: "Up to 6% Off",
    cashback: "3% Cashback",
    color: "from-purple-500 to-pink-600",
    featured: true,
    rating: 4.5,
    customAmount: { min: 500, max: 15000 },
    fixedAmounts: [1000, 2000, 3000, 5000],
    terms: ["Valid for 1 year", "Beauty products only", "Includes premium brands"],
  },
  {
    id: "paytm-gift",
    name: "Paytm",
    logo: "/paytm-payment-logo.png",
    description: "Digital wallet for payments, recharges, and shopping",
    category: "Digital Wallet",
    discount: "Up to 2% Off",
    cashback: "1% Cashback",
    color: "from-blue-600 to-cyan-500",
    featured: false,
    rating: 4.4,
    customAmount: { min: 100, max: 10000 },
    fixedAmounts: [500, 1000, 2000, 5000],
    terms: ["Instant delivery", "Valid for all Paytm services", "No expiry"],
  },
]

// Categories Data
export const categoriesData: Record<string, Category> = {
  electronics: {
    name: "Electronics",
    icon: "📱",
    color: "from-blue-500 to-cyan-600",
    items: [
      { name: "Smartphones", image: "/electronics/smartphones.png", deals: 45 },
      { name: "Laptops", image: "/electronics/laptops.png", deals: 32 },
      { name: "Headphones", image: "/electronics/headphones.png", deals: 28 },
      { name: "Smartwatches", image: "/electronics/smartwatches.png", deals: 22 },
      { name: "Tablets", image: "/electronics/tablets.png", deals: 18 },
      { name: "Gaming", image: "/electronics/gaming.png", deals: 35 },
    ],
  },
  fashion: {
    name: "Fashion",
    icon: "👗",
    color: "from-pink-500 to-rose-600",
    items: [
      { name: "Women's Clothing", image: "/fashion/womens-clothing.png", deals: 65 },
      { name: "Men's Clothing", image: "/fashion/mens-clothing.png", deals: 48 },
      { name: "Footwear", image: "/fashion/footwear.png", deals: 42 },
      { name: "Accessories", image: "/fashion/accessories.png", deals: 38 },
      { name: "Ethnic Wear", image: "/fashion/ethnic-wear.png", deals: 35 },
      { name: "Kids Fashion", image: "/fashion/kids-fashion.png", deals: 28 },
    ],
  },
  beauty: {
    name: "Beauty",
    icon: "💄",
    color: "from-purple-500 to-pink-600",
    items: [
      { name: "Skincare", image: "/beauty/skincare.png", deals: 38 },
      { name: "Makeup", image: "/beauty/makeup.png", deals: 42 },
      { name: "Haircare", image: "/beauty/haircare.png", deals: 25 },
      { name: "Fragrances", image: "/beauty/fragrances.png", deals: 22 },
      { name: "Personal Care", image: "/beauty/personal-care.png", deals: 35 },
      { name: "Supplements", image: "/beauty/supplements.png", deals: 18 },
    ],
  },
  home: {
    name: "Home & Living",
    icon: "🏠",
    color: "from-green-500 to-teal-600",
    items: [
      { name: "Furniture", image: "/home/furniture.png", deals: 28 },
      { name: "Home Decor", image: "/home/home-decor.png", deals: 35 },
      { name: "Kitchen & Dining", image: "/home/kitchen-dining.png", deals: 32 },
      { name: "Bedding & Bath", image: "/home/bedding-bath.png", deals: 25 },
      { name: "Storage & Organization", image: "/home/storage-organization.png", deals: 22 },
      { name: "Garden & Outdoor", image: "/home/garden-outdoor.png", deals: 18 },
    ],
  },
  food: {
    name: "Food & Dining",
    icon: "🍕",
    color: "from-orange-500 to-red-600",
    items: [
      { name: "Pizza & Fast Food", image: "/food/pizza-fastfood.png", deals: 45 },
      { name: "Indian Cuisine", image: "/food/indian-cuisine.png", deals: 38 },
      { name: "Chinese & Asian", image: "/food/chinese-asian.png", deals: 32 },
      { name: "Healthy Food", image: "/food/healthy-food.png", deals: 28 },
      { name: "Desserts & Sweets", image: "/food/desserts-sweets.png", deals: 25 },
      { name: "Beverages", image: "/food/beverages.png", deals: 22 },
    ],
  },
  travel: {
    name: "Travel",
    icon: "✈️",
    color: "from-indigo-500 to-purple-600",
    items: [
      { name: "Flights", image: "/travel/flights.png", deals: 35 },
      { name: "Hotels", image: "/travel/hotels.png", deals: 42 },
      { name: "Holiday Packages", image: "/travel/holiday-packages.png", deals: 28 },
      { name: "Bus Bookings", image: "/travel/bus-bookings.png", deals: 25 },
      { name: "Train Bookings", image: "/travel/train-bookings.png", deals: 22 },
      { name: "Car Rentals", image: "/travel/car-rentals.png", deals: 18 },
    ],
  },
}

// Helper Functions
export function getAllCoupons(): Coupon[] {
  const allCoupons: Coupon[] = []
  Object.values(storesData).forEach((store) => {
    allCoupons.push(...store.coupons)
  })
  return allCoupons
}

export function getFeaturedGiftCards(): GiftCard[] {
  return giftCardsData.filter((card) => card.featured)
}

export function getTopDeals(): TopDeal {
  const allCoupons = getAllCoupons()
  const featuredCoupons = allCoupons.filter((coupon) => coupon.featured).slice(0, 4)
  const featuredGiftCards = getFeaturedGiftCards().slice(0, 4)

  return {
    coupons: featuredCoupons,
    giftCards: featuredGiftCards,
  }
}

export function getCouponsByCategory(category: string): Coupon[] {
  const allCoupons = getAllCoupons()
  return allCoupons.filter((coupon) => coupon.category.toLowerCase() === category.toLowerCase())
}

export function getStoresByCategory(category: string): Store[] {
  return Object.values(storesData).filter((store) => store.category.toLowerCase() === category.toLowerCase())
}

export function searchStores(query: string): Store[] {
  const searchTerm = query.toLowerCase()
  return Object.values(storesData).filter(
    (store) =>
      store.name.toLowerCase().includes(searchTerm) ||
      store.description.toLowerCase().includes(searchTerm) ||
      store.category.toLowerCase().includes(searchTerm),
  )
}

export function searchCoupons(query: string): Coupon[] {
  const searchTerm = query.toLowerCase()
  const allCoupons = getAllCoupons()
  return allCoupons.filter(
    (coupon) =>
      coupon.title.toLowerCase().includes(searchTerm) ||
      coupon.description.toLowerCase().includes(searchTerm) ||
      coupon.store.toLowerCase().includes(searchTerm) ||
      coupon.category.toLowerCase().includes(searchTerm),
  )
}

// Top Deals Data for Homepage
export const topDealsData = [
  {
    id: "electronics-mega",
    title: "Electronics Mega Sale",
    subtitle: "Limited Time",
    description: "Up to 70% off on smartphones, laptops, headphones & more",
    bgColor: "from-blue-600 to-purple-700",
    image: "/electronics/smartphones.png",
    link: "/category/electronics",
    cta: "Shop Electronics",
    products: [
      { name: "iPhone", image: "/electronics/smartphones.png", discount: "15% Off" },
      { name: "MacBook", image: "/electronics/laptops.png", discount: "20% Off" },
      { name: "AirPods", image: "/electronics/headphones.png", discount: "25% Off" },
      { name: "iPad", image: "/electronics/tablets.png", discount: "18% Off" },
    ],
  },
  {
    id: "fashion-fest",
    title: "Fashion Festival",
    subtitle: "Trending Now",
    description: "Latest trends in clothing, footwear & accessories",
    bgColor: "from-pink-500 to-rose-600",
    image: "/fashion/womens-clothing.png",
    link: "/category/fashion",
    cta: "Shop Fashion",
    products: [
      { name: "Dresses", image: "/fashion/womens-clothing.png", discount: "40% Off" },
      { name: "Shoes", image: "/fashion/footwear.png", discount: "35% Off" },
      { name: "Bags", image: "/fashion/accessories.png", discount: "30% Off" },
      { name: "Watches", image: "/fashion/accessories.png", discount: "45% Off" },
    ],
  },
  {
    id: "beauty-bonanza",
    title: "Beauty Bonanza",
    subtitle: "Glow Up",
    description: "Premium skincare, makeup & wellness products",
    bgColor: "from-purple-500 to-pink-600",
    image: "/beauty/makeup.png",
    link: "/category/beauty",
    cta: "Shop Beauty",
    products: [
      { name: "Skincare", image: "/beauty/skincare.png", discount: "30% Off" },
      { name: "Makeup", image: "/beauty/makeup.png", discount: "25% Off" },
      { name: "Haircare", image: "/beauty/haircare.png", discount: "35% Off" },
      { name: "Fragrance", image: "/beauty/fragrances.png", discount: "20% Off" },
    ],
  },
  {
    id: "home-makeover",
    title: "Home Makeover",
    subtitle: "Transform",
    description: "Furniture, decor & essentials for your dream home",
    bgColor: "from-green-500 to-teal-600",
    image: "/home/furniture.png",
    link: "/category/home",
    cta: "Shop Home",
    products: [
      { name: "Furniture", image: "/home/furniture.png", discount: "50% Off" },
      { name: "Decor", image: "/home/home-decor.png", discount: "40% Off" },
      { name: "Kitchen", image: "/home/kitchen-dining.png", discount: "35% Off" },
      { name: "Bedding", image: "/home/bedding-bath.png", discount: "45% Off" },
    ],
  },
]
