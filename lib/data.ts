export interface Store {
  id: string
  name: string
  logo: string
  category: string
  description: string
  maxCashback: number
  coupons: Coupon[]
  featured: boolean
  rating: number
  totalOffers: number
}

export interface Coupon {
  id: string
  title: string
  description: string
  code: string
  discount: string
  validTill: string
  terms: string[]
  category: string
  featured: boolean
  used: number
}

export interface GiftCard {
  id: string
  brand: string
  logo: string
  description: string
  denominations: number[]
  cashback: number
  validity: string
  terms: string[]
  featured: boolean
  category: string
}

export interface Category {
  name: string
  image: string
  itemCount: number
  subcategories: string[]
}

export const stores: Store[] = [
  {
    id: "1",
    name: "Amazon",
    logo: "/amazon-logo.png",
    category: "E-commerce",
    description: "World's largest online marketplace with everything you need",
    maxCashback: 15,
    featured: true,
    rating: 4.8,
    totalOffers: 45,
    coupons: [
      {
        id: "amz1",
        title: "Extra 20% off on Electronics",
        description: "Get additional 20% discount on all electronics items",
        code: "ELECTRONICS20",
        discount: "20% OFF",
        validTill: "Dec 31, 2024",
        terms: ["Valid on electronics only", "Minimum order ₹5000", "One time use per user"],
        category: "Electronics",
        featured: true,
        used: 1250,
      },
      {
        id: "amz2",
        title: "Fashion Sale - Up to 70% Off",
        description: "Huge discounts on fashion and lifestyle products",
        code: "FASHION70",
        discount: "70% OFF",
        validTill: "Dec 25, 2024",
        terms: ["Valid on fashion items", "No minimum order", "Limited time offer"],
        category: "Fashion",
        featured: true,
        used: 890,
      },
    ],
  },
  {
    id: "2",
    name: "Flipkart",
    logo: "/flipkart-logo.png",
    category: "E-commerce",
    description: "India's leading e-commerce platform for all your needs",
    maxCashback: 12,
    featured: true,
    rating: 4.6,
    totalOffers: 38,
    coupons: [
      {
        id: "fk1",
        title: "Big Billion Days - Extra 25% Off",
        description: "Special discount during Big Billion Days sale",
        code: "BBD25",
        discount: "25% OFF",
        validTill: "Dec 30, 2024",
        terms: ["Valid on all categories", "Minimum order ₹2000", "Maximum discount ₹5000"],
        category: "General",
        featured: true,
        used: 2100,
      },
    ],
  },
  {
    id: "3",
    name: "Myntra",
    logo: "/myntra-logo.png",
    category: "Fashion",
    description: "India's largest fashion destination",
    maxCashback: 18,
    featured: true,
    rating: 4.5,
    totalOffers: 52,
    coupons: [
      {
        id: "myn1",
        title: "End of Season Sale - 80% Off",
        description: "Massive discounts on end of season fashion items",
        code: "EOSS80",
        discount: "80% OFF",
        validTill: "Dec 28, 2024",
        terms: ["Valid on selected items", "No minimum order", "While stocks last"],
        category: "Fashion",
        featured: true,
        used: 1560,
      },
    ],
  },
  {
    id: "4",
    name: "Nykaa",
    logo: "/nykaa-logo.png",
    category: "Beauty",
    description: "Your beauty shopping destination",
    maxCashback: 20,
    featured: true,
    rating: 4.7,
    totalOffers: 29,
    coupons: [
      {
        id: "nyk1",
        title: "Beauty Bonanza - 50% Off",
        description: "Half price on premium beauty products",
        code: "BEAUTY50",
        discount: "50% OFF",
        validTill: "Dec 26, 2024",
        terms: ["Valid on beauty products", "Minimum order ₹1500", "Free shipping included"],
        category: "Beauty",
        featured: true,
        used: 780,
      },
    ],
  },
  {
    id: "5",
    name: "Ajio",
    logo: "/ajio-logo.png",
    category: "Fashion",
    description: "Trendy fashion and lifestyle products",
    maxCashback: 15,
    featured: false,
    rating: 4.3,
    totalOffers: 31,
    coupons: [
      {
        id: "ajio1",
        title: "Trendy Tuesday - 40% Off",
        description: "Special Tuesday deals on trendy fashion",
        code: "TRENDY40",
        discount: "40% OFF",
        validTill: "Every Tuesday",
        terms: ["Valid on Tuesdays only", "Minimum order ₹2500", "On selected brands"],
        category: "Fashion",
        featured: false,
        used: 450,
      },
    ],
  },
]

