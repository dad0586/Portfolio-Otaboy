import React from 'react';
import { technicalSkills, financeSkills } from '../data/portfolioData';

const Skills = ({ isDark, t, languageSkills }) => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r ${isDark ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>
          {t.skills.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Technical Skills */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/70 border border-slate-700/50' : 'bg-white border border-gray-200'} backdrop-blur-sm shadow-xl`}>
            <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>
              {t.skills.technical}
            </h3>
            <div className="space-y-4">
              {technicalSkills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium ${isDark ? 'text-slate-100' : 'text-gray-800'}`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`h-2.5 rounded-full ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`}>
                    <div 
                      className={`h-full bg-gradient-to-r ${isDark ? 'from-cyan-500 to-blue-600' : 'from-blue-600 to-cyan-600'} rounded-full transition-all duration-1000`} 
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Finance Skills */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/70 border border-slate-700/50' : 'bg-white border border-gray-200'} backdrop-blur-sm shadow-xl`}>
            <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>
              {t.skills.finance}
            </h3>
            <div className="space-y-3">
              {financeSkills.map((skill, i) => (
                <div key={i} className={`flex items-start gap-3 ${isDark ? 'text-slate-100' : 'text-gray-800'}`}>
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-blue-600 to-cyan-600'}`}></div>
                  <span className="flex-1">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/70 border border-slate-700/50' : 'bg-white border border-gray-200'} backdrop-blur-sm shadow-xl sm:col-span-2 lg:col-span-1`}>
            <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>
              {t.skills.languages}
            </h3>
            <div className="space-y-4">
              {languageSkills.map((lang, i) => (
                <div key={i} className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/70' : 'bg-gray-50'}`}>
                  <div className={`font-semibold ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                    {lang.lang}
                  </div>
                  <div className={`text-sm mt-1 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                    {lang.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
