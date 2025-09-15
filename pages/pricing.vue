<template>
  <div>
    <!-- Hero Section -->
    <Hero
      badge="Pricing"
      title="Pricing — built for agencies. No public rates."
      subtitle="We work agency-to-agency as a flexible resource partner. Because scopes vary, we don’t publish prices. Tell us how you operate and we’ll tailor a plan that fits your pipeline and cadence."
    />

    <!-- Pricing Table -->
    <PricingTable
      title="Models we support"
      subtitle="Choose how you want to engage. Each model includes senior oversight, clean handoffs, and SLA-driven delivery."
      :pricing-tiers="pricingModels"
    />

    <!-- FAQ Section -->
    <PricingHowItWorks class="section bg-ink-50 dark:bg-ink-900" />

    <!-- Process Section -->
    

    <!-- ROI Calculator Section -->
    <!-- Removed ROI calculator to avoid numeric pricing context -->

    <!-- Comparison Table -->
    <PricingComparison class="section bg-ink-50 dark:bg-ink-900" />

    <!-- CTA Section -->
    <CTA
      title="Contact us"
      subtitle="Let’s tailor a plan that fits your pipeline."
      :primary-cta="{ text: 'Contact us', href: '/contact' }"
      :secondary-cta="{ text: 'View Portfolio', href: '/portfolio' }"
    />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Pricing — built for agencies. No public rates. | Tifawin',
  description: 'Agency-to-agency pricing with flexible models: Retainer, Bulk Projects, Staff Augmentation, Single Project, Hybrid. Tell us how you operate and we’ll tailor a plan.',
  ogTitle: 'Pricing — built for agencies. No public rates.',
  ogDescription: 'We work agency-to-agency with flexible models. No public prices. Contact us to tailor a plan to your pipeline and cadence.',
  ogImage: 'https://tifawin.agency/og-image.jpg',
  ogUrl: 'https://tifawin.agency/pricing'
})

// Agency-to-agency engagement models
const pricingModels = [
  {
    name: 'Agency Retainer (Monthly)',
    description: 'A fixed monthly agreement for ongoing capacity. Your team drops work into our queue; we deliver within an agreed SLA. Ideal when you want predictable throughput across multiple small/medium projects.',
    modelTag: 'Retainer',
    features: [
      'Dedicated capacity with agreed SLA',
      'Predictable throughput for BAU',
      'Multi-project support',
      'Weekly reporting & coordination'
    ],
    cta: { href: '/contact?model=retainer' },
    ctaLabel: 'Contact us',
    featured: true,
    badge: 'Popular'
  },
  {
    name: 'Bulk Projects (10, 50, 100+)',
    description: 'Bring a batch of projects and we organize dedicated pods to execute. Useful for seasonal spikes or large backlogs. One commercial agreement; we manage staffing and delivery rhythm.',
    modelTag: 'Bulk',
    features: [
      'Dedicated pods for batches',
      'One agreement for multiple projects',
      'Staffing & rhythm managed by us',
      'Great for seasonal spikes'
    ],
    cta: { href: '/contact?model=bulk' },
    ctaLabel: 'Contact us'
  },
  {
    name: 'Staff Augmentation (Resource)',
    description: 'We assign vetted engineers/designers to work with your team daily. They’re on our payroll; you pay us and we handle the rest. Smooth onboarding, clear reporting, and replace-on-request.',
    modelTag: 'Staff',
    features: [
      'Vetted talent embedded daily',
      'Replace-on-request flexibility',
      'Onboarding & reporting managed',
      'Works with your tools & process'
    ],
    cta: { href: '/contact?model=staff' },
    ctaLabel: 'Contact us'
  },
  {
    name: 'Single Project',
    description: 'One focused engagement with a defined scope and timeline. We run a short discovery, set deliverables and milestones, and ship.',
    modelTag: 'Single',
    features: [
      'Short discovery, clear scope',
      'Milestones & deliverables set',
      'Ownership from kickoff to ship',
      'Clean handoff and docs'
    ],
    cta: { href: '/contact?model=single' },
    ctaLabel: 'Contact us'
  },
  {
    name: 'Hybrid',
    description: 'Mix and match: e.g., a small retainer for BAU + augmented staff for a complex build + occasional one-offs.',
    modelTag: 'Hybrid',
    features: [
      'Combine models to fit pipeline',
      'Scale up/down by need',
      'Cover BAU and complex builds',
      'One integrated partnership'
    ],
    cta: { href: '/contact?model=hybrid' },
    ctaLabel: 'Contact us'
  }
]

// FAQ (selection)
const pricingFaqs = [
  {
    question: 'Why no public prices?',
    answer: 'Agency scopes vary widely. We optimize cost based on your throughput, complexity, and cadence, not a one-size-fits-all sticker.'
  },
  {
    question: 'Can we start small and grow?',
    answer: 'Yes. Begin with a single project or a lightweight retainer, then scale capacity as trust builds.'
  },
  {
    question: 'Can you work under our brand?',
    answer: 'Absolutely. We can operate white-label with shared tools and processes.'
  },
  {
    question: 'What about timezone and communication?',
    answer: 'We align on working windows and a clear comms channel (Slack/Email/PM tool) in the kickoff.'
  }
]

// How pricing works (simple) — handled by PricingHowItWorks component

// Comparison table moved to PricingComparison component
</script>
