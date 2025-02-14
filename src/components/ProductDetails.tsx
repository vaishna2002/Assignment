import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, X, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

export function ProductDetails({ product, onClose }: ProductDetailsProps) {
  const [showSuccess, setShowSuccess] = useState(false); // State for showing alert

  const handleAddToCart = () => {
    setShowSuccess(true);
    // Hide the alert after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const discountPercentage = product.discount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto max-500:mt-[26%]">
      <div className="bg-white rounded-xl w-full max-w-4xl mb-1 mt-[30%] sm:mt-56">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 max-500:mt-[30rem] gap-8 p-6">
            {/* Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  {product.subCategory && (
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                      {product.subCategory}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.brand}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600">
                  ({product.reviews.length} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-emerald-600">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.discount && (
                    <>
                      <span className="text-xl text-gray-400 line-through">
                        ${product.originalPrice?.toFixed(2)}
                      </span>
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-medium rounded">
                        {discountPercentage}% OFF
                      </span>
                    </>
                  )}
                </div>
                {product.stock < 10 && (
                  <p className="text-sm text-red-600">
                    Only {product.stock} left in stock!
                  </p>
                )}
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4 relative">
                <button
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r bg-slate-800 to-teal-600 text-white rounded-lg hover:bg-slate-950 hover:to-teal-700 transition-all"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Buy Now
                </button>
                <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>

                {/* Success Alert */}
                {showSuccess && (
                  <div className="absolute top-full mt-2 left-0 w-full bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Oder Placed successfully!</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">Description:</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="border-t border-gray-200 p-6">
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
            <div className="space-y-4">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{review.userName}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
