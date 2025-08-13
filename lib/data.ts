// Store data with real information
export const storesData = {
  amazon: {
    id: 1,
    name: "Amazon",
    logo: "/amazon-logo.png",
    description: "World's largest online marketplace with everything from electronics to books",
    website: "https://amazon.in",
    rating: 4.8,
    totalCoupons: 25,
    categories: ["Electronics", "Books", "Home & Garden", "Fashion"],
    coupons: [
      {
        id: 1,
        title: "Flat 50% Off on Electronics",
        description: "Get amazing discounts on laptops, smartphones, tablets and more",
        code: "ELECTRONICS50",
        expiryDays: 5,
        type: "code",
        savings: "Up to ₹15,000",
        category: "Electronics",
        featured: true,
      },
      {
        id: 2,
        title: "Extra 30% Off on Books",
        description: "Discover new worlds with discounted books across all genres",
        code: "BOOKS30",
        expiryDays: 10,
        type: "code",
        savings: "Up to ₹500",
        category: "Books",
        featured: false,
      },
      {
        id: 3,
        title: "Free Delivery on Orders Above ₹499",
        description: "No shipping charges on eligible items",
        code: "",
        expiryDays: 30,
        type: "deal",
        savings: "₹99",
        category: "All",
        featured: false,
      },
    ],
  },
  myntra: {
    id: 2,
    name: "Myntra",
    logo: "/myntra-logo.png",
    description: "India's leading fashion destination with latest trends and styles",
    website: "https://myntra.com",
    rating: 4.6,
    totalCoupons: 18,
    categories: ["Fashion", "Footwear", "Accessories", "Beauty"],
    coupons: [
      {
        id: 4,
        title: "Flat 60% Off on Fashion",
        description: "Trendy clothing for men, women and kids at unbeatable prices",
        code: "FASHION60",
        expiryDays: 7,
        type: "code",
        savings: "Up to ₹3,000",
        category: "Fashion",
        featured: true,
      },
      {
        id: 5,
        title: "Buy 2 Get 1 Free on Footwear",
        description: "Mix and match your favorite shoes and sandals",
        code: "SHOES3",
        expiryDays: 12,
        type: "code",
        savings: "Up to ₹2,500",
        category: "Footwear",
        featured: true,
      },
    ],
  },
  flipkart: {
    id: 3,
    name: "Flipkart",
    logo: "/flipkart-logo.png",
    description: "India's leading e-commerce platform for electronics and more",
    website: "https://flipkart.com",
    rating: 4.5,
    totalCoupons: 22,
    categories: ["Electronics", "Home & Kitchen", "Books", "Fashion"],
    coupons: [
      {
        id: 6,
        title: "Big Billion Days: 70% Off Electronics",
        description: "Massive discounts on smartphones, laptops, and gadgets",
        code: "BIGBILLION70",
        expiryDays: 3,
        type: "code",
        savings: "Up to ₹20,000",
        category: "Electronics",
        featured: true,
      },
      {
        id: 7,
        title: "Extra 40% Off on Home & Kitchen",
        description: "Transform your home with great deals on appliances",
        code: "HOME40",
        expiryDays: 8,
        type: "code",
        savings: "Up to ₹5,000",
        category: "Home & Kitchen",
        featured: false,
      },
    ],
  },
  zomato: {
    id: 4,
    name: "Zomato",
    logo: "/generic-food-delivery-logo.png",
    description: "Food delivery and restaurant discovery platform",
    website: "https://zomato.com",
    rating: 4.3,
    totalCoupons: 12,
    categories: ["Food & Dining"],
    coupons: [
      {
        id: 8,
        title: "Flat 50% Off on First Order",
        description: "New users get amazing discount on their first food order",
        code: "WELCOME50",
        expiryDays: 15,
        type: "code",
        savings: "Up to ₹200",
        category: "Food & Dining",
        featured: true,
      },
      {
        id: 9,
        title: "Free Delivery on Orders Above ₹199",
        description: "No delivery charges on your favorite meals",
        code: "",
        expiryDays: 30,
        type: "deal",
        savings: "₹50",
        category: "Food & Dining",
        featured: false,
      },
    ],
  },
  swiggy: {
    id: 5,
    name: "Swiggy",
    logo: "/generic-food-delivery-logo.png",
    description: "Food delivery at your doorstep with fastest delivery",
    website: "https://swiggy.com",
    rating: 4.4,
    totalCoupons: 15,
    categories: ["Food & Dining"],
    coupons: [
      {
        id: 10,
        title: "Flat 60% Off on Food Orders",
        description: "Delicious meals at incredible prices",
        code: "FOOD60",
        expiryDays: 6,
        type: "code",
        savings: "Up to ₹300",
        category: "Food & Dining",
        featured: true,
      },
    ],
  },
  nykaa: {
    id: 6,
    name: "Nykaa",
    logo: "/nykaa-logo.png",
    description: "Beauty and wellness products for modern lifestyle",
    website: "https://nykaa.com",
    rating: 4.7,
    totalCoupons: 10,
    categories: ["Health & Beauty"],
    coupons: [
      {
        id: 11,
        title: "Flat 40% Off on Beauty Products",
        description: "Premium skincare and makeup at great prices",
        code: "BEAUTY40",
        expiryDays: 9,
        type: "code",
        savings: "Up to ₹1,500",
        category: "Health & Beauty",
        featured: true,
      },
    ],
  },
  bookmyshow: {
    id: 7,
    name: "BookMyShow",
    logo: "/generic-entertainment-logo.png",
    description: "Movie tickets and entertainment events booking",
    website: "https://bookmyshow.com",
    rating: 4.2,
    totalCoupons: 8,
    categories: ["Entertainment"],
    coupons: [
      {
        id: 12,
        title: "Flat ₹150 Off on Movie Tickets",
        description: "Book movie tickets at discounted prices",
        code: "MOVIE150",
        expiryDays: 14,
        type: "code",
        savings: "Up to ₹150",
        category: "Entertainment",
        featured: true,
      },
    ],
  },
  uber: {
    id: 8,
    name: "Uber",
    logo: "/provider-logos/uber.png",
    description: "Ride sharing and food delivery services",
    website: "https://uber.com",
    rating: 4.1,
    totalCoupons: 6,
    categories: ["Travel"],
    coupons: [
      {
        id: 13,
        title: "Flat 50% Off on First Ride",
        description: "New users get discount on their first Uber ride",
        code: "FIRSTRIDE50",
        expiryDays: 20,
        type: "code",
        savings: "Up to ₹200",
        category: "Travel",
        featured: true,
      },
    ],
  },
}

