<script setup lang="ts">
import { profileData } from '~/data/profile';

</script>

<template>
    <div class="bg-white rounded-lg pb-12  p-4">
        <div class="border-b flex justify-between items-center  pb-3">
            <div>
                <p class="">Team</p>
            </div>
            <div class="py-2 border border-border_col rounded-md  cursor-pointer pb-3 px-4">
                <p class="text-priText">Add media</p>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
            <div v-for="profile in profileData" :key="profile.id" class="bg-white rounded-lg text-left">
                <img :src="profile.imageKey" alt="Profile Image" class="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 class="text-lg font-semibold text-[#2B2B2B]">{{ profile.name }}</h3>
                    <p class="text-sm text-green-600 font-medium">{{ profile.title }}</p>
            </div>
        </div>
    </div>
</template>
