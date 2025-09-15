<template>
  <section class="section">
    <div class="container-custom">
      <div class="mb-8 text-center">
        <h2 class="heading-section mb-3">Models we support</h2>
        <p class="text-base leading-7 text-muted-600 dark:text-muted-400 max-w-3xl mx-auto">
          Choose how you want to engage. Each model includes senior oversight, clean handoffs, and SLA-driven delivery.
        </p>
      </div>

      <!-- Tabs / Radio Cards -->
      <div class="grid-cards" role="tablist" aria-label="Pricing models">
        <button
          v-for="(model, index) in models"
          :key="model.value"
          :id="`model-tab-${model.value}`"
          class="card-hover text-left"
          role="tab"
          :aria-selected="selectedModel === model.value"
          :tabindex="selectedModel === model.value ? 0 : -1"
          :aria-controls="`model-panel-${model.value}`"
          @click="selectModel(model.value)"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300">
                {{ model.badge }}
              </span>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                {{ model.tag }}
              </span>
            </div>
            <Icon name="heroicons:chevron-right" class="w-5 h-5 text-ink-400" />
          </div>
          <h3 class="heading-card text-ink-900 dark:text-ink-50 mb-1">{{ model.title }}</h3>
          <p class="body-text line-clamp-3">{{ model.blurb }}</p>
        </button>
      </div>

      <!-- Panel -->
      <div
        v-for="model in models"
        :key="`panel-${model.value}`"
        :id="`model-panel-${model.value}`"
        class="mt-8"
        role="tabpanel"
        :aria-labelledby="`model-tab-${model.value}`"
        v-show="selectedModel === model.value"
      >
        <div class="card p-8">
          <h3 class="heading-card text-ink-900 dark:text-ink-50 mb-2">{{ model.title }}</h3>
          <p class="body-text mb-6">{{ model.blurb }}</p>

          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <li v-for="feature in model.features" :key="feature" class="flex items-start">
              <Icon name="heroicons:check" class="w-5 h-5 text-secondary-500 mr-3 mt-0.5" />
              <span class="text-muted-700 dark:text-muted-300">{{ feature }}</span>
            </li>
          </ul>

          <div class="flex items-center justify-between flex-wrap gap-3">
            <div class="text-sm text-muted-600 dark:text-muted-400">
              <span class="font-semibold">Includes by default:</span>
              Senior oversight, specs & docs, private repo, weekly reporting, security & QA
            </div>
            <NuxtLink :to="`/contact?model=${model.value}`" class="btn-primary">Contact us</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const models = [
  {
    value: 'retainer',
    title: 'Agency Retainer (Monthly)',
    blurb: 'A fixed monthly agreement for ongoing capacity. Your team drops work into our queue; we deliver within an agreed SLA. Ideal when you want predictable throughput across multiple small/medium projects.',
    tag: 'Retainer',
    badge: 'Monthly',
    features: [
      'Dedicated capacity with agreed SLA',
      'Predictable throughput for BAU',
      'Multi-project support',
      'Weekly reporting & coordination'
    ]
  },
  {
    value: 'bulk',
    title: 'Bulk Projects (10, 50, 100+)',
    blurb: 'Bring a batch of projects and we organize dedicated pods to execute. Useful for seasonal spikes or large backlogs. One commercial agreement; we manage staffing and delivery rhythm.',
    tag: 'Bulk',
    badge: 'Projects',
    features: [
      'Dedicated pods for batches',
      'One agreement for multiple projects',
      'Staffing & rhythm managed by us',
      'Great for seasonal spikes'
    ]
  },
  {
    value: 'staff',
    title: 'Staff Augmentation (Resource)',
    blurb: 'We assign vetted engineers/designers to work with your team daily. They’re on our payroll; you pay us and we handle the rest. Smooth onboarding, clear reporting, and replace-on-request.',
    tag: 'Staff',
    badge: 'Resource',
    features: [
      'Vetted talent embedded daily',
      'Replace-on-request flexibility',
      'Onboarding & reporting managed',
      'Works with your tools & process'
    ]
  },
  {
    value: 'single',
    title: 'Single Project',
    blurb: 'One focused engagement with a defined scope and timeline. We run a short discovery, set deliverables and milestones, and ship.',
    tag: 'Single',
    badge: 'Project',
    features: [
      'Short discovery, clear scope',
      'Milestones & deliverables set',
      'Ownership from kickoff to ship',
      'Clean handoff and docs'
    ]
  },
  {
    value: 'hybrid',
    title: 'Hybrid',
    blurb: 'Mix and match: e.g., a small retainer for BAU + augmented staff for a complex build + occasional one-offs.',
    tag: 'Hybrid',
    badge: 'Mix',
    features: [
      'Combine models to fit pipeline',
      'Scale up/down by need',
      'Cover BAU and complex builds',
      'One integrated partnership'
    ]
  }
]

const selectedModel = ref(models[0].value)
const selectModel = (value: string) => {
  selectedModel.value = value
}
</script>

<style scoped>
</style>

