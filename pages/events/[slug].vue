<script setup lang="ts">
import Badge from "~/components/badge/Badge.vue";
import MaterialIcon from "~/components/icon/MaterialIcon.vue";
import ButtonInput from "~/components/inputs/ButtonInput.vue";

const route = useRoute();
const router = useRouter()

const goTo = (slug: any) => {
    router.push(`/events/${slug}`)
}
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
        class="px-10 py-6 relative bottom-28 overflow-hidden h-full md:h-[450px] lg:h-[450px]"
      >
        <div class="">
          <img src="https://www.moroccoworldnews.com/wp-content/uploads/2023/10/sara-2023-ocp-africa-determined-to-help-unlock-cote-divoires-agriculture-potential-800x533.jpg" class="object-cover w-full h-full md:h-[400px] lg:h-[400px] rounded-3xl" alt="">
        </div>
      </div>
    </div>

    <div class="mx-0 md:mx-[120px] lg:mx-[120px] relative bottom-[96px] overflow-hidden px-10 rounded-t-lg">
      <div class="pb-5 mb-5 pt-4">
        <div>
          <h3 class="text-black text-[32px] font-semibold pb-4">Organiser Name</h3>
          <p class="text-[#828B6D] text-sm lg:text-base font-normal">Event by  Eventbrite </p>

          <div class="flex mt-4 gap-2">
            <div>
                <MaterialIcon icon="calendar_today" class="text-[#828B6D]" />
            </div>
            <div>
                <p class="text-[#828B6D] text-sm lg:text-base font-normal">Thursday, 18th, 2024  4:30PM - 5:30PM </p>
            </div>
          </div>

          <div class="flex mt-4 gap-2">
            <div>
                <MaterialIcon icon="location_on" class="text-[#828B6D]" />
            </div>
            <div>
                <p class="text-[#828B6D] text-sm lg:text-base font-normal">Landmark Event Center </p>
            </div>
          </div>

          <div class="flex gap-3 my-3">
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

        <div class="mb-4">
            <p>
                In an uncertain business environment, foreign coys are rethinking whether-and-where to invest in Africa. As Africa’s largest economy, Nigeria provides international investors with unparalleled access to market opportunities. Join us at the Investing in Nigeria Forum, the forum will gather senior leaders from multinational corporations, local businesses, state and federal government officials, for a day of cutting-edge content, to explore the investment opportunities and the role of local & international companies. Click here to get your tickets now!
            </p>
        </div>

        <div class="w-[130px]">
            <ButtonInput
                class="text-sm"
                bg="bg-[#275927]"
                text="text-white"
                :onClick="console.log"
            >
                Register
            </ButtonInput>
        </div>

        <div class="mt-[48px]">
          <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
              <div>
                  <h3 class="text-[#261B0D] text-2xl font-semibold">Similar Events</h3>
              </div>

              <div>
                  <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/">View All</NuxtLink>
              </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-7">
            <div class="w-full mb-6">
                <CardTwo 
                    img="https://jandevents.com/wp-content/uploads/jand-party-1600x900.jpg"
                    title="Africa Fish farmer Summit"
                    @move="goTo('africa-fish-farmer-summit')"
                    date="15-July-2024"
                    bg="bg-[#F4FAF4]"
                    text="text-[#2B612B]"
                />
            </div>

            <div class="w-full mb-6">
                <CardTwo 
                    img="https://frenchrivieraparties.com/wp-content/uploads/2018/08/French-Riviera-Parties-1-1.jpg"
                    title="Africa Fish farmer Summit"
                    @move="goTo('vga-fish-farm')"
                    date="15-July-2024"
                    bg="bg-[#F4FAF4]"
                    text="text-[#2B612B]"
                />
            </div>

            <div class="w-full mb-6">
                <CardTwo 
                    img="https://billetto.co.uk/blog/wp-content/uploads/2019/10/matty-adame-nLUb9GThIcg-unsplash-e1568377747157-1024x563.jpg"
                    title="Africa Fish farmer Summit"
                    @move="goTo('vga-fish-farm')"
                    date="15-July-2024"
                    bg="bg-[#F4FAF4]"
                    text="text-[#2B612B]"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
