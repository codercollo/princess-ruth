import { ref, readonly } from 'vue'

const state = ref<'closed' | 'opening' | 'open' | 'closing'>('open')
const isTransitioning = ref(false)

export function useCurtain() {
  function open(): Promise<void> {
    if (state.value === 'open' || isTransitioning.value) return Promise.resolve()
    isTransitioning.value = true
    state.value = 'opening'

    return new Promise((resolve) => {
      setTimeout(() => {
        state.value = 'open'
        isTransitioning.value = false
        resolve()
      }, 620)
    })
  }

  function close(): Promise<void> {
    if (state.value === 'closed' || isTransitioning.value) return Promise.resolve()
    isTransitioning.value = true
    state.value = 'closing'

    return new Promise((resolve) => {
      setTimeout(() => {
        state.value = 'closed'
        isTransitioning.value = false
        resolve()
      }, 560)
    })
  }

  return {
    state: readonly(state),
    isTransitioning: readonly(isTransitioning),
    open,
    close,
  }
}
