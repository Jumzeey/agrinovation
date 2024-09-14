<template>
    <div>
        <!-- News Grid Section -->
        <div>
            <!-- News Cards -->
            <div
                class="mt-[52px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8 items-center">
                <NewsCard v-for="(item, index) in newsItems" :key="index" :image="item.image" :tags="item.tags"
                    :title="item.title" :description="item.description" :author="item.author" :date="item.date" />
            </div>
        </div>
    </div>
</template>

<script>
import NewsCard from './NewsCard.vue';

export default {
    name: 'NewsComponent',
    components: { NewsCard },
    props: {
        newsTitle: {
            type: String,
            default: 'News'
        },
        newsItems: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style scoped>
/* Same styles as before */
</style>
