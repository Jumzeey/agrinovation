<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, reactive, watch } from 'vue'
import MaterialIcon from '../icon/MaterialIcon.vue'

const props = defineProps<{
  totalPage: number
  currentPage: number
}>()

const emit = defineEmits<{
  (e: 'onPageChange', page: number): void
}>()

const state = reactive({
  minimum: 1,
  maximum: props.totalPage > 3 ? 3 : props.totalPage,
  selected: props.currentPage
})

const range = computed(() => {
  const range = []
  for (let i = state.minimum; i <= state.maximum; i++) {
    range.push(i)
  }
  return range
})

watch(props, () => {
  if (props.totalPage < 3) {
    state.minimum = 1
    state.maximum = props.totalPage
  } else {
    state.minimum = 1
    state.maximum = 3
  }
  state.selected = props.currentPage
})

const next = () => {
  if (state.maximum === props.totalPage) return
  state.minimum++
  state.maximum++
}

const prev = () => {
  if (state.minimum === 1) return
  state.minimum--
  state.maximum--
}

const select = (page: number) => {
  state.selected = page
  emit('onPageChange', page)
}
</script>

<template>
  <div v-if="range.length > 1" class="flex justify-between h-8 items-center mt-3">
    <div
      v-if="totalPage > 3"
      @click="prev"
      class="h-8 cursor-pointer hover:scale-105 bg-[#FFFFFF] flex justify-center items-center rounded-md border px-3"
    >
      <MaterialIcon icon="chevron_left" class="text-[#6090AB] text-xl" />
      <span>Previous</span>
    </div>

    <div class="flex h-full gap-[5px]">
      <div
        v-for="i in range"
        :key="i"
        @click="() => select(i)"
        class="w-8 h-8 cursor-pointer hover:scale-105 bg-[#FFFFFF] rounded-md text-[#6090AB] flex justify-center items-center text-xs font-bold"
        :class="{
          'text-white bg-green': i === state.selected
        }"
      >
        {{ i }}
      </div>
      <div
        v-if="range.length < totalPage"
        class="w-8 h-8 cursor-pointer hover:scale-105 bg-[#FFFFFF] flex justify-center rounded-md"
      >
        <MaterialIcon icon="more_horiz" class="text-[#98A2B3] text-xl mt-auto" />
      </div>
    </div>
    
    <div
      v-if="totalPage > 3"
      @click="next"
      class="h-8 cursor-pointer hover:scale-105 bg-[#FFFFFF] flex justify-center items-center rounded-md border px-3"
    >
        <span>Next</span>
      <MaterialIcon icon="chevron_right" class="text-[#6090AB] text-xl" />
    </div>
  </div>
</template>
