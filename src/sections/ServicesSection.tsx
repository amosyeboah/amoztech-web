import React, { useState, useEffect } from 'react';
import AnimatedReveal from '../components/AnimatedReveal';
import Button from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import services from '../data/services';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);
  
  // Set first service as active by default
  useEffect(() => {
    setActiveService(0);
  }, []);
  
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-blue-300/10 dark:bg-blue-500/10 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[60%] left-[5%] w-96 h-96 rounded-full bg-purple-300/10 dark:bg-purple-500/10 animate-[float_12s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-80 h-80 rounded-full bg-teal-300/10 dark:bg-teal-500/10 animate-[float_10s_ease-in-out_infinite_0.5s]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 10 L40 10 M10 0 L10 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedReveal direction="up">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div 
              className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                What We Offer
              </motion.span>
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, type: "spring", damping: 12 }}
              >
                Our <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Services
                </motion.span>
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {"We provide end-to-end digital solutions to help businesses establish a strong online presence and achieve their goals."
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.03, duration: 0.3 }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
            </motion.p>
          </div>
        </AnimatedReveal>
        
        {/* Services grid with hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Services navigation */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            {services.map((service, index) => (
              <AnimatedReveal key={service.title} direction="left" delay={0.1 * index}>
                <motion.div 
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeService === index ? 
                    'bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/10 border-l-4 border-blue-500' : 
                    'bg-gray-100/50 dark:bg-gray-800/50 hover:bg-white hover:dark:bg-gray-800 hover:shadow-lg'}`}
                  onClick={() => setActiveService(index)}
                  whileHover={{ x: activeService === index ? 0 : 5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex items-start">
                    <motion.div 
                      className={`p-3 rounded-lg mr-4 ${activeService === index ? 
                        'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 
                        'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                      animate={{ 
                        scale: activeService === index ? [1, 1.2, 1] : 1,
                        rotate: activeService === index ? [0, 10, 0] : 0
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-lg font-semibold text-gray-900 dark:text-white mb-1"
                        animate={{ 
                          color: activeService === index ? "#3b82f6" : "" 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2"
                        initial={{ opacity: 0.8 }}
                        animate={{ 
                          opacity: activeService === index ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedReveal>
            ))}
          </div>
          
          {/* Service details */}
          <div className="md:col-span-8 lg:col-span-9 relative min-h-[600px] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/10">
            {/* Navigation arrows */}
            <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
              <motion.button
                className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
                onClick={() => setActiveService((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                aria-label="Previous service"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
              <motion.button
                className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
                onClick={() => setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                aria-label="Next service"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: activeService === index ? 1 : 0,
                  x: activeService === index ? 0 : 50
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ 
                  pointerEvents: activeService === index ? 'auto' : 'none',
                  zIndex: activeService === index ? 10 : 0
                }}
              >
                <div className="h-full">
                  {/* Service image */}
                  <div className="w-full h-64 relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <motion.div 
                        className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100/90 dark:bg-blue-900/90 text-blue-600 dark:text-blue-400 text-3xl mb-4"
                        initial={{ opacity: 0, scale: 0, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                      >
                        {service.icon}
                      </motion.div>
                      <div className="overflow-hidden">
                        <motion.h3 
                          className="text-2xl md:text-3xl font-bold text-white mb-2"
                          initial={{ y: 50 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {service.title.split('').map((char, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + (i * 0.03), duration: 0.3 }}
                            >
                              {char}
                            </motion.span>
                          ))}
                        </motion.h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Service content */}
                  <div className="p-8 md:p-10">
                    <motion.div 
                      className="prose prose-lg dark:prose-invert max-w-none mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <motion.p 
                        className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {service.extendedDescription}
                      </motion.p>
                    </motion.div>
                    
                    {/* Features list */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <motion.h4 
                        className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        Key Features
                      </motion.h4>
                      <div className="relative">
                        <div className="max-h-[180px] overflow-y-auto md:max-h-none md:overflow-visible custom-scrollbar border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-2 bg-blue-50/50 dark:bg-blue-900/10">
                          {/* Mobile scroll indicator */}
                          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-100/80 dark:from-blue-900/50 to-transparent pointer-events-none md:hidden rounded-b-lg"></div>
                          <div className="text-xs text-center text-blue-500 font-medium mb-2 md:hidden">Scroll to see more features</div>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        {service.features?.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 + (idx * 0.1) }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 300, delay: 0.7 + (idx * 0.1) }}
                            >
                              <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 shrink-0 mt-0.5" />
                            </motion.div>
                            <motion.span 
                              className="text-gray-700 dark:text-gray-300"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.8 + (idx * 0.1) }}
                            >
                              {feature}
                            </motion.span>
                          </motion.li>
                        ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Button>
                          Learn More About {service.title} <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                          >
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </motion.span>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-8 border-blue-100/50 dark:border-blue-900/20 z-0"></div>
                <div className="absolute top-10 right-10 w-20 h-20 rounded-lg border-4 border-purple-100/50 dark:border-purple-900/20 z-0"></div>
                
                {/* Service pagination indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                  {services.map((_, idx) => (
                    <motion.button
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-full ${activeService === idx ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                      onClick={() => setActiveService(idx)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{ scale: activeService === idx ? [1, 1.2, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                      aria-label={`Go to service ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <AnimatedReveal direction="up" delay={0.3}>
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {"Looking for a custom solution for your business?".split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.05), duration: 0.3 }}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="secondary" size="lg">
                Get a Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default ServicesSection;