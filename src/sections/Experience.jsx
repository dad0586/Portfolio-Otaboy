import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience = ({ isDark, t, experienceTab, setExperienceTab, experiences, education }) => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r ${isDark ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>
          {t.experience.title}
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className={`inline-flex rounded-lg ${isDark ? 'bg-slate-900/70' : 'bg-gray-200'} p-1 backdrop-blur-sm`}>
            <button 
              onClick={() => setExperienceTab('work')} 
              className={`px-6 py-2.5 rounded-md transition-all font-medium ${experienceTab === 'work' ? (isDark ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white') : (isDark ? 'text-slate-200 hover:text-white' : 'text-gray-700 hover:text-gray-900')}`}
            >
              {t.experience.workTab}
            </button>
            <button 
              onClick={() => setExperienceTab('education')} 
              className={`px-6 py-2.5 rounded-md transition-all font-medium ${experienceTab === 'education' ? (isDark ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white') : (isDark ? 'text-slate-200 hover:text-white' : 'text-gray-700 hover:text-gray-900')}`}
            >
              {t.experience.educationTab}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {experienceTab === 'work' ? (
            experiences.map((exp, i) => (
              <div key={i} className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/70 border border-slate-700/50' : 'bg-white border border-gray-200'} backdrop-blur-sm shadow-xl`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3.5 rounded-lg ${isDark ? 'bg-slate-800 text-cyan-400' : 'bg-blue-50 text-blue-600'}`}>
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg sm:text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                      {exp.role}
                    </h3>
                    <p className={`${isDark ? 'text-cyan-400' : 'text-blue-600'} font-medium`}>
                      {exp.title}
                    </p>
                    <div className={`flex flex-wrap gap-3 sm:gap-4 mt-2 ${isDark ? 'text-slate-300' : 'text-gray-700'} text-sm`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    <div className="mt-4">
                      <p className={`font-semibold mb-2 ${isDark ? 'text-slate-100' : 'text-gray-800'}`}>
                        {t.experience.tasks}:
                      </p>
                      <ul className={`space-y-1.5 ${isDark ? 'text-slate-200' : 'text-gray-700'}`}>
                        {exp.tasks.map((task, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className={`${isDark ? 'text-cyan-400' : 'text-blue-600'} mt-1`}>•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            education.map((edu, i) => (
              <div key={i} className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/70 border border-slate-700/50' : 'bg-white border border-gray-200'} backdrop-blur-sm shadow-xl`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3.5 rounded-lg ${isDark ? 'bg-slate-800 text-cyan-400' : 'bg-blue-50 text-blue-600'}`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg sm:text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                      {edu.school}
                    </h3>
                    <p className={`${isDark ? 'text-cyan-400' : 'text-blue-600'} font-medium`}>
                      {edu.degree}
                    </p>
                    <div className={`flex flex-wrap gap-3 sm:gap-4 mt-2 ${isDark ? 'text-slate-300' : 'text-gray-700'} text-sm`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                    <p className={`mt-3 ${isDark ? 'text-slate-100' : 'text-gray-800'} font-semibold`}>
                      {edu.gpa}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
