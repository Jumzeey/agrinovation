<template>
    <div class="bg-white rounded-lg p-4">
        <div class="flex flex-col gap-6">
            <div class="border-b flex justify-between items-center  pb-3">
                <div>
                    <p class="text-2xl">About VGA Agricprenuer</p>
                </div>
                <div class="py-2 px-3 border border-border_col rounded-md  cursor-pointer">
                    <p class="text-priText">Edit Profile</p>
                </div>
            </div>
            <div>
                <p class=" items-start leading-6 text-[#261B0D] font-normal">
                    Agricorp is a Nigerian company that provides global exports to clients of ginger sourced in key local
                    trading markets in Nigeria. They currently have an origination processing facility in the country and
                    have invested in integrated spices processing equipment. The technology meets both international and
                    local standards. They aim to put Nigeria on the radar for the export of ginger, turmeric, garlic and
                    other indigenous spices and agro products. Agricorp also provides a youth entrepreneurship program for
                    individuals wanting to learn how to start a poultry business.
                </p>
            </div>
            <div class="flex gap-7">
                <div class=" space-y-4">
                    <div class="flex gap-4 items-center">
                        <img :src="CDN_IMAGES.founding_icon" alt="" class="p-1">
                        <p>Founding Stage: NA</p>
                    </div>
                    <div class="flex gap-4 items-center">
                        <img :src="CDN_IMAGES.location_icon" alt="" class="p-1">
                        <p>Ibeju Lekki, off Agugungi Road Lagos Nigeria</p>
                    </div>
                    <div class="flex gap-4 items-center">
                        <img :src="CDN_IMAGES.currency_icon" alt="" class="p-1">
                        <p>Average Annual Revenue: Not Avaliable</p>
                    </div>
                    <div class="flex gap-4 items-center">
                        <img :src="CDN_IMAGES.log_icon" alt="" class="p-1">
                        <p>Produce Information: Fish Farming</p>
                    </div>
                </div>
                <div class=" space-y-4">
                    <div class="flex gap-4 items-center">
                        <img :src="CDN_IMAGES.shake_icon" alt="" class="p-1">
                        <p>Available for Acquisition</p>
                    </div>
                    <div class="flex gap-4 items-center">
                        <img :src="CDN_IMAGES.shake_icon" alt="" class="p-1">
                        <p>Available for Merger</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CDN_IMAGES } from "../../assets/cdnImages";

</script>