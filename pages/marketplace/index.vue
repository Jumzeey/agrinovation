<script setup lang="ts">
import Card from "~/components/card/Card.vue";
import ButtonInput from "~/components/inputs/ButtonInput.vue";
import SelectInput from "~/components/inputs/SelectInput.vue";
import TextInput from "~/components/inputs/TextInput.vue";
import Pagination from "~/components/list/Pagination.vue";
import TabItems from "~/components/tab/TabItems.vue";

const location = ref([
  {
    id: 1,
    name: "Lekki Ajah",
  },
]);

const tabs = [
  {
    name: "All Categories",
  },
  {
    name: "Fish farmer",
  },
  {
    name: "Crop farmer",
  },
  {
    name: "Fruit farmer",
  },
];

const router = useRouter();

const goTo = (slug: any) => {
  router.push(`/marketplace/${slug}`);
};
</script>

<template>
  <div
    class="w-full bg-cover bg-no-repeat bg-[url('/public/images/marketplace/bg.png')]"
  >
    <div class="mx-0 md:mx-[120px]">
      <Header type="other" />
    </div>

    <div class="px-10 md:px-[168px] pb-[100px] pt-[124px] md:pt-0">
      <div class="text-center">
        <h3 class="text-[40px] md:text-[60px] text-[#FCFFF6]">
          Up to 60% of all items in <br />
          our <span class="text-[#FEE934]">Market Places</span>
        </h3>
      </div>

      <div class="mt-[32px]">
        <div class="w-[650px] m-auto">
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
      <h3 class="text-[#261B0D] text-xl font-semibold">Market Places</h3>
    </div>

    <div class="">
      <div class="border-b-[1px] border-[#F0F2F5] pb-[40px]">
        <TabItems :tabs="tabs">
          <template v-slot:tab-0>
            <div class="grid grid-cols-4 gap-4 mb-7">
              <div class="rounded-2xl bg-white">
                <img
                  src="../../public/images/agripreneur/market.png"
                  class="rounded-2xl pb-4 w-full"
                  alt=""
                />

                <div class="px-[23px] pt-[10px] pb-[23px]">
                  <div class="flex justify-between items-center mb-1">
                    <h3 class="text-[#261B0D] text-xl">Red Tomatoes</h3>

                    <p>$95.00</p>
                  </div>
                  <p class="text-[#261B0D] text-xs pb-4">Red Silettos</p>

                  <div class="pt-4 w-[150px]">
                    <ButtonInput
                      class="text-sm w-full border rounded-[40px]"
                      bg="bg-[#fff]"
                      text="text-[#475467]"
                      :onClick="() => goTo('red-tomatoes')"
                    >
                      Contact seller
                    </ButtonInput>
                  </div>
                </div>
              </div>

              <div class="rounded-2xl bg-white">
                <img
                  src="../../public/images/agripreneur/market.png"
                  class="rounded-2xl pb-4 w-full"
                  alt=""
                />

                <div class="px-[23px] pt-[10px] pb-[23px]">
                  <div class="flex justify-between items-center mb-1">
                    <h3 class="text-[#261B0D] text-xl">Red Tomatoes</h3>

                    <p>$95.00</p>
                  </div>
                  <p class="text-[#261B0D] text-xs pb-4">Red Silettos</p>

                  <div class="pt-4 w-[150px]">
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

              <div class="rounded-2xl bg-white">
                <img
                  src="../../public/images/agripreneur/market.png"
                  class="rounded-2xl pb-4 w-full"
                  alt=""
                />

                <div class="px-[23px] pt-[10px] pb-[23px]">
                  <div class="flex justify-between items-center mb-1">
                    <h3 class="text-[#261B0D] text-xl">Red Tomatoes</h3>

                    <p>$95.00</p>
                  </div>
                  <p class="text-[#261B0D] text-xs pb-4">Red Silettos</p>

                  <div class="pt-4 w-[150px]">
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

              <div class="rounded-2xl bg-white">
                <img
                  src="../../public/images/agripreneur/market.png"
                  class="rounded-2xl pb-4 w-full"
                  alt=""
                />

                <div class="px-[23px] pt-[10px] pb-[23px]">
                  <div class="flex justify-between items-center mb-1">
                    <h3 class="text-[#261B0D] text-xl">Red Tomatoes</h3>

                    <p>$95.00</p>
                  </div>
                  <p class="text-[#261B0D] text-xs pb-4">Red Silettos</p>

                  <div class="pt-4 w-[150px]">
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

              <div class="rounded-2xl bg-white">
                <img
                  src="../../public/images/agripreneur/market.png"
                  class="rounded-2xl pb-4 w-full"
                  alt=""
                />

                <div class="px-[23px] pt-[10px] pb-[23px]">
                  <div class="flex justify-between items-center mb-1">
                    <h3 class="text-[#261B0D] text-xl">Red Tomatoes</h3>

                    <p>$95.00</p>
                  </div>
                  <p class="text-[#261B0D] text-xs pb-4">Red Silettos</p>

                  <div class="pt-4 w-[150px]">
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

              <div class="rounded-2xl bg-white">
                <img
                  src="../../public/images/agripreneur/market.png"
                  class="rounded-2xl pb-4 w-full"
                  alt=""
                />

                <div class="px-[23px] pt-[10px] pb-[23px]">
                  <div class="flex justify-between items-center mb-1">
                    <h3 class="text-[#261B0D] text-xl">Red Tomatoes</h3>

                    <p>$95.00</p>
                  </div>
                  <p class="text-[#261B0D] text-xs pb-4">Red Silettos</p>

                  <div class="pt-4 w-[150px]">
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

              <div class="rounded-2xl bg-white">
                <img
                  src="../../public/images/agripreneur/market.png"
                  class="rounded-2xl pb-4 w-full"
                  alt=""
                />

                <div class="px-[23px] pt-[10px] pb-[23px]">
                  <div class="flex justify-between items-center mb-1">
                    <h3 class="text-[#261B0D] text-xl">Red Tomatoes</h3>

                    <p>$95.00</p>
                  </div>
                  <p class="text-[#261B0D] text-xs pb-4">Red Silettos</p>

                  <div class="pt-4 w-[150px]">
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

              <div class="rounded-2xl bg-white">
                <img
                  src="../../public/images/agripreneur/market.png"
                  class="rounded-2xl pb-4 w-full"
                  alt=""
                />

                <div class="px-[23px] pt-[10px] pb-[23px]">
                  <div class="flex justify-between items-center mb-1">
                    <h3 class="text-[#261B0D] text-xl">Red Tomatoes</h3>

                    <p>$95.00</p>
                  </div>
                  <p class="text-[#261B0D] text-xs pb-4">Red Silettos</p>

                  <div class="pt-4 w-[150px]">
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
          </template>
        </TabItems>
      </div>

      <div>
        <Pagination :totalPage="5" />
      </div>

      <div
        class="bg-[#FCFAF7] mx-310 md:mx-[120px] py-3 rounded-2xl mb-[94px] mt-10 md:mt-[141px]"
      >
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
            <button
              class="bg-[#FFA500] text-white rounded-lg py-[10px] px-3 mb-8"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
