<script setup lang="ts">
import ButtonInput from "../inputs/ButtonInput.vue";

interface ICardProps {
  img?: string;
  title: string;
  review?: string;
  count?: string;
  address?: string;
  amount?: string;
  date?: string;
}

const emit = defineEmits<{
  (e: "move"): void;
}>();

const props = defineProps<ICardProps>();
</script>

<template>
  <div class="w-full md:w-[380px] h-full rounded-2xl bg-white shadow relative">
    <div class="p-6">
      <div class="w-full h-[220px]">
        <img
          :src="props.img"
          class="object-cover w-full h-[220px] rounded-2xl"
          alt=""
          v-if="props.img"
        />
      </div>

      <div class="relative">
        <div class="px-[11px] my-2 mt-[20px]">
          <h3 class="text-[#261B0D] text-xl font-semibold">
            {{ props.title }}
          </h3>

          <div class="flex gap-3 my-3">
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
          <div class="flex gap-4 mb-[10px]" v-if="props.count">
            <img src="../../public/logo/team.svg" class="w-6" alt="" />
            <p class="text-sm">{{ props.count }} Team Member</p>
          </div>

          <div class="flex gap-4 mb-[10px]" v-if="props.address">
            <img src="../../public/logo/location.svg" class="w-6" alt="" />
            <p class="text-sm">{{ props.address }}</p>
          </div>

          <div class="flex gap-4 mb-[10px]" v-if="props.amount">
            <img src="../../public/logo/naira.svg" class="w-6" alt="" />
            <p class="text-sm">Raised NGN {{ props.amount }}</p>
          </div>

          <div class="mb-[10px]">
            <p class="text-sm">{{ props.date }}</p>
          </div>
        </div>

        <div class="pb-2">
          <ButtonInput
            class="text-sm"
            bg="bg-[#F4FAF4]"
            text="text-[#2B612B]"
            :onClick="() => emit('move')"
          >
            See Profile
          </ButtonInput>
        </div>
      </div>
    </div>
  </div>
</template>
