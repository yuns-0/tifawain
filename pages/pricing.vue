<template>
  <div>
    <!-- Hero Section -->
    <Hero
      badge="Pricing"
      title="Transparent, flexible pricing"
      subtitle="Choose the plan that fits your needs. All plans include our commitment to quality and your success."
    />

    <!-- Pricing Table -->
    <PricingTable
      title="Our Pricing Plans"
      subtitle="Simple, transparent pricing with no hidden fees. Choose what works best for your project."
      :pricing-tiers="pricingTiers"
    />

    <!-- FAQ Section -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
              Pricing FAQ
            </h2>
            <p class="text-xl text-muted-600 dark:text-muted-400">
              Have questions about our pricing? Here are some common questions and answers.
            </p>
          </div>

          <FAQ
            title=""
            subtitle=""
            :faqs="pricingFaqs"
          />
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <Steps
      title="How our pricing works"
      subtitle="We believe in transparent, value-based pricing that aligns with your success."
      :steps="pricingProcess"
    />

    <!-- ROI Calculator Section -->
    <section class="section">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
              Calculate Your ROI
            </h2>
            <p class="text-xl text-muted-600 dark:text-muted-400">
              See how much time and money automation can save your business.
            </p>
          </div>

          <div class="card p-8">
            <RoiCalculator />
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
              Compare Plans
            </h2>
            <p class="text-xl text-muted-600 dark:text-muted-400">
              Detailed comparison of what's included in each plan.
            </p>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full bg-white dark:bg-ink-800 rounded-2xl overflow-hidden">
              <thead>
                <tr class="bg-ink-50 dark:bg-ink-900">
                  <th class="px-6 py-4 text-left font-semibold text-ink-900 dark:text-ink-50">Features</th>
                  <th class="px-6 py-4 text-center font-semibold text-ink-900 dark:text-ink-50">Starter</th>
                  <th class="px-6 py-4 text-center font-semibold text-ink-900 dark:text-ink-50">Growth</th>
                  <th class="px-6 py-4 text-center font-semibold text-ink-900 dark:text-ink-50">Scale</th>
                  <th class="px-6 py-4 text-center font-semibold text-ink-900 dark:text-ink-50">Enterprise</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-ink-200 dark:divide-ink-700">
                <tr v-for="feature in comparisonFeatures" :key="feature.name">
                  <td class="px-6 py-4 font-medium text-ink-900 dark:text-ink-50">{{ feature.name }}</td>
                  <td class="px-6 py-4 text-center">
                    <Icon
                      :name="feature.starter ? 'heroicons:check' : 'heroicons:x-mark'"
                      :class="feature.starter ? 'text-secondary-500' : 'text-red-500'"
                      class="w-5 h-5 mx-auto"
                    />
                  </td>
                  <td class="px-6 py-4 text-center">
                    <Icon
                      :name="feature.growth ? 'heroicons:check' : 'heroicons:x-mark'"
                      :class="feature.growth ? 'text-secondary-500' : 'text-red-500'"
                      class="w-5 h-5 mx-auto"
                    />
                  </td>
                  <td class="px-6 py-4 text-center">
                    <Icon
                      :name="feature.scale ? 'heroicons:check' : 'heroicons:x-mark'"
                      :class="feature.scale ? 'text-secondary-500' : 'text-red-500'"
                      class="w-5 h-5 mx-auto"
                    />
                  </td>
                  <td class="px-6 py-4 text-center">
                    <Icon
                      :name="feature.enterprise ? 'heroicons:check' : 'heroicons:x-mark'"
                      :class="feature.enterprise ? 'text-secondary-500' : 'text-red-500'"
                      class="w-5 h-5 mx-auto"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTA
      title="Ready to get started?"
      subtitle="Choose a plan that fits your needs, or contact us for a custom solution."
      :primary-cta="{ text: 'Contact Us', href: '/contact' }"
      :secondary-cta="{ text: 'View Portfolio', href: '/portfolio' }"
    />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Pricing - Tifawin Automation Agency',
  description: 'Transparent pricing for automation, design, and development services. Choose the plan that fits your needs with no hidden fees.',
  ogTitle: 'Pricing - Tifawin Automation Agency',
  ogDescription: 'Transparent pricing for automation, design, and development services. Choose the plan that fits your needs.',
  ogImage: 'https://tifawin.agency/og-image.jpg',
  ogUrl: 'https://tifawin.agency/pricing'
})

