import React, { useState, useEffect } from 'react';
import { Leaf, Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 w-full z-50 transition-all duration-300 bg-[#FCF0E2] py-4 shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Leaf className="text-[#4CAF50] h-8 w-8 animate-float" />
            <div>
              <span className="font-montserrat font-bold text-xl leading-none text-[#4CAF50]">Eco</span>
              <span className="font-montserrat font-medium text-xl leading-none text-neutral-700">World</span>
              <span className="font-montserrat font-bold text-xl leading-none text-[#2196f3]">Buy</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8 font-montserrat text-neutral-700">
            <a href="#" className="hover:text-primary-500 transition-colors">Home</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Shop</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Categories</a>
            <a href="#" className="hover:text-primary-500 transition-colors">About</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-neutral-700 hover:text-primary-500 transition-colors">
              <User size={20} />
            </button>
            <button className="relative text-neutral-700 hover:text-[#4CAF50] transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#4CAF50] text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          <button 
            className="md:hidden text-neutral-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4 font-montserrat text-neutral-700">
              <a href="#" className="py-2 hover:text-primary-500 transition-colors">Home</a>
              <a href="#" className="py-2 hover:text-primary-500 transition-colors">Shop</a>
              <a href="#" className="py-2 hover:text-primary-500 transition-colors">Categories</a>
              <a href="#" className="py-2 hover:text-primary-500 transition-colors">About</a>
              <a href="#" className="py-2 hover:text-primary-500 transition-colors">Contact</a>
              <div className="flex items-center space-x-6 py-2">
                <button className="text-neutral-700 hover:text-primary-500 transition-colors">
                  <Search size={20} />
                </button>
                <button className="text-neutral-700 hover:text-primary-500 transition-colors">
                  <User size={20} />
                </button>
                <button className="relative text-neutral-700 hover:text-primary-500 transition-colors">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;