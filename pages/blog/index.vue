<template>
  <div>
    <!-- Hero Section -->
    <Hero
      badge="Blog"
      title="Insights & Updates"
      subtitle="Stay updated with the latest trends in automation, design, and business growth."
    />

    <!-- Featured Post -->
    <section class="section" v-if="featuredPost">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured Post
            </h2>
          </div>

          <article class="card-hover overflow-hidden">
            <div class="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
              <Icon name="heroicons:document-text" class="w-16 h-16 text-white/50" />
            </div>
            
            <div class="p-8">
              <div class="flex items-center space-x-2 mb-4">
                <span
                  v-for="tag in featuredPost.tags"
                  :key="tag"
                  class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
              
              <h3 class="text-3xl font-display font-semibold mb-4 text-ink-900 dark:text-ink-50">
                {{ featuredPost.title }}
              </h3>
              
              <p class="text-xl text-muted-600 dark:text-muted-400 mb-6">
                {{ featuredPost.excerpt }}
              </p>

              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4 text-sm text-muted-500">
                  <span>{{ formatDate(featuredPost.date) }}</span>
                  <span>•</span>
                  <span>{{ featuredPost.author }}</span>
                </div>
                <NuxtLink
                  :to="featuredPost.href"
                  class="btn-primary"
                >
                  Read More
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
              Latest Posts
            </h2>
            <p class="text-xl text-muted-600 dark:text-muted-400">
              Discover insights, tutorials, and industry trends.
            </p>
          </div>

          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button
              v-for="category in categories"
              :key="category.value"
              @click="activeCategory = category.value"
              :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all duration-200',
                activeCategory === category.value
                  ? 'bg-primary-500 text-white'
                  : 'bg-white dark:bg-ink-800 text-ink-600 dark:text-ink-400 hover:bg-primary-100 dark:hover:bg-primary-900'
              ]"
            >
              {{ category.label }}
            </button>
          </div>

          <!-- Posts Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              v-for="post in filteredPosts"
              :key="post.slug"
              class="card-hover overflow-hidden group"
            >
              <div class="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <Icon name="heroicons:document-text" class="w-16 h-16 text-white/50" />
              </div>
              
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
                
                <h3 class="text-lg font-display font-semibold mb-3 text-ink-900 dark:text-ink-50">
                  {{ post.title }}
                </h3>
                
                <p class="text-muted-600 dark:text-muted-400 mb-4 text-sm">
                  {{ post.excerpt }}
                </p>

                <div class="flex items-center justify-between">
                  <div class="text-xs text-muted-500">
                    {{ formatDate(post.date) }}
                  </div>
                  <NuxtLink
                    :to="post.href"
                    class="text-primary-500 hover:text-primary-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Read more
                    <Icon name="heroicons:arrow-right" class="w-3 h-3 ml-1" />
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>

          <!-- Empty State -->
          <div v-if="filteredPosts.length === 0" class="text-center py-12">
            <Icon name="heroicons:document-text" class="w-16 h-16 text-muted-400 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-ink-900 dark:text-ink-50 mb-2">
              No posts found
            </h3>
            <p class="text-muted-600 dark:text-muted-400">
              Try selecting a different category or check back later for new posts.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="section">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-display font-bold mb-4">
            Stay Updated
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 mb-8">
            Get the latest insights on automation, design, and growth delivered to your inbox.
          </p>
          
          <div class="card p-8">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '~/utils/format'

// SEO
useSeoMeta({
  title: 'Blog - Tifawin Automation Agency',
  description: 'Stay updated with the latest trends in automation, design, and business growth. Read our insights, tutorials, and industry updates.',
  ogTitle: 'Blog - Tifawin Automation Agency',
  ogDescription: 'Stay updated with the latest trends in automation, design, and business growth.',
  ogImage: 'https://tifawin.agency/og-image.jpg',
  ogUrl: 'https://tifawin.agency/blog'
})

// Filter state
const activeCategory = ref('all')

// Categories
const categories = [
  { value: 'all', label: 'All Posts' },
  { value: 'automation', label: 'Automation' },
  { value: 'design', label: 'Design' },
  { value: 'development', label: 'Development' },
  { value: 'business', label: 'Business' },
  { value: 'tutorials', label: 'Tutorials' }
]

// Blog posts
const posts = [
  {
    slug: 'future-business-automation',
    title: 'The Future of Business Automation in 2024',
    excerpt: 'How AI and automation are reshaping the way businesses operate in 2024 and beyond.',
    tags: ['Automation', 'AI'],
    date: '2024-01-15',
    author: 'Tifawin Team',
    href: '/blog/future-business-automation',
    category: 'automation'
  },
  {
    slug: 'design-systems-scale',
    title: 'Design Systems That Scale',
    excerpt: 'Building maintainable design systems for growing product teams and organizations.',
    tags: ['Design', 'Systems'],
    date: '2024-01-10',
    author: 'Tifawin Team',
    href: '/blog/design-systems-scale',
    category: 'design'
  },
  {
    slug: 'api-first-development',
    title: 'API-First Development Best Practices',
    excerpt: 'Why API-first development is crucial for modern applications and how to implement it.',
    tags: ['Development', 'APIs'],
    date: '2024-01-05',
    author: 'Tifawin Team',
    href: '/blog/api-first-development',
    category: 'development'
  },
  {
    slug: 'automation-roi-calculator',
    title: 'How to Calculate Automation ROI',
    excerpt: 'A comprehensive guide to measuring the return on investment for automation projects.',
    tags: ['Automation', 'Business'],
    date: '2024-01-01',
    author: 'Tifawin Team',
    href: '/blog/automation-roi-calculator',
    category: 'business'
  },
  {
    slug: 'vue-nuxt-best-practices',
    title: 'Vue.js and Nuxt.js Best Practices',
    excerpt: 'Essential patterns and practices for building scalable Vue.js and Nuxt.js applications.',
    tags: ['Development', 'Tutorials'],
    date: '2023-12-28',
    author: 'Tifawin Team',
    href: '/blog/vue-nuxt-best-practices',
    category: 'tutorials'
  },
  {
    slug: 'branding-startup-guide',
    title: 'Complete Branding Guide for Startups',
    excerpt: 'Everything you need to know about creating a strong brand identity for your startup.',
    tags: ['Branding', 'Business'],
    date: '2023-12-25',
    author: 'Tifawin Team',
    href: '/blog/branding-startup-guide',
    category: 'business'
  }
]

// Featured post (first post)
const featuredPost = computed(() => posts[0])

// Computed filtered posts
const filteredPosts = computed(() => {
  if (activeCategory.value === 'all') {
    return posts.slice(1) // Exclude featured post
  }
  return posts.slice(1).filter(post => post.category === activeCategory.value)
})
</script>
