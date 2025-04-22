import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { CheckCircle } from 'lucide-react';
import { CtaSection } from '../components/sections/CtaSection';

export const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | Harmony Home Decor';
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-800 mb-6">
              Our Design Consultation Services
            </h1>
            <p className="text-xl text-primary-600">
              Tailored solutions to transform your space, regardless of your budget or timeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="w-full md:w-2/5 h-64 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="w-full md:w-3/5">
                  <h2 className="text-2xl font-serif font-semibold text-primary-800 mb-3">
                    {service.title}
                  </h2>
                  
                  <p className="text-primary-600 mb-4">{service.description}</p>
                  
                  <p className="text-xl font-medium text-accent-600 mb-6">{service.price}</p>
                  
                  <Link 
                    to="/contact" 
                    className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-300"
                  >
                    Book this Service
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-semibold text-primary-800 mb-4"
            >
              Our Consultation Process
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-primary-600"
            >
              We've designed a streamlined process to help you achieve your design goals efficiently.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Initial Consultation',
                description: 'We discuss your needs, preferences, and budget to understand your vision fully.'
              },
              {
                number: '02',
                title: 'Design Proposal',
                description: 'Based on our consultation, we prepare a customized design proposal.'
              },
              {
                number: '03',
                title: 'Refinement',
                description: 'We refine the design based on your feedback until you\'re completely satisfied.'
              },
              {
                number: '04',
                title: 'Implementation',
                description: 'We provide detailed guidance on implementing the design, with optional ongoing support.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg relative"
              >
                <div className="absolute -top-5 -left-5 bg-accent-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold text-primary-800 mt-4 mb-3">{step.title}</h3>
                <p className="text-primary-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/1125135/pexels-photo-1125135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Design Consultations" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-800 mb-6">
                The Benefits of Professional Design Consultation
              </h2>
              
              <ul className="space-y-4">
                {[
                  'Save time and money by avoiding costly design mistakes',
                  'Access to professional expertise and industry knowledge',
                  'Personalized solutions tailored to your specific needs',
                  'Guidance on prioritizing design elements based on your budget',
                  'Fresh perspectives to maximize your space\'s potential',
                  'Connections to trusted vendors and contractors'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-primary-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link 
                  to="/contact" 
                  className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Book Your Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};