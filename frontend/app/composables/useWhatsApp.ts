import { computed } from 'vue'

export function useWhatsApp() {
  const config = useRuntimeConfig()
  const rawPhone = computed(() => (config.public.whatsapp as string) || '+254700000000')

  function getWhatsAppUrl(message?: string, pieceName?: string): string {
    let text = message
    if (!text && pieceName) {
      text = `Hi Mama Njeri, I'm interested in the ${pieceName} from your gallery.`
    }
    if (!text) {
      text = "Hi Mama Njeri, I found you online. I'd like to ask about a garment."
    }
    const cleanPhone = rawPhone.value.replace(/[^0-9+]/g, '')
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`
  }

  return {
    getWhatsAppUrl,
  }
}
