<script setup lang="ts">
import { CDN_IMAGES } from "../../assets/cdnImages";


const props = defineProps({
    profileData: {
        type: Object,
        required: true,
    },
    loading: {
        type: Boolean,
        default: false,
    }
});


const showModal = ref(false);

function openModal() {
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}

function handleSubmit() {
    console.log('submitted')
}
</script>

<template>
    <div>
        <div class="bg-white rounded-lg p-4">
            <div class="border-b flex justify-between items-center pb-3">
                <p>Knowledge Hub</p>
                <button class="py-2 px-3 border border-border_col rounded-md cursor-pointer" @click="openModal">
                    <p class="text-priText">Add News</p>
                </button>
            </div>
            <NewsComponent :newsItems="[
                {
                    image: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/blog.png?updatedAt=1726330590235',
                    tags: '#Fishfarming #Fish',
                    title: 'How Lagos State is improving Food supplies',
                    description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
                    author: 'Olivia Rhye',
                    date: '20 Jan 2022'
                },
                {
                    image: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/blog.png?updatedAt=1726330590235',
                    tags: '#Agriculture #Tech',
                    title: 'New Technologies in Farming',
                    description: 'Discover how technology is reshaping the agricultural landscape.',
                    author: 'John Doe',
                    date: '18 Feb 2023'
                },
                {
                    image: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/blog.png?updatedAt=1726330590235',
                    tags: '#Agriculture #Tech',
                    title: 'New Technologies in Farming',
                    description: 'Discover how technology is reshaping the agricultural landscape.',
                    author: 'John Doe',
                    date: '18 Feb 2023'
                },
                {
                    image: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/blog.png?updatedAt=1726330590235',
                    tags: '#Agriculture #Tech',
                    title: 'New Technologies in Farming',
                    description: 'Discover how technology is reshaping the agricultural landscape.',
                    author: 'John Doe',
                    date: '18 Feb 2023'
                }
            ]" />
        </div>

        <Modal :shows="showModal" title="Add Media" width="w-[650px]" :icon="CDN_IMAGES.edit_about_icon"
            @closeModal="closeModal" class="flex flex-col gap-6" :buttonText="'Add'" :onSubmit="handleSubmit"
            :loading="loading">
            <template #content>
                <div class="grid grid-cols-1 gap-6">
                    <div>
                        <Label for="sector">Media Type</Label>
                        <Select v-model="selectedMediaType">
                            <SelectTrigger class="w-[180px]">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Select Type</SelectLabel>
                                    <SelectItem value="file">File</SelectItem>
                                    <SelectItem value="link">Link</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid w-full items-center gap-1.5" v-if="selectedMediaType === 'link'">
                        <Label for="link">Media Link</Label>
                        <Input id="link" type="text" placeholder="link..." v-model="link" />
                    </div>
                    <div class="grid w-full items-center gap-1.5" v-if="selectedMediaType === 'file'">
                        <Label for="image">Image</Label>
                        <Input id="image" type="file" @change="handleFileUpload($event, 'imageFile')" />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="description">Short Description</Label>
                        <Textarea id="description" placeholder="Short description...." v-model="description" />
                    </div>
                </div>
            </template>
        </Modal>
    </div>
</template>


