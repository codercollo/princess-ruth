<template>
  <div class="mb-8 max-w-xl">
    <PlaybillLabel v-if="label">{{ label }}</PlaybillLabel>
    <component
      :is="level === 3 ? 'h3' : 'h2'"
      class="font-display text-3xl md:text-4xl text-[var(--color-calico)] leading-tight tracking-tight mb-3"
    >
      {{ heading }}
    </component>
    <p v-if="lead" class="text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
      {{ lead }}
    </p>
  </div>
</template>

<script setup lang="ts">
import PlaybillLabel from './PlaybillLabel.vue'

defineProps<{
  label?: string
  heading: string
  lead?: string
  level?: 2 | 3
}>()
</script>
