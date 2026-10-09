<template>
  <div class="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[var(--color-surface)] border-t border-[var(--color-brass-dim)] p-3 flex items-center gap-2 backdrop-blur-md">
    <a
      href="tel:+254724051039"
      class="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-transparent border border-[var(--color-brass-dim)] text-[var(--color-calico)] text-xs font-medium hover:border-[var(--color-brass)] transition-colors"
    >
      <Phone :size="14" />
      <span>Call Atelier</span>
    </a>
    <WhatsAppButton class="flex-1" size="sm" label="WhatsApp" />
  </div>
</template>

<script setup lang="ts">
import { Phone } from '@lucide/vue'
import WhatsAppButton from '~/components/ui/WhatsAppButton.vue'
</script>
