import React from 'react';
import AnimatedReveal from '../components/AnimatedReveal';
import TeamMember from '../components/TeamMember';
import team from '../data/team';
import { Check } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    'Over 100+ completed projects',
    '12+ years of industry experience',
    'Award-winning design team',
    'Trusted by Fortune 500 companies'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're a team of passionate designers and developers creating exceptional digital experiences.
            </p>
          </div>
        </AnimatedReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <AnimatedReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-900/30">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our team collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-600/10 dark:bg-blue-500/10 rounded-full -z-10" />
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal direction="right">
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Crafting Digital Excellence Since 2010
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                PixelPerfect is a premier web design and development agency with a passion for creating stunning digital experiences. We combine creativity, technical expertise, and strategic thinking to deliver solutions that help our clients achieve their business objectives.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our team consists of talented designers, developers, and strategists who work together seamlessly to bring your vision to life. We believe in a collaborative approach, working closely with our clients throughout the entire process.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
        
        <AnimatedReveal direction="up">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Meet Our Team
          </h3>
        </AnimatedReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember 
              key={member.id}
              image={member.image}
              name={member.name}
              role={member.role}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;