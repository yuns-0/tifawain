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

      <div class="steps-container">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="step-item"
        >
          <!-- Step Number -->
          <div class="step-number">
            <span class="step-number-text">{{ index + 1 }}</span>
          </div>

          <!-- Step Content -->
          <div class="step-content">
            <h3 class="heading-card mb-3">
              {{ step.title }}
            </h3>
            <p class="body-text mb-4">
              {{ step.description }}
            </p>
            <div class="step-duration">
              <Icon name="heroicons:clock" class="w-4 h-4" />
              <span>{{ step.duration }}</span>
            </div>
          </div>

          <!-- Connector Line (except for last item) -->
          <div
            v-if="index < steps.length - 1"
            class="step-connector"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Step {
  title: string
  description: string
  duration: string
}

interface Props {
  title: string
  subtitle: string
  steps: Step[]
}

defineProps<Props>()
</script>

<style scoped>
.steps-container {
  display: grid;
  gap: 3rem;
  max-width: 4xl;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .steps-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

.step-item {
  position: relative;
  text-align: center;
}

.step-number {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #5b21b6, #00e5a8);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.step-number-text {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}

.step-content {
  padding: 0 1rem;
}

.step-duration {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 1rem;
  background-color: #f3f4f6;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
}

.dark .step-duration {
  background-color: #374151;
  color: #9ca3af;
}

.step-connector {
  position: absolute;
  top: 2rem;
  left: 50%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #5b21b6, #00e5a8);
  transform: translateX(-50%);
  z-index: 1;
}

@media (min-width: 768px) {
  .step-connector {
    top: 2rem;
    left: calc(50% + 2rem);
    width: calc(100% - 4rem);
  }
}

@media (max-width: 767px) {
  .step-connector {
    display: none;
  }
}
</style>