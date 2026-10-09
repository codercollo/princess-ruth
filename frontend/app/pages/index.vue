<template>
  <main class="w-full">
    <!-- ── §1 HERO: full-bleed slider ─────────────────────────────── -->
    <HeroSlider />

    <!-- ── Proof strip (unchanged, below hero) ─────────────────────── -->
    <div class="proof-strip" aria-label="About the atelier">
      <span>Ngong Town</span>
      <span aria-hidden="true" class="proof-strip__sep">·</span>
      <span>15 years at the machine</span>
    </div>

    <!-- ── §2 WHAT SHE MAKES ────────────────────────────────────────── -->
    <section class="section px-[var(--gutter)] max-w-7xl mx-auto">
      <div class="mb-10">
        <PlaybillLabel text="WHAT SHE MAKES" />
        <h2
          class="font-display text-[var(--t-h2)] text-[var(--color-calico)] mt-2"
        >
          Four kinds of work leave this shop
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="cat in categories" :key="cat.slug" class="category-card">
          <span class="playbill category-card__label">{{ cat.label }}</span>
          <h3 class="font-display category-card__name">{{ cat.name }}</h3>
          <p class="category-card__body">{{ cat.body }}</p>
          <NuxtLink :to="cat.link" class="category-card__link">
            {{ cat.cta }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── Baste divider ─────────────────────────────────────────────── -->
    <hr class="baste mx-[var(--gutter)]" aria-hidden="true" />

    <!-- ── §3 SPOTLIGHT: category-matched, no generic dress shot ────── -->
    <section class="section px-[var(--gutter)] max-w-7xl mx-auto">
      <div class="mb-10">
        <h2 class="font-display text-[var(--t-h2)] text-[var(--color-calico)]">
          Recent commissions
        </h2>
        <NuxtLink to="/gallery" class="spotlight-more-link"
          >See the full portfolio</NuxtLink
        >
      </div>

      <!-- Three spotlight cards: traditional · official · bridal -->
      <div class="spotlight-grid">
        <article
          v-for="(item, i) in spotlightItems"
          :key="item.id"
          class="spotlight-card"
          :class="{ 'spotlight-card--lead': i === 0 }"
        >
          <img
            :src="item.image"
            :alt="item.alt"
            :loading="i === 0 ? 'eager' : 'lazy'"
            class="spotlight-card__img"
            draggable="false"
          />
          <div class="spotlight-card__lamp" aria-hidden="true" />
          <div class="spotlight-card__body">
            <span class="playbill spotlight-card__cat">{{
              item.category
            }}</span>
            <h3 class="font-display spotlight-card__name">{{ item.name }}</h3>
            <p class="spotlight-card__meta">
              {{ item.fabric }} · {{ item.occasion }}
            </p>
            <WhatsAppButton
              size="sm"
              :piece="item.name"
              :message="`Hi Princess Ruth, I'm interested in the ${item.name} from your gallery.`"
            />
          </div>
        </article>
      </div>
    </section>

    <!-- ── Baste divider ─────────────────────────────────────────────── -->
    <hr class="baste mx-[var(--gutter)]" aria-hidden="true" />

    <!-- ── §4 WORKSHOP FACTS ──────────────────────────────────────────── -->
    <section class="section px-[var(--gutter)] max-w-7xl mx-auto">
      <PlaybillLabel text="THE WORKSHOP" />
      <h2
        class="font-display text-[var(--t-h2)] text-[var(--color-calico)] mt-2 mb-6"
      >
        Fifteen years of quiet, careful work
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
        <div v-for="fact in facts" :key="fact.label">
          <span
            class="font-display block text-4xl sm:text-5xl text-[var(--color-calico)] leading-none"
          >
            {{ fact.value }}
          </span>
          <span class="text-xs text-[var(--color-muted)] mt-1 block">{{ fact.label }}</span>
        </div>
      </div>
    </section>

    <!-- ── §5 TESTIMONIALS ───────────────────────────────────────────── -->
    <section
      class="py-[var(--section-y)] bg-[var(--color-surface)] border-y border-[var(--color-brass-dim)] px-[var(--gutter)]"
    >
      <div class="max-w-4xl mx-auto">
        <h2
          class="font-display text-[var(--t-h2)] text-[var(--color-calico)] mb-8"
        >
          In their words
        </h2>
        <TestimonialSlider />
      </div>
    </section>

    <!-- ── §6 VISIT ──────────────────────────────────────────────────── -->
    <section class="section px-[var(--gutter)] max-w-7xl mx-auto">
      <PlaybillLabel text="VISIT" />
      <h2
        class="font-display text-[var(--t-h2)] text-[var(--color-calico)] mt-2 mb-4"
      >
        The shop is open
      </h2>
      <p class="text-[var(--color-muted)] text-sm mb-6 max-w-prose">
        Sabina Building, Ngong Town. Opposite the stage, first floor, above the
        chemist. Monday to Saturday, 8:30 am to 6:00 pm.
      </p>
      <div class="flex flex-wrap gap-3">
        <WhatsAppButton label="Chat on WhatsApp" />
        <a href="tel:+254748428622" class="ghost-btn"> Call the shop </a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import HeroSlider from "~/components/home/HeroSlider.vue";
import PlaybillLabel from "~/components/ui/PlaybillLabel.vue";
import WhatsAppButton from "~/components/ui/WhatsAppButton.vue";
import TestimonialSlider from "~/components/home/TestimonialSlider.vue";
import { GALLERY_ITEMS } from "~/data/gallery";

/* ── Four-category tiles ────────────────────────────────────────── */
const categories = [
  {
    slug: "traditional",
    label: "Traditional",
    name: "Traditional & ceremonial",
    body: "Kitenge, ankara, kanga and brocade, cut for ruracio, dowry, church and family occasions where everyone is dressing alike.",
    cta: "See traditional pieces",
    link: "/gallery",
  },
  {
    slug: "official",
    label: "Official",
    name: "Official & office",
    body: "Blazers, shift dresses, pencil and A-line skirts, and suiting that fits properly at the shoulder -- with kitenge detailing if you want it.",
    cta: "See office pieces",
    link: "/gallery",
  },
  {
    slug: "bridal",
    label: "Occasion & bridal",
    name: "Occasion & bridal",
    body: "Weddings, graduations, galas, and the whole bridal party. Fittings scheduled backwards from your date.",
    cta: "See occasion pieces",
    link: "/gallery",
  },
  {
    slug: "alterations",
    label: "Alterations",
    name: "Alterations & repairs",
    body: "Hems, zips, linings, taking in, letting out, and restyling something you already love into something you'll wear again.",
    cta: "See what's possible",
    link: "/gallery",
  },
];

/* ── Spotlight pieces: one per category, not the same image ────── */
const spotlightItems = [
  GALLERY_ITEMS.find((i) => i.id === "trad-01")!, // traditional -- warm earth
  GALLERY_ITEMS.find((i) => i.id === "off-01")!, // official -- cooler studio
  GALLERY_ITEMS.find((i) => i.id === "brid-01")!, // bridal -- gold embroidery
];

/* ── Workshop facts ─────────────────────────────────────────────── */
const facts = [
  { value: '15',  label: 'years in Ngong Town' },
  { value: '100%', label: 'fitted in person, every piece' },
  { value: '1',   label: 'garment at a time, made to order' },
]

useHead({
  title: "Princess Ruth -- Custom tailoring & alterations in Ngong Town",
  meta: [
    {
      name: "description",
      content:
        "Princess Ruth Atelier: custom traditional, official and occasion wear for women. Cut and sewn by hand in Ngong Town, Sabina Building. Alterations and repairs.",
    },
  ],
});
</script>

<style scoped>
/* ── Proof strip ─────────────────────────────────────────────────── */
.proof-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
  padding: 0.75rem var(--gutter);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-brass-dim);
  font-size: 0.765rem;
  letter-spacing: 0.05em;
  color: var(--color-muted);
}

