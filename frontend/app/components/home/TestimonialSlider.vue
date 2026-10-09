<template>
  <div class="relative w-full max-w-3xl mx-auto px-4">
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(item, index) in testimonials"
          :key="index"
          class="w-full flex-shrink-0 px-4 text-center"
        >
          <p class="font-display text-lg sm:text-xl text-[var(--color-calico)] italic mb-4 leading-relaxed">
            "{{ item.quote }}"
          </p>
          <div class="text-xs uppercase tracking-widest text-[var(--color-ochre)] font-semibold">
            {{ item.name }} <span class="text-[var(--color-muted)] font-normal">· {{ item.occasion }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="flex items-center justify-center gap-4 mt-6">
      <button
        type="button"
        class="w-8 h-8 rounded-full border border-[var(--color-brass-dim)] flex items-center justify-center text-[var(--color-calico)] hover:border-[var(--color-brass)] transition-colors cursor-pointer"
        aria-label="Previous testimonial"
        @click="prev"
      >
        <ChevronLeft :size="16" />
      </button>

      <div class="flex items-center gap-1.5">
        <button
          v-for="(_, idx) in testimonials"
          :key="idx"
          type="button"
          :class="[
            'w-2 h-2 rounded-full transition-all duration-300 cursor-pointer',
            currentIndex === idx
              ? 'bg-[var(--color-ochre)] w-6'
              : 'bg-[var(--color-brass-dim)] hover:bg-[var(--color-brass)]'
          ]"
          :aria-label="`Go to slide ${idx + 1}`"
          @click="currentIndex = idx"
        />
      </div>

      <button
        type="button"
        class="w-8 h-8 rounded-full border border-[var(--color-brass-dim)] flex items-center justify-center text-[var(--color-calico)] hover:border-[var(--color-brass)] transition-colors cursor-pointer"
        aria-label="Next testimonial"
        @click="next"
      >
        <ChevronRight :size="16" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from '@lucide/vue'

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const testimonials = [
  {
    quote: 'Princess Ruth tailored my wedding gown perfectly for my body. The seams were immaculate and she finished two days ahead of time.',
    name: 'Wanjiku M.',
    occasion: 'Bridal Order'
  },
  {
    quote: 'The kitenge dress she made for my gala turned heads all evening! Accurate fitting without needing three retry sessions.',
    name: 'Achieng O.',
    occasion: 'Gala Dress'
  },
  {
    quote: 'Brought 4 office blazers and dresses for resizing after losing weight. She made them fit like they were made for me yesterday.',
    name: 'Njeri K.',
    occasion: 'Corporate Alterations'
  }
]

function next() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

onMounted(() => {
  timer = setInterval(next, 5000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
