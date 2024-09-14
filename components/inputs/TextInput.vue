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
  showStrength?: boolean // Add the new prop for showing password strength
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

// Toggle password visibility
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

// Password strength logic
const passwordStrength = computed(() => {
  const value = inputValue.value
  let strength = 0

  if (value.length >= 8) strength += 1 // At least 8 characters
  if (/[A-Z]/.test(value)) strength += 1 // Contains uppercase letters
  if (/[a-z]/.test(value)) strength += 1 // Contains lowercase letters
  if (/\d/.test(value)) strength += 1 // Contains numbers
  if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) strength += 1 // Contains special characters

  return strength
})

// Strength bar color based on strength level
const strengthBarColor = computed(() => {
  const strength = passwordStrength.value
  if (strength === 1) return 'bg-red-500'
  if (strength === 2) return 'bg-orange-400'
  if (strength === 3) return 'bg-yellow-400'
  if (strength === 4) return 'bg-green-400'
  if (strength === 5) return 'bg-green-600'
  return 'bg-gray-300'
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

      <!-- Password strength bar, shown only if type is password and showStrength is true -->
      <div v-if="props.type === 'password' && props.showStrength" class="w-full h-1 mt-2">
        <div :class="['h-full rounded-lg mb-3', strengthBarColor]" :style="{ width: (passwordStrength * 20) + '%' }"></div>
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
