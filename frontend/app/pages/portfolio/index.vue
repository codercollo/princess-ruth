<template>
  <main class="pt-24 pb-[var(--section-y)] px-[var(--gutter)] max-w-7xl mx-auto">
    <!-- Header -->
    <div class="max-w-3xl mb-12">
      <PlaybillLabel text="Finished Work" />
      <h1 class="font-display text-[var(--t-hero)] text-[var(--color-calico)] mt-2 mb-4 leading-none">
        Our Craft Portfolio
      </h1>
      <p class="text-xs sm:text-base text-[var(--color-muted)]">
        A closer look at completed dress commissions, alterations, and client fittings delivered at Sabina Building.
      </p>
    </div>

    <!-- Portfolio Cards -->
    <div class="space-y-8 sm:space-y-12">
      <div
        v-for="(item, idx) in portfolioItems"
        :key="item.title"
        class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[var(--color-surface)] border border-[var(--color-brass-dim)] rounded-xl p-4 sm:p-6 lg:p-8"
      >
        <!-- Image Container -->
        <div
          :class="[
            'lg:col-span-6 relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--color-brass-dim)] w-full max-h-[360px]',
            idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
          ]"
        >
          <SmartImage
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Details -->
        <div :class="['lg:col-span-6 space-y-3 sm:space-y-4', idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2']">
          <div class="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-[var(--color-ochre)] uppercase tracking-wider">
            <span>{{ item.category }}</span>
            <span>·</span>
            <span class="text-[var(--color-muted)]">{{ item.timeline }}</span>
          </div>

          <h2 class="font-display text-xl sm:text-3xl text-[var(--color-calico)] leading-tight">
            {{ item.title }}
          </h2>

          <p class="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
            {{ item.description }}
          </p>

          <div class="pt-2">
            <WhatsAppButton
              size="sm"
              :piece="item.title"
              label="Request Similar Work"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import PlaybillLabel from '~/components/ui/PlaybillLabel.vue'
import WhatsAppButton from '~/components/ui/WhatsAppButton.vue'
import SmartImage from '~/components/ui/SmartImage.vue'

const portfolioItems = [
  {
    title: 'Rust Ankara Peplum Two-Piece',
    category: 'Traditional & Ceremonial',
    timeline: 'Custom commission',
    image: '/images/gallery-traditional-1.jpg',
    description: 'Crafted for a ruracio ceremony in Nyeri. Ankle-length peplum blouse and matching wrap skirt in terracotta and brown wax-print cotton, with a structured seam at the waist and hand-pressed tucks throughout.'
  },
  {
    title: 'Navy Shift Dress with Kitenge Pocket',
    category: 'Office & Corporate',
    timeline: 'Custom commission',
    image: '/images/gallery-official-1.jpg',
    description: 'Tailored for everyday Nairobi office wear. Cotton-twill shift dress with a clean structured neckline, fitted at the shoulder, with kitenge wax-print patch pockets — functional detail without the pattern shouting.'
  },
  {
    title: 'Aso-Oke Bridal Gown',
    category: 'Occasion & Bridal',
    timeline: 'Bridal commission',
    image: '/images/hero-bridal.jpg',
    description: 'Full-length bridal gown in aso-oke with hand-embroidered gold vine and blossom detail at the neckline and cuffs. Cut to a mermaid silhouette, fitted through four sessions before the final close.'
  },
]

useHead({
  title: 'Portfolio — Princess Ruth Atelier',
  meta: [
    { name: 'description', content: 'Explore completed African dress commissions and tailoring portfolio from Princess Ruth Atelier in Ngong Town.' }
  ]
})
</script>