.proof-strip__sep {
  color: var(--color-brass-dim);
}

/* ── Category cards ──────────────────────────────────────────────── */
.category-card {
  padding: 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-brass-dim);
  border-radius: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: border-color 220ms var(--ease-soft);
}

.category-card:hover {
  border-color: var(--color-brass);
}

.category-card__label {
  color: var(--color-ochre);
}

.category-card__name {
  font-size: clamp(1rem, 0.9rem + 0.4vw, 1.294rem);
  color: var(--color-calico);
  line-height: 1.25;
  margin: 0;
}

.category-card__body {
  font-size: 0.882rem;
  color: var(--color-muted);
  line-height: 1.6;
  flex: 1;
}

.category-card__link {
  font-size: 0.765rem;
  font-weight: 600;
  color: var(--color-ochre);
  text-decoration: none;
  letter-spacing: 0.02em;
  align-self: flex-start;
  transition: opacity 220ms var(--ease-soft);
}

.category-card__link:hover {
  opacity: 0.75;
  text-decoration: underline;
}

/* ── Spotlight grid ──────────────────────────────────────────────── */
.spotlight-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 1023px) {
  .spotlight-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .spotlight-card--lead {
    grid-column: span 2;
  }
}

@media (max-width: 639px) {
  .spotlight-grid {
    grid-template-columns: 1fr;
  }
  .spotlight-card--lead {
    grid-column: span 1;
  }
}

