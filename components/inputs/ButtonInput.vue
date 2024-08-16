<script setup lang="ts">
import MaterialIcon from '../icon/MaterialIcon.vue';
import SpinnerComponent from '../loader/SpinnerComponent.vue';


interface IButtonProps {
  onClick: () => void
  icon?: string
  loading?: boolean
  bg?: string
  text?: string
  iconLeft?: boolean
  disable?: boolean
}

const props = defineProps<IButtonProps>()
</script>

<template>
  <button
    :disabled="props.disable"
    v-bind="props"
    :class="{
      'bg-green': !props.bg,
      [props.bg!]: !!props.bg,
      'text-white': !props.text,
      [props.text!]: !!props.text
    }"
    class="py-[10px] px-[16px] rounded-lg flex gap-2 w-full justify-center items-center cursor-pointer"
  >
    <template v-if="!!props.loading"> <SpinnerComponent /> </template>
    <template v-else>
      <MaterialIcon
        outline
        v-if="props.icon && props.iconLeft"
        :icon="props.icon"
        :class="props.bg"
      />
      <div class="text-center font-bold font-inter"><slot></slot></div>
      <MaterialIcon
        outline
        v-if="props.icon && !props.iconLeft"
        :icon="props.icon"
        :class="props.bg"
      />
    </template>
  </button>
</template>
