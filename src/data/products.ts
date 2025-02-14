import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-end noise-canceling wireless headphones with 30-hour battery life and premium sound quality.',
    price: 249.99,
    originalPrice: 299.99,
    discount: 50,
    category: 'electronics',
    subCategory: 'headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    rating: 4.5,
    brand: 'SoundMaster',
    stock: 15,
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Touch controls',
      'Voice assistant support'
    ],
    reviews: [
      {
        id: '1',
        userName: 'John D.',
        rating: 5,
        comment: 'Best headphones I have ever owned. The sound quality is amazing!',
        date: '2024-02-15'
      },
      {
        id: '2',
        userName: 'Sarah M.',
        rating: 4,
        comment: 'Great battery life and comfortable for long sessions.',
        date: '2024-02-10'
      }
    ]
  },
  {
    id: '2',
    name: 'Smart Fitness Watch Pro',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and 14-day battery life.',
    price: 179.99,
    originalPrice: 199.99,
    discount: 20,
    category: 'electronics',
    subCategory: 'smartwatches',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    rating: 4.7,
    brand: 'TechFit',
    stock: 8,
    features: [
      'Heart rate monitoring',
      'Built-in GPS',
      '14-day battery life',
      'Water resistant',
      '20+ sport modes'
    ],
    reviews: [
      {
        id: '3',
        userName: 'Mike R.',
        rating: 5,
        comment: 'Perfect for tracking my workouts. Battery life is impressive!',
        date: '2024-02-18'
      }
    ]
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Premium 100% organic cotton t-shirt with a comfortable fit and sustainable production.',
    price: 24.99,
    category: 'clothing',
    subCategory: 'shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    rating: 4.3,
    brand: 'EcoWear',
    stock: 50,
    features: [
      '100% organic cotton',
      'Sustainable production',
      'Comfortable fit',
      'Multiple colors available',
      'Machine washable'
    ],
    reviews: [
      {
        id: '4',
        userName: 'Emma L.',
        rating: 4,
        comment: 'Very comfortable and great quality!',
        date: '2024-02-12'
      }
    ]
  },
  {
    id: '4',
    name: 'Classic Denim Jacket',
    description: 'Timeless denim jacket with modern fit and premium quality materials.',
    price: 79.99,
    originalPrice: 89.99,
    discount: 10,
    category: 'clothing',
    subCategory: 'accessories',
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500&q=80',
    rating: 4.8,
    brand: 'DenimCo',
    stock: 20,
    features: [
      'Premium denim material',
      'Modern fit',
      'Brass buttons',
      'Multiple pockets',
      'Versatile style'
    ],
    reviews: [
      {
        id: '5',
        userName: 'Chris P.',
        rating: 5,
        comment: 'Perfect fit and great quality denim!',
        date: '2024-02-14'
      }
    ]
  },
  {
    id: '5',
    name: 'Ultra-Slim Laptop Pro',
    description: 'Powerful and portable laptop with 4K display and all-day battery life.',
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 200,
    category: 'electronics',
    subCategory: 'laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
    rating: 4.9,
    brand: 'TechPro',
    stock: 5,
    features: [
      '15-inch 4K Display',
      'Intel i7 Processor',
      '16GB RAM',
      '512GB SSD',
      'Thunderbolt 4 ports'
    ],
    reviews: [
      {
        id: '6',
        userName: 'David K.',
        rating: 5,
        comment: 'Amazing performance and beautiful display!',
        date: '2024-02-16'
      }
    ]
  }
];