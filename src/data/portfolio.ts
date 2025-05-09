export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  client?: string;
  technologies?: string[];
  featured?: boolean;
  link?: string;
  year?: string;
}

const portfolio: PortfolioItem[] = [
  {
    id: 1,
    title: 'Sleek E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A modern e-commerce platform with seamless checkout experience and intuitive product management system.',
    client: 'FashionForward',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    featured: true,
    link: 'https://example.com/project1',
    year: '2024'
  },
  {
    id: 2,
    title: 'Minimalist Fitness App',
    category: 'Mobile Design',
    image: 'https://images.pexels.com/photos/3584967/pexels-photo-3584967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A clean, intuitive fitness tracking application that helps users achieve their health goals with personalized workout plans.',
    client: 'FitLife',
    technologies: ['React Native', 'Firebase', 'GraphQL'],
    featured: true,
    link: 'https://example.com/project2',
    year: '2023'
  },
  {
    id: 3,
    title: 'Creative Agency Website',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A visually stunning website for a creative agency showcasing their portfolio and services with interactive elements.',
    client: 'ArtisticVision',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    featured: false,
    link: 'https://example.com/project3',
    year: '2024'
  },
  {
    id: 4,
    title: 'Food Delivery Service',
    category: 'UI/UX Design',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A comprehensive food delivery platform with real-time order tracking and restaurant management system.',
    client: 'QuickBite',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API'],
    featured: false,
    link: 'https://example.com/project4',
    year: '2023'
  },
  {
    id: 5,
    title: 'Smart Home Dashboard',
    category: 'Web Application',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'An intuitive dashboard for controlling smart home devices with energy usage analytics and automation features.',
    client: 'SmartLiving',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'IoT Integration'],
    featured: true,
    link: 'https://example.com/project5',
    year: '2024'
  },
  {
    id: 6,
    title: 'Financial Analytics Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/7567432/pexels-photo-7567432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A powerful financial analytics platform with interactive charts and predictive modeling for investment insights.',
    client: 'InvestPro',
    technologies: ['React', 'Python', 'Django', 'D3.js'],
    featured: false,
    link: 'https://example.com/project6',
    year: '2023'
  },
  {
    id: 7,
    title: 'Educational Learning Platform',
    category: 'Web Application',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'An interactive e-learning platform with course management, video streaming, and progress tracking features.',
    client: 'EduConnect',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
    featured: false,
    link: 'https://example.com/project7',
    year: '2024'
  },
  {
    id: 8,
    title: 'Real Estate Marketplace',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A comprehensive real estate platform with property listings, virtual tours, and agent management system.',
    client: 'HomeFindr',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'ThreeJS'],
    featured: true,
    link: 'https://example.com/project8',
    year: '2023'
  }
];

export default portfolio;