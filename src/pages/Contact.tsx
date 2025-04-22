import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/forms/ContactForm';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Harmony Home Decor';
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
              Contact Us
            </h1>
            <p className="text-xl text-primary-600">
              Have questions or ready to book a consultation? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif font-semibold text-primary-800 mb-6">
                  Get In Touch
                </h2>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Mail className="h-6 w-6 text-accent-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-primary-800 mb-1">Email</h3>
                      <a 
                        href="mailto:tammybooks@yahoo.com" 
                        className="text-primary-600 hover:text-accent-600 transition-colors"
                      >
                        tammybooks@yahoo.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Phone className="h-6 w-6 text-accent-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-primary-800 mb-1">Phone</h3>
                      <a 
                        href="tel:+18667923888" 
                        className="text-primary-600 hover:text-accent-600 transition-colors"
                      >
                        (866) 792-3888
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 text-accent-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-primary-800 mb-1">Address</h3>
                      <address className="text-primary-600 not-italic">
                        123 Design Street, Suite 101<br />
                        San Francisco, CA 94107
                      </address>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 text-accent-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-primary-800 mb-1">Hours</h3>
                      <p className="text-primary-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-primary-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <span 
                    className="bg-primary-100 text-primary-800 p-3 rounded-full cursor-not-allowed opacity-50"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </span>
                  <span 
                    className="bg-primary-100 text-primary-800 p-3 rounded-full cursor-not-allowed opacity-50"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </span>
                  <span 
                    className="bg-primary-100 text-primary-800 p-3 rounded-full cursor-not-allowed opacity-50"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-serif font-semibold text-primary-800 mb-6">
                Send Us a Message
              </h2>
              
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border rounded-lg overflow-hidden h-96">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d-122.43759999999999!3d37.75769999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652278394020!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};