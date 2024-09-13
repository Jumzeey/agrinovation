<template>
    <div>
        <div class="bg-white rounded-lg pb-12  p-4">
            <div class="border-b flex justify-between items-center  pb-3">
                <div>
                    <p class="">Market Places</p>
                </div>
                <button class="py-2 px-3 border border-border_col rounded-md  cursor-pointer" @click="openModal">
                    <p class="text-priText">Add Product</p>
                </button>
            </div>
            <div>
                <div v-if="loading">Loading products...</div>
                <div v-else-if="error">Failed to load products. Please try again later.</div>
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
            @closeModal="closeModal" class="flex flex-col gap-6" :buttonText="'Add'" :onSubmit="handleSubmit">
            <template #content>
                <div class="grid grid-cols-1 gap-6">
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="name">Product Name</Label>
                        <Input id="name" type="text" placeholder="name..." />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="unit">Unit Available</Label>
                        <Input id="unit" type="text" placeholder="unit..." />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="description">Short Description</Label>
                        <Textarea id="description" placeholder="Short description...." />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="image">Image</Label>
                        <Input id="image" type="file" />
                        <span class="text-infoText text-[12px] font-thin">Pls upload file PDF, DOCX, JPG or PNG (max.
                            800x400px)</span>
                    </div>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { productData } from '~/data/products';
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

const formatPrice = (price: any) => {
    const numericPrice = Number(price);
    return isNaN(numericPrice) ? '0.00' : numericPrice.toFixed(2);
}

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
});
</script>

