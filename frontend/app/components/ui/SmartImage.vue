<template>
  <div class="relative overflow-hidden rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-brass-dim)] w-full h-full">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      loading="lazy"
      class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      @error="handleError"
    />
    <div
      v-else
      class="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-ground)] text-[var(--color-muted)]"
    >
      <Icon name="ph:scissors" class="w-8 h-8 text-[var(--color-brass)] mb-2 animate-pulse" />
      <span class="font-display text-sm text-[var(--color-calico)]">{{ fallbackTitle || 'Princess Ruth Atelier' }}</span>
      <span class="text-xs text-[var(--color-faint)] mt-1">Crafted in Ngong Town</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from '~/components/ui/Icon.vue'

const props = defineProps<{
  src?: string
  alt: string
  fallbackTitle?: string
}>()

const hasError = ref(false)

function handleError() {
  hasError.value = true
}
</script>
