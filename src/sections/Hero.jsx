import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = ({ isDark, t, scrollToSection }) => {
  return (
    <section id="home" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className={`text-lg font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
              {t.hero.greeting}
            </p>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r ${isDark ? 'from-cyan-300 via-blue-400 to-cyan-500' : 'from-blue-700 via-cyan-600 to-blue-800'} bg-clip-text text-transparent leading-tight`}>
              {t.hero.name}
            </h1>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-semibold ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
              {t.hero.title}
            </h2>
            <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-gray-700'} max-w-2xl leading-relaxed`}>
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`px-8 py-3.5 bg-gradient-to-r ${isDark ? 'from-cyan-500 to-blue-600' : 'from-blue-600 to-cyan-600'} text-white rounded-lg font-semibold hover:shadow-xl ${isDark ? 'hover:shadow-cyan-500/50' : 'hover:shadow-blue-500/50'} transition-all transform hover:-translate-y-1`}
              >
                {t.hero.cta}
              </button>
              <a 
                href="/cv.pdf" 
                download 
                className={`px-8 py-3.5 border-2 ${isDark ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10' : 'border-blue-600 text-blue-600 hover:bg-blue-50'} rounded-lg font-semibold transition-all flex items-center justify-center gap-2 hover:scale-105`}
              >
                <Download className="w-5 h-5" />
                {t.hero.downloadCV}
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/dad0586" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-3.5 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-cyan-400' : 'bg-gray-200 hover:bg-gray-300 text-blue-600'} transition-all hover:scale-110`}
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/otaboy-rakhmonov-65a823215/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-3.5 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-cyan-400' : 'bg-gray-200 hover:bg-gray-300 text-blue-600'} transition-all hover:scale-110`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:ota6oy@gmail.com" 
                className={`p-3.5 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-cyan-400' : 'bg-gray-200 hover:bg-gray-300 text-blue-600'} transition-all hover:scale-110`}
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-cyan-500 to-blue-600' : 'from-blue-600 to-cyan-600'} rounded-full blur-3xl opacity-30 animate-pulse`}></div>
            <div className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${isDark ? 'border-slate-700' : 'border-gray-300'} shadow-2xl`}>
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%232563eb;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='300' height='300'/%3E%3Ctext x='150' y='160' font-size='100' text-anchor='middle' fill='white' font-weight='bold'%3EOR%3C/text%3E%3C/svg%3E" 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
