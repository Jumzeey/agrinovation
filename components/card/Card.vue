<script setup lang="ts">
import ButtonInput from "../inputs/ButtonInput.vue";

interface ICardProps {
  img?: string;
  title: string;
  review: string;
  count: string;
  address: string;
  amount: string;
}

const emit = defineEmits<{
  (e: 'move'): void
}>()

const props = defineProps<ICardProps>();
</script>

<template>
  <div
    class="w-full md:w-[300px] h-full rounded-2xl bg-white shadow relative"
  >
    <div class="w-full h-[220px]">
      <img
        :src="props.img"
        class="object-cover w-full h-[220px] rounded-t-2xl"
        alt=""
        v-if="props.img"
      />
    </div>

    <div class="relative">
      <div
        class="w-[86px] h-[86px] rounded-t-3xl flex items-center justify-center bg-white absolute top-[-100px] left-[calc(50%-43px)] overflow-hidden"
      >
        <img src="../../public/images/agripreneur/agri.svg" alt="" />
      </div>
      
      <div class="px-[11px] my-2 text-center mt-[50px]">
        <h3 class="text-[#261B0D] text-xl font-semibold">{{ props.title }}</h3>

        <div class="flex gap-3 my-3 items-center justify-center">
            <Badge class="success">
                <template v-slot:content>
                    Farming
                </template>
            </Badge>

            <Badge class="primary">
                <template v-slot:content>
                    Aquatics
                </template>
            </Badge>

            <Badge class="warning">
                <template v-slot:content>
                    Aquatics
                </template>
            </Badge>
        </div>
      </div>

      <div class="px-6 mb-6">
        <div class="flex gap-4 mb-[10px]">
          <img src="../../public/logo/team.svg" class="w-6" alt="" />
          <p class="text-sm">{{ props.count }} Team Member</p>
        </div>

        <div class="flex gap-4 mb-[10px]">
          <img src="../../public/logo/location.svg" class="w-6" alt="" />
          <p class="text-sm">{{ props.address }}</p>
        </div>

        <div class="flex gap-4 mb-[10px]">
          <img src="../../public/logo/naira.svg" class="w-6" alt="" />
          <p class="text-sm">Raised NGN {{ props.amount }}</p>
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
