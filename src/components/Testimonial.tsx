import React from 'react';
import { Quote } from 'lucide-react';
import AnimatedReveal from './AnimatedReveal';

interface TestimonialProps {
  content: string;
  author: string;
  company: string;
  image: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  content,
  author,
  company,
  image,
  delay = 0
}) => {
  return (
    <AnimatedReveal direction="up" delay={delay}>
      <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg dark:shadow-gray-900/10 relative overflow-hidden">
        <div className="absolute -top-4 -right-4 text-blue-100 dark:text-blue-900/20 opacity-30">
          <Quote size={80} />
        </div>
        
        <div className="relative">
          <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
            "{content}"
          </p>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img 
                src={image} 
                alt={author} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">{author}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedReveal>
  );
};

export default Testimonial;