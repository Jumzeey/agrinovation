<script setup lang="ts">
import Card from "~/components/card/Card.vue";
import ButtonInput from "~/components/inputs/ButtonInput.vue";
import Pagination from "~/components/list/Pagination.vue";
import TabItems from "~/components/tab/TabItems.vue";
import { useFetchSectorTypes } from "~/composables/useFetchSector";
import { useFetchProduceTypes } from "~/composables/useFetchProduceTypes"
import { useGetAgripreneur } from "~/composables/useFetchAgripreneur";
import { local_government_areas } from "~/data/localGovernment";
import { farm_scale } from "~/data/scale"


const { sectorData } = useFetchSectorTypes();
const { data: produceTypes, error: produceError, isLoading: produceLoading } = useFetchProduceTypes();

const params = ref<SearchAgripreneurData>({
    location: null,
    sector: null,
    scale: null,
    type: null,
    page: 1,
});

const { data: agripreneurData, error, isLoading, isError, refetch } = useGetAgripreneur(params.value);

const selectedTab = ref('all');
const currentPage = ref(1);

const sectorOptions = computed(() =>
    sectorData.value ? sectorData.value.map((sector: any) => ({
        value: sector.id,
        label: sector.name,
    })) : []
);

const scaleOptions = farm_scale.map((sc: string) => ({
    value: sc,
    label: sc,
}));

const locationOptions = local_government_areas.map((lga: string) => ({
    value: lga,
    label: lga,
}));

const router = useRouter();

const goTo = (id: number) => {
    router.push(`/agripreneur/${id}`);
};

const handlePageChange = (page: number) => {
    currentPage.value = page;
};

const handleTabSelect = (slug: string) => {
    console.log('Tab selected in parent: ', slug);
    params.value.type = slug === 'all' ? null : slug; 
    selectedTab.value = slug
    refetch(); // Refetch data with the updated params
};
</script>

<template>
    <div class="w-full bg-cover bg-no-repeat bg-[url('/public/images/agripreneur/bg.png')]">
        <div class="mx-0 md:mx-[120px]">
            <Header type="other" />
        </div>

        <div class="px-10 md:px-[168px] pb-[100px] pt-[124px] md:pt-0">
            <div class="text-center">
                <h3 class="text-[40px] md:text-[60px] text-[#FCFFF6]">
                    List of <span class="text-[#FEE934]">Agriprenuer</span> <br />in Lagos State
                </h3>
            </div>

            <div class="bg-white rounded-2xl mt-[40px]">
                <div class="py-[35px] px-[40px] flex">
                    <div class="w-full">
                        <div class="mb-[24px]">
                            <span class="bg-[#FFFBF5] rounded-lg p-[10px]">Search Agripreneur</span>
                        </div>

                        <div class="lg:flex justify-between hidden">
                            <div class="border-r-2 border-red-50 pe-16">
                                <DetailedSearch id="location-select" label="Location" placeholder="Choose an LGA"
                                    :options="locationOptions" v-model="params.location" />
                            </div>

                            <div class="border-r-2 border-red-50 pe-16">
                                <DetailedSearch id="sector-select" label="Agricultural Sector" placeholder="Choose a sector"
                                    :options="sectorOptions" v-model="params.sector" />
                            </div>

                            <div class=" border-red-50 pe-16">
                                <DetailedSearch id="scale-select" label="Scale" placeholder="Choose a scale"
                                    :options="scaleOptions" v-model="params.scale" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="px-[40px] md:px-[120px] py-[77px] bg-[#F8FCF8]">
        <div class="mb-4">
            <h3 class="text-[#261B0D] text-xl font-semibold">Agripreneurs</h3>
        </div>

        <div class="">
            <div v-if="isLoading" class="flex items-center">
                <NuxtLoadingIndicator />
            </div>
            <div v-else class="border-b-[1px] border-[#F0F2F5] pb-[40px]">
                <TabItems :tabs="produceTypes" :selectedTab="selectedTab" :onTabSelect="handleTabSelect">
                    <template v-slot:tab-all>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
                            <div v-for="agripreneur in agripreneurData?.data" :key="agripreneur.agripreneur_id"
                                class="w-full">
                                <Card :img="agripreneur.image" :title="agripreneur.business_name"
                                    :bg="agripreneur.banner_image" :count="agripreneur.team_member_count"
                                    :address="agripreneur.address" @move="goTo(agripreneur.agripreneur_id)" centerImage />
                            </div>
                        </div>
                    </template>
                </TabItems>
            </div>

            <div v-if="agripreneurData?.pagination">
                <Pagination :currentPage="currentPage" :totalPage="agripreneurData?.pagination.last_page"
                    @onPageChange="handlePageChange" />
            </div>

            <div v-if="!isLoading && agripreneurData?.data.length === 0">
                <EmptyState message="No agripreneurs found in this region." />
            </div>

            <div
                class="bg-gradient-to-r from-[#275927] to-[#FDED33] mx-310 md:mx-[120px] py-3 rounded-2xl mb-[94px] mt-10 md:mt-[141px]">
                <div class="text-center flex flex-col items-center">
                    <div class="w-32 py-8">
                        <img src="/images/group.svg" class="w-full" alt="" />
                    </div>
                    <div>
                        <h3 class="pb-2 text-white text-xl font-medium">Still have questions?</h3>
                        <p class="text-white text-md md:text-lg font-normal pb-8">
                            Can’t find the answer you’re looking for? Please reach out to our friendly
                            team.
                        </p>
                        <button class="bg-[#275927] text-white rounded-lg py-[10px] px-3 mb-8">
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

<Footer /></template>