import React, { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  speed = 0.3,
  className = '',
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const elementTop = ref.current.getBoundingClientRect().top;
      const elementHeight = ref.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const distanceFromCenter = elementTop - windowHeight / 2 + elementHeight / 2;
      
      // Calculate parallax offset
      const newOffset = distanceFromCenter * speed;
      setOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: `url(${src})`,
          transform: `translateY(${offset}px)`,
        }}
        title={alt}
        role="img"
        aria-label={alt}
      />
    </div>
  );
};

export default ParallaxImage;