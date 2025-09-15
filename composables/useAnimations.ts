import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)
  const element = ref<HTMLElement>()

  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  onMounted(() => {
    if (element.value) {
      observer.observe(element.value)
    }
  })

  onUnmounted(() => {
    if (element.value) {
      observer.unobserve(element.value)
    }
  })

  return {
    element,
    isVisible
  }
}

export function useStaggerAnimation(delay = 0.06) {
  const isVisible = ref(false)
  const element = ref<HTMLElement>()
  const children = ref<HTMLElement[]>([])

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        // Stagger children animations
        children.value.forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = '1'
            child.style.transform = 'translateY(0)'
          }, index * delay * 1000)
        })
      }
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  onMounted(() => {
    if (element.value) {
      observer.observe(element.value)
      // Initialize children
      children.value = Array.from(element.value.children) as HTMLElement[]
      children.value.forEach(child => {
        child.style.opacity = '0'
        child.style.transform = 'translateY(16px)'
        child.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
      })
    }
  })

  onUnmounted(() => {
    if (element.value) {
      observer.unobserve(element.value)
    }
  })

  return {
    element,
    isVisible
  }
}

export function useMagneticEffect() {
  const element = ref<HTMLElement>()
  const isHovered = ref(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (!element.value || !isHovered.value) return

    const rect = element.value.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const distance = Math.sqrt(x * x + y * y)
    const maxDistance = 50

    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance
      const moveX = (x / maxDistance) * strength * 10
      const moveY = (y / maxDistance) * strength * 10

      element.value.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`
    }
  }

  const handleMouseEnter = () => {
    isHovered.value = true
  }

  const handleMouseLeave = () => {
    isHovered.value = false
    if (element.value) {
      element.value.style.transform = 'translate(0, 0) scale(1)'
    }
  }

  onMounted(() => {
    if (element.value) {
      element.value.addEventListener('mousemove', handleMouseMove)
      element.value.addEventListener('mouseenter', handleMouseEnter)
      element.value.addEventListener('mouseleave', handleMouseLeave)
    }
  })

  onUnmounted(() => {
    if (element.value) {
      element.value.removeEventListener('mousemove', handleMouseMove)
      element.value.removeEventListener('mouseenter', handleMouseEnter)
      element.value.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return {
    element,
    isHovered
  }
}
