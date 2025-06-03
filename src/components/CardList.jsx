import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import Card from './Card';

const CardList = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}printful-products`);
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat font-semibold text-3xl text-neutral-800 mb-2 text-center">
          Products <span className="text-primary-500">Feed</span>
        </h2>
        <p className="text-neutral-600 text-center mb-10 max-w-2xl mx-auto">
          Discover our selection of eco-friendly products that combine sustainability with style, quality, and innovation.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-8 py-3 border border-primary-500 text-primary-500 font-montserrat font-medium rounded-full hover:bg-primary-50 transition-all"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default CardList;
