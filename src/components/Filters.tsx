import React from 'react';
import { Search, Smartphone, Shirt, Grid3X3, ArrowUpDown, ChevronDown, Laptop, Headphones, Watch, Camera, Tv, ShoppingBag, Shovel as Shoe, Glasses, Star, SlidersHorizontal, Home, Car, Book, Gamepad, Gift, Utensils } from 'lucide-react';
import { FilterState, SortOption } from '../types';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function Filters({ filters, onFilterChange }: FiltersProps) {
  const [showMobileFilters, setShowMobileFilters] = React.useState(false);

  const categories = [
    { id: 'all', label: 'All Products', icon: <Grid3X3 className="h-4 w-4" /> },
    { id: 'electronics', label: 'Electronics', icon: <Smartphone className="h-4 w-4" />, 
      subCategories: [
        { id: 'phones', label: 'Phones', icon: <Smartphone className="h-4 w-4" /> },
        { id: 'laptops', label: 'Laptops', icon: <Laptop className="h-4 w-4" /> },
        { id: 'headphones', label: 'Headphones', icon: <Headphones className="h-4 w-4" /> },
        { id: 'smartwatches', label: 'Smartwatches', icon: <Watch className="h-4 w-4" /> },
        { id: 'cameras', label: 'Cameras', icon: <Camera className="h-4 w-4" /> },
        { id: 'tvs', label: 'TVs', icon: <Tv className="h-4 w-4" /> },
        { id: 'gaming', label: 'Gaming', icon: <Gamepad className="h-4 w-4" /> }
      ]
    },
    { id: 'clothing', label: 'Clothing', icon: <Shirt className="h-4 w-4" />,
      subCategories: [
        { id: 'shirts', label: 'Shirts', icon: <Shirt className="h-4 w-4" /> },
        { id: 'bags', label: 'Bags', icon: <ShoppingBag className="h-4 w-4" /> },
        { id: 'shoes', label: 'Shoes', icon: <Shoe className="h-4 w-4" /> },
        { id: 'accessories', label: 'Accessories', icon: <Glasses className="h-4 w-4" /> }
      ]
    },
    { id: 'home', label: 'Home & Living', icon: <Home className="h-4 w-4" />,
      subCategories: [
        { id: 'furniture', label: 'Furniture', icon: <Home className="h-4 w-4" /> },
        { id: 'kitchen', label: 'Kitchen', icon: <Utensils className="h-4 w-4" /> },
        { id: 'decor', label: 'Decor', icon: <Gift className="h-4 w-4" /> }
      ]
    },
    { id: 'automotive', label: 'Automotive', icon: <Car className="h-4 w-4" />,
      subCategories: [
        { id: 'parts', label: 'Parts', icon: <Car className="h-4 w-4" /> },
        { id: 'accessories', label: 'Accessories', icon: <Gift className="h-4 w-4" /> }
      ]
    },
    { id: 'books', label: 'Books & Media', icon: <Book className="h-4 w-4" />,
      subCategories: [
        { id: 'books', label: 'Books', icon: <Book className="h-4 w-4" /> },
        { id: 'magazines', label: 'Magazines', icon: <Book className="h-4 w-4" /> },
        { id: 'games', label: 'Games', icon: <Gamepad className="h-4 w-4" /> }
      ]
    }
  ];
  
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating-desc', label: 'Highest Rated' },
    { value: 'discount-desc', label: 'Biggest Discount' }
  ];

  return (
    <div className="fixed top-16 left-0 right-0 z-10 bg-gradient-to-r bg-slate-800 to-teal-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          {/* Search and Mobile Filter Toggle */}
          
<div className="flex gap-2 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white flex items-center"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </button>
          </div>
          {/* Filters Content */}
          <div className={`${showMobileFilters ? 'block' : 'hidden'} block space-y-4 max-h-[calc(100vh-12rem)] overflow-y-auto`}>
            {/* Categories */}
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {categories.map(({ id, label, icon }) => (
                  <button
                    key={id}
                    onClick={() => onFilterChange({ 
                      ...filters, 
                      category: id,
                      subCategory: '' // Reset subcategory when changing category
                    })}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                      ${filters.category === id 
                        ? 'bg-white text-emerald-600 shadow-lg' 
                        : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    {icon}
                    <span>{label}</span>
                  </button>
                ))}
              </div>
              
              {/* Sub-categories */}
              {filters.category !== 'all' && (
                <div className="flex flex-wrap gap-2 mt-2 pl-4">
                  {categories
                    .find(c => c.id === filters.category)
                    ?.subCategories?.map(({ id, label, icon }) => (
                      <button
                        key={id}
                        onClick={() => onFilterChange({ ...filters, subCategory: id })}
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all
                          ${filters.subCategory === id 
                            ? 'bg-white/90 text-emerald-600' 
                            : 'bg-white/5 text-white hover:bg-white/10'}`}
                      >
                        {icon}
                        <span>{label}</span>
                      </button>
                    ))}
                </div>
              )}
            </div>

            {/* Price Range and Rating */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-white text-sm">Price Range</label>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    value={filters.priceRange[0]}
                    onChange={(e) => onFilterChange({
                      ...filters,
                      priceRange: [Number(e.target.value), filters.priceRange[1]]
                    })}
                    className="w-24 px-2 py-1 bg-white/10 border border-white/20 rounded text-white"
                    placeholder="Min"
                  />
                  <span className="text-white">-</span>
                  <input
                    type="number"
                    value={filters.priceRange[1]}
                    onChange={(e) => onFilterChange({
                      ...filters,
                      priceRange: [filters.priceRange[0], Number(e.target.value)]
                    })}
                    className="w-24 px-2 py-1 bg-white/10 border border-white/20 rounded text-white"
                    placeholder="Max"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-white text-sm">Min Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => onFilterChange({ ...filters, rating })}
                      className={`p-1 rounded ${
                        filters.rating === rating
                          ? 'text-yellow-400'
                          : 'text-white/50 hover:text-white/70'
                      }`}
                    >
                      <Star className="h-5 w-5 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Filters and Sort */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.onlyDiscounted}
                    onChange={(e) => onFilterChange({
                      ...filters,
                      onlyDiscounted: e.target.checked
                    })}
                    className="rounded border-white/20 bg-white/10 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="text-white text-sm">Show only discounted</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => onFilterChange({
                      ...filters,
                      inStock: e.target.checked
                    })}
                    className="rounded border-white/20 bg-white/10 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="text-white text-sm">In stock only</span>
                </label>
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-white">
                  <ArrowUpDown className="h-4 w-4" />
                  <select
                    value={filters.sort}
                    onChange={(e) => onFilterChange({ ...filters, sort: e.target.value as SortOption })}
                    className="bg-transparent border-none text-white focus:outline-none appearance-none pr-8 w-full"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value} className="text-gray-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="h-4 w-4 absolute right-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}