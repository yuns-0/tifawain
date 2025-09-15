<template>
  <section class="section bg-gradient-to-br from-ink-50 via-primary-50 to-secondary-50 dark:from-ink-950 dark:via-ink-900 dark:to-ink-800 relative overflow-hidden">
    <!-- Modern Background Elements -->
    <div class="absolute inset-0 bg-noise opacity-5"></div>
    <div class="absolute top-0 left-0 w-full h-full">
      <!-- Floating geometric shapes -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-neon-cyan/20 rounded-organic blur-3xl animate-morph"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-secondary-500/20 to-neon-pink/20 rounded-blob blur-3xl animate-float" style="animation-delay: -2s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-neon-purple/10 to-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <!-- Hexagonal shapes -->
      <div class="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 shape-hexagon animate-rotate-slow"></div>
      <div class="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-neon-pink/30 to-neon-green/30 shape-hexagon animate-rotate-slow" style="animation-delay: -5s;"></div>
      
      <!-- Organic blob shapes -->
      <div class="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-accent-500/15 to-neon-orange/15 rounded-blob animate-blob"></div>
      <div class="absolute bottom-1/3 left-1/3 w-36 h-36 bg-gradient-to-br from-neon-green/15 to-secondary-500/15 rounded-organic animate-blob" style="animation-delay: -3s;"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Modern Badge -->
        <div class="inline-flex items-center px-6 py-3 rounded-full glass-advanced border border-neon-cyan/20 mb-8 animate-fade-in">
          <Icon name="heroicons:sparkles" class="w-5 h-5 text-neon-cyan mr-3 animate-wiggle" />
          <span class="text-sm font-semibold gradient-text-neon">
            {{ badge }}
          </span>
        </div>

        <!-- Modern Headline -->
        <h1 class="heading-hero mb-8 leading-tight animate-slide-up">
          <span class="gradient-text-rainbow text-glow">{{ title }}</span>
        </h1>

        <!-- Modern Subtitle -->
        <p class="text-xl lg:text-2xl text-muted-600 dark:text-muted-400 mb-12 max-w-3xl mx-auto leading-7 animate-slide-up" style="animation-delay: 0.2s;">
          {{ subtitle }}
        </p>

        <!-- Modern CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up" style="animation-delay: 0.4s;">
          <NuxtLink
            v-if="primaryCta"
            :to="primaryCta.href"
            class="btn-primary text-lg px-8 py-4 magnetic relative overflow-hidden group"
          >
            <span class="relative z-10 flex items-center">
              {{ primaryCta.text }}
              <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </NuxtLink>
          
          <NuxtLink
            v-if="secondaryCta"
            :to="secondaryCta.href"
            class="btn-outline text-lg px-8 py-4 magnetic glass-advanced border-neon-purple/30 hover:border-neon-purple/60 hover:shadow-neon-purple transition-all duration-300"
          >
            {{ secondaryCta.text }}
          </NuxtLink>
        </div>

        <!-- Modern Stats -->
        <div v-if="stats" class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-slide-up" style="animation-delay: 0.6s;">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="text-center group"
          >
            <div class="relative">
              <div class="text-3xl md:text-4xl font-bold gradient-text-neon mb-2 group-hover:scale-110 transition-transform duration-300">
                {{ stat.value }}
              </div>
              <div class="absolute inset-0 text-3xl md:text-4xl font-bold text-neon-cyan/20 blur-sm group-hover:blur-none transition-all duration-300">
                {{ stat.value }}
              </div>
            </div>
            <div class="text-sm text-muted-600 dark:text-muted-400 font-medium">
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
