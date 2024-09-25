<script setup lang="ts">
import { useGetSingleEvent } from "~/composables/useGetSingleEvent";
import MaterialIcon from "~/components/icon/MaterialIcon.vue";
import ButtonInput from "~/components/inputs/ButtonInput.vue";
import { formatDate } from "~/utils/dateFormatter";


const route = useRoute()
const router = useRouter()
const { id } = route.params;

const params = ref<SearchEventData>({
  search: null,
  page: 1,
});

console.log("Fetched ID from route:", id);
const { data: Data, error, isLoading } = useGetSingleEvent(id as string);
const { data: allData, error: allError, isLoading: allLoading, isError, refetch } = useGetEvents(params.value);

const goTo = (id: number) => {
  router.push(`/events/${id}`)
}

// Inside your <script setup>
const eventData = computed(() => {
  return Data.value?.data || null; // Ensure it's reactive and returns null if no data
});

const routeId = computed(() => {
  return Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id as string, 10);
});

const filteredEvents = computed(() => {
  return allData?.value?.data?.filter(event => event.id !== routeId.value).slice(0, 4) || [];
});

const formattedStartDate = computed(() => {
  return formatDate(eventData.value?.start_date || '');
});
</script>

<template>
  <div class="bg-[#F8FCF8]">
    <div class="w-full bg-cover bg-no-repeat bg-[url('/public/images/agripreneur/single.svg')] relative h-[350px]">
      <div class="mx-0 md:mx-[120px]">
        <Header type="other" />
      </div>
    </div>

    <div class="md:px-[120px]">
      <div class="px-10 py-6 relative bottom-28 overflow-hidden h-full md:h-[450px] lg:h-[450px]">
        <div class="">
          <img :src="eventData?.image" class="object-cover w-full h-full md:h-[400px] lg:h-[400px] rounded-3xl" alt="">
        </div>
      </div>
    </div>

    <div class="mx-0 md:mx-[120px] lg:mx-[120px] relative bottom-[96px] overflow-hidden px-10 rounded-t-lg">
      <div class="pb-5 mb-5 pt-4">
        <div>
          <h3 class="text-black text-[32px] font-semibold pb-4">{{ eventData?.organiser_name ? eventData?.organiser_name :
            "Admin" }}</h3>
          <p class="text-[#828B6D] text-sm lg:text-base font-normal">Event by Eventbrite </p>

          <div class="flex mt-4 gap-2">
            <div>
              <MaterialIcon icon="calendar_today" class="text-[#828B6D]" />
            </div>
            <div>
              <p class="text-[#828B6D] text-sm lg:text-base font-normal">{{ formattedStartDate }} </p>
            </div>
          </div>

          <!-- <div class="flex mt-4 gap-2">
            <div>
                <MaterialIcon icon="location_on" class="text-[#828B6D]" />
            </div>
            <div>
                <p class="text-[#828B6D] text-sm lg:text-base font-normal">Landmark Event Center </p>
            </div>
          </div> -->
        </div>

        <div class="mb-4">
          <p>
            {{ eventData?.description }}
          </p>
        </div>

        <div>
          <div class="bg-white rounded-lg pb-12  p-4">
            <div class="border-b flex justify-between items-center pb-3">
              <div>
                <p>Speakers</p>
              </div>
            </div>
            <div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
                <div v-for="profile in eventData?.speakers" :key="profile.id" class="bg-white rounded-lg text-left">
                  <img :src="profile?.image" alt="Profile Image" class="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 class="text-lg font-semibold text-[#2B2B2B]">{{ profile?.name }}</h3>
                  <p class="text-sm text-green-600 font-medium">{{ profile?.position }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[130px]">
          <a :href="eventData?.link" target="_blank" rel="noopener noreferrer">
            <ButtonInput class="text-sm" bg="bg-[#275927]" text="text-white">
              Register
            </ButtonInput>
          </a>
        </div>

        <div class="mt-[48px]">
          <div class="pb-5 border-b-[1px] border-[#E4E7EC] mb-5 pt-4 flex items-center justify-between">
            <div>
              <h3 class="text-[#261B0D] text-2xl font-semibold">Similar Events</h3>
            </div>

            <div>
              <NuxtLink class="border border-[#D0D5DD] rounded-md p-2 text-sm" to="/events">View All</NuxtLink>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-7">
            <div v-for="event in filteredEvents" :key="event.id" class="w-full mb-6">
              <CardTwo :img="event.image" :title="event.title" @move="goTo(event.id)" :date="event.start_date"
                bg="bg-[#F4FAF4]" text="text-[#2B612B]" />
            </div>
          </div>

          <div v-if="filteredEvents.length === 0">
            <EmptyState message="No event available except this one!" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
