<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
    <AppHeader />
    
    <main class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Automation Services
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-300">
            Workflow automation with n8n, Zapier, and custom solutions to eliminate manual tasks.
          </p>
        </div>

        <div class="prose prose-lg max-w-none dark:prose-invert">
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h2>What We Automate</h2>
            <ul>
              <li>Lead generation and nurturing</li>
              <li>Customer onboarding processes</li>
              <li>Data synchronization between systems</li>
              <li>Email marketing campaigns</li>
              <li>Social media posting</li>
              <li>Invoice and payment processing</li>
            </ul>

            <h2>Tools We Use</h2>
            <ul>
              <li>n8n - Open-source workflow automation</li>
              <li>Zapier - Connect 5000+ apps</li>
              <li>Make (formerly Integromat)</li>
              <li>Custom API integrations</li>
              <li>Webhook implementations</li>
            </ul>

            <h2>Benefits</h2>
            <ul>
              <li>Save 10-20 hours per week</li>
              <li>Reduce human errors</li>
              <li>Scale operations without hiring</li>
              <li>Improve customer experience</li>
              <li>Focus on high-value activities</li>
            </ul>

            <h2>Timeline</h2>
            <p>Most automation projects are completed within 1-2 weeks.</p>

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
  title: 'Automation Services - Tifawin Automation Agency',
  description: 'Workflow automation with n8n, Zapier, and custom solutions to eliminate manual tasks.',
  ogTitle: 'Automation Services - Tifawin Automation Agency',
  ogDescription: 'Workflow automation with n8n, Zapier, and custom solutions to eliminate manual tasks.',
  ogType: 'website'
})
</script>
