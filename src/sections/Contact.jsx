import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = ({ isDark, t }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Telegram Bot Ma'lumotlari
  const BOT_TOKEN = "7589494238:AAHJ984AlKzw1vxfat8PW3CEPqRfBfaSoAA";
  const CHAT_ID = "-4737018171";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const message = `
🆕 <b>Yangi Xabar - Portfolio</b>

👤 <b>Ism:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}

💬 <b>Xabar:</b>
${formData.message}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'HTML'
          })
        }
      );

      const data = await response.json();

      if (data.ok) {
        // Muvaffaqiyatli yuborildi
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {

        console.error('Telegram API xatosi:', data);
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 5000);
      }
    } catch (error) {

      console.error('Xabar yuborishda xatolik:', error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900/50' : 'bg-white/50'} backdrop-blur-sm`}>
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r ${isDark ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>
          {t.contact.title}
        </h2>
        <p className={`text-center mb-12 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
          {t.contact.description}
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <a 
            href="mailto:ota6oy@gmail.com" 
            className={`flex items-center gap-4 p-5 rounded-xl ${isDark ? 'bg-slate-900/70 hover:bg-slate-800/70 border border-slate-700/50' : 'bg-white hover:bg-gray-50 border border-gray-200'} transition-all shadow-lg`}
          >
            <Mail className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
            <div>
              <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>Email</p>
              <p className={`font-semibold ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                ota6oy@gmail.com
              </p>
            </div>
          </a>
          
          <a 
            href="tel:+998974578636" 
            className={`flex items-center gap-4 p-5 rounded-xl ${isDark ? 'bg-slate-900/70 hover:bg-slate-800/70 border border-slate-700/50' : 'bg-white hover:bg-gray-50 border border-gray-200'} transition-all shadow-lg`}
          >
            <Phone className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
            <div>
              <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>Phone</p>
              <p className={`font-semibold ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                +998 97 457 86 36
              </p>
            </div>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input 
              type="text" 
              placeholder={t.contact.name} 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
              required 
              className={`w-full px-5 py-3.5 rounded-xl border ${isDark ? 'bg-slate-900/70 border-slate-700/50 text-slate-100 placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-cyan-500' : 'focus:ring-blue-600'} transition-all`} 
            />
          </div>
          
          <div>
            <input 
              type="email" 
              placeholder={t.contact.email} 
              value={formData.email} 
              onChange={e => setFormData({...formData, email: e.target.value})} 
              required 
              className={`w-full px-5 py-3.5 rounded-xl border ${isDark ? 'bg-slate-900/70 border-slate-700/50 text-slate-100 placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-cyan-500' : 'focus:ring-blue-600'} transition-all`} 
            />
          </div>
          
          <div>
            <textarea 
              placeholder={t.contact.message} 
              rows="5" 
              value={formData.message} 
              onChange={e => setFormData({...formData, message: e.target.value})} 
              required 
              className={`w-full px-5 py-3.5 rounded-xl border ${isDark ? 'bg-slate-900/70 border-slate-700/50 text-slate-100 placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-cyan-500' : 'focus:ring-blue-600'} transition-all resize-none`}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting} 
            className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${isDark ? 'from-cyan-500 to-blue-600' : 'from-blue-600 to-cyan-600'} text-white font-semibold hover:shadow-xl ${isDark ? 'hover:shadow-cyan-500/50' : 'hover:shadow-blue-500/50'} transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? t.contact.sending : t.contact.send}
          </button>
          

          {submitSuccess && (
            <div className={`p-4 rounded-xl ${isDark ? 'bg-green-500/10 border border-green-500/50 text-green-400' : 'bg-green-50 border border-green-200 text-green-700'} text-center font-medium animate-pulse`}>
              ✅ {t.contact.success}
            </div>
          )}


          {submitError && (
            <div className={`p-4 rounded-xl ${isDark ? 'bg-red-500/10 border border-red-500/50 text-red-400' : 'bg-red-50 border border-red-200 text-red-700'} text-center font-medium`}>
              ❌ Xatolik yuz berdi. Iltimos qayta urinib ko'ring.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;