import React from 'react';
import {
  Leaf,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Newsletter from './NewsLetter';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">

          <div className="col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <Leaf className="text-primary-400 h-8 w-8" />
              <div>
                <span className="font-montserrat font-bold text-xl leading-none text-primary-500">Eco</span>
                <span className="font-montserrat font-medium text-xl leading-none text-white">World</span>
                <span className="font-montserrat font-bold text-xl leading-none text-accent-500">Buy</span>
              </div>
            </a>
            <p className="mb-6">
              Your marketplace for sustainable, eco-friendly products that help create a better future for our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <Newsletter />
          </div>

          <div className="col-span-1">
            <h3 className="font-montserrat font-semibold text-white text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-primary-400 flex-shrink-0" />
                <span>1234 Green Street, Eco City</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-400 flex-shrink-0" />
                <span>+91 3456754327</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-400 flex-shrink-0" />
                <span>demo@ecoworldbuy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} EcoWorldBuy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              <span className="text-neutral-600">|</span>
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <span className="text-neutral-600">|</span>
              <a href="#" className="hover:text-primary-400 transition-colors">Sustainability Pledge</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
