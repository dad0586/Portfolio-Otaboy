import React from 'react';

const About = ({ isDark, t }) => {
  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900/50' : 'bg-white/50'} backdrop-blur-sm`}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r ${isDark ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>
          {t.about.title}
        </h2>
        <div className="space-y-6">
          <h3 className={`text-xl sm:text-2xl font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>
            {t.about.intro}
          </h3>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
            {t.about.p1}
          </p>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
            {t.about.p2}
          </p>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
            {t.about.p3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
