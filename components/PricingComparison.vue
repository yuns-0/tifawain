<template>
  <section>
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="heading-section mb-3">Compare models</h2>
        <p class="text-base leading-7 text-muted-600 dark:text-muted-400">No public rates. Choose the model that fits your pipeline.</p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full bg-white dark:bg-ink-800 rounded-2xl overflow-hidden">
          <thead>
            <tr class="bg-ink-50 dark:bg-ink-900">
              <th class="px-6 py-4 text-left font-semibold text-ink-900 dark:text-ink-50">Model</th>
              <th class="px-6 py-4 text-left font-semibold text-ink-900 dark:text-ink-50">Best for</th>
              <th class="px-6 py-4 text-left font-semibold text-ink-900 dark:text-ink-50">Billing style</th>
              <th class="px-6 py-4 text-left font-semibold text-ink-900 dark:text-ink-50">Commitment</th>
              <th class="px-6 py-4 text-left font-semibold text-ink-900 dark:text-ink-50">Includes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-ink-200 dark:divide-ink-700">
            <tr v-for="row in rows" :key="row.model">
              <td class="px-6 py-4 font-semibold">
                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 mr-2">{{ row.tag }}</span>
                {{ row.model }}
              </td>
              <td class="px-6 py-4">{{ row.bestFor }}</td>
              <td class="px-6 py-4">{{ row.billing }}</td>
              <td class="px-6 py-4">{{ row.commitment }}</td>
              <td class="px-6 py-4">{{ row.includes }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const rows = [
  {
    tag: 'Retainer',
    model: 'Agency Retainer (Monthly)',
    bestFor: 'Predictable ongoing capacity across small/medium projects',
    billing: 'Fixed monthly engagement',
    commitment: 'Ongoing with adjustable capacity',
    includes: 'Queue-based delivery, agreed SLA, weekly reporting'
  },
  {
    tag: 'Bulk',
    model: 'Bulk Projects (10, 50, 100+)',
    bestFor: 'Seasonal spikes or large backlogs',
    billing: 'Per batch under one agreement',
    commitment: 'Batch-based, timeboxed',
    includes: 'Dedicated pods, staffing & delivery rhythm'
  },
  {
    tag: 'Staff',
    model: 'Staff Augmentation (Resource)',
    bestFor: 'Adding vetted talent into your team',
    billing: 'Resource-based engagement',
    commitment: 'Rolling, replace-or-scale flexibility',
    includes: 'Onboarding, clear reporting, replace on request'
  },
  {
    tag: 'Single',
    model: 'Single Project',
    bestFor: 'One focused scope with clear milestones',
    billing: 'Per project',
    commitment: 'Defined scope & timeline',
    includes: 'Discovery, milestones, ownership to ship'
  },
  {
    tag: 'Hybrid',
    model: 'Hybrid',
    bestFor: 'Mix of BAU, complex builds, and one-offs',
    billing: 'Blended across models',
    commitment: 'Flexible, tailored to pipeline',
    includes: 'Integrated plan across models'
  }
]
</script>

<style scoped>
</style>

