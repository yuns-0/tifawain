<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
    <AppHeader />
    
    <main class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Careers
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-300">
            Join our team and help businesses automate, design, and grow.
          </p>
        </div>

        <div class="prose prose-lg max-w-none dark:prose-invert">
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h2>Open Positions</h2>
            
            <div class="space-y-8">
              <div class="border-l-4 border-primary-500 pl-6">
                <h3 class="text-xl font-semibold mb-2">Senior Full-Stack Developer</h3>
                <p class="text-muted-600 dark:text-muted-400 mb-4">
                  Lead development of custom web applications and automation solutions.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">Vue.js</span>
                  <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">Node.js</span>
                  <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">TypeScript</span>
                  <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">PostgreSQL</span>
                </div>
                <NuxtLink to="/contact" class="text-primary-500 hover:text-primary-600 font-semibold">
                  Apply Now →
                </NuxtLink>
              </div>

              <div class="border-l-4 border-secondary-500 pl-6">
                <h3 class="text-xl font-semibold mb-2">UI/UX Designer</h3>
                <p class="text-muted-600 dark:text-muted-400 mb-4">
                  Create beautiful, user-centered designs that drive business results.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 text-sm rounded-full">Figma</span>
                  <span class="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 text-sm rounded-full">Adobe Creative Suite</span>
                  <span class="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 text-sm rounded-full">Prototyping</span>
                  <span class="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 text-sm rounded-full">User Research</span>
                </div>
                <NuxtLink to="/contact" class="text-secondary-500 hover:text-secondary-600 font-semibold">
                  Apply Now →
                </NuxtLink>
              </div>

              <div class="border-l-4 border-accent-500 pl-6">
                <h3 class="text-xl font-semibold mb-2">Automation Specialist</h3>
                <p class="text-muted-600 dark:text-muted-400 mb-4">
                  Design and implement workflow automation solutions using modern tools.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 text-sm rounded-full">n8n</span>
                  <span class="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 text-sm rounded-full">Zapier</span>
                  <span class="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 text-sm rounded-full">Make</span>
                  <span class="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 text-sm rounded-full">APIs</span>
                </div>
                <NuxtLink to="/contact" class="text-accent-500 hover:text-accent-600 font-semibold">
                  Apply Now →
                </NuxtLink>
              </div>
            </div>

            <h2>Why Work With Us?</h2>
            <ul>
              <li>Remote-first culture with flexible hours</li>
              <li>Competitive salary and equity options</li>
              <li>Professional development budget</li>
              <li>Latest tools and technology</li>
              <li>Collaborative, supportive team</li>
              <li>Opportunity to work with diverse clients</li>
            </ul>

            <h2>Our Values</h2>
            <ul>
              <li><strong>Quality First:</strong> We deliver exceptional work that exceeds expectations</li>
              <li><strong>Continuous Learning:</strong> We stay ahead of technology trends</li>
              <li><strong>Client Success:</strong> Our success is measured by our clients' success</li>
              <li><strong>Innovation:</strong> We embrace new technologies and methodologies</li>
              <li><strong>Collaboration:</strong> We work together to achieve common goals</li>
            </ul>

            <div class="mt-8 text-center">
              <NuxtLink to="/contact" class="btn-primary">
                Apply Now
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
  title: 'Careers - Tifawin Automation Agency',
  description: 'Join our team and help businesses automate, design, and grow.',
  ogTitle: 'Careers - Tifawin Automation Agency',
  ogDescription: 'Join our team and help businesses automate, design, and grow.',
  ogType: 'website'
})
</script>
