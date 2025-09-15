<template>
  <div>
    <!-- Hero Section -->
    <Hero
      badge="Free Tools"
      title="Helpful tools for your business"
      subtitle="Free utilities to help you plan, organize, and optimize your projects."
    />

    <!-- Tools Grid -->
    <section class="section">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
              Available Tools
            </h2>
            <p class="text-xl text-muted-600 dark:text-muted-400">
              Choose from our collection of free tools designed to help you succeed.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="tool in tools"
              :key="tool.name"
              class="card-hover p-8 text-center group"
            >
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon :name="tool.icon" class="w-8 h-8 text-white" />
              </div>
              
              <h3 class="text-xl font-display font-semibold mb-4 text-ink-900 dark:text-ink-50">
                {{ tool.name }}
              </h3>
              
              <p class="text-muted-600 dark:text-muted-400 mb-6 leading-relaxed">
                {{ tool.description }}
              </p>

              <button
                @click="activeTool = tool.id"
                class="btn-primary w-full"
              >
                {{ tool.cta }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tool Forms -->
    <section class="section bg-ink-50 dark:bg-ink-900">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <!-- Prompt Generator -->
          <div v-if="activeTool === 'prompt-generator'" class="card p-8">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-display font-bold mb-4">
                Prompt Generator
              </h2>
              <p class="text-xl text-muted-600 dark:text-muted-400">
                Generate structured prompts for automation, branding, and development briefs.
              </p>
            </div>

            <div class="space-y-8">
              <!-- Tool Selection -->
              <div>
                <label class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-3">
                  Select Tool Type
                </label>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    v-for="promptType in promptTypes"
                    :key="promptType.id"
                    @click="selectedPromptType = promptType.id"
                    :class="[
                      'p-4 rounded-xl border-2 transition-all duration-200 text-left',
                      selectedPromptType === promptType.id
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-ink-200 dark:border-ink-700 hover:border-primary-300'
                    ]"
                  >
                    <div class="font-semibold text-ink-900 dark:text-ink-50 mb-2">
                      {{ promptType.name }}
                    </div>
                    <div class="text-sm text-muted-600 dark:text-muted-400">
                      {{ promptType.description }}
                    </div>
                  </button>
                </div>
              </div>

              <!-- Form Fields -->
              <div v-if="selectedPromptType" class="space-y-6">
                <div
                  v-for="field in getPromptFields()"
                  :key="field.name"
                >
                  <label :for="field.name" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
                    {{ field.label }}
                    <span v-if="field.required" class="text-red-500">*</span>
                  </label>
                  
                  <input
                    v-if="field.type === 'text'"
                    :id="field.name"
                    v-model="promptForm[field.name]"
                    type="text"
                    :placeholder="field.placeholder"
                    class="form-input"
                  />
                  
                  <textarea
                    v-else-if="field.type === 'textarea'"
                    :id="field.name"
                    v-model="promptForm[field.name]"
                    :placeholder="field.placeholder"
                    rows="4"
                    class="form-textarea"
                  ></textarea>
                  
                  <select
                    v-else-if="field.type === 'select'"
                    :id="field.name"
                    v-model="promptForm[field.name]"
                    class="form-select"
                  >
                    <option value="">{{ field.placeholder }}</option>
                    <option
                      v-for="option in field.options"
                      :key="option.value"
                      :value="option.value"
                    >
                      {{ option.label }}
                    </option>
                  </select>
                  
                  <div
                    v-else-if="field.type === 'checkbox'"
                    class="space-y-2"
                  >
                    <label
                      v-for="option in field.options"
                      :key="option.value"
                      class="flex items-center space-x-3"
                    >
                      <input
                        v-model="promptForm[field.name]"
                        type="checkbox"
                        :value="option.value"
                        class="form-checkbox"
                      />
                      <span class="text-sm text-ink-900 dark:text-ink-50">
                        {{ option.label }}
                      </span>
                    </label>
                  </div>
                </div>

                <!-- Generate Button -->
                <div class="pt-6">
                  <button
                    @click="generatePrompt"
                    class="btn-primary w-full md:w-auto"
                  >
                    Generate Prompt
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Generated Prompt -->
          <div v-if="generatedPrompt" class="mt-8">
            <div class="card p-8">
              <h3 class="text-2xl font-display font-semibold mb-6 text-ink-900 dark:text-ink-50">
                Generated Prompt
              </h3>
              
              <div class="prose-custom max-w-none mb-6">
                <pre class="bg-ink-100 dark:bg-ink-800 p-6 rounded-xl overflow-x-auto text-sm whitespace-pre-wrap">{{ generatedPrompt }}</pre>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <button
                  @click="copyPrompt"
                  class="btn-outline"
                >
                  <Icon name="heroicons:clipboard" class="w-4 h-4 mr-2" />
                  Copy Prompt
                </button>
                <button
                  @click="resetPrompt"
                  class="btn-ghost"
                >
                  Generate New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTA
      title="Need help implementing these tools?"
      subtitle="Our team can help you implement automation, create branding, or develop custom solutions."
      :primary-cta="{ text: 'Get Started', href: '/contact' }"
      :secondary-cta="{ text: 'View Services', href: '/services' }"
    />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Free Tools - Tifawin Automation Agency',
  description: 'Free tools to help you plan and optimize your projects. Generate prompts for automation, branding, and development briefs.',
  ogTitle: 'Free Tools - Tifawin Automation Agency',
  ogDescription: 'Free tools to help you plan and optimize your projects.',
  ogImage: 'https://tifawin.agency/og-image.jpg',
  ogUrl: 'https://tifawin.agency/tools'
})

// Tool state
const activeTool = ref('prompt-generator')
const selectedPromptType = ref('')
const generatedPrompt = ref('')

// Tools list
const tools = [
  {
    id: 'prompt-generator',
    name: 'Prompt Generator',
    description: 'Generate structured prompts for automation, branding, and development briefs.',
    icon: 'heroicons:sparkles',
    cta: 'Generate Prompts'
  },
  {
    id: 'utm-builder',
    name: 'UTM Builder',
    description: 'Create UTM parameters for tracking your marketing campaigns and links.',
    icon: 'heroicons:link',
    cta: 'Coming Soon'
  },
  {
    id: 'brief-generator',
    name: 'Brief Generator',
    description: 'Generate comprehensive project briefs for automation and development projects.',
    icon: 'heroicons:document-text',
    cta: 'Coming Soon'
  }
]

// Prompt types
const promptTypes = [
  {
    id: 'automation',
    name: 'Automation Brief',
    description: 'Generate prompts for n8n, Zapier, and custom automation workflows.'
  },
  {
    id: 'branding',
    name: 'Branding Brief',
    description: 'Create comprehensive branding briefs with tone, audience, and palette guidance.'
  },
  {
    id: 'development',
    name: 'Development Brief',
    description: 'Generate technical briefs for web applications, APIs, and integrations.'
  }
]

// Prompt form data
const promptForm = reactive({
  businessType: '',
  currentProcess: '',
  painPoints: '',
  goals: '',
  tools: [],
  budget: '',
  businessName: '',
  industry: '',
  targetAudience: '',
  brandPersonality: [],
  competitors: '',
  uniqueValue: '',
  colorPreferences: [],
  projectType: '',
  description: '',
  features: [],
  techStack: [],
  timeline: '',
  maintenance: false
})

// Get prompt fields based on selected type
const getPromptFields = () => {
  const fields = {
    automation: [
      { name: 'businessType', label: 'Business Type', type: 'text', placeholder: 'E-commerce, SaaS, Agency, etc.', required: true },
      { name: 'currentProcess', label: 'Current Process', type: 'textarea', placeholder: 'Describe your current manual process...', required: true },
      { name: 'painPoints', label: 'Pain Points', type: 'textarea', placeholder: 'What challenges are you facing?', required: true },
      { name: 'goals', label: 'Goals', type: 'textarea', placeholder: 'What do you want to achieve with automation?', required: true },
      { name: 'tools', label: 'Preferred Tools', type: 'checkbox', options: [
        { value: 'n8n', label: 'n8n' },
        { value: 'zapier', label: 'Zapier' },
        { value: 'make', label: 'Make (Integromat)' },
        { value: 'custom', label: 'Custom Solution' }
      ] },
      { name: 'budget', label: 'Budget Range', type: 'select', options: [
        { value: 'under-1k', label: 'Under $1,000' },
        { value: '1k-5k', label: '$1,000 - $5,000' },
        { value: '5k-15k', label: '$5,000 - $15,000' },
        { value: '15k-plus', label: '$15,000+' }
      ], placeholder: 'Select budget range', required: true }
    ],
    branding: [
      { name: 'businessName', label: 'Business Name', type: 'text', placeholder: 'Your company name', required: true },
      { name: 'industry', label: 'Industry', type: 'text', placeholder: 'Technology, Healthcare, Finance, etc.', required: true },
      { name: 'targetAudience', label: 'Target Audience', type: 'textarea', placeholder: 'Describe your ideal customers...', required: true },
      { name: 'brandPersonality', label: 'Brand Personality', type: 'checkbox', options: [
        { value: 'professional', label: 'Professional' },
        { value: 'friendly', label: 'Friendly' },
        { value: 'innovative', label: 'Innovative' },
        { value: 'trustworthy', label: 'Trustworthy' },
        { value: 'creative', label: 'Creative' },
        { value: 'bold', label: 'Bold' }
      ] },
      { name: 'competitors', label: 'Competitors', type: 'textarea', placeholder: 'Who are your main competitors?' },
      { name: 'uniqueValue', label: 'Unique Value Proposition', type: 'textarea', placeholder: 'What makes you different?', required: true },
      { name: 'budget', label: 'Budget Range', type: 'select', options: [
        { value: 'under-5k', label: 'Under $5,000' },
        { value: '5k-15k', label: '$5,000 - $15,000' },
        { value: '15k-50k', label: '$15,000 - $50,000' },
        { value: '50k-plus', label: '$50,000+' }
      ], placeholder: 'Select budget range', required: true }
    ],
    development: [
      { name: 'projectType', label: 'Project Type', type: 'select', options: [
        { value: 'web-app', label: 'Web Application' },
        { value: 'mobile-app', label: 'Mobile Application' },
        { value: 'api', label: 'API Development' },
        { value: 'integration', label: 'Integration' },
        { value: 'ecommerce', label: 'E-commerce' },
        { value: 'other', label: 'Other' }
      ], placeholder: 'Select project type', required: true },
      { name: 'description', label: 'Project Description', type: 'textarea', placeholder: 'Describe your project in detail...', required: true },
      { name: 'features', label: 'Key Features', type: 'textarea', placeholder: 'List the main features you need...', required: true },
      { name: 'techStack', label: 'Preferred Technologies', type: 'checkbox', options: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue.js' },
        { value: 'nuxt', label: 'Nuxt.js' },
        { value: 'next', label: 'Next.js' },
        { value: 'node', label: 'Node.js' },
        { value: 'python', label: 'Python' },
        { value: 'php', label: 'PHP' }
      ] },
      { name: 'timeline', label: 'Timeline', type: 'select', options: [
        { value: '1-month', label: '1 Month' },
        { value: '2-3-months', label: '2-3 Months' },
        { value: '3-6-months', label: '3-6 Months' },
        { value: '6-plus-months', label: '6+ Months' }
      ], placeholder: 'Select timeline', required: true },
      { name: 'budget', label: 'Budget Range', type: 'select', options: [
        { value: 'under-10k', label: 'Under $10,000' },
        { value: '10k-25k', label: '$10,000 - $25,000' },
        { value: '25k-50k', label: '$25,000 - $50,000' },
        { value: '50k-plus', label: '$50,000+' }
      ], placeholder: 'Select budget range', required: true }
    ]
  }
  
  return fields[selectedPromptType.value] || []
}

// Generate prompt
const generatePrompt = () => {
  const type = selectedPromptType.value
  let prompt = ''
  
  if (type === 'automation') {
    prompt = `AUTOMATION BRIEF

Business Type: ${promptForm.businessType}

Current Process:
${promptForm.currentProcess}

Pain Points:
${promptForm.painPoints}

Goals:
${promptForm.goals}

Preferred Tools: ${promptForm.tools.join(', ') || 'No preference'}

Budget Range: ${promptForm.budget}

Please provide a detailed automation solution that addresses these requirements. Include:
1. Recommended automation workflows
2. Required integrations
3. Implementation timeline
4. Expected outcomes and ROI`
  } else if (type === 'branding') {
    prompt = `BRANDING BRIEF

Business Name: ${promptForm.businessName}
Industry: ${promptForm.industry}

Target Audience:
${promptForm.targetAudience}

Brand Personality: ${promptForm.brandPersonality.join(', ')}

Competitors:
${promptForm.competitors || 'Not specified'}

Unique Value Proposition:
${promptForm.uniqueValue}

Budget Range: ${promptForm.budget}

Please create a comprehensive branding strategy including:
1. Brand positioning and messaging
2. Visual identity concepts
3. Brand guidelines
4. Implementation recommendations`
  } else if (type === 'development') {
    prompt = `DEVELOPMENT BRIEF

Project Type: ${promptForm.projectType}

Project Description:
${promptForm.description}

Key Features:
${promptForm.features}

Preferred Technologies: ${promptForm.techStack.join(', ') || 'No preference'}

Timeline: ${promptForm.timeline}
Budget Range: ${promptForm.budget}

Please provide a detailed development plan including:
1. Technical architecture
2. Technology stack recommendations
3. Development phases
4. Timeline and milestones
5. Resource requirements`
  }
  
  generatedPrompt.value = prompt
}

// Copy prompt to clipboard
const copyPrompt = async () => {
  try {
    await navigator.clipboard.writeText(generatedPrompt.value)
    // You could add a toast notification here
    console.log('Prompt copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy prompt:', err)
  }
}

// Reset prompt form
const resetPrompt = () => {
  Object.keys(promptForm).forEach(key => {
    if (Array.isArray(promptForm[key])) {
      promptForm[key] = []
    } else {
      promptForm[key] = ''
    }
  })
  generatedPrompt.value = ''
  selectedPromptType.value = ''
}
</script>
