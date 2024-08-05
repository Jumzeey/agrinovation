<script setup lang="ts">
import Card from '~/components/card/Card.vue';
import CardTwo from '~/components/card/CardTwo.vue';
import ButtonInput from '~/components/inputs/ButtonInput.vue';
import SelectInput from '~/components/inputs/SelectInput.vue';
import TextInput from '~/components/inputs/TextInput.vue';
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
    router.push(`/events/${slug}`)
}

</script>

<template>
    <div class="w-full bg-cover bg-no-repeat bg-[url('/public/images/events/bg.png')]">
        <div class="mx-0 md:mx-[120px]">
            <Header type="other" />
        </div>

        <div class="px-10 md:px-[168px] pb-[230px] pt-[124px] md:pt-0">
            <div class="text-center flex flex-wrap">
                <h3 class="text-[40px] md:text-[60px] text-[#FCFFF6]">Be a part of <span class="text-[#FEE934]">Agric-centered</span> in Lagos State</h3>
            </div>

            <div class="mt-[32px]">
                <div class="w-full lg:w-[650px] m-auto">
                    <TextInput
                        :onChange="console.log"
                        label=""
                        class="w-full"
                        placeholder="Search for event..."
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="px-[40px] md:px-[120px] py-[77px] bg-[#F8FCF8]">
        <div class="mb-4">
            <h3 class="text-[#261B0D] text-xl font-semibold">Events</h3>
        </div>

        <div class="">
            <div class="border-b-[1px] border-[#F0F2F5] pb-[40px]">
                <TabItems :tabs="tabs">
                    <template v-slot:tab-0>
                        <div class="flex flex-wrap gap-5 flex-col lg:flex-row">
                            <div class="w-full lg:w-[32.2%] mb-6">
                                <CardTwo 
                                    img="https://jandevents.com/wp-content/uploads/jand-party-1600x900.jpg"
                                    title="Africa Fish farmer Summit"
                                    @move="goTo('africa-fish-farmer-summit')"
                                    date="15-July-2024"
                                    bg="bg-[#F4FAF4]"
                                    text="text-[#2B612B]"
                                    tags
                                />
                            </div>

                            <div class="w-full lg:w-[32.2%] mb-6">
                                <CardTwo 
                                    img="https://frenchrivieraparties.com/wp-content/uploads/2018/08/French-Riviera-Parties-1-1.jpg"
                                    title="Africa Fish farmer Summit"
                                    @move="goTo('vga-fish-farm')"
                                    date="15-July-2024"
                                    bg="bg-[#F4FAF4]"
                                    text="text-[#2B612B]"
                                    tags
                                />
                            </div>

                            <div class="w-full lg:w-[32.2%] mb-6">
                                <CardTwo 
                                    img="https://billetto.co.uk/blog/wp-content/uploads/2019/10/matty-adame-nLUb9GThIcg-unsplash-e1568377747157-1024x563.jpg"
                                    title="Africa Fish farmer Summit"
                                    @move="goTo('vga-fish-farm')"
                                    date="15-July-2024"
                                    bg="bg-[#F4FAF4]"
                                    text="text-[#2B612B]"
                                    tags
                                />
                            </div>

                            <div class="w-full lg:w-[32.2%] mb-6">
                                <CardTwo 
                                    img="https://www.moroccoworldnews.com/wp-content/uploads/2023/10/sara-2023-ocp-africa-determined-to-help-unlock-cote-divoires-agriculture-potential-800x533.jpg"
                                    title="Africa Fish farmer Summit"
                                    @move="goTo('vga-fish-farm')"
                                    date="15-July-2024"
                                    bg="bg-[#F4FAF4]"
                                    text="text-[#2B612B]"
                                    tags
                                />
                            </div>

                            <div class="w-full lg:w-[32.2%] mb-6">
                                <CardTwo 
                                    img="https://www.farmersguide.co.uk/wp-content/uploads/2020/10/LAMMA-004-HI-RES-1.jpg"
                                    title="Africa Fish farmer Summit"
                                    @move="goTo('vga-fish-farm')"
                                    date="15-July-2024"
                                    bg="bg-[#F4FAF4]"
                                    text="text-[#2B612B]"
                                    tags
                                />
                            </div>

                            <div class="w-full lg:w-[32.2%] mb-6">
                                <CardTwo 
                                    img="https://malonefm.com/wp-content/uploads/2022/11/lama-show.png"
                                    title="Africa Fish farmer Summit"
                                    @move="goTo('vga-fish-farm')"
                                    date="15-July-2024"
                                    bg="bg-[#F4FAF4]"
                                    text="text-[#2B612B]"
                                    tags
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