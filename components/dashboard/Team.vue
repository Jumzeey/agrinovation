<template>
    <div>
        <div class="bg-white rounded-lg pb-12  p-4">
            <div class="border-b flex justify-between items-center pb-3">
                <div>
                    <div v-if="profileData?.user_type === 'Agripreneur' || profileData?.user_type === 'Investor'">
                        <p>Team</p>
                    </div>
                    <div v-if="profileData?.user_type === 'Researcher'">
                        <p>Collaborators</p>
                    </div>
                    <div v-if="!profileData?.user_type">
                        <p>Team</p>
                    </div>
                </div>
                <button v-if="showAction" class="py-2 px-3 border border-border_col rounded-md cursor-pointer"
                    @click="openModal">
                    <p class="text-priText">Add member</p>
                </button>
            </div>
            <div>
                <div v-if="profileData?.team_members.length > 0">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
                        <div v-for="profile in profileData?.team_members" :key="profile.id"
                            class="bg-white rounded-lg text-left">
                            <img :src="profile?.image" alt="Profile Image"
                                class="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 class="text-lg font-semibold text-[#2B2B2B]">{{ profile?.name }}</h3>
                            <p class="text-sm text-green-600 font-medium">{{ profile?.position }}</p>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <EmptyState />
                </div>
            </div>
        </div>
        <Modal :shows="showModal" title="Add New Team Member" width="w-[650px]" :icon="CDN_IMAGES.edit_about_icon"
            @closeModal="closeModal" class="flex flex-col gap-6" :buttonText="'Add'" :onSubmit="handleSubmit"
            :loading="loading">
            <template #content>
                <div class="grid grid-cols-1 gap-6">
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="name">Name</Label>
                        <Input id="name" type="text" placeholder="name..." v-model="name" />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="position">Position</Label>
                        <Input id="position" type="text" placeholder="position..." v-model="position" />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="about">About</Label>
                        <Input id="about" type="text" placeholder="position..." v-model="about" />
                    </div>
                    <div class="grid w-full items-center gap-1.5" v-if="profileData.user_type !== 'Researcher'">
                        <Label for="company_name">Company Name</Label>
                        <Input id="company_name" type="text" placeholder="name..." v-model="companyName" />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="image">Image</Label>
                        <Input id="image" type="file" @change="handleFileUpload($event, 'imageFile')" />
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
import { updateTeamHandler } from "~/composables/useUpdateTeam";

const props = defineProps({
    profileData: {
        type: Object,
        required: true,
    },
    showAction: {
        type: Boolean,
        default: false,
    }
});

const { updateTeam, loading } = updateTeamHandler()

const showModal = ref(false);

function openModal() {
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}



const name = ref('')
const position = ref('')
const about = ref('')
const companyName = ref('')
const imageFile = ref<File | null>(null);

const handleFileUpload = (event: Event, fileKey: 'imageFile') => {
    const target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;

    if (file && fileKey === 'imageFile') imageFile.value = file;
};

const handleSubmit = async () => {
    if (!props.profileData || !props.profileData.user_id) {
        console.error('User type ID is missing or undefined');
        return;
    }
    const formData = new FormData();

    formData.append('user_id', props.profileData.user_id);
    formData.append('user_type_id', props.profileData.user_type_id);
    formData.append('name', name.value);
    formData.append('position', position.value);
    formData.append('company_name', companyName.value);
    formData.append('about', about.value);
    if (imageFile.value) {
        formData.append('image', imageFile.value);
    }

    await updateTeam(formData);
};
</script>