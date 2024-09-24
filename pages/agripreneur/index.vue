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
import { watch } from 'vue';


const { sectorData } = useFetchSectorTypes();
const { produceTypes: produceTabs } = useFetchProduceTypes();
const { agripreneur, agripreneurData, loading, pagination } = useGetAgripreneur();
const selectedTab = ref('All');
const currentPage = ref(1);

console.log('produce list: ', produceTabs.value)

const agripreneurList = computed<Agripreneurs[]>(() => {
    return agripreneurData.value?.data ? agripreneurData.value.data : [];
});

watch(pagination, (newVal) => {
    console.log('Updated pagination data:', newVal);
});

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



const location = ref();
const sector = ref();
const scale = ref();

const tabs = computed(() => {
    const produceTabNames = produceTabs.value?.data ? produceTabs.value.data.map((item: { name: string }) => item.name) : [];
    return ['All', ...produceTabNames];
});

const router = useRouter();

const goTo = (slug: any) => {
    router.push(`/agripreneur/${slug}`);
};

const handlePageChange = (page: number) => {
    currentPage.value = page;
    fetchAgripreneurData();
};

async function fetchAgripreneurData() {
    try {
        await agripreneur({
            location: location.value,
            sector: sector.value,
            scale: scale.value,
            page: currentPage.value,
        });
    } catch (error) {
        console.error('Error fetching profile:', error);
    }

}

const handleFetchAgripreneurBtnClick = () => {
    currentPage.value = 1; // Reset to the first page
    fetchAgripreneurData(); // Fetch data immediately
    console.log('Data: ', agripreneurData.value); // This will show data after fetching
};


fetchAgripreneurData()
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

                        <div class="lg:flex gap-16 hidden">
                            <DetailedSearch id="location-select" label="Location" placeholder="Choose an LGA"
                                :options="locationOptions" v-model="location" />

                            <div class="border-r-2 border-red-50 pe-16">
                                <DetailedSearch id="sector-select" label="Agricultural Sector" placeholder="Choose a sector"
                                    :options="sectorOptions" v-model="sector" />
                            </div>

                            <div class="border-r-2 border-red-50 pe-16">
                                <DetailedSearch id="scale-select" label="Scale" placeholder="Choose a scale"
                                    :options="scaleOptions" v-model="scale" />
                            </div>

                            <div class="my-[12px]">
                                <ButtonInput iconLeft icon="search" @click="handleFetchAgripreneurBtnClick()"
                                    :disable="loading">
                                    Search
                                </ButtonInput>
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
            <div v-if="loading" class="flex items-center">
                <NuxtLoadingIndicator />
            </div>
            <div v-else class="border-b-[1px] border-[#F0F2F5] pb-[40px]">
                <TabItems :tabs="tabs">
                    <template v-slot:tab-0>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
                            <div v-for="data in agripreneurList" :key="data.agripreneur_id" class="w-full">
                                <Card :img="data.image" :title="data.business_name" :bg="data.banner_image"
                                    :count="data.team_member_count" :address="data.address"
                                    @move="goTo(data.agripreneur_id)" centerImage />
                            </div>
                        </div>
                    </template>
                </TabItems>
            </div>

            <div v-if="pagination">
                <Pagination :currentPage="currentPage" :totalPage="pagination.last_page" @onPageChange="handlePageChange" />
            </div>

            <div v-if="!loading && agripreneurList.length === 0">
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

    <Footer />
</template>