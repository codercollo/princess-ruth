<template>
  <!-- Full-bleed hero: 100svh, no overflow -->
  <section
    class="hero-slider"
    aria-label="Princess Ruth Atelier -- featured work"
    role="region"
  >
    <!-- ── Slide images (crossfade) ─────────────────────────────── -->
    <div class="hero-slides" aria-hidden="true">
      <div
        v-for="(slide, i) in slides"
        :key="slide.id"
        class="hero-slide"
        :class="{ 'is-active': current === i, 'is-prev': prev === i }"
      >
        <img
          :src="slide.image"
          :alt="slide.imageAlt"
          :loading="i === 0 ? 'eager' : 'lazy'"
          :fetchpriority="i === 0 ? 'high' : 'auto'"
          class="hero-slide__img"
          draggable="false"
        />
      </div>
    </div>

    <!-- ── Bottom-up scrim ──────────────────────────────────────── -->
    <div class="hero-scrim" aria-hidden="true" />

    <!-- ── Copy block (left-aligned, over scrim) ───────────────── -->
    <div class="hero-body">
      <div class="hero-body__inner">
        <!-- Slide label (category) -->
        <p
          class="playbill hero-body__label"
          aria-live="polite"
          aria-atomic="true"
        >
          {{ currentSlide.label }}
        </p>

        <!-- 3-line headline (content locked -- task spec) -->
        <h1 class="font-display hero-body__headline">
          <span class="hero-body__line">Cloth is patient.</span>
          <span class="hero-body__line">It waits to be told</span>
          <span class="hero-body__line">what it will become.</span>
        </h1>

        <!-- Subline -->
        <p class="hero-body__subline">
          Custom traditional, official and occasion wear for women. Cut and sewn
          by hand in Ngong Town, one garment at a time.
        </p>

        <!-- CTAs -->
        <div class="hero-body__ctas">
          <WhatsAppButton size="md" label="Chat on WhatsApp" />
          <NuxtLink to="/gallery" class="hero-cta-secondary">
            See the work
          </NuxtLink>
        </div>

        <!-- Proof line -->
        <p class="hero-body__proof">Ngong Town&thinsp;·&thinsp;15 years&thinsp;·&thinsp;made to order</p>
      </div>

      <!-- ── Dot nav ─────────────────────────────────────────────── -->
      <nav class="hero-dots" aria-label="Slide navigation">
        <button
          v-for="(slide, i) in slides"
          :key="slide.id"
          type="button"
          class="hero-dot"
          :class="{ 'is-active': current === i }"
          :aria-label="`Go to slide ${i + 1}: ${slide.label}`"
          :aria-current="current === i ? 'true' : undefined"
          @click="goTo(i)"
        />
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import WhatsAppButton from "~/components/ui/WhatsAppButton.vue";

/* ── Slide data ──────────────────────────────────────────────────── */
const slides = [
  {
    id: "traditional",
    label: "Traditional & ceremonial",
    image: "/images/hero-traditional.jpg",
    imageAlt:
      "Kitenge two-piece ensemble in amber wax-print, full-length, worn for a ceremony",
  },
  {
    id: "official",
    label: "Official & office",
    image: "/images/hero-official.jpg",
    imageAlt:
      "Tailored charcoal blazer with ochre stripe over a fitted pencil skirt",
  },
  {
    id: "bridal",
    label: "Occasion & bridal",
    image: "/images/hero-bridal.jpg",
    imageAlt:
      "Aso-oke bridal gown with hand-embroidered gold vine detail at neckline and cuffs",
  },
  {
    id: "alterations",
    label: "Alterations & repairs",
    image: "/images/hero-alterations.jpg",
    imageAlt:
      "Tailor's hands hand-finishing a hem on dark indigo fabric at the cutting table",
  },
];

const DWELL_MS = 7000 // 7-second dwell per slide

const current = ref(0)
const prev = ref<number | null>(null)
let timer: ReturnType<typeof setInterval> | null = null

/* currentSlide is always defined — the modulo in advance() guarantees
   current.value is a valid index, but the TS plugin can't infer that
   from a plain array access. This computed makes the type explicit. */
const currentSlide = computed(() => slides[current.value % slides.length]!)

