
import React from 'react';
import { Testimonial } from '../../types';

const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Priyansh Sharma',
    role: 'Web Developer',
    company: 'TechCorp',
    content: "The Full Stack course at Arukien was a game changer. The live projects gave me the confidence to crack my first interview and start my career as a professional dev.",
    rating: 5,
    avatar: '/pexels-suraj-barai-1121491032-27442252.jpg'
  },
  {
    id: 't2',
    name: 'Ananya Verma',
    role: 'UI Designer',
    company: 'CreativeStudio',
    content: "I never thought coding or design could be this accessible. The instructors are incredibly supportive and the project-based learning model is superior to any college course.",
    rating: 4.5,
    avatar: '/pexels-cineananya-34736762.jpg'
  },
  {
    id: 't3',
    name: 'Anjali Singh',
    role: 'Data Analyst',
    company: 'FinServe',
    content: "Transitioning from a non-tech background was scary, but the step-by-step guidance here made it possible. I'm now working as a junior data analyst.",
    rating: 5,
    avatar: '/pexels-timmossholder-8837077.jpg'
  },
  {
    id: 't4',
    name: 'Siddharth Rao',
    role: 'Cloud Engineer',
    company: 'CloudStream',
    content: "Highly recommend for anyone looking to specialize. The AWS modules were deep and covered everything from architecture to real-world security best practices.",
    rating: 5,
    avatar: '/pexels-italo-melo-881954-2379004.jpg'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-16">
          Student Stories
        </h2>
        
        <div className="flex overflow-x-auto gap-8 pb-10 scroll-hidden snap-x">
          {testimonialsData.map((t) => (
            <div 
              key={t.id} 
              className="min-w-[320px] md:min-w-[450px] bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 snap-center hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <img alt={t.name} className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20" src={t.avatar} />
                <div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.role} @ {t.company}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic text-lg leading-relaxed mb-6">
                "{t.content}"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons text-xl">
                    {i < Math.floor(t.rating) ? 'star' : (i < t.rating ? 'star_half' : 'star_outline')}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
