import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import AnimatedReveal from './AnimatedReveal';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  image, 
  name, 
  role, 
  delay = 0 
}) => {
  return (
    <AnimatedReveal direction="up" delay={delay}>
      <div className="group">
        <div className="relative overflow-hidden rounded-2xl mb-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full aspect-[3/4] object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <a 
              href="#" 
              className="bg-white rounded-full p-2 text-gray-800 hover:text-blue-600 hover:shadow-lg transition-all"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a 
              href="#" 
              className="bg-white rounded-full p-2 text-gray-800 hover:text-blue-600 hover:shadow-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="#" 
              className="bg-white rounded-full p-2 text-gray-800 hover:text-blue-600 hover:shadow-lg transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{role}</p>
      </div>
    </AnimatedReveal>
  );
};

export default TeamMember;