<script setup lang="ts">
import ButtonInput from "~/components/inputs/ButtonInput.vue";
import Counter from "~/components/inputs/Counter.vue";

const route = useRoute();
const router = useRouter();

const goTo = (slug: any) => {
  router.push(`/events/${slug}`);
};

const counterValue = ref("1");

const handleChange = (newValue: string) => {
  counterValue.value = newValue;
};
</script>

<template>
  <div class="bg-[#F8FCF8] pb-14">
    <div
      class="w-full bg-cover bg-no-repeat bg-[url('/public/images/agripreneur/single.svg')] relative h-[350px]"
    >
      <div class="mx-0 md:mx-[120px]">
        <Header type="other" />
      </div>
    </div>

    <div class="md:px-[120px]">
      <div class="px-10 py-6 flex flex-col lg:flex-row gap-0 lg:gap-11">
        <div class="rounded-lg bottom-[96px] relative">
          <div class="w-full h-full lg:w-[588px] lg:h-[512px]">
            <img
              src="../../public/images/agripreneur/market.png"
              class="w-full h-full lg:w-[588px] lg:h-[512px] rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div class="w-full lg:w-3/5 bottom-[80px] lg:bottom-0 relative">
          <div class="border-b-2 pb-4">
            <h3 class="text-[#101928] text-2xl lg:text-[32px] font-semibold pb-2">
              Red Tomatoes
            </h3>
            <p class="text-[#261B0D] text-sm font-normal pb-2">
              Fresh tomatoes
            </p>
            <p class="text-[#101928] text-xl lg:text-2xl font-semibold">NGN7000 per Bag</p>
          </div>

          <div class="mt-0 lg:mt-[15px]">
            <div class="mb-[24px] flex items-center gap-4">
              <div>
                <p class="pb-[20px] text-[#101928] text-base font-semibold">
                  Quantity
                </p>
                <Counter :value="counterValue" @onChange="handleChange" />
              </div>

              <div class="mt-[40px]">
                <p class="text-[#667185] text-sm">
                  Only <span class="text-[#FFA500]">12 Items</span> Left!
                </p>
                <p class="text-[#667185] text-sm">Don’t miss it</p>
              </div>
            </div>
            <div class="w-[150px]">
              <ButtonInput
                class="text-sm w-full border rounded-[40px]"
                bg="bg-[#2B612B]"
                text="text-[#fff]"
                :onClick="() => goTo('red-tomatoes')"
                iconLeft
              >
                Contact seller
              </ButtonInput>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mx-0 md:mx-[120px] lg:mx-[120px] relative bottom-[96px] overflow-hidden px-10 rounded-t-lg"
    >
      <div class="pb-5 mb-5 pt-4">
        <div class="mt-[48px]">
          <div
            class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between"
          >
            <div>
              <h3 class="text-[#261B0D] text-xl lg:text-2xl font-semibold">
                Similar Items from the same supplier
              </h3>
            </div>

            <div>
              <NuxtLink
                class="border border-[#D0D5DD] rounded-md p-2 text-sm hidden lg:flex"
                to="/"
                >View All</NuxtLink
              >
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
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
                    :onClick="() => goTo('red-tomatoes')"
                  >
                    Contact seller
                  </ButtonInput>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-[#FCFAF7] relative mx-310 md:mx-[120px] py-3 bottom-[16px] rounded-2xl mt-10 md:mt-[0px]"
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
</template>
