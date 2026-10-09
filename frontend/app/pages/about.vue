<template>
  <main class="pt-24 pb-[var(--section-y)] px-[var(--gutter)] max-w-5xl mx-auto">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
      <PlaybillLabel text="The Shop &amp; Atelier" />
      <h1 class="font-display text-[var(--t-hero)] text-[var(--color-calico)] mt-2 mb-4 leading-none">
        About Princess Ruth Atelier
      </h1>
      <p class="text-xs sm:text-lg text-[var(--color-muted)] leading-relaxed">
        Located at Sabina Building in the heart of Ngong Town, Princess Ruth is a dedicated tailoring workshop specializing in bespoke African dresses, official wear, and high-precision alterations.
      </p>
    </div>

    <!-- Atelier Core Principles -->
    <div class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-6 mb-12 sm:mb-16">
      <div class="p-6 bg-[var(--color-surface)] border border-[var(--color-brass-dim)] rounded-lg">
        <h3 class="font-display text-lg sm:text-xl text-[var(--color-ochre)] mb-2">1. Fit First</h3>
        <p class="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
          We don't believe in standard rack sizes. Every garment is measured and cut specifically for your unique proportions.
        </p>
      </div>

      <div class="p-6 bg-[var(--color-surface)] border border-[var(--color-brass-dim)] rounded-lg">
        <h3 class="font-display text-lg sm:text-xl text-[var(--color-ochre)] mb-2">2. Honest Timelines</h3>
        <p class="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
          When we give you a collection date, we stick to it. Emergency same-day zipper or hem repairs are accommodated whenever possible.
        </p>
      </div>

      <div class="p-6 bg-[var(--color-surface)] border border-[var(--color-brass-dim)] rounded-lg">
        <h3 class="font-display text-lg sm:text-xl text-[var(--color-ochre)] mb-2">3. Quality Seams</h3>
        <p class="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
          Reinforced stitches, clean overlocking, and lined interiors ensure your garments last for years without tearing at the stress points.
        </p>
      </div>
    </div>

    <!-- Shop Details & Hours Card -->
    <div class="bg-[var(--color-surface)] border border-[var(--color-brass-dim)] rounded-xl p-6 sm:p-8 mb-12 sm:mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="font-display text-xl sm:text-2xl text-[var(--color-calico)] mb-4">Visit Our Workshop</h2>
          <address class="not-italic space-y-3 text-xs sm:text-sm text-[var(--color-muted)]">
            <p><strong class="text-[var(--color-calico)]">Location:</strong> Sabina Building, Ngong Town, Kenya</p>
            <p><strong class="text-[var(--color-calico)]">Call Us:</strong> <a href="tel:0724051039" class="hover:underline text-[var(--color-ochre)]">0724 051 039</a></p>
            <p><strong class="text-[var(--color-calico)]">WhatsApp:</strong> <a href="https://wa.me/+254748428622" target="_blank" class="hover:underline text-[var(--color-ochre)]">0748 428 622</a></p>
          </address>
        </div>

        <div>
          <h2 class="font-display text-xl sm:text-2xl text-[var(--color-calico)] mb-4">Opening Hours</h2>
          <div class="space-y-2 text-xs sm:text-sm text-[var(--color-muted)]">
            <div class="flex justify-between border-b border-[var(--color-brass-dim)] pb-1.5">
              <span>Monday – Friday</span>
              <span class="text-[var(--color-calico)]">8:30 AM – 6:00 PM</span>
            </div>
            <div class="flex justify-between border-b border-[var(--color-brass-dim)] pb-1.5">
              <span>Saturday</span>
              <span class="text-[var(--color-calico)]">9:00 AM – 5:00 PM</span>
            </div>
            <div class="flex justify-between">
              <span>Sunday &amp; Public Holidays</span>
              <span class="text-[var(--color-ochre)]">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center">
      <WhatsAppButton size="lg" label="Contact Shop via WhatsApp" />
    </div>
  </main>
</template>

<script setup lang="ts">
import PlaybillLabel from '~/components/ui/PlaybillLabel.vue'
import WhatsAppButton from '~/components/ui/WhatsAppButton.vue'

useHead({
  title: 'About the Shop — Princess Ruth Atelier Ngong Town',
  meta: [
    { name: 'description', content: 'Learn about Princess Ruth Atelier, located at Sabina Building in Ngong Town. Expert tailoring, bespoke African dresses, and alterations.' }
  ]
})
</script>
