<template>
  <footer class="bg-[var(--color-surface)] border-t border-[var(--color-brass-dim)] pt-16 pb-8 px-4 sm:px-8 lg:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        <!-- Brand -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="block mb-3">
            <span class="font-display text-2xl text-[var(--color-calico)]">Princess Ruth</span>
          </NuxtLink>
          <p class="text-sm text-[var(--color-muted)] leading-relaxed mb-5">Custom tailoring &amp; alterations<br>Sabina Building, Ngong Town, Kenya</p>
          <!-- Social icons -->
          <div class="flex items-center gap-3">
            <a
              href="https://wa.me/+254748428622"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-brass-dim)] text-[var(--color-muted)] hover:border-[var(--color-brass)] hover:text-[var(--color-bronze)] transition-colors"
            >
              <!-- WhatsApp brand SVG -->
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-brass-dim)] text-[var(--color-muted)] hover:border-[var(--color-brass)] hover:text-[var(--color-bronze)] transition-colors"
            >
              <!-- Facebook brand SVG -->
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-brass-dim)] text-[var(--color-muted)] hover:border-[var(--color-brass)] hover:text-[var(--color-bronze)] transition-colors"
            >
              <!-- TikTok brand SVG -->
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.27 8.27 0 004.84 1.55V7a4.85 4.85 0 01-1.07-.31z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick links -->
        <div>
          <h3 class="text-xs font-semibold tracking-widest uppercase text-[var(--color-ochre)] mb-4">Navigate</h3>
          <ul class="space-y-2.5">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink :to="link.path" class="text-sm text-[var(--color-muted)] hover:text-[var(--color-calico)] transition-colors">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-xs font-semibold tracking-widest uppercase text-[var(--color-ochre)] mb-4">Services</h3>
          <ul class="space-y-2.5">
            <li v-for="s in services" :key="s" class="text-sm text-[var(--color-muted)]">{{ s }}</li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-xs font-semibold tracking-widest uppercase text-[var(--color-ochre)] mb-4">Visit Us</h3>
          <address class="not-italic space-y-2.5">
            <p class="text-sm text-[var(--color-muted)]">Sabina Building, Ngong Town<br>Kajiado County, Kenya</p>
            <a href="tel:+254724051039" class="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-calico)] transition-colors">
              <Phone :size="14" /><span>0724 051 039</span>
            </a>
            <a href="https://wa.me/+254748428622" target="_blank" class="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-calico)] transition-colors">
              <MessageCircle :size="14" /><span>0748 428 622 (WhatsApp)</span>
            </a>
            <p class="text-sm text-[var(--color-muted)]">Mon – Sat 8:30am – 6:00pm</p>
          </address>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-6 border-t border-[var(--color-brass-dim)] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-[var(--color-faint)]">© {{ currentYear }} Princess Ruth. Crafted with care in Ngong Town.</p>
        <NuxtLink to="/contact" class="text-xs text-[var(--color-muted)] hover:text-[var(--color-ochre)] transition-colors">Book an appointment →</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Phone, MessageCircle } from '@lucide/vue'

const currentYear = computed(() => new Date().getFullYear())
const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
const services = ['Custom Dresses', 'Ankara & Kitenge', 'Office Wear', 'Bridal & Occasion', 'Alterations & Repairs']
</script>
