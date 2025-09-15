<template>
  <div>
    <!-- Hero Section -->
    <Hero
      badge="Services"
      title="Complete solutions for your business"
      subtitle="From automation to design, we provide comprehensive services to help your business thrive in the digital age."
    />

    <!-- Services Overview -->
    <section class="section">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
            Our Services
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto">
            We offer end-to-end solutions covering every aspect of your digital transformation journey.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.name"
            class="card-hover p-8 group"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="service.icon" class="w-8 h-8 text-white" />
            </div>
            
            <h3 class="text-xl font-display font-semibold mb-4 text-ink-900 dark:text-ink-50">
              {{ service.name }}
            </h3>
            
            <p class="text-muted-600 dark:text-muted-400 mb-6 leading-relaxed">
              {{ service.description }}
            </p>

            <div class="space-y-3 mb-6">
              <h4 class="font-semibold text-ink-900 dark:text-ink-50">Key Features:</h4>
              <ul class="space-y-2">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center text-sm text-muted-600 dark:text-muted-400"
                >
                  <Icon name="heroicons:check" class="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div class="flex items-center justify-between">
              <div class="text-sm text-muted-500">
                {{ service.duration }}
              </div>
              <NuxtLink
                :to="service.href"
                class="text-primary-500 hover:text-primary-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-200"
              >
                Learn more
                <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <Steps
      title="How we work"
      subtitle="Our proven process ensures your project is delivered on time, on budget, and exceeds expectations."
      :steps="processSteps"
    />

    <!-- Why Choose Us -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
            Why Choose Tifawin?
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto">
            We combine technical expertise with creative vision to deliver solutions that drive real business results.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="reason in whyChooseUs"
            :key="reason.title"
            class="text-center"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon :name="reason.icon" class="w-8 h-8 text-white" />
            </div>
            
            <h3 class="text-lg font-semibold mb-3 text-ink-900 dark:text-ink-50">
              {{ reason.title }}
            </h3>
            
            <p class="text-muted-600 dark:text-muted-400">
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTA
      title="Ready to get started?"
      subtitle="Let's discuss your project and see how we can help you achieve your goals."
      :primary-cta="{ text: 'Get a Quote', href: '/contact' }"
      :secondary-cta="{ text: 'View Portfolio', href: '/portfolio' }"
    />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Services - Tifawin Automation Agency',
  description: 'Complete solutions for your business: automation, design, development, branding, and more. We help businesses streamline operations and accelerate growth.',
  ogTitle: 'Services - Tifawin Automation Agency',
  ogDescription: 'Complete solutions for your business: automation, design, development, branding, and more.',
  ogImage: 'https://tifawin.agency/og-image.jpg',
  ogUrl: 'https://tifawin.agency/services'
})

// Services data
const services = [
  {
    name: 'Code Development',
    description: 'Custom web applications, APIs, and integrations built with modern technologies and best practices.',
    icon: 'heroicons:code-bracket',
    href: '/services/code-dev',
    duration: '2-4 weeks',
    features: [
      'Custom web applications',
      'RESTful APIs',
      'Database design',
      'Third-party integrations',
      'Performance optimization',
      'Security implementation'
    ]
  },
  {
    name: 'Branding',
    description: 'Complete brand strategy, visual identity, and guidelines that resonate with your target audience.',
    icon: 'heroicons:paint-brush',
    href: '/services/branding',
    duration: '2-3 weeks',
    features: [
      'Brand strategy',
      'Logo design',
      'Visual identity',
      'Brand guidelines',
      'Brand assets',
      'Style guide'
    ]
  },
  {
    name: 'Design',
    description: 'UI/UX design, prototypes, and design systems that convert visitors into customers.',
    icon: 'heroicons:eye',
    href: '/services/design',
    duration: '1-3 weeks',
    features: [
      'User research',
      'Wireframing',
      'UI/UX design',
      'Prototyping',
      'Design systems',
      'User testing'
    ]
  },
  {
    name: 'Automation',
    description: 'Workflow automation with n8n, Zapier, and custom solutions to eliminate manual tasks.',
    icon: 'heroicons:cog-6-tooth',
    href: '/services/automation',
    duration: '1-2 weeks',
    features: [
      'Workflow automation',
      'Data integration',
      'Process optimization',
      'Custom automations',
      'API connections',
      'Monitoring & alerts'
    ]
  },
  {
    name: 'Social Media',
    description: 'Content strategy, scheduling, and analytics to grow your social media presence.',
    icon: 'heroicons:share',
    href: '/services/social-media',
    duration: 'Ongoing',
    features: [
      'Content strategy',
      'Post scheduling',
      'Analytics tracking',
      'Community management',
      'Ad creatives',
      'Performance reports'
    ]
  },
  {
    name: 'AI Agents',
    description: 'Conversational bots, data pipelines, and intelligent automation powered by AI.',
    icon: 'heroicons:cpu-chip',
    href: '/services/ai-agents',
    duration: '2-4 weeks',
    features: [
      'Chatbots',
      'Data pipelines',
      'Knowledge bases',
      'AI integrations',
      'Natural language processing',
      'Machine learning models'
    ]
  }
]

// Process steps
const processSteps = [
  {
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business goals, current challenges, and success metrics.',
    duration: '1-2 days'
  },
  {
    title: 'Design & Planning',
    description: 'Create detailed project plans, wireframes, and technical specifications.',
    duration: '3-5 days'
  },
  {
    title: 'Development & Testing',
    description: 'Build, test, and iterate on your solution with regular check-ins and feedback.',
    duration: '1-3 weeks'
  },
  {
    title: 'Launch & Support',
    description: 'Deploy your solution and provide ongoing support to ensure success.',
    duration: 'Ongoing'
  }
]

// Why choose us
const whyChooseUs = [
  {
    icon: 'heroicons:rocket-launch',
    title: 'Fast Delivery',
    description: 'We deliver projects quickly without compromising quality.'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Quality Assured',
    description: 'Every project undergoes rigorous testing and quality checks.'
  },
  {
    icon: 'heroicons:users',
    title: 'Expert Team',
    description: 'Our team has years of experience in their respective fields.'
  },
  {
    icon: 'heroicons:heart',
    title: 'Client Focused',
    description: 'Your success is our success. We\'re invested in your growth.'
  }
]
</script>
