import React from 'react';
import ContactForm from '../components/ContactForm';
import AnimatedReveal from '../components/AnimatedReveal';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? Contact us today and let's create something amazing together.
            </p>
          </div>
        </AnimatedReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedReveal direction="left">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/20 p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              
              <ContactForm />
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal direction="right">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Visit Us</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Design Street<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email Us</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      hello@pixelperfect.design<br />
                      careers@pixelperfect.design
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Call Us</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +1 (555) 123-4567<br />
                      Mon-Fri, 9am-6pm PST
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Office Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                    <span className="text-gray-900 dark:text-white font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                    <span className="text-gray-900 dark:text-white font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                    <span className="text-gray-900 dark:text-white font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;const EMAILJS_SERVICE_ID = 'service_poiokaf';
const EMAILJS_TEMPLATE_ID = 'template_irr0r5w';
const EMAILJS_PUBLIC_KEY = 'MkmhpGm4169pqUe7_';