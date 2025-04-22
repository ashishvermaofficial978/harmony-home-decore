import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-no-repeat bg-cover bg-center h-screen flex items-center" 
      style={{ 
        backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)', 
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Elevate Your Living Space with Expert Design Guidance
          </h1>
          
          <p className="text-xl text-white mb-8">
            Experience the transformation of your home with our personalized interior design consultations. Professional expertise tailored to your style and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-center"
            >
              Schedule Your Free Consultation
            </Link>
            
            <Link 
              to="/services" 
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-800 font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-center"
            >
              View Our Design Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};