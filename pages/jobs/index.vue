<script setup lang="ts">
import ButtonInput from '~/components/inputs/ButtonInput.vue';
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
    router.push(`/jobs/${slug}`)
}

</script>

<template>
    <div class="w-full bg-cover bg-no-repeat bg-[url('/public/images/jobs/bg.png')]">
        <div class="mx-0 md:mx-[120px]">
            <Header type="other" />
        </div>

        <div class="px-10 md:px-[168px] pb-[100px] pt-[124px] md:pt-0">
            <div class="text-center">
                <h3 class="text-[30px] md:text-[60px] lg:text-[60px] text-[#FCFFF6]">Access <span class="text-[#FEE934]">Agricultural Job</span> to <br>better make your work easy</h3>
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
            <h3 class="text-[#261B0D] text-xl font-semibold">Agricultural Job</h3>
        </div>

        <div class="">
            <div class="border-b-[1px] border-[#F0F2F5] pb-[40px]">
                <TabItems :tabs="tabs">
                    <template v-slot:tab-0>
                        <div class="flex gap-6">
                            <div class="w-full lg:w-3/6">
                                <div class="rounded-2xl p-6 bg-white mb-6">
                                    <div
                                        class="w-[86px] h-[86px] rounded-3xl flex items-center justify-center bg-white mb-4"
                                    >
                                        <img src="../../public/images/agripreneur/agri.svg" alt="" />
                                    </div>

                                    <div class="mb-6">
                                        <h3 class="pb-2 text-[#261B0D] text-xl font-semibold">Farm Manager</h3>
                                        <p class="pb-2 text-[#261B0D] text-sm">Farm Manager  VGA Limited Lagos Nigeria</p>
                                        <span class="text-[#261B0D] text-sm font-medium">Lagos Nigeria</span>

                                        <ul class="pt-6 list-disc pl-5">
                                            <li>Plan and implement crop planting, irrigation, and harvesting schedules</li>
                                            <li>Implement sustainable farming practices to enhance soil health and reduce environmental impact.</li>
                                            <li>Oversee livestock care, including feeding, health monitoring, and breeding programs.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ButtonInput
                                            class="text-sm"
                                            bg="bg-[#F4FAF4]"
                                            text="text-[#2B612B]"
                                            :onClick="() => goTo('farm-manager')"
                                            >
                                            See Profile
                                            </ButtonInput>
                                    </div>
                                </div>

                                <div class="rounded-2xl p-6 bg-white mb-6">
                                    <div
                                        class="w-[86px] h-[86px] rounded-3xl flex items-center justify-center bg-white mb-4"
                                    >
                                        <img src="../../public/images/agripreneur/agri.svg" alt="" />
                                    </div>

                                    <div class="mb-6">
                                        <h3 class="pb-2 text-[#261B0D] text-xl font-semibold">Farm Manager</h3>
                                        <p class="pb-2 text-[#261B0D] text-sm">Farm Manager  VGA Limited Lagos Nigeria</p>
                                        <span class="text-[#261B0D] text-sm font-medium">Lagos Nigeria</span>

                                        <ul class="pt-6 list-disc pl-5">
                                            <li>Plan and implement crop planting, irrigation, and harvesting schedules</li>
                                            <li>Implement sustainable farming practices to enhance soil health and reduce environmental impact.</li>
                                            <li>Oversee livestock care, including feeding, health monitoring, and breeding programs.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ButtonInput
                                            class="text-sm"
                                            bg="bg-[#F4FAF4]"
                                            text="text-[#2B612B]"
                                            :onClick="console.log"
                                            >
                                            See Profile
                                            </ButtonInput>
                                    </div>
                                </div>

                                <div class="rounded-2xl p-6 bg-white mb-6">
                                    <div
                                        class="w-[86px] h-[86px] rounded-3xl flex items-center justify-center bg-white mb-4"
                                    >
                                        <img src="../../public/images/agripreneur/agri.svg" alt="" />
                                    </div>

                                    <div class="mb-6">
                                        <h3 class="pb-2 text-[#261B0D] text-xl font-semibold">Farm Manager</h3>
                                        <p class="pb-2 text-[#261B0D] text-sm">Farm Manager  VGA Limited Lagos Nigeria</p>
                                        <span class="text-[#261B0D] text-sm font-medium">Lagos Nigeria</span>

                                        <ul class="pt-6 list-disc pl-5">
                                            <li>Plan and implement crop planting, irrigation, and harvesting schedules</li>
                                            <li>Implement sustainable farming practices to enhance soil health and reduce environmental impact.</li>
                                            <li>Oversee livestock care, including feeding, health monitoring, and breeding programs.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ButtonInput
                                            class="text-sm"
                                            bg="bg-[#F4FAF4]"
                                            text="text-[#2B612B]"
                                            :onClick="console.log"
                                            >
                                            See Profile
                                        </ButtonInput>
                                    </div>
                                </div>
                            </div>

                            <div class="w-3/6 hidden lg:flex">
                                <div class="rounded-2xl p-6 bg-white mb-6">
                                    <div class="border-b-2">
                                        <div class="w-[86px] h-[86px] rounded-3xl flex items-center justify-center bg-white mb-4">
                                            <img src="../../public/images/agripreneur/agri.svg" alt="" />
                                        </div>

                                        <div class="mb-6">
                                            <h3 class="pb-2 text-[#261B0D] text-xl font-semibold">Farm Manager</h3>
                                            <p class="pb-2 text-[#261B0D] text-sm font-bold">Farm Manager  VGA Limited Lagos Nigeria</p>
                                            <span class="text-[#261B0D] text-sm font-bold">Lagos Nigeria</span>

                                            <div class="w-[150px] mt-4 pb-3">
                                                <ButtonInput
                                                    class="text-sm"
                                                    bg="bg-[#2B612B]"
                                                    text="text-white"
                                                    :onClick="() => goTo('farm-manager')"
                                                    >
                                                    View more
                                                </ButtonInput>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="py-6">
                                        <p>Job Summary</p> <br>
                                        <p>
                                            We are seeking an experienced and dedicated Farm Manager to oversee the day-to-day operations of our farm. The Farm Manager will be responsible for planning, coordinating, and executing all activities related to crop production, livestock management, and general farm maintenance. The ideal candidate will possess strong leadership skills, a deep understanding of agricultural practices, and a commitment to sustainable farming.
                                        </p>
                                    </div>
                                </div>
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