.spotlight-more-link {
  font-size: 0.765rem;
  color: var(--color-ochre);
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-top: 0.5rem;
}

.spotlight-more-link:hover {
  text-decoration: underline;
}

/* ── Spotlight card ──────────────────────────────────────────────── */
.spotlight-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-brass-dim);
  border-radius: 0;
  aspect-ratio: 3 / 4;
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: border-color 220ms var(--ease-soft);
}

/* Lead card: portrait 3:4 like the others — the 2fr column gives it
   natural width dominance without fighting the portrait aspect. */
.spotlight-card--lead {
  aspect-ratio: 3 / 4;
}

@media (max-width: 639px) {
  .spotlight-card,
  .spotlight-card--lead {
    aspect-ratio: 3 / 4;
  }
}

.spotlight-card:hover {
  border-color: var(--color-brass);
}

.spotlight-card__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 620ms var(--ease-soft);
  display: block;
}

.spotlight-card:hover .spotlight-card__img {
  transform: scale(1.04);
}

/* Lamp spotlight (matches gallery) */
.spotlight-card__lamp {
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

.spotlight-card:hover .spotlight-card__lamp {
  opacity: 1;
}

.spotlight-card__body {
  position: relative;
  z-index: 2;
  padding: 1rem 1.25rem 1.25rem;
  background: linear-gradient(
    to top,
    rgba(22, 17, 14, 0.88) 0%,
    rgba(22, 17, 14, 0.7) 40%,
    rgba(22, 17, 14, 0) 100%
  );
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.spotlight-card__cat {
  color: var(--color-ochre);
}

.spotlight-card__name {
  font-size: clamp(0.9rem, 0.8rem + 0.5vw, 1.294rem);
  color: var(--color-calico);
  margin: 0;
  line-height: 1.25;
}

.spotlight-card__meta {
  font-size: 0.765rem;
  color: var(--color-muted);
  margin: 0 0 0.5rem;
}

/* ── Ghost button (secondary CTA) ────────────────────────────────── */
.ghost-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.882rem;
  font-weight: 500;
  color: var(--color-calico);
  border: 1px solid var(--color-brass-dim);
  border-radius: 4px;
  text-decoration: none;
  transition:
    border-color 220ms var(--ease-soft),
    background 220ms var(--ease-soft);
}

.ghost-btn:hover {
  border-color: var(--color-brass);
  background: var(--color-surface);
}

/* ── Reduced motion ─────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .spotlight-card__img,
  .spotlight-card__lamp,
  .category-card,
  .ghost-btn {
    transition: none;
  }
  .spotlight-card:hover .spotlight-card__img {
    transform: none;
  }
}
</style>
