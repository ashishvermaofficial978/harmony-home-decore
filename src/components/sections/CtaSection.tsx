import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-accent-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Book a free 30-minute consultation and take the first step toward creating the home of your dreams.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="inline-block bg-white hover:bg-neutral-100 text-accent-700 font-medium py-3 px-10 rounded-lg transition-colors duration-300 text-lg"
            >
              Book Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};