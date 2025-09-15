<template>
  <button
    @click="toggleTheme"
    :aria-label="`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`"
    class="relative p-2 rounded-xl bg-ink-100 dark:bg-ink-800 hover:bg-ink-200 dark:hover:bg-ink-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-ink-900"
  >
    <Transition
      name="theme-icon"
      mode="out-in"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 scale-75 rotate-90"
      leave-to-class="opacity-0 scale-75 -rotate-90"
    >
      <Icon
        :name="resolvedTheme === 'dark' ? 'heroicons:sun' : 'heroicons:moon'"
        class="w-5 h-5 text-ink-700 dark:text-ink-300"
      />
    </Transition>
  </button>
</template>

<script setup lang="ts">
const { resolvedTheme, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: all 0.3s ease;
}

.theme-icon-enter-from {
  opacity: 0;
  transform: scale(0.75) rotate(90deg);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: scale(0.75) rotate(-90deg);
}
</style>
