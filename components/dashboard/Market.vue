<script setup lang="ts">
import { CDN_IMAGES } from "../../assets/cdnImages";
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { updateProductHandler } from '~/composables/useUpdateProduct';

const showModal = ref(false);

function openModal() {
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}

const { updateProduct, loading } = updateProductHandler();

const formatPrice = (price: any) => {
    const numericPrice = Number(price);
    return isNaN(numericPrice) ? '0.00' : numericPrice.toFixed(2);
}

const handleFileUpload = (event: Event, fileKey: 'imageFile') => {
    const target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;

    if (file && fileKey === 'imageFile') imageFile.value = file;
};


const link = ref('');
const description = ref('');
const name = ref('')
const quantity = ref('')
const price = ref('')
const imageFile = ref<File | null>(null);


const props = defineProps({
    profileData: {
        type: Object,
        required: true,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    error: {
        type: Boolean,
        default: false,
    },
    showAction: {
        type: Boolean,
        default: false,
    }
});

const handleSubmit = async () => {
    if (!props.profileData || !props.profileData.user_id) {
        console.error('User type ID is missing or undefined');
        return;
    }
    const formData = new FormData();

    formData.append('user_id', props.profileData.user_id);
    formData.append('description', description.value);
    formData.append('name', name.value);
    formData.append('quantity', quantity.value);
    formData.append('price', price.value);
    if (imageFile.value) {
        formData.append('image', imageFile.value);
    }

    await updateProduct(formData);
};
</script>

<template>
    <div>
        <div class="bg-white rounded-lg pb-12  p-4">
            <div class="border-b flex justify-between items-center  pb-3">
                <div>
                    <p class="">Market Places</p>
                </div>
                <button v-if="showAction" class="py-2 px-3 border border-border_col rounded-md  cursor-pointer" @click="openModal">
                    <p class="text-priText">Add Product</p>
                </button>
            </div>
            <div>
                <div v-if="props.loading">Loading products...</div>
                <div v-else-if="props.error">Failed to load products. Please try again later.</div>
                <div v-else>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
                        v-if="profileData?.products.length > 0">
                        <div v-for="product in profileData.products" :key="product.id"
                            class="bg-white rounded-xl shadow-md">
                            <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded-t-xl" />

                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-[#2B2B2B]">{{ product.name }}</h3>
                                <p class="text-sm text-gray-600">{{ product.description }}</p>
                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-xl font-semibold text-[#2B2B2B]">#{{ formatPrice(product.price)
                                    }}</span>
                                    <button
                                        class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-[#2B2B2B] hover:bg-gray-100">
                                        Contact Seller
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <EmptyState />
                    </div>
                </div>
            </div>
        </div>
        <Modal :shows="showModal" title="Add Product" width="w-[650px]" :icon="CDN_IMAGES.edit_about_icon"
            @closeModal="closeModal" class="flex flex-col gap-6" :buttonText="'Add'" :onSubmit="handleSubmit" :loading="loading">
            <template #content>
                <div class="grid grid-cols-1 gap-6">
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="name">Product Name</Label>
                        <Input id="name" type="text" placeholder="name..." v-model="name"/>
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="unit">Unit Available</Label>
                        <Input id="unit" type="text" placeholder="unit..." v-model="quantity"/>
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="price">Price</Label>
                        <Input id="price" type="text" placeholder="price..." v-model="price"/>
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="description">Short Description</Label>
                        <Textarea id="description" placeholder="Short description...." v-model="description"/>
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="image">Image</Label>
                        <Input id="image" type="file" @change="handleFileUpload($event, 'imageFile')" />
                        <span class="text-infoText text-[12px] font-thin">Pls upload file PDF, DOCX, JPG or PNG (max.
                            800x400px)</span>
                    </div>
                </div>
            </template>
        </Modal>
    </div>
</template>



