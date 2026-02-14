
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="logo.png" 
                alt="Arukien Technologies Logo" 
                className="h-16 w-auto bg-white p-1 rounded-lg"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-none tracking-tight">ARUKIEN</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] leading-none mt-1">TECHNOLOGIES</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm italic font-medium mb-6 uppercase tracking-widest opacity-80">
              Innovate. Educate. Elevate.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Empowering the next generation of global tech professionals with industry-leading training, live project mentoring, and premium digital services.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-icons text-xs">chevron_right</span> Home</a></li>
              <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#about"><span className="material-icons text-xs">chevron_right</span> About Us</a></li>
              <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#courses"><span className="material-icons text-xs">chevron_right</span> All Courses</a></li>
              <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#services"><span className="material-icons text-xs">chevron_right</span> Digital Services</a></li>
              <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-icons text-xs">chevron_right</span> Student Dashboard</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Popular Tracks</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">MERN Stack Development</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Python for AI/ML</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">DevOps & Cloud Arch</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">UI/UX Product Design</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cybersecurity Fundamentals</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-icons">location_on</span>
                </div>
                <span className="text-sm"> Pipeline Rd, near Ravi Shankar Guruji Ashram, Thathaguni<br/> Bengaluru, Karnataka 560082,India</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-icons">email</span>
                </div>
                <a className="hover:text-white transition-colors text-sm" href="mailto:hello@arukien.com">arukien418@gmail.com</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-icons">phone</span>
                </div>
                <a className="hover:text-white transition-colors text-sm" href="tel:+919876543210">+91 93800 71095</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Arukien Technologies. Built for the future of tech.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="https://www.google.com/maps/@12.8432088,77.5120153,20.42z?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" className="hover:text-slate-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
