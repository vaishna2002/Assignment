export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  subCategory: string;
  image: string;
  rating: number;
  reviews: Review[];
  features: string[];
  stock: number;
  brand: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export type SortOption = 'price-asc' | 'price-desc' | 'rating-desc' | 'discount-desc';

export interface FilterState {
  category: string;
  subCategory: string;
  search: string;
  sort: SortOption;
  priceRange: [number, number];
  rating: number;
  onlyDiscounted: boolean;
  inStock: boolean;
}