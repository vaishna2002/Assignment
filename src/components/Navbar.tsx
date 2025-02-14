import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Bell, 
  User, 
  Menu, 
  X, 
  ShoppingCart, 
  Heart,
  Search
} from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-[2px] z-10 bg-gradient-to-r bg-slate-800  text-white shadow-lg w-[100%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8" />
            <h1 className="ml-2 text-xl font-bold">ShopNow</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            <a href="#" className="hover:text-emerald-200 transition-colors">Home</a>
            <a href="#" className="hover:text-emerald-200 transition-colors">Categories</a>
            <a href="#" className="hover:text-emerald-200 transition-colors">Deals</a>
            <a href="#" className="hover:text-emerald-200 transition-colors">New Arrivals</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-4 pb-3 space-y-1 bg-gradient-to-r bg-slate-800 to-teal-700 mt-[5rem]">
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
            Home
          </a>
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
            Categories
          </a>
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
            Deals
          </a>
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
            New Arrivals
          </a>
          <div className="flex items-center space-x-2 px-3 py-2">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}