import React, { useState, useMemo } from 'react';
import { products } from './data/products';
import { ProductCard } from './components/ProductCard';
import { Filters } from './components/Filters';
import { Navbar } from './components/Navbar';
import { ProductDetails } from './components/ProductDetails';
import { FilterState, Product } from './types';

function App() {
  // State for filters
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    subCategory: '',
    search: '',
    sort: 'price-asc',
    priceRange: [0, 10000],
    rating: 0,
    onlyDiscounted: false,
    inStock: false,
  });

  // State for selected product
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter and sort products
  const filteredProducts: Product[] = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          filters.category === 'all' || product.category === filters.category;
        const matchesSubCategory =
          !filters.subCategory || product.subCategory === filters.subCategory;
        const matchesSearch =
          product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          product.description.toLowerCase().includes(filters.search.toLowerCase());
        const matchesPriceRange =
          product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
        const matchesRating = product.rating >= filters.rating;
        const matchesDiscount =
          !filters.onlyDiscounted || (product.discount ?? 0) > 0;
        const matchesStock = !filters.inStock || product.stock > 0;

        return (
          matchesCategory &&
          matchesSubCategory &&
          matchesSearch &&
          matchesPriceRange &&
          matchesRating &&
          matchesDiscount &&
          matchesStock
        );
      })
      .sort((a, b) => {
        switch (filters.sort) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'rating-desc':
            return b.rating - a.rating;
          case 'discount-desc':
            return (b.discount ?? 0) - (a.discount ?? 0);
          default:
            console.warn(`Unsupported sort option: ${filters.sort}`);
            return 0;
        }
      });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Filters */}
      <Filters filters={filters} onFilterChange={setFilters} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-[13rem] md:mt-[16rem]">
        {/* Results count and active filters */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} found
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {filters.category !== 'all' && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                Category: {filters.category}
              </span>
            )}
            {filters.subCategory && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                Subcategory: {filters.subCategory}
              </span>
            )}
            {filters.rating > 0 && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                {filters.rating}+ Stars
              </span>
            )}
            {filters.onlyDiscounted && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                On Sale
              </span>
            )}
            {filters.inStock && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                In Stock
              </span>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* No Products Found Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria</p>
          </div>
        )}
      </main>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;
