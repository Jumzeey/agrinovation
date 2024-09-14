<template>
    <div class="flex gap-4 items-center">
        <img :src="iconSrc" alt="" class="p-1" />
        <p>{{ label }} {{ value }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { CDN_IMAGES } from '~/assets/cdnImages';

const props = defineProps<{
    icon: keyof typeof CDN_IMAGES;
    label: string;
    value: string;
}>();

const iconSrc = computed(() => CDN_IMAGES[props.icon]);
</script>
