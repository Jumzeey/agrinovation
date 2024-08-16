<script setup lang="ts">
import ButtonInput from '~/components/inputs/ButtonInput.vue';
import { CDN_IMAGES } from "~/assets/cdnImages";
import {jobData} from '~/data/job';

</script>

<template>
    <div class="pt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 p-4">
        
        <div v-for="job in jobData" :key="job.id" class="rounded-2xl p-6 pt-10 bg-white lg:w-[270px] w-full  drop-shadow-lg flex flex-col gap-4">
            <div class="rounded-3xl bg-white mb-4">
                <img :src="CDN_IMAGES.job_logo" alt="Job Logo" />
            </div>

            <div class="mb-6">
                <h3 class="pb-2 text-[#261B0D] text-xl font-semibold">{{ job.title }}</h3>
                <p class="pb-2 text-[#261B0D] text-sm">{{ job.company }}</p>
                <span class="text-[#261B0D] text-sm font-medium">{{ job.location }}</span>
                <span class="text-[#261B0D] text-sm font-medium">{{ job.date }}</span>
            </div>

            <div>
                <ButtonInput class="text-sm" bg="bg-[#F4FAF4]" text="text-[#2B612B]">
                    View more
                </ButtonInput>
            </div>
        </div>
    </div>
</template>
