import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blog';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Extract unique categories
  const allCategories = ['All', ...new Set(blogPosts.flatMap(post => post.categories))];
  
  // Filter posts by category
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.categories.includes(activeCategory));

  useEffect(() => {
    document.title = 'Blog | Harmony Home Decor';
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
              Home Decor Blog
            </h1>
            <p className="text-xl text-primary-600">
              Tips, trends, and inspiration for creating a beautiful home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {allCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`py-2 px-4 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-accent-600 text-white'
                    : 'bg-neutral-100 text-primary-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.slice(0, 2).map((category, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center text-xs font-medium text-accent-700 bg-accent-50 px-2.5 py-1 rounded-full"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-semibold text-primary-800 mb-3 line-clamp-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-accent-700 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-primary-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-primary-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-accent-700 hover:text-accent-800 font-medium"
                    >
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-primary-600">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};