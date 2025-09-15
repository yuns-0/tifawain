<template>
  <section class="section bg-ink-50 dark:bg-ink-900">
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
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="card p-8 relative"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <!-- Quote Icon -->
          <div class="absolute top-6 right-6 text-primary-500/20">
            <Icon name="heroicons:chat-bubble-left-right" class="w-8 h-8" />
          </div>

          <!-- Content -->
          <blockquote class="text-lg text-muted-700 dark:text-muted-300 mb-6 leading-7 line-clamp-3">
            "{{ testimonial.content }}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4">
              <span class="text-white font-semibold text-lg">
                {{ getInitials(testimonial.name) }}
              </span>
            </div>
            <div>
              <div class="font-semibold text-ink-900 dark:text-ink-50">
                {{ testimonial.name }}
              </div>
              <div class="text-sm text-muted-600 dark:text-muted-400">
                {{ testimonial.role }}, {{ testimonial.company }}
              </div>
            </div>
          </div>

          <!-- Rating -->
          <div v-if="testimonial.rating" class="flex items-center mt-4">
            <div class="flex space-x-1">
              <Icon
                v-for="i in 5"
                :key="i"
                :name="i <= testimonial.rating ? 'heroicons:star-solid' : 'heroicons:star'"
                class="w-4 h-4 text-yellow-400"
              />
            </div>
            <span class="ml-2 text-sm text-muted-600 dark:text-muted-400">
              {{ testimonial.rating }}/5
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating?: number
}

interface Props {
  title: string
  subtitle: string
  testimonials: Testimonial[]
}

defineProps<Props>()

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
</script>
