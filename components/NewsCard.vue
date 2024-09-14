<template>
    <div class="shadow-md py-3 w-full px-6 blog-card flex flex-col">
        <div class="flex items-center">
            <img :src="image" class="mb-6 w-full" alt="Blog image" />
        </div>
        <div class="flex-grow">
            <span class="text-green-500 pb-3">{{ tags }}</span>
            <h3 class="text-[#101828] text-2xl font-semibold pb-3">
                <NuxtLink to="/">{{ title }}</NuxtLink>
            </h3>
            <p class="text-[#667085] text-sm font-medium text-wrap">{{ description }}</p>
        </div>
        <div class="flex items-center mt-7 mb-8">
            <img src="" class="w-6 h-6 rounded-full mr-2" alt="Author" />
            <div class="text-sm">
                <span class="block text-[#101828] font-semibold">{{ author }}</span>
                <span class="text-[#667085]">{{ date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsCard',
    props: {
        image: {
            type: String,
            default: '/images/blog.png'
        },
        tags: {
            type: String,
            default: '#General'
        },
        title: {
            type: String,
            default: 'Default News Title'
        },
        description: {
            type: String,
            default: 'Default news description.'
        },
        author: {
            type: String,
            default: 'John Doe'
        },
        date: {
            type: String,
            default: '01 Jan 2023'
        }
    }
};
</script>

<style scoped>
.blog-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    /* Ensures the cards take full height */
}

.blog-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