// Top Deals of the Day data
export const topDealsData = [
  {
    id: 1,
    title: "Electronics Mega Sale",
    subtitle: "Up to 70% off",
    description: "Smartphones, laptops, headphones & more",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-owoENE5GywTiIy37uq4655adR61RXG.png",
    bgColor: "from-blue-500 to-purple-600",
    products: [
      { name: "Smartphones", image: "/electronics/smartphones.png", discount: "Up to 60%" },
      { name: "Laptops", image: "/electronics/laptops.png", discount: "Up to 50%" },
      { name: "Headphones", image: "/electronics/headphones.png", discount: "Starting ₹299" },
      { name: "Smart Watches", image: "/electronics/smartwatches.png", discount: "Up to 40%" },
    ],
    cta: "Shop Electronics",
    link: "/category/electronics",
  },
  {
    id: 2,
    title: "Fashion Fiesta",
    subtitle: "Up to 80% off",
    description: "Trendy clothing for men, women & kids",
    image: "/fashion/womens-clothing.png",
    bgColor: "from-pink-500 to-red-500",
    products: [
      { name: "Men's Clothing", image: "/fashion/mens-clothing.png", discount: "Up to 70%" },
      { name: "Women's Clothing", image: "/fashion/womens-clothing.png", discount: "Up to 80%" },
      { name: "Footwear", image: "/fashion/footwear.png", discount: "Buy 2 Get 1" },
      { name: "Accessories", image: "/fashion/accessories.png", discount: "Up to 60%" },
    ],
    cta: "Shop Fashion",
    link: "/category/fashion",
  },
  {
    id: 3,
    title: "Home & Kitchen",
    subtitle: "Starting ₹99",
    description: "Transform your home with amazing deals",
    image: "/home/home-decor.png",
    bgColor: "from-green-500 to-teal-500",
    products: [
      { name: "Furniture", image: "/home/furniture.png", discount: "Up to 55%" },
      { name: "Home Decor", image: "/home/home-decor.png", discount: "Starting ₹99" },
      { name: "Kitchen & Dining", image: "/home/kitchen-dining.png", discount: "Up to 45%" },
      { name: "Storage", image: "/home/storage-organization.png", discount: "Up to 40%" },
    ],
    cta: "Shop Home",
    link: "/category/home-garden",
  },
  {
    id: 4,
    title: "Food & Dining",
    subtitle: "Up to 60% off",
    description: "Delicious meals at unbeatable prices",
    image: "/food/pizza-fastfood.png",
    bgColor: "from-orange-500 to-red-500",
    products: [
      { name: "Pizza & Fast Food", image: "/food/pizza-fastfood.png", discount: "Up to 60%" },
      { name: "Indian Cuisine", image: "/food/indian-cuisine.png", discount: "Up to 50%" },
      { name: "Desserts", image: "/food/desserts-sweets.png", discount: "Buy 1 Get 1" },
      { name: "Beverages", image: "/food/beverages.png", discount: "Up to 40%" },
    ],
    cta: "Order Now",
    link: "/category/food-dining",
  },
  {
    id: 5,
    title: "Beauty & Wellness",
    subtitle: "Up to 50% off",
    description: "Premium skincare & makeup essentials",
    image: "/beauty/makeup.png",
    bgColor: "from-purple-500 to-pink-500",
    products: [
      { name: "Skincare", image: "/beauty/skincare.png", discount: "Up to 50%" },
      { name: "Makeup", image: "/beauty/makeup.png", discount: "Up to 45%" },
      { name: "Hair Care", image: "/beauty/haircare.png", discount: "Up to 40%" },
      { name: "Fragrances", image: "/beauty/fragrances.png", discount: "Up to 35%" },
    ],
    cta: "Shop Beauty",
    link: "/category/health-beauty",
  },
]

