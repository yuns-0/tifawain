<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
    <AppHeader />
    
    <main class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Branding Services
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-300">
            Complete brand identity and visual design solutions for modern businesses.
          </p>
        </div>

        <div class="prose prose-lg max-w-none dark:prose-invert">
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h2>Branding Services</h2>
            <ul>
              <li>Brand Strategy and Positioning</li>
              <li>Logo Design and Brand Identity</li>
              <li>Visual Identity Systems</li>
              <li>Brand Guidelines</li>
              <li>Marketing Materials</li>
              <li>Website Design</li>
            </ul>

            <h2>Our Approach</h2>
            <ol>
              <li>Brand discovery and strategy</li>
              <li>Concept development and exploration</li>
              <li>Visual identity creation</li>
              <li>Brand guidelines documentation</li>
              <li>Implementation across touchpoints</li>
            </ol>

            <h2>Deliverables</h2>
            <ul>
              <li>Logo variations and usage guidelines</li>
              <li>Color palette and typography</li>
              <li>Brand voice and messaging</li>
              <li>Business card and letterhead designs</li>
              <li>Social media templates</li>
            </ul>

            <h2>Timeline</h2>
            <p>Branding projects typically take 2-4 weeks to complete.</p>

            <div class="mt-8 text-center">
              <NuxtLink to="/contact" class="btn-primary">
                Get Started
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Branding Services - Tifawin Automation Agency',
  description: 'Complete brand identity and visual design solutions for modern businesses.',
  ogTitle: 'Branding Services - Tifawin Automation Agency',
  ogDescription: 'Complete brand identity and visual design solutions for modern businesses.',
  ogType: 'website'
})
</script>
