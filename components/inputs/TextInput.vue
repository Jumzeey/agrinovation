<script setup lang="ts">
import MaterialIcon from '@/components/icon/MaterialIcon.vue'
import { ref } from 'vue'


interface IInputProps {
  label: string
  onChange: (v: string) => void
  type?: string
  placeholder?: string
  important?: string
  errorMessage?: string
  value?: string
  whiteBackground?: boolean
  border?: boolean
  description?: string
  disabled?: boolean
  min?: string
  max?: string
  absolute?: boolean
}

const props = defineProps<IInputProps>()
const showPassword = ref(false)

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  props.onChange(target.value)
}

const toggleShowPassword = () => (showPassword.value = !showPassword.value)

</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="font-satoshi text-[#111] text-sm font-medium">
        {{ label }} <span class="text-[#FF5200]">{{ important }}</span>
    </label>

    <div class="w-full h-14">
      <div class="w-full h-full flex items-center" :class="{ 'flex-row-reverse': !absolute }">
        <input
          :disabled="disabled"
          class="w-full h-[50px] rounded-lg px-4 pr-7 focus:outline-green"
          :class="{
            'border border-red focus:outline-red': errorMessage,
            'focus:outline-green': !errorMessage,
            'bg-white': whiteBackground,
            'bg-[#fffefe]': !whiteBackground,
            border: border
          }"
          :placeholder="props.placeholder"
          @change="onChange"
          @input="onChange"
          :value="value"
          :type="showPassword ? 'text' : type"
          :min="type === 'date' ? min : undefined"
          :max="type === 'date' ? max : undefined"
        />
        <MaterialIcon
          :absolute="absolute"
          class="m-6 cursor-pointer hover:scale-105"
          :class="{ absolute: !absolute }"
          v-if="props.type === 'password'"
          :onClick="toggleShowPassword"
          :icon="!showPassword ? 'visibility' : 'visibility_off'"
          outline
        />
        <span v-if="description" class="font-inter text-[#747EA1] text-sm font-thin">{{ description }}</span>
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
