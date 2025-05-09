import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import AnimatedReveal from '../components/AnimatedReveal';
import { ChevronLeft, ChevronRight, ArrowRight, Code, Layers, Zap } from 'lucide-react';

const HeroSection2: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<number | null>(null);
  
  const slides = [
    {
      id: 1,
      title: "Crafting Digital <span class='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Experiences</span>",
      subtitle: "We build websites that convert visitors into customers",
      description: "Our team of designers and developers work together to create beautiful, functional websites that drive results for your business.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Start Your Project",
      secondaryCta: "View Our Work",
      icon: <Code className="w-12 h-12 text-indigo-500" />,
      stats: [
        { value: "98%", label: "Client Satisfaction" },
        { value: "250+", label: "Projects Delivered" },
        { value: "15+", label: "Industry Awards" }
      ]
    },
    {
      id: 2,
      title: "Strategic <span class='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500'>Solutions</span> for Growth",
      subtitle: "Data-driven design that delivers measurable results",
      description: "We combine beautiful design with strategic thinking to create websites that not only look great but also perform exceptionally well.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Grow Your Business",
      secondaryCta: "Our Approach",
      icon: <Layers className="w-12 h-12 text-teal-500" />,
      stats: [
        { value: "320%", label: "Avg. ROI" },
        { value: "75%", label: "Conversion Increase" },
        { value: "24/7", label: "Support" }
      ]
    },
    {
      id: 3,
      title: "Innovative <span class='text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500'>Technology</span> Solutions",
      subtitle: "Cutting-edge development for modern businesses",
      description: "We leverage the latest technologies to build fast, secure, and scalable digital solutions that help your business stay ahead of the competition.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Explore Technologies",
      secondaryCta: "Our Process",
      icon: <Zap className="w-12 h-12 text-orange-500" />,
      stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "0.8s", label: "Avg. Load Time" },
        { value: "100%", label: "Mobile Optimized" }
      ]
    }
  ];

  // Handle autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 6000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, slides.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false);
  const handleMouseLeave = () => setIsAutoplay(true);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      id="hero2" 
      className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 10 L40 10 M10 0 L10 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl animate-[float_15s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-teal-400/20 to-green-400/20 blur-3xl animate-[float_20s_ease-in-out_infinite_reverse]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 min-h-[80vh]">
          {/* Content side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              {slides.map((slide, index) => (
                currentSlide === index && (
                  <motion.div 
                    key={slide.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <AnimatedReveal direction="up">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-100 dark:bg-gray-800 mb-6">
                        {slide.icon}
                      </div>
                    </AnimatedReveal>
                    
                    <AnimatedReveal direction="up" delay={0.1}>
                      <h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                    </AnimatedReveal>
                    
                    <AnimatedReveal direction="up" delay={0.2}>
                      <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
                        {slide.subtitle}
                      </p>
                    </AnimatedReveal>
                    
                    <AnimatedReveal direction="up" delay={0.3}>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                        {slide.description}
                      </p>
                    </AnimatedReveal>
                    
                    <AnimatedReveal direction="up" delay={0.4}>
                      <div className="flex flex-wrap gap-4 mt-8">
                        <Button size="lg">
                          {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg">
                          {slide.secondaryCta}
                        </Button>
                      </div>
                    </AnimatedReveal>
                    
                    <AnimatedReveal direction="up" delay={0.5}>
                      <div className="grid grid-cols-3 gap-4 mt-12">
                        {slide.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AnimatedReveal>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          {/* Image side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={slide.image} 
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-24 h-24 border-4 border-white/30 rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-16 h-16 border-4 border-white/30 rounded-lg"></div>
                </div>
              ))}
              
              {/* Navigation arrows */}
              <button 
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Slide indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentSlide === index 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-gray-200 dark:border-gray-700 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gray-200 dark:border-gray-700 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
