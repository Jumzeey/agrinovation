<script setup lang="ts">
import { CDN_IMAGES } from "~/assets/cdnImages";
</script>

<template>
    <div class="bg-white rounded-lg pb-12  p-4">
        <div class="border-b flex justify-between items-center  pb-3">
            <div>
                <p class="">Team</p>
            </div>
        </div>
        <div class="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-lg">
            <!-- Map Section -->
            <div class="md:w-2/3">
                <img src="https://ik.imagekit.io/bx7bddg8a/Agrinovation/_%20Map%20Maker_%20Lagos,%20Lagos,%20Nigeria%20(Standard).svg?updatedAt=1723804572862"
                    alt="Map" class="w-full h-auto rounded-lg object-cover cursor-pointer" />
            </div>

            <!-- Contact Information Section -->
            <div class="md:w-1/3 flex flex-col justify-between">
                <!-- Send Mail Button -->
                <button class="w-full py-3 bg-green-700 text-white rounded-lg font-semibold mb-6">
                    Send Mail
                </button>

                <!-- Contact Details -->
                <div class="space-y-4 text-[#2B2B2B]">
                    <div class="flex items-center">
                        <img src="https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868217.svg?updatedAt=1723804624644"
                            alt="">
                        <span>Ibeju Lekki, off Agungi Road, Lagos, Nigeria</span>
                    </div>
                    <div class="flex items-center">
                        <img src="https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868217%20(1).svg?updatedAt=1723804624723"
                            alt="">
                        <span><a href="mailto:Emailagriculture@gmail.com">Emailagriculture@gmail.com</a></span>
                    </div>
                    <div class="flex items-center">
                        <img src="https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868217%20(2).svg?updatedAt=1723804792625"
                            alt="">
                        <span><a href="tel:+2348067825638899">08067825638899</a></span>
                    </div>
                </div>

                <!-- Social Media Icons -->
                <div class="flex space-x-4 mt-6">
                    <a href="#" class="text-gray-500">
                        <img src="https://ik.imagekit.io/bx7bddg8a/Agrinovation/Social%20icon%20(1).svg?updatedAt=1723804976935" alt="Twitter" />
                    </a>
                    <a href="#" class="text-gray-500">
                        <img src="https://ik.imagekit.io/bx7bddg8a/Agrinovation/Social%20icon.svg?updatedAt=1723804976723" alt="LinkedIn" />
                    </a>
                    <a href="#" class="text-gray-500">
                        <img src="https://ik.imagekit.io/bx7bddg8a/Agrinovation/Social%20icon%20(2).svg?updatedAt=1723804976684" alt="Facebook" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
