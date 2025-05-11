import React from 'react';
import AnimatedReveal from '../components/AnimatedReveal';
import { motion } from 'framer-motion';
import { Check, Award, Users, Clock, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: <Award className="w-6 h-6" />, value: '40+', label: 'Completed Projects' },
    { icon: <Clock className="w-6 h-6" />, value: '8+', label: 'Years Experience' },
    { icon: <Users className="w-6 h-6" />, value: '50+', label: 'Happy Clients' },
    { icon: <Star className="w-6 h-6" />, value: '15+', label: 'Recommendations' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-blue-300/10 dark:bg-blue-500/10 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[60%] left-[5%] w-96 h-96 rounded-full bg-purple-300/10 dark:bg-purple-500/10 animate-[float_12s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-80 h-80 rounded-full bg-teal-300/10 dark:bg-teal-500/10 animate-[float_10s_ease-in-out_infinite_0.5s]"></div>
      </div>

      <div className="container mx-auto px-4">
        <AnimatedReveal direction="up">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              Our Story
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're a team of passionate designers and developers creating exceptional digital experiences that drive results.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/30 transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our team collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-600/10 dark:bg-blue-500/10 rounded-full -z-10 animate-[float_8s_ease-in-out_infinite]" />
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-purple-600/10 dark:bg-purple-500/10 rounded-full -z-10 animate-[float_12s_ease-in-out_infinite_1s]" />
            </div>
          </AnimatedReveal>

          <AnimatedReveal direction="right">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  At amozTech, we're dedicated to transforming businesses through innovative digital solutions. Our mission is to create exceptional web experiences that not only look stunning but also drive real business results.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We combine creativity with technical expertise to deliver solutions that are both beautiful and functional. Our collaborative approach ensures that we understand your needs and exceed your expectations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-gray-900/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>

        <AnimatedReveal direction="up">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-blue-100 mb-6">
                  Let's create something amazing together. Our team is ready to help you achieve your digital goals.
                </p>
                <motion.button
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
              <div className="hidden md:block">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/10 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default AboutSection;