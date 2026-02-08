import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import { translations } from './data/translations';
import { getLanguageSkills, getProjects, getExperiences, getEducation } from './data/portfolioData';

export default function App() {
  const [language, setLanguage] = useState('uz');
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [experienceTab, setExperienceTab] = useState('work');

  const t = translations[language];
  const languageSkills = getLanguageSkills(language);
  const projects = getProjects(language);
  const experiences = getExperiences(language);
  const education = getEducation(language);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`} 
      style={{fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'}}
    >
      <Navigation 
        language={language}
        setLanguage={setLanguage}
        isDark={isDark}
        setIsDark={setIsDark}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        t={t}
      />

      <Hero 
        isDark={isDark}
        t={t}
        scrollToSection={scrollToSection}
      />

      <About 
        isDark={isDark}
        t={t}
      />

      <Skills 
        isDark={isDark}
        t={t}
        languageSkills={languageSkills}
      />

      <Projects 
        isDark={isDark}
        t={t}
        projects={projects}
      />

      <Experience 
        isDark={isDark}
        t={t}
        experienceTab={experienceTab}
        setExperienceTab={setExperienceTab}
        experiences={experiences}
        education={education}
      />

      <Contact 
        isDark={isDark}
        t={t}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitSuccess={submitSuccess}
      />

      <Footer 
        isDark={isDark}
        t={t}
      />
    </div>
  );
}
