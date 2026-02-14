
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-tech-pattern">
      {/* Floating Gradients */}
      <div className="blob bg-primary/20 w-96 h-96 rounded-full -top-20 -left-20 animate-pulse"></div>
      <div className="blob bg-accent-teal/10 w-80 h-80 rounded-full top-40 right-0 delay-1000"></div>
      <div className="blob bg-accent-orange/10 w-64 h-64 rounded-full bottom-0 left-1/3 delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-widest uppercase border border-primary/20">
          Welcome to the future
        </span>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          Empowering Future <br className="hidden md:block"/>
          <span className="gradient-text">Tech Leaders</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto font-light">
          Innovate. Educate. Elevate. <br/>
          <span className="text-base text-slate-500 dark:text-slate-400 mt-4 block">
            Bridging the gap between academic learning and industry demands with cutting-edge training and digital solutions.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-xl shadow-primary/30 hover:bg-primary-dark hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2" href="#courses">
            Explore Courses
            <span className="material-icons text-sm">arrow_forward</span>
          </a>
          <a className="px-8 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-bold rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2" href="#contact">
            Contact Us
          </a>
        </div>

        {/* Hero Image / Visual Representation */}
        <div className="mt-16 mx-auto max-w-5xl rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 relative bg-slate-900 group">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
          <img 
            alt="Students collaborating on tech projects in a modern lab" 
            className="w-full h-[700px] md:h-[600px] object-cover transform group-hover:scale-100 transition-transform duration-1000" 
            src="herrr.png"
          />
          <div className="absolute bottom-6 left-6 z-20 text-left">
            <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 mb-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary-light text-xs font-bold text-white">Live Project Training</span>
            </div>
            <p className="text-white font-bold text-xl">Hands-on experience with real-world scenarios.</p>
            <p className="text-slate-300 text-sm mt-1">Get mentored by industry experts on active commercial projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
