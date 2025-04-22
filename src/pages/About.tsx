import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/team';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CtaSection } from '../components/sections/CtaSection';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Harmony Home Decor';
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
              About Harmony Home Decor
            </h1>
            <p className="text-xl text-primary-600">
              We're passionate about helping people create spaces they love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
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
                src="https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our Story" 
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
                Our Story
              </h2>
              
              <p className="text-primary-700 mb-4">
                Harmony Home Decor was founded in 2018 by Tammy Brooks, an interior designer with a vision to make professional design services accessible to everyone.
              </p>
              
              <p className="text-primary-700 mb-4">
                After years of working with high-end clients, Tammy recognized that many homeowners wanted professional design help but were intimidated by the process or concerned about the cost. She created Harmony Home Decor to bridge this gap, offering flexible consultation services that could work for any budget.
              </p>
              
              <p className="text-primary-700 mb-4">
                Today, our team of dedicated designers shares Tammy's passion for creating beautiful, functional spaces that reflect each client's unique personality and lifestyle. We believe that everyone deserves to live in a space they love, and we're committed to making that possible through our accessible consultation services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
              Our Values
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-primary-600"
            >
              These core principles guide everything we do at Harmony Home Decor.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Accessibility',
                description: 'We believe professional design advice should be available to everyone, regardless of budget.'
              },
              {
                title: 'Client-Centered Approach',
                description: 'Your preferences and lifestyle are at the heart of our design process.'
              },
              {
                title: 'Sustainability',
                description: 'We promote environmentally responsible design choices whenever possible.'
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in design quality and client service.'
              },
              {
                title: 'Integrity',
                description: 'Honesty and transparency are fundamental to our client relationships.'
              },
              {
                title: 'Continuous Learning',
                description: 'We stay current with design trends and techniques to offer the best solutions.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg"
              >
                <div className="mb-4">
                  <CheckCircle className="h-8 w-8 text-accent-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{value.title}</h3>
                <p className="text-primary-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-semibold text-primary-800 mb-4"
            >
              Meet Our Team
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-primary-600"
            >
              Our talented designers bring diverse expertise and a passion for creating beautiful spaces.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-neutral-50 rounded-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-800 mb-1">{member.name}</h3>
                  <p className="text-accent-600 mb-4">{member.title}</p>
                  <p className="text-primary-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-accent-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-semibold text-primary-800 mb-4"
            >
              Why Choose Harmony Home Decor?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Experienced Design Team',
                description: 'Our designers have years of professional experience across various design styles.'
              },
              {
                title: 'Flexible Service Options',
                description: 'From virtual consultations to full-service design, we offer solutions for every need and budget.'
              },
              {
                title: 'Personalized Approach',
                description: 'We take the time to understand your unique style and preferences.'
              },
              {
                title: 'Clear Communication',
                description: 'We ensure you\'re informed and involved throughout the entire design process.'
              },
              {
                title: 'Quality Focus',
                description: 'We recommend durable, high-quality products that will stand the test of time.'
              },
              {
                title: 'Post-Consultation Support',
                description: 'Our relationship doesn\'t end after the consultation—we\'re available for follow-up questions.'
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-start bg-white p-6 rounded-lg"
              >
                <CheckCircle className="h-6 w-6 text-accent-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">{reason.title}</h3>
                  <p className="text-primary-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </>
  );
};