<template>
    <div>
        <div class="bg-white rounded-lg pb-12  p-4">
            <div class="border-b flex justify-between items-center  pb-3">
                <div>
                    <p class="">Team</p>
                </div>
                <button class="py-2 px-3 border border-border_col rounded-md  cursor-pointer" @click="openModal">
                    <p class="text-priText">Add member</p>
                </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
                <div v-for="profile in profileData" :key="profile.id" class="bg-white rounded-lg text-left">
                    <img :src="profile.imageKey" alt="Profile Image" class="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 class="text-lg font-semibold text-[#2B2B2B]">{{ profile.name }}</h3>
                    <p class="text-sm text-green-600 font-medium">{{ profile.title }}</p>
                </div>
            </div>
        </div>
        <Modal :shows="showModal" title="Add New Team Member" width="w-[650px]" :icon="CDN_IMAGES.edit_about_icon"
            @closeModal="closeModal" class="flex flex-col gap-6" :buttonText="'Add'" :onSubmit="handleSubmit">
            <template #content>
                <div class="grid grid-cols-1 gap-6">
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="name">Name</Label>
                        <Input id="name" type="text" placeholder="name..." />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="position">Position</Label>
                        <Input id="position" type="text" placeholder="position..." />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="about">About</Label>
                        <Input id="about" type="text" placeholder="position..." />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="image">Image</Label>
                        <Input id="image" type="file" />
                    </div>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { profileData } from '~/data/profile';
import { CDN_IMAGES } from "../../assets/cdnImages";
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const showModal = ref(false);

function openModal() {
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}

const handleSubmit = () => {
    console.log('submitted')
}

</script>