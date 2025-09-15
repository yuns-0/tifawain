# Tifawin Automation Agency

A complete, production-ready Nuxt 3 website for Tifawin Automation Agency with modern 2025/2026 design.

## 🚀 Features

- **Framework**: Nuxt 3 with TypeScript and App Router
- **Styling**: TailwindCSS with custom design system
- **UI Components**: Headless UI, Radix-UI alternatives, Nuxt Icon
- **Animations**: Motion One with micro-interactions
- **Forms**: Zod validation with server routes
- **Content**: Nuxt Content for blog and portfolio
- **SEO**: Built-in SEO utilities with structured data
- **Internationalization**: i18n support (EN, FR, AR-MA)
- **Analytics**: Plausible and GA4 ready
- **Performance**: Code-split routes, lazy loading, prefetching
- **Accessibility**: WCAG 2.2 AA compliant
- **Theme**: Dark/light mode with system preference

## 🎨 Design System

### 2025/2026 Modern Aesthetic
- **Primary Color**: #5E60FF (Indigo Glow)
- **Secondary Color**: #00E5A8 (Neo Mint)
- **Typography**: Inter (UI), Plus Jakarta Sans (headlines)
- **Style**: Glass-morphism, soft shadows, rounded corners
- **Animations**: Subtle micro-interactions and hover effects

### Design Principles
- **Container System**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Spacing Scale**: 16px base with consistent vertical rhythm
- **Grid System**: Flexible grids with specific overrides for 4 and 6 items
- **Typography Hierarchy**: Clear heading and body text scales
- **Accessibility**: WCAG 2.2 AA compliant with proper focus states
- **Performance**: 60fps animations with optimized loading states

### Component Standards
- **Cards**: `rounded-2xl` with soft shadows and hover effects
- **Buttons**: Magnetic hover effects with scale animations
- **Forms**: Enhanced focus states and validation feedback
- **Grids**: Consistent spacing and responsive breakpoints
- **Animations**: Scroll-triggered with staggered children

## 📁 Project Structure

```
/
├── app.vue                 # Main app component
├── nuxt.config.ts         # Nuxt configuration
├── tailwind.config.ts     # Tailwind configuration
├── assets/
│   └── css/
│       └── main.css       # Global styles
├── components/            # Vue components
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── ThemeToggle.vue
│   ├── Hero.vue
│   ├── ContactForm.vue
│   └── ...
├── composables/           # Vue composables
│   ├── useTheme.ts
│   └── useForm.ts
├── content/               # Content files
│   ├── blog/
│   ├── portfolio/
│   └── _data/
├── layouts/               # Layout components
│   ├── default.vue
│   └── marketing.vue
├── pages/                 # Route pages
│   ├── index.vue
│   ├── about.vue
│   ├── services/
│   ├── portfolio/
│   └── ...
├── server/
│   └── api/              # Server API routes
├── utils/                # Utility functions
│   ├── seo.ts
│   ├── format.ts
│   ├── filters.ts
│   └── schema.ts
└── public/               # Static assets
```

## 🛠️ Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tifawin-automation-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   NUXT_PUBLIC_SITE_URL=https://tifawin.agency
   SMTP_HOST=smtp.gmail.com
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run analyze` - Analyze bundle size

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy automatically on push to main branch**

### Netlify

1. **Connect your repository to Netlify**
2. **Set build command**: `npm run generate`
3. **Set publish directory**: `dist`
4. **Set environment variables**

### Docker

1. **Build the Docker image**
   ```bash
   docker build -t tifawin-agency .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 tifawin-agency
   ```

### Traditional Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `.output` directory to your server**

3. **Configure your web server to serve the static files**

## 🔧 Configuration

### Email Setup

Choose one of the following email providers:

#### Option 1: SMTP (Gmail)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

#### Option 2: Resend (Recommended)
```env
RESEND_API_KEY=re_your_api_key_here
```

### Analytics Setup

#### Plausible Analytics
```env
NUXT_PUBLIC_PLAUSIBLE_DOMAIN=tifawin.agency
```

#### Google Analytics
```env
NUXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 Content Management

### Blog Posts

Create new blog posts in `content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Post description"
date: "2024-01-15"
tags: ["tag1", "tag2"]
excerpt: "Post excerpt"
cover: "/blog/cover-image.jpg"
author: "Author Name"
---

# Your Post Content

Write your blog post content here...
```

### Portfolio Items

Create new portfolio items in `content/portfolio/`:

```markdown
---
title: "Project Title"
description: "Project description"
date: "2024-01-15"
tags: ["automation", "design"]
excerpt: "Project excerpt"
cover: "/portfolio/cover-image.jpg"
client: "Client Name"
industry: "Industry"
duration: "3 weeks"
team_size: "3 people"
---

# Project Details

Write your project details here...
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  primary: {
    500: '#5E60FF', // Your primary color
  },
  secondary: {
    500: '#00E5A8', // Your secondary color
  },
}
```

