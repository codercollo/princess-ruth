<template>
  <BaseButton
    as="a"
    :href="waUrl"
    target="_blank"
    rel="noopener noreferrer"
    :variant="variant"
    :size="size"
  >
    <MessageCircle :size="16" class="shrink-0" />
    <span>{{ label || defaultLabel }}</span>
  </BaseButton>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MessageCircle } from '@lucide/vue'
import BaseButton from '~/components/ui/BaseButton.vue'

const props = withDefaults(
  defineProps<{
    message?: string
    piece?: string
    variant?: 'primary' | 'ghost' | 'link'
    size?: 'sm' | 'md' | 'lg'
    label?: string
  }>(),
  { variant: 'primary', size: 'md' }
)

const config = useRuntimeConfig()
const phone = computed(() => (config.public.whatsapp as string) || '+254748428622')
const defaultLabel = computed(() => (props.size === 'sm' ? 'WhatsApp' : 'Chat on WhatsApp'))

const waUrl = computed(() => {
  let text = props.message
  if (!text && props.piece) text = `Hi Princess Ruth, I'm interested in the ${props.piece} from your gallery.`
  if (!text) text = "Hi Princess Ruth, I found you online. I'd like to ask about a garment."
  return `https://wa.me/${phone.value.replace(/[^0-9+]/g, '')}?text=${encodeURIComponent(text)}`
})
</script>
