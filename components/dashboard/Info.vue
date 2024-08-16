<template>
    <div class="h-[260px] p-4  z-20  bg-white gap-3 flex flex-col rounded-lg">
                <div class="flex justify-between items-center">
                    <div class="flex gap-5">
                        <div>
                            <img :src="CDN_IMAGES.logo_placeholder" alt="" />
                        </div>
                        <div class="flex flex-col gap-6">
                            <div class="gap-4 flex flex-col">
                                <p class="text-2xl font-medium text-black">Business Name</p>
                                <p class="text-subText text-base font-normal">Type of Agriprenuer</p>
                            </div>
                            <div class="flex justify-between gap-4">
                                <div class="border border-subText p-1 rounded-md">
                                    <p class="text-[#202B08]">2024</p>
                                    <p class="pt-1 text-[#707663]">Founding Year</p>
                                </div>
                                <div class="border border-subText p-1 rounded-md">
                                    <p class="text-[#202B08]">40</p>
                                    <p class="pt-1 text-[#707663]">Work Force</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 text-sm">
                        <div class="flex">
                            <span class="rounded-xl px-3 text-[#099137] bg-[#E7F6EC] h-fit m-0">#Fishfarming</span>
                            <span class="rounded-xl px-3 text-[#FFA500] bg-[#FFFAF0] h-fit m-0">#Aquatics</span>
                            <span class="rounded-xl px-3 text-[#4285F4] bg-[#ECF3FE] h-fit m-0">#Farming</span>
                        </div>

                        <div class="flex">
                            <span class="rounded-xl px-3 text-[#099137] bg-[#E7F6EC] h-fit m-0">#Fishfarming</span>
                            <span class="rounded-xl px-3 text-[#FFA500] bg-[#FFFAF0] h-fit m-0">#Aquatics</span>
                            <span class="rounded-xl px-3 text-[#4285F4] bg-[#ECF3FE] h-fit m-0">#Farming</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center w-full py-2 px-4  bg-white">
                    <!-- Left Section: Tabs -->
                    <div class="flex border rounded-lg">
                        <div v-for="tab in tabs" :key="tab"
                            :class="{ 'tab-item active cursor-pointer': activeTab === tab, 'tab-item cursor-pointer': activeTab !== tab }"
                            @click="scrollToSection(tab)">
                            {{ tab }}
                        </div>
                    </div>

                    <!-- Right Section: Profile Completion -->
                    <div class="flex items-center space-x-2">
                        <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-green-500 rounded-full" style="width: 10%;"></div>
                        </div>
                        <span class="text-sm text-gray-600">10%</span>
                    </div>
                </div>
            </div>
</template>

<style scoped>
.tab-item {
    @apply text-[#98A2B3] py-2 px-4 border-x text-sm border-[#E4E7EC];
}

/* Style for the active tab */
.tab-item.active {
    @apply text-black bg-gray-100;
}

/* Specific styles for the first and last tab */
.tab-item:first-child {
    @apply rounded-l-lg;
    /* Add left rounded corners */
}

.tab-item:last-child {
    @apply rounded-r-lg;
    /* Add right rounded corners */
}

/* Ensure border is only between tabs and not at the edges */
.tab-item:not(:first-child):not(:last-child) {
    @apply border-t border-b;
}
</style>


<script setup lang="ts">
import { CDN_IMAGES } from "~/assets/cdnImages";



import { ref } from 'vue';

const about = ref<HTMLElement | null>(null);
const team = ref<HTMLElement | null>(null);
const media = ref<HTMLElement | null>(null);
const jobOpening = ref<HTMLElement | null>(null);
const contact = ref<HTMLElement | null>(null);
const tag = ref<HTMLElement | null>(null);
const marketPlace = ref<HTMLElement | null>(null);

const tabs = ['About', 'Team', 'Media', 'Job Opening', 'Contact', 'Tag', 'Market Place'];
const activeTab = ref<string>('About');

const scrollToSection = (section: string) => {
    activeTab.value = section; // Update active tab
    const sectionRef = {
        About: about,
        Team: team,
        Media: media,
        'Job Opening': jobOpening,
        Contact: contact,
        Tag: tag,
        'Market Place': marketPlace,
    }[section];

    sectionRef?.value?.scrollIntoView({
        behavior: 'smooth',
    });
};
</script>