<template>
  <div>
    <!-- Hero Section -->
    <Hero
      badge="Automate. Design. Grow."
      title="Ship faster, automate smarter, design better"
      subtitle="We help businesses streamline operations with custom automation, beautiful design, and scalable development. From idea to live in weeks, not months."
      :primary-cta="{ text: 'Get Started', href: '/contact' }"
      :secondary-cta="{ text: 'View Portfolio', href: '/portfolio' }"
      :stats="heroStats"
    />

    <!-- Credibility Bar -->
    <section class="py-12 bg-white dark:bg-ink-900 border-b border-ink-200 dark:border-ink-700">
      <div class="container-custom">
        <div class="text-center mb-8">
          <p class="text-sm font-medium text-muted-600 dark:text-muted-400 uppercase tracking-wider">
            Trusted by innovative companies
          </p>
        </div>
        <div class="flex items-center justify-center space-x-12 opacity-60">
          <div class="text-2xl font-bold text-muted-400">TechCorp</div>
          <div class="text-2xl font-bold text-muted-400">StartupXYZ</div>
          <div class="text-2xl font-bold text-muted-400">InnovateLab</div>
          <div class="text-2xl font-bold text-muted-400">FutureCo</div>
          <div class="text-2xl font-bold text-muted-400">NextGen</div>
        </div>
      </div>
    </section>

    <!-- Value Props -->
    <FeatureGrid
      title="Why choose Tifawin?"
      subtitle="We combine technical expertise with creative vision to deliver solutions that drive real business results."
      :features="valueProps"
    />

    <!-- Featured Services -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="eyebrow mb-4">Our Services</div>
          <h2 class="heading-section mb-4">
            What We Do
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto leading-7">
            From automation to design, we provide comprehensive solutions to help your business thrive.
          </p>
        </div>

        <div class="grid-cards">
          <div
            v-for="service in featuredServices"
            :key="service.name"
            class="card-hover group"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="service.icon" class="w-8 h-8 text-white" />
            </div>
            
            <h3 class="heading-card mb-4 text-ink-900 dark:text-ink-50">
              {{ service.name }}
            </h3>
            
            <p class="body-text mb-6">
              {{ service.description }}
            </p>

            <div class="flex items-center justify-between">
              <NuxtLink
                :to="service.href"
                class="text-primary-500 hover:text-primary-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-200"
              >
                Learn more
                <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1" />
              </NuxtLink>
              
              <div class="text-sm text-muted-500">
                {{ service.duration }}
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/services" class="btn-outline">
            View All Services
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="eyebrow mb-4">Our Process</div>
          <h2 class="heading-section mb-4">
            How we work
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto leading-7">
            Our proven process ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>
        <Steps
          title="How we work"
          subtitle="Our proven process ensures your project is delivered on time, on budget, and exceeds expectations."
          :steps="processSteps"
        />
      </div>
    </section>

    <!-- Case Study Highlights -->
    <section class="section">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="eyebrow mb-4">Success Stories</div>
          <h2 class="heading-section mb-4">
            Featured Case Studies
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto leading-7">
            See how we've helped businesses automate workflows, improve design, and accelerate growth.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          <div
            v-for="caseStudy in featuredCaseStudies"
            :key="caseStudy.title"
            class="card-hover overflow-hidden"
          >
            <div class="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
              <Icon name="heroicons:photo" class="w-16 h-16 text-white/50" />
            </div>
            
            <div class="p-8">
              <div class="flex items-center space-x-2 mb-4">
                <span
                  v-for="tag in caseStudy.tags"
                  :key="tag"
                  class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
              
              <h3 class="heading-card mb-3 text-ink-900 dark:text-ink-50 line-clamp-2">
                {{ caseStudy.title }}
              </h3>
              
              <p class="body-text mb-4 line-clamp-2">
                {{ caseStudy.description }}
              </p>

              <div class="flex items-center justify-between">
                <div class="text-sm text-muted-500">
                  {{ caseStudy.client }}
                </div>
                <NuxtLink
                  :to="caseStudy.href"
                  class="text-primary-500 hover:text-primary-600 font-semibold flex items-center"
                >
                  Read case study
                  <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/portfolio" class="btn-outline">
            View All Case Studies
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <TestimonialGrid
      title="What our clients say"
      subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
      :testimonials="testimonials"
    />

    <!-- CTA Section -->
    <CTA
      title="Ready to automate your business?"
      subtitle="Let's discuss how we can help you streamline operations, improve design, and accelerate growth."
      :primary-cta="{ text: 'Book a Strategy Call', href: '/contact' }"
      :secondary-cta="{ text: 'Get a Quote', href: '/pricing' }"
      additional-info="Free consultation • No commitment • Results guaranteed"
    />

    <!-- Blog Preview -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
            Latest Insights
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto">
            Stay updated with the latest trends in automation, design, and business growth.
          </p>
        </div>

        <div class="grid-cards">
          <article
            v-for="post in featuredBlogPosts"
            :key="post.title"
            class="card-hover overflow-hidden"
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
              
              <h3 class="heading-card mb-3 text-ink-900 dark:text-ink-50 line-clamp-2">
                {{ post.title }}
              </h3>
              
              <p class="body-text mb-4 text-sm line-clamp-2">
                {{ post.excerpt }}
              </p>

              <div class="flex items-center justify-between">
                <div class="text-xs text-muted-500">
                  {{ formatDate(post.date) }}
                </div>
                <NuxtLink
                  :to="post.href"
                  class="text-primary-500 hover:text-primary-600 font-semibold text-sm flex items-center"
                >
                  Read more
                  <Icon name="heroicons:arrow-right" class="w-3 h-3 ml-1" />
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/blog" class="btn-outline">
            View All Posts
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact Mini Form -->
    <section class="section">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center">
          <div class="eyebrow mb-4">Get Started</div>
          <h2 class="heading-section mb-4">
            Let's start your project
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 mb-8 leading-7">
            Ready to automate, design, and grow? Get in touch for a free consultation.
          </p>
          
          <div class="card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Tifawin Automation Agency - Automate. Design. Grow.',
  description: 'We help businesses streamline operations with custom automation, beautiful design, and scalable development. From idea to live in weeks, not months.',
  ogTitle: 'Tifawin Automation Agency - Automate. Design. Grow.',
  ogDescription: 'We help businesses streamline operations with custom automation, beautiful design, and scalable development.',
  ogImage: 'https://tifawin.agency/og-image.jpg',
  ogUrl: 'https://tifawin.agency'
})

