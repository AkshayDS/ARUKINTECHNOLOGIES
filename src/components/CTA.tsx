
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-background-dark">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-teal opacity-95"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-accent-orange opacity-20 blur-3xl group-hover:scale-110 transition-transform duration-1000 delay-150"></div>
        
        <div className="relative z-10 p-12 md:p-20 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Start your tech journey today</h2>
          <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Join a global community of learners and innovators. Transform your career path with industry-certified training from Arukien Technologies.
          </p>
          <button className="px-10 py-4 bg-white text-primary font-black text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all transform flex items-center gap-2 mx-auto">
            Get Started Now
            <span className="material-icons">rocket_launch</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
