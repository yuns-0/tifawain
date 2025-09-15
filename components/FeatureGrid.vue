<template>
  <section class="section">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-section mb-4">
          {{ title }}
        </h2>
        <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto leading-7">
          {{ subtitle }}
        </p>
      </div>

      <div class="grid-cards">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="card-hover text-center group"
        >
          <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon :name="feature.icon" class="w-8 h-8 text-white" />
          </div>
          
          <h3 class="heading-card mb-4 text-ink-900 dark:text-ink-50">
            {{ feature.title }}
          </h3>
          
          <p class="body-text leading-7">
            {{ feature.description }}
          </p>
          
          <div v-if="feature.metrics" class="mt-6 pt-6 border-t border-ink-200 dark:border-ink-700">
            <div class="text-2xl font-bold text-primary-500 mb-1">
              {{ feature.metrics.value }}
            </div>
            <div class="text-sm text-muted-600 dark:text-muted-400">
              {{ feature.metrics.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FeatureMetric {
  value: string
  label: string
}

interface Feature {
  icon: string
  title: string
  description: string
  metrics?: FeatureMetric
}

interface Props {
  title: string
  subtitle: string
  features: Feature[]
}

defineProps<Props>()
</script>
