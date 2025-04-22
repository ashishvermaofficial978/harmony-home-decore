import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const TermsConditions: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Harmony Home Decor';
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
              Terms & Conditions
            </h1>
            <p className="text-xl text-primary-600">
              Last updated: May 1, 2023
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Agreement to Terms</h2>
                <p className="text-primary-700 mb-4">
                  These Terms and Conditions constitute a legally binding agreement made between you and Harmony Home Decor, concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                </p>
                <p className="text-primary-700 mb-4">
                  You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Intellectual Property Rights</h2>
                <p className="text-primary-700 mb-4">
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                </p>
                <p className="text-primary-700 mb-4">
                  You are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">User Representations</h2>
                <p className="text-primary-700 mb-4">
                  By using the Site, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 text-primary-700 space-y-2">
                  <li>All registration information you submit will be true, accurate, current, and complete.</li>
                  <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                  <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                  <li>You are not a minor in the jurisdiction in which you reside.</li>
                  <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Products and Services</h2>
                <p className="text-primary-700 mb-4">
                  We make every effort to display as accurately as possible the colors, features, specifications, and details of the products and services available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products and services will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
                </p>
                <p className="text-primary-700 mb-4">
                  All products and services are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products or services at any time for any reason.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Purchases and Payment</h2>
                <p className="text-primary-700 mb-4">
                  We accept the following forms of payment:
                </p>
                <ul className="list-disc pl-6 text-primary-700 space-y-2">
                  <li>Visa</li>
                  <li>Mastercard</li>
                  <li>American Express</li>
                  <li>PayPal</li>
                </ul>
                <p className="text-primary-700 mt-4">
                  You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Contact Information</h2>
                <p className="text-primary-700 mb-4">
                  Questions about the Terms and Conditions should be sent to us at:<br />
                  <a href="mailto:tammybooks@yahoo.com" className="text-accent-700 hover:text-accent-800">tammybooks@yahoo.com</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};