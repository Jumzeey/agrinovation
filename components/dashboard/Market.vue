<script setup lang="ts">
import { productData } from '~/data/products';

</script>

<template>
    <div class="bg-white rounded-lg pb-12  p-4">
        <div class="border-b flex justify-between items-center  pb-3">
            <div>
                <p class="">Market Places</p>
            </div>
            <div class="py-2 border border-border_col rounded-md  cursor-pointer pb-3 px-4">
                <p class="text-priText">Add Product</p>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <div v-for="product in productData" :key="product.id" class="bg-white rounded-xl shadow-md">
                <img :src="product.imageKey" alt="Product Image"
                    class="w-full h-48 object-cover rounded-t-xl" />

                <div class="p-4">
                    <h3 class="text-lg font-semibold text-[#2B2B2B]">{{ product.title }}</h3>
                    <p class="text-sm text-gray-600">{{ product.description }}</p>
                    <div class="flex justify-between items-center mt-4">
                        <span class="text-xl font-semibold text-[#2B2B2B]">${{ product.price.toFixed(2) }}</span>
                        <button
                            class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-[#2B2B2B] hover:bg-gray-100">
                            Contact Seller
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

