# 📂 PORTFOLIO LOYIHA XARITASI

## Qisqa Ko'rinish
```
portfolio-project/         👈 Asosiy papka (buni VS Code'da oching)
├── 📦 package.json       → Dependencies va scriptlar
├── ⚙️ vite.config.js     → Vite sozlamalari
├── 🎨 tailwind.config.js → Tailwind CSS sozlamalari
├── 📋 postcss.config.js  → PostCSS sozlamalari
├── 📄 index.html         → HTML fayl
├── 📖 README.md          → Yo'riqnoma
├── 🚫 .gitignore         → Git uchun ignore
│
├── 📁 src/               → Asosiy kodlar shu yerda
│   ├── 🎯 main.jsx           → Entry point (boshlang'ich fayl)
│   ├── 📱 App.jsx            → Asosiy App component
│   ├── 🎨 index.css          → Global CSS + Tailwind
│   │
│   ├── 📁 components/        → Qayta ishlatiladigan komponentlar
│   │   ├── Navigation.jsx    → Header/Navbar
│   │   └── Footer.jsx        → Footer
│   │
│   ├── 📁 sections/          → Sahifa bo'limlari
│   │   ├── Hero.jsx          → 1. Hero section (yuqorida)
│   │   ├── About.jsx         → 2. Men haqimda
│   │   ├── Skills.jsx        → 3. Ko'nikmalar
│   │   ├── Projects.jsx      → 4. Loyihalar
│   │   ├── Experience.jsx    → 5. Tajriba/Ta'lim
│   │   └── Contact.jsx       → 6. Kontakt forma
│   │
│   └── 📁 data/              → Ma'lumotlar
│       ├── translations.js   → 3 tildagi tarjimalar
│       └── portfolioData.js  → Skills, projects data
│
└── 📁 public/            → Static fayllar (rasmlar, CV)
```

## Batafsil Tushuntirish

### 🏗️ Asosiy Konfiguratsiya Fayllari

1. **package.json** (Ildiz papkada)
   - Loyihaning barcha bog'liqliklarini o'z ichiga oladi
   - npm scriptlarini saqlaydi (dev, build, preview)
   - Loyiha haqida meta ma'lumotlar

2. **vite.config.js** (Ildiz papkada)
   - Vite build tool sozlamalari
   - React plugin'ini yoqadi

3. **tailwind.config.js** (Ildiz papkada)
   - Tailwind CSS sozlamalari
   - Qaysi fayllarni scan qilishni belgilaydi

4. **postcss.config.js** (Ildiz papkada)
   - PostCSS va Tailwind integratsiyasi

5. **index.html** (Ildiz papkada)
   - Bitta HTML fayl
   - React app bu faylga "mount" bo'ladi
   - <div id="root"> elementi React uchun

### 📱 src/ Papkasi (Asosiy Kodlar)

**Entry Points:**
- **main.jsx** → React'ni ishga tushiradi, App.jsx'ni render qiladi
- **App.jsx** → Barcha komponentlar va section'larni birlashtiradi
- **index.css** → Tailwind CSS import qiladi, global styles

### 🧩 src/components/ (Umumiy Komponentlar)

**Navigation.jsx**
- Fixed navbar yuqorida
- Mobile burger menu
- Language selector (UZ/EN/RU)
- Dark/Light mode toggle

**Footer.jsx**
- Copyright information
- Bottom section

### 📄 src/sections/ (Sahifa Bo'limlari)

Tartib bo'yicha yuqoridan pastga:

1. **Hero.jsx** - Birinchi ekran
   - Salom va ism
   - Lavozim
   - CTA buttons
   - Social links (GitHub, LinkedIn, Email)
   - Profile image

2. **About.jsx** - Men haqimda
   - Qisqa biografiya
   - Professional background

3. **Skills.jsx** - Ko'nikmalar
   - Technical skills (progress bars)
   - Finance skills (bullet list)
   - Languages

4. **Projects.jsx** - Loyihalar
   - Portfolio projects grid
   - Images va links
   - "Coming soon" badges

5. **Experience.jsx** - Tajriba
   - Tab navigation (Work/Education)
   - Work experience timeline
   - Education history

6. **Contact.jsx** - Kontakt
   - Email va phone links
   - Contact form
   - Success message

### 📊 src/data/ (Ma'lumotlar)

**translations.js**
- Uzbek, English, Russian tillaridagi barcha matnlar
- Strukturalashtirilgan object formatda
- Har bir sahifa bo'limi uchun tarjimalar

**portfolioData.js**
- Technical skills array
- Finance skills array
- Language skills (dinamik)
- Projects array
- Experience array
- Education array

### 🎯 Kodlar Qanday Ishlaydi?

```
1. Browser index.html'ni ochadi
   ↓
2. index.html main.jsx'ni chaqiradi
   ↓
3. main.jsx App.jsx'ni render qiladi
   ↓
4. App.jsx barcha komponentlarni birlashtiradi:
   - Navigation (yuqorida)
   - Hero section
   - About section
   - Skills section
   - Projects section
   - Experience section
   - Contact section
   - Footer (pastda)
   ↓
5. Har bir section o'z data'sini data/ papkasidan oladi
   ↓
6. Tailwind CSS barcha styling'ni boshqaradi
```

## 🎨 Rang Tizimi

**Dark Mode:**
- Background: slate-950, slate-900 (gradient)
- Text: slate-100, slate-200, slate-300
- Accent: cyan-400, cyan-500, blue-600

**Light Mode:**
- Background: gray-50, white (gradient)
- Text: gray-700, gray-800, gray-900
- Accent: blue-600, cyan-600

## 🔄 Ma'lumot Oqimi

```
App.jsx
  ├── State (language, isDark, formData, etc.)
  ├── translations[language] → har bir component'ga
  ├── Data functions → sections'ga
  └── Event handlers → components'ga
```

## 📝 Fayl Hajmlari

- **Eng katta fayllar:**
  - translations.js (~4KB)
  - portfolioData.js (~3KB)
  - App.jsx (~3KB)

- **O'rtacha fayllar:**
  - Hero.jsx, Skills.jsx, Experience.jsx (~2KB)

- **Kichik fayllar:**
  - Navigation.jsx, Footer.jsx (~1KB)

## 🚀 Development Workflow

1. **Terminal ochish:**
   - VS Code ichida: `Ctrl + ~` (backtick)

2. **Dependencies o'rnatish:**
   ```bash
   npm install
   ```

3. **Dev server ishga tushirish:**
   ```bash
   npm run dev
   ```

4. **Browser'da ochish:**
   - http://localhost:5173

5. **Fayllarni edit qilish:**
   - Har qanday .jsx faylni o'zgartirganingizda
   - Browser avtomatik yangilanadi (Hot reload)

## 🎓 Componentlar O'rtasida Bog'lanish

```
App.jsx (Asosiy State)
    ↓
Navigation.jsx (Props qabul qiladi)
    - language, setLanguage
    - isDark, setIsDark
    - activeSection
    - scrollToSection function
    ↓
Sections (Props qabul qiladi)
    - isDark, t (translations)
    - Data (projects, experiences, etc.)
    ↓
Footer.jsx (Props qabul qiladi)
    - isDark, t
```

## 📦 npm Packages Vazifasi

```
react, react-dom      → Asosiy React library
vite                  → Build tool (webpack alternativasi)
tailwindcss           → CSS framework
lucide-react          → Icons library
autoprefixer          → CSS compatibility
postcss               → CSS processing
```

Omad tilaymiz! Savol bo'lsa, README.md'dagi kontaktlar orqali yozing.
