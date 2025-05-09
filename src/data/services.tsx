import React from 'react';
import { 
  Monitor, 
  Code, 
  Smartphone, 
  PenTool, 
  Layers, 
  LineChart
} from 'lucide-react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  extendedDescription?: string;
  image?: string;
  features?: string[];
}

const services: Service[] = [
  {
    icon: <Monitor />,
    title: 'Web Design',
    description: 'Beautiful, responsive websites that engage users and reflect your brand identity with stunning visuals and intuitive navigation.',
    extendedDescription: 'Our web design services focus on creating visually stunning, user-friendly websites that not only look great but also perform exceptionally well. We combine aesthetics with functionality to deliver websites that engage visitors and convert them into customers.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Custom responsive designs that work on all devices',
      'User experience (UX) focused approach',
      'Brand-aligned visual elements and color schemes',
      'Intuitive navigation and information architecture',
      'Accessibility compliance and best practices',
      'Performance optimization for fast loading times'
    ]
  },
  {
    icon: <Code />,
    title: 'Web Development',
    description: 'From simple landing pages to complex web applications, we build robust, scalable solutions using the latest technologies.',
    extendedDescription: 'Our development team creates powerful, scalable web applications and sites using modern frameworks and best practices. We focus on clean code, performance, and security to ensure your web projects are built to last and easy to maintain.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    features: [
      'Front-end development with React, Vue, or Angular',
      'Back-end systems with Node.js, Python, or PHP',
      'Database design and optimization',
      'API development and integration',
      'Content Management System implementation',
      'Security best practices and regular updates'
    ]
  },
  {
    icon: <Smartphone />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices and operating systems.',
    extendedDescription: 'We design and develop mobile applications that extend your digital presence to iOS and Android devices. Our mobile apps are built with user experience at the forefront, ensuring intuitive interfaces and smooth performance across all devices.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions with React Native or Flutter',
      'Offline functionality and data synchronization',
      'Push notifications and real-time updates',
      'Integration with device features (camera, GPS, etc.)',
      'App Store and Google Play submission assistance'
    ]
  },
  {
    icon: <PenTool />,
    title: 'E-commerce and Retail Solutions',
    description: 'Tailored digital storefronts and retail systems that streamline sales, enhance customer engagement, and drive business growth.',
    extendedDescription: 'Our e-commerce solutions help businesses sell products and services online with ease. We build custom online stores that are designed to maximize conversions, streamline inventory management, and provide seamless shopping experiences.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Custom e-commerce website development',
      'Shopping cart and checkout optimization',
      'Payment gateway integration',
      'Inventory and order management systems',
      'Customer account and loyalty programs',
      'Analytics and sales reporting tools'
    ]
  },
  {
    icon: <Layers />,
    title: 'Brand Identity',
    description: 'Comprehensive brand development including logos, style guides, and visual identity systems that make your business memorable.',
    extendedDescription: 'We help businesses establish strong, cohesive brand identities that resonate with their target audience. Our branding services encompass everything from logo design to comprehensive brand guidelines that ensure consistency across all touchpoints.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Logo design and brand mark creation',
      'Color palette and typography selection',
      'Brand voice and messaging guidelines',
      'Marketing collateral design',
      'Social media visual identity',
      'Comprehensive brand style guides'
    ]
  },
  {
    icon: <LineChart />,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that increase visibility, drive traffic, and convert leads into customers through multiple channels.',
    extendedDescription: 'Our digital marketing services help businesses reach their target audience, increase brand awareness, and drive conversions. We create data-driven strategies across multiple channels to maximize your marketing ROI.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) advertising',
      'Social media marketing and management',
      'Content marketing strategy and creation',
      'Email marketing campaigns',
      'Analytics and performance reporting'
    ]
  }
];

export default services;