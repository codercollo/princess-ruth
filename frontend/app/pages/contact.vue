<template>
  <div class="px-6 md:px-12 py-12 max-w-7xl mx-auto">
    <SectionHeading
      label="CONTACT"
      heading="Start with a message"
      lead="Tell her the occasion and the date. That is usually enough to begin."
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Channels -->
      <div class="space-y-6">
        <div class="bg-[var(--color-surface)] p-6 border border-[var(--color-brass-dim)] rounded-[4px]">
          <h3 class="font-display text-xl text-[var(--color-calico)] mb-2">WhatsApp</h3>
          <p class="text-sm text-[var(--color-muted)] mb-4">The fastest way. Send a photo of what you want or describe it.</p>
          <WhatsAppButton message="Hi Princess Ruth, I'd like to ask about custom tailoring." />
        </div>

        <div class="bg-[var(--color-surface)] p-6 border border-[var(--color-brass-dim)] rounded-[4px]">
          <h3 class="font-display text-xl text-[var(--color-calico)] mb-2">Call the Shop</h3>
          <p class="text-sm text-[var(--color-muted)] mb-2">0724051039</p>
          <p class="text-xs text-[var(--color-faint)]">Mon – Sat, 8:30am to 6:00pm · Sabina Building, Ngong Town</p>
        </div>
      </div>

      <!-- Form -->
      <form class="bg-[var(--color-surface)] p-8 border border-[var(--color-brass-dim)] rounded-[4px] space-y-4" @submit.prevent>
        <div>
          <label class="block text-xs playbill mb-1">Your Name*</label>
          <input type="text" class="w-full bg-transparent border-b border-[var(--color-brass-dim)] py-2 text-sm text-[var(--color-calico)] focus:border-[var(--color-bronze)] focus:outline-none" required placeholder="Wanjiku Kamau" />
        </div>
        <div>
          <label class="block text-xs playbill mb-1">Phone Number*</label>
          <input type="tel" class="w-full bg-transparent border-b border-[var(--color-brass-dim)] py-2 text-sm text-[var(--color-calico)] focus:border-[var(--color-bronze)] focus:outline-none" required placeholder="07XX XXX XXX" />
        </div>
        <div>
          <label class="block text-xs playbill mb-1">Your Message*</label>
          <textarea rows="4" class="w-full bg-transparent border-b border-[var(--color-brass-dim)] py-2 text-sm text-[var(--color-calico)] focus:border-[var(--color-bronze)] focus:outline-none" required placeholder="Tell her the occasion and date..."></textarea>
        </div>
        <BaseButton type="submit" class="w-full">Send Message</BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/ui/SectionHeading.vue'
import WhatsAppButton from '~/components/ui/WhatsAppButton.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
</script>
