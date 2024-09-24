<template>
    <div class="flex flex-col items-center justify-center h-full">
        <div class="p-4 rounded-lg">
            <img src="https://ik.imagekit.io/bx7bddg8a/Agrinovation/Empty%20State%20(1).svg?updatedAt=1725444364522"
                alt="Empty State" class="w-36 h-36" />
        </div>
        <div class="w-[200px]">
            <p class="font-medium text-center">{{ message }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    message: {
        type: String,
    }
})
</script>

