<script setup lang="ts">
import { CDN_IMAGES } from "../../assets/cdnImages";
</script>

<template>
    <div class="bg-white rounded-lg pb-12  p-4">
        <div class="grid grid-cols-4 gap-0 items-center border-b pb-3 px-4"> 
            <div class="text-left">
                <p class="text-base">Document Title</p>
            </div>
            <div class="text-left">
                <p class="text-base">View Document</p>
            </div>
            <div class="text-left">
                <p class="text-base">Status</p>
            </div>
            <div class="text-right py-2 px-3 border border-border_col rounded-md cursor-pointer">
                <span class="flex justify-center items-center gap-2">
                    <img :src="CDN_IMAGES.plus_icon" alt="Add Document Icon">
                    <p class="text-priText">Add Document</p>
                </span>
            </div>
        </div>

        <!-- Content Row -->
        <div class="grid grid-cols-4 gap-0 items-center pt-3 px-4"> 
            <div class="text-left">
                <img :src="CDN_IMAGES.pdf_logo" alt="PDF Icon" class="mb-2">
                <p class="text-sm text-gray-500">File_Title.PDF</p>
            </div>
            <div class="text-left">
                <img :src="CDN_IMAGES.mark_icon" alt="Success Icon" class="mb-2 mx-0">
                <p class="text-sm text-gray-500">Upload Successful</p>
                <p class="text-xs text-gray-400">313 KB | 31 Aug, 2024</p>
            </div>
            <div class="text-left">
                <span class="bg-green-500 text-white py-1 px-4 rounded-full">
                    Verified
                </span>
            </div>
            <div class="text-right"></div>
        </div>
    </div>
</template>