export const giftCards: GiftCard[] = [
  {
    id: "gc1",
    brand: "Amazon",
    logo: "/amazon-logo.png",
    description: "Shop for everything on Amazon with gift cards",
    denominations: [100, 500, 1000, 2000, 5000],
    cashback: 5,
    validity: "1 Year",
    terms: ["Valid on Amazon.in only", "Cannot be used for other gift cards", "Non-refundable"],
    featured: true,
    category: "E-commerce",
  },
  {
    id: "gc2",
    brand: "Flipkart",
    logo: "/flipkart-logo.png",
    description: "Perfect for all your shopping needs on Flipkart",
    denominations: [200, 500, 1000, 3000, 5000],
    cashback: 4,
    validity: "1 Year",
    terms: ["Valid on Flipkart.com only", "Cannot be clubbed with other offers", "Non-transferable"],
    featured: true,
    category: "E-commerce",
  },
  {
    id: "gc3",
    brand: "Myntra",
    logo: "/myntra-logo.png",
    description: "Fashion gift cards for style enthusiasts",
    denominations: [500, 1000, 2000, 3000],
    cashback: 6,
    validity: "1 Year",
    terms: ["Valid on Myntra.com only", "Valid on fashion items only", "Check balance online"],
    featured: true,
    category: "Fashion",
  },
  {
    id: "gc4",
    brand: "Nykaa",
    logo: "/nykaa-logo.png",
    description: "Beauty and wellness gift cards",
    denominations: [300, 500, 1000, 2000],
    cashback: 8,
    validity: "1 Year",
    terms: ["Valid on Nykaa.com only", "Valid on beauty products", "Cannot be redeemed for cash"],
    featured: true,
    category: "Beauty",
  },
]

export const categories: Category[] = [
  {
    name: "Electronics",
    image: "/electronics/smartphones.png",
    itemCount: 156,
    subcategories: ["Smartphones", "Laptops", "Headphones", "Gaming", "Smartwatches", "Tablets"],
  },
  {
    name: "Fashion",
    image: "/fashion/womens-clothing.png",
    itemCount: 234,
    subcategories: ["Mens Clothing", "Womens Clothing", "Footwear", "Accessories", "Ethnic Wear", "Kids Fashion"],
  },
  {
    name: "Beauty",
    image: "/beauty/skincare.png",
    itemCount: 89,
    subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances", "Personal Care", "Supplements"],
  },
  {
    name: "Home & Living",
    image: "/home/furniture.png",
    itemCount: 167,
    subcategories: [
      "Furniture",
      "Home Decor",
      "Kitchen & Dining",
      "Bedding & Bath",
      "Storage & Organization",
      "Garden & Outdoor",
    ],
  },
  {
    name: "Food & Dining",
    image: "/food/indian-cuisine.png",
    itemCount: 78,
    subcategories: [
      "Indian Cuisine",
      "Chinese & Asian",
      "Pizza & Fast Food",
      "Desserts & Sweets",
      "Healthy Food",
      "Beverages",
    ],
  },
  {
    name: "Travel",
    image: "/travel/flights.png",
    itemCount: 45,
    subcategories: ["Flights", "Hotels", "Holiday Packages", "Bus Bookings", "Train Bookings", "Car Rentals"],
  },
]

// Helper functions
export function getTopDeals() {
  const featuredCoupons = stores
    .flatMap((store) => store.coupons)
    .filter((coupon) => coupon.featured)
    .sort((a, b) => b.used - a.used)
    .slice(0, 6)
    .map((coupon) => {
      const store = stores.find((s) => s.coupons.some((c) => c.id === coupon.id))
      return {
        ...coupon,
        store: store?.name || "",
        logo: store?.logo || "",
        link: `https://${store?.name.toLowerCase()}.com`,
      }
    })

  const featuredGiftCards = giftCards
    .filter((card) => card.featured)
    .slice(0, 4)
    .map((card) => ({
      ...card,
      denominations: `₹${Math.min(...card.denominations)}-₹${Math.max(...card.denominations)}`,
    }))

  return {
    coupons: featuredCoupons,
    giftCards: featuredGiftCards,
  }
}

export function getFeaturedStores() {
  return stores.filter((store) => store.featured).slice(0, 12)
}

export function searchStores(query: string) {
  return stores.filter(
    (store) =>
      store.name.toLowerCase().includes(query.toLowerCase()) ||
      store.category.toLowerCase().includes(query.toLowerCase()) ||
      store.description.toLowerCase().includes(query.toLowerCase()),
  )
}

export function getStoreByName(name: string) {
  return stores.find((store) => store.name.toLowerCase().replace(/\s+/g, "-") === name.toLowerCase())
}

export function getCategoryByName(name: string) {
  return categories.find((category) => category.name.toLowerCase().replace(/\s+/g, "-") === name.toLowerCase())
}

export function getStoresByCategory(categoryName: string) {
  return stores.filter((store) => store.category.toLowerCase() === categoryName.toLowerCase())
}
