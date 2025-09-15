<template>
  <div class="min-h-screen flex flex-col">
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main id="main-content" class="flex-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Set default SEO for all pages
useSeoMeta({
  title: 'Tifawin Automation Agency - Automate. Design. Grow.',
  description: 'We help businesses streamline operations with custom automation, beautiful design, and scalable development. From idea to live in weeks, not months.',
  ogTitle: 'Tifawin Automation Agency - Automate. Design. Grow.',
  ogDescription: 'We help businesses streamline operations with custom automation, beautiful design, and scalable development.',
  ogImage: 'https://tifawin.agency/og-image.jpg',
  ogUrl: 'https://tifawin.agency',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Tifawin Automation Agency - Automate. Design. Grow.',
  twitterDescription: 'We help businesses streamline operations with custom automation, beautiful design, and scalable development.',
  twitterImage: 'https://tifawin.agency/og-image.jpg'
})
</script>
