<template>
  <div>
    <!-- Hero Section -->
    <Hero
      badge="Get in Touch"
      title="Let's start your project"
      subtitle="Ready to automate, design, and grow? We'd love to hear about your project and discuss how we can help you achieve your goals."
    />

    <!-- Contact Form Section -->
    <section class="section">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div>
              <h2 class="text-3xl font-display font-bold mb-6">
                Send us a message
              </h2>
              <p class="text-muted-600 dark:text-muted-400 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. We're excited to learn about your project!
              </p>
              
              <ContactForm />
            </div>

            <!-- Contact Information -->
            <div>
              <h2 class="text-3xl font-display font-bold mb-6">
                Other ways to reach us
              </h2>
              
              <div class="space-y-8">
                <!-- Contact Details -->
                <div class="card p-6">
                  <h3 class="text-xl font-semibold mb-4 text-ink-900 dark:text-ink-50">
                    Contact Information
                  </h3>
                  
                  <div class="space-y-4">
                    <div class="flex items-center space-x-3">
                      <Icon name="heroicons:envelope" class="w-5 h-5 text-primary-500" />
                      <div>
                        <div class="font-semibold">Email</div>
                        <a href="mailto:hello@tifawin.agency" class="text-muted-600 dark:text-muted-400 hover:text-primary-500">
                          hello@tifawin.agency
                        </a>
                      </div>
                    </div>
                    
                    <div class="flex items-center space-x-3">
                      <Icon name="heroicons:phone" class="w-5 h-5 text-primary-500" />
                      <div>
                        <div class="font-semibold">Phone</div>
                        <a href="tel:+15555550199" class="text-muted-600 dark:text-muted-400 hover:text-primary-500">
                          +1 (555) 555-0199
                        </a>
                      </div>
                    </div>
                    
                    <div class="flex items-center space-x-3">
                      <Icon name="heroicons:map-pin" class="w-5 h-5 text-primary-500" />
                      <div>
                        <div class="font-semibold">Location</div>
                        <div class="text-muted-600 dark:text-muted-400">
                          Casablanca, Morocco<br>
                          <span class="text-sm">Serving clients worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Business Hours -->
                <div class="card p-6">
                  <h3 class="text-xl font-semibold mb-4 text-ink-900 dark:text-ink-50">
                    Business Hours
                  </h3>
                  
                  <div class="space-y-2 text-muted-600 dark:text-muted-400">
                    <div class="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM GMT</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM GMT</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  
                  <div class="mt-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <p class="text-sm text-primary-700 dark:text-primary-300">
                      <Icon name="heroicons:information-circle" class="w-4 h-4 inline mr-1" />
                      We respond to emails within 24 hours, even outside business hours.
                    </p>
                  </div>
                </div>

                <!-- Social Links -->
                <div class="card p-6">
                  <h3 class="text-xl font-semibold mb-4 text-ink-900 dark:text-ink-50">
                    Follow Us
                  </h3>
                  
                  <div class="flex space-x-4">
                    <a
                      v-for="social in socialLinks"
                      :key="social.name"
                      :href="social.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-10 h-10 bg-ink-100 dark:bg-ink-800 hover:bg-primary-500 hover:text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                      :aria-label="social.name"
                    >
                      <Icon :name="social.icon" class="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-muted-600 dark:text-muted-400">
              Have questions? We've got answers. Here are some common questions we receive.
            </p>
          </div>

          <FAQ
            title=""
            subtitle=""
            :faqs="contactFaqs"
          />
        </div>
      </div>
    </section>

    <!-- Map Section (Placeholder) -->
    <section class="section">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-display font-bold text-center mb-8">
            Find Us
          </h2>
          
          <div class="card overflow-hidden">
            <div class="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
              <div class="text-center text-white">
                <Icon name="heroicons:map" class="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 class="text-xl font-semibold mb-2">Interactive Map</h3>
                <p class="text-white/80">
                  Located in Casablanca, Morocco<br>
                  Serving clients worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTA
      title="Ready to get started?"
      subtitle="Don't wait - let's discuss your project today and see how we can help you achieve your goals."
      :primary-cta="{ text: 'Schedule a Call', href: '/contact' }"
      :secondary-cta="{ text: 'View Our Work', href: '/portfolio' }"
    />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Contact Us - Tifawin Automation Agency',
  description: 'Get in touch with our team. We\'re here to help you automate, design, and grow your business. Contact us for a free consultation.',
  ogTitle: 'Contact Us - Tifawin Automation Agency',
  ogDescription: 'Get in touch with our team. We\'re here to help you automate, design, and grow your business.',
  ogImage: 'https://tifawin.agency/og-image.jpg',
  ogUrl: 'https://tifawin.agency/contact'
})

// Social links
const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/tifawin', icon: 'simple-icons:linkedin' },
  { name: 'Twitter', href: 'https://twitter.com/tifawin', icon: 'simple-icons:twitter' },
  { name: 'GitHub', href: 'https://github.com/tifawin', icon: 'simple-icons:github' },
  { name: 'Behance', href: 'https://behance.net/tifawin', icon: 'simple-icons:behance' },
  { name: 'Dribbble', href: 'https://dribbble.com/tifawin', icon: 'simple-icons:dribbble' }
]

// Contact-specific FAQs
const contactFaqs = [
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We typically respond to all inquiries within 24 hours, often much sooner. For urgent matters, you can call us directly.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes! We offer free 30-minute consultations to discuss your project, understand your needs, and provide initial recommendations.'
  },
  {
    question: 'What information should I include in my inquiry?',
    answer: 'Please include details about your project goals, timeline, budget range, and any specific requirements. The more information you provide, the better we can help you.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely! We work with clients worldwide. Our team is distributed and we\'re comfortable working across different time zones.'
  },
  {
    question: 'What\'s the best way to reach you?',
    answer: 'Email is usually the best way to reach us initially. For urgent matters, you can call us. We also respond to social media messages.'
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Yes, we\'re happy to sign NDAs to protect your confidential information. We take client confidentiality very seriously.'
  }
]
</script>
