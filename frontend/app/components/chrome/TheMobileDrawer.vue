<template>
  <Transition name="drawer">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-[var(--color-ground)] flex flex-col p-6 md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <!-- Top bar -->
      <div class="flex items-center justify-between pb-5 border-b border-[var(--color-brass-dim)] mb-8">
        <span class="font-display text-2xl text-[var(--color-calico)]">Princess Ruth</span>
        <button
          type="button"
          class="flex items-center justify-center w-10 h-10 rounded border border-[var(--color-brass-dim)] text-[var(--color-calico)] hover:border-[var(--color-brass)] transition-colors cursor-pointer"
          aria-label="Close navigation menu"
          @click="$emit('close')"
        >
          <X :size="20" />
        </button>
      </div>

      <!-- Nav links -->
      <nav class="flex flex-col gap-6 flex-grow">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="font-display text-3xl text-[var(--color-calico)] hover:text-[var(--color-ochre)] transition-colors leading-none"
          active-class="text-[var(--color-ochre)]"
          @click="$emit('close')"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Footer -->
      <div class="pt-8 border-t border-[var(--color-brass-dim)] space-y-4">
        <WhatsAppButton class="w-full" label="Chat on WhatsApp" />
        <p class="text-xs text-[var(--color-muted)] text-center">Sabina Building, Ngong Town · Mon–Sat 8:30am–6pm</p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { X } from '@lucide/vue'
import WhatsAppButton from '~/components/ui/WhatsAppButton.vue'

defineProps<{ isOpen: boolean }>()
defineEmits(['close'])

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
</script>

<style scoped>
.drawer-enter-active, .drawer-leave-active {
  transition: transform 0.5s cubic-bezier(0.76, 0.02, 0.18, 1);
}
.drawer-enter-from, .drawer-leave-to {
  transform: translateX(100%);
}
</style>
