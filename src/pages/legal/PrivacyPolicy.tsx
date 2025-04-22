import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Harmony Home Decor';
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
              Privacy Policy
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
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Introduction</h2>
                <p className="text-primary-700 mb-4">
                  Harmony Home Decor ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Information We Collect</h2>
                <p className="text-primary-700 mb-4">
                  We collect several types of information from and about users of our website, including:
                </p>
                <ul className="list-disc pl-6 text-primary-700 space-y-2">
                  <li>Personal information such as name, email address, phone number, and postal address when you fill out our contact form or book a consultation.</li>
                  <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
                  <li>Information collected through cookies, web beacons, and other tracking technologies.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">How We Use Your Information</h2>
                <p className="text-primary-700 mb-4">
                  We use information that we collect about you or that you provide to us:
                </p>
                <ul className="list-disc pl-6 text-primary-700 space-y-2">
                  <li>To present our website and its contents to you.</li>
                  <li>To provide you with information, products, or services that you request from us.</li>
                  <li>To fulfill any other purpose for which you provide it.</li>
                  <li>To carry out our obligations and enforce our rights.</li>
                  <li>To notify you about changes to our website or any products or services we offer.</li>
                  <li>For any other purpose with your consent.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Disclosure of Your Information</h2>
                <p className="text-primary-700 mb-4">
                  We may disclose personal information that we collect or you provide:
                </p>
                <ul className="list-disc pl-6 text-primary-700 space-y-2">
                  <li>To contractors, service providers, and other third parties we use to support our business.</li>
                  <li>To comply with any court order, law, or legal process.</li>
                  <li>To enforce or apply our terms of use and other agreements.</li>
                  <li>If we believe disclosure is necessary to protect the rights, property, or safety of Harmony Home Decor, our customers, or others.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Data Security</h2>
                <p className="text-primary-700 mb-4">
                  We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Changes to Our Privacy Policy</h2>
                <p className="text-primary-700 mb-4">
                  We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will post the new privacy policy on this page and notify you through a notice on the website home page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Contact Information</h2>
                <p className="text-primary-700 mb-4">
                  To ask questions or comment about this privacy policy and our privacy practices, contact us at:<br />
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