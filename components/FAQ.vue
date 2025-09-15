<template>
  <section class="section">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-section mb-4">
          {{ title }}
        </h2>
        <p class="text-xl text-muted-600 dark:text-muted-400 max-w-3xl mx-auto leading-7">
          {{ subtitle }}
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="space-y-6">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="card"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset rounded-2xl"
              :aria-expanded="openFaqs.includes(index)"
            >
              <h3 class="heading-card text-ink-900 dark:text-ink-50 pr-4">
                {{ faq.question }}
              </h3>
              <Icon
                :name="openFaqs.includes(index) ? 'heroicons:minus' : 'heroicons:plus'"
                class="w-5 h-5 text-primary-500 flex-shrink-0"
              />
            </button>
            
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-300 ease-in"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div
                v-if="openFaqs.includes(index)"
                class="px-6 pb-6"
              >
                <div class="prose-custom max-w-none">
                  <p class="body-text">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FAQ {
  question: string
  answer: string
}

interface Props {
  title: string
  subtitle: string
  faqs: FAQ[]
}

defineProps<Props>()

const openFaqs = ref<number[]>([])

const toggleFaq = (index: number) => {
  const isOpen = openFaqs.value.includes(index)
  if (isOpen) {
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    openFaqs.value.push(index)
  }
}

// Allow multiple FAQs to be open by default
onMounted(() => {
  // You can set default open FAQs here if needed
  // openFaqs.value = [0] // Opens first FAQ by default
})
</script>
