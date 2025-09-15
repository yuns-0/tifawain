<template>
  <div>
    <!-- Hero Section -->
    <Hero
      badge="Portfolio"
      title="Success Stories"
      subtitle="See how we've helped businesses automate workflows, improve design, and accelerate growth."
    />

    <!-- Filter Section -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Work
            </h2>
            <p class="text-xl text-muted-600 dark:text-muted-400">
              Explore our portfolio of successful projects across different industries and services.
            </p>
          </div>

          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button
              v-for="filter in filters"
              :key="filter.value"
              @click="activeFilter = filter.value"
              :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all duration-200',
                activeFilter === filter.value
                  ? 'bg-primary-500 text-white'
                  : 'bg-white dark:bg-ink-800 text-ink-600 dark:text-ink-400 hover:bg-primary-100 dark:hover:bg-primary-900'
              ]"
            >
              {{ filter.label }}
            </button>
          </div>

          <!-- Portfolio Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="project in filteredProjects"
              :key="project.slug"
              class="card-hover overflow-hidden group"
            >
              <div class="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <Icon name="heroicons:photo" class="w-16 h-16 text-white/50" />
              </div>
              
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-4">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
                
                <h3 class="text-xl font-display font-semibold mb-3 text-ink-900 dark:text-ink-50">
                  {{ project.title }}
                </h3>
                
                <p class="text-muted-600 dark:text-muted-400 mb-4">
                  {{ project.excerpt }}
                </p>

                <div class="flex items-center justify-between">
                  <div class="text-sm text-muted-500">
                    {{ project.client }}
                  </div>
                  <NuxtLink
                    :to="`/portfolio/${project.slug}`"
                    class="text-primary-500 hover:text-primary-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Read case study
                    <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filteredProjects.length === 0" class="text-center py-12">
            <Icon name="heroicons:folder-open" class="w-16 h-16 text-muted-400 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-ink-900 dark:text-ink-50 mb-2">
              No projects found
            </h3>
            <p class="text-muted-600 dark:text-muted-400">
              Try selecting a different filter or check back later for new projects.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <Stats
      title="Our Impact"
      subtitle="Numbers that tell our story of success and client satisfaction."
      :stats="portfolioStats"
    />

    <!-- CTA Section -->
    <CTA
      title="Ready to start your project?"
      subtitle="Let's discuss how we can help you achieve similar results for your business."
      :primary-cta="{ text: 'Get Started', href: '/contact' }"
      :secondary-cta="{ text: 'View Services', href: '/services' }"
    />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Portfolio - Tifawin Automation Agency',
  description: 'Explore our portfolio of successful projects. See how we\'ve helped businesses automate workflows, improve design, and accelerate growth.',
  ogTitle: 'Portfolio - Tifawin Automation Agency',
  ogDescription: 'Explore our portfolio of successful projects across different industries.',
  ogImage: 'https://tifawin.agency/og-image.jpg',
  ogUrl: 'https://tifawin.agency/portfolio'
})

// Filter state
const activeFilter = ref('all')

// Filter options
const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'automation', label: 'Automation' },
  { value: 'design', label: 'Design' },
  { value: 'development', label: 'Development' },
  { value: 'branding', label: 'Branding' },
  { value: 'e-commerce', label: 'E-commerce' },
  { value: 'saas', label: 'SaaS' }
]

// Portfolio projects
const projects = [
  {
    slug: 'ecommerce-automation',
    title: 'E-commerce Automation Revolution',
    excerpt: 'Automated order processing, inventory management, and customer support for a growing e-commerce business.',
    client: 'TechCorp',
    tags: ['Automation', 'E-commerce'],
    category: 'automation'
  },
  {
    slug: 'saas-redesign',
    title: 'SaaS Platform Redesign',
    excerpt: 'Complete UI/UX redesign that increased user engagement by 40% and reduced churn by 25%.',
    client: 'StartupXYZ',
    tags: ['Design', 'SaaS'],
    category: 'design'
  },
  {
    slug: 'api-integration',
    title: 'Multi-Platform API Integration',
    excerpt: 'Built custom APIs and integrations connecting multiple platforms for seamless data flow.',
    client: 'InnovateLab',
    tags: ['Development', 'APIs'],
    category: 'development'
  },
  {
    slug: 'brand-identity',
    title: 'Complete Brand Identity',
    excerpt: 'Created comprehensive brand strategy, visual identity, and guidelines for a fintech startup.',
    client: 'FutureCo',
    tags: ['Branding', 'Strategy'],
    category: 'branding'
  },
  {
    slug: 'workflow-automation',
    title: 'Enterprise Workflow Automation',
    excerpt: 'Implemented n8n-based automation reducing manual work by 60% across multiple departments.',
    client: 'ScaleUp',
    tags: ['Automation', 'Enterprise'],
    category: 'automation'
  },
  {
    slug: 'mobile-app',
    title: 'Mobile App Development',
    excerpt: 'Built a cross-platform mobile app with real-time features and offline capabilities.',
    client: 'NextGen',
    tags: ['Development', 'Mobile'],
    category: 'development'
  }
]

// Computed filtered projects
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})

// Portfolio stats
const portfolioStats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '25+', label: 'Happy Clients' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '2wks', label: 'Avg Delivery Time' }
]
</script>
