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
                <div class="md:flex flex-col gap-7" v-if="['Agripreneur', 'Investor'].includes(profileData?.user_type)">
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
                            <p>Average Annual Revenue: {{ profileData?.more?.average_annual_revenue || 'Not Available' }}
                            </p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.log_icon" alt="" class="p-1">
                            <p>Produce Information: {{ profileData?.more?.produce_information || 'Information not available'
                            }}</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.shake_icon" alt="" class="p-1">
                            <p>Available for Acquisition: {{ profileData?.more?.is_available_acquisition ? 'Yes' : 'No' }}
                            </p>
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
                    <Textarea id="message" placeholder="About your business...." v-model="aboutBusiness" />
                </div>
                <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div class="w-full">
                        <Label for="isRegistered">Is your Business Registered</Label>
                        <!-- Is your Business Registered -->
                        <Select v-model="selectedIsRegisteredOption">
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Options</SelectLabel>
                                    <SelectItem v-for="option in businessRegistrationOptions" :key="option.value"
                                        :value="option.value">
                                        {{ option.label }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid md:w-[500px] w-full max-w-sm items-center gap-1.5">
                        <Label for="cac">Upload CAC Document *</Label>
                        <Input id="cac" type="file" @change="handleFileUpload($event, 'cacDocument')" />
                        <span class="text-infoText text-[12px] font-thin">Pls upload file PDF, DOCX, JPG or PNG (max.
                            800x400px)</span>
                    </div>
                    <div>
                        <Label for="isRegistered">Proof Of Address</Label>
                        <!-- Proof of address -->
                        <Select v-model="selectedProofOption">
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="Type..." />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Type..</SelectLabel>
                                    <SelectItem v-for="option in proofOfAddressOptions" :key="option.value"
                                        :value="option.value">
                                        {{ option.label }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid w-full max-w-sm items-center gap-1.5">
                        <Label for="doc">Upload Document *</Label>
                        <Input id="doc" type="file" @change="handleFileUpload($event, 'businessDocument')"/>
                        <span class="text-infoText text-[12px] font-thin">Pls upload file PDF, DOCX, JPG or PNG (max.
                            800x400px)</span>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="address">Address</Label>
                        <Input id="address" type="text" placeholder="Address..." v-model="address"/>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5"
                        v-if="profileData.user_type === 'Agripreneur'">
                        <Label for="address">Founding Year</Label>
                        <Input id="founding" type="text" placeholder="founding..." v-model="foundingYear"/>
                    </div>
                    <div>
                        <Label for="sector">Sector</Label>
                        <!-- Sector -->
                        <Select v-model="selectedSectorOption">
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Options</SelectLabel>
                                    <SelectItem v-for="option in sectorOptions" :key="option.value" :value="option.value">
                                        {{ option.label }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="size">Farm Size</Label>
                        <Input id="size" type="text" placeholder="farm size..." v-model="farmSize"/>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="businessType">Type Of Business</Label>
                        <!-- Type of Business -->
                        <Select v-model="selectedBusinessTypeOption">
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="Type..." />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Type..</SelectLabel>
                                    <SelectItem v-for="option in typeOfBusinessOptions" :key="option.value"
                                        :value="option.value">
                                        {{ option.label }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label for="sector">Type Of Produce</Label>
                        <!-- Type of Produce -->
                        <Select v-model="selectedProduceOption">
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Options</SelectLabel>
                                    <SelectItem v-for="option in produceOptions" :key="option.value" :value="option.value">
                                        {{ option.label }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="labour">Labour Force</Label>
                        <Input id="labour" type="text" placeholder="Labour..." v-model="labourForce"/>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="years">Years of Operation</Label>
                        <Input id="years" type="text" placeholder="years..." v-model="yearsOfOperation" />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="revenue">Average Annual Revenue</Label>
                        <Input id="revenue" type="text" placeholder="type of business..." v-model="averageRevenue"/>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="instagram">Instagram Link</Label>
                        <Input id="instagram" type="text" placeholder="instagram..." v-model="instagramLink"/>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="twitter">X Link (formerly Twitter)</Label>
                        <Input id="twitter" type="text" placeholder="twitter..." v-model="twitterLink"/>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="facebook">Facebook Link</Label>
                        <Input id="facebook" type="text" placeholder="facebook..." v-model="facebookLink"/>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="website">Link to Business Website</Label>
                        <Input id="website" type="text" placeholder="website..." v-model="websiteLink"/>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="phine">Business Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="phone..." v-model="businessPhone" />
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" placeholder="email..." v-model="email"/>
                    </div>
                    <div class="grid w-full md:max-w-[500px] items-center gap-1.5">
                        <Label for="merge">Available for merge</Label>
                        <!-- Available for Merge -->
                        <Select v-model="selectedMergeOption">
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Options</SelectLabel>
                                    <SelectItem v-for="option in mergeOptions" :key="option.value" :value="option.value">
                                        {{ option.label }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid w-full max-w-[500px] items-center gap-1.5">
                        <Label for="acquisition">Available for Acquisition</Label>
                        <!-- Available for Acquisition -->
                        <Select v-model="selectedAcquisitionOption">
                            <SelectTrigger class="md:w-[500px] w-full">
                                <SelectValue placeholder="select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Options</SelectLabel>
                                    <SelectItem v-for="option in acquisitionOptions" :key="option.value"
                                        :value="option.value">
                                        {{ option.label }}
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
import { updateProfileHandler } from '~/composables/useUpdateProfile';

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

const props = defineProps({
    profileData: {
        type: Object,
        required: true,
    },
});

// Reactive variables
const address = ref('');
const selectedIsRegisteredOption = ref('');
const selectedFundingStageOption = ref('');
const selectedProofOption = ref('');
const selectedSectorOption = ref('');
const selectedBusinessTypeOption = ref('');
const selectedProduceOption = ref('');
const selectedMergeOption = ref('');
const selectedAcquisitionOption = ref('');
const businessLogo = ref(null);  
const cacDocument = ref<File | null>(null); 
const businessDocument = ref<File | null>(null); 
const foundingYear = ref('');  // Founding Year, shown only if user_type === 'Agripreneur'
const farmSize = ref('');
const labourForce = ref('');
const yearsOfOperation = ref('');
const averageRevenue = ref('');
const instagramLink = ref('');
const twitterLink = ref('');
const facebookLink = ref('');
const websiteLink = ref('');
const businessPhone = ref('');
const email = ref('');
const aboutBusiness = ref('');  // About Business textarea


const { updateProfile } = updateProfileHandler();

// File upload handler
const handleFileUpload = (event: Event, fileKey: 'cacDocument' | 'businessDocument') => {
    const target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;

    if (file) {
        if (fileKey === 'cacDocument') cacDocument.value = file;
        if (fileKey === 'businessDocument') businessDocument.value = file;
    }
};
// Correctly define arrays of objects for the select options
const businessRegistrationOptions: Array<{ value: boolean, label: string }> = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' }
];

const fundingStageOptions: Array<{ value: string, label: string }> = [
    { value: 'pre-seed', label: 'Pre-Seed' },
    { value: 'seed', label: 'Seed' },
    { value: 'series-a', label: 'Series A' },
    { value: 'series-b', label: 'Series B' },
    { value: 'series-c', label: 'Series C' },
    { value: 'series-d', label: 'Series D' },
    { value: 'mezzanine-funding', label: 'Mezzanine Funding' },
    { value: 'ipo', label: 'IPO' }
];

const proofOfAddressOptions: Array<{ value: string, label: string }> = [
    { value: 'electricity-bill', label: 'Electricity Bill' },
    { value: 'lawma-bill', label: 'LAWMA Bill' },
];

const sectorOptions: Array<{ value: string, label: string }> = [
    { value: 'pre-production', label: 'Pre-Production' },
    { value: 'production', label: 'Production' },
    { value: 'post-production', label: 'Post-Production' }
];

const typeOfBusinessOptions: Array<{ value: string, label: string }> = [
    { value: 'farmer', label: 'Farmer' },
    { value: 'startup', label: 'StartUp' },
    { value: 'agro-hub', label: 'Agro-Hub' }
];

const produceOptions: Array<{ value: string, label: string }> = [
    { value: 'primary-crops', label: 'Primary Crops' },
    { value: 'livestocks', label: 'Livestocks' },
    { value: 'poultry', label: 'Poultry' },
    { value: 'diary', label: 'Diary' },
    { value: 'cash-crops', label: 'Cash Crops' }
];

const mergeOptions: Array<{ value: string, label: string }> = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
];

const acquisitionOptions: Array<{ value: string, label: string }> = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
];

const handleSubmit = async () => {
    // Create the credentials object
    const formData = new FormData();

    // Append each field to FormData
    formData.append('user_id', props.profileData.id);
    formData.append('user_type_id', props.profileData.user_type_id);
    formData.append('about', aboutBusiness.value);
    formData.append('is_registered', selectedIsRegisteredOption.value);

    // Append files (e.g., CAC Document)
    if (businessDocument.value) {
        formData.append('proof_of_address', businessDocument.value);
    }
    if (cacDocument.value) {
        formData.append('cac', cacDocument.value);
    }

    formData.append('funding_stage', selectedFundingStageOption.value || '');
    formData.append('address', address.value);
    formData.append('farm_size', farmSize.value);
    formData.append('business_type', selectedBusinessTypeOption.value || '');
    formData.append('produce_type', selectedProduceOption.value || '');
    formData.append('labor_force', labourForce.value);
    formData.append('years_of_operation', (parseInt(yearsOfOperation.value) || 0).toString());
    formData.append('average_annual_revenue', (parseFloat(averageRevenue.value) || 0).toString());

    // Append social media links
    formData.append('social_media[0][name]', 'Instagram');
    formData.append('social_media[0][link]', instagramLink.value);
    formData.append('social_media[1][name]', 'Twitter');
    formData.append('social_media[1][link]', twitterLink.value);
    formData.append('social_media[2][name]', 'Facebook');
    formData.append('social_media[2][link]', facebookLink.value);

    formData.append('website', websiteLink.value);
    formData.append('business_phone', businessPhone.value);
    formData.append('business_email', email.value);
    formData.append('is_available_merger', (selectedMergeOption.value === 'yes').toString());
    formData.append('is_available_acquisition', (selectedAcquisitionOption.value === 'yes').toString());

    formData.append('investor_type', '');
    formData.append('investment_sector', '');
    formData.append('period_of_investment', '');

    // Additional social media links if any
    // formData.append('social_media_link', ''); // Add more if needed

    formData.append('researcher_type', '');
    formData.append('sector_id', selectedSectorOption.value);
    formData.append('facebook', facebookLink.value);
    formData.append('instagram', instagramLink.value);
    formData.append('twitter', twitterLink.value);

    // Log the form data for debugging
    for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }
console.log('the payload: ', formData)
    // try {
    //     // Call the updateProfile function with the credentials object
    //     await updateProfile(formData);
    // } catch (error) {
    //     // Handle any errors that may occur
    //     console.error('Error updating profile:', error);
    // }
};


</script>
