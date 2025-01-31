<script setup lang="ts">
import { CDN_IMAGES } from "../../assets/cdnImages";
import { updateProfileHandler } from "~/composables/useUpdateProfile";
import { ref, watchEffect } from "vue";
import { fieldConfigurations } from '@/data/updateProfileFieldsConfiguration';

const { updateProfile, loading } = updateProfileHandler();
const showModal = ref(false);
const props = defineProps<{
    profileData: UserProfileData;
    showSubActions: boolean;
    showAction: boolean
}>();

// Computed property to determine if cacDocument should be shown
const showCacDocumentField = computed(() => {
    return formDataVariables?.value?.selectedIsRegisteredOption.value === 0;
});

// Reactive variables mapped to formData
const formDataVariables = ref<Record<string, any>>({
    aboutBusiness: "",
    address: "",
    selectedIsRegisteredOption: null,
    selectedFundingStageOption: "",
    selectedProofOption: "",
    selectedSectorOption: "",
    selectedResearchSectorOption: "",
    selectedInvestmentSectorOption: "",
    selectedInvestmentPeriodOption: "",
    selectedBusinessTypeOption: "",
    selectedProduceOption: "",
    selectedMergeOption: null,
    selectedAcquisitionOption: null,
    businessLogo: null,
    cacDocument: null,
    businessDocument: null,
    foundingYear: "",
    farmSize: "",
    researcherType: "",
    labourForce: "",
    yearsOfOperation: "",
    averageRevenue: "",
    instagramLink: "",
    twitterLink: "",
    facebookLink: "",
    websiteLink: "",
    businessPhone: "",
    email: "",
});

// Define the field configurations
const userFields = computed(() => fieldConfigurations[props.profileData.user_type] || []);

// Functions for Modal Handling
function openModal() {
    showModal.value = true;
    populateFormValues();
}

function closeModal() {
    showModal.value = false;
}

// Populate form values from profile data
const populateFormValues = () => {
    if (props.profileData) {
        formDataVariables.value.address = props.profileData?.address || "";
        formDataVariables.value.selectedIsRegisteredOption = props.profileData?.is_registered ? 1 : 0;
        formDataVariables.value.selectedFundingStageOption = props.profileData.more?.funding_stage || "";
        formDataVariables.value.selectedSectorOption = props.profileData?.sector || "";
        formDataVariables.value.selectedResearchSectorOption = props.profileData?.research_sector || "";
        formDataVariables.value.selectedInvestmentSectorOption = props.profileData?.investment_sector || "";
        formDataVariables.value.selectedInvestmentPeriodOption = props.profileData?.period_of_investment || "";
        formDataVariables.value.selectedBusinessTypeOption = props.profileData?.business_type || "";
        formDataVariables.value.selectedProduceOption = props.profileData?.produce_type || "";
        formDataVariables.value.selectedMergeOption = props.profileData.more?.is_available_merger ? 1 : 0;
        formDataVariables.value.selectedAcquisitionOption = props.profileData.more?.is_available_acquisition
            ? 1
            : 0;
        formDataVariables.value.businessLogo = null;
        formDataVariables.value.cacDocument = null;
        formDataVariables.value.businessDocument = null;
        formDataVariables.value.foundingYear = props.profileData?.founding_year || "";
        formDataVariables.value.farmSize = props.profileData?.farm_size || "";
        formDataVariables.value.researcherType = props.profileData?.researcher_type || "";
        formDataVariables.value.labourForce = props.profileData?.labor_force || "";
        formDataVariables.value.yearsOfOperation = props.profileData?.years_of_operation || "";
        formDataVariables.value.averageRevenue = props.profileData.more?.average_annual_revenue || "";
        const socialMediaArray: SocialMedia[] = props.profileData?.social_media || [];
        formDataVariables.value.instagramLink =
            socialMediaArray.find((sm) => sm.name === "Instagram")?.link || "";
        formDataVariables.value.twitterLink = socialMediaArray.find((sm) => sm.name === "Twitter")?.link || "";
        formDataVariables.value.facebookLink =
            socialMediaArray.find((sm) => sm.name === "Facebook")?.link || "";
        formDataVariables.value.websiteLink = props.profileData?.website || "";
        formDataVariables.value.businessPhone = props.profileData?.business_phone || "";
        formDataVariables.value.email = props.profileData?.business_email || "";
        formDataVariables.value.aboutBusiness = props.profileData.more?.about || "";
    }
};

