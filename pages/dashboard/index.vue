<template>
    <div :style="{ backgroundImage: `url(${cdnImages.dashboard_backgroundImage})` }"
        class="w-full bg-cover h-[350px] relative">
        <div class="mx-0 md:mx-[120px] -z-10">
            <Header type="dashboard" />
        </div>
    </div>
    <div class="w-full bg-body_bg">
        <div class="mx-0 md:mx-[120px] relative flex flex-col gap-3 -top-24">
            <DashboardInfo :profileData="profileData" :loading="loading" />
            <DashboardAbout :profileData="profileData" />
            <DashboardDocument :profileData="profileData" />
            <DashboardMedia :profileData="profileData" />
            <DashboardJob :profileData="profileData" />
            <DashboardMarket :profileData="profileData" />
            <DashboardTeam :profileData="profileData" />
            <DashboardContact :profileData="profileData" />
        </div>
    </div>

    <Footer />
</template>

<script setup lang="ts">
import { ref, unref } from 'vue';
import { CDN_IMAGES } from "../../assets/cdnImages";
import { useAuth } from '~/composables/useAuth';
import { userProfile } from '~/composables/userProfile';

const cdnImages = CDN_IMAGES;

definePageMeta({
    middleware: 'auth'
});

const { userType, user_id, user_type_id } = useAuth();
console.log('the type of user: ', userType.value);
console.log('the id of user: ', user_id.value);
console.log('the type id of user: ', user_type_id.value);

// State to hold profile data
const profileData = ref({
    businessName: '',
    agripreneurType: '',
    tags: [''],
});

// Fetch the profile data when the component is mounted
const fetchProfileData = async () => {
    const id = unref(user_id);
    const type = unref(user_type_id);
    const { profile, loading } = userProfile();

    if (id !== undefined && type !== undefined) {
        const data = await profile({ id, type });

        if (data) {
            profileData.value = {
                businessName: data.data.name,
                agripreneurType: data.data.user_type || 'Type of Agripreneur',
                tags: data.data.tags || ['#Fishfarming', '#Aquatics', '#Farming'],
            };
        }
    } else {
        console.error("User ID or Type ID is undefined.");
    }
};

fetchProfileData();
</script>