// Gift Cards data
export const giftCardsData = {
  amazon: {
    id: 1,
    name: "Amazon",
    logo: "/amazon-logo.png",
    description: "Shop for everything on Amazon with gift cards",
    category: "Shopping",
    denominations: [100, 250, 500, 1000, 2000, 5000],
    customAmount: { min: 50, max: 10000 },
    cashback: "2%",
    featured: true,
    color: "from-orange-400 to-orange-600",
  },
  flipkart: {
    id: 2,
    name: "Flipkart",
    logo: "/flipkart-logo.png",
    description: "India's leading e-commerce platform gift cards",
    category: "Shopping",
    denominations: [100, 250, 500, 1000, 2000, 5000],
    customAmount: { min: 50, max: 10000 },
    cashback: "1.5%",
    featured: true,
    color: "from-blue-400 to-blue-600",
  },
  myntra: {
    id: 3,
    name: "Myntra",
    logo: "/myntra-logo.png",
    description: "Fashion and lifestyle gift cards",
    category: "Fashion",
    denominations: [250, 500, 1000, 2000, 3000],
    customAmount: { min: 100, max: 5000 },
    cashback: "3%",
    featured: true,
    color: "from-pink-400 to-pink-600",
  },
  zomato: {
    id: 4,
    name: "Zomato",
    logo: "/generic-food-delivery-logo.png",
    description: "Food delivery and dining gift cards",
    category: "Food & Dining",
    denominations: [100, 200, 500, 1000, 2000],
    customAmount: { min: 50, max: 3000 },
    cashback: "4%",
    featured: true,
    color: "from-red-400 to-red-600",
  },
  swiggy: {
    id: 5,
    name: "Swiggy",
    logo: "/generic-food-delivery-logo.png",
    description: "Food delivery gift cards for instant meals",
    category: "Food & Dining",
    denominations: [100, 200, 500, 1000, 2000],
    customAmount: { min: 50, max: 3000 },
    cashback: "3.5%",
    featured: false,
    color: "from-orange-400 to-yellow-500",
  },
  nykaa: {
    id: 6,
    name: "Nykaa",
    logo: "/nykaa-logo.png",
    description: "Beauty and wellness gift cards",
    category: "Beauty",
    denominations: [250, 500, 1000, 2000],
    customAmount: { min: 100, max: 3000 },
    cashback: "2.5%",
    featured: false,
    color: "from-purple-400 to-pink-500",
  },
  bookmyshow: {
    id: 7,
    name: "BookMyShow",
    logo: "/generic-entertainment-logo.png",
    description: "Movie tickets and entertainment gift cards",
    category: "Entertainment",
    denominations: [200, 500, 1000, 1500],
    customAmount: { min: 100, max: 2000 },
    cashback: "1%",
    featured: false,
    color: "from-indigo-400 to-purple-600",
  },
  uber: {
    id: 8,
    name: "Uber",
    logo: "/provider-logos/uber.png",
    description: "Ride and food delivery gift cards",
    category: "Travel",
    denominations: [100, 250, 500, 1000],
    customAmount: { min: 50, max: 2000 },
    cashback: "1.5%",
    featured: false,
    color: "from-gray-700 to-black",
  },
}

