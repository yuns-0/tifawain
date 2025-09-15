<template>
  <section class="section bg-gradient-to-br from-primary-500 via-neon-purple to-secondary-500 text-white relative overflow-hidden">
    <!-- Modern Background Elements -->
    <div class="absolute inset-0 bg-noise opacity-10"></div>
    <div class="absolute top-0 left-0 w-full h-full">
      <!-- Floating geometric shapes -->
      <div class="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-organic blur-3xl animate-morph"></div>
      <div class="absolute bottom-20 left-20 w-32 h-32 bg-white/10 rounded-blob blur-3xl animate-float" style="animation-delay: -3s;"></div>
      
      <!-- Hexagonal shapes -->
      <div class="absolute top-1/3 left-10 w-24 h-24 bg-white/5 shape-hexagon animate-rotate-slow"></div>
      <div class="absolute bottom-1/3 right-10 w-20 h-20 bg-white/5 shape-hexagon animate-rotate-slow" style="animation-delay: -5s;"></div>
      
      <!-- Organic blob shapes -->
      <div class="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 rounded-blob animate-blob"></div>
      <div class="absolute bottom-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-neon-green/20 to-neon-orange/20 rounded-organic animate-blob" style="animation-delay: -2s;"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-glow animate-slide-up">
          {{ title }}
        </h2>
        
        <p class="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style="animation-delay: 0.2s;">
          {{ subtitle }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up" style="animation-delay: 0.4s;">
          <NuxtLink
            v-if="primaryCta"
            :to="primaryCta.href"
            class="bg-white text-primary-500 hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-depth hover:shadow-neon-cyan/20 relative overflow-hidden group"
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
            class="border-2 border-white/30 text-white hover:bg-white/10 hover:border-neon-cyan px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 glass-advanced hover:shadow-neon-cyan/20"
          >
            {{ secondaryCta.text }}
          </NuxtLink>
        </div>

        <!-- Additional Info -->
        <div v-if="additionalInfo" class="mt-8 text-white/80">
          <p class="text-sm">
            {{ additionalInfo }}
          </p>
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

interface Props {
  title: string
  subtitle: string
  primaryCta?: CTA
  secondaryCta?: CTA
  additionalInfo?: string
}

withDefaults(defineProps<Props>(), {
  primaryCta: () => ({ text: 'Get Started', href: '/contact' }),
  secondaryCta: () => ({ text: 'Learn More', href: '/about' })
})
</script>