watchEffect(() => {
    if (props.profileData) {
        populateFormValues();
    }
});

const handleFileUpload = (
    event: Event,
    fileKey: 'cacDocument' | 'businessDocument' | 'businessLogo'
) => {
    const target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;

    if (file) {
        formDataVariables.value[fileKey] = file;
    }
};

interface SocialMedia {
    name: string;
    link: string;
}

const handleSubmit = async () => {
    if (!props.profileData || !props.profileData.user_type_id) {
        console.error("User type ID is missing or undefined");
        return;
    }
    const formData = new FormData();

    formData.append("user_id", props.profileData.user_id);
    formData.append("user_type_id", props.profileData.user_type_id);
    formData.append("about", formDataVariables?.value?.aboutBusiness);
    formData.append("is_registered", formDataVariables?.value?.selectedIsRegisteredOption?.toString() ?? "");
    formData.append("research_sector", formDataVariables?.value?.selectedResearchSectorOption?.toString() ?? "");
    formData.append("period_of_investment", formDataVariables?.value?.selectedInvestmentPeriodOption?.toString() ?? "");
    formData.append("investment_sector", formDataVariables?.value?.selectedInvestmentSectorOption?.toString() ?? "");

    if (formDataVariables.value.businessDocument) {
        formData.append("proof_of_address", formDataVariables?.value?.businessDocument);
    }
    if (formDataVariables?.value?.cacDocument) {
        formData.append("cac", formDataVariables?.value?.cacDocument);
    }
    if (formDataVariables?.value?.businessLogo) {
        formData.append("image", formDataVariables?.value?.businessLogo);
    }

    formData.append("funding_stage", formDataVariables?.value?.selectedFundingStageOption?.toString() ?? "");
    formData.append("address", formDataVariables?.value?.address);
    formData.append("farm_size", formDataVariables?.value?.farmSize);
    formData.append("researcher_type", formDataVariables?.value?.farmSize);
    formData.append("business_type", formDataVariables?.value?.selectedBusinessTypeOption || "");
    formData.append("produce_type", formDataVariables?.value?.selectedProduceOption || "");
    formData.append("labor_force", formDataVariables?.value?.labourForce);
    formData.append("years_of_operation", formDataVariables?.value?.yearsOfOperation);
    formData.append("average_annual_revenue", formDataVariables?.value?.averageRevenue.toString());
    formData.append("social_media[0][name]", "Instagram");
    formData.append("social_media[0][link]", formDataVariables?.value?.instagramLink);
    formData.append("social_media[1][name]", "Twitter");
    formData.append("social_media[1][link]", formDataVariables?.value?.twitterLink);
    formData.append("social_media[2][name]", "Facebook");
    formData.append("social_media[2][link]", formDataVariables?.value?.facebookLink);

    formData.append("website", formDataVariables?.value?.websiteLink);
    formData.append("business_phone", formDataVariables?.value?.businessPhone);
    formData.append("business_email", formDataVariables?.value?.email);
    formData.append("founding_year", formDataVariables?.value?.foundingYear);
    formData.append("sector", formDataVariables?.value?.selectedSectorOption || "");
    formData.append("is_available_merger", formDataVariables?.value?.selectedMergeOption?.toString() ?? "");
    formData.append(
        "is_available_acquisition",
        formDataVariables?.value?.selectedAcquisitionOption?.toString() ?? ""
    );

    await updateProfile(formData);
};
</script>

