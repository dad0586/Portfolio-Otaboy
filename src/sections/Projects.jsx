import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = ({ isDark, t, projects }) => {
  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900/50' : 'bg-white/50'} backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r ${isDark ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>
          {t.projects.title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`group rounded-xl overflow-hidden border ${isDark ? 'border-slate-700/50 bg-slate-900/70' : 'border-gray-200 bg-white'} hover:shadow-2xl transition-all duration-300 backdrop-blur-sm`}
            >
              <div className="relative overflow-hidden h-48 sm:h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                />
                {project.comingSoon && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-lg font-semibold">
                      {t.projects.comingSoon}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                {!project.comingSoon && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-flex items-center gap-2 ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'} transition-colors font-medium`}
                  >
                    {t.projects.viewProject} <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
