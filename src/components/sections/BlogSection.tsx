import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blog';
import { Calendar, ArrowRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
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
            Design Tips & Inspiration
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-primary-600"
          >
            Explore our blog for the latest home decor trends, practical design advice, and creative inspiration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-primary-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-primary-800 mb-3">
                  <Link to={`/blog/${post.slug}`} className="hover:text-accent-700 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-primary-600 mb-4">{post.excerpt}</p>
                
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-accent-700 hover:text-accent-800 font-medium"
                >
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-accent-700 hover:text-accent-800 font-medium text-lg"
          >
            Browse all articles <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};