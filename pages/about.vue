<template>
  <div>
    <!-- Hero Section -->
    <Hero
      badge="About Tifawin"
      title="Automate. Design. Grow."
      subtitle="We're a team of passionate developers, designers, and automation experts helping businesses streamline operations and accelerate growth."
    />

    <!-- Mission Section -->
    <section class="section">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="heading-section mb-8">
            Our Mission
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 leading-7 mb-12">
            We believe that every business deserves access to world-class technology solutions. Our mission is to democratize automation, design, and development by making these powerful tools accessible to businesses of all sizes.
          </p>
          
          <div class="grid-cards">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:light-bulb" class="w-8 h-8 text-white" />
              </div>
              <h3 class="heading-card mb-2">Innovation</h3>
              <p class="body-text">We stay at the forefront of technology, constantly exploring new tools and methodologies.</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:users" class="w-8 h-8 text-white" />
              </div>
              <h3 class="heading-card mb-2">Collaboration</h3>
              <p class="body-text">We work closely with our clients as partners, not just vendors.</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:trophy" class="w-8 h-8 text-white" />
              </div>
              <h3 class="heading-card mb-2">Excellence</h3>
              <p class="body-text">We're committed to delivering exceptional results that exceed expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Our Story
          </h2>
          
          <div class="prose-custom max-w-none">
            <p class="text-lg text-muted-600 dark:text-muted-400 mb-6">
              Tifawin was founded in 2024 by a team of experienced developers and designers who saw a gap in the market for high-quality, accessible automation and development services.
            </p>
            
            <p class="text-lg text-muted-600 dark:text-muted-400 mb-6">
              Starting as freelancers working with small businesses, we quickly realized that many companies were struggling with the same challenges: manual processes eating up valuable time, outdated systems holding back growth, and a lack of technical expertise to implement solutions.
            </p>
            
            <p class="text-lg text-muted-600 dark:text-muted-400 mb-6">
              We decided to formalize our approach and create Tifawin as a full-service agency that could provide comprehensive solutions. Our name comes from the Arabic word "تيفاوين" (Tifawin), meaning "automation" or "streamlining" - perfectly capturing our mission.
            </p>
            
            <p class="text-lg text-muted-600 dark:text-muted-400">
              Today, we're proud to serve clients worldwide from our base in Casablanca, Morocco, helping businesses of all sizes automate processes, improve design, and accelerate growth.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section" id="team">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
            Meet Our Team
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto">
            We're a diverse team of passionate professionals united by our commitment to delivering exceptional results.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="card p-8 text-center group"
          >
            <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-white font-bold text-2xl">
                {{ getInitials(member.name) }}
              </span>
            </div>
            
            <h3 class="text-xl font-display font-semibold mb-2 text-ink-900 dark:text-ink-50">
              {{ member.name }}
            </h3>
            
            <p class="text-primary-500 font-semibold mb-4">
              {{ member.role }}
            </p>
            
            <p class="text-muted-600 dark:text-muted-400 mb-6">
              {{ member.bio }}
            </p>

            <div class="flex justify-center space-x-4">
              <a
                v-if="member.linkedin"
                :href="member.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="w-8 h-8 bg-ink-100 dark:bg-ink-800 rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Icon name="simple-icons:linkedin" class="w-4 h-4" />
              </a>
              <a
                v-if="member.github"
                :href="member.github"
                target="_blank"
                rel="noopener noreferrer"
                class="w-8 h-8 bg-ink-100 dark:bg-ink-800 rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Icon name="simple-icons:github" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
            Our Values
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto">
            These core values guide everything we do and shape how we work with our clients.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="value in values"
            :key="value.title"
            class="card p-8"
          >
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon :name="value.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-display font-semibold mb-3 text-ink-900 dark:text-ink-50">
                  {{ value.title }}
                </h3>
                <p class="text-muted-600 dark:text-muted-400 leading-relaxed">
                  {{ value.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <Stats
      title="Our Impact"
      subtitle="Numbers that tell our story of growth and success."
      :stats="impactStats"
    />

    <!-- Tech Stack Section -->
    <section class="section">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
            Technologies We Love
          </h2>
          <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto">
            We work with modern, proven technologies to build solutions that are scalable, maintainable, and future-proof.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div
            v-for="tech in techStack"
            :key="tech.name"
            class="card p-6 text-center group hover:scale-105 transition-transform duration-200"
          >
            <div class="text-3xl mb-3">{{ tech.icon }}</div>
            <div class="text-sm font-semibold text-ink-900 dark:text-ink-50">
              {{ tech.name }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTA
      title="Ready to work with us?"
      subtitle="Let's discuss how we can help you achieve your goals with automation, design, and development."
      :primary-cta="{ text: 'Start a Project', href: '/contact' }"
      :secondary-cta="{ text: 'View Our Work', href: '/portfolio' }"
    />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'About Us - Tifawin Automation Agency',
  description: 'Learn about our mission, team, and values. We\'re passionate developers, designers, and automation experts helping businesses streamline operations.',
  ogTitle: 'About Us - Tifawin Automation Agency',
  ogDescription: 'Learn about our mission, team, and values. We\'re passionate developers, designers, and automation experts helping businesses streamline operations.',
  ogImage: 'https://tifawin.agency/og-image.jpg',
  ogUrl: 'https://tifawin.agency/about'
})

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// Team members
const teamMembers = [
  {
    name: 'Ahmed El Mansouri',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer with 8+ years of experience building scalable web applications and automation solutions.',
    linkedin: 'https://linkedin.com/in/ahmed-el-mansouri',
    github: 'https://github.com/ahmed-el-mansouri'
  },
  {
    name: 'Fatima Zahra',
    role: 'Head of Design',
    bio: 'UI/UX designer passionate about creating beautiful, user-centered designs that drive business results.',
    linkedin: 'https://linkedin.com/in/fatima-zahra',
    github: 'https://github.com/fatima-zahra'
  },
  {
    name: 'Youssef Benali',
    role: 'Automation Specialist',
    bio: 'Automation expert specializing in workflow optimization and process improvement using modern tools.',
    linkedin: 'https://linkedin.com/in/youssef-benali',
    github: 'https://github.com/youssef-benali'
  },
  {
    name: 'Aicha Tazi',
    role: 'Project Manager',
    bio: 'Experienced project manager ensuring smooth delivery and excellent client communication.',
    linkedin: 'https://linkedin.com/in/aicha-tazi',
    github: null
  },
  {
    name: 'Omar Idrissi',
    role: 'Backend Developer',
    bio: 'Backend specialist focused on API development, database design, and system architecture.',
    linkedin: 'https://linkedin.com/in/omar-idrissi',
    github: 'https://github.com/omar-idrissi'
  },
  {
    name: 'Khadija Alami',
    role: 'Frontend Developer',
    bio: 'Frontend developer creating responsive, accessible, and performant user interfaces.',
    linkedin: 'https://linkedin.com/in/khadija-alami',
    github: 'https://github.com/khadija-alami'
  }
]

// Company values
const values = [
  {
    icon: 'heroicons:heart',
    title: 'Client Success',
    description: 'Your success is our success. We measure our achievements by the impact we have on your business.'
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Quality First',
    description: 'We never compromise on quality. Every solution we deliver is built to last and perform at the highest level.'
  },
  {
    icon: 'heroicons:lightning-bolt',
    title: 'Speed & Efficiency',
    description: 'We understand that time is money. Our streamlined processes ensure fast delivery without sacrificing quality.'
  },
  {
    icon: 'heroicons:eye',
    title: 'Transparency',
    description: 'We believe in open communication and complete transparency throughout the entire project lifecycle.'
  },
  {
    icon: 'heroicons:academic-cap',
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and so do we. We stay current with the latest tools and best practices.'
  },
  {
    icon: 'heroicons:handshake',
    title: 'Partnership',
    description: 'We don\'t just work for you; we work with you as partners invested in your long-term success.'
  }
]

// Impact stats
const impactStats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '25+', label: 'Happy Clients' },
  { value: '18hrs', label: 'Avg Time Saved/Week' },
  { value: '36%', label: 'Avg Efficiency Gain' }
]

// Tech stack
const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Nuxt', icon: '💚' },
  { name: 'React', icon: '⚛️' },
  { name: 'Vue', icon: '💚' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Redis', icon: '🔴' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'n8n', icon: '🔧' },
  { name: 'Zapier', icon: '⚡' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Tailwind', icon: '🎨' }
]
</script>
