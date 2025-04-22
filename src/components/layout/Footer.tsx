import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block">
              <h3 className="text-xl font-serif font-semibold mb-4 hover:text-accent-400 transition-colors">Harmony Home Decor</h3>
            </Link>
            <p className="mb-4 text-neutral-300">
              Transforming spaces into beautiful, functional environments that reflect your personal style.
            </p>
            <div className="flex space-x-4">
              <span className="text-white cursor-not-allowed opacity-50" aria-label="Facebook">
                <Facebook size={20} />
              </span>
              <span className="text-white cursor-not-allowed opacity-50" aria-label="Instagram">
                <Instagram size={20} />
              </span>
              <span className="text-white cursor-not-allowed opacity-50" aria-label="Twitter">
                <Twitter size={20} />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-neutral-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-neutral-300 hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-neutral-300 hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-neutral-300 hover:text-white transition-colors">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 flex-shrink-0 mt-1" />
                <a href="mailto:tammybooks@yahoo.com" className="text-neutral-300 hover:text-white transition-colors">
                  tammybooks@yahoo.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 flex-shrink-0 mt-1" />
                <a href="tel:+18667923888" className="text-neutral-300 hover:text-white transition-colors">
                  (866) 792-3888
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">
                  123 Design Street, Suite 101<br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8 text-center text-neutral-400">
          <p>&copy; {currentYear} Harmony Home Decor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};