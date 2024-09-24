<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
    <div class="w-full h-full rounded-2xl bg-white shadow relative">
        <!-- Image Skeleton -->
        <div class="w-full h-[220px]">
            <Skeleton class="object-cover w-full h-[220px] rounded-t-2xl" />
        </div>
        <div class="relative">
            <!-- Logo/Icon Skeleton -->
            <div  class="w-[86px] h-[86px] rounded-t-3xl flex items-center justify-center bg-white absolute top-[-100px] left-[calc(50%-43px)] overflow-hidden">
                <Skeleton class="h-12 w-12 rounded-full" />
            </div>

            <!-- Business Name Skeleton -->
            <div class="mt-4 text-center">
                <Skeleton class="h-4 w-40 mx-auto" />
            </div>

            <!-- Tags Skeleton -->
            <div class="mt-2 flex justify-center space-x-2">
                <Skeleton class="h-6 w-16 rounded" />
                <Skeleton class="h-6 w-16 rounded" />
                <Skeleton class="h-6 w-16 rounded" />
            </div>

            <!-- Team Members, Location, Funding Skeletons -->
            <div class="mt-4 space-y-2">
                <div class="flex items-center space-x-2">
                    <Skeleton class="h-4 w-4 rounded-full" />
                    <Skeleton class="h-4 w-32" />
                </div>
                <div class="flex items-center space-x-2">
                    <Skeleton class="h-4 w-4 rounded-full" />
                    <Skeleton class="h-4 w-40" />
                </div>
                <div class="flex items-center space-x-2">
                    <Skeleton class="h-4 w-4 rounded-full" />
                    <Skeleton class="h-4 w-36" />
                </div>
            </div>

            <!-- See Profile Button Skeleton -->
            <div class="mt-4">
                <Skeleton class="h-10 w-full rounded-md" />
            </div>
        </div>
    </div>
</template>
