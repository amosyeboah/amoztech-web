import React, { useState } from 'react';
import { ExternalLink, Calendar, User, Code } from 'lucide-react';
import AnimatedReveal from './AnimatedReveal';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  description?: string;
  client?: string;
  technologies?: string[];
  featured?: boolean;
  link?: string;
  year?: string;
  delay?: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  image,
  title,
  category,
  description,
  client,
  technologies,
  featured = false,
  link,
  year,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle click to expand/collapse the portfolio item
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AnimatedReveal direction="up" delay={delay}>
      <motion.div 
        className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ${featured ? 'md:col-span-2' : ''} ${isExpanded ? 'z-50' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        layout
      >
        {/* Badge for featured projects */}
        {featured && (
          <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
            Featured
          </div>
        )}
        
        {/* Project image */}
        <div className={`overflow-hidden ${isExpanded ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${(isHovered || isExpanded) ? 'scale-110 brightness-90' : 'scale-100'}`}
          />
        </div>
        
        {/* Overlay content */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 flex flex-col justify-end transition-all duration-300 ${isExpanded ? 'opacity-100' : (isHovered ? 'opacity-100' : 'opacity-0')}`}
          initial={false}
          animate={isExpanded ? { height: '100%' } : { height: '100%' }}
        >
          <motion.div 
            className="transform transition-all duration-300 ease-out"
            initial={false}
            animate={isExpanded ? { y: 0 } : { y: isHovered ? 0 : 20 }}
          >
            {/* Category */}
            <div className="text-sm font-medium text-blue-400 mb-2 flex items-center">
              <span className="inline-block w-6 h-0.5 bg-blue-400 mr-2"></span>
              {category}
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
            
            {/* Description - only visible when expanded */}
            {isExpanded && description && (
              <motion.p 
                className="text-gray-300 mb-6 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {description}
              </motion.p>
            )}
            
            {/* Project details - only visible when expanded */}
            {isExpanded && (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {client && (
                  <div className="flex items-start">
                    <User className="w-4 h-4 text-blue-400 mr-2 mt-1 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Client</div>
                      <div className="text-white">{client}</div>
                    </div>
                  </div>
                )}
                
                {year && (
                  <div className="flex items-start">
                    <Calendar className="w-4 h-4 text-blue-400 mr-2 mt-1 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Year</div>
                      <div className="text-white">{year}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
            
            {/* Technologies - only visible when expanded */}
            {isExpanded && technologies && technologies.length > 0 && (
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center mb-2">
                  <Code className="w-4 h-4 text-blue-400 mr-2" />
                  <div className="text-xs text-gray-400">Technologies</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* View project link */}
            <motion.a 
              href={link || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-white text-sm font-medium hover:text-blue-400 transition-colors group"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ x: 5 }}
              initial={false}
              animate={isExpanded ? { opacity: 1 } : { opacity: isHovered ? 1 : 0 }}
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Expand/collapse indicator */}
        <div className="absolute bottom-4 right-4 z-20">
          <button 
            className={`w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            <span className="text-white text-xl font-thin">{isExpanded ? '×' : '+'}</span>
          </button>
        </div>
      </motion.div>
    </AnimatedReveal>
  );
};

export default PortfolioItem;