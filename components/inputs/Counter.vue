<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import MaterialIcon from '@/components/icon/MaterialIcon.vue';

interface IInputProps {
  onChange?: (v: string) => void;
  value?: string;
}

const props = defineProps<IInputProps>();

const localValue = ref(props.value || '0');

watch(() => props.value, (newValue) => {
  if (newValue !== undefined) {
    localValue.value = newValue;
  }
});

const increment = () => {
  const newValue = (parseInt(localValue.value, 10) || 0) + 1;
  localValue.value = newValue.toString();
  if (props.onChange) {
    props.onChange(localValue.value);
  }
};

const decrement = () => {
  const newValue = (parseInt(localValue.value, 10) || 0) - 1;
  if (newValue >= 1) {
    localValue.value = newValue.toString();
    if (props.onChange) {
      props.onChange(localValue.value);
    }
  }
};

const updateValue = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const newValue = input.value;
  if (!isNaN(parseInt(newValue, 10))) {
    localValue.value = newValue;
    if (props.onChange) {
      props.onChange(newValue);
    }
  }
};

const currentValue = computed(() => localValue.value);
</script>

<template>
  <div class="flex items-center space-x-4 bg-[#F9FAFB] w-[204px] rounded-[40px]  justify-center py-2 border-2 border-[#F0F2F5]">
    <button
      @click="decrement"
      class="text-[#667185] px-4 pt-2 rounded"
    >
      <MaterialIcon icon="remove" />
    </button>
    <input
      type="text"
      :value="currentValue"
      @input="updateValue"
      class="w-16 text-center py-2 bg-[#F9FAFB] border-none text-[#FFA500]"
      readonly
    />
    <button
      @click="increment"
      class="text-[#FFA500] px-4 pt-2 rounded"
    >
        <MaterialIcon icon="add" />
    </button>
  </div>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>
