<template>
  <section class="section relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-ink-50/50 to-primary-50/30 dark:from-ink-900/50 dark:to-primary-900/20"></div>
    <div class="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-organic blur-3xl animate-morph"></div>
    <div class="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-neon-pink/10 to-neon-green/10 rounded-blob blur-3xl animate-float"></div>
    
    <div class="container-custom relative z-10">
      <div class="text-center mb-16">
        <h2 class="heading-section mb-4 gradient-text-ocean">
          {{ title }}
        </h2>
        <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto leading-7">
          {{ subtitle }}
        </p>
      </div>

      <div class="grid-cards-4">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="card-organic text-center group relative overflow-hidden"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Background gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <!-- Icon container with modern shape -->
          <div class="relative z-10">
            <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-organic flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-neon-cyan/20">
              <Icon :name="feature.icon" class="w-10 h-10 text-white" />
            </div>
            
            <h3 class="heading-card mb-4 text-ink-900 dark:text-ink-50 group-hover:text-neon-cyan transition-colors duration-300">
              {{ feature.title }}
            </h3>
            
            <p class="body-text leading-7 mb-6">
              {{ feature.description }}
            </p>
            
            <div v-if="feature.metrics" class="mt-6 pt-6 border-t border-gradient-to-r from-transparent via-neon-cyan/30 to-transparent">
              <div class="text-2xl font-bold gradient-text-neon mb-1 group-hover:scale-105 transition-transform duration-300">
                {{ feature.metrics.value }}
              </div>
              <div class="text-sm text-muted-600 dark:text-muted-400 font-medium">
                {{ feature.metrics.label }}
              </div>
            </div>
          </div>
          
          <!-- Floating elements -->
          <div class="absolute top-4 right-4 w-2 h-2 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
          <div class="absolute bottom-4 left-4 w-1 h-1 bg-neon-purple rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" style="animation-delay: 0.5s;"></div>
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
