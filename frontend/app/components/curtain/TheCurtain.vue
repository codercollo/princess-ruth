<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 z-[90] pointer-events-none flex"
    aria-hidden="true"
  >
    <!-- Left Panel (Maroon) -->
    <div
      ref="leftPanel"
      class="w-1/2 h-full bg-[var(--color-maroon)] relative overflow-hidden shadow-2xl transition-transform duration-620 ease-[var(--ease-curtain)]"
      :style="leftStyle"
    >
      <!-- base woven texture: mudcloth, per design tokens -->
      <svg
        class="absolute inset-0 w-full h-full opacity-[0.10]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="mudclothPattern"
            width="90"
            height="90"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 45 L20 20 L45 45 L20 70 Z"
              fill="none"
              stroke="var(--color-brass)"
              stroke-width="1"
            />
            <path
              d="M45 10 Q 65 10 65 30 T 85 50"
              fill="none"
              stroke="var(--color-brass)"
              stroke-width="1"
            />
            <path
              d="M10 75 L30 75 M20 65 L20 85"
              stroke="var(--color-brass)"
              stroke-width="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mudclothPattern)" />
      </svg>

      <!-- floral vine-and-blossom layer -->
      <svg
        class="absolute inset-0 w-full h-full opacity-[0.22]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="floralL"
            width="110"
            height="110"
            patternUnits="userSpaceOnUse"
          >
            <!-- running vine -->
            <path
              d="M0 55 C 20 30, 35 30, 55 55 S 90 80, 110 55"
              fill="none"
              stroke="var(--color-brass)"
              stroke-width="0.8"
            />
            <!-- five-petal blossom, drawn as continuous line -->
            <g transform="translate(55 55)">
              <path
                d="M0 -9 C 4 -6 4 0 0 0 C 4 0 8 3 6 8 C 8 3 6 -3 0 0
                   C -6 -3 -8 3 -6 8 C -8 3 -4 0 0 0 C -4 0 -4 -6 0 -9"
                fill="none"
                stroke="var(--color-brass)"
                stroke-width="0.8"
                stroke-linejoin="round"
              />
              <circle r="1.4" fill="var(--color-brass)" />
            </g>
            <!-- small bud along the vine -->
            <g transform="translate(0 55)">
              <ellipse
                rx="3"
                ry="1.6"
                fill="none"
                stroke="var(--color-brass)"
                stroke-width="0.7"
              />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#floralL)" />
      </svg>

      <!-- gold engraved filigree, foreground layer -->
      <svg
        class="absolute inset-0 w-full h-full opacity-[0.35] mix-blend-soft-light"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="goldEngraveL" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="var(--color-gold-deep)" />
            <stop offset="50%" stop-color="var(--color-gold)" />
            <stop offset="100%" stop-color="var(--color-gold-deep)" />
          </linearGradient>
          <pattern
            id="filigreeL"
            width="140"
            height="140"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 70 C 20 40, 40 40, 70 70 S 120 100, 140 70
                 M70 0 C 40 20, 40 40, 70 70 S 100 120, 70 140"
              fill="none"
              stroke="url(#goldEngraveL)"
              stroke-width="0.75"
            />
            <circle
              cx="70"
              cy="70"
              r="3"
              fill="none"
              stroke="url(#goldEngraveL)"
              stroke-width="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#filigreeL)" />
      </svg>

      <!-- corner flourishes -->
      <svg
        class="absolute top-6 right-6 w-14 h-14 opacity-90"
        viewBox="0 0 56 56"
      >
        <path
          d="M4 4 Q28 4 28 28 Q28 4 52 4"
          fill="none"
          stroke="var(--color-gold)"
          stroke-width="1.2"
        />
        <circle cx="28" cy="14" r="2" fill="var(--color-gold)" />
      </svg>
      <svg
        class="absolute bottom-6 right-6 w-14 h-14 opacity-90 rotate-90"
        viewBox="0 0 56 56"
      >
        <path
          d="M4 4 Q28 4 28 28 Q28 4 52 4"
          fill="none"
          stroke="var(--color-gold)"
          stroke-width="1.2"
        />
        <circle cx="28" cy="14" r="2" fill="var(--color-gold)" />
      </svg>

      <!-- inner seam hairline -->
      <div
        class="absolute top-0 right-0 h-full w-[2px]"
        style="
          background: linear-gradient(
            180deg,
            var(--color-gold-deep) 0%,
            var(--color-gold) 25%,
            var(--color-cream) 50%,
            var(--color-gold) 75%,
            var(--color-gold-deep) 100%
          );
        "
      />

      <div class="absolute inset-0 bg-black/20" />
    </div>

    <!-- Right Panel (Indigo) -->
    <div
      ref="rightPanel"
      class="w-1/2 h-full bg-[var(--color-indigo)] relative overflow-hidden shadow-2xl transition-transform duration-620 ease-[var(--ease-curtain)]"
      :style="rightStyle"
    >
      <!-- base woven texture: kente, per design tokens -->
      <svg
        class="absolute inset-0 w-full h-full opacity-[0.10]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="kentePattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="10"
              height="60"
              fill="var(--color-brass)"
            />
            <rect
              x="28"
              y="0"
              width="6"
              height="60"
              fill="var(--color-brass)"
            />
            <rect
              x="0"
              y="20"
              width="60"
              height="6"
              fill="var(--color-brass)"
            />
            <rect
              x="0"
              y="44"
              width="60"
              height="4"
              fill="var(--color-brass)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#kentePattern)" />
      </svg>

      <!-- floral vine-and-blossom layer -->
      <svg
        class="absolute inset-0 w-full h-full opacity-[0.22]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="floralR"
            width="110"
            height="110"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 55 C 20 30, 35 30, 55 55 S 90 80, 110 55"
              fill="none"
              stroke="var(--color-brass)"
              stroke-width="0.8"
            />
            <g transform="translate(55 55)">
              <path
                d="M0 -9 C 4 -6 4 0 0 0 C 4 0 8 3 6 8 C 8 3 6 -3 0 0
                   C -6 -3 -8 3 -6 8 C -8 3 -4 0 0 0 C -4 0 -4 -6 0 -9"
                fill="none"
                stroke="var(--color-brass)"
                stroke-width="0.8"
                stroke-linejoin="round"
              />
              <circle r="1.4" fill="var(--color-brass)" />
            </g>
            <g transform="translate(0 55)">
              <ellipse
                rx="3"
                ry="1.6"
                fill="none"
                stroke="var(--color-brass)"
                stroke-width="0.7"
              />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#floralR)" />
      </svg>

      <!-- gold engraved filigree, foreground layer -->
      <svg
        class="absolute inset-0 w-full h-full opacity-[0.35] mix-blend-soft-light"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="goldEngraveR" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="var(--color-gold-deep)" />
            <stop offset="50%" stop-color="var(--color-gold)" />
            <stop offset="100%" stop-color="var(--color-gold-deep)" />
          </linearGradient>
          <pattern
            id="filigreeR"
            width="130"
            height="130"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0 L130 0 M0 0 L0 130"
              stroke="url(#goldEngraveR)"
              stroke-width="0.5"
            />
            <path
              d="M10 65 C 40 65, 40 30, 65 30 S 90 65, 120 65
                 M10 65 C 40 65, 40 100, 65 100 S 90 65, 120 65"
              fill="none"
              stroke="url(#goldEngraveR)"
              stroke-width="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#filigreeR)" />
      </svg>

      <!-- corner flourishes -->
      <svg
        class="absolute top-6 left-6 w-14 h-14 opacity-90 -scale-x-100"
        viewBox="0 0 56 56"
      >
        <path
          d="M4 4 Q28 4 28 28 Q28 4 52 4"
          fill="none"
          stroke="var(--color-gold)"
          stroke-width="1.2"
        />
        <circle cx="28" cy="14" r="2" fill="var(--color-gold)" />
      </svg>
      <svg
        class="absolute bottom-6 left-6 w-14 h-14 opacity-90 -scale-x-100 rotate-90"
        viewBox="0 0 56 56"
      >
        <path
          d="M4 4 Q28 4 28 28 Q28 4 52 4"
          fill="none"
          stroke="var(--color-gold)"
          stroke-width="1.2"
        />
        <circle cx="28" cy="14" r="2" fill="var(--color-gold)" />
      </svg>

      <!-- inner seam hairline -->
      <div
        class="absolute top-0 left-0 h-full w-[2px]"
        style="
          background: linear-gradient(
            180deg,
            var(--color-gold-deep) 0%,
            var(--color-gold) 25%,
            var(--color-cream) 50%,
            var(--color-gold) 75%,
            var(--color-gold-deep) 100%
          );
        "
      />

      <div class="absolute inset-0 bg-black/20" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCurtain } from "~/composables/useCurtain";

const { state } = useCurtain();

const isVisible = computed(() => state.value !== "open");

const leftStyle = computed(() => {
  if (state.value === "closed" || state.value === "closing") {
    return { transform: "translateX(0%)" };
  }
  return { transform: "translateX(-100%)" };
});

const rightStyle = computed(() => {
  if (state.value === "closed" || state.value === "closing") {
    return { transform: "translateX(0%)" };
  }
  return { transform: "translateX(100%)" };
});
</script>
