<template>
  <div class="min-h-screen flex flex-col bg-[var(--color-ground)] text-[var(--color-calico)] relative overflow-x-hidden">
    <TheCurtain />
    <TheProsceniumFrame />
    <TheHeader @toggle-drawer="isDrawerOpen = true" />
    <TheMobileDrawer :is-open="isDrawerOpen" @close="isDrawerOpen = false" />
    
    <main id="main" class="flex-grow pt-20">
      <slot />
    </main>

    <TheFooter />
    <TheStickyContactBar />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheCurtain from '~/components/curtain/TheCurtain.vue'
import TheProsceniumFrame from '~/components/chrome/TheProsceniumFrame.vue'
import TheHeader from '~/components/chrome/TheHeader.vue'
import TheMobileDrawer from '~/components/chrome/TheMobileDrawer.vue'
import TheFooter from '~/components/chrome/TheFooter.vue'
import TheStickyContactBar from '~/components/chrome/TheStickyContactBar.vue'

const isDrawerOpen = ref(false)
</script>
