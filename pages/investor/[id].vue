<script setup lang="ts">
import { computed } from 'vue';
import { useGetSingleInvestor } from "~/composables/useGetSingleInvestor";


const route = useRoute();
const { id } = route.params; // Extracting id from the route parameters

console.log("Fetched ID from route:", id);
// Fetching investor details based on the id
const { data: Data, error, isLoading } = useGetSingleInvestor(id as string);

// Inside your <script setup>
const profileData = computed(() => {
  return Data.value?.data || null; // Ensure it's reactive and returns null if no data
});

const progress = ref(20)
</script>

<template>
  <div class="bg-[#F8FCF8]">
  <FullScreenLoader v-if="isLoading" />
    <div
      class="w-full bg-cover bg-no-repeat bg-[url('/public/images/agripreneur/single.svg')] relative h-[350px]"
    >
      <div class="mx-0 md:mx-[120px]">
        <Header type="other" />
      </div>
    </div>

    <div class="mx-0 md:mx-[120px] lg:mx-[120px] bg-white relative bottom-[96px] overflow-hidden px-10 rounded-t-lg">
         <DashboardInfo :profileData="profileData" :loading="isLoading" />
      </div>
      <div class="mx-0 md:mx-[120px] lg:mx-[120px] bg-white relative bottom-[96px] overflow-hidden px-10 rounded-t-lg">
        <DashboardAbout :profileData="profileData" :loading="isLoading" showSubActions="true"/>
      </div>

      <div class="mx-0 md:mx-[120px] lg:mx-[120px] bg-white relative bottom-[80px] overflow-hidden px-10 rounded-t-lg">
        <DashboardTeam :profileData="profileData" :loading="isLoading" />
      </div>

      <div class="mx-0 md:mx-[120px] lg:mx-[120px] bg-white relative bottom-[64px] overflow-hidden px-10 rounded-t-lg">
        <DashboardMedia :profileData="profileData" :loading="isLoading" />
      </div>

       <div class="mx-0 md:mx-[120px] lg:mx-[120px] bg-white relative bottom-[16px] overflow-hidden px-10 rounded-t-lg">
        <DashboardContact :profileData="profileData" :loading="isLoading" />
      </div>
  </div>

  <Footer />
</template>
