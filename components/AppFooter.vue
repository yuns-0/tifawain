<template>
  <footer class="bg-ink-900 dark:bg-ink-950 text-white">
    <!-- Main Footer Content -->
    <div class="container-custom py-16 lg:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <NuxtLink
            to="/"
            class="flex items-center space-x-3 mb-6 group"
            aria-label="Tifawin Automation Agency - Home"
          >
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span class="text-white font-bold text-xl">T</span>
            </div>
            <span class="font-display font-bold text-2xl">Tifawin</span>
          </NuxtLink>
          
          <p class="text-muted-400 mb-6 leading-relaxed">
            Automate. Design. Grow. We help businesses streamline operations with custom automation, beautiful design, and scalable development.
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-ink-800 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="font-display font-semibold text-lg mb-6">Services</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name">
              <NuxtLink
                :to="service.href"
                class="text-muted-400 hover:text-white transition-colors duration-200"
              >
                {{ service.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="font-display font-semibold text-lg mb-6">Company</h3>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-muted-400 hover:text-white transition-colors duration-200"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="font-display font-semibold text-lg mb-6">Stay Updated</h3>
          <p class="text-muted-400 mb-4">
            Get the latest insights on automation, design, and growth.
          </p>
          
          <NewsletterForm />
          
          <div class="mt-6 text-sm text-muted-400">
            <p>📍 Casablanca, Morocco</p>
            <p>🌍 Serving clients worldwide</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-ink-800">
      <div class="container-custom py-6">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div class="text-sm text-muted-400">
            © {{ currentYear }} Tifawin Automation Agency. All rights reserved.
          </div>
          
          <div class="flex items-center space-x-6 text-sm">
            <NuxtLink
              to="/privacy"
              class="text-muted-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </NuxtLink>
            <NuxtLink
              to="/terms"
              class="text-muted-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </NuxtLink>
            <NuxtLink
              to="/faq"
              class="text-muted-400 hover:text-white transition-colors duration-200"
            >
              FAQ
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/tifawin', icon: 'simple-icons:linkedin' },
  { name: 'Twitter', href: 'https://twitter.com/tifawin', icon: 'simple-icons:twitter' },
  { name: 'GitHub', href: 'https://github.com/tifawin', icon: 'simple-icons:github' },
  { name: 'Behance', href: 'https://behance.net/tifawin', icon: 'simple-icons:behance' },
  { name: 'Dribbble', href: 'https://dribbble.com/tifawin', icon: 'simple-icons:dribbble' }
]

const services = [
  { name: 'Code Development', href: '/services/code-dev' },
  { name: 'Branding', href: '/services/branding' },
  { name: 'Design', href: '/services/design' },
  { name: 'Automation', href: '/services/automation' },
  { name: 'Social Media', href: '/services/social-media' },
  { name: 'AI Agents', href: '/services/ai-agents' }
]

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/about#team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'Free Tools', href: '/tools' }
]
</script>
