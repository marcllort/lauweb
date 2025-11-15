# Journeys by Laura - Personal Travel & Lifestyle Website

A minimalist, content-focused travel website built with Node.js, Express, EJS, and Tailwind CSS.

## 🌟 Features

- **Minimalist Design**: Clean, sand-inspired color palette with serene aesthetics
- **Responsive Layout**: Mobile-first design that works on all devices
- **Three Main Sections**:
  - Homepage with hero section, introduction, and TikTok integration
  - Interactive map showing travel pinpoints
  - Travel guides with detailed itineraries and tips
- **Smooth Animations**: Page transitions, scroll reveals, and hover effects
- **Performance Optimized**: Fast loading times and efficient asset delivery

## 🎨 Design System

### Color Palette
- **Beige** (`#F5F5DC`) - Primary Background
- **Soft Sand** (`#EADDCA`) - Secondary Background/Accents
- **Tan** (`#D2B48C`) - Accent Color for buttons/links
- **Muted Brown** (`#8C7B70`) - Primary Text
- **White** (`#FFFFFF`) - Cards and negative space

### Typography
- **Font Family**: Montserrat (Google Fonts)
- Different weights for hierarchy (300-800)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lauweb
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. For development with auto-reload:
```bash
npm run dev
```

5. The website will be available at `http://localhost:3000`

## 📁 Project Structure

```
/lauweb
├── index.js                 # Main Express server
├── package.json             # Node.js dependencies
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── /views                   # EJS templates
│   ├── index.ejs           # Homepage
│   ├── maps.ejs            # Maps page
│   ├── guides.ejs          # Guides listing
│   ├── guide-detail.ejs    # Individual guide template
│   └── /partials
│       ├── header.ejs      # Header & navigation
│       └── footer.ejs      # Footer
├── /public                  # Static assets
│   ├── /css
│   │   ├── input.css       # Tailwind input file
│   │   └── style.css       # Compiled CSS (generated)
│   └── /js
│       └── main.js         # JavaScript functionality
└── /assets
    └── /images             # Image assets
```

## 🛠️ Customization

### Adding Your Content

1. **Update TikTok Links**: Replace `@yourhandle` in all EJS files with your actual TikTok username
2. **Add Hero Image**: Replace the placeholder in `views/index.ejs` with your hero image
3. **Configure Google Maps**:
   - Visit [Google My Maps](https://www.google.com/mymaps)
   - Create your map with pinpoints
   - Get the embed code and replace the placeholder in `views/maps.ejs`
4. **Add Images**: Place your photos in `/assets/images/`
5. **Update Stats**: Modify the map statistics in `views/maps.ejs`

### Styling Changes

- Edit color palette in `tailwind.config.js`
- Customize animations in `public/css/input.css`
- After CSS changes, rebuild with: `npm run build:css`

## 📝 Creating New Guides

1. Create a new route in `index.js`
2. Use `guide-detail.ejs` as a template
3. Add the guide card to `views/guides.ejs`
4. Update featured content on homepage if needed

## 🎯 Deployment

### Option 1: Heroku
```bash
# Install Heroku CLI, then:
heroku create your-app-name
git push heroku main
```

### Option 2: Vercel
```bash
# Install Vercel CLI, then:
vercel
```

### Option 3: DigitalOcean, AWS, or any Node.js hosting
- Ensure Node.js 14+ is installed
- Run `npm install` and `npm start`
- Set up a reverse proxy (nginx) if needed

## 🔧 Development Scripts

- `npm start` - Start the production server
- `npm run dev` - Start with nodemon for auto-reload
- `npm run build:css` - Compile Tailwind CSS (watch mode)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Future Enhancements

Phase 3 & Beyond (as per blueprint):
- Interactive map pins with clickable popups
- Photo galleries for each destination
- Newsletter integration with email service
- "Shop My Gear" affiliate section
- Blog/stories section
- Search functionality
- Multi-language support
- Dark mode toggle

## 📄 License

ISC

## 👤 Author

Laura - Travel Content Creator

---

**Built with ❤️ and wanderlust 🌍**
