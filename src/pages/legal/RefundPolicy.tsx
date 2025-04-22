import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const RefundPolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'Refund Policy | Harmony Home Decor';
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
              Refund & Cancellation Policy
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
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Consultation Services</h2>
                <p className="text-primary-700 mb-4">
                  We strive to provide exceptional design consultation services that meet your needs and expectations. However, we understand that circumstances may change. Our refund and cancellation policy for consultation services is as follows:
                </p>
                <ul className="list-disc pl-6 text-primary-700 space-y-2">
                  <li><strong>Cancellation with more than 48 hours notice:</strong> Full refund of any deposit paid.</li>
                  <li><strong>Cancellation with less than 48 hours notice:</strong> 50% refund of deposit paid.</li>
                  <li><strong>No-show:</strong> No refund of deposit.</li>
                  <li><strong>Rescheduling:</strong> You may reschedule your consultation once with at least 24 hours notice at no additional charge.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Design Packages</h2>
                <p className="text-primary-700 mb-4">
                  For our comprehensive design packages, the following refund policy applies:
                </p>
                <ul className="list-disc pl-6 text-primary-700 space-y-2">
                  <li><strong>Cancellation before work begins:</strong> 90% refund of payment made.</li>
                  <li><strong>Cancellation after initial consultation but before design work:</strong> 70% refund.</li>
                  <li><strong>Cancellation after design work has begun:</strong> Prorated refund based on work completed.</li>
                  <li><strong>Cancellation after design work is complete:</strong> No refund available.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Satisfaction Guarantee</h2>
                <p className="text-primary-700 mb-4">
                  Your satisfaction is our priority. If you are not completely satisfied with our services, please contact us within 7 days of your consultation or receipt of your design package. We will work with you to address your concerns and ensure you are happy with the results.
                </p>
                <p className="text-primary-700 mb-4">
                  If we are unable to resolve your concerns to your satisfaction, we will offer a partial refund or credit toward future services, determined on a case-by-case basis.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">How to Request a Refund</h2>
                <p className="text-primary-700 mb-4">
                  To request a refund, please contact us at <a href="mailto:tammybooks@yahoo.com" className="text-accent-700 hover:text-accent-800">tammybooks@yahoo.com</a> with the following information:
                </p>
                <ul className="list-disc pl-6 text-primary-700 space-y-2">
                  <li>Your full name</li>
                  <li>Date of service or purchase</li>
                  <li>Description of the service purchased</li>
                  <li>Reason for requesting a refund</li>
                  <li>Receipt or confirmation number</li>
                </ul>
                <p className="text-primary-700 mt-4">
                  We will respond to your refund request within 3 business days.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Refund Processing</h2>
                <p className="text-primary-700 mb-4">
                  Approved refunds will be processed back to the original payment method used for the purchase. Please allow 5-10 business days for the refund to appear in your account, depending on your financial institution.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Changes to This Policy</h2>
                <p className="text-primary-700 mb-4">
                  We may update our Refund and Cancellation Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
                <p className="text-primary-700 mb-4">
                  You are advised to review this policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Contact Information</h2>
                <p className="text-primary-700 mb-4">
                  If you have any questions about our Refund and Cancellation Policy, please contact us at:<br />
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