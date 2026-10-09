<template>
  <main class="pt-24 pb-[var(--section-y)] px-[var(--gutter)] max-w-7xl mx-auto">

    <!-- ── Page header ─────────────────────────────────────────────── -->
    <header class="max-w-3xl mb-10">
      <PlaybillLabel text="GALLERY" />
      <h1 class="font-display text-[var(--t-hero)] text-[var(--color-calico)] mt-2 mb-4 leading-none">
        Everything that has left this shop
      </h1>
      <p class="text-[var(--text-sm)] sm:text-[var(--text-base)] text-[var(--color-muted)]">
        Browse by occasion. Tap any piece to ask about it.
      </p>

      <!-- ── Filter chips ───────────────────────────────────────────── -->
      <div class="flex flex-wrap gap-2 mt-6 sm:mt-8" role="group" aria-label="Filter by category">
        <button
          v-for="cat in categories"
          :key="cat.value"
          type="button"
          :aria-pressed="activeCategory === cat.value"
          :class="[
            'px-3 sm:px-4 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold tracking-wider transition-colors cursor-pointer',
            activeCategory === cat.value
              ? 'bg-[var(--color-ochre)] text-[var(--color-ground)]'
              : 'bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-calico)] border border-[var(--color-brass-dim)] hover:border-[var(--color-brass)]'
          ]"
          @click="setCategory(cat.value)"
        >
          {{ cat.label }}
        </button>
      </div>
    </header>

    <!-- ── Baste divider ──────────────────────────────────────────── -->
    <hr class="baste mb-10" aria-hidden="true" />

    <!-- ── Grid: 3 / 2 / 1 columns, no radius, spotlight on hover ── -->
    <section
      v-if="visibleItems.length"
      class="gallery-grid"
      aria-label="Gallery pieces"
    >
      <article
        v-for="(item, index) in visibleItems"
        :key="item.id"
        class="gallery-card"
        :class="{ 'gallery-card--featured': item.featured && index === 0 }"
      >
        <!-- Image -->
        <img
          :src="item.image"
          :alt="item.alt"
          :loading="index < 3 ? 'eager' : 'lazy'"
          class="gallery-card__img"
          draggable="false"
        />

        <!-- Spotlight overlay (ochre radial, lamp-style) -->
        <div class="gallery-card__lamp" aria-hidden="true" />

        <!-- Bottom scrim + copy -->
        <div class="gallery-card__body">
          <!-- Category tag -->
          <span class="gallery-card__cat playbill">{{ categoryLabel(item.category) }}</span>

          <!-- Piece name -->
          <h2 class="gallery-card__name font-display">{{ item.name }}</h2>

          <!-- Fabric · Occasion meta -->
          <p class="gallery-card__meta">
            <span>{{ item.fabric }}</span>
            <span aria-hidden="true">&thinsp;·&thinsp;</span>
            <span>{{ item.occasion }}</span>
          </p>

          <!-- WhatsApp CTA (screen-reader label assembled from piece data) -->
          <div class="gallery-card__cta">
            <WhatsAppButton
              size="sm"
              :piece="item.name"
              :message="`Hi Princess Ruth, I'm interested in the ${item.name} -- ${item.fabric}, ${item.occasion}. Could you make something similar?`"
              :label="`WhatsApp`"
              :aria-label="`${item.name}, ${item.fabric}, made for ${item.occasion}. Message about this piece.`"
            />
          </div>
        </div>
      </article>
    </section>

    <!-- ── Empty state ────────────────────────────────────────────── -->
    <div v-else class="py-20 text-center">
      <p class="text-[var(--color-muted)] mb-2">Nothing in this category yet.</p>
      <p class="text-[var(--text-sm)] text-[var(--color-faint)] max-w-sm mx-auto mb-6">
        She's made pieces like this before -- describe what you want and she'll show you photos on WhatsApp.
      </p>
      <WhatsAppButton label="Chat on WhatsApp" />
    </div>

    <!-- ── Baste divider ──────────────────────────────────────────── -->
    <hr class="baste mt-16 mb-12" aria-hidden="true" />

    <!-- ── Closing CTA ────────────────────────────────────────────── -->
    <div class="max-w-xl">
      <h2 class="font-display text-[var(--t-h2)] text-[var(--color-calico)] mb-3">Didn't see it?</h2>
      <p class="text-[var(--text-sm)] text-[var(--color-muted)] mb-6 leading-relaxed">
        Most of what she makes never makes it to this page. Describe the piece, or send a photo,
        and she'll tell you what it takes.
      </p>
      <WhatsAppButton label="Chat on WhatsApp" />
    </div>

  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PlaybillLabel from '~/components/ui/PlaybillLabel.vue'
import WhatsAppButton from '~/components/ui/WhatsAppButton.vue'
import { GALLERY_ITEMS, type GalleryItem } from '~/data/gallery'

/* ── Category filter ───────────────────────────────────────────── */
const categories = [
  { value: 'all',         label: 'All' },
  { value: 'traditional', label: 'Traditional' },
  { value: 'official',    label: 'Office & official' },
  { value: 'occasion',    label: 'Occasion' },
  { value: 'bridal',      label: 'Bridal' },
  { value: 'alterations', label: 'Alterations' },
] as const

type CategoryValue = typeof categories[number]['value']

const activeCategory = ref<CategoryValue>('all')

function setCategory(val: CategoryValue) {
  activeCategory.value = val
}

const visibleItems = computed<GalleryItem[]>(() => {
  if (activeCategory.value === 'all') return GALLERY_ITEMS
  return GALLERY_ITEMS.filter(i => i.category === activeCategory.value)
})

function categoryLabel(cat: GalleryItem['category']): string {
  return categories.find(c => c.value === cat)?.label ?? cat
}

/* ── Meta ──────────────────────────────────────────────────────── */
useHead({
  title: 'Gallery -- custom African and official wear | Princess Ruth Atelier',
  meta: [
    {
      name: 'description',
      content:
        'Dresses, suits, ceremonial and occasion wear made in Ngong Town. Browse by occasion and message on WhatsApp about any piece.',
    },
  ],
})
</script>

<style scoped>
/* ── Gallery grid: 3 col desktop / 2 tablet / 1 mobile ─────────── */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  /* Auto rows: standard row height based on 3:4 in a 3-col grid */
  grid-auto-rows: auto;
}

@media (max-width: 1023px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 639px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 0.875rem;
  }
}

/* ── Featured card: spans 2 cols + 2 rows — creates a clear anchor ── */
.gallery-card--featured {
  grid-column: span 2;
  grid-row: span 2;
}

/* On tablet: keep featured spanning 2 cols (no row-span — fits 2-col grid) */
@media (max-width: 1023px) {
  .gallery-card--featured {
    grid-column: span 2;
    grid-row: span 1;
  }
}

@media (max-width: 639px) {
  .gallery-card--featured {
    grid-column: span 1;
    grid-row: span 1;
  }
}

/* ── Card ────────────────────────────────────────────────────────── */
.gallery-card {
  position: relative;
  overflow: hidden;
  /* Square corners — per token spec: cloth has raw edges */
  border-radius: 0;
  border: 1px solid var(--color-brass-dim);
  background: var(--color-surface);
  aspect-ratio: 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
}

/* Featured card: portrait 3:4 like standard tiles.
   The 2-row span in the grid stretches it tall — no conflicting ratio needed. */
.gallery-card--featured {
  aspect-ratio: 3 / 4;
  /* Ensure it always has decent height on its own */
  min-height: 420px;
}

@media (max-width: 639px) {
  .gallery-card,
  .gallery-card--featured {
    aspect-ratio: 3 / 4;
    min-height: 0;
  }
}

/* ── Image ───────────────────────────────────────────────────────── */
.gallery-card__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 620ms var(--ease-soft);
  display: block;
}

.gallery-card:hover .gallery-card__img {
  transform: scale(1.04);
}

/* ── Spotlight lamp (ochre radial from top, per --c-lamp token) ─── */
.gallery-card__lamp {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    120% 90% at 50% 0%,
    rgba(201, 138, 43, 0.22) 0%,
    rgba(201, 138, 43, 0) 62%
  );
  opacity: 0;
  transition: opacity 340ms var(--ease-soft);
  pointer-events: none;
  z-index: 1;
}

.gallery-card:hover .gallery-card__lamp {
  opacity: 1;
}

/* ── Body (scrim + copy) ─────────────────────────────────────────── */
.gallery-card__body {
  position: relative;
  z-index: 2;
  padding: 1rem 1.25rem 1.25rem;
  background: linear-gradient(
    to top,
    rgba(22, 17, 14, 0.88) 0%,
    rgba(22, 17, 14, 0.70) 40%,
    rgba(22, 17, 14, 0) 100%
  );
}

/* ── Category label ──────────────────────────────────────────────── */
.gallery-card__cat {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--color-ochre);
  /* playbill utility handles uppercase + tracking */
}

/* ── Piece name ──────────────────────────────────────────────────── */
.gallery-card__name {
  font-size: clamp(1rem, 0.9rem + 0.5vw, 1.294rem);
  line-height: 1.25;
  color: var(--color-calico);
  margin: 0 0 0.35rem;
}

/* ── Fabric · Occasion ───────────────────────────────────────────── */
.gallery-card__meta {
  font-size: 0.765rem;
  color: var(--color-muted);
  margin: 0 0 0.75rem;
  line-height: 1.4;
}

/* ── CTA -- visible on hover, screen-reader always present ────────── */
.gallery-card__cta {
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity 220ms var(--ease-soft),
    transform 220ms var(--ease-soft);
}

.gallery-card:hover .gallery-card__cta,
.gallery-card:focus-within .gallery-card__cta {
  opacity: 1;
  transform: translateY(0);
}

/* ── Border highlight on hover ───────────────────────────────────── */
.gallery-card:hover {
  border-color: var(--color-brass);
}

/* ── Reduced motion ─────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .gallery-card__img,
  .gallery-card__lamp,
  .gallery-card__cta {
    transition: none;
  }
  .gallery-card:hover .gallery-card__img {
    transform: none;
  }
  .gallery-card__cta {
    opacity: 1;
    transform: none;
  }
}
</style>
