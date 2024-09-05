<script setup lang="ts">
import MaterialIcon from '@/components/icon/MaterialIcon.vue'
import { ref, defineProps, computed, watch, defineEmits } from 'vue'

interface IInputProps {
  label: string
  onChange?: (v: string) => void
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
const inputValue = ref(props.value || '')
const emit = defineEmits(['update:modelValue'])

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  inputValue.value = target.value
  emit('update:modelValue', inputValue.value)
}

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const inputType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password'
  }
  return props.type
})

// Computed property to determine if the border should be red
const isErrorState = computed(() => {
  return !!props.important && !inputValue.value
})

// Watch for changes in props.value and update local inputValue
watch(() => props.value, (newValue) => {
  inputValue.value = newValue || ''
})
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="font-satoshi text-[#111] text-sm font-medium">
      {{ label }} <span class="text-[#FF5200]">{{ important }}</span>
    </label>

    <div class="w-full h-14">
      <div class="w-full h-full flex items-center" :class="{ 'flex-row-reverse': !absolute }">
        <input :value="inputValue" :disabled="disabled" class="w-full h-[50px] rounded-lg px-4 pr-7 focus:outline-green"
          :class="{
            'border border-red focus:outline-red': isErrorState,
            'focus:outline-green': !isErrorState && !errorMessage,
            'bg-white': whiteBackground,
            'bg-[#fffefe]': !whiteBackground,
            border: border
          }" :placeholder="props.placeholder" @input="onChange" :type="inputType"
          :min="props.type === 'date' ? min : undefined" :max="props.type === 'date' ? max : undefined" />
        <MaterialIcon :absolute="absolute" class="m-6 cursor-pointer hover:scale-105" :class="{ absolute: !absolute }"
          v-if="props.type === 'password'" @click="toggleShowPassword"
          :icon="showPassword ? 'visibility_off' : 'visibility'" outline />
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
