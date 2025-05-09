import React, { useState, useEffect } from 'react';
import AnimatedReveal from '../components/AnimatedReveal';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import services from '../data/services';
import { ArrowRight, Check } from 'lucide-react';

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
            <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Services</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We provide end-to-end digital solutions to help businesses establish a strong online presence and achieve their goals.
            </p>
          </div>
        </AnimatedReveal>
        
        {/* Services grid with hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Services navigation */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            {services.map((service, index) => (
              <AnimatedReveal key={service.title} direction="left" delay={0.1 * index}>
                <div 
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeService === index ? 
                    'bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/10 border-l-4 border-blue-500' : 
                    'bg-gray-100/50 dark:bg-gray-800/50 hover:bg-white hover:dark:bg-gray-800 hover:shadow-lg'}`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg mr-4 ${activeService === index ? 
                      'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 
                      'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{service.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          
          {/* Service details */}
          <div className="md:col-span-8 lg:col-span-9 relative min-h-[600px] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/10">
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
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100/90 dark:bg-blue-900/90 text-blue-600 dark:text-blue-400 text-3xl mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.title}</h3>
                    </div>
                  </div>
                  
                  {/* Service content */}
                  <div className="p-8 md:p-10">
                    <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        {service.extendedDescription}
                      </p>
                    </div>
                    
                    {/* Features list */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        {service.features?.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <Button>
                        Learn More About {service.title} <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-8 border-blue-100/50 dark:border-blue-900/20 z-0"></div>
                <div className="absolute top-10 right-10 w-20 h-20 rounded-lg border-4 border-purple-100/50 dark:border-purple-900/20 z-0"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <AnimatedReveal direction="up" delay={0.3}>
          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Looking for a custom solution for your business?  
            </p>
            <Button variant="secondary" size="lg">
              Get a Free Consultation
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default ServicesSection;