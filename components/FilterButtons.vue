<template>
  <div class="filter-buttons">
    <button
      v-for="(filter, index) in filters"
      :key="filter.value"
      @click="selectFilter(filter.value)"
      :class="[
        'filter-button',
        { 'filter-button-active': selectedFilter === filter.value }
      ]"
      :aria-pressed="selectedFilter === filter.value"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface Filter {
  value: string
  label: string
}

interface Props {
  filters: Filter[]
  selectedFilter: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  filterChange: [value: string]
}>()

const selectFilter = (value: string) => {
  emit('filterChange', value)
}
</script>

<style scoped>
.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: center;
  margin-bottom: var(--space-2xl);
}

.filter-button {
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-full);
  border: 1px solid #e5e7eb;
  background-color: white;
  color: #6b7280;
  font-size: var(--text-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.dark .filter-button {
  background-color: #1f2937;
  border-color: #374151;
  color: #9ca3af;
}

.filter-button:hover {
  background-color: #f9fafb;
  border-color: #d1d5db;
  color: #374151;
}

.dark .filter-button:hover {
  background-color: #374151;
  border-color: #4b5563;
  color: #d1d5db;
}

.filter-button-active {
  background-color: #5b21b6;
  border-color: #5b21b6;
  color: white;
}

.filter-button-active:hover {
  background-color: #4c1d95;
  border-color: #4c1d95;
  color: white;
}

@media (min-width: 640px) {
  .filter-buttons {
    justify-content: flex-start;
  }
}
</style>
