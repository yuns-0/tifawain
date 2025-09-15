import { ref, computed, watchEffect } from 'vue'

export const useTheme = () => {
  const theme = ref<'light' | 'dark' | 'system'>('system')
  const systemTheme = ref<'light' | 'dark'>('light')

  // Check system theme preference
  if (process.client) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    systemTheme.value = mediaQuery.matches ? 'dark' : 'light'
    
    mediaQuery.addEventListener('change', (e) => {
      systemTheme.value = e.matches ? 'dark' : 'light'
    })
  }

  // Computed theme based on preference
  const resolvedTheme = computed(() => {
    if (theme.value === 'system') {
      return systemTheme.value
    }
    return theme.value
  })

  // Apply theme to document
  watchEffect(() => {
    if (process.client) {
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(resolvedTheme.value)
      
      // Update meta theme-color
      const metaThemeColor = document.querySelector('meta[name="theme-color"]')
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', resolvedTheme.value === 'dark' ? '#0B1020' : '#FFFFFF')
      }
    }
  })

  // Initialize theme from localStorage
  if (process.client) {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system'
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      theme.value = savedTheme
    }
  }

  // Save theme to localStorage
  const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
    theme.value = newTheme
    if (process.client) {
      localStorage.setItem('theme', newTheme)
    }
  }

  // Toggle between light and dark
  const toggleTheme = () => {
    if (theme.value === 'system') {
      setTheme(systemTheme.value === 'dark' ? 'light' : 'dark')
    } else {
      setTheme(theme.value === 'dark' ? 'light' : 'dark')
    }
  }

  return {
    theme: readonly(theme),
    resolvedTheme: readonly(resolvedTheme),
    setTheme,
    toggleTheme
  }
}
