<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
    <AppHeader />
    
    <main class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Social Media Services
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-300">
            Social media strategy, content creation, and automation to grow your online presence.
          </p>
        </div>

        <div class="prose prose-lg max-w-none dark:prose-invert">
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h2>Social Media Services</h2>
            <ul>
              <li>Social Media Strategy</li>
              <li>Content Creation and Curation</li>
              <li>Posting Automation</li>
              <li>Community Management</li>
              <li>Analytics and Reporting</li>
              <li>Influencer Outreach</li>
            </ul>

            <h2>Platforms We Cover</h2>
            <ul>
              <li>LinkedIn - B2B networking</li>
              <li>Twitter/X - Real-time engagement</li>
              <li>Instagram - Visual storytelling</li>
              <li>Facebook - Community building</li>
              <li>TikTok - Short-form content</li>
            </ul>

            <h2>Our Process</h2>
            <ol>
              <li>Audit and strategy development</li>
              <li>Content calendar creation</li>
              <li>Content production and automation</li>
              <li>Community engagement</li>
              <li>Performance monitoring and optimization</li>
            </ol>

            <h2>Results</h2>
            <ul>
              <li>Increased follower growth</li>
              <li>Higher engagement rates</li>
              <li>More qualified leads</li>
              <li>Improved brand awareness</li>
            </ul>

            <h2>Timeline</h2>
            <p>Social media campaigns typically run for 3-6 months with ongoing optimization.</p>

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
  title: 'Social Media Services - Tifawin Automation Agency',
  description: 'Social media strategy, content creation, and automation to grow your online presence.',
  ogTitle: 'Social Media Services - Tifawin Automation Agency',
  ogDescription: 'Social media strategy, content creation, and automation to grow your online presence.',
  ogType: 'website'
})
</script>
