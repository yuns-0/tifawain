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
          v-for="(pricing, index) in pricingTiers"
          :key="pricing.name"
          class="card p-8 relative"
          :class="{
            'ring-2 ring-primary-500 scale-105': pricing.featured,
            'lg:scale-95': !pricing.featured && index === 1
          }"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Featured Badge -->
          <div
            v-if="pricing.featured"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2"
          >
            <div class="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Most Popular
            </div>
          </div>

          <!-- Header -->
          <div class="text-center mb-8">
            <h3 class="heading-card text-ink-900 dark:text-ink-50 mb-2">
              {{ pricing.name }}
            </h3>
            <p class="body-text mb-4">
              {{ pricing.description }}
            </p>
            <div class="flex items-baseline justify-center">
              <span class="text-4xl font-bold text-ink-900 dark:text-ink-50">
                {{ formatCurrency(pricing.price) }}
              </span>
              <span v-if="pricing.period" class="text-muted-600 dark:text-muted-400 ml-2">
                /{{ pricing.period }}
              </span>
            </div>
          </div>

          <!-- Features -->
          <ul class="space-y-4 mb-8">
            <li
              v-for="feature in pricing.features"
              :key="feature"
              class="flex items-start"
            >
              <Icon
                name="heroicons:check"
                class="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0"
              />
              <span class="text-muted-700 dark:text-muted-300">
                {{ feature }}
              </span>
            </li>
          </ul>

          <!-- CTA -->
          <NuxtLink
            :to="pricing.cta.href"
            class="block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200"
            :class="pricing.featured ? 'btn-primary' : 'btn-outline'"
          >
            {{ pricing.cta.text }}
          </NuxtLink>

          <!-- Additional Info -->
          <div v-if="pricing.note" class="mt-4 text-center">
            <p class="text-sm text-muted-600 dark:text-muted-400">
              {{ pricing.note }}
            </p>
          </div>
        </div>
      </div>

      <!-- Custom Enterprise Option -->
      <div class="text-center mt-12">
        <div class="card p-8 max-w-2xl mx-auto">
          <h3 class="heading-card text-ink-900 dark:text-ink-50 mb-4">
            Need Something Custom?
          </h3>
          <p class="body-text mb-6">
            We offer custom solutions for enterprise clients with specific requirements.
          </p>
          <NuxtLink
            to="/contact"
            class="btn-primary"
          >
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { formatCurrency } from '~/utils/format'

interface PricingCTA {
  text: string
  href: string
}

interface PricingTier {
  name: string
  description: string
  price: number
  period?: string
  features: string[]
  cta: PricingCTA
  featured?: boolean
  note?: string
}

interface Props {
  title: string
  subtitle: string
  pricingTiers: PricingTier[]
}

defineProps<Props>()
</script>
