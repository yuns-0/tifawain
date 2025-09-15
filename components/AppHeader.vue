<template>
  <header
    ref="headerRef"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 dark:bg-ink-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 group"
          aria-label="Tifawin Automation Agency - Home"
        >
          <div class="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <span class="text-white font-bold text-lg lg:text-xl">T</span>
          </div>
          <span class="font-display font-bold text-xl lg:text-2xl text-ink-900 dark:text-ink-50">
            Tifawin
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            :class="[
              'text-sm font-medium transition-colors duration-200 hover:text-primary-500',
              $route.path.startsWith(item.href) ? 'text-primary-500' : 'text-ink-600 dark:text-ink-400'
            ]"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
          <NuxtLink
            to="/contact"
            class="btn-primary"
          >
            Get Started
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            @click="toggleMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle mobile menu"
            class="p-2 rounded-xl bg-ink-100 dark:bg-ink-800 hover:bg-ink-200 dark:hover:bg-ink-700 transition-colors duration-200"
          >
            <Icon
              :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="w-6 h-6 text-ink-700 dark:text-ink-300"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden bg-white dark:bg-ink-900 border-t border-ink-200 dark:border-ink-700"
      >
        <div class="container-custom py-4">
          <nav class="space-y-4" aria-label="Mobile navigation">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.name"
              :to="item.href"
              @click="closeMobileMenu"
              :class="[
                'block text-base font-medium transition-colors duration-200 hover:text-primary-500',
                $route.path.startsWith(item.href) ? 'text-primary-500' : 'text-ink-600 dark:text-ink-400'
              ]"
            >
              {{ item.name }}
            </NuxtLink>
            <div class="pt-4 border-t border-ink-200 dark:border-ink-700">
              <NuxtLink
                to="/contact"
                @click="closeMobileMenu"
                class="btn-primary w-full justify-center"
              >
                Get Started
              </NuxtLink>
            </div>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const headerRef = ref<HTMLElement>()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' }
]

// Handle scroll effect
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  closeMobileMenu()
})

// Close mobile menu on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>
