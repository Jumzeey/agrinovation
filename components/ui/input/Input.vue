<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '../../../lib/utils'
import { CDN_IMAGES } from "@/assets/cdnImages";

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  type?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: FileList | string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    emits('update:modelValue', input.files)
  }
}
</script>

<template>
  <div>
    <!-- Show custom file upload view only if type is 'file' -->
    <div v-if="props.type === 'file-upload'"
      class="flex flex-col items-center justify-center border-2 border-dashed border-border_col rounded-md p-6 text-center cursor-pointer max-w-lg mx-auto bg-white">
      <label class="flex flex-col items-center space-y-2 cursor-pointer" for="file-upload">
       <img :src="CDN_IMAGES.upload_icon" alt="">
       <span class="flex items-center gap-1">
        <span class="text-sm text-red-500">Click to upload </span> <span>or drag and drop</span>
       </span>
        <small class="text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</small>
        <input id="file-upload" type="file" @change="handleFileChange" class="hidden">
      </label>
    </div>

    <!-- Render regular input for other types -->
    <input v-else v-model="modelValue" :type="props.type"
      :class="cn('flex h-10 w-full rounded-md border border-border_col bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', props.class)">
  </div></template>
