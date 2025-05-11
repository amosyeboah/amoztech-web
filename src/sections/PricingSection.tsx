import React, { useState } from 'react';
import Button from '../components/Button';
import AnimatedReveal from '../components/AnimatedReveal';
import { Check, X } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: number;
  name: string;
  description: string;
  price: {
    ghana: number;
    international: number;
  };
  featured: boolean;
  features: PricingFeature[];
  cta: string;
  color: string;
  completionPeriod: string;
}

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'ghana' | 'international'>('ghana');
  const [animatedText, setAnimatedText] = useState('Pricing');
  const [animationIndex, setAnimationIndex] = useState(0);
  
  // Text animation effect
  React.useEffect(() => {
    const textOptions = ['Pricing', 'Plans', 'Packages', 'Options'];
    
    const interval = setInterval(() => {
      setAnimatedText('');
      setTimeout(() => {
        setAnimationIndex((prev) => (prev + 1) % textOptions.length);
        setAnimatedText(textOptions[(animationIndex + 1) % textOptions.length]);
      }, 200);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [animationIndex]);
  
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: 'Basic',
      description: 'Essential features for small businesses / startups',
      price: {
        ghana: 1050,
        international: 99,
      },
      featured: false,
      features: [

        { text: 'Responsive Website Design', included: true },
        { text: 'Free Domain', included: true },
        { text: 'Free SSL Certificate', included: true },
        { text: 'Free Hosting', included: true },
        { text: '4 Pages Included', included: true },
        { text: 'Basic SEO Optimization', included: true },
        { text: 'Contact Form Integration', included: true },
        { text: 'Social Media Integration', included: false },
        { text: 'E-commerce Functionality', included: false },
        { text: 'Custom Animations', included: false },
        { text: 'Priority Support', included: false },
      ],
      cta: 'Get Started',
      color: 'blue',
      completionPeriod: '3 days',
    },
    {
      id: 2,
      name: 'Professional',
      description: 'Complete solution for growing businesses',
      price: {
        ghana: 1499,
        international: 140,
      },
      featured: true,
      features: [
        { text: 'Responsive Website Design', included: true },
        { text: 'Free Domain', included: true },
        { text: 'Free SSL Certificate', included: true },
        { text: 'Free Hosting', included: true },
        { text: '7 Pages Included', included: true },
        { text: 'Intermediate SEO Optimization', included: true },
        { text: 'Contact Form Integration', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'E-commerce Functionality', included: false},
        { text: 'Custom Animations', included: false },
        { text: 'Priority Support', included: false },
      ],
      cta: 'Get Professional',
      color: 'teal',
      completionPeriod: '1-2 weeks',
    },
    {
      id: 3,
      name: 'Business',
      description: 'Advanced features for established businesses',
      price: {
        ghana: 2499,
        international: 200,
      },
      featured: false,
      features: [
        { text: 'Responsive Website Design', included: true },
        { text: 'Free Domain', included: true },
        { text: 'Free SSL Certificate', included: true },
        { text: 'Free Hosting', included: true },
        { text: '10 Pages Included', included: true },
        { text: 'Advanced SEO Optimization', included: true },
        { text: 'Contact Form Integration', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'E-commerce Functionality', included: true },
        { text: 'Custom Animations', included: true },
        { text: 'Priority Support', included: false },
      ],
      cta: 'Choose Business',
      color: 'purple',
      completionPeriod: '2-4 weeks',
    },
    {
      id: 4,
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: {
        ghana: 4500,
        international: 500,
      },
      featured: false,
      features: [
        { text: 'Responsive Website Design', included: true },
        { text: 'Free Domain', included: true },
        { text: 'Free SSL Certificate', included: true },
        { text: 'Free Hosting', included: true },
        { text: 'Unlimited Pages', included: true },
        { text: 'Advanced SEO Optimization', included: true },
        { text: 'Contact Form Integration', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'E-commerce Functionality', included: true },
        { text: 'Custom Animations', included: true },
        { text: 'Priority Support', included: true },
      ],
      cta: 'Contact Sales',
      color: 'orange',
      completionPeriod: '6-8 weeks',
    },
  ];

  // Get the color classes based on the plan's color property
  const getColorClasses = (color: string, featured: boolean) => {
    const colorMap: Record<string, { border: string, bg: string, text: string, hover: string, shadow: string }> = {
      blue: {
        border: featured ? 'border-blue-500' : 'border-blue-200 dark:border-blue-800',
        bg: featured ? 'bg-blue-500' : 'bg-white dark:bg-gray-800',
        text: featured ? 'text-white' : 'text-blue-500 dark:text-blue-400',
        hover: 'hover:border-blue-600 hover:shadow-blue-100 dark:hover:shadow-blue-900/20',
        shadow: 'shadow-blue-100/50 dark:shadow-blue-900/20',
      },
      teal: {
        border: featured ? 'border-teal-500' : 'border-teal-200 dark:border-teal-800',
        bg: featured ? 'bg-teal-500' : 'bg-white dark:bg-gray-800',
        text: featured ? 'text-white' : 'text-teal-500 dark:text-teal-400',
        hover: 'hover:border-teal-600 hover:shadow-teal-100 dark:hover:shadow-teal-900/20',
        shadow: 'shadow-teal-100/50 dark:shadow-teal-900/20',
      },
      purple: {
        border: featured ? 'border-purple-500' : 'border-purple-200 dark:border-purple-800',
        bg: featured ? 'bg-purple-500' : 'bg-white dark:bg-gray-800',
        text: featured ? 'text-white' : 'text-purple-500 dark:text-purple-400',
        hover: 'hover:border-purple-600 hover:shadow-purple-100 dark:hover:shadow-purple-900/20',
        shadow: 'shadow-purple-100/50 dark:shadow-purple-900/20',
      },
      orange: {
        border: featured ? 'border-orange-500' : 'border-orange-200 dark:border-orange-800',
        bg: featured ? 'bg-orange-500' : 'bg-white dark:bg-gray-800',
        text: featured ? 'text-white' : 'text-orange-500 dark:text-orange-400',
        hover: 'hover:border-orange-600 hover:shadow-orange-100 dark:hover:shadow-orange-900/20',
        shadow: 'shadow-orange-100/50 dark:shadow-orange-900/20',
      },
    };

    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      {/* Animated circles for visual interest */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-300/10 dark:bg-blue-500/10 animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-purple-300/10 dark:bg-purple-500/10 animate-[float_12s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-[15%] left-[15%] w-80 h-80 rounded-full bg-teal-300/10 dark:bg-teal-500/10 animate-[float_10s_ease-in-out_infinite_0.5s]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block min-w-[120px]">{animatedText}</span> Plans
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs with our flexible pricing options.
            </p>
            
            {/* Billing toggle */}
            <div className="flex items-center justify-center mt-8">
              <AnimatedReveal direction="up" delay={0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-full p-1 inline-flex shadow-md">
                  <button
                    onClick={() => setBillingCycle('ghana')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      billingCycle === 'ghana'
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    Ghana
                  </button>
                  <button
                    onClick={() => setBillingCycle('international')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      billingCycle === 'international'
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    International
                  </button>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.featured);
            
            return (
              <AnimatedReveal key={plan.id} direction="up" delay={0.1 * index}>
                <div 
                  className={`rounded-2xl border-2 ${colorClasses.border} ${plan.featured ? colorClasses.bg : 'bg-white dark:bg-gray-800'} 
                  shadow-xl ${colorClasses.shadow} transition-all duration-300 ${colorClasses.hover} 
                  ${plan.featured ? 'ring-4 ring-blue-500/20 dark:ring-blue-500/40 transform -translate-y-2' : ''}`}
                >
                  {plan.featured && (
                    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-t-lg w-fit mx-auto -mt-3 shadow-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {plan.name}
                    </h3>
                    <p className={`mt-2 ${plan.featured ? 'text-white/80' : 'text-gray-600 dark:text-gray-300'} text-sm`}>
                      {plan.description}
                    </p>
                    
                    <div className="mt-6 mb-6">
                      <div className="flex items-end">
                        <span className={`text-4xl font-extrabold ${plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                          {billingCycle === 'ghana' ? '₵' : '$'}{billingCycle === 'ghana' ? plan.price.ghana : plan.price.international}
                        </span>
                      </div>
                      <div className="mt-2">
                        <p className={`text-sm ${plan.featured ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
                          Completion time: {plan.completionPeriod}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          {feature.included ? (
                            <Check className={`h-5 w-5 ${plan.featured ? 'text-white' : `text-${plan.color}-500 dark:text-${plan.color}-400`} mr-2 shrink-0`} />
                          ) : (
                            <X className={`h-5 w-5 ${plan.featured ? 'text-white/50' : 'text-gray-400 dark:text-gray-500'} mr-2 shrink-0`} />
                          )}
                          <span className={`text-sm ${
                            plan.featured 
                              ? feature.included ? 'text-white' : 'text-white/50' 
                              : feature.included ? 'text-gray-700 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'
                          }`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <Button 
                        variant={plan.featured ? 'primary' : 'outline'}
                        className={`w-full ${!plan.featured ? colorClasses.text : ''} ${!plan.featured ? `border-${plan.color}-500 dark:border-${plan.color}-400` : ''}`}
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
        
        <AnimatedReveal direction="up" delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Need a custom solution for your enterprise?
            </p>
            <Button variant="secondary">
              Contact Our Sales Team
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default PricingSection;
