
import React from 'react';
import { Course } from '../../types';

const coursesData: Course[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Master HTML, CSS, JavaScript and modern frameworks like React and Next.js.',
    category: 'Development',
    icon: 'code',
    image: 'html.jpg',
    tag: 'Hot',
    color: 'text-primary',
  },
  {
    id: '2',
    title: 'MERN/MEAN Stack',
    description: 'Become a full stack developer with MongoDB, Express, React/Angular, and Node.',
    category: 'Full Stack',
    icon: 'layers',
    image: 'webb.jpg',
    color: 'text-accent-teal',
  },
  {
    id: '3',
    title: 'Artificial Intelligence',
    description: 'Dive into Machine Learning, Neural Networks and Python for modern data science.',
    category: 'AI & ML',
    icon: 'psychology',
    image: 'aiii.jpg',
    color: 'text-blue-500',
  },
  {
    id: '4',
    title: 'Cloud Computing',
    description: 'Learn AWS, Azure and DevOps practices for highly scalable infrastructure.',
    category: 'Cloud',
    icon: 'cloud_queue',
    image: 'ccp.png',
    color: 'text-accent-orange',
  },
];

const Courses: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-background-dark relative" id="courses">
      <div className="absolute inset-0 bg-tech-pattern opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Master In-Demand Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Our curriculum is designed by industry experts to make you job-ready from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coursesData.map((course) => (
            <div 
              key={course.id} 
              className="group bg-background-light dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors z-10"></div>
                <img 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={course.image}
                />
                {course.tag && (
                  <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-primary shadow-sm">
                    {course.tag}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className={`flex items-center gap-2 mb-3 ${course.color}`}>
                  <span className="material-icons text-xl">{course.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest">{course.category}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300" >
             Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