### Typography

Update fonts in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
}
```

### Components

All components are located in the `components/` directory and can be customized as needed.

## 🧪 Testing

Run tests with:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

## 📊 Performance

The site is optimized for performance with:

- Code splitting
- Lazy loading
- Image optimization
- Prefetching critical resources
- Minimal bundle size

Run bundle analysis:

```bash
npm run analyze
```

## 🔒 Security

Security features include:

- Rate limiting on API routes
- Honeypot fields in forms
- Input validation with Zod
- CSRF protection
- Secure headers

## 🌐 Internationalization

The site supports multiple languages:

- English (default)
- French
- Arabic (Morocco)

Add new languages by:

1. Creating language files in `locales/`
2. Adding the language to `nuxt.config.ts`

## 📱 Responsive Design

The site is fully responsive and works on:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ♿ Accessibility

The site follows WCAG 2.2 AA guidelines:

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Color contrast compliance
- Screen reader support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email hello@tifawin.agency or create an issue in the repository.

## 📋 Design Improvements Changelog

### v1.1.0 - Design System Polish (January 2025)

#### Global Design System
- ✅ Implemented consistent container system (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)
- ✅ Standardized section spacing (`py-16 sm:py-20 lg:py-24`)
- ✅ Unified card padding system (`p-6 sm:p-7 lg:p-8`)
- ✅ Created flexible grid system with specific overrides for 4 and 6 items
- ✅ Implemented consistent border radius (`rounded-2xl`) and soft shadows

#### Typography System
- ✅ Updated heading hierarchy with proper responsive scaling
- ✅ Standardized body text with optimal line height (`leading-7`)
- ✅ Added eyebrow labels for section introductions
- ✅ Implemented text clamping utilities (`line-clamp-2`, `line-clamp-3`)

#### Component Polish
- ✅ Enhanced card hover effects with subtle lift and shadow changes
- ✅ Added magnetic hover effects for buttons and CTAs
- ✅ Improved focus states with proper ring styling
- ✅ Standardized form input styling and validation states

#### Animations & Interactions
- ✅ Added scroll-triggered animations with intersection observer
- ✅ Implemented staggered animations for grid children
- ✅ Created magnetic effects for interactive elements
- ✅ Added smooth transitions for all interactive states

#### Accessibility Improvements
- ✅ Enhanced focus management with visible focus rings
- ✅ Improved keyboard navigation support
- ✅ Added proper ARIA labels and semantic HTML
- ✅ Ensured color contrast meets WCAG AA standards

#### Performance Optimizations
- ✅ Fixed aspect ratios to prevent Cumulative Layout Shift (CLS)
- ✅ Optimized animations for 60fps performance
- ✅ Added skeleton loading states
- ✅ Implemented lazy loading for non-critical content

#### Pages Updated
- ✅ Homepage (`pages/index.vue`) - Hero, services, case studies, blog
- ✅ About page (`pages/about.vue`) - Mission, values, team sections
- ✅ Services pages - All service sub-pages with consistent layout
- ✅ Contact page - Enhanced form styling and validation
- ✅ Pricing page - Improved card layout and feature lists
- ✅ FAQ page - Better accordion styling and animations
- ✅ Portfolio page - Enhanced case study cards
- ✅ Blog page - Improved article cards and layout

#### Components Enhanced
- ✅ `Hero.vue` - Added animations and magnetic effects
- ✅ `FeatureGrid.vue` - Implemented staggered animations
- ✅ `PricingTable.vue` - Enhanced card styling and interactions
- ✅ `TestimonialGrid.vue` - Added text clamping and hover effects
- ✅ `FAQ.vue` - Improved accordion styling and focus states
- ✅ `ContactForm.vue` - Enhanced form styling and validation

#### New Features
- ✅ Created animation composables (`useAnimations.ts`)
- ✅ Added design system CSS utilities
- ✅ Implemented responsive grid system
- ✅ Created Design QA checklist and documentation

### v1.0.0 - Initial Release
- ✅ Complete Nuxt 3 website with TypeScript
- ✅ TailwindCSS styling with custom design system
- ✅ All pages and components implemented
- ✅ SEO and accessibility features
- ✅ Dark/light mode support
- ✅ Internationalization ready

## 🙏 Acknowledgments

- [Nuxt.js](https://nuxt.com/) - The Vue.js framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Headless UI](https://headlessui.com/) - UI components
- [Heroicons](https://heroicons.com/) - Icons
- [VueUse](https://vueuse.org/) - Vue composition utilities

---

Built with ❤️ by the Tifawin team
