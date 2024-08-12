<script setup lang="ts">
interface IInputProps {
  label?: string
  onChange: (v: string) => void
  placeholder?: string
  important?: string
  value?: string
  disabled?: boolean
  errorMessage?: string
}

const props = defineProps<IInputProps>()

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  props.onChange(target.value)
}
</script>
<template>
  <div class="flex flex-col gap-1">
    <label class="font-satoshi text-[#111] text-sm font-medium">
      {{ label }} <span class="text-[#FF5200]">{{ important }}</span>
    </label>
    <div class="w-full">
      <div class="w-full h-full flex items-center flex-row-reverse">
        <textarea
        :disabled="disabled"
          rows="5"
          class="w-full h-full bg-input_mint rounded-lg px-4 focus:outline-[#ECF0F4] border border-[#ECF0F4] pt-4"
          :class="{
            'border border-red focus:outline-red': errorMessage,
            'focus:outline-green_regular': !errorMessage
          }"
          :value="value"
          :placeholder="props.placeholder"
          @change="onChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
::placeholder {
  color: #a6bac5;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
