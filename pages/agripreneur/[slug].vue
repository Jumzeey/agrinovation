<script setup lang="ts">
import MaterialIcon from "~/components/icon/MaterialIcon.vue";
import ButtonInput from "~/components/inputs/ButtonInput.vue";
import ResearchBar from "~/components/progressbar/ResearchBar.vue";

const route = useRoute();

const progress = ref(20)
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
        class="px-10 bg-white flex justify-between py-6 relative bottom-28 overflow-hidden rounded-t-lg"
      >
        <div>
          <div class="flex gap-6 lg:flex-row flex-col">
            <div class="w-[175px] h-[165px]">
              <img
                src="../../public/images/agripreneur/logo.png"
                class="object-contain"
                alt=""
              />
            </div>

            <div>
              <div class="mb-5">
                <h3 class="pb-4 text-black text-2xl font-semibold">
                  Business Name
                </h3>
                <p class="text-[#CCCCCC] text-base font-normal">
                  Type of Agriprenuer
                </p>
              </div>
              <div class="flex gap-5 w-[300px] lg:w-full mb-[29px]">
                <div class="border border-[#CCCCCC] rounded-lg p-1 w-full">
                  <h3 class="text-[#202B08] text-xl font-semibold">2024</h3>
                  <p class="text-[#707663] text-sm lg:text-base font-normal">
                    Founding Year
                  </p>
                </div>

                <div class="border border-[#CCCCCC] rounded-lg p-1 w-full">
                  <h3 class="text-[#202B08] text-xl font-semibold">40</h3>
                  <p class="text-[#707663] text-sm lg:text-base font-normal">Work Force</p>
                </div>
              </div>

              <div class="">
                <div class="mb-2">
                  <ButtonInput :onClick="console.log"> Contact Agripreneur </ButtonInput>
                </div>

                <div class="mb-2">
                  <ButtonInput bg="bg-[#EDF7ED]" text="text-[#275927]" :onClick="console.log"> Claim Profile </ButtonInput>
                </div>

                <div>
                  <ButtonInput bg="bg-[#fff] border" text="text-[#275927]" :onClick="console.log"> Add Favorite </ButtonInput>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-lg hidden lg:flex">
            <nav class="mt-3 rounded-lg">
              <ul class="flex border border-[#E4E7EC] rounded-lg">
                <li class="bg-[#E4E7EC] px-4 py-[10px] text-[#98A2B3] text-sm">
                  <NuxtLink to="/">About</NuxtLink>
                </li>
                <li class="px-4 py-[10px] text-[#98A2B3] text-sm">
                  <NuxtLink to="/">Team</NuxtLink>
                </li>
                <li class="px-4 py-[10px] text-[#98A2B3] text-sm">
                  <NuxtLink to="/">Media</NuxtLink>
                </li>
                <li class="px-4 py-[10px] text-[#98A2B3] text-sm">
                  <NuxtLink to="/">Job Opening</NuxtLink>
                </li>
                <li class="px-4 py-[10px] text-[#98A2B3] text-sm">
                  <NuxtLink to="/">Contact</NuxtLink>
                </li>
                <li class="px-4 py-[10px] text-[#98A2B3] text-sm">
                  <NuxtLink to="/">Market Place</NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="w-[300px] hidden lg:flex">
          <div class="mb-[60px] mt-[22px]">
            <div class="flex gap-3 my-3 flex-wrap">
              <Badge class="success">
                <template v-slot:content> Farming </template>
              </Badge>

              <Badge class="primary">
                <template v-slot:content> Aquatics </template>
              </Badge>

              <Badge class="warning">
                <template v-slot:content> Aquatics </template>
              </Badge>

              <Badge class="warning">
                <template v-slot:content> Aquatics </template>
              </Badge>

              <Badge class="warning">
                <template v-slot:content> Aquatics </template>
              </Badge>
            </div>
          </div>

          <div class="">
            <p class="pb-3 text-[#CCCCCC] text-sm">Profile Completion</p>
            <ResearchBar :progress="progress" />
          </div>
      </div>
      </div>
    </div>

    <div class="mx-0 lg:mx-10 md:mx-[120px] bg-white relative bottom-[96px] overflow-hidden px-10 rounded-t-lg">
      <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
        <div>
          <h3 class="text-black text-xl lg:text-2xl font-medium">About VGA Agricprenuer</h3>
        </div>

        <div class="hidden lg:flex">
          <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/">View All</NuxtLink>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="w-full lg:w-[70%]">
          <div class="mb-[71px]">
            <p class="text-[#261B0D] font-normal">
              Agricorp is a Nigerian company that provides global exports to
              clients of ginger sourced in key local trading markets in Nigeria.
              They currently have an origination processing facility in the
              country and have invested in integrated spices processing
              equipment. The technology meets both international and local
              standards. They aim to put Nigeria on the radar for the export of
              ginger, turmeric, garlic and other indigenous spices and agro
              products. Agricorp also provides a youth entrepreneurship program
              for individuals wanting to learn how to start a poultry business.
            </p>
          </div>

          <div class="flex gap-7">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div>
                  <img src="../../public/images/award.svg" alt="">
                </div>
                <p class="text-sm font-normal">Founding Stage: NA</p>
              </div>

              <div class="flex items-center gap-3 mb-4">
                <div>
                  <img src="../../public/images/agripreneur/locate.svg" alt="">
                </div>
                <p class="text-sm font-normal">Ibeju Lekki, off Agugungi Road Lagos Nigeria</p>
              </div>

              <div class="flex items-center gap-3 mb-4">
                <div>
                  <img src="../../public/images/award.svg" alt="">
                </div>
                <p class="text-sm font-normal">Average Annual Revenue: Not Avaliable</p>
              </div>

              <div class="flex items-center gap-3 mb-4">
                <div>
                  <img src="../../public/images/award.svg" alt="">
                </div>
                <p class="text-sm font-normal">Produce Information: Fish Farming</p>
              </div>
            </div>
            
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div>
                  <img src="../../public/images/award.svg" alt="">
                </div>
                <p class="text-sm font-normal">Available for Acquisition</p>
              </div>

              <div class="flex items-center gap-3 mb-4">
                <div>
                  <img src="../../public/images/award.svg" alt="">
                </div>
                <p class="text-sm font-normal">Available for Merger</p>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden md:flex lg:flex md:flex-col lg:flex-col">
          <div class="mb-4">
            <ButtonInput :onClick="console.log"> Contact Agripreneur </ButtonInput>
          </div>

          <div class="mb-4">
            <ButtonInput bg="bg-[#EDF7ED]" text="text-[#275927]" :onClick="console.log"> Claim Profile </ButtonInput>
          </div>

          <div>
            <ButtonInput bg="bg-[#fff] border" text="text-[#275927]" :onClick="console.log"> Add Favorite </ButtonInput>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-0 lg:mx-10 md:mx-[120px] bg-white relative bottom-[80px] overflow-hidden px-10 rounded-t-lg">
      <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
        <div>
          <h3 class="text-black text-2xl font-medium">Team</h3>
        </div>

        <div>
          <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/">View All</NuxtLink>
        </div>
      </div>

      <div class="">
        <div class="flex gap-7 mb-7 flex-col lg:flex-row">
          <div>
            <div class="w-full lg:w-[214px]">
              <img src="../../public/images/team2.png" class="w-full" alt="">
              <h3 class="text-[#101828] text-xl font-semibold pb-1 pt-4">Olivia Rhye</h3>
              <p class="text-[#76BD21] text-lg font-normal">Farm Coordinators</p>
            </div>
          </div>

          <div>
            <div class="w-full lg:w-[214px]">
              <img src="../../public/images/team1.png" class="w-full" alt="">
              <h3 class="text-[#101828] text-xl font-semibold pb-1 pt-4">Olivia Rhye</h3>
              <p class="text-[#76BD21] text-lg font-normal">Farm Coordinators</p>
            </div>
          </div>

          <div>
            <div class="w-full lg:w-[214px]">
              <img src="../../public/images/team.png" class="w-full" alt="">
              <h3 class="text-[#101828] text-xl font-semibold pb-1 pt-4">Olivia Rhye</h3>
              <p class="text-[#76BD21] text-lg font-normal">Farm Coordinators</p>
            </div>
          </div>

          <div>
            <div class="w-full lg:w-[214px]">
              <img src="../../public/images/team1.png" class="w-full" alt="">
              <h3 class="text-[#101828] text-xl font-semibold pb-1 pt-4">Olivia Rhye</h3>
              <p class="text-[#76BD21] text-lg font-normal">Farm Coordinators</p>
            </div>
          </div>

          <div>
            <div class="w-full lg:w-[214px]">
              <img src="../../public/images/team2.png" class="w-full" alt="">
              <h3 class="text-[#101828] text-xl font-semibold pb-1 pt-4">Olivia Rhye</h3>
              <p class="text-[#76BD21] text-lg font-normal">Farm Coordinators</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-0 lg:mx-10 md:mx-[120px] bg-white relative bottom-[64px] overflow-hidden px-10 rounded-t-lg">
      <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
        <div>
          <h3 class="text-black text-2xl font-medium">Media</h3>
        </div>

        <div>
          <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/">View All</NuxtLink>
        </div>
      </div>

      <div class="p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-7">
            <div class="w-full">
                <img src="../../public/images/media/media2.png" class="rounded-2xl w-full h-auto" alt="">
            </div>
            <div class="w-full">
                <img src="../../public/images/media/media2.png" class="rounded-2xl w-full h-auto" alt="">
            </div>
            <div class="w-full">
                <img src="../../public/images/media/media2.png" class="rounded-2xl w-full h-auto" alt="">
            </div>
            <div class="w-full">
                <img src="../../public/images/media/media2.png" class="rounded-2xl w-full h-auto" alt="">
            </div>
            <div class="w-full">
                <img src="../../public/images/media/media2.png" class="rounded-2xl w-full h-auto" alt="">
            </div>
            <div class="w-full">
                <img src="../../public/images/media/media2.png" class="rounded-2xl w-full h-auto" alt="">
            </div>
        </div>
    </div>

    </div>

    <div class="mx-10 md:mx-[120px] bg-white relative bottom-[48px] overflow-hidden px-10 rounded-t-lg">
      <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
        <div>
          <h3 class="text-black text-2xl font-medium">Job Opening</h3>
        </div>

        <div>
          <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/">View All</NuxtLink>
        </div>
      </div>

      <div class="">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
          
          <div class="w-[full] rounded-2xl shadow py-[23px] px-4">
            <img src="../../public/images/agripreneur/image.svg" class="rounded-2xl lg:pb-4" alt="">
            <h3 class="text-[#261B0D] text-xl lg:pb-4 pb-2">Farm Manager</h3>
            <p class="text-[#261B0D] text-sm lg:pb-4 pb-2">Farm Manager  VGA Limited Lagos Nigeria</p>
            <span class="text-[#261B0D] text-sm">15-July-2024</span>

            <div class="pt-4 w-full">
              <ButtonInput
                class="text-sm w-full"
                bg="bg-[#EDF7ED]"
                text="text-[#275927]"
                :onClick="console.log"
              >
                See Profile
              </ButtonInput>
            </div>
          </div>

          <div class="w-[full] rounded-2xl shadow py-[23px] px-4">
            <img src="../../public/images/agripreneur/image.svg" class="rounded-2xl lg:pb-4" alt="">

            <h3 class="text-[#261B0D] text-xl lg:pb-4 pb-2">Farm Manager</h3>
            <p class="text-[#261B0D] text-sm lg:pb-4 pb-2">Farm Manager  VGA Limited Lagos Nigeria</p>
            <span class="text-[#261B0D] text-sm">15-July-2024</span>

            <div class="pt-4 w-full">
              <ButtonInput
                class="text-sm w-full"
                bg="bg-[#EDF7ED]"
                text="text-[#275927]"
                :onClick="console.log"
              >
                See Profile
              </ButtonInput>
            </div>
          </div>

          <div class="w-[full] rounded-2xl shadow py-[23px] px-4">
            <img src="../../public/images/agripreneur/image.svg" class="rounded-2xl lg:pb-4" alt="">

            <h3 class="text-[#261B0D] text-xl lg:pb-4 pb-2">Farm Manager</h3>
            <p class="text-[#261B0D] text-sm lg:pb-4 pb-2">Farm Manager  VGA Limited Lagos Nigeria</p>
            <span class="text-[#261B0D] text-sm">15-July-2024</span>

            <div class="pt-4 w-full">
              <ButtonInput
                class="text-sm w-full"
                bg="bg-[#EDF7ED]"
                text="text-[#275927]"
                :onClick="console.log"
              >
                See Profile
              </ButtonInput>
            </div>
          </div>

          <div class="w-[full] rounded-2xl shadow py-[23px] px-4">
            <img src="../../public/images/agripreneur/image.svg" class="rounded-2xl lg:pb-4" alt="">

            <h3 class="text-[#261B0D] text-xl lg:pb-4 pb-2">Farm Manager</h3>
            <p class="text-[#261B0D] text-sm lg:pb-4 pb-2">Farm Manager  VGA Limited Lagos Nigeria</p>
            <span class="text-[#261B0D] text-sm">15-July-2024</span>

            <div class="pt-4 w-full">
              <ButtonInput
                class="text-sm w-full"
                bg="bg-[#EDF7ED]"
                text="text-[#275927]"
                :onClick="console.log"
              >
                See Profile
              </ButtonInput>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-10 md:mx-[120px] bg-white relative bottom-[32px] overflow-hidden px-10 rounded-t-lg">
      <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
        <div>
          <h3 class="text-black text-2xl font-medium">Market Places</h3>
        </div>

        <div>
          <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/">View All</NuxtLink>
        </div>
      </div>

      <div class="">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
          
          <div class="rounded-2xl shadow">
            <img src="../../public/images/agripreneur/market.png" class="rounded-2xl lg:pb-4 w-full" alt="">

            <div class="px-[23px] pt-[10px] pb-[23px]">
              <div class="flex justify-between items-center mb-1">
                <h3 class="text-[#261B0D] text-xl">Red Tomatoes</h3>

                <p>$95.00</p>
              </div>
              <p class="text-[#261B0D] text-xs lg:pb-4 pb-2">Red Silettos</p>

              <div class="pt-2 w-[150px]">
                <ButtonInput
                  class="text-sm w-full border rounded-[40px]"
                  bg="bg-[#fff]"
                  text="text-[#475467]"
                  :onClick="console.log"
                >
                  Contact seller
                </ButtonInput>
              </div>
            </div>
          </div>

          <div class="rounded-2xl shadow">
            <img src="../../public/images/agripreneur/market.png" class="rounded-2xl lg:pb-4 w-full" alt="">

            <div class="px-[23px] pt-[10px] pb-[23px]">
              <div class="flex justify-between items-center mb-1">
                <h3 class="text-[#261B0D] text-xl">Red Tomatoes</h3>

                <p>$95.00</p>
              </div>
              <p class="text-[#261B0D] text-xs lg:pb-4 pb-2">Red Silettos</p>

              <div class="pt-2 w-[150px]">
                <ButtonInput
                  class="text-sm w-full border rounded-[40px]"
                  bg="bg-[#fff]"
                  text="text-[#475467]"
                  :onClick="console.log"
                >
                  Contact seller
                </ButtonInput>
              </div>
            </div>
          </div>

          <div class="rounded-2xl shadow">
            <img src="../../public/images/agripreneur/market.png" class="rounded-2xl lg:pb-4 w-full" alt="">

            <div class="px-[23px] pt-[10px] pb-[23px]">
              <div class="flex justify-between items-center mb-1">
                <h3 class="text-[#261B0D] text-xl">Red Tomatoes</h3>

                <p>$95.00</p>
              </div>
              <p class="text-[#261B0D] text-xs lg:pb-4 pb-2">Red Silettos</p>

              <div class="pt-2 w-[150px]">
                <ButtonInput
                  class="text-sm w-full border rounded-[40px]"
                  bg="bg-[#fff]"
                  text="text-[#475467]"
                  :onClick="console.log"
                >
                  Contact seller
                </ButtonInput>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-10 md:mx-[120px] bg-white relative bottom-[16px] overflow-hidden px-10 rounded-t-lg">
      <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
        <div>
          <h3 class="text-black text-2xl font-medium">Contact</h3>
        </div>
      </div>

      <div class="">
        <div class="flex flex-col lg:flex-row justify-between gap-4 mb-7">
          
          <div class="rounded-2xl w-full lg:w-[70%]">
            <img src="../../public/images/agripreneur/map.png" class="rounded-2xl" alt="">
          </div>

          <div class="w-full lg:w-[30%]">
            <div class="mb-[30px]">
              <ButtonInput
                  class="text-sm w-full border rounded-[15.36px]"
                  bg="bg-[#275927]"
                  text="text-[#fff]"
                  :onClick="console.log"
                >
                  Send mail
                </ButtonInput>
            </div>

            <div class="flex items-center gap-4 border-b-2 py-2">
              <div>
                <MaterialIcon
                  outline
                  icon="location_on"
                  class="text-[#275927]"
                />
              </div>
              <div>
                <p class="text-[#1D2939] text-sm">Ibeju Lekki, off Agugungi Road Lagos Nigeria</p>
              </div>
            </div>

            <div class="flex items-center gap-4 border-b-2 py-2">
              <div>
                <MaterialIcon
                  outline
                  icon="mail"
                  class="text-[#275927]"
                />
              </div>
              <div>
                <p class="text-[#1D2939] text-sm">emailagriculture@gmail.com</p>
              </div>
            </div>

            <div class="flex items-center gap-4 border-b-2 py-2">
              <div>
                <MaterialIcon
                  outline
                  icon="call"
                  class="text-[#275927]"
                />
              </div>
              <div>
                <p class="text-[#1D2939] text-sm">08067825638899</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
