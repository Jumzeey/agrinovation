<template>
  <div class="w-full">
    <h1 class="text-[#101828] text-xl font-semibold pb-1">
      Output of Agripreneur in Lagos
    </h1>
    <p class="text-[#667085] text-sm font-medium">
      Sorted by the quantity of products per tonnes
    </p>
    <div class="border border-[#EFF2F5] py-3 rounded-md">
      <AreaChart :data="data" index="name" :categories="['total']" :colors="['#0045E6']" />
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { AreaChart } from '@/components/ui/chart-area'

const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'May', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jul', total: Math.floor(Math.random() * 2000) + 500 },
]
</script>
