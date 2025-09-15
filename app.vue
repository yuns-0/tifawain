<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Initialize theme on app start
const { resolvedTheme } = useTheme()

// Apply theme to document
onMounted(() => {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(resolvedTheme.value)
})

// Watch for theme changes
watch(resolvedTheme, (newTheme) => {
  if (process.client) {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(newTheme)
  }
})
</script>
