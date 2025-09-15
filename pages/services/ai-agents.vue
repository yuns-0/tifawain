<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
    <AppHeader />
    
    <main class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            AI Agents
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-300">
            Intelligent AI agents and chatbots to automate customer service and business processes.
          </p>
        </div>

        <div class="prose prose-lg max-w-none dark:prose-invert">
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h2>AI Agent Services</h2>
            <ul>
              <li>Customer Service Chatbots</li>
              <li>Lead Qualification Agents</li>
              <li>Content Generation Bots</li>
              <li>Data Analysis Assistants</li>
              <li>Process Automation Agents</li>
              <li>Voice Assistants</li>
            </ul>

            <h2>Technologies We Use</h2>
            <ul>
              <li>OpenAI GPT models</li>
              <li>Anthropic Claude</li>
              <li>Custom fine-tuned models</li>
              <li>LangChain for orchestration</li>
              <li>Vector databases</li>
              <li>RAG (Retrieval-Augmented Generation)</li>
            </ul>

            <h2>Applications</h2>
            <ul>
              <li>24/7 customer support</li>
              <li>Lead scoring and qualification</li>
              <li>Content creation and editing</li>
              <li>Data analysis and insights</li>
              <li>Process optimization</li>
              <li>Personalized recommendations</li>
            </ul>

            <h2>Benefits</h2>
            <ul>
              <li>Reduce support costs by 60%</li>
              <li>Improve response times</li>
              <li>Scale operations without hiring</li>
              <li>Provide consistent service quality</li>
              <li>Gather valuable customer insights</li>
            </ul>

            <h2>Timeline</h2>
            <p>AI agent development typically takes 2-4 weeks depending on complexity.</p>

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
  title: 'AI Agents - Tifawin Automation Agency',
  description: 'Intelligent AI agents and chatbots to automate customer service and business processes.',
  ogTitle: 'AI Agents - Tifawin Automation Agency',
  ogDescription: 'Intelligent AI agents and chatbots to automate customer service and business processes.',
  ogType: 'website'
})
</script>
