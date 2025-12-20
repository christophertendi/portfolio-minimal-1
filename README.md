# Christopher Tendi - Minimal Portfolio

Clean, monochromatic, typography-focused portfolio inspired by Theodorus Clarence.

## 🎨 Design

- **Pure Black** background (#0a0a0a)
- **Clean White** text (#e5e5e5)
- **Cyan Accent** (#00d9ff) - single accent color
- **680px** max width for readability
- **Inter** font for clean typography
- **No animations** or heavy effects

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Structure

```
src/
├── components/
│   ├── Navbar.jsx/css    - Simple navigation with underlines
│   ├── Hero.jsx/css      - Typography-focused intro
│   ├── About.jsx/css     - Clean text layout
│   ├── Experience.jsx/css - Collapsible job details
│   ├── Projects.jsx/css  - Simple project cards
│   ├── Skills.jsx/css    - Grouped skill tags
│   ├── Contact.jsx/css   - Minimal contact form
│   └── Footer.jsx/css    - Simple footer
├── App.jsx
├── App.css
├── main.jsx
└── index.css             - Global minimal styles
```

## ✨ Features

- ✅ Fully responsive
- ✅ Smooth scroll navigation
- ✅ Collapsible experience details
- ✅ Working contact form (frontend)
- ✅ External project links
- ✅ Clean monochromatic design
- ✅ No heavy animations
- ✅ Fast & lightweight

## 🎯 Components

### Navbar
- Fixed top navigation
- Active section highlighting
- Smooth scroll to sections

### Hero
- Simple text introduction
- Social links (GitHub, LinkedIn, Email)
- Inline stats

### About
- Bio paragraphs
- Education timeline
- Certifications
- Languages

### Experience
- 9 professional roles
- Collapsible details (click "Show more")
- Tech tags
- Website links

### Projects
- 3 featured projects
- External links
- Tech stack tags

### Skills
- 6 skill categories
- Simple tag layout
- Grouped by type

### Contact
- Working form (frontend only)
- Email & location info
- Simple validation

### Footer
- Quick links
- Social media
- Copyright

## 📝 Customization

### Colors
Edit `src/index.css`:
```css
:root {
  --bg: #0a0a0a;
  --text: #e5e5e5;
  --accent: #00d9ff;
  /* ... */
}
```

### Content
Update component files directly - all data is hardcoded for simplicity.

## 🚀 Deploy

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
1. Build: `npm run build`
2. Deploy `dist/` folder

## 📊 What's Different?

**Removed from "mystery" version:**
- ❌ Floating particles
- ❌ Scanline overlay
- ❌ Heavy glow effects
- ❌ Complex gradients
- ❌ Framer Motion animations
- ❌ Multiple accent colors

**Kept minimal:**
- ✅ Simple hover states
- ✅ Clean typography
- ✅ Border transitions
- ✅ One accent color
- ✅ Content-first design

Built with React + Vite