// Pricing tiers (from the JSON data)
const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and getting started',
    price: 5000,
    period: 'project',
    features: [
      'Up to 2 weeks development time',
      'Basic automation setup',
      'Simple web application',
      'Email support',
      '1 revision round',
      'Basic documentation'
    ],
    cta: { text: 'Get Started', href: '/contact?plan=starter' },
    note: 'Best for MVPs and simple projects'
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses with more complex needs',
    price: 15000,
    period: 'project',
    features: [
      'Up to 4 weeks development time',
      'Advanced automation workflows',
      'Custom web application with API',
      'Priority support',
      '3 revision rounds',
      'Comprehensive documentation',
      'Training session included',
      '30 days post-launch support'
    ],
    cta: { text: 'Choose Growth', href: '/contact?plan=growth' },
    featured: true,
    note: 'Most popular choice'
  },
  {
    name: 'Scale',
    description: 'For established businesses ready to scale',
    price: 35000,
    period: 'project',
    features: [
      'Up to 8 weeks development time',
      'Enterprise-grade automation',
      'Full-stack application with integrations',
      'Dedicated project manager',
      'Unlimited revision rounds',
      'Complete documentation & training',
      '90 days post-launch support',
      'Performance monitoring setup',
      'Security audit included'
    ],
    cta: { text: 'Scale Up', href: '/contact?plan=scale' },
    note: 'For complex, enterprise projects'
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 0,
    period: 'custom',
    features: [
      'Custom timeline and scope',
      'Multi-platform integrations',
      'Advanced security features',
      'Dedicated team',
      '24/7 support',
      'Custom training programs',
      'Ongoing maintenance',
      'Performance optimization',
      'Compliance assistance'
    ],
    cta: { text: 'Contact Sales', href: '/contact?plan=enterprise' },
    note: 'Contact us for custom pricing'
  }
]

// Pricing FAQs
const pricingFaqs = [
  {
    question: 'How do you determine pricing?',
    answer: 'Our pricing is based on project scope, complexity, timeline, and required resources. We provide detailed quotes after understanding your specific needs.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment options including milestone-based payments and monthly retainers for ongoing projects.'
  },
  {
    question: 'What\'s included in the price?',
    answer: 'All prices include development, testing, deployment, documentation, and initial support. Additional services like ongoing maintenance are quoted separately.'
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees. Our quotes are transparent and include everything needed to complete your project successfully.'
  },
  {
    question: 'Do you offer discounts for long-term projects?',
    answer: 'Yes, we offer discounts for projects longer than 3 months and for clients who commit to multiple projects.'
  },
  {
    question: 'What if my project exceeds the scope?',
    answer: 'We clearly define project scope upfront. If additional features are needed, we\'ll provide a separate quote for the additional work.'
  }
]

// Pricing process steps
const pricingProcess = [
  {
    title: 'Free Consultation',
    description: 'We start with a free 30-minute consultation to understand your needs and project requirements.',
    duration: '30 minutes'
  },
  {
    title: 'Detailed Quote',
    description: 'We provide a detailed quote with clear scope, timeline, and deliverables based on your requirements.',
    duration: '1-2 days'
  },
  {
    title: 'Project Kickoff',
    description: 'Once approved, we begin with project planning, design, and development phases.',
    duration: '1-2 weeks'
  },
  {
    title: 'Delivery & Support',
    description: 'We deliver your project and provide ongoing support to ensure your success.',
    duration: 'Ongoing'
  }
]

// Feature comparison
const comparisonFeatures = [
  { name: 'Development Time', starter: '2 weeks', growth: '4 weeks', scale: '8 weeks', enterprise: 'Custom' },
  { name: 'Basic Automation', starter: true, growth: true, scale: true, enterprise: true },
  { name: 'Advanced Automation', starter: false, growth: true, scale: true, enterprise: true },
  { name: 'Custom API Development', starter: false, growth: true, scale: true, enterprise: true },
  { name: 'Dedicated Project Manager', starter: false, growth: false, scale: true, enterprise: true },
  { name: 'Priority Support', starter: false, growth: true, scale: true, enterprise: true },
  { name: 'Training Sessions', starter: false, growth: true, scale: true, enterprise: true },
  { name: 'Post-Launch Support', starter: false, growth: '30 days', scale: '90 days', enterprise: 'Ongoing' },
  { name: 'Security Audit', starter: false, growth: false, scale: true, enterprise: true },
  { name: 'Performance Monitoring', starter: false, growth: false, scale: true, enterprise: true },
  { name: '24/7 Support', starter: false, growth: false, scale: false, enterprise: true },
  { name: 'Custom Integrations', starter: false, growth: false, scale: true, enterprise: true }
]
</script>