// Category data with specific items
export const categoriesData = {
  electronics: {
    name: "Electronics",
    icon: "📱",
    description: "Latest gadgets, smartphones, laptops and tech accessories",
    color: "from-blue-500 to-cyan-500",
    items: [
      {
        id: 1,
        name: "Smartphones",
        description: "Latest Android and iOS devices",
        image: "/electronics/smartphones.png",
        deals: 15,
      },
      {
        id: 2,
        name: "Laptops",
        description: "Gaming, business and student laptops",
        image: "/electronics/laptops.png",
        deals: 12,
      },
      {
        id: 3,
        name: "Headphones",
        description: "Wireless and wired audio devices",
        image: "/electronics/headphones.png",
        deals: 8,
      },
      {
        id: 4,
        name: "Smart Watches",
        description: "Fitness and smartwatch collections",
        image: "/electronics/smartwatches.png",
        deals: 6,
      },
      {
        id: 5,
        name: "Tablets",
        description: "iPad and Android tablets",
        image: "/electronics/tablets.png",
        deals: 9,
      },
      {
        id: 6,
        name: "Gaming",
        description: "Gaming consoles and accessories",
        image: "/electronics/gaming.png",
        deals: 7,
      },
    ],
  },
  fashion: {
    name: "Fashion",
    icon: "👗",
    description: "Trendy clothing, footwear and accessories for all",
    color: "from-pink-500 to-purple-500",
    items: [
      {
        id: 1,
        name: "Men's Clothing",
        description: "Shirts, t-shirts, jeans and formal wear",
        image: "/fashion/mens-clothing.png",
        deals: 25,
      },
      {
        id: 2,
        name: "Women's Clothing",
        description: "Dresses, tops, ethnic and western wear",
        image: "/fashion/womens-clothing.png",
        deals: 30,
      },
      {
        id: 3,
        name: "Footwear",
        description: "Shoes, sandals, sneakers and boots",
        image: "/fashion/footwear.png",
        deals: 18,
      },
      {
        id: 4,
        name: "Accessories",
        description: "Bags, watches, jewelry and more",
        image: "/fashion/accessories.png",
        deals: 12,
      },
      {
        id: 5,
        name: "Kids Fashion",
        description: "Clothing and shoes for children",
        image: "/fashion/kids-fashion.png",
        deals: 15,
      },
      {
        id: 6,
        name: "Ethnic Wear",
        description: "Traditional Indian clothing",
        image: "/fashion/ethnic-wear.png",
        deals: 20,
      },
    ],
  },
  "food-dining": {
    name: "Food & Dining",
    icon: "🍕",
    description: "Food delivery, restaurants and dining experiences",
    color: "from-orange-500 to-red-500",
    items: [
      {
        id: 1,
        name: "Pizza & Fast Food",
        description: "Quick bites and comfort food",
        image: "/food/pizza-fastfood.png",
        deals: 20,
      },
      {
        id: 2,
        name: "Indian Cuisine",
        description: "Traditional and regional Indian dishes",
        image: "/food/indian-cuisine.png",
        deals: 25,
      },
      {
        id: 3,
        name: "Chinese & Asian",
        description: "Oriental flavors and Asian delicacies",
        image: "/food/chinese-asian.png",
        deals: 15,
      },
      {
        id: 4,
        name: "Desserts & Sweets",
        description: "Cakes, ice cream and traditional sweets",
        image: "/food/desserts-sweets.png",
        deals: 12,
      },
      {
        id: 5,
        name: "Healthy Food",
        description: "Salads, smoothies and nutritious meals",
        image: "/food/healthy-food.png",
        deals: 10,
      },
      {
        id: 6,
        name: "Beverages",
        description: "Coffee, tea, juices and soft drinks",
        image: "/food/beverages.png",
        deals: 8,
      },
    ],
  },
  travel: {
    name: "Travel",
    icon: "✈️",
    description: "Flight bookings, hotels and travel packages",
    color: "from-green-500 to-teal-500",
    items: [
      {
        id: 1,
        name: "Flight Bookings",
        description: "Domestic and international flights",
        image: "/travel/flights.png",
        deals: 15,
      },
      {
        id: 2,
        name: "Hotels",
        description: "Budget to luxury hotel bookings",
        image: "/travel/hotels.png",
        deals: 20,
      },
      {
        id: 3,
        name: "Holiday Packages",
        description: "Complete vacation packages",
        image: "/travel/holiday-packages.png",
        deals: 12,
      },
      {
        id: 4,
        name: "Car Rentals",
        description: "Self-drive and chauffeur services",
        image: "/travel/car-rentals.png",
        deals: 8,
      },
      {
        id: 5,
        name: "Bus Bookings",
        description: "Intercity and interstate bus travel",
        image: "/travel/bus-bookings.png",
        deals: 10,
      },
      {
        id: 6,
        name: "Train Bookings",
        description: "Railway ticket reservations",
        image: "/travel/train-bookings.png",
        deals: 6,
      },
    ],
  },
  "health-beauty": {
    name: "Health & Beauty",
    icon: "💄",
    description: "Skincare, makeup, wellness and personal care",
    color: "from-rose-500 to-pink-500",
    items: [
      {
        id: 1,
        name: "Skincare",
        description: "Face care, body care and treatments",
        image: "/beauty/skincare.png",
        deals: 18,
      },
      {
        id: 2,
        name: "Makeup",
        description: "Cosmetics and beauty products",
        image: "/beauty/makeup.png",
        deals: 22,
      },
      {
        id: 3,
        name: "Hair Care",
        description: "Shampoos, conditioners and styling",
        image: "/beauty/haircare.png",
        deals: 15,
      },
      {
        id: 4,
        name: "Fragrances",
        description: "Perfumes and body sprays",
        image: "/beauty/fragrances.png",
        deals: 10,
      },
      {
        id: 5,
        name: "Health Supplements",
        description: "Vitamins, proteins and wellness",
        image: "/beauty/supplements.png",
        deals: 12,
      },
      {
        id: 6,
        name: "Personal Care",
        description: "Bath, body and hygiene products",
        image: "/beauty/personal-care.png",
        deals: 14,
      },
    ],
  },
  "home-garden": {
    name: "Home & Garden",
    icon: "🏠",
    description: "Home decor, furniture and garden essentials",
    color: "from-amber-500 to-orange-500",
    items: [
      {
        id: 1,
        name: "Furniture",
        description: "Sofas, beds, tables and storage",
        image: "/home/furniture.png",
        deals: 20,
      },
      {
        id: 2,
        name: "Home Decor",
        description: "Wall art, lighting and decoratives",
        image: "/home/home-decor.png",
        deals: 25,
      },
      {
        id: 3,
        name: "Kitchen & Dining",
        description: "Cookware, appliances and tableware",
        image: "/home/kitchen-dining.png",
        deals: 18,
      },
      {
        id: 4,
        name: "Bedding & Bath",
        description: "Bed sheets, towels and bathroom accessories",
        image: "/home/bedding-bath.png",
        deals: 15,
      },
      {
        id: 5,
        name: "Garden & Outdoor",
        description: "Plants, tools and outdoor furniture",
        image: "/home/garden-outdoor.png",
        deals: 10,
      },
      {
        id: 6,
        name: "Storage & Organization",
        description: "Boxes, baskets and organizers",
        image: "/home/storage-organization.png",
        deals: 12,
      },
    ],
  },
}