// Simple date formatter
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Hero stats
const heroStats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '18hrs', label: 'Avg Time Saved/Week' },
  { value: '36%', label: 'Lead Velocity Increase' },
  { value: '2wks', label: 'Avg Delivery Time' }
]

// Value propositions
const valueProps = [
  {
    icon: 'heroicons:rocket-launch',
    title: 'Ship faster',
    description: 'From idea to live in weeks, not months. Our streamlined process gets your project to market quickly.',
    metrics: { value: '2 weeks', label: 'Average delivery time' }
  },
  {
    icon: 'heroicons:cog-6-tooth',
    title: 'Automate the busywork',
    description: 'n8n/Zapier/Make + custom APIs. Eliminate manual tasks and focus on what matters most.',
    metrics: { value: '18 hrs', label: 'Saved per week' }
  },
  {
    icon: 'heroicons:paint-brush',
    title: 'Design that converts',
    description: 'Research-driven UX with measurable lifts. Beautiful design that drives business results.',
    metrics: { value: '36%', label: 'Conversion increase' }
  },
  {
    icon: 'heroicons:code-bracket',
    title: 'Own your stack',
    description: 'Portable code, transparent docs. No vendor lock-in, full control over your technology.',
    metrics: { value: '100%', label: 'Code ownership' }
  }
]

// Featured services
const featuredServices = [
  {
    name: 'Code Development',
    description: 'Custom web applications, APIs, and integrations built with modern technologies.',
    icon: 'heroicons:code-bracket',
    href: '/services/code-dev',
    duration: '2-4 weeks'
  },
  {
    name: 'Automation',
    description: 'Workflow automation with n8n, Zapier, and custom solutions to eliminate manual tasks.',
    icon: 'heroicons:cog-6-tooth',
    href: '/services/automation',
    duration: '1-2 weeks'
  },
  {
    name: 'Design',
    description: 'UI/UX design, prototypes, and design systems that convert visitors into customers.',
    icon: 'heroicons:paint-brush',
    href: '/services/design',
    duration: '1-3 weeks'
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

// Featured case studies
const featuredCaseStudies = [
  {
    title: 'E-commerce Automation Revolution',
    description: 'Automated order processing, inventory management, and customer support for a growing e-commerce business.',
    client: 'TechCorp',
    tags: ['Automation', 'E-commerce'],
    href: '/portfolio/ecommerce-automation'
  },
  {
    title: 'SaaS Platform Redesign',
    description: 'Complete UI/UX redesign that increased user engagement by 40% and reduced churn by 25%.',
    client: 'StartupXYZ',
    tags: ['Design', 'SaaS'],
    href: '/portfolio/saas-redesign'
  }
]

// Testimonials
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechCorp',
    content: 'Tifawin transformed our operations. The automation they built saves us 20 hours per week, and the new design increased our conversion rate by 35%.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'StartupXYZ',
    content: 'Working with Tifawin was a game-changer. They delivered our MVP in just 2 weeks, and the quality exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'InnovateLab',
    content: 'The automation workflows they created have streamlined our entire marketing process. We can now focus on strategy instead of manual tasks.',
    rating: 5
  }
]

// Featured blog posts
const featuredBlogPosts = [
  {
    title: 'The Future of Business Automation',
    excerpt: 'How AI and automation are reshaping the way businesses operate in 2024.',
    tags: ['Automation', 'AI'],
    date: '2024-01-15',
    href: '/blog/future-business-automation'
  },
  {
    title: 'Design Systems That Scale',
    excerpt: 'Building maintainable design systems for growing product teams.',
    tags: ['Design', 'Systems'],
    date: '2024-01-10',
    href: '/blog/design-systems-scale'
  },
  {
    title: 'API-First Development Best Practices',
    excerpt: 'Why API-first development is crucial for modern applications.',
    tags: ['Development', 'APIs'],
    date: '2024-01-05',
    href: '/blog/api-first-development'
  }
]
</script>