<template>
    <div>
        <div class="bg-white rounded-lg p-4">
            <div class="flex flex-col gap-6">
                <div class="border-b flex justify-between items-center pb-3">
                    <div>
                        <p class="text-2xl">About {{ profileData?.name }}</p>
                    </div>
                    <button v-if="showAction" class="py-2 px-3 border border-border_col rounded-md cursor-pointer" @click="openModal">
                        <p class="text-priText">Edit Profile</p>
                    </button>
                </div>
                <div v-if="profileData?.more?.about" class="flex justify-between w-full">
                    <div class="w-[650px]">
                        <p class="items-start leading-6 text-[#261B0D] font-normal">
                            {{ profileData?.more?.about? profileData?.more?.about : profileData?.about }}
                        </p>
                    </div>
                    <div v-if="showSubActions" class="flex flex-col gap-4">
                        <div
                            class="py-4 px-6 rounded-md w-[250px] h-full bg-[#275927] text-white items-center text-center cursor-pointer">
                            Claim Account</div>
                        <div
                            class="py-4 px-6 rounded-md w-[250px] h-full bg-[#EDF7ED] text-[#275927] items-center text-center cursor-pointer">
                            Claim Profile</div>
                        <div
                            class="py-4 px-6 rounded-md w-[250px] h-full border border-[#EDF7ED] text-[#275927] items-center text-center cursor-pointer">
                            Add Favorite</div>
                    </div>
                </div>
                <div v-else>
                    <EmptyState />
                </div>
                <div class="md:flex flex-col gap-7" v-if="['agripreneur'].includes(profileData?.user_type)">
                    <div class="space-y-4">
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.founding_icon" alt="" class="p-1" />
                            <p>Founding Stage: {{ profileData?.more?.funding_stage || "NA" }}</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.location_icon" alt="" class="p-1" />
                            <p>{{ profileData?.address || "Location not available" }}</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.currency_icon" alt="" class="p-1" />
                            <p>
                                Average Annual Revenue:
                                {{ profileData?.more?.average_annual_revenue || "Not Available" }}
                            </p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.log_icon" alt="" class="p-1" />
                            <p>
                                Produce Information:
                                {{
                                    profileData?.more?.produce_information || "Information not available"
                                }}
                            </p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.shake_icon" alt="" class="p-1" />
                            <p>
                                Available for Acquisition:
                                {{ profileData?.more?.is_available_acquisition ? "Yes" : "No" }}
                            </p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.shake_icon" alt="" class="p-1" />
                            <p>
                                Available for Merger:
                                {{ profileData?.more?.is_available_merger ? "Yes" : "No" }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="md:flex flex-col gap-7" v-if="['investor'].includes(profileData?.user_type)">
                    <div class="space-y-4">
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.investment_icon" alt="" class="p-1" />
                            <p>Period of Investment: {{ profileData?.period_of_investment || "NA" }}</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.location_icon" alt="" class="p-1" />
                            <p>{{ profileData?.address || "Location not available" }}</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img :src="CDN_IMAGES.sector_icon" alt="" class="p-1" />
                            <p>
                                Sector Interest:
                                {{ profileData?.investment_sector || "Not Available" }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal :shows="showModal" title="Update Profile Information" width="w-3/4" :icon="CDN_IMAGES.edit_about_icon"
            @closeModal="closeModal" class="flex flex-col gap-6" :buttonText="'Update'" :onSubmit="handleSubmit"
            :loading="loading">
            <template #content>
                <div>
                    <!-- logo fields -->
                    <div class="grid w-full max-w-sm items-center gap-0.5">
                        <FormField :types="['file-upload']" v-for="field in userFields" :key="field.id" :field="field"
                            :formDataVariables="formDataVariables" @file-upload="handleFileUpload" />
                    </div>

                    <!-- Textarea fields -->
                    <div class="grid w-full">
                        <FormField :types="['Textarea']" v-for="field in userFields" :key="field.id" :field="field"
                            :formDataVariables="formDataVariables" />
                    </div>

                    <!-- other fields -->
                    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
                        <FormField :types="['Input', 'Select', 'File']" v-for="field in userFields" :key="field.id"
                            :field="field" :formDataVariables="formDataVariables" @file-upload="handleFileUpload" />
                    </div>
                </div>
            </template>
        </Modal>
    </div>
</template>


