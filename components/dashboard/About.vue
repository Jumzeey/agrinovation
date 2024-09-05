<template>
    <div>
        <div class="bg-white rounded-lg p-4">
            <div class="flex flex-col gap-6">
                <div class="border-b flex justify-between items-center pb-3">
                    <div>
                        <p class="text-2xl">About {{ profileData?.name }}</p>
                    </div>
                    <button class="py-2 px-3 border border-border_col rounded-md cursor-pointer" @click="openModal">
                        <p class="text-priText">Edit Profile</p>
                    </button>
                </div>
                <div v-if="profileData?.more?.about">
                    <p class="items-start leading-6 text-[#261B0D] font-normal">
                        {{ profileData?.more?.about }}
                    </p>
                </div>
                <div v-else>
                    <EmptyState />
                </div>
                <div class="md:flex flex-col gap-7"  v-if="['Agripreneur', 'Investor'].includes(profileData?.user_type)">
                    <div class="space-y-4">
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.founding_icon" alt="" class="p-1">
                            <p>Founding Stage: {{ profileData?.more?.funding_stage || 'NA' }}</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.location_icon" alt="" class="p-1">
                            <p>{{ profileData?.more?.address || 'Location not available' }}</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.currency_icon" alt="" class="p-1">
                            <p>Average Annual Revenue: {{ profileData?.more?.average_annual_revenue || 'Not Available' }}</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.log_icon" alt="" class="p-1">
                            <p>Produce Information: {{ profileData?.more?.produce_information || 'Information not available' }}</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.shake_icon" alt="" class="p-1">
                            <p>Available for Acquisition: {{ profileData?.more?.is_available_acquisition ? 'Yes' : 'No' }}</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.shake_icon" alt="" class="p-1">
                            <p>Available for Merger: {{ profileData?.more?.is_available_merger ? 'Yes' : 'No' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal :shows="showModal" title="Update Profile Information" width="w-3/4" :icon="CDN_IMAGES.edit_about_icon"
            @closeModal="closeModal" class="flex flex-col gap-6" :buttonText="'Update'" :onSubmit="handleSubmit">
            <template #content>
                <div class="grid w-full max-w-sm items-center gap-1.5">
                    <Label for="picture">Agric-Business Logo*</Label>
                    <Input id="picture" type="file-upload" />
                </div>
                <div class="grid w-full gap-1.5">
                    <Label for="message">About Business</Label>
                    <Textarea id="message" placeholder="About your business...." />
                </div>
                <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div class="w-full">
                        <Label for="isRegistered">Is your Business Registered</Label>
                        <Select>
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Options</SelectLabel>
                                    <SelectItem value="yes">
                                        Yes
                                    </SelectItem>
                                    <SelectItem value="no">
                                        No
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid md:w-[500px] w-full max-w-sm items-center gap-1.5">
                        <Label for="cac">Upload CAC Document *</Label>
                        <Input id="cac" type="file" />
                        <span class="text-infoText text-[12px] font-thin">Pls upload file PDF, DOCX, JPG or PNG (max. 800x400px)</span>
                    </div>
                    <div>
                        <Label for="isRegistered">Funding Stage</Label>
                        <Select>
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="Type..." />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Funding Type..</SelectLabel>
                                    <SelectItem value="pre-seed">
                                        Pre-Seed
                                    </SelectItem>
                                    <SelectItem value="seed">
                                        Seed
                                    </SelectItem>
                                    <SelectItem value="series-a">
                                        Series A
                                    </SelectItem>
                                    <SelectItem value="series-b">
                                        Series B
                                    </SelectItem>
                                    <SelectItem value="series-c">
                                        Series C
                                    </SelectItem>
                                    <SelectItem value="series-d">
                                        Series D
                                    </SelectItem>
                                    <SelectItem value="mezzanine-funding">
                                        Mezzanine Funding
                                    </SelectItem>
                                    <SelectItem value="ipo">
                                        IPO
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid w-full max-w-sm items-center gap-1.5">
                            <Label for="doc">Upload  Document *</Label>
                            <Input id="doc" type="file" />
                            <span class="text-infoText text-[12px] font-thin">Pls upload file PDF, DOCX, JPG or PNG (max. 800x400px)</span>
                        </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="address">Address</Label>
                        <Input id="address" type="text" placeholder="Address..." />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5" v-if="profileData.user_type === 'Agripreneur'">
                        <Label for="address">Founding Year</Label>
                        <Input id="founding" type="text" placeholder="founding..." />
                    </div>
                    <div>
                        <Label for="sector">Sector</Label>
                        <Select>
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Options</SelectLabel>
                                    <SelectItem value="pre-production">
                                        Pre-Production
                                    </SelectItem>
                                    <SelectItem value="production">
                                        Production
                                    </SelectItem>
                                    <SelectItem value="post-production">
                                        Post Production
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="size">Farm Size</Label>
                        <Input id="size" type="text" placeholder="farm size..." />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="businessType">Type Of Business</Label>
                        <Select>
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="Type..." />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Type..</SelectLabel>
                                    <SelectItem value="farmer">
                                        Farmer
                                    </SelectItem>
                                    <SelectItem value="startup">
                                        StartUp
                                    </SelectItem>
                                    <SelectItem value="agro-hub">
                                        Agro-Hub
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label for="sector">Type Of Produce</Label>
                        <Select>
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Options</SelectLabel>
                                    <SelectItem value="primary-crops">
                                        Primary Crops
                                    </SelectItem>
                                    <SelectItem value="livestocks">
                                        Livestocks
                                    </SelectItem>
                                    <SelectItem value="poultry">
                                        Poultry
                                    </SelectItem>
                                    <SelectItem value="diary">
                                        Diary
                                    </SelectItem>
                                    <SelectItem value="cash-crops">
                                        Cash Crops
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="labour">Labour Force</Label>
                        <Input id="labour" type="text" placeholder="Labour..." />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="years">Years of Operation</Label>
                        <Input id="years" type="text" placeholder="years..." />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="revenue">Average Annual Revenue</Label>
                        <Input id="revenue" type="text" placeholder="type of business..." />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="instagram">Instagram Link</Label>
                        <Input id="instagram" type="text" placeholder="instagram..." />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="twitter">X Link (formerly Twitter)</Label>
                        <Input id="twitter" type="text" placeholder="twitter..." />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="facebook">Facebook Link</Label>
                        <Input id="facebook" type="text" placeholder="facebook..." />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="website">Link to Business Website</Label>
                        <Input id="website" type="text" placeholder="website..." />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="phine">Business Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="phone..." />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" placeholder="email..." />
                    </div>
                    <div class="grid w-full md:max-w-[500px] items-center gap-1.5">
                        <Label for="merge">Available for merge</Label>
                        <Select>
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Options</SelectLabel>
                                    <SelectItem value="yes">
                                        Yes
                                    </SelectItem>
                                    <SelectItem value="no">
                                        No
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="acquisition">Available for Acquisition</Label>
                        <Select>
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Options</SelectLabel>
                                    <SelectItem value="yes">
                                        Yes
                                    </SelectItem>
                                    <SelectItem value="no">
                                        No
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { CDN_IMAGES } from "../../assets/cdnImages";
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

const props = defineProps({
    profileData: {
        type: Object,
        required: true,
    },
});

</script>