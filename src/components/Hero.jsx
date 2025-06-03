import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-800 mb-6 leading-tight max-w-4xl">
            Fresh, Sustainable <span className="text-primary-500">Choices</span> for a Better World
          </h1>
          <p className="text-neutral-600 text-lg mb-8 max-w-2xl">
            Discover eco-friendly products that make a difference. Shop with purpose and contribute to a healthier planet with every purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#featured" 
              className="px-8 py-3 bg-primary-500 text-white font-montserrat font-medium rounded-full hover:bg-primary-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Shop Now
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 border border-primary-500 text-primary-500 font-montserrat font-medium rounded-full hover:bg-primary-50 transition-all flex items-center justify-center"
            >
              Learn More <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
