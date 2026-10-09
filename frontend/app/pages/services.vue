<template>
  <div class="px-6 md:px-12 py-12 max-w-7xl mx-auto">
    <SectionHeading
      label="SERVICES"
      heading="What the shop does"
      lead="Everything below is made or done on the premises. Nothing is sent out."
    />

    <!-- Custom Tailoring -->
    <div class="mb-16">
      <h3 class="font-display text-2xl text-[var(--color-calico)] mb-6 pb-2 border-b border-[var(--color-brass-dim)]">Custom Tailoring</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="service in services" :key="service.title" class="bg-[var(--color-surface)] p-6 border border-[var(--color-brass-dim)] rounded-[4px]">
          <h4 class="font-display text-xl text-[var(--color-calico)] mb-2">{{ service.title }}</h4>
          <p class="text-sm text-[var(--color-muted)] mb-4 leading-relaxed">{{ service.desc }}</p>
          <div class="text-xs text-[var(--color-faint)] space-y-1 mb-6">
            <p><strong class="text-[var(--color-brass)]">Turnaround:</strong> {{ service.turnaround }}</p>
            <p><strong class="text-[var(--color-brass)]">Bring:</strong> {{ service.bring }}</p>
          </div>
          <WhatsAppButton size="sm" :message="`Hi Mama Njeri, I'd like to ask about ${service.title}.`" />
        </div>
      </div>
    </div>

    <!-- Alterations & Repairs Table -->
    <div class="mb-16">
      <h3 class="font-display text-2xl text-[var(--color-calico)] mb-6 pb-2 border-b border-[var(--color-brass-dim)]">Alterations & Repairs</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-[var(--color-brass-dim)] text-xs playbill">
              <th class="py-3 px-4">Service</th>
              <th class="py-3 px-4">Typical Turnaround</th>
              <th class="py-3 px-4">From</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[rgba(110,86,54,0.2)] text-sm text-[var(--color-muted)]">
            <tr v-for="row in repairs" :key="row.name">
              <td class="py-3 px-4 font-medium text-[var(--color-calico)]">{{ row.name }}</td>
              <td class="py-3 px-4">{{ row.turnaround }}</td>
              <td class="py-3 px-4 text-[var(--color-ochre)]">{{ row.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/ui/SectionHeading.vue'
import WhatsAppButton from '~/components/ui/WhatsAppButton.vue'

const services = [
  {
    title: 'Traditional & Ceremonial Wear',
    desc: 'Kitenge, ankara, kanga, brocade and lace, cut for ruracio, dowry ceremonies, church anniversaries, funerals and family occasions.',
    turnaround: '7–14 days (groups 3 weeks)',
    bring: 'Your fabric, or we can source it for you',
  },
  {
    title: 'Official & Office Wear',
    desc: 'Blazers, shift dresses, pencil and A-line skirts, wide-leg trousers, and two- and three-piece suiting.',
    turnaround: '7–10 days',
    bring: 'A garment that currently fits you well',
  },
]

const repairs = [
  { name: 'Hemming (trousers, skirts, dresses)', turnaround: 'Same day – 2 days', price: 'KES 300' },
  { name: 'Taking in / letting out', turnaround: '2 – 3 days', price: 'KES 500' },
  { name: 'Zip replacement', turnaround: '1 – 2 days', price: 'KES 400' },
  { name: 'Relining a jacket or coat', turnaround: '3 – 5 days', price: 'KES 1,500' },
]
</script>
