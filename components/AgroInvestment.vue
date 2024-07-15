<template>
    <div>
        <h1 class="text-[#101828] text-xl font-semibold pb-1">Agro Investments</h1>
        <p class="text-[#667085] text-sm font-medium pb-4">
        Sorted by number of investment per sector
        </p>

        <div class="border border-[#EFF2F5] py-3 rounded-md">
            <BarChart
                index="name"
                :data="data"
                :categories="['total']"
                :y-formatter="(tick, i) => {
                return typeof tick === 'number'
                    ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
                    : ''
                }"
                :rounded-corners="4"
                :colors="['#4285F4']"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { BarChart } from '@/components/ui/chart-bar'

const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'May', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jul', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Aug', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Sep', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Oct', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Nov', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Dec', total: Math.floor(Math.random() * 2000) + 500 },
]
</script>

