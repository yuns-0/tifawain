<template>
  <div class="space-y-8">
    <!-- Input Form -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-6">
        <h3 class="text-xl font-semibold text-ink-900 dark:text-ink-50">
          Calculate Your Savings
        </h3>
        
        <div>
          <label for="hours-saved" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
            Hours Saved Per Week
          </label>
          <input
            id="hours-saved"
            v-model.number="formData.hoursSaved"
            type="number"
            min="1"
            max="168"
            class="form-input"
            placeholder="10"
          />
          <p class="text-xs text-muted-500 mt-1">How many hours will automation save you per week?</p>
        </div>

        <div>
          <label for="hourly-rate" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
            Your Hourly Rate ($)
          </label>
          <input
            id="hourly-rate"
            v-model.number="formData.hourlyRate"
            type="number"
            min="10"
            max="1000"
            class="form-input"
            placeholder="50"
          />
          <p class="text-xs text-muted-500 mt-1">What's your hourly rate or the cost of your time?</p>
        </div>

        <div>
          <label for="weeks" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
            Time Period (Weeks)
          </label>
          <input
            id="weeks"
            v-model.number="formData.weeks"
            type="number"
            min="1"
            max="52"
            class="form-input"
            placeholder="52"
          />
          <p class="text-xs text-muted-500 mt-1">How long do you want to calculate savings for?</p>
        </div>

        <div>
          <label for="platform-cost" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
            Platform Cost ($)
          </label>
          <input
            id="platform-cost"
            v-model.number="formData.platformCost"
            type="number"
            min="0"
            max="10000"
            class="form-input"
            placeholder="100"
          />
          <p class="text-xs text-muted-500 mt-1">Monthly cost of automation tools (n8n, Zapier, etc.)</p>
        </div>

        <div>
          <label for="setup-cost" class="block text-sm font-semibold text-ink-900 dark:text-ink-50 mb-2">
            Setup Cost ($)
          </label>
          <input
            id="setup-cost"
            v-model.number="formData.setupCost"
            type="number"
            min="0"
            max="50000"
            class="form-input"
            placeholder="5000"
          />
          <p class="text-xs text-muted-500 mt-1">One-time cost to set up automation</p>
        </div>
      </div>

      <!-- Results -->
      <div class="space-y-6">
        <h3 class="text-xl font-semibold text-ink-900 dark:text-ink-50">
          Your ROI Calculation
        </h3>

        <div class="card p-6 space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-muted-600 dark:text-muted-400">Time Saved:</span>
            <span class="font-semibold text-ink-900 dark:text-ink-50">
              {{ totalHoursSaved }} hours
            </span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-muted-600 dark:text-muted-400">Value of Time:</span>
            <span class="font-semibold text-ink-900 dark:text-ink-50">
              {{ formatCurrency(timeValue) }}
            </span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-muted-600 dark:text-muted-400">Total Costs:</span>
            <span class="font-semibold text-red-500">
              -{{ formatCurrency(totalCosts) }}
            </span>
          </div>

          <hr class="border-ink-200 dark:border-ink-700">

          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold text-ink-900 dark:text-ink-50">Net Savings:</span>
            <span 
              class="text-lg font-bold"
              :class="netSavings >= 0 ? 'text-secondary-500' : 'text-red-500'"
            >
              {{ formatCurrency(netSavings) }}
            </span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-muted-600 dark:text-muted-400">ROI:</span>
            <span 
              class="font-semibold"
              :class="roi >= 0 ? 'text-secondary-500' : 'text-red-500'"
            >
              {{ formatPercentage(roi) }}
            </span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-muted-600 dark:text-muted-400">Payback Period:</span>
            <span class="font-semibold text-ink-900 dark:text-ink-50">
              {{ paybackPeriod }}
            </span>
          </div>
        </div>

        <!-- Insights -->
        <div class="card p-6">
          <h4 class="font-semibold text-ink-900 dark:text-ink-50 mb-3">
            💡 Insights
          </h4>
          <ul class="space-y-2 text-sm text-muted-600 dark:text-muted-400">
            <li v-if="netSavings > 0">
              ✅ You'll save {{ formatCurrency(netSavings) }} over {{ formData.weeks }} weeks
            </li>
            <li v-if="roi > 100">
              🚀 Excellent ROI! This automation pays for itself quickly
            </li>
            <li v-if="paybackPeriod.includes('weeks')">
              ⚡ Payback period is {{ paybackPeriod }} - very fast return
            </li>
            <li v-if="totalHoursSaved > 100">
              🎯 You'll save {{ Math.round(totalHoursSaved / 40) }}+ work weeks
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center">
      <p class="text-muted-600 dark:text-muted-400 mb-4">
        Ready to start saving time and money with automation?
      </p>
      <NuxtLink to="/contact" class="btn-primary">
        Get Started Today
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { roiCalculatorSchema } from '~/utils/schema'
import { formatCurrency, formatPercentage } from '~/utils/format'

const initialData = {
  hoursSaved: 10,
  hourlyRate: 50,
  weeks: 52,
  platformCost: 100,
  setupCost: 5000
}

const formData = reactive(initialData)

// Computed values
const totalHoursSaved = computed(() => formData.hoursSaved * formData.weeks)

const timeValue = computed(() => totalHoursSaved.value * formData.hourlyRate)

const totalCosts = computed(() => {
  const platformCosts = formData.platformCost * Math.ceil(formData.weeks / 4) // Monthly costs
  return platformCosts + formData.setupCost
})

const netSavings = computed(() => timeValue.value - totalCosts.value)

const roi = computed(() => {
  if (totalCosts.value === 0) return 0
  return (netSavings.value / totalCosts.value) * 100
})

const paybackPeriod = computed(() => {
  if (formData.hoursSaved === 0 || formData.hourlyRate === 0) return 'N/A'
  
  const weeklySavings = formData.hoursSaved * formData.hourlyRate
  const weeksToPayback = Math.ceil(totalCosts.value / weeklySavings)
  
  if (weeksToPayback < 4) {
    return `${weeksToPayback} weeks`
  } else if (weeksToPayback < 52) {
    const months = Math.round(weeksToPayback / 4)
    return `${months} months`
  } else {
    const years = Math.round(weeksToPayback / 52)
    return `${years} year${years > 1 ? 's' : ''}`
  }
})

// Watch for changes and validate
watch(formData, (newData) => {
  const result = validateForm(roiCalculatorSchema, newData)
  if (!result.success) {
    console.warn('ROI Calculator validation errors:', result.errors)
  }
}, { deep: true })
</script>
