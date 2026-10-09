import { defineNuxtRouteMiddleware } from '#app'
import { useCurtain } from '~/composables/useCurtain'

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) return

  const { close, open } = useCurtain()

  // Close the curtain before navigating
  await close()

  // Re-open after next tick / navigation complete
  setTimeout(() => {
    open()
  }, 100)
})
