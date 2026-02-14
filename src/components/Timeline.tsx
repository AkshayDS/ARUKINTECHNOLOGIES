
import React from 'react';

const Timeline: React.FC = () => {
  const items = [
    {
      title: 'MSME Approved',
      description: 'Recognized by the Ministry of Micro, Small and Medium Enterprises, ensuring credible and industry-standard certification.',
      icon: 'verified',
      color: 'border-primary text-primary'
    },
    {
      title: 'Expert Curriculum',
      description: 'Courses designed and updated regularly by industry veterans to match evolving market trends and technologies.',
      icon: 'school',
      color: 'border-accent-teal text-accent-teal'
    },
    {
      title: 'Placement Assistance',
      description: 'Dedicated support for resume building, mock interviews, and connections with our network of hiring partners.',
      icon: 'work',
      color: 'border-accent-orange text-accent-orange'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Why Choose Arukien?</h2>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-100 dark:bg-slate-800 rounded-full"></div>

          {items.map((item, idx) => (
            <div key={idx} className={`relative flex items-center justify-between mb-20 last:mb-0 ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'} animate-in fade-in slide-in-from-${idx % 2 === 0 ? 'left' : 'right'} duration-700`}>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg leading-relaxed">{item.description}</p>
              </div>
              
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-slate-800 border-4 ${item.color.split(' ')[0]} flex items-center justify-center z-10 shadow-xl group hover:scale-110 transition-transform`}>
                <span className={`material-icons ${item.color.split(' ')[1]} text-2xl group-hover:rotate-12 transition-transform`}>{item.icon}</span>
              </div>
              
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
