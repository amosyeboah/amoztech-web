import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HeroSection from './sections/HeroSection';
import HeroSection2 from './sections/HeroSection2';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import AboutSection from './sections/AboutSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import IndustriesSection from './sections/IndustriesSection';
import ContactSection from './sections/ContactSection';

// Import custom styles
import './styles/custom.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          {/* You can toggle between the two hero sections by commenting one out */}
          {/* <HeroSection /> */}
          <HeroSection2 />
          <ServicesSection />
          <PricingSection />
          <IndustriesSection />
          <PortfolioSection />
          <AboutSection />
          <TestimonialsSection />
          {/* WhatsApp floating button */}
          <WhatsAppButton phoneNumber="+233 240 8570 85" message="Hi! I'd like to discuss your services." />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;