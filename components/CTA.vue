<template>
  <section class="section bg-gradient-to-br from-primary-500 to-secondary-500 text-white relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-noise opacity-10"></div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
          {{ title }}
        </h2>
        
        <p class="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {{ subtitle }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            v-if="primaryCta"
            :to="primaryCta.href"
            class="bg-white text-primary-500 hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {{ primaryCta.text }}
            <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
          </NuxtLink>
          
          <NuxtLink
            v-if="secondaryCta"
            :to="secondaryCta.href"
            class="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105"
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
