export const CATEGORIES = [
  { id: 'all', name: 'All Items', icon: 'Sparkles', count: 12 },
  { id: 'produce', name: 'Fresh Fruits & Veggies', icon: 'Apple', count: 4 },
  { id: 'dairy', name: 'Dairy & Farm Eggs', icon: 'Milk', count: 3 },
  { id: 'bakery', name: 'Artisan Bakery', icon: 'Wheat', count: 2 },
  { id: 'pantry', name: 'Pantry & Grains', icon: 'PackageOpen', count: 3 },
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Organic Hass Avocados (Pack of 3)',
    category: 'produce',
    price: 4.99,
    originalPrice: 6.49,
    rating: 4.9,
    reviewsCount: 142,
    weight: '3 pcs / approx 500g',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80',
    description: 'Creamy, rich, hand-picked organic Haas avocados from sustainable California farms. Perfect for homemade guacamole, avocado toast, and salads.',
    origin: 'California, USA',
    inStock: true,
    nutrition: { calories: '160 kcal', fat: '15g', carbs: '9g', protein: '2g' }
  },
  {
    id: 2,
    name: 'Fresh Farm Strawberry Basket',
    category: 'produce',
    price: 3.49,
    originalPrice: 4.99,
    rating: 4.8,
    reviewsCount: 98,
    weight: '400g basket',
    badge: '20% OFF',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80',
    description: 'Sun-ripened, hand-picked strawberries bursting with sweet natural flavor. Sourced daily from local greenhouse growers.',
    origin: 'Local Organic Farms',
    inStock: true,
    nutrition: { calories: '32 kcal', fat: '0.3g', carbs: '7.7g', protein: '0.7g' }
  },
  {
    id: 3,
    name: 'Artisan Sourdough Boule',
    category: 'bakery',
    price: 5.25,
    originalPrice: null,
    rating: 5.0,
    reviewsCount: 76,
    weight: '750g loaf',
    badge: 'Freshly Baked',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    description: 'Naturally fermented for 36 hours with a golden crunchy crust and open, tender crumb. Made with heirloom organic stoneground wheat.',
    origin: 'T-Mart In-House Bakery',
    inStock: true,
    nutrition: { calories: '210 kcal', fat: '1g', carbs: '42g', protein: '8g' }
  },
  {
    id: 4,
    name: 'Grass-Fed Whole Milk (Half Gallon)',
    category: 'dairy',
    price: 3.99,
    originalPrice: 4.50,
    rating: 4.7,
    reviewsCount: 215,
    weight: '64 fl oz (1.89L)',
    badge: 'Farm Fresh',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    description: '100% grass-fed whole milk, low-temperature pasteurized to preserve natural enzymes, sweetness, and micro-nutrients.',
    origin: 'Happy Valley Pastures',
    inStock: true,
    nutrition: { calories: '150 kcal', fat: '8g', carbs: '12g', protein: '8g' }
  },
  {
    id: 5,
    name: 'Extra Virgin Cold-Pressed Olive Oil',
    category: 'pantry',
    price: 14.99,
    originalPrice: 18.99,
    rating: 4.9,
    reviewsCount: 310,
    weight: '750 ml bottle',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    description: 'Single-estate Koroneiki olives cold-extracted within 4 hours of harvest. Rich in polyphenols with notes of artichoke and fresh herbs.',
    origin: 'Crete, Greece',
    inStock: true,
    nutrition: { calories: '120 kcal', fat: '14g', carbs: '0g', protein: '0g' }
  },
  {
    id: 6,
    name: 'Free-Range Golden Yolk Eggs',
    category: 'dairy',
    price: 4.29,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 180,
    weight: '12 large eggs',
    badge: 'Humane Certified',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80',
    description: 'Pasture-raised hens foraging on open green meadows producing rich, deep amber yolks packed with Omega-3 and Vitamin D.',
    origin: 'Sunny Acres Family Farm',
    inStock: true,
    nutrition: { calories: '70 kcal', fat: '5g', carbs: '0g', protein: '6g' }
  },
  {
    id: 7,
    name: 'Organic Baby Spinach & Wild Arugula',
    category: 'produce',
    price: 2.99,
    originalPrice: 3.89,
    rating: 4.6,
    reviewsCount: 64,
    weight: '300g clam shell',
    badge: 'Triple Washed',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80',
    description: 'Tender baby greens pre-washed with pure spring water, crisp and ready for salads, smoothies, or light sautés.',
    origin: 'Salinas Valley, CA',
    inStock: true,
    nutrition: { calories: '20 kcal', fat: '0g', carbs: '3g', protein: '2g' }
  },
  {
    id: 8,
    name: 'Raw Unfiltered Mountain Honey',
    category: 'pantry',
    price: 9.50,
    originalPrice: 11.00,
    rating: 5.0,
    reviewsCount: 165,
    weight: '500g jar',
    badge: '100% Pure',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    description: 'Raw, unheated floral honey with active pollens and propolis gathered from wild mountain clover and wildflower meadows.',
    origin: 'Blue Ridge Foothills',
    inStock: true,
    nutrition: { calories: '64 kcal', fat: '0g', carbs: '17g', protein: '0g' }
  },
  {
    id: 9,
    name: 'French Butter Croissants (Pack of 4)',
    category: 'bakery',
    price: 4.75,
    originalPrice: 5.50,
    rating: 4.8,
    reviewsCount: 88,
    weight: '4 pieces / 280g',
    badge: 'Chef Favorite',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    description: 'Laminated with cultured butter and baked to a crisp golden honeycomb flake. Warm them in the oven for 3 minutes for bistro bliss.',
    origin: 'T-Mart Pastry Kitchen',
    inStock: true,
    nutrition: { calories: '260 kcal', fat: '14g', carbs: '28g', protein: '5g' }
  },
  {
    id: 10,
    name: 'Organic Crisp Fuji Apples',
    category: 'produce',
    price: 3.99,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 112,
    weight: '1 kg bag (approx 5-6 apples)',
    badge: 'Crunchy & Sweet',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80',
    description: 'Ultra crisp, juicy Fuji apples with balanced sweetness and natural aromatic scent. Ideal for snacking and baking pies.',
    origin: 'Yakima Valley, WA',
    inStock: true,
    nutrition: { calories: '95 kcal', fat: '0.3g', carbs: '25g', protein: '0.5g' }
  },
  {
    id: 11,
    name: 'Artisan Greek Feta Cheese in Brine',
    category: 'dairy',
    price: 5.99,
    originalPrice: 7.20,
    rating: 4.9,
    reviewsCount: 79,
    weight: '200g block',
    badge: 'PDO Certified',
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional PDO sheep and goat milk feta cured in sea salt brine. Crumbly, tangy, and deeply savory.',
    origin: 'Thessaly, Greece',
    inStock: true,
    nutrition: { calories: '75 kcal', fat: '6g', carbs: '1g', protein: '4g' }
  },
  {
    id: 12,
    name: 'Ancient Grain Organic Quinoa Trio',
    category: 'pantry',
    price: 6.20,
    originalPrice: 7.50,
    rating: 4.8,
    reviewsCount: 52,
    weight: '1 lb (454g)',
    badge: 'Gluten Free',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'A colorful blend of white, red, and black royal Andean quinoa. High in protein, pre-rinsed to remove bitterness.',
    origin: 'Altiplano, Bolivia',
    inStock: true,
    nutrition: { calories: '160 kcal', fat: '2.5g', carbs: '29g', protein: '6g' }
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'Home Chef & Mom',
    comment: 'The produce quality from T-Mart is unmatched. The strawberries and avocados arrive perfectly ripe, and same-day delivery has saved our family dinner routine!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Nutrition Specialist',
    comment: 'As a nutritionist, I love that T-Mart shares complete source origins and nutrition labels. Their sourdough and grass-fed milk are staple pantry essentials for me.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Local Resident',
    comment: 'Shopping online and getting it packaged in biodegradable bags within 2 hours is fantastic. The static website is lightning fast on both my phone and laptop!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
  }
];

export const LOCATIONS = [
  {
    id: 1,
    name: 'T-Mart Flagship Downtown',
    address: '450 Marketplace Way, Downtown Center',
    hours: 'Mon - Sun: 7:00 AM - 10:00 PM',
    phone: '+1 (555) 345-9821'
  },
  {
    id: 2,
    name: 'T-Mart Green Hills Outlet',
    address: '128 Orchard Boulevard, Green Hills',
    hours: 'Mon - Sun: 8:00 AM - 9:00 PM',
    phone: '+1 (555) 789-4320'
  },
  {
    id: 3,
    name: 'T-Mart Harbor Point Express',
    address: '88 Marina Boulevard, Harbor Bay',
    hours: '24/7 Supermarket & Curbside',
    phone: '+1 (555) 671-2299'
  }
];