// Get all coupons from all stores
export const getAllCoupons = () => {
  const allCoupons = []
  Object.values(storesData).forEach((store) => {
    store.coupons.forEach((coupon) => {
      allCoupons.push({
        ...coupon,
        store: store.name,
        storeLogo: store.logo,
        storeRating: store.rating,
      })
    })
  })
  return allCoupons
}

// Get all gift cards
export const getAllGiftCards = () => {
  return Object.values(giftCardsData)
}

// Get featured gift cards
export const getFeaturedGiftCards = () => {
  return Object.values(giftCardsData).filter((card) => card.featured)
}

// Get coupons by category
export const getCouponsByCategory = (category: string) => {
  const allCoupons = getAllCoupons()
  return allCoupons.filter(
    (coupon) => coupon.category.toLowerCase() === category.toLowerCase() || coupon.category === "All",
  )
}

// Get store by name
export const getStoreByName = (name: string) => {
  const storeKey = name.toLowerCase().replace(/\s+/g, "")
  return storesData[storeKey as keyof typeof storesData]
}

// Get gift card by name
export const getGiftCardByName = (name: string) => {
  const cardKey = name.toLowerCase().replace(/\s+/g, "")
  return giftCardsData[cardKey as keyof typeof giftCardsData]
}

// Get category by name
export const getCategoryByName = (name: string) => {
  const categoryKey = name.toLowerCase().replace(/\s+/g, "-").replace("&", "")
  return categoriesData[categoryKey as keyof typeof categoriesData]
}

