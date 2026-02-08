import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navigation = ({ 
  language, 
  setLanguage, 
  isDark, 
  setIsDark, 
  activeSection, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection, 
  t 
}) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDark ? 'bg-slate-900/90 border-b border-slate-700/50' : 'bg-white/90 border-b border-gray-200/50'} backdrop-blur-xl shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className={`text-2xl font-bold bg-gradient-to-r ${isDark ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>OR</h1>
          
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(section => (
              <button 
                key={section} 
                onClick={() => scrollToSection(section)} 
                className={`transition-all font-medium ${activeSection === section ? (isDark ? 'text-cyan-400 scale-105' : 'text-blue-600 scale-105') : (isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600')}`}
              >
                {t.nav[section]}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <select 
              value={language} 
              onChange={e => setLanguage(e.target.value)} 
              className={`px-4 py-2 rounded-lg border font-medium transition-all ${isDark ? 'bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700' : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            >
              <option value="uz">O'z</option>
              <option value="en">En</option>
              <option value="ru">Ru</option>
            </select>
            
            <button 
              onClick={() => setIsDark(!isDark)} 
              className={`p-2.5 rounded-lg transition-all ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-cyan-400' : 'bg-gray-200 hover:bg-gray-300 text-blue-600'}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`md:hidden p-2.5 rounded-lg ${isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-gray-900 hover:bg-gray-100'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-slate-900/98 border-t border-slate-700/50' : 'bg-white/98 border-t border-gray-200/50'} backdrop-blur-xl shadow-xl`}>
          <div className="px-4 py-4 space-y-1">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(section => (
              <button 
                key={section} 
                onClick={() => scrollToSection(section)} 
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${activeSection === section ? (isDark ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400' : 'bg-blue-50 text-blue-600 border-l-4 border-blue-600') : (isDark ? 'text-slate-200 hover:bg-slate-800/70' : 'text-gray-700 hover:bg-gray-100')}`}
              >
                {t.nav[section]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
