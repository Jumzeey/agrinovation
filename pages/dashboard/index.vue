<template>
    <div :style="{ backgroundImage: `url(${cdnImages.dashboard_backgroundImage})` }"
        class="w-full bg-cover h-[350px] relative">
        <div class="mx-0 md:mx-[120px] -z-10">
            <Header type="dashboard" />
        </div>
    </div>
    <div class="w-full bg-body_bg">
        <div class="mx-0 md:mx-[120px] relative flex flex-col gap-3 -top-24">
            <DashboardInfo />
            <DashboardAbout />
            <DashboardDocument/>
            <DashboardMedia />
            <DashboardJob/>
            <DashboardMarket/>
            <DashboardTeam />
            <DashboardContact />
        </div>

    </div>

    <Footer />
</template>


<style>

</style>

<script setup lang="ts">
import { CDN_IMAGES } from "../../assets/cdnImages";
import { useAuth } from '~/composables/useAuth'

const cdnImages = CDN_IMAGES;

definePageMeta({
    middleware: 'auth'
});

const { userType } = useAuth()
console.log('the type of user: ', userType.value)


</script>
