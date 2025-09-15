<template>
  <section class="section bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-ink-900 dark:to-ink-800 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-noise opacity-5"></div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl animate-float" style="animation-delay: -2s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-ink-800/80 backdrop-blur-sm border border-primary-200 dark:border-primary-800 mb-8">
          <Icon name="heroicons:sparkles" class="w-4 h-4 text-primary-500 mr-2" />
          <span class="text-sm font-medium text-primary-700 dark:text-primary-300">
            {{ badge }}
          </span>
        </div>

        <!-- Headline -->
        <h1 class="heading-hero mb-8 leading-tight">
          <span class="gradient-text">{{ title }}</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl lg:text-2xl text-muted-600 dark:text-muted-400 mb-12 max-w-3xl mx-auto leading-7">
          {{ subtitle }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <NuxtLink
            v-if="primaryCta"
            :to="primaryCta.href"
            class="btn-primary text-lg px-8 py-4 magnetic"
          >
            {{ primaryCta.text }}
            <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
          </NuxtLink>
          
          <NuxtLink
            v-if="secondaryCta"
            :to="secondaryCta.href"
            class="btn-outline text-lg px-8 py-4 magnetic"
          >
            {{ secondaryCta.text }}
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div v-if="stats" class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
          >
            <div class="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
              {{ stat.value }}
            </div>
            <div class="text-sm text-muted-600 dark:text-muted-400">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CTA {
  text: string
  href: string
}

interface Stat {
  value: string
  label: string
}

interface Props {
  badge?: string
  title: string
  subtitle: string
  primaryCta?: CTA
  secondaryCta?: CTA
  stats?: Stat[]
}

withDefaults(defineProps<Props>(), {
  badge: 'Automate. Design. Grow.',
  primaryCta: () => ({ text: 'Get Started', href: '/contact' }),
  secondaryCta: () => ({ text: 'View Portfolio', href: '/portfolio' })
})
</script>
