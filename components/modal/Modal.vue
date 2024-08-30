<script setup lang="ts">
import MaterialIcon from '../icon/MaterialIcon.vue';
import ButtonInput from '~/components/inputs/ButtonInput.vue'

interface IShow {
  shows: boolean
  title?: string
  icon?: string
  class?: string
  width?: string
  loading?: boolean;
  buttonText?: string;
  onSubmit?: () => void;
}

const props = defineProps<IShow>()
defineEmits<{
  (e: 'closeModal'): void
}>()

const handleSubmit = () => {
  if (props.onSubmit) {
    props.onSubmit();
  }
};
</script>

<template>
  <!-- Main modal -->
  <div v-if="props.shows" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="absolute inset-0 bg-black opacity-50" @click="$emit('closeModal')"></div>
    <div class="modal-container bg-white mx-auto max-h-full rounded-2xl shadow-lg z-50 overflow-y-auto"
      :class="[props.width ? width : 'w-1/2']">
      <!-- Modal content -->
      <div class="rounded-lg shadow bg-white modal-content py-8 text-left px-6">
        <!-- Modal header -->
        <div class="flex justify-between items-center pb-2 border-b border-border_b">
          <div class="flex gap-4 items-center">
            <img :src="props.icon" alt="">
            <p class="text-xl font-medium text-dark_green">{{ props.title }}</p>
          </div>
          <div @click="$emit('closeModal')"
            class="flex rounded-full w-7 h-7 justify-center items-center bg-bg_mint text-dark_green text-sm cursor-pointer hover:scale-105">
            <MaterialIcon icon="close" class="text-sm" />
          </div>
        </div>
        <!-- Modal body -->
        <div class="modal-body gap-8 mt-6">
          <div :class="`${props.class}`">
            <slot name="content" />
            <div>
                <ButtonInput
                  :loading="props.loading"
                  @click="handleSubmit"
                >
                  {{ props.buttonText || 'Submit' }}
                </ButtonInput>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
