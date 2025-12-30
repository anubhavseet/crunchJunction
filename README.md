# Serenity Spa - Premium Wellness Website

A modern, responsive single-page application (SPA) for Crunch Junction built with React, featuring a clean and professional design.

## 🚀 Features

- **Single Page Application**: Smooth ID-based routing with hash navigation
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Modern UI/UX**: Clean, elegant design with smooth animations
- **Smooth Scrolling**: Hash-based navigation with automatic section highlighting
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Accessible**: ARIA labels and semantic structure

## 📋 Sections

1. **Home/Hero**: Welcome section with call-to-action buttons
2. **Services**: Premium spa services showcase (Massage, Facial, Aromatherapy, Body Wraps)
3. **Why Choose Us**: Key benefits and features
4. **About**: Our story and mission
5. **Testimonials**: Client reviews and ratings
6. **Contact**: Contact form, address, hours, and information

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **Hash Routing**: ID-based navigation (no React Router needed)
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with CSS variables
- **Google Fonts**: Poppins font family

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🌐 Navigation

The website uses **ID-based routing** with hash navigation:

- `#home` - Hero section
- `#services` - Services section
- `#about` - About section
- `#testimonials` - Testimonials section
- `#contact` - Contact section

Navigation automatically scrolls to sections and updates the URL hash. The active section is highlighted in the navigation bar based on scroll position.

## 🌐 Deployment

This project can be easily deployed to:

- **Hostinger**: Upload the `dist` folder contents to `public_html` (see `HOSTINGER_DEPLOY.md` for detailed instructions)
- **Netlify**: Connect your Git repository or drag & drop the `dist` folder
- **Vercel**: Import your Git repository
- **GitHub Pages**: Use GitHub Actions or deploy the `dist` folder

### Build for Deployment

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
serenity-spa/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── ScrollToTop.jsx
│   │   └── ScrollToTop.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Home.css
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #d4af37;
  --secondary-color: #8b7355;
  --accent-color: #f5e6d3;
  /* ... */
}
```

### Content

- **Services**: Edit `src/pages/Home.jsx` - `services` array
- **Testimonials**: Edit `src/pages/Home.jsx` - `testimonials` array
- **Contact Info**: Edit `src/pages/Home.jsx` and `src/components/Footer.jsx`
- **About Content**: Edit `src/pages/Home.jsx` - About section

### Adding New Sections

1. Add a new section in `src/pages/Home.jsx` with a unique `id`
2. Add navigation link in `src/components/Header.jsx`
3. Update the `sections` array in Header's scroll handler

## 📝 Notes

- Images use placeholder URLs from Unsplash. Replace with your own images.
- The contact form is a placeholder (no backend integration).
- All navigation uses smooth scrolling with hash-based routing.
- The active section in navigation updates automatically based on scroll position.

## 📄 License

This project is created for Serenity Spa.

---

Built with ❤️ for Serenity Spa
