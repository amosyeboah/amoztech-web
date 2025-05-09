import React, { useState, useEffect } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import AnimatedReveal from '../components/AnimatedReveal';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import portfolio from '../data/portfolio';

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState(portfolio);
  
  // Get unique categories for filter
  const categories = ['all', ...new Set(portfolio.map(item => item.category))];
  
  // Filter portfolio items based on selected category
  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(portfolio);
    } else {
      setFilteredItems(portfolio.filter(item => item.category === filter));
    }
  }, [filter]);

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-blue-300/10 dark:bg-blue-500/10 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[50%] right-[5%] w-96 h-96 rounded-full bg-purple-300/10 dark:bg-purple-500/10 animate-[float_12s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-80 h-80 rounded-full bg-teal-300/10 dark:bg-teal-500/10 animate-[float_10s_ease-in-out_infinite_0.5s]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedReveal direction="up">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
              Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our portfolio of successful projects across various industries and digital platforms.
            </p>
          </div>
        </AnimatedReveal>
        
        {/* Category filters */}
        <AnimatedReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === category ? 
                  'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 
                  'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </AnimatedReveal>
        
        {/* Portfolio grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={item.featured ? 'md:col-span-2' : ''}
            >
              <PortfolioItem
                image={item.image}
                title={item.title}
                category={item.category}
                description={item.description}
                client={item.client}
                technologies={item.technologies}
                featured={item.featured}
                link={item.link}
                year={item.year}
                delay={0}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
        
        {/* CTA */}
        <AnimatedReveal direction="up" delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in working with us on your next project?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg">
                Start a Project
              </Button>
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default PortfolioSection;