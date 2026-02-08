import React from 'react';

const Footer = ({ isDark, t }) => {
  return (
    <footer className={`py-8 px-4 border-t ${isDark ? 'border-slate-800 bg-slate-950' : 'border-gray-200 bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto text-center">
        <p className={`${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
          © 2026 Otaboy Rakhmonov. {t.footer.rights}
        </p>
        <p className={`mt-2 ${isDark ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
          {t.footer.made}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