/* Check reduced-motion preference */
const prefersReduced =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

function advance() {
  prev.value = current.value;
  current.value = (current.value + 1) % slides.length;
}

function goTo(i: number) {
  if (i === current.value) return;
  prev.value = current.value;
  current.value = i;
  /* Reset timer so the chosen slide gets a full dwell */
  if (timer) {
    clearInterval(timer);
    startTimer();
  }
}

function startTimer() {
  if (prefersReduced) return;
  timer = setInterval(advance, DWELL_MS);
}

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
/* ── Container ───────────────────────────────────────────────────── */
.hero-slider {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 560px;
  overflow: hidden;
  background: var(--color-ground);
}

/* ── Slides & crossfade ──────────────────────────────────────────── */
.hero-slides {
  position: absolute;
  inset: 0;
}

.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  /* Only animate when motion is allowed */
  transition: opacity 1s var(--ease-soft);
  will-change: opacity;
}

.hero-slide.is-active {
  opacity: 1;
  z-index: 1;
}

.hero-slide.is-prev {
  opacity: 0;
  z-index: 0;
}

.hero-slide__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

/* ── Bottom-up scrim ─────────────────────────────────────────────── */
.hero-scrim {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(22, 17, 14, 0.8) 0%,
    rgba(22, 17, 14, 0.55) 38%,
    rgba(22, 17, 14, 0.18) 62%,
    rgba(22, 17, 14, 0) 100%
  );
  pointer-events: none;
}

/* ── Body layout ─────────────────────────────────────────────────── */
.hero-body {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--gutter);
  padding-bottom: clamp(2rem, 4vw, 4rem);
}

.hero-body__inner {
  max-width: min(680px, 90vw);
}

/* ── Category label ──────────────────────────────────────────────── */
.hero-body__label {
  margin-bottom: 0.75rem;
  color: var(--color-ochre);
}

/* ── Headline ────────────────────────────────────────────────────── */
.hero-body__headline {
  /* clamp: 2rem mobile → scales to 4.2rem max, never clips on 100svh */
  font-size: clamp(2rem, 1.4rem + 4vw, 4.2rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-calico);
  font-weight: 400;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.hero-body__line {
  display: block;
}

/* ── Subline ─────────────────────────────────────────────────────── */
.hero-body__subline {
  font-size: clamp(0.882rem, 0.8rem + 0.6vw, 1.118rem);
  color: var(--color-muted);
  line-height: 1.6;
  max-width: 52ch;
  margin: 0 0 2rem;
}

/* ── CTAs ────────────────────────────────────────────────────────── */
.hero-body__ctas {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

/* Secondary CTA -- ghost, no gradient, no rounded excess */
.hero-cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  font-family: var(--font-sans);
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

.hero-cta-secondary:hover {
  border-color: var(--color-brass);
  background: rgba(22, 17, 14, 0.4);
}

.hero-cta-secondary:focus-visible {
  outline: 2px solid var(--color-bronze);
  outline-offset: 2px;
}

/* ── Proof line ──────────────────────────────────────────────────── */
.hero-body__proof {
  font-size: 0.765rem;
  color: var(--color-muted);
  letter-spacing: 0.03em;
  margin: 0;
}

/* ── Dot nav ─────────────────────────────────────────────────────── */
.hero-dots {
  position: absolute;
  right: var(--gutter);
  bottom: clamp(2rem, 4vw, 4rem);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 4;
}

/* On small screens, lay dots horizontally below the copy block */
@media (max-width: 639px) {
  .hero-dots {
    position: static;
    flex-direction: row;
    margin-top: 1.5rem;
  }
  .hero-body {
    flex-direction: column;
    justify-content: flex-end;
  }
}

.hero-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: var(--color-brass-dim);
  transition:
    background 220ms var(--ease-soft),
    transform 220ms var(--ease-soft);
}

.hero-dot.is-active {
  background: var(--color-ochre);
  transform: scale(1.4);
}

.hero-dot:hover:not(.is-active) {
  background: var(--color-brass);
}

/* ── Reduced motion: instant slide switch, no autoplay ──────────── */
@media (prefers-reduced-motion: reduce) {
  .hero-slide {
    transition: none;
  }
}
</style>
