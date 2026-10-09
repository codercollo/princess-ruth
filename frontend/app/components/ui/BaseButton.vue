<template>
  <component
    :is="tag"
    :aria-label="label"
    class="inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer border rounded"
    :class="[variantClasses, sizeClasses]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    as?: string
    variant?: 'primary' | 'ghost' | 'link'
    size?: 'sm' | 'md' | 'lg'
    label?: string
  }>(),
  {
    as: 'button',
    variant: 'primary',
    size: 'md',
  }
)

const tag = computed(() => props.as)

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-[var(--color-ochre)] text-[var(--color-ground)] border-transparent hover:bg-[var(--color-bronze)] shadow-sm'
    case 'ghost':
      return 'bg-transparent text-[var(--color-calico)] border-[var(--color-brass-dim)] hover:border-[var(--color-brass)] hover:bg-[var(--color-surface)]'
    case 'link':
      return 'bg-transparent text-[var(--color-ochre)] border-transparent hover:underline p-0'
    default:
      return ''
  }
})

const sizeClasses = computed(() => {
  if (props.variant === 'link') return ''
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-xs gap-1.5'
    case 'lg':
      return 'px-6 py-3.5 text-base gap-2.5'
    case 'md':
    default:
      return 'px-4 py-2 text-sm gap-2'
  }
})
</script>
