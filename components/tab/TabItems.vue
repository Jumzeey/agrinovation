<script setup lang="ts">
import TabItem from './TabItem.vue'
import { ref, watch } from 'vue'

interface ITab {
  name: string
  slug: string
}

interface ITabItemProps {
  tabs: ITab[]
  selectedTab?: string
  onTabSelect?: (slug: string) => void // New prop for the select function
}

// Define props and include the default "All" tab
const props = defineProps<ITabItemProps>()
const defaultTab: ITab = { name: 'All', slug: 'all' };
const allTabs = [defaultTab, ...props.tabs]; // Combine default tab with props tabs

const selected = ref<string>(props.selectedTab || 'all'); // Default to "All"

// Watch for changes in selectedTab prop to update the local state
watch(() => props.selectedTab, (newValue) => {
  selected.value = newValue || 'all';
});

const onSelect = (slug: string) => {
  console.log('selected slug: ', slug);
  selected.value = slug;
  if (props.onTabSelect) {
    props.onTabSelect(slug); // Call the passed function if it exists
  }
}

console.log('selected tab: ', selected)
</script>

<template>
  <div class="flex flex-col w-full gap-9 pt-2 bg-transparent">
    <div class="flex flex-row gap-4 px-3">
      <div v-for="tab in allTabs" :key="tab.slug">
        <TabItem :name="tab.name" :selected="selected === tab.slug" @select="() => onSelect(tab.slug)" />
      </div>
    </div>
    <template v-for="tab in allTabs" :key="tab.slug">
      <div v-if="tab.slug === selected">
        <slot :name="`tab-${tab.slug}`" />
      </div>
    </template>
  </div>
</template>
