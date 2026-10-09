<template>
  <div class="px-6 md:px-12 py-24 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
    <span class="playbill text-xs text-[var(--color-brass)] mb-4">404 ERROR</span>
    <h1 class="font-display text-4xl sm:text-6xl text-[var(--color-calico)] mb-4">This one came apart at the seam</h1>
    <p class="text-base md:text-lg text-[var(--color-muted)] max-w-lg mb-8 leading-relaxed">
      The page you were looking for isn't here. It may have moved, or the link may be old.
    </p>
    <div class="flex gap-4">
      <BaseButton as="NuxtLink" to="/" variant="primary">Back to home</BaseButton>
      <BaseButton as="NuxtLink" to="/gallery" variant="ghost">See the gallery</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
</script>
