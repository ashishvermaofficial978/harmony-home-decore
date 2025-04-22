import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blog';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Harmony Home Decor Blog`;
    } else {
      navigate('/blog');
    }
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }

  // Convert markdown content to HTML (simplified version)
  const renderContent = () => {
    const lines = post.content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">{line.replace('# ', '')}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-serif font-semibold text-primary-800 mb-4 mt-8">{line.replace('## ', '')}</h2>;
      } else if (line.trim() === '') {
        return <div key={index} className="mb-4"></div>;
      } else {
        return <p key={index} className="text-primary-700 mb-4">{line}</p>;
      }
    });
  };

  return (
    <>
      {/* Page Header */}
      <section 
        className="pt-32 pb-16 bg-cover bg-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${post.image})`,
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <Link to="/blog" className="inline-flex items-center text-white/90 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/90">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-8">
                {post.categories.map((category, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center text-sm font-medium text-accent-700 bg-accent-50 px-3 py-1 rounded-full"
                  >
                    <Tag className="h-4 w-4 mr-1.5" />
                    {category}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-lg max-w-none">
                {renderContent()}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary-800 mb-8">
              You Might Also Like
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 2)
                .map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <Link to={`/blog/${relatedPost.slug}`} className="block h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary-800 mb-3">
                        <Link to={`/blog/${relatedPost.slug}`} className="hover:text-accent-700 transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-primary-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      
                      <Link 
                        to={`/blog/${relatedPost.slug}`} 
                        className="inline-flex items-center text-accent-700 hover:text-accent-800 font-medium"
                      >
                        Read article <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                      </Link>
                    </div>
                  </motion.article>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};