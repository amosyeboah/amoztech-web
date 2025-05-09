import React from 'react';
import Testimonial from '../components/Testimonial';
import AnimatedReveal from '../components/AnimatedReveal';
import testimonials from '../data/testimonials';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100 dark:bg-blue-900/20" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-purple-100 dark:bg-purple-900/20" />
      </div>
      
      <div className="container mx-auto px-4">
        <AnimatedReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
        </AnimatedReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={testimonial.id}
              content={testimonial.content}
              author={testimonial.author}
              company={testimonial.company}
              image={testimonial.image}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;