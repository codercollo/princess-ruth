import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollVelocity() {
  const velocity = ref(0)
  let lastScrollY = 0
  let lastTimestamp = 0
  let ticker: any = null

  function update() {
    const currentScrollY = window.scrollY
    const currentTimestamp = performance.now()
    const deltaY = currentScrollY - lastScrollY
    const deltaTime = currentTimestamp - lastTimestamp

    if (deltaTime > 0) {
      velocity.value = deltaY / deltaTime
    }

    lastScrollY = currentScrollY
    lastTimestamp = currentTimestamp
  }

  onMounted(() => {
    lastScrollY = window.scrollY
    lastTimestamp = performance.now()
    window.addEventListener('scroll', update, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
  })

  return {
    velocity,
  }
}
