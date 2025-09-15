<template>
  <div>
    <!-- Hero Section -->
    <Hero
      badge="FAQ"
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our services, process, and pricing."
    />

    <!-- General FAQ -->
    <section class="section">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
              General Questions
            </h2>
            <p class="text-xl text-muted-600 dark:text-muted-400">
              Common questions about working with Tifawin.
            </p>
          </div>

          <FAQ
            title=""
            subtitle=""
            :faqs="generalFaqs"
          />
        </div>
      </div>
    </section>

    <!-- Service-Specific FAQs -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
              Service-Specific Questions
            </h2>
            <p class="text-xl text-muted-600 dark:text-muted-400">
              Detailed questions about our specific services.
            </p>
          </div>

          <div class="space-y-12">
            <div
              v-for="serviceFaq in serviceFaqs"
              :key="serviceFaq.service"
              class="card p-8"
            >
              <h3 class="text-2xl font-display font-semibold mb-6 text-ink-900 dark:text-ink-50">
                {{ serviceFaq.service }}
              </h3>
              
              <FAQ
                title=""
                subtitle=""
                :faqs="serviceFaq.faqs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-display font-bold mb-4">
            Still have questions?
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 mb-8">
            We're here to help! Contact us for personalized answers to your specific questions.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink to="/contact" class="btn-primary">
              Contact Us
            </NuxtLink>
            <NuxtLink to="/services" class="btn-outline">
              View Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'FAQ - Tifawin Automation Agency',
  description: 'Find answers to common questions about our automation, design, and development services. Get help with pricing, process, and more.',
  ogTitle: 'FAQ - Tifawin Automation Agency',
  ogDescription: 'Find answers to common questions about our automation, design, and development services.',
  ogImage: 'https://tifawin.agency/og-image.jpg',
  ogUrl: 'https://tifawin.agency/faq'
})

// General FAQs
const generalFaqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer comprehensive services including code development (web apps, APIs, integrations), branding (strategy, visual identity, guidelines), design (UI/UX, prototypes, design systems), automation (n8n, Zapier, custom workflows), social media management, and AI agents (conversational bots, data pipelines).'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Simple automation projects can be completed in 1-2 weeks, while comprehensive web applications typically take 2-4 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.'
  },
  {
    question: 'What\'s your pricing structure?',
    answer: 'We offer flexible pricing options including fixed-price projects, hourly rates, and retainer agreements. Our pricing depends on project scope, timeline, and complexity. We provide transparent quotes with no hidden fees and offer free consultations to discuss your specific needs.'
  },
  {
    question: 'Do you work with startups?',
    answer: 'Absolutely! We love working with startups and understand the unique challenges they face. We offer special packages for early-stage companies and can work within tight budgets and timelines. Many of our clients are startups that have grown into successful businesses.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We work with modern, proven technologies including Python, JavaScript/TypeScript, Node.js, Nuxt/Next.js, WordPress, WooCommerce, React, Vue.js, and various automation platforms like n8n, Zapier, and Make. We choose the best technology stack for each project\'s specific requirements.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer ongoing support and maintenance packages for all our projects. This includes bug fixes, updates, performance monitoring, and feature enhancements. We believe in building long-term partnerships with our clients.'
  },
  {
    question: 'Can you help with existing projects?',
    answer: 'Definitely! We often work with clients who have existing projects that need improvements, updates, or integrations. We can audit your current setup, identify areas for improvement, and implement solutions that work seamlessly with your existing systems.'
  },
  {
    question: 'What makes you different from other agencies?',
    answer: 'We combine technical expertise with creative vision, focusing on measurable business results. Our streamlined process gets projects delivered quickly without compromising quality. We\'re also committed to transparency, providing regular updates and ensuring you own your code and data.'
  }
]

// Service-specific FAQs
const serviceFaqs = [
  {
    service: 'Automation Services',
    faqs: [
      {
        question: 'What automation platforms do you work with?',
        answer: 'We work with n8n, Zapier, Make (formerly Integromat), Microsoft Power Automate, and custom automation solutions. We choose the best platform based on your specific needs and requirements.'
      },
      {
        question: 'How much time can automation save?',
        answer: 'Most of our clients save 10-20 hours per week through automation. The exact savings depend on your current processes and the complexity of your workflows.'
      },
      {
        question: 'Do you provide training on automation tools?',
        answer: 'Yes, we provide comprehensive training on all automation tools we implement. This includes documentation, video tutorials, and live training sessions.'
      }
    ]
  },
  {
    service: 'Design Services',
    faqs: [
      {
        question: 'What design tools do you use?',
        answer: 'We use Figma for UI/UX design, Adobe Creative Suite for branding, and various prototyping tools. We\'re also experienced with design systems and component libraries.'
      },
      {
        question: 'Do you provide design files?',
        answer: 'Yes, we provide all design files in various formats including Figma files, PNG, SVG, and other formats as needed. You\'ll have full access to all design assets.'
      },
      {
        question: 'How many revisions are included?',
        answer: 'The number of revisions depends on your project package. Our Growth plan includes 3 revision rounds, while our Scale plan includes unlimited revisions.'
      }
    ]
  },
  {
    service: 'Development Services',
    faqs: [
      {
        question: 'What programming languages do you use?',
        answer: 'We primarily use Python, JavaScript, TypeScript, and PHP. We also work with various frameworks like Nuxt, Next.js, React, Vue.js, and Django.'
      },
      {
        question: 'Do you provide source code?',
        answer: 'Absolutely! You own all the code we write. We provide complete source code, documentation, and deployment instructions.'
      },
      {
        question: 'Do you handle hosting and deployment?',
        answer: 'Yes, we can handle hosting setup and deployment. We work with various hosting providers including AWS, Vercel, Netlify, and traditional hosting services.'
      }
    ]
  }
]
</script>
