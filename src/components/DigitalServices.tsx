
import React from 'react';
import { Service } from '../../types';

const servicesData: Service[] = [
  {
    id: 's1',
    title: 'Web Development',
    description: 'Custom website solutions tailored to your business needs using the latest high-performance technologies.',
    icon: 'laptop_mac',
    color: 'primary',
    features: ['E-commerce Platforms', 'CMS Solutions', 'SaaS Apps']
  },
  {
    id: 's2',
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually stunning user experiences that drive meaningful user engagement.',
    icon: 'brush',
    color: 'accent-teal',
    features: ['App Prototyping', 'Brand Identity', 'UX Research']
  },
  {
    id: 's3',
    title: 'Social Media',
    description: 'Strategic marketing campaigns to grow your brand presence and engage with your target audience.',
    icon: 'campaign',
    color: 'accent-orange',
    features: ['SEO Optimization', 'Content Strategy', 'Ad Management']
  },
];

const DigitalServices: React.FC = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-slate-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">For Businesses</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">Digital Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="relative group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-transparent hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-${service.color}/10 text-${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                  <span className="material-icons text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                      <span className="material-icons text-green-500 text-sm mr-2">check_circle</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;
