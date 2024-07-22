<script setup lang="ts">
interface ITabItemProps {
  name: string
  selected: boolean
}

const props = defineProps<ITabItemProps>()
const emit = defineEmits<{
  (e: 'select'): void
}>()
</script>

<template>
  <div @click="emit('select')" class="flex flex-col justify-center items-center gap-2">
    <span
      :class="[props.selected ? 'text-[#FFA500] font-medium' : 'text-[#7F9EB0] font-medium']"
      class="text-center text-sm font-inter bg-transparent cursor-pointer"
    >
      {{ props.name }}
    </span>
    <div class="w-full h-[1px]" :class="[props.selected ? 'bg-[#FFA500]' : 'bg-transparent']" />
  </div>
</template>
