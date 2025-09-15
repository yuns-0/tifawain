<template>
  <form
    @submit.prevent="handleSubmit"
    class="space-y-4"
  >
    <div>
      <label for="newsletter-email" class="sr-only">Email address</label>
      <div class="flex">
        <input
          id="newsletter-email"
          v-model="email"
          type="email"
          required
          placeholder="Enter your email"
          class="form-input rounded-r-none border-r-0"
          :class="{ 'form-input-error': hasError }"
        />
        <button
          type="submit"
          :disabled="isSubmitting"
          class="btn-primary rounded-l-none px-6"
        >
          <Icon
            v-if="isSubmitting"
            name="heroicons:arrow-path"
            class="w-4 h-4 animate-spin"
          />
          <Icon
            v-else
            name="heroicons:arrow-right"
            class="w-4 h-4"
          />
        </button>
      </div>
      <p v-if="hasError" class="form-error">
        {{ error }}
      </p>
      <p v-if="isSuccess" class="text-sm text-secondary-500 mt-2">
        Thanks for subscribing! Check your email for confirmation.
      </p>
    </div>
    
    <!-- Honeypot field -->
    <input
      v-model="honeypot"
      type="text"
      name="website"
      style="display: none;"
      tabindex="-1"
      autocomplete="off"
    />
  </form>
</template>

<script setup lang="ts">
import { newsletterSchema } from '~/utils/schema'

const email = ref('')
const honeypot = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)
const error = ref('')

const hasError = computed(() => !!error.value)

const handleSubmit = async () => {
  error.value = ''
  isSubmitting.value = true
  
  try {
    const result = validateForm(newsletterSchema, {
      email: email.value,
      honeypot: honeypot.value
    })
    
    if (!result.success) {
      error.value = result.errors?.email?.[0] || 'Please enter a valid email address'
      return
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    isSuccess.value = true
    email.value = ''
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
    
  } catch (err: any) {
    error.value = err.message || 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
