import React, { useRef, useEffect } from 'react';
import AnimatedReveal from '../components/AnimatedReveal';

interface Industry {
  id: number;
  name: string;
  description: string;
  image: string;
}

const IndustriesSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Industry data
  const industries: Industry[] = [
    {
      id: 1,
      name: 'E-commerce & Retail',
      description: 'Digital storefronts and retail systems that streamline sales and enhance customer engagement.',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      name: 'Law Firms',
      description: 'Digital solutions for legal practices that improve client management and case tracking.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      name: 'Real Estate',
      description: 'Property management platforms and virtual tours that revolutionize the buying experience.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
    },
    {
      id: 4,
      name: 'NGO & Gov\'t Agencies',
      description: 'Transparent systems for public service delivery and impact measurement tools.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 5,
      name: 'Construction & Engineering',
      description: 'Project management tools and 3D visualization platforms for construction professionals.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      name: 'Church & Religious Organizations',
      description: 'Community engagement platforms and donation management systems for faith-based groups.',
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
    },
    {
      id: 7,
      name: 'Beauty & Cosmetic Shops',
      description: 'Appointment scheduling and inventory management systems for beauty businesses.',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    },
    {
      id: 8,
      name: 'Corporations & Institutions',
      description: 'Enterprise solutions that streamline operations and foster innovation at scale.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
  ];

  // Automatic scrolling effect
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isScrolling = false;
    let scrollDirection = 1; // 1 for right, -1 for left
    let scrollSpeed = 40.0; // pixels per frame
    let lastTimestamp = 0;
    let isPaused = false;
    
    // Clone the first few items and append them to the end for seamless looping
    const originalChildren = Array.from(slider.children);
    originalChildren.slice(0, 4).forEach(child => {
      const clone = child.cloneNode(true);
      slider.appendChild(clone);
    });

    const animate = (timestamp: number) => {
      if (!isScrolling || isPaused) {
        requestAnimationFrame(animate);
        return;
      }

      // Calculate delta time for smooth animation regardless of frame rate
      const deltaTime = timestamp - lastTimestamp;
      if (lastTimestamp !== 0 && deltaTime > 0) {
        // Move the slider
        slider.scrollLeft += scrollDirection * scrollSpeed * deltaTime * 0.1;

        // Check if we need to loop back to the beginning
        if (scrollDirection > 0 && slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth) * 0.95) {
          // When near the end, smoothly reset to the beginning
          slider.scrollLeft = 0;
        } else if (scrollDirection < 0 && slider.scrollLeft <= 0) {
          // When at the beginning and scrolling left, jump to the end
          slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
        }
      }

      lastTimestamp = timestamp;
      requestAnimationFrame(animate);
    };

    // Start animation
    isScrolling = true;
    requestAnimationFrame(animate);

    // Pause scrolling when user interacts
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    const handleTouchStart = () => {
      isPaused = true;
    };

    const handleTouchEnd = () => {
      // Add a small delay before resuming to avoid jumps
      setTimeout(() => {
        isPaused = false;
      }, 1000);
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      isScrolling = false;
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section id="industries" className="py-24 bg-white dark:bg-gray-900">
      {/* Animated circles for visual interest */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-blue-300/10 dark:bg-blue-500/10 animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute top-[50%] right-[15%] w-96 h-96 rounded-full bg-purple-300/10 dark:bg-purple-500/10 animate-[float_12s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-[20%] left-[20%] w-80 h-80 rounded-full bg-teal-300/10 dark:bg-teal-500/10 animate-[float_10s_ease-in-out_infinite_0.5s]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">We Serve</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tailored digital solutions for diverse industries, designed to address unique challenges and drive growth.
            </p>
          </div>
        </AnimatedReveal>

        {/* Industries slider */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient overlay for left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
          
          {/* Gradient overlay for right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto hide-scrollbar gap-6 py-8 px-4"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((industry) => (
              <div 
                key={industry.id}
                className="flex-shrink-0 w-[280px] bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* Circular image mask */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-600/30 dark:to-purple-600/30 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <AnimatedReveal direction="up" delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Don't see your industry? We create custom solutions for all business types.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-base py-2.5 px-6"
            >
              Contact Us For Custom Solutions
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default IndustriesSection;
