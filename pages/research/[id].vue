<script setup lang="ts">
import Badge from "~/components/badge/Badge.vue";
import Header from "~/components/Header.vue";
import ButtonInput from "~/components/inputs/ButtonInput.vue";
import ResearchBar from "~/components/progressbar/ResearchBar.vue";
import ContributorForm from "~/components/contributor/ContributorForm.vue";
import { useGetSingleResearch } from "~/composables/useGetSingleResearch";

const progress = ref(50);

const contributor = ref(false)

const becomeContributor = () => {
  contributor.value = true
}

const closeForm = () => {
  contributor.value = false
}

const route = useRoute()
const router = useRouter()
const { id } = route.params;

const params = ref<SearchResearchData>({
  search: null,
  page: 1,
});

const { data: Data, error, isLoading } = useGetSingleResearch(id as string);

const researchData = computed(() => {
  return Data.value?.data || null;
});

const getBadgeClass = (tag: string, index: number) => {
  const classes = ["success", "primary", "warning", "info"]; // You can add more classes if needed
  return classes[index % classes.length]; // Rotate classes based on the index
};
</script>

<template>
  <div class="bg-[#F8FCF8]">
    <div class="w-full bg-cover bg-no-repeat bg-[url('/public/images/agripreneur/single.svg')] relative h-[350px]">
      <div class="mx-0 md:mx-[120px]">
        <Header type="other" />
      </div>
    </div>

    <div class="md:px-[120px]">
      <div class="px-10 bg-white py-6 relative bottom-28 overflow-hidden rounded-t-lg">
        <div class="flex justify-between flex-col lg:flex-row">
          <div class="flex gap-6">
            <div>
              <div class="mb-5">
                <h3 class="pb-4 text-black text-2xl font-semibold">
                  Topic: {{ researchData?.topic || 'Topic' }}
                </h3>
                <p class="text-[#828B6D] text-base font-normal pb-2">
                  Research sector: {{ researchData?.sector || 'Sector' }}
                </p>

                <p class="text-[#828B6D] text-base font-normal pb-2">
                  Academician: {{ researchData?.collaborators?.join(', ') || 'No academicians listed' }}
                </p>
              </div>
              <div class="flex gap-3">
                <Badge v-for="(tag, index) in researchData?.tag || []" :key="index" :class="getBadgeClass(tag, index)">
                  <template v-slot:content> {{ tag }} </template>
                </Badge>
              </div>
            </div>
          </div>

          <div class="w-[300px]">
            <div class="mb-5 lg:mb-[90px]">
              <p class="pb-3 text-[#CCCCCC] text-sm">Research Stage:</p>
              <ResearchBar :progress="researchData?.research_stage || '10'" />
            </div>

            <div class="flex gap-[14px]">
              <ButtonInput bg="bg-[#EDF7ED]" text="text-[#275927]" class="text-sm" :onClick="() => becomeContributor()">
                Be a contributor </ButtonInput>
              <ButtonInput bg="bg-[#275927]" text="text-[#fff]" class="text-sm" :onClick="console.log"> Download
              </ButtonInput>
            </div>

            <ContributorForm :show="contributor" @closeModal="closeForm" />
          </div>
        </div>
      </div>
    </div>

    <div class="mx-0 md:mx-[120px] lg:mx-[120px] bg-white relative bottom-[96px] overflow-hidden px-10 rounded-t-lg">
      <div class="w-full py-6">
        <div class="mb-[71px]">
          <p class="text-[#261B0D] font-normal">
           {{researchData?.description || 'About research'}}
          </p>
        </div>
      </div>
    </div>

  </div>

  <Footer />
</template>
