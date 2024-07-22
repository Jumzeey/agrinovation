<script setup lang="ts">
import TabItem from './TabItem.vue'
import { ref } from 'vue'
interface ITab {
  name: string
}

interface ITabItemProps {
  tabs: ITab[]
  selectedTab?: number
}

const props = defineProps<ITabItemProps>()

const selected = ref<number>(props.selectedTab ?? 0)

const onSelect = (index: number) => {
  selected.value = index
}
</script>
<template>
  <div class="flex flex-col w-full gap-9 pt-2 bg-transparent">
    <div class="flex flex-row gap-4 px-3">
        <div v-for="(tab, index) in props.tabs" :key="tab.name">
          <TabItem :name="tab.name" :selected="selected === index" @select="() => onSelect(index)" />
        </div>
    </div>
    <template v-for="(_, index) in props.tabs">
      <div :key="index" v-if="index === selected">
        <slot :name="`tab-${index}`" />
      </div>
    </template>
  </div>
</template>
