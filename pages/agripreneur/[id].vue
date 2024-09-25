<script setup lang="ts">
import MaterialIcon from "~/components/icon/MaterialIcon.vue";
import ButtonInput from "~/components/inputs/ButtonInput.vue";
import ResearchBar from "~/components/progressbar/ResearchBar.vue";
import { useGetSingleAgripreneur } from "~/composables/useGetSingleAgripreneur";


const route = useRoute();
const { id } = route.params; // Extracting slug from the route parameters

console.log("Fetched ID from route:", id);
// Fetching agripreneur details based on the slug
const { data: Data, error, isLoading } = useGetSingleAgripreneur(id as string);

const profileData = Data.value?.data;

const progress = ref(20)
</script>

<template>
  <div class="bg-[#F8FCF8]">
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

    <div class="mx-0 md:mx-[120px] lg:mx-[120px] bg-white relative bottom-[48px] overflow-hidden px-10 rounded-t-lg">
      <DashboardJob :profileData="profileData" :loading="isLoading"/>
    </div>

    <div class="mx-0 md:mx-[120px] lg:mx-[120px] bg-white relative bottom-[32px] overflow-hidden px-10 rounded-t-lg">
      <DashboardMarket :profileData="profileData" :loading="isLoading"/>
    </div>

    <div class="mx-0 md:mx-[120px] lg:mx-[120px] bg-white relative bottom-[16px] overflow-hidden px-10 rounded-t-lg">
      <DashboardContact :profileData="profileData" :loading="isLoading" />
    </div>
  </div>

  <Footer />
</template>
