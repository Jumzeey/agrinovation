<template>
  <div class="mt-10">
    <div class="flex justify-between">
      <div
        class="bg-[url('/public/images/bg.svg')] bg-contain bg-no-repeat p-0 m-0 fade-container"
        ref="fadeContainer"
      >
        <div class="text-center sm:text-left">
          <h3
            class="md:text-[50px] text-[32px] px-7 md:px-0 font-bold text-[#291B0A] pb-8 mt-0 pt-0 sm:text-left"
          >
            Advancing <span class="text-[#76BF20]">Agrinnovation</span> <br />in
            Lagos State
          </h3>
        </div>
        <div class="text-center sm:text-left">
          <p
            class="text-[#102310] text-base font-medium pb-8 px-7 md:px-0 sm:text-left"
          >
            Discover how agriculture is transforming the landscape. Stay updated
            on insights <br />from the agricultural sector
          </p>
        </div>

        <div
          class="flex max-lg:justify-start max-md:justify-center max-sm:justify-center"
        >
          <button
            class="px-10 py-3 text-[#FFFAFA] bg-[#275927] rounded-md mb-8"
          >
            Get Started
          </button>
        </div>

        <div
          class="flex gap-[50px] max-lg:justify-start max-md:justify-center max-sm:justify-center"
        >
          <div class="flex flex-col text-center items-center">
            <img src="/images/healthicons.svg" class="mb-[15px] w-10" alt="" />
            <p class="text-[#291B0A] text-2xl font-semibold">5000</p>
            <span class="text-[#291B0A] text-md font-normal">Agripreneurs</span>
          </div>

          <div class="flex flex-col text-center items-center">
            <img src="/images/streamline.svg" class="mb-[15px] w-10" alt="" />
            <p class="text-[#291B0A] text-2xl font-semibold">5000</p>
            <span class="text-[#291B0A] text-md font-normal">Investors</span>
          </div>

          <div class="flex flex-col text-center items-center">
            <img src="/images/ic_outline.svg" class="mb-[15px] w-10" alt="" />
            <p class="text-[#291B0A] text-2xl font-semibold">5000</p>
            <span class="text-[#291B0A] text-md font-normal">Agro-Hubs</span>
          </div>
        </div>
      </div>

      <div class="hidden md:flex">
        <div class="flex justify-between relative gap-4">
          <div class="w-[140px]">
            <img src="/images/image1.svg" class="mb-4" alt="" />
            <img src="/images/image2.svg" class="mb-4" alt="" />
            <img src="/images/image3.svg" class="mb-4" alt="" />
          </div>

          <div class="w-[140px] bottom-10 relative">
            <img src="/images/image4.svg" class="mb-4" alt="" />
            <img src="/images/image5.svg" class="mb-4" alt="" />
            <img src="/images/image6.svg" class="mb-4" alt="" />
          </div>

          <div class="w-[140px] top-10 relative">
            <img src="/images/image7.svg" class="mb-4" alt="" />
            <img src="/images/image8.svg" class="mb-4" alt="" />
            <img src="/images/image9.svg" class="mb-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const fadeContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (fadeContainer.value) {
    fadeContainer.value.classList.add("animate-fadeIn");
  }
});
</script>

<style scoped>
.fade-container {
  opacity: 0;
}
</style>
