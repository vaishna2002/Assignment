import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    console.log("Button clicked");
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const discountPercentage = product.discount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        {product.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            {discountPercentage}% OFF
          </div>
        )}
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-rose-50">
          <Heart className="h-5 w-5 text-rose-500" />
        </button>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-100"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </button>

            {showSuccess && (
              <div
                className="absolute top-full mt-2 left-0 w-full bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow"
              >
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Your item was added to the cart successfully!</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {product.stock < 10 && (
          <p className="mt-2 text-sm text-red-600">
            Only {product.stock} left in stock!
          </p>
        )}
      </div>
    </div>
  );
}
