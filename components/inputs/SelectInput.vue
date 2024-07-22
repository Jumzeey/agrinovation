<script setup lang="ts">
import MaterialIcon from '../icon/MaterialIcon.vue';
import SpinnerComponent from '../loader/SpinnerComponent.vue';
import { computed } from 'vue'

interface Item {
  [key: string]: any
  permission?: Permissions
}

interface ISelectProps {
  selected?: string
  onChange: (v: string) => void
  value: string
  name: string[]
  label?: string
  items: Item[]
  important?: boolean | string
  errorMessage?: string
  noPadding?: boolean
  placeholder?: string
  loading?: boolean
  noDataMessage?: string
  bg?: string
  border?: boolean
  disabled?: boolean
}
const props = defineProps<ISelectProps>()

const onChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  props.onChange(target.value)
}

const filtered = computed(() => {
  return props.items.filter((i) => !i.permission)
})
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="font-satoshi text-[#111] text-sm font-medium"
      >{{ label }} <span v-if="important" class="text-red">*</span></label
    >
    <div
      v-if="!!noDataMessage"
      class="w-full h-full flex justify-center items-center py-4 bg-input_mint rounded-lg"
    >
      {{ noDataMessage }}
    </div>
    <div v-else-if="!loading" class="w-full h-full relative">
      <select
        :disabled="disabled"
        @change="onChange"
        :value="selected ? selected : placeholder"
        :placeholder="placeholder"
        class="w-full appearance-none rounded-lg px-4 focus:outline-[#ECF0F4] text-sm pb-4"
        :class="{
          'border border-red focus:outline-red': errorMessage,
          'focus:outline-[#ECF0F4] border-none border-[#ECF0F4]': !errorMessage,
          'p-0': noPadding,
          'p-3': !noPadding,
          border: border,
          'bg-input_mint': !props.bg,
          [props.bg!]: !!props.bg
        }"
      >
        <option selected disabled>{{ placeholder ? placeholder : `Choose a ${label}` }}</option>
        <option :value="item[value]" :key="i" v-for="(item, i) in filtered">
          {{ name.map((n) => item[n]).join(' ') }}
        </option>
      </select>
      <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
        <!-- <MaterialIcon class="text-[#ECF0F4]" icon="keyboard_arrow_down" outline /> -->
      </span>
    </div>
    <div
      v-else
      class="w-full h-full flex justify-center items-center py-4 bg-input_mint rounded-lg"
    >
      <SpinnerComponent />
    </div>
  </div>
</template>
