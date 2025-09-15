export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-09-14',
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],

  // TypeScript
  typescript: {
    strict: true,
    typeCheck: false
  },

  // CSS
  css: ['~/assets/css/main.css'],

  // App configuration
  app: {
    head: {
      title: 'Tifawin Automation Agency - Automate. Design. Grow.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  // Runtime config
  runtimeConfig: {
    // Private keys (only available on server-side)
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    resendApiKey: process.env.RESEND_API_KEY,
    
    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://tifawin.agency',
      plausibleDomain: process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN,
      googleAnalyticsId: process.env.NUXT_PUBLIC_GA_ID
    }
  },

  // Content configuration
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'python']
    }
  },

  // Image configuration
  image: {
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 100,
          height: 100,
          quality: 80
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          width: 1200,
          height: 600,
          quality: 85
        }
      },
      card: {
        modifiers: {
          format: 'webp',
          width: 400,
          height: 300,
          quality: 80
        }
      }
    }
  },

  // i18n configuration
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'ar-MA', name: 'العربية', file: 'ar-MA.json' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix_except_default'
  },


  // Build configuration
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },

  // Experimental features
  experimental: {
    payloadExtraction: false
  }
})
