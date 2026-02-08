# Portfolio - Otaboy Rakhmonov

Professional portfolio website showcasing frontend development and credit risk management expertise.

## 📁 Loyiha Strukturasi

```
portfolio-project/
├── public/                  # Static fayllar
├── src/
│   ├── components/         # Qayta ishlatiladigan komponentlar
│   │   ├── Navigation.jsx  # Header navigation
│   │   └── Footer.jsx      # Footer component
│   ├── sections/           # Sahifa bo'limlari
│   │   ├── Hero.jsx        # Hero/Landing bo'limi
│   │   ├── About.jsx       # Men haqimda bo'limi
│   │   ├── Skills.jsx      # Ko'nikmalar bo'limi
│   │   ├── Projects.jsx    # Loyihalar bo'limi
│   │   ├── Experience.jsx  # Tajriba va Ta'lim bo'limi
│   │   └── Contact.jsx     # Kontakt bo'limi
│   ├── data/               # Ma'lumotlar
│   │   ├── translations.js # Tarjimalar (UZ, EN, RU)
│   │   └── portfolioData.js# Portfolio ma'lumotlari
│   ├── App.jsx             # Asosiy App komponenti
│   ├── main.jsx            # Entry point
│   └── index.css           # Global CSS
├── index.html              # HTML fayl
├── package.json            # Dependencies
├── vite.config.js          # Vite config
├── tailwind.config.js      # Tailwind config
└── postcss.config.js       # PostCSS config
```

## 🚀 Visual Studio Code'da Ishga Tushirish

### 1-Qadam: Node.js O'rnatish

Agar Node.js o'rnatilmagan bo'lsa:
1. [nodejs.org](https://nodejs.org) saytiga kiring
2. LTS versiyasini yuklab oling (18.x yoki 20.x)
3. O'rnating va terminalda tekshiring:
```bash
node --version
npm --version
```

### 2-Qadam: Loyihani Ochish

1. Visual Studio Code'ni oching
2. `File` → `Open Folder` → `portfolio-project` papkasini tanlang

### 3-Qadam: Dependencies O'rnatish

VS Code'da terminalni oching (`Terminal` → `New Terminal` yoki `Ctrl + ~`) va quyidagi buyruqni bajaring:

```bash
npm install
```

Bu barcha kerakli kutubxonalarni o'rnatadi:
- ✅ react
- ✅ react-dom  
- ✅ lucide-react (icons)
- ✅ vite (build tool)
- ✅ tailwindcss (styling)
- ✅ autoprefixer
- ✅ postcss

### 4-Qadam: Development Server Ishga Tushirish

```bash
npm run dev
```

Brauzerda quyidagi manzilni oching:
```
http://localhost:5173
```

## 📦 Boshqa Buyruqlar

```bash
# Production build
npm run build

# Build natijasini ko'rish
npm run preview
```

## 🌐 Deploy Qilish

### Vercel'ga Deploy

1. [vercel.com](https://vercel.com) saytiga kiring
2. GitHub account bilan bog'laning
3. "Import Project" → repository tanlang
4. Framework Preset: **Vite**
5. Deploy bosing

Yoki CLI orqali:
```bash
npm i -g vercel
vercel
```

### GitHub'ga Yuklash

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/ota6oy/portfolio.git
git branch -M main
git push -u origin main
```

## 🎨 Xususiyatlar

- ✅ **Responsive Design** - Barcha qurilmalarda ishlaydi
- ✅ **Dark/Light Mode** - Ikkita theme
- ✅ **3 Til** - O'zbek, Ingliz, Rus
- ✅ **Smooth Animations** - Zamonaviy animatsiyalar
- ✅ **Component Architecture** - Modulli tuzilma
- ✅ **SEO Optimized** - Qidiruv tizimlariga optimallashtirilgan

## 🛠️ Texnologiyalar

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React (icons)

## 📝 Fayl Tuzilishi Tushuntirish

### Components (Komponentlar)
- **Navigation.jsx** - Sahifa yuqorisidagi menyu
- **Footer.jsx** - Sahifa pastidagi footer

### Sections (Bo'limlar)
- **Hero.jsx** - Asosiy sahifa (ism, lavozim, linklar)
- **About.jsx** - Men haqimda ma'lumotlari
- **Skills.jsx** - Texnik va professional ko'nikmalar
- **Projects.jsx** - Portfolio loyihalari
- **Experience.jsx** - Ish tajribasi va ta'lim
- **Contact.jsx** - Kontakt forma

### Data (Ma'lumotlar)
- **translations.js** - 3 tildagi barcha matnlar
- **portfolioData.js** - Skills, projects, experience

## 🔧 VS Code Extensions (Tavsiya Etiladi)

1. **ESLint** - Kod sifati
2. **Prettier** - Kod formatlash
3. **Tailwind CSS IntelliSense** - Tailwind uchun
4. **ES7+ React Snippets** - React snippets

## 📞 Muammo Yuzaga Kelsa

### Port band bo'lsa:
```bash
# Boshqa portda ishga tushirish
npm run dev -- --port 3000
```

### node_modules muammosi:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build muammosi:
```bash
npm run build --verbose
```

## 📧 Aloqa

- Email: ota6oy@gmail.com
- Phone: +998 97 457 86 36
- GitHub: [ota6oy](https://github.com/ota6oy)

---

**Muvaffaqiyatli ishlar!** 🚀
