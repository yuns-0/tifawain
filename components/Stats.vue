<template>
  <section class="section bg-ink-50 dark:bg-ink-900">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
          {{ title }}
        </h2>
        <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="text-center"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
            {{ stat.value }}
          </div>
          <div class="text-sm text-muted-600 dark:text-muted-400 font-medium">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat {
  value: string
  label: string
}

interface Props {
  title: string
  subtitle: string
  stats: Stat[]
}

defineProps<Props>()
</script>
