
import React from 'react';

const VisionMission: React.FC = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision */}
          <div className="group bg-white dark:bg-slate-800 p-8 lg:p-10 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-icons text-3xl">visibility</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              To democratize technology education and become the premier hub for fostering innovation, ensuring every aspiring individual has the tools to shape the digital future.
            </p>
          </div>

          {/* Mission */}
          <div className="group bg-white dark:bg-slate-800 p-8 lg:p-10 rounded-xl shadow-sm border-l-4 border-accent-orange hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent-orange/10 rounded-lg text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-colors">
                <span className="material-icons text-3xl">track_changes</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              To bridge the gap between academic theory and industry reality by providing high-quality, practical training and delivering exceptional digital services to businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
