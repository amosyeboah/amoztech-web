import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';

// EmailJS configuration
// TODO: Replace these values with your actual EmailJS credentials
// 1. Sign up at https://www.emailjs.com/ (they have a free tier)
// 2. Create a service (Gmail, Outlook, etc.) and get your Service ID
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Get your Public Key from Account > API Keys
const EMAILJS_SERVICE_ID = 'service_poiokaf'; // Replace with your actual EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_irr0r5w'; // Replace with your actual EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'MkmhpGm4169pqUe7_'; // Replace with your actual EmailJS public key
const RECIPIENT_EMAIL = 'amosfrimpong56@gmail.com';


const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    to_email: RECIPIENT_EMAIL, // Add recipient email to form data
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    // Send the email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: RECIPIENT_EMAIL,
    })
    .then((response) => {
      console.log('Email sent successfully:', response);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '', to_email: RECIPIENT_EMAIL });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setFormStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors resize-none"
          placeholder="Tell us about your project"
        />
      </div>
      
      <div>
        <Button 
          type="submit" 
          size="lg" 
          className={`w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
      
      {formStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300">
          Thanks for your message! We'll get back to you soon.
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300">
          There was an error sending your message. Please try again, you can also reach us
          through whatsapp.
        </div>
      )}
    </form>
  );
};

export default ContactForm;