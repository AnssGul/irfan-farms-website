export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  badge?: 'bestseller' | 'new' | 'hot-deal' | 'limited';
  inStock: boolean;
  concern?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: 'ghee', name: 'Pure Ghee', image: 'https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=800', productCount: 8 },
  { id: 'flour', name: 'Stone Ground Flour', image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800', productCount: 12 },
  { id: 'oils', name: 'Cold-Pressed Oils', image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=800', productCount: 10 },
  { id: 'vegetables', name: 'Fresh Vegetables', image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800', productCount: 25 },
  { id: 'fruits', name: 'Organic Fruits', image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800', productCount: 18 },
  { id: 'dairy', name: 'Farm Fresh Dairy', image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800', productCount: 15 },
  { id: 'organic', name: 'Organic Specials', image: 'https://images.pexels.com/photos/7937487/pexels-photo-7937487.jpeg?auto=compress&cs=tinysrgb&w=800g', productCount: 20 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'A2 Bilona Ghee',
    category: 'ghee',
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 342,
    image: '/placeholder.svg',
    description: 'Traditional hand-churned A2 ghee from grass-fed desi cows. Made using the ancient Bilona method.',
    badge: 'bestseller',
    inStock: true,
    concern: ['energy', 'health'],
  },
  {
    id: '2',
    name: 'Organic Wheat Flour',
    category: 'flour',
    price: 299,
    rating: 4.8,
    reviews: 256,
    image: '/placeholder.svg',
    description: 'Stone-ground whole wheat flour from organically grown wheat. No preservatives.',
    badge: 'new',
    inStock: true,
    concern: ['daily-use', 'health'],
  },
  {
    id: '3',
    name: 'Cold-Pressed Mustard Oil',
    category: 'oils',
    price: 449,
    originalPrice: 549,
    rating: 4.7,
    reviews: 189,
    image: '/placeholder.svg',
    description: 'Pure kachi ghani mustard oil. Cold-pressed to retain all natural nutrients.',
    badge: 'hot-deal',
    inStock: true,
    concern: ['health', 'daily-use'],
  },
  {
    id: '4',
    name: 'Farm Fresh Paneer',
    category: 'dairy',
    price: 349,
    rating: 4.9,
    reviews: 421,
    image: '/placeholder.svg',
    description: 'Fresh cottage cheese made from farm-fresh milk. Soft and creamy texture.',
    inStock: true,
    concern: ['energy', 'health'],
  },
  {
    id: '5',
    name: 'Organic Honey',
    category: 'organic',
    price: 599,
    originalPrice: 749,
    rating: 4.8,
    reviews: 312,
    image: '/placeholder.svg',
    description: 'Raw, unprocessed honey from our organic farm. Rich in natural enzymes.',
    badge: 'bestseller',
    inStock: true,
    concern: ['energy', 'weight-care'],
  },
  {
    id: '6',
    name: 'Brown Rice',
    category: 'organic',
    price: 199,
    rating: 4.6,
    reviews: 156,
    image: '/placeholder.svg',
    description: 'Unpolished brown rice rich in fiber and nutrients. Perfect for health-conscious meals.',
    inStock: true,
    concern: ['weight-care', 'health'],
  },
  {
    id: '7',
    name: 'Fresh Farm Eggs',
    category: 'dairy',
    price: 149,
    rating: 4.9,
    reviews: 567,
    image: '/placeholder.svg',
    description: 'Free-range eggs from our happy hens. Rich in omega-3 and vitamins.',
    inStock: true,
    concern: ['energy', 'daily-use'],
  },
  {
    id: '8',
    name: 'Coconut Oil',
    category: 'oils',
    price: 399,
    rating: 4.7,
    reviews: 234,
    image: '/placeholder.svg',
    description: 'Virgin coconut oil cold-pressed from fresh coconuts. Multi-purpose oil.',
    badge: 'limited',
    inStock: false,
    concern: ['health', 'weight-care'],
  },
  {
    id: '9',
    name: 'Organic Turmeric Powder',
    category: 'organic',
    price: 179,
    originalPrice: 229,
    rating: 4.8,
    reviews: 289,
    image: '/placeholder.svg',
    description: 'Pure turmeric powder from organically grown turmeric roots. High curcumin content.',
    badge: 'hot-deal',
    inStock: true,
    concern: ['health'],
  },
  {
    id: '10',
    name: 'Desi Cow Milk',
    category: 'dairy',
    price: 89,
    rating: 4.9,
    reviews: 678,
    image: '/placeholder.svg',
    description: 'Fresh A2 milk from our indigenous desi cows. Delivered daily.',
    badge: 'bestseller',
    inStock: true,
    concern: ['energy', 'daily-use', 'health'],
  },
  {
    id: '11',
    name: 'Besan (Gram Flour)',
    category: 'flour',
    price: 159,
    rating: 4.6,
    reviews: 145,
    image: '/placeholder.svg',
    description: 'Stone-ground chickpea flour. Perfect for pakoras, chillas, and sweets.',
    inStock: true,
    concern: ['daily-use'],
  },
  {
    id: '12',
    name: 'Organic Jaggery',
    category: 'organic',
    price: 249,
    rating: 4.7,
    reviews: 198,
    image: '/placeholder.svg',
    description: 'Traditional jaggery made from organic sugarcane. Natural sweetener.',
    badge: 'new',
    inStock: true,
    concern: ['energy', 'health'],
  },
];

export const concerns = [
  { id: 'energy', name: 'Energy Boost', icon: '⚡' },
  { id: 'health', name: 'Health & Immunity', icon: '🌿' },
  { id: 'daily-use', name: 'Daily Essentials', icon: '🏠' },
  { id: 'weight-care', name: 'Weight Management', icon: '⚖️' },
];

export const testimonials = [
  {
    id: '1',
    name: 'Ayesha Khan',
    location: 'Lahore',
    rating: 5,
    comment: 'The A2 Bilona Ghee is absolutely divine! My family can taste the difference. Pure and authentic.',
    avatar: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'Muhammad Ali',
    location: 'Karachi',
    rating: 5,
    comment: 'Finally found a source for truly organic products. The quality is unmatched. Highly recommended!',
    avatar: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'Sana Mir',
    location: 'Islamabad',
    rating: 5,
    comment: 'Fresh vegetables delivered to my doorstep. Just like from the farm. Love the freshness!',
    avatar: '/placeholder.svg',
  },
  {
    id: '4',
    name: 'Omar Raza',
    location: 'Faisalabad',
    rating: 5,
    comment: 'The cold-pressed oils are fantastic. You can really taste the purity. Great for health-conscious cooking.',
    avatar: '/placeholder.svg',
  },
];
