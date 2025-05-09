import React, { useState, useEffect, useCallback } from 'react';
import Button from '../components/Button';
import AnimatedReveal from '../components/AnimatedReveal';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Slide state management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Slide data
  const slides = [
    {
      id: 1,
      backgroundImage: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'We Craft <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Digital Experiences</span> That Inspire',
      description: 'Award-winning web design studio creating stunning digital solutions that elevate brands and drive results.',
      images: [
        {
          src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'Creative team collaborating'
        },
        {
          src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'Web design mockup'
        },
        {
          src: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'Digital marketing strategy'
        }
      ]
    },
    {
      id: 2,
      backgroundImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Transform Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400">Brand Vision</span> Into Reality',
      description: 'Strategic design and development services tailored to your business goals and audience needs.',
      images: [
        {
          src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'Brand identity design'
        },
        {
          src: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'UX design process'
        },
        {
          src: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'Mobile app development'
        }
      ]
    },
    {
      id: 3,
      backgroundImage: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Innovative <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400">Solutions</span> For Modern Businesses',
      description: 'Cutting-edge technology combined with creative design to deliver exceptional user experiences.',
      images: [
        {
          src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'Data analytics dashboard'
        },
        {
          src: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'E-commerce solution'
        },
        {
          src: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'Cloud infrastructure'
        }
      ]
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  // Slide navigation functions
  const goToPrevSlide = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, slides.length]);

  const goToNextSlide = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, slides.length]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [currentSlide, isAnimating]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Slideshow with background images and overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark overlay */}
            <img 
              src={slide.backgroundImage} 
              alt={`Slide ${index + 1}`} 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      
      {/* Animated circles - keep for additional visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-300/10 dark:bg-blue-500/10 animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-purple-300/10 dark:bg-purple-500/10 animate-[float_12s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-[15%] left-[15%] w-80 h-80 rounded-full bg-teal-300/10 dark:bg-teal-500/10 animate-[float_10s_ease-in-out_infinite_0.5s]" />
      </div>
      
      <div className="container mx-auto px-4 py-20 z-30 relative">
        {/* Hero content - centered for slideshow */}
        <div className="max-w-6xl mx-auto">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`transition-all duration-500 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute'}`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <AnimatedReveal direction="up" key={`title-${slide.id}`}>
                    <h1 
                      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                  </AnimatedReveal>
                  
                  <AnimatedReveal direction="up" delay={0.1} key={`desc-${slide.id}`}>
                    <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      {slide.description}
                    </p>
                  </AnimatedReveal>
                  
                  <AnimatedReveal direction="up" delay={0.2} key={`buttons-${slide.id}`}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button size="lg">
                        Get Started
                      </Button>
                      <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/20">
                        View Our Work
                      </Button>
                    </div>
                  </AnimatedReveal>
                </div>
                
                {/* Slide images */}
                <div className="relative">
                  <AnimatedReveal direction="up" delay={0.3} key={`images-${slide.id}`}>
                    <div className="grid grid-cols-3 gap-4">
                      {slide.images.map((image, imgIndex) => (
                        <div 
                          key={imgIndex} 
                          className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 ${imgIndex === 0 ? 'translate-y-4' : imgIndex === 1 ? 'translate-y-0' : '-translate-y-4'}`}
                        >
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </AnimatedReveal>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Slide navigation controls */}
      <div className="absolute bottom-20 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Previous/Next buttons */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-30">
        <button 
          onClick={scrollToServices}
          className="bg-white/20 backdrop-blur-sm rounded-full p-2 shadow-md text-white hover:bg-white/30 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;