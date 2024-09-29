<script setup lang="ts">
import CardTwo from '~/components/card/CardTwo.vue';
import TextInput from '~/components/inputs/TextInput.vue';
import Pagination from '~/components/list/Pagination.vue';
import { useGetResearches } from "~/composables/useFetchResearch"


const params = ref<SearchResearchData>({
    search: null,
    page: 1,
});

const currentPage = ref(1);

const { data: Data, error, isLoading, isError, refetch } = useGetResearches(params.value);

const researchData = computed(() => {
    return Data?.value || null;
});

const router = useRouter()

const goTo = (id: number) => {
    router.push(`/research/${id}`)
}

const handlePageChange = (page: number) => {
    currentPage.value = page;
};
</script>

<template>
    <div class="w-full bg-cover bg-no-repeat bg-[url('/public/images/research/bg.png')]">
        <div class="mx-0 md:mx-[120px]">
            <Header type="other" />
        </div>

        <div class="px-10 md:px-[168px] pb-[230px] pt-[124px] md:pt-0">
            <div class="text-center">
                <h3 class="text-[30px] md:text-[60px] lg:text-[60px] text-[#FCFFF6]">Access <span
                        class="text-[#FEE934]">Agricultural Research</span> to <br>better make your work easy</h3>
            </div>

            <div class="mt-[32px]">
                <div class="w-full md:w-[650px] lg:w-[650px] m-auto">
                    <TextInput :onChange="console.log" label="" class="w-full" placeholder="Search for research..." v-model="params.search"/>
                </div>
            </div>
        </div>
    </div>

    <div class="px-[40px] md:px-[120px] py-[77px] bg-[#F8FCF8]">
        <div class="mb-4">
            <h3 class="text-[#261B0D] text-xl font-semibold">Knowledge Hub</h3>
        </div>

        <div class="">
            <div class=" border-b-[1px] border-[#F0F2F5] pb-[40px]">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-7">
                    <div v-for="research in researchData?.data" :key="research.id" class="w-full">
                        <CardTwo :img="research.image" :description="research.description || 'Description'" :title="research.topic  || 'Title'"
                            @move="goTo(research.id)" :date="research.start_date || 'Start Date'" bg="bg-[#F4FAF4]" text="text-[#2B612B]" />
                    </div>
                </div>
            </div>

            <div>
                <div v-if="researchData?.pagination">
                    <Pagination :currentPage="currentPage" :totalPage="researchData?.pagination.last_page"
                        @onPageChange="handlePageChange" />
                </div>
            </div>

            <div v-if="!isLoading && researchData?.data.length === 0">
                <EmptyState message="No research found." />
            </div>

            <div
                class="bg-gradient-to-r from-[#275927] to-[#FDED33] mx-310 md:mx-[120px] py-3 rounded-2xl mb-[94px] mt-10 md:mt-[141px]">
                <div class="text-center flex flex-col items-center">
                    <div class="w-32 py-8">
                        <img src="/images/group.svg" class="w-full" alt="" />
                    </div>
                    <div>
                        <h3 class="pb-2 text-white text-xl font-medium">
                            Still have questions?
                        </h3>
                        <p class="text-white text-md md:text-lg font-normal pb-8">
                            Can’t find the answer you’re looking for? Please reach out to our
                            friendly team.
                        </p>
                        <button class="bg-[#275927] text-white rounded-lg py-[10px] px-3 mb-8">
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>