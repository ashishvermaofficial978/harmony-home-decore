import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const CookiePolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'Cookie Policy | Harmony Home Decor';
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
              Cookie Policy
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
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">What Are Cookies</h2>
                <p className="text-primary-700 mb-4">
                  Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Site or a third-party to recognize you and make your next visit easier and the Site more useful to you.
                </p>
                <p className="text-primary-700 mb-4">
                  Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">How We Use Cookies</h2>
                <p className="text-primary-700 mb-4">
                  When you use and access the Site, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-primary-700 space-y-2">
                  <li>To enable certain functions of the Site</li>
                  <li>To provide analytics</li>
                  <li>To store your preferences</li>
                  <li>To enable advertisements delivery, including behavioral advertising</li>
                </ul>
                <p className="text-primary-700 mt-4">
                  We use both session and persistent cookies on the Site and we use different types of cookies to run the Site:
                </p>
                <ul className="list-disc pl-6 text-primary-700 space-y-2">
                  <li><strong>Essential cookies.</strong> We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
                  <li><strong>Preferences cookies.</strong> We may use preferences cookies to remember information that changes the way the Site behaves or looks, such as the "remember me" functionality.</li>
                  <li><strong>Analytics cookies.</strong> We may use analytics cookies to track information how the Site is used so that we can make improvements.</li>
                  <li><strong>Advertising cookies.</strong> These cookies collect information about your visit to our website, the content you viewed, the links you followed and information about your browser, device, and your IP address.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Third-Party Cookies</h2>
                <p className="text-primary-700 mb-4">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Site, deliver advertisements on and through the Site, and so on.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">What Are Your Choices Regarding Cookies</h2>
                <p className="text-primary-700 mb-4">
                  If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
                </p>
                <p className="text-primary-700 mb-4">
                  Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">More Information About Cookies</h2>
                <p className="text-primary-700 mb-4">
                  You can learn more about cookies at the following third-party websites:
                </p>
                <ul className="list-disc pl-6 text-primary-700 space-y-2">
                  <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/" className="text-accent-700 hover:text-accent-800">http://www.networkadvertising.org/</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">Contact Information</h2>
                <p className="text-primary-700 mb-4">
                  If you have any questions about our Cookie Policy, please contact us at:<br />
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