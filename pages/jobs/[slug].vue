<script setup lang="ts">
import Badge from "~/components/badge/Badge.vue";
import ButtonInput from "~/components/inputs/ButtonInput.vue";

const route = useRoute();
</script>

<template>
  <div class="bg-[#F8FCF8]">
    <div
      class="w-full bg-cover bg-no-repeat bg-[url('/public/images/agripreneur/single.svg')] relative h-[350px]"
    >
      <div class="mx-0 md:mx-[120px]">
        <Header type="other" />
      </div>
    </div>

    <div class="md:px-[120px]">
      <div
        class="px-10 bg-white flex flex-col lg:flex-row justify-between lg:items-center py-6 relative bottom-28 overflow-hidden rounded-t-lg"
      >
        <div>
          <div class="flex gap-6 items-center mb-4">
            <div class="w-[100px] h-[90px]">
              <img
                src="../../public/images/agripreneur/logo.png"
                class="object-contain"
                alt=""
              />
            </div>

            <div>
              <h3 class="pb-4 text-black text-lg font-semibold">
                Business Name
              </h3>
            </div>
          </div>

          <div class="rounded-lg">
            <h3 class="text-2xl font-semibold pb-4">Farm Business Manager</h3>
            <p class="text-[#828B6D] text-base font-normal">
              Lagos State, Ilaje Local Gov, Off Owode Idi iroko
            </p>

            <div class="gap-3 my-3 items-center hidden lg:flex">
              <Badge class="success">
                <template v-slot:content> Farming </template>
              </Badge>

              <Badge class="primary">
                <template v-slot:content> Aquatics </template>
              </Badge>

              <Badge class="warning">
                <template v-slot:content> Aquatics </template>
              </Badge>
            </div>
          </div>
        </div>

        <div>
            <div class="w-[150px] mt-4 pb-3">
                <ButtonInput
                    class="text-sm"
                    bg="bg-[#2B612B]"
                    text="text-white"
                    :onClick="console.log"
                    >
                    Apply
                </ButtonInput>
            </div>
        </div>
      </div>
    </div>

    <div
      class="mx-0 md:mx-[120px] lg:mx-[120px] bg-white relative bottom-[96px]  px-10 rounded-t-lg mb-[82px]"
    >
      <div class="py-6">
        <p>Job Summary</p>
        <br />
        <p>
          We are seeking an experienced and dedicated Farm Manager to oversee
          the day-to-day operations of our farm. The Farm Manager will be
          responsible for planning, coordinating, and executing all activities
          related to crop production, livestock management, and general farm
          maintenance. The ideal candidate will possess strong leadership
          skills, a deep understanding of agricultural practices, and a
          commitment to sustainable farming.
        </p>

        <p>
          We are seeking an experienced and dedicated Farm Manager to oversee
          the day-to-day operations of our farm. The Farm Manager will be
          responsible for planning, coordinating, and executing all activities
          related to crop production, livestock management, and general farm
          maintenance. The ideal candidate will possess strong leadership
          skills, a deep understanding of agricultural practices, and a
          commitment to sustainable farming. We are seeking an experienced and dedicated Farm Manager to oversee
          the day-to-day operations of our farm. The Farm Manager will be
          responsible for planning, coordinating, and executing all activities
          related to crop production, livestock management, and general farm
          maintenance. The ideal candidate will possess strong leadership
          skills, a deep understanding of agricultural practices, and a
          commitment to sustainable farming. We are seeking an experienced and dedicated Farm Manager to oversee
          the day-to-day operations of our farm. The Farm Manager will be
          responsible for planning, coordinating, and executing all activities
          related to crop production, livestock management, and general farm
          maintenance. The ideal candidate will possess strong leadership
          skills, a deep understanding of agricultural practices, and a
          commitment to sustainable farming. We are seeking an experienced and dedicated Farm Manager to oversee
          the day-to-day operations of our farm. The Farm Manager will be
          responsible for planning, coordinating, and executing all activities
          related to crop production, livestock management, and general farm
          maintenance. The ideal candidate will possess strong leadership
          skills, a deep understanding of agricultural practices, and a
          commitment to sustainable farming.
        </p>
      </div>
    </div>

    <div class="mx-0 md:mx-[120px] lg:mx-[120px] relative bottom-[96px]">
        <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
            <div>
                <h3 class="text-[#261B0D] text-2xl font-semibold">Similar Jobs</h3>
            </div>

            <div>
                <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/">View All</NuxtLink>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
            <div class="rounded-2xl p-6 bg-white mb-6">
                <div
                    class="w-[86px] h-[86px] rounded-3xl flex items-center justify-center bg-white mb-4"
                >
                    <img src="../../public/images/agripreneur/agri.svg" alt="" />
                </div>

                <div class="mb-3">
                    <h3 class="pb-2 text-[#261B0D] text-xl font-semibold">Farm Manager</h3>
                    <p class="pb-2 text-[#261B0D] text-sm">Farm Manager  VGA Limited Lagos Nigeria</p>
                    <span class="text-[#261B0D] text-sm font-medium">Lagos Nigeria</span>
                    <div class="flex gap-3 mt-2 items-center">
                        <Badge class="success">
                            <template v-slot:content> Farming </template>
                        </Badge>

                        <Badge class="primary">
                            <template v-slot:content> Aquatics </template>
                        </Badge>

                        <Badge class="warning">
                            <template v-slot:content> Aquatics </template>
                        </Badge>
                    </div>

                    <div>
                        <p class="text-[#261B0D] text-sm font-medium">15-July-2024</p>
                    </div>
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

                <div class="mb-3">
                    <h3 class="pb-2 text-[#261B0D] text-xl font-semibold">Farm Manager</h3>
                    <p class="pb-2 text-[#261B0D] text-sm">Farm Manager  VGA Limited Lagos Nigeria</p>
                    <span class="text-[#261B0D] text-sm font-medium">Lagos Nigeria</span>
                    <div class="flex gap-3 mt-2 items-center">
                        <Badge class="success">
                            <template v-slot:content> Farming </template>
                        </Badge>

                        <Badge class="primary">
                            <template v-slot:content> Aquatics </template>
                        </Badge>

                        <Badge class="warning">
                            <template v-slot:content> Aquatics </template>
                        </Badge>
                    </div>

                    <div>
                        <p class="text-[#261B0D] text-sm font-medium">15-July-2024</p>
                    </div>
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

                <div class="mb-3">
                    <h3 class="pb-2 text-[#261B0D] text-xl font-semibold">Farm Manager</h3>
                    <p class="pb-2 text-[#261B0D] text-sm">Farm Manager  VGA Limited Lagos Nigeria</p>
                    <span class="text-[#261B0D] text-sm font-medium">Lagos Nigeria</span>
                    <div class="flex gap-3 mt-2 items-center">
                        <Badge class="success">
                            <template v-slot:content> Farming </template>
                        </Badge>

                        <Badge class="primary">
                            <template v-slot:content> Aquatics </template>
                        </Badge>

                        <Badge class="warning">
                            <template v-slot:content> Aquatics </template>
                        </Badge>
                    </div>

                    <div>
                        <p class="text-[#261B0D] text-sm font-medium">15-July-2024</p>
                    </div>
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

                <div class="mb-3">
                    <h3 class="pb-2 text-[#261B0D] text-xl font-semibold">Farm Manager</h3>
                    <p class="pb-2 text-[#261B0D] text-sm">Farm Manager  VGA Limited Lagos Nigeria</p>
                    <span class="text-[#261B0D] text-sm font-medium">Lagos Nigeria</span>
                    <div class="flex gap-3 mt-2 items-center">
                        <Badge class="success">
                            <template v-slot:content> Farming </template>
                        </Badge>

                        <Badge class="primary">
                            <template v-slot:content> Aquatics </template>
                        </Badge>

                        <Badge class="warning">
                            <template v-slot:content> Aquatics </template>
                        </Badge>
                    </div>

                    <div>
                        <p class="text-[#261B0D] text-sm font-medium">15-July-2024</p>
                    </div>
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
    </div>
  </div>
</template>
