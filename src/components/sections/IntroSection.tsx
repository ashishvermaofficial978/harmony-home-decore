import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Heart, Zap } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const features = [
    {
      icon: <Heart className="h-10 w-10 text-accent-500" />,
      title: 'Personalized Design Solutions',
      description: 'Every space tells a unique story. We create custom design solutions that reflect your personality and lifestyle preferences.'
    },
    {
      icon: <Award className="h-10 w-10 text-accent-500" />,
      title: 'Professional Design Team',
      description: 'Our ASID-certified designers bring decades of combined experience in creating stunning, functional living spaces.'
    },
    {
      icon: <Zap className="h-10 w-10 text-accent-500" />,
      title: 'Streamlined Process',
      description: 'Experience our efficient consultation process, designed to deliver exceptional results while respecting your time and budget.'
    },
    {
      icon: <Clock className="h-10 w-10 text-accent-500" />,
      title: 'Convenient Scheduling',
      description: 'Choose between virtual and in-person consultations to fit your busy lifestyle, with flexible appointment times available.'
    }
  ];

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
            Transforming Spaces, Creating Harmony
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-primary-600"
          >
            We believe in the power of thoughtful design to enhance your daily life. Our consultation services help you achieve the perfect balance of beauty and functionality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">{feature.title}</h3>
              <p className="text-primary-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};