<template>
    <div :style="{ backgroundImage: `url(${cdnImages.dashboard_backgroundImage})` }"
        class="w-full bg-cover h-[350px] relative">
        <div class="mx-0 md:mx-[120px] -z-10">
            <Header type="dashboard" />
        </div>
    </div>
    <div class="w-full bg-body_bg">
        <div class="mx-0 md:mx-[120px] relative flex flex-col gap-3 -top-24">
            <!-- Pass loading and error states to child components -->
            <DashboardInfo :profileData="profileData" :loading="loading" />
            <DashboardAbout :profileData="profileData" :loading="loading" />
            <DashboardDocument :profileData="profileData" v-if="userType === 'Agripreneur'" class="hidden" />
            <DashboardMedia :profileData="profileData" :loading="loading" />
            <DashboardJob :profileData="profileData" v-if="userType === 'Agripreneur' || userType === 'Investor'"
                :loading="loading" />
            <DashboardMarket :profileData="profileData" v-if="userType === 'Agripreneur'" :loading="loading"
                />
            <DashboardTeam :profileData="profileData" :loading="loading" />
            <DashboardContact :profileData="profileData" :loading="loading" />
        </div>
    </div>

    <Footer />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { CDN_IMAGES } from "../../assets/cdnImages";
import { useAuth } from '~/composables/useAuth';
import { userProfile } from '~/composables/userProfile';

const { profile, profileData, loading } = userProfile(); // Include error handling

const cdnImages = CDN_IMAGES;

definePageMeta({
    middleware: 'auth'
});

const { userType, user_id, user_type_id } = useAuth();




async function fetchProfileData() {
    if (user_id.value && user_type_id.value) {
        try {
            await profile({
                id: user_id.value,
                type: user_type_id.value,
            });
            console.log('Profile data fetched:', profileData.value);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    } else {
        console.error('User ID or Type ID is missing.');
    }
}

// Call the function when needed
fetchProfileData();

console.log('The data from dashboard index:', profileData.value);
</script>
