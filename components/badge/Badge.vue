<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface IBadgeProps {
  class: 'success' | 'primary' | 'warning' | 'danger'
}
const props = defineProps<IBadgeProps>()
</script>

<template>
  <div
    class="w-20 text-xs rounded-xl flex justify-center items-center text-white capitalize px-3 py-1 mb-3"
    :class="`${props.class}`"
  >
    <slot name="content" />
  </div>
</template>

<style>
.success {
  background-color: #E7F6EC;
  color: #099137;
}

.primary {
  background-color: #ECF3FE;
  color: #4285F4;
}

.warning {
  background-color: #FFFAF0;
  color: #FFA500;
}

.danger {
  background-color: #ec3174;
  color: white;
}
</style>
