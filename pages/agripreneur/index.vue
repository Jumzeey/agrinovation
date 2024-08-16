<script setup lang="ts">
import Card from '~/components/card/Card.vue';
import ButtonInput from '~/components/inputs/ButtonInput.vue';
import SelectInput from '~/components/inputs/SelectInput.vue';
import Pagination from '~/components/list/Pagination.vue';
import TabItems from '~/components/tab/TabItems.vue';
import { Agripreneurs } from '~/data/agripreneur';

const location = ref([
    {
        id: 1,
        name: "Lekki Ajah"
    }
])

const tabs = [
  {
    name: 'All Categories'
  },
  {
    name: 'Fish farmer'
  },
  {
    name: 'Crop farmer'
  },
  {
    name: 'Fruit farmer'
  }
]

const router = useRouter()

const goTo = (slug: any) => {
    router.push(`/agripreneur/${slug}`)
}

</script>

<template>
    <div class="w-full bg-cover bg-no-repeat bg-[url('/public/images/agripreneur/bg.png')]">
        <div class="mx-0 md:mx-[120px]">
            <Header type="other" />
        </div>

        <div class="px-10 md:px-[168px] pb-[100px] pt-[124px] md:pt-0">
            <div class="text-center">
                <h3 class="text-[40px] md:text-[60px] text-[#FCFFF6]">List of <span class="text-[#FEE934]">Agriprenuer</span> <br>in Lagos State</h3>
            </div>

            <div class="bg-white rounded-2xl mt-[40px]">
                <div class="py-[35px] px-[40px] flex">
                    <div class="w-full">
                        <div class="mb-[24px]">
                            <span class="bg-[#FFFBF5] rounded-lg p-[10px]">Search Agripreneur</span>
                        </div>

                        <div class="lg:flex gap-16 hidden">
                            <div class="border-r-2 border-red-50 pe-16">
                                <SelectInput 
                                    label="Location"
                                    :onChange="console.log"
                                    :selected="'name'"
                                    value="name"
                                    :name="['name']"
                                    :items="location"
                                    placeholder="Lekki Ajah"
                                    class="w-full mt-1"
                                />
                            </div>

                            <div class="border-r-2 border-red-50 pe-16">
                                <SelectInput 
                                    label="Agricultural Sector"
                                    :onChange="console.log"
                                    :selected="'aa'"
                                    value="id"
                                    :name="['name']"
                                    :items="[{}]"
                                    placeholder="Self contain"
                                    class="w-full mt-1"
                                />
                            </div>

                            <div class="border-r-2 border-red-50 pe-[215px]">
                                <SelectInput 
                                    label="Scale"
                                    :onChange="console.log"
                                    :selected="'aa'"
                                    value="id"
                                    :name="['name']"
                                    :items="[{}]"
                                    placeholder="Large Scale"
                                    class="w-full mt-1"
                                />
                            </div>

                            <div class="my-[12px]">
                                <ButtonInput iconLeft icon="search" :onClick="console.log"> Search </ButtonInput>
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
            <div class=" border-b-[1px] border-[#F0F2F5] pb-[40px]">
                <TabItems :tabs="tabs">
                    <template v-slot:tab-0>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
                            <div class="w-full" v-for="data in Agripreneurs" :key="data.id">
                                <Card 
                                    :img="data.image"
                                    :title="data.title"
                                    :review="data.review"
                                    :count="data.count"
                                    :address="data.address"
                                    :amount="data.amount"
                                    @move="goTo('vga-fish-farm')"
                                    centerImage
                                />
                            </div>
                        </div>

                    </template>
                </TabItems>
            </div>

            <div>
                <Pagination :totalPage="5" />
            </div>

            <div class="bg-gradient-to-r from-[#275927] to-[#FDED33] mx-310 md:mx-[120px] py-3 rounded-2xl mb-[94px] mt-10 md:mt-[141px]">
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