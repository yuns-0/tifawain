<template>
  <form
    @submit.prevent="handleSubmit"
    class="space-y-6"
  >
    <!-- Name and Email -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="contact-name" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
          Full Name *
        </label>
        <input
          id="contact-name"
          v-model="formData.name"
          type="text"
          required
          placeholder="John Doe"
          class="form-input focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          :class="{ 'form-input-error': hasFieldError('name') }"
        />
        <p v-if="hasFieldError('name')" class="form-error">
          {{ getFieldError('name') }}
        </p>
      </div>

      <div>
        <label for="contact-email" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
          Email Address *
        </label>
        <input
          id="contact-email"
          v-model="formData.email"
          type="email"
          required
          placeholder="john@company.com"
          class="form-input"
          :class="{ 'form-input-error': hasFieldError('email') }"
        />
        <p v-if="hasFieldError('email')" class="form-error">
          {{ getFieldError('email') }}
        </p>
      </div>
    </div>

    <!-- Company and Phone -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="contact-company" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
          Company *
        </label>
        <input
          id="contact-company"
          v-model="formData.company"
          type="text"
          required
          placeholder="Acme Inc."
          class="form-input"
          :class="{ 'form-input-error': hasFieldError('company') }"
        />
        <p v-if="hasFieldError('company')" class="form-error">
          {{ getFieldError('company') }}
        </p>
      </div>

      <div>
        <label for="contact-phone" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
          Phone Number
        </label>
        <input
          id="contact-phone"
          v-model="formData.phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          class="form-input"
          :class="{ 'form-input-error': hasFieldError('phone') }"
        />
        <p v-if="hasFieldError('phone')" class="form-error">
          {{ getFieldError('phone') }}
        </p>
      </div>
    </div>

    <!-- Budget and Timeline -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="contact-budget" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
          Budget Range *
        </label>
        <select
          id="contact-budget"
          v-model="formData.budget"
          required
          class="form-select"
          :class="{ 'form-input-error': hasFieldError('budget') }"
        >
          <option value="">Select budget range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-15k">$5,000 - $15,000</option>
          <option value="15k-50k">$15,000 - $50,000</option>
          <option value="50k-plus">$50,000+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
        <p v-if="hasFieldError('budget')" class="form-error">
          {{ getFieldError('budget') }}
        </p>
      </div>

      <div>
        <label for="contact-timeline" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
          Timeline *
        </label>
        <select
          id="contact-timeline"
          v-model="formData.timeline"
          required
          class="form-select"
          :class="{ 'form-input-error': hasFieldError('timeline') }"
        >
          <option value="">Select timeline</option>
          <option value="asap">ASAP</option>
          <option value="1-month">Within 1 month</option>
          <option value="2-3-months">2-3 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="flexible">Flexible</option>
        </select>
        <p v-if="hasFieldError('timeline')" class="form-error">
          {{ getFieldError('timeline') }}
        </p>
      </div>
    </div>

    <!-- Services Interest -->
    <div>
      <label class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-3">
        Services of Interest *
      </label>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <label
          v-for="service in serviceOptions"
          :key="service.value"
          class="flex items-center space-x-3 p-3 rounded-xl border border-ink-200 dark:border-ink-700 hover:bg-ink-50 dark:hover:bg-ink-800 cursor-pointer transition-colors duration-200"
        >
          <input
            v-model="formData.interest"
            type="checkbox"
            :value="service.value"
            class="form-checkbox"
          />
          <span class="text-sm font-medium text-ink-900 dark:text-ink-50">
            {{ service.label }}
          </span>
        </label>
      </div>
      <p v-if="hasFieldError('interest')" class="form-error">
        {{ getFieldError('interest') }}
      </p>
    </div>

    <!-- Message -->
    <div>
      <label for="contact-message" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
        Project Details *
      </label>
      <textarea
        id="contact-message"
        v-model="formData.message"
        required
        rows="6"
        placeholder="Tell us about your project, goals, and any specific requirements..."
        class="form-textarea"
        :class="{ 'form-input-error': hasFieldError('message') }"
      ></textarea>
      <p v-if="hasFieldError('message')" class="form-error">
        {{ getFieldError('message') }}
      </p>
    </div>

    <!-- Consent -->
    <div>
      <label class="flex items-start space-x-3">
        <input
          v-model="formData.consent"
          type="checkbox"
          required
          class="form-checkbox mt-1"
          :class="{ 'form-input-error': hasFieldError('consent') }"
        />
        <span class="text-sm text-muted-600 dark:text-muted-400">
          I agree to the <NuxtLink to="/privacy" class="text-primary-500 hover:text-primary-600">Privacy Policy</NuxtLink> 
          and consent to being contacted about my project.
        </span>
      </label>
      <p v-if="hasFieldError('consent')" class="form-error">
        {{ getFieldError('consent') }}
      </p>
    </div>

    <!-- Honeypot -->
    <input
      v-model="formData.honeypot"
      type="text"
      name="website"
      style="display: none;"
      tabindex="-1"
      autocomplete="off"
    />

    <!-- Submit Button -->
    <div class="pt-4">
      <button
        type="submit"
        :disabled="!canSubmit"
        class="btn-primary w-full md:w-auto px-8 py-4 text-lg"
      >
        <Icon
          v-if="formState.isSubmitting"
          name="heroicons:arrow-path"
          class="w-5 h-5 mr-2 animate-spin"
        />
        <Icon
          v-else
          name="heroicons:paper-airplane"
          class="w-5 h-5 mr-2"
        />
        {{ formState.isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </div>

    <!-- Success Message -->
    <div
      v-if="formState.isSubmitted"
      class="p-4 bg-secondary-50 dark:bg-secondary-900/20 border border-secondary-200 dark:border-secondary-800 rounded-xl"
    >
      <div class="flex items-center">
        <Icon name="heroicons:check-circle" class="w-5 h-5 text-secondary-500 mr-3" />
        <p class="text-secondary-700 dark:text-secondary-300">
          Thank you! We'll get back to you within 24 hours.
        </p>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { contactFormSchema, type ContactFormData } from '~/utils/schema'

const serviceOptions = [
  { value: 'code-dev', label: 'Code Development' },
  { value: 'branding', label: 'Branding' },
  { value: 'design', label: 'Design' },
  { value: 'automation', label: 'Automation' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'ai-agents', label: 'AI Agents' }
]

const initialData: ContactFormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  budget: 'not-sure',
  timeline: 'flexible',
  interest: [],
  message: '',
  honeypot: '',
  consent: false
}

const {
  formState,
  updateField,
  submitForm,
  getFieldError,
  hasFieldError,
  canSubmit
} = useForm(contactFormSchema, initialData)

const formData = reactive(initialData)

// Watch form data changes and update the form state
watch(formData, (newData) => {
  Object.keys(newData).forEach(key => {
    updateField(key as keyof ContactFormData, newData[key as keyof ContactFormData])
  })
}, { deep: true })

const handleSubmit = async () => {
  const result = await submitForm(async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, you would send this to your API endpoint
    console.log('Contact form submitted:', data)
    
    return { success: true }
  })

  if (result.success) {
    // Reset form on success
    Object.assign(formData, initialData)
  }
}
</script>
