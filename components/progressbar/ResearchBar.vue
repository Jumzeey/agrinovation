<template>
  <div class="relative w-full bg-gray-200 rounded-full h-[9px]">
    <div
      class="absolute top-0 left-0 h-full bg-[#60CE8A] rounded-full transition-all duration-300"
      :style="{ width: progress + '%' }"
    ></div>
    <span
      class="absolute inset-0 flex items-center justify-center text-xs font-medium text-white"
    >
      {{ progress }}%
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  progress: number;
}>();
</script>
