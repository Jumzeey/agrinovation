<script setup lang="ts">
import { ref, watch } from 'vue';
import { CDN_IMAGES } from "../../assets/cdnImages";
import { useAuth } from '~/composables/useAuth';
import { useUserProfile } from '~/composables/userProfile';

const { userType, user_id, user_type_id } = useAuth();

const { data: profileData, error, isLoading, refetch } = useUserProfile();

const cdnImages = CDN_IMAGES;

definePageMeta({
  middleware: 'auth'
});

watch([user_id, user_type_id], () => {
  if (user_id.value && user_type_id.value) {
    refetch();
  }
});
</script>

<template>
    <div :style="{ backgroundImage: `url(${cdnImages.dashboard_backgroundImage})` }"
        class="w-full bg-cover h-[350px] relative">
        <FullScreenLoader v-if="isLoading" />
        <div class="mx-0 md:mx-[120px] -z-10">
            <Header type="dashboard" />
        </div>
    </div>
    <div class="w-full bg-body_bg">
        <div class="mx-0 md:mx-[120px] relative flex flex-col gap-3 -top-24">
            <!-- Pass loading and error states to child components -->
            <DashboardInfo :profileData="profileData" :loading="isLoading" />
            <DashboardAbout :profileData="profileData" :loading="isLoading" showAction="true"/>
            <DashboardDocument :profileData="profileData" v-if="userType === 'Agripreneur'" class="hidden" />
            <DashboardMedia :profileData="profileData" :loading="isLoading" showAction="true"/>
            <DashboardJob :profileData="profileData" v-if="userType === 'Agripreneur' || userType === 'Investor'"
                :loading="isLoading" showAction="true"/>
            <DashboardMarket :profileData="profileData" v-if="userType === 'Agripreneur'" :loading="isLoading" showAction="true"/>
            <DashboardTeam :profileData="profileData" :loading="isLoading" showAction="true"/>
            <DashboardNews :profileData="profileData" :loading="isLoading" v-if="userType === 'Researcher'" />
            <DashboardContact :profileData="profileData" :loading="isLoading" />
        </div>
    </div>

    <Footer />
</template>


