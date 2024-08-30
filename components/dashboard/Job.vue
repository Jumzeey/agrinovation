<template>
    <div>
        <div class="bg-white rounded-lg pb-12  p-4">
            <div class="border-b flex justify-between items-center  pb-3">
                <div>
                    <p class="">Job Opening</p>
                </div>
                <button class="py-2 px-3 border border-border_col rounded-md  cursor-pointer" @click="openModal">
                    <p class="text-priText">Add Job</p>
                </button>
            </div>
            <div class="pt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 p-4">
                <div v-for="job in jobData" :key="job.id"
                    class="rounded-2xl p-6 pt-10 bg-white lg:w-[270px] w-full  drop-shadow-lg flex flex-col gap-4">
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
        </div>
        <Modal :shows="showModal" title="Post Job" width="w-[650px]" :icon="CDN_IMAGES.edit_about_icon"
            @closeModal="closeModal" class="flex flex-col gap-6" :buttonText="'Add'" :onSubmit="handleSubmit">
            <template #content>
                <div class="grid grid-cols-2 gap-6">
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="title">Job Title</Label>
                        <Input id="title" type="text" placeholder="title..." />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="salary">Salary</Label>
                        <Input id="salary" type="text" placeholder="salary..." />
                    </div>
                    <div>
                        <Label for="sector">Workplace Type</Label>
                        <Select>
                            <SelectTrigger class="">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Options</SelectLabel>
                                    <SelectItem value="onsite">
                                        On-site
                                    </SelectItem>
                                    <SelectItem value="remote">
                                        Hybrid
                                    </SelectItem>
                                    <SelectItem value="remote">
                                        Fully remote
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="location">Job Location</Label>
                        <Input id="location" type="text" placeholder="location..." />
                    </div>
                </div>
                <div class="grid w-full items-center gap-1.5">
                    <Label for="description">Add Description</Label>
                    <Textarea id="description" placeholder="Add description...." />
                </div>
            </template>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { CDN_IMAGES } from "../../assets/cdnImages";
import ButtonInput from '~/components/inputs/ButtonInput.vue';
import { jobData } from '~/data/job';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

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