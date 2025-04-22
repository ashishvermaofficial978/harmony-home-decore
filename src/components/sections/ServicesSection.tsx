import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-semibold text-primary-800 mb-4"
          >
            Our Consultation Services
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-primary-600"
          >
            We offer a range of design consultation services to meet your specific needs and budget.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{service.title}</h3>
                <p className="text-primary-600 mb-4">{service.description}</p>
                <p className="font-medium text-accent-600 mb-4">{service.price}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-accent-700 hover:text-accent-800 font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};