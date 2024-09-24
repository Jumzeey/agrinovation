<script setup lang="ts">
import ButtonInput from "../inputs/ButtonInput.vue";

interface ICardProps {
  img?: string;
  title: string;
  bg?: string;
  review?: string;
  count?: string;
  address?: string;
  amount?: string;
  date?: string;
  centerImage?: boolean;
}

const emit = defineEmits<{
  (e: "move"): void;
}>();

const props = defineProps<ICardProps>();

const imagesArray = [
  'https://ik.imagekit.io/bx7bddg8a/Agrinovation/image%201141.svg?updatedAt=1727093734142',
  'https://ik.imagekit.io/bx7bddg8a/Agrinovation/image%201141%20(1).svg?updatedAt=1727093734472',
  'https://ik.imagekit.io/bx7bddg8a/Agrinovation/image%201140%20(1).svg?updatedAt=1727093732485',
  'https://ik.imagekit.io/bx7bddg8a/Agrinovation/image%201140.svg?updatedAt=1727093732759',
  'https://ik.imagekit.io/bx7bddg8a/Agrinovation/image%201142.svg?updatedAt=1727093735871'
];

const backgroundImage = computed(() => {
  return imagesArray[Math.floor(Math.random() * imagesArray.length)];
});
</script>

<template>
  <div class="w-full h-full rounded-2xl bg-white shadow relative">
    <div class="w-full h-[220px]">
      <img
        :src="props.bg || backgroundImage"
        class="object-cover w-full h-[220px] rounded-t-2xl"
        alt=""
      />
    </div>

    <div class="relative">
      <div
        class="w-[86px] h-[86px] rounded-t-3xl flex items-center justify-center bg-white absolute top-[-100px] left-[calc(50%-43px)] overflow-hidden"
        v-if="centerImage"
      >
        <img :src="props.img || 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868213.svg?updatedAt=1723801037973'" alt="" />
      </div>

      <div
        class="px-[11px] my-2 text-center"
        :class="props.centerImage ? 'mt-[50px]' : 'mt-[20px]'"
      >
        <h3 class="text-[#261B0D] text-xl font-semibold">{{ props.title }}</h3>

        <div class="flex gap-3 my-3 items-center justify-center">
          <Badge class="success">
            <template v-slot:content> Farming </template>
          </Badge>

          <Badge class="primary">
            <template v-slot:content> Aquatics </template>
          </Badge>

          <Badge class="warning">
            <template v-slot:content> Aquatics </template>
          </Badge>
        </div>
      </div>

      <div class="px-6 mb-6">
        <div class="flex gap-4 mb-[10px]">
          <img src="../../public/logo/team.svg" class="w-6" alt="" />
          <p class="text-sm">{{ props.count || 'NA' }} Team Member</p>
        </div>

        <div class="flex gap-4 mb-[10px]">
          <img src="../../public/logo/location.svg" class="w-6" alt="" />
          <p class="text-sm">{{ props.address || 'NA'}}</p>
        </div>

        <div class="flex gap-4 mb-[10px]">
          <img src="../../public/logo/naira.svg" class="w-6" alt="" />
          <p class="text-sm">Raised NGN {{ props.amount || 'NA'}}</p>
        </div>

        <div class="mb-[10px]">
          <p class="text-sm">{{ props.date }}</p>
        </div>
      </div>

      <div class="px-6 pb-5">
        <ButtonInput
          class="text-sm"
          bg="bg-button_color"
          text="text-[#5D421F]"
          :onClick="() => emit('move')"
        >
          See Profile
        </ButtonInput>
      </div>
    </div>
  </div>
</template>
