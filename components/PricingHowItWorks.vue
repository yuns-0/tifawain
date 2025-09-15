<template>
  <section class="section">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="heading-section mb-3">How pricing works (simple)</h2>
        <p class="text-base leading-7 text-muted-600 dark:text-muted-400 max-w-3xl mx-auto">
          Four clear steps to align on the right model and start delivery fast.
        </p>
      </div>

      <ol class="grid-cards-4" role="list">
        <li v-for="(step, index) in steps" :key="step.title" class="card p-8 animate-on-scroll" :style="{ '--stagger-delay': index }" :aria-label="`Step ${index + 1}: ${step.title}`" tabindex="0">
          <div class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 flex items-center justify-center mb-4">
            <Icon :name="step.icon" class="w-6 h-6" />
          </div>
          <h3 class="heading-card text-ink-900 dark:text-ink-50 mb-2">{{ step.title }}</h3>
          <p class="body-text">{{ step.caption }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    icon: 'heroicons:chat-bubble-left-right',
    title: 'Tell us your shape of work',
    caption: 'Monthly capacity, number of projects, or specific roles needed.'
  },
  {
    icon: 'heroicons:squares-2x2',
    title: 'We map the best model',
    caption: 'Retainer, bulk, staff augmentation, single project, or hybrid.'
  },
  {
    icon: 'heroicons:handshake',
    title: 'We align on scope & SLA',
    caption: 'Turnaround times, revision windows, communication channel, timezone.'
  },
  {
    icon: 'heroicons:rocket-launch',
    title: 'We start fast',
    caption: 'Kickoff, access, and delivery cadence within days.'
  }
]
</script>

<style scoped>
</style>

