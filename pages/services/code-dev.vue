<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
    <AppHeader />
    
    <main class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Code Development
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-300">
            Custom web applications, APIs, and integrations built with modern technologies.
          </p>
        </div>

        <div class="prose prose-lg max-w-none dark:prose-invert">
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h2>What We Build</h2>
            <ul>
              <li>Custom web applications</li>
              <li>RESTful APIs and GraphQL endpoints</li>
              <li>Database design and optimization</li>
              <li>Third-party integrations</li>
              <li>Mobile-responsive interfaces</li>
            </ul>

            <h2>Technologies We Use</h2>
            <ul>
              <li>Vue.js / React / Angular</li>
              <li>Node.js / Python / PHP</li>
              <li>PostgreSQL / MongoDB / MySQL</li>
              <li>AWS / Vercel / Netlify</li>
              <li>Docker / Kubernetes</li>
            </ul>

            <h2>Process</h2>
            <ol>
              <li>Requirements gathering and planning</li>
              <li>Architecture design and database modeling</li>
              <li>Development with regular check-ins</li>
              <li>Testing and quality assurance</li>
              <li>Deployment and ongoing support</li>
            </ol>

            <h2>Timeline</h2>
            <p>Most projects are completed within 2-4 weeks, depending on complexity.</p>

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
  title: 'Code Development - Tifawin Automation Agency',
  description: 'Custom web applications, APIs, and integrations built with modern technologies.',
  ogTitle: 'Code Development - Tifawin Automation Agency',
  ogDescription: 'Custom web applications, APIs, and integrations built with modern technologies.',
  ogType: 'website'
})
</script>
