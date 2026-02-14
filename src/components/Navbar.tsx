
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleDarkMode, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2 shadow-md' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand Name */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group">
            <div className="relative">
              <img 
                src="logo.png" 
                alt="Arukien Logo" 
                className="h-10 w-auto transition-transform group-hover:scale-110"
                onError={(e) => {
                  // If no image, show a stylized icon placeholder
                  e.currentTarget.style.display = 'none';
                  const placeholder = e.currentTarget.parentElement;
                  if (placeholder) {
                    const icon = document.createElement('div');
                    icon.className = "w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-primary/30";
                    icon.innerHTML = 'A';
                    placeholder.prepend(icon);
                  }
                }}
              />
            </div>
            <div className="ml-3 flex flex-col justify-center">
              <span className="text-xl font-extrabold text-slate-900 dark:text-white leading-none tracking-tight group-hover:text-primary transition-colors">
                ARUKIEN
              </span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.25em] leading-none mt-1">
                TECHNOLOGIES
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#">Home</a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#about">About</a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#courses">Courses</a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors" href="#services">Services</a>
            
            <button 
              onClick={onToggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle dark mode"
            >
              <span className="material-icons">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>

            <a className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-0.5" href="#contact">Apply Now</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={onToggleDarkMode} className="text-slate-600 dark:text-slate-300">
               <span className="material-icons">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary"
            >
              <span className="material-icons text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-700 dark:text-slate-200 font-medium" href="#">Home</a>
            <a onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-700 dark:text-slate-200 font-medium" href="#about">About</a>
            <a onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-700 dark:text-slate-200 font-medium" href="#courses">Courses</a>
            <a onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-700 dark:text-slate-200 font-medium" href="#services">Services</a>
            <div className="pt-4">
              <a onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-6 py-3 bg-primary text-white font-medium rounded-lg" href="#contact">Apply Now</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
