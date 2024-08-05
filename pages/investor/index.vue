<script setup lang="ts">
import Card from '~/components/card/Card.vue';
import ButtonInput from '~/components/inputs/ButtonInput.vue';
import SelectInput from '~/components/inputs/SelectInput.vue';
import Pagination from '~/components/list/Pagination.vue';
import TabItems from '~/components/tab/TabItems.vue';

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
    router.push(`/investor/${slug}`)
}

</script>

<template>
    <div class="w-full bg-cover bg-no-repeat bg-[url('/public/images/investor/bg.png')]">
        <div class="mx-0 md:mx-[120px]">
            <Header type="other" />
        </div>

        <div class="px-10 md:px-[168px] pb-[100px] pt-[124px] md:pt-0">
            <div class="text-center">
                <h3 class="text-[40px] md:text-[60px] text-[#FCFFF6]">List of <span class="text-[#FEE934]">Investor</span> <br>in Lagos State</h3>
            </div>

            <div class="bg-white rounded-2xl mt-[40px]">
                <div class="py-[35px] px-[40px] flex">
                    <div class="w-full">
                        <div class="mb-[24px]">
                            <span class="bg-[#FFFBF5] rounded-lg p-[10px]">Search Investor</span>
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
            <h3 class="text-[#261B0D] text-xl font-semibold">Investors</h3>
        </div>

        <div class="">
            <div class=" border-b-[1px] border-[#F0F2F5] pb-[40px]">
                <TabItems :tabs="tabs">
                    <template v-slot:tab-0>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
                            <div class="w-full">
                                <Card 
                                    img="https://www.geotab.com/CMS-Media-production/AU/Solutions/Agribusiness/agribusiness-hero-banner-australia@2x.jpg"
                                    title="VGA Fish Farm"
                                    review="91 Reviews"
                                    count="56"
                                    address="Ibeju Lekki, off Agugungi Road Lagos Nigeria"
                                    amount="56m"
                                    @move="goTo('vga-fish-farm')"
                                    centerImage
                                />
                            </div>

                            <div class="w-full">
                                <Card 
                                    img="https://media.istockphoto.com/id/506164764/photo/tractor-spraying-soybean-field.jpg?s=612x612&w=0&k=20&c=h27yHr07QNSghYS20iwYBCGjZIa2HlXqrZDkM0ZsYEw="
                                    title="VGA Fish Farm"
                                    review="91 Reviews"
                                    count="56"
                                    address="Ibeju Lekki, off Agugungi Road Lagos Nigeria"
                                    amount="56m"
                                    centerImage
                                />
                            </div>

                            <div class="w-full">
                                <Card 
                                    img="https://wallpapers.com/images/featured/sustainable-agriculture-t1tte6fs05hrpkyc.jpg"
                                    title="VGA Fish Farm"
                                    review="91 Reviews"
                                    count="56"
                                    address="Ibeju Lekki, off Agugungi Road Lagos Nigeria"
                                    amount="56m"
                                    centerImage
                                />
                            </div>

                            <div class="w-full">
                                <Card 
                                    img="https://investorplace.com/wp-content/uploads/2020/06/agriculture-stocks.jpg"
                                    title="VGA Fish Farm"
                                    review="91 Reviews"
                                    count="56"
                                    address="Ibeju Lekki, off Agugungi Road Lagos Nigeria"
                                    amount="56m"
                                    centerImage
                                />
                            </div>

                            <div class="w-full">
                                <Card 
                                    img="https://investorplace.com/wp-content/uploads/2020/07/agriculturestocks1600-768x432.jpg"
                                    title="VGA Fish Farm"
                                    review="91 Reviews"
                                    count="56"
                                    address="Ibeju Lekki, off Agugungi Road Lagos Nigeria"
                                    amount="56m"
                                    centerImage
                                />
                            </div>

                            <div class="w-full">
                                <Card 
                                    img="https://t4.ftcdn.net/jpg/02/43/52/57/360_F_243525780_r8sdu06FUxVmqvf3YUthU5s9nE0z0lhh.jpg"
                                    title="VGA Fish Farm"
                                    review="91 Reviews"
                                    count="56"
                                    address="Ibeju Lekki, off Agugungi Road Lagos Nigeria"
                                    amount="56m"
                                    centerImage
                                />
                            </div>

                            <div class="w-full">
                                <Card 
                                    img="https://static.vecteezy.com/system/resources/previews/036/223/422/non_2x/ai-generated-rows-of-young-corn-plants-growing-on-the-field-generative-ai-photo.jpg"
                                    title="VGA Fish Farm"
                                    review="91 Reviews"
                                    count="56"
                                    address="Ibeju Lekki, off Agugungi Road Lagos Nigeria"
                                    amount="56m"
                                    centerImage
                                />
                            </div>

                            <div class="w-full">
                                <Card 
                                    img="https://www.shutterstock.com/image-photo/agricultural-land-green-corn-farm-600nw-1934905055.jpg"
                                    title="VGA Fish Farm"
                                    review="91 Reviews"
                                    count="56"
                                    address="Ibeju Lekki, off Agugungi Road Lagos Nigeria"
                                    amount="56m"
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

            <div class="bg-[#FCFAF7] mx-310 md:mx-[120px] py-3 rounded-2xl mb-[94px] mt-10 md:mt-[141px]">
                <div class="text-center flex flex-col items-center">
                <div class="w-32 py-8">
                    <img src="/images/group.svg" class="w-full" alt="" />
                </div>
                <div>
                    <h3 class="pb-2 text-[#101828] text-xl font-medium">
                    Still have questions?
                    </h3>
                    <p class="text-[#667085] text-md md:text-lg font-normal pb-8">
                    Can’t find the answer you’re looking for? Please reach out to our
                    friendly team.
                    </p>
                    <button class="bg-[#FFA500] text-white rounded-lg py-[10px] px-3 mb-8">
                    Get in touch
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>