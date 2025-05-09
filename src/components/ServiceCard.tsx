import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedReveal from './AnimatedReveal';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedReveal 
      direction="up" 
      delay={delay} 
      className="h-full"
    >
      <div
        className={`h-full p-8 rounded-2xl transition-all duration-300 group relative overflow-hidden
          ${isHovered ? 'bg-blue-600 dark:bg-blue-700 text-white' : 'bg-white dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-gray-100 shadow-lg dark:shadow-gray-900/10'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`text-5xl mb-6 transition-colors duration-300 
          ${isHovered ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        
        <p className={`mb-6 transition-colors duration-300
          ${isHovered ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>
          {description}
        </p>
        
        <div className={`flex items-center font-medium transition-all duration-300 
          ${isHovered ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}
        >
          <span>Learn more</span>
          <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 
            ${isHovered ? 'transform translate-x-1' : ''}`} 
          />
        </div>
        
        <div className={`absolute w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/30 top-0 left-0 transition-opacity duration-300 
          ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
        />
      </div>
    </AnimatedReveal>
  );
};

export default ServiceCard;