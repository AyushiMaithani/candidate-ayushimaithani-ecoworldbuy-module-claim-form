import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const Card = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const price = (product.price_cents / 100).toFixed(2);

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
          >
            <Heart 
              size={18} 
              className={isFavorite ? 'text-accent-500' : 'text-neutral-600'} 
              fill={isFavorite ? '#2196F3' : 'none'}
            />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors">
            <ShoppingCart size={18} className="text-neutral-600" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-montserrat font-semibold text-neutral-800 mb-2">{product.title}</h3>
        
        <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
          A stylish and eco-conscious choice for your everyday needs.
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-montserrat font-semibold text-lg text-primary-600">
            ${price}
          </span>
          <a 
            href="#" 
            className="text-sm text-primary-500 hover:text-primary-600 font-medium underline-offset-4 hover:underline"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
