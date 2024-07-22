<script setup lang="ts">
import ButtonInput from "~/components/inputs/ButtonInput.vue";

const route = useRoute();
</script>

<template>
  <div class="bg-[#F8FCF8]">
    <div
      class="w-full bg-cover bg-no-repeat bg-[url('/public/images/agripreneur/single.svg')] relative h-[350px]"
    >
      <div class="px-0 md:px-[120px]">
        <Header type="other" />
      </div>
    </div>
    
    <div class="md:px-[120px]">
      <div
        class="px-10 bg-white flex justify-between py-6 relative bottom-28 overflow-hidden rounded-t-lg"
      >
        <div>
          <div class="flex gap-6">
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
                  Type of Investor
                </p>
              </div>
              <div class="flex gap-6">
                <div class="border border-[#CCCCCC] rounded-lg p-1">
                  <h3 class="text-[#202B08] text-xl font-semibold">2024</h3>
                  <p class="text-[#707663] text-base font-normal">
                    Founding Year
                  </p>
                </div>

                <div class="border border-[#CCCCCC] rounded-lg p-1">
                  <h3 class="text-[#202B08] text-xl font-semibold">40</h3>
                  <p class="text-[#707663] text-base font-normal">Work Force</p>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-lg">
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

        <div></div>
      </div>
    </div>

    <div class="mx-10 md:mx-[120px] bg-white relative bottom-[96px] overflow-hidden px-10 rounded-t-lg">
      <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
        <div>
          <h3 class="text-black text-2xl font-medium">About Investor</h3>
        </div>

        <div>
          <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/">View All</NuxtLink>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="w-[70%]">
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
                  <img src="../../public/images/award.svg" alt="">
                </div>
                <p class="text-sm font-normal">Founding Stage: NA</p>
              </div>

              <div class="flex items-center gap-3 mb-4">
                <div>
                  <img src="../../public/images/award.svg" alt="">
                </div>
                <p class="text-sm font-normal">Founding Stage: NA</p>
              </div>

              <div class="flex items-center gap-3 mb-4">
                <div>
                  <img src="../../public/images/award.svg" alt="">
                </div>
                <p class="text-sm font-normal">Founding Stage: NA</p>
              </div>
            </div>
            
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div>
                  <img src="../../public/images/award.svg" alt="">
                </div>
                <p class="text-sm font-normal">Founding Stage: NA</p>
              </div>

              <div class="flex items-center gap-3 mb-4">
                <div>
                  <img src="../../public/images/award.svg" alt="">
                </div>
                <p class="text-sm font-normal">Founding Stage: NA</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="mb-4">
            <ButtonInput :onClick="console.log"> Contact Investor </ButtonInput>
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

    <div class="mx-10 md:mx-[120px] bg-white relative bottom-[80px] overflow-hidden px-10 rounded-t-lg">
      <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
        <div>
          <h3 class="text-black text-2xl font-medium">Team</h3>
        </div>

        <div>
          <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/">View All</NuxtLink>
        </div>
      </div>

      <div class="">
        <div class="flex gap-7 mb-7">
          <div>
            <div class="w-[214px]">
              <img src="../../public/images/team2.png" class="object-contain" alt="">
              <h3 class="text-[#101828] text-xl font-semibold pb-1 pt-4">Olivia Rhye</h3>
              <p class="text-[#76BD21] text-lg font-normal">Farm Coordinators</p>
            </div>
          </div>

          <div>
            <div class="w-[214px]">
              <img src="../../public/images/team1.png" class="object-contain" alt="">
              <h3 class="text-[#101828] text-xl font-semibold pb-1 pt-4">Olivia Rhye</h3>
              <p class="text-[#76BD21] text-lg font-normal">Farm Coordinators</p>
            </div>
          </div>

          <div>
            <div class="w-[214px]">
              <img src="../../public/images/team.png" class="object-contain" alt="">
              <h3 class="text-[#101828] text-xl font-semibold pb-1 pt-4">Olivia Rhye</h3>
              <p class="text-[#76BD21] text-lg font-normal">Farm Coordinators</p>
            </div>
          </div>

          <div>
            <div class="w-[214px]">
              <img src="../../public/images/team1.png" class="object-contain" alt="">
              <h3 class="text-[#101828] text-xl font-semibold pb-1 pt-4">Olivia Rhye</h3>
              <p class="text-[#76BD21] text-lg font-normal">Farm Coordinators</p>
            </div>
          </div>

          <div>
            <div class="w-[214px]">
              <img src="../../public/images/team2.png" class="object-contain" alt="">
              <h3 class="text-[#101828] text-xl font-semibold pb-1 pt-4">Olivia Rhye</h3>
              <p class="text-[#76BD21] text-lg font-normal">Farm Coordinators</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-10 md:mx-[120px] bg-white relative bottom-[64px] overflow-hidden px-10 rounded-t-lg">
      <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
        <div>
          <h3 class="text-black text-2xl font-medium">Gallery</h3>
        </div>

        <div>
          <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/">View All</NuxtLink>
        </div>
      </div>

      <div class="">
        <div class="grid grid-cols-3 gap-4 mb-7">
          
            <div class="w-[full]">
              <img src="../../public/images/media/media2.png" class="rounded-2xl" alt="">
            </div>
          
            <div class="w-full">
              <img src="../../public/images/media/media2.png" class="rounded-2xl" alt="">
            </div>
          
            <div class="w-full">
              <img src="../../public/images/media/media2.png" class="rounded-2xl" alt="">
            </div>
          
            <div class="w-full">
              <img src="../../public/images/media/media2.png" class="rounded-2xl" alt="">
            </div>
          
            <div class="w-full">
              <img src="../../public/images/media/media2.png" class="rounded-2xl" alt="">
            </div>
          
            <div class="w-full">
              <img src="../../public/images/media/media2.png" class="rounded-2xl" alt="">
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
        <div class="grid grid-cols-4 gap-4 mb-7">
          
          <div class="w-[full] rounded-2xl shadow py-[23px] px-4">
            <img src="../../public/images/agripreneur/image.svg" class="rounded-2xl pb-4" alt="">

            <h3 class="text-[#261B0D] text-xl pb-4">Farm Manager</h3>
            <p class="text-[#261B0D] text-sm pb-4">Farm Manager  VGA Limited Lagos Nigeria</p>
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
            <img src="../../public/images/agripreneur/image.svg" class="rounded-2xl pb-4" alt="">

            <h3 class="text-[#261B0D] text-xl pb-4">Farm Manager</h3>
            <p class="text-[#261B0D] text-sm pb-4">Farm Manager  VGA Limited Lagos Nigeria</p>
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
            <img src="../../public/images/agripreneur/image.svg" class="rounded-2xl pb-4" alt="">

            <h3 class="text-[#261B0D] text-xl pb-4">Farm Manager</h3>
            <p class="text-[#261B0D] text-sm pb-4">Farm Manager  VGA Limited Lagos Nigeria</p>
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
            <img src="../../public/images/agripreneur/image.svg" class="rounded-2xl pb-4" alt="">

            <h3 class="text-[#261B0D] text-xl pb-4">Farm Manager</h3>
            <p class="text-[#261B0D] text-sm pb-4">Farm Manager  VGA Limited Lagos Nigeria</p>
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
          <h3 class="text-black text-2xl font-medium">News</h3>
        </div>

        <div>
          <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/">View All</NuxtLink>
        </div>
      </div>

      <div class="">
        <div class="grid grid-cols-3 gap-4 mb-7">
            <div class="shadow-md px-6">
                <div class="flex items-center">
                    <img src="/images/blog.png" class="mb-6 w-full" alt="Blog image" />
                </div>
                <div class="">
                    <h3 class="text-[#101828] text-2xl font-semibold pb-3">
                    How Lagos State is improving Food supplies
                    </h3>
                    <p class="text-[#667085] text-sm font-medium text-wrap">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                    </p>

                    <div class="text-sm my-3">
                        <span class="text-[#667085]">Read more</span>
                    </div>
                </div>
            </div>

            <div class="shadow-md py-3 px-6">
                <div class="flex items-center">
                    <img src="/images/blog.png" class="mb-6 w-full" alt="Blog image" />
                </div>
                <div class="">
                    <h3 class="text-[#101828] text-2xl font-semibold pb-3">
                    How Lagos State is improving Food supplies
                    </h3>
                    <p class="text-[#667085] text-sm font-medium text-wrap">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                    </p>
                    <div class="text-sm my-3">
                        <span class="text-[#667085]">Read more</span>
                    </div>
                </div>
            </div>

            <div class="shadow-md py-3 px-6">
                <div class="flex items-center">
                    <img src="/images/blog.png" class="mb-6 w-full" alt="Blog image" />
                </div>
                <div class="">
                    <h3 class="text-[#101828] text-2xl font-semibold pb-3">
                    How Lagos State is improving Food supplies
                    </h3>
                    <p class="text-[#667085] text-sm font-medium text-wrap">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                    </p>
                    <div class="text-sm my-3">
                        <span class="text-[#667085]">Read more</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>

    <div class="mx-10 md:mx-[120px] bg-white relative bottom-[16px] overflow-hidden px-10 rounded-t-lg mt-5">
      <div class="flex flex-col items-center py-[96px]">
        <h3 class="pb-5 text-[#17180A] text-4xl font-semibold">Reach out to us</h3>
        <p class="text-[#667085] text-xl font-normal">Reach out to us through our social media platform</p>

        <div class="flex mt-[36px] gap-4">
            <div>
                <ButtonInput
                    class="text-sm w-full shadow border rounded-[15.36px]"
                    bg="bg-[#fff]"
                    text="text-[#475467]"
                    :onClick="console.log"
                >
                    Learn more
                </ButtonInput>
            </div>

            <div>
                <ButtonInput
                    class="text-sm w-full shadow border rounded-[15.36px]"
                    bg="bg-[#275927]"
                    text="text-[#fff]"
                    :onClick="console.log"
                >
                    Send a mail
                </ButtonInput>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