// Image cropping utility
export const cropImageTo64x64 = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()

    img.onload = () => {
      canvas.width = 64
      canvas.height = 64

      // Calculate crop dimensions for 1:1 ratio
      const size = Math.min(img.width, img.height)
      const x = (img.width - size) / 2
      const y = (img.height - size) / 2

      ctx?.drawImage(img, x, y, size, size, 0, 0, 64, 64)
      resolve(canvas.toDataURL())
    }

    img.src = URL.createObjectURL(file)
  })
}

// Export all the main data structures
export const stores = Object.values(storesData)
export const categories = Object.values(categoriesData).map((category) => ({
  name: category.name,
  image: `/placeholder.svg?height=60&width=60&text=${category.icon}`,
  itemCount: category.items.length,
}))

// Export the top deals function
export const getTopDeals = () => {
  return {
    coupons: [
      {
        store: "Amazon",
        code: "SAVE50",
        discount: "50% OFF",
        description: "Get 50% off on electronics",
        logo: "/amazon-logo.png",
        link: "https://amazon.in",
        validTill: "2 days left",
        used: 1250,
      },
      {
        store: "Myntra",
        code: "FASHION60",
        discount: "60% OFF",
        description: "Fashion sale - up to 60% off",
        logo: "/myntra-logo.png",
        link: "https://myntra.com",
        validTill: "5 days left",
        used: 890,
      },
      {
        store: "Flipkart",
        code: "BIGBILLION70",
        discount: "70% OFF",
        description: "Big Billion Days sale",
        logo: "/flipkart-logo.png",
        link: "https://flipkart.com",
        validTill: "3 days left",
        used: 2100,
      },
    ],
    giftCards: [
      {
        brand: "Amazon",
        logo: "/amazon-logo.png",
        cashback: 2,
        denominations: "₹100-₹5000",
        validity: "1 Year",
      },
      {
        brand: "Flipkart",
        logo: "/flipkart-logo.png",
        cashback: 1.5,
        denominations: "₹100-₹5000",
        validity: "1 Year",
      },
      {
        brand: "Myntra",
        logo: "/myntra-logo.png",
        cashback: 3,
        denominations: "₹250-₹3000",
        validity: "1 Year",
      },
      {
        brand: "Zomato",
        logo: "/generic-food-delivery-logo.png",
        cashback: 4,
        denominations: "₹100-₹2000",
        validity: "6 Months",
      },
    ],
  }
}

// Export featured stores function
export const getFeaturedStores = () => {
  return [
    {
      id: 1,
      name: "Amazon",
      logo: "/amazon-logo.png",
      category: "Shopping",
      maxCashback: "50",
    },
    {
      id: 2,
      name: "Myntra",
      logo: "/myntra-logo.png",
      category: "Fashion",
      maxCashback: "60",
    },
    {
      id: 3,
      name: "Flipkart",
      name: "Myntra",
      logo: "/myntra-logo.png",
      category: "Fashion",
      maxCashback: "60",
    },
    {
      id: 3,
      name: "Flipkart",
      logo: "/flipkart-logo.png",
      category: "Electronics",
      maxCashback: "70",
    },
    {
      id: 4,
      name: "Zomato",
      logo: "/generic-food-delivery-logo.png",
      category: "Food",
      maxCashback: "50",
    },
    {
      id: 5,
      name: "Swiggy",
      logo: "/generic-food-delivery-logo.png",
      category: "Food",
      maxCashback: "60",
    },
    {
      id: 6,
      name: "Nykaa",
      logo: "/nykaa-logo.png",
      category: "Beauty",
      maxCashback: "40",
    },
  ]
}
