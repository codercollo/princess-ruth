<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 flex items-center justify-between',
      isScrolled
        ? 'py-3 bg-[rgba(22,17,14,0.88)] backdrop-blur-md border-b border-[var(--color-brass-dim)]'
        : 'py-5 bg-transparent'
    ]"
  >
    <NuxtLink to="/" class="group">
      <span class="font-display text-xl sm:text-2xl text-[var(--color-calico)] tracking-wide group-hover:text-[var(--color-bronze)] transition-colors duration-200">
        Princess Ruth
      </span>
    </NuxtLink>

    <!-- Desktop Nav -->
    <nav aria-label="Main" class="hidden lg:flex items-center gap-8">
      <NuxtLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="text-sm font-medium text-[var(--color-calico)] opacity-75 hover:opacity-100 transition-opacity relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-px after:bg-[var(--color-brass)] after:transition-all after:duration-300"
        active-class="opacity-100 after:w-full"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <div class="flex items-center gap-3">
      <WhatsAppButton size="sm" class="hidden sm:inline-flex" />
      <button
        type="button"
        class="lg:hidden flex items-center justify-center w-10 h-10 rounded border border-[var(--color-brass-dim)] text-[var(--color-calico)] hover:border-[var(--color-brass)] transition-colors cursor-pointer"
        aria-label="Open navigation menu"
        @click="$emit('toggle-drawer')"
      >
        <Menu :size="20" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu } from '@lucide/vue'
import WhatsAppButton from '~/components/ui/WhatsAppButton.vue'

defineEmits(['toggle-drawer'])

const isScrolled = ref(false)
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

function handleScroll() { isScrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
