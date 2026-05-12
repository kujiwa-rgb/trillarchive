# TRILL ARCHIVE

A minimalist cinematic media website showcasing underground film culture, retro internet archives, lost media, and digital archaeology. Built with pure HTML, CSS, and JavaScript.

## 🎬 Design Vision

**TRILL ARCHIVE** is a premium digital vault inspired by:
- Underground hip-hop culture and aesthetics
- Cinematic production studios and film noir
- Retro tech archives and lost media preservation
- Modern luxury web design
- Digital archaeology and cultural memory

## 🎨 Design Language

### Visual Identity
- **Color Palette**: Pure black background (#0a0a0a), crisp white text (#f5f5f5), sophisticated grays
- **Typography**: Georgia serif font for editorial elegance
- **Texture**: Subtle grain overlay for cinematic atmosphere
- **Branding**: Cracked Greek-style archive pillar logo with vertical "TRILL" text

### Features
- ✨ Smooth fade-in animations on scroll
- 🎯 Cinematic spacing and hierarchy
- 📱 Fully responsive mobile + desktop design
- 🖱️ Elegant hover effects and transitions
- ⌨️ Keyboard navigation and accessibility
- 🔄 Active navigation states
- 📊 Modular sections for easy updates

## 📑 Website Structure

- **HOME** - Hero section with archive introduction
- **MEDIA** - Curated media collections and visual culture
- **FILMS** - Underground cinema and lost films
- **MUSIC** - Rare recordings and archival soundscapes
- **BLOG** - Essays on digital archaeology and cultural preservation
- **CONTACT** - Community engagement and submission form

## 🛠️ Technical Stack

- **HTML5**: Semantic structure with accessibility best practices
- **CSS3**: Custom properties, flexbox, grid, animations, and responsive design
- **JavaScript**: Vanilla JS for smooth scrolling, menu interaction, and scroll animations
- **No Dependencies**: Pure frontend, optimized for GitHub Pages

## 🚀 Getting Started

### Local Development
```bash
# Clone or navigate to the project directory
cd trillarchive

# Open with your local server (Python)
python -m http.server 8000

# Or use any other local server
# Visit http://localhost:8000
```

### File Structure
```
trillarchive/
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── script.js       # JavaScript interactivity
├── .agent.md       # Custom AI agent configuration
└── README.md       # This file
```

## 🎯 Key Features Explained

### Hero Section
- Eye-catching typography with cinematic spacing
- Pillar logo symbolizing digital ruins
- Call-to-action button with smooth hover effects
- Parallax background for depth

### Navigation
- Fixed top navbar with backdrop blur
- Smooth slide-down animation on load
- Active link indicators
- Responsive hamburger menu for mobile

### Content Sections
- Responsive grid layouts adapting to screen size
- Fade-in animations triggered by scroll position
- Card hover effects with subtle lightening
- Consistent section spacing and typography

### Animations
- Intersection Observer API for performance
- CSS transitions for smooth effects
- Parallax scrolling on hero section
- Staggered fade-in for content cards

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Hamburger menu for small screens
- Fluid typography using clamp()

## 🎨 Customization

### Change Color Scheme
Edit CSS variables in `style.css`:
```css
:root {
    --primary-black: #0a0a0a;
    --primary-white: #f5f5f5;
    --secondary-gray: #808080;
    /* ... */
}
```

### Modify Animations
- Adjust transition timing: Change `--transition` variable
- Edit specific animation durations in `@keyframes`
- Fine-tune Intersection Observer threshold in `script.js`

### Add New Sections
1. Create HTML section with unique ID
2. Add nav link pointing to that ID
3. Style with section class and custom styling
4. JavaScript will automatically add to nav highlighting

## 🌐 Deployment

### GitHub Pages
```bash
git add .
git commit -m "Initial TRILL ARCHIVE commit"
git push origin main
```

Then enable Pages in GitHub repository settings pointing to `main` branch.

### Other Hosting
- Works on any static hosting (Netlify, Vercel, etc.)
- No build process required
- Fully client-side, no backend needed

## ♿ Accessibility

- Semantic HTML structure (nav, section, footer, article)
- Proper heading hierarchy (h1, h2, h3)
- Keyboard navigation support
- Form accessibility with proper labels
- Color contrast meets WCAG standards
- Focus states for interactive elements

## 📦 Dependencies

**None!** This is a pure vanilla HTML/CSS/JavaScript project with zero external dependencies.

## 🔧 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Android

## 🎓 Learning Resources

This project demonstrates:
- CSS Grid and Flexbox layouts
- CSS custom properties (variables)
- Intersection Observer API
- CSS animations and transitions
- Responsive web design
- Vanilla JavaScript DOM manipulation
- Semantic HTML structure
- Web accessibility principles

## 📄 License

This project is open source. Feel free to use it as inspiration for your own cinematic media projects.

## 🤝 Contributing

Have ideas for the archive? Feel free to:
- Submit lost media discoveries
- Suggest new sections or features
- Report bugs or accessibility issues
- Share cultural perspectives on digital preservation

---

**TRILL ARCHIVE** - *Preserving forgotten culture in the digital ruins* 🎬📼🏛️
