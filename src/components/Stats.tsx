
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Students Trained', value: '500+', icon: 'groups', color: 'text-primary' },
    { label: 'Projects Delivered', value: '50+', icon: 'rocket_launch', color: 'text-accent-teal' },
    { label: 'Courses Offered', value: '20+', icon: 'school', color: 'text-accent-orange' },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 relative border-b border-slate-100 dark:border-slate-800" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                <span className="material-icons text-5xl">{stat.icon}</span>
              </div>
              <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
