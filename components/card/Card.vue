<script setup lang="ts">
import ButtonInput from '../inputs/ButtonInput.vue';

interface ICardProps {
  img?: string
  title: string
  review: string
  count: string
  address: string
  amount: string
}

const props = defineProps<ICardProps>()
</script>

<template>
    <div class="w-full md:w-[300px] rounded-2xl bg-white shadow">
        <div class="w-full h-[220px]">
            <img :src="props.img" class="object-cover w-full h-[220px] rounded-t-2xl" alt="" v-if="props.img">
        </div>

        <div>
            <div class="px-[71px] my-2 text-center">
                <h3 class="text-[#261B0D] text-xl font-semibold">{{ props.title }}</h3>
                <span class="text-[#1D2939] text-sm font-normal">({{ props.review }})</span>
            </div>

            <div class="px-6 mb-6">
                <div class="flex gap-4 mb-[10px]">
                    <img src="../../public/logo/team.svg" class="w-6" alt="">
                    <p class="text-sm">{{ props.count }} Team Member</p>
                </div>

                <div class="flex gap-4 mb-[10px]">
                    <img src="../../public/logo/location.svg" class="w-6" alt="">
                    <p class="text-sm">{{ props.address }}</p>
                </div>

                <div class="flex gap-4 mb-[10px]">
                    <img src="../../public/logo/naira.svg" class="w-6" alt="">
                    <p class="text-sm">Raised NGN {{ props.amount }}</p>
                </div>
            </div>

            <div class="px-6 pb-5">
                <ButtonInput class="bg-[#F2E7D9] text-sm" text="text-[#5D421F]" :onClick="console.log"> See Profile </ButtonInput>
            </div>
        </div>
    </div>
</template>