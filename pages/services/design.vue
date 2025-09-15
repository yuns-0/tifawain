<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
    <AppHeader />
    
    <main class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Design Services
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-300">
            UI/UX design, prototypes, and design systems that convert visitors into customers.
          </p>
        </div>

        <div class="prose prose-lg max-w-none dark:prose-invert">
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h2>Design Services</h2>
            <ul>
              <li>User Interface (UI) Design</li>
              <li>User Experience (UX) Design</li>
              <li>Wireframing and Prototyping</li>
              <li>Design Systems</li>
              <li>Brand Identity</li>
              <li>Logo Design</li>
            </ul>

            <h2>Our Process</h2>
            <ol>
              <li>Research and user analysis</li>
              <li>Wireframing and information architecture</li>
              <li>Visual design and prototyping</li>
              <li>User testing and iteration</li>
              <li>Final design delivery</li>
            </ol>

            <h2>Tools We Use</h2>
            <ul>
              <li>Figma - Collaborative design</li>
              <li>Adobe Creative Suite</li>
              <li>Sketch</li>
              <li>Principle for animations</li>
              <li>InVision for prototyping</li>
            </ul>

            <h2>Results</h2>
            <ul>
              <li>Average 36% increase in conversions</li>
              <li>Improved user engagement</li>
              <li>Reduced bounce rates</li>
              <li>Enhanced brand perception</li>
            </ul>

            <h2>Timeline</h2>
            <p>Most design projects are completed within 1-3 weeks.</p>

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
  title: 'Design Services - Tifawin Automation Agency',
  description: 'UI/UX design, prototypes, and design systems that convert visitors into customers.',
  ogTitle: 'Design Services - Tifawin Automation Agency',
  ogDescription: 'UI/UX design, prototypes, and design systems that convert visitors into customers.',
  ogType: 'website'
})
</script>
