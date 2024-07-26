<script setup lang="ts">
import Badge from "~/components/badge/Badge.vue";
import Header from "~/components/Header.vue";
import ButtonInput from "~/components/inputs/ButtonInput.vue";
import ResearchBar from "~/components/progressbar/ResearchBar.vue";
import ContributorForm from "~/components/contributor/ContributorForm.vue";

const progress = ref(50);

const contributor = ref(false)

const becomeContributor = () => {
  contributor.value = true
}

const closeForm = () => {
  contributor.value = false
}

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
        <div class="flex justify-between">
          <div class="flex gap-6">
            <div>
              <div class="mb-5">
                <h3 class="pb-4 text-black text-2xl font-semibold">
                    Topic: Farm Business Manager
                </h3>
                <p class="text-[#828B6D] text-base font-normal pb-2">
                    Research sector: Agriculture Purpose
                </p>

                <p class="text-[#828B6D] text-base font-normal pb-2">
                    Academician: Adetunbi Josh, Adongbede Praise, Omoteso Karfe
                </p>

                <p class="text-[#828B6D] text-base font-normal">
                    Type of Reseacher: Institution
                </p>
              </div>
              <div class="flex gap-3">
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
        </div>

        <div class="w-[300px]">
            <div class="mb-[90px]">
              <p class="pb-3 text-[#CCCCCC] text-sm">Research Stage:</p>
              <ResearchBar :progress="progress" />
            </div>

            <div class="flex gap-[14px]">
              <ButtonInput bg="bg-[#EDF7ED]" text="text-[#275927]" class="text-sm" :onClick="() => becomeContributor()"> Be a contributor </ButtonInput>
              <ButtonInput bg="bg-[#275927]" text="text-[#fff]" class="text-sm" :onClick="console.log"> Download </ButtonInput>
            </div>

            <ContributorForm
              :show="contributor"
              @closeModal="closeForm"
            />
        </div>
      </div>
    </div>

    <div class="mx-10 md:mx-[120px] bg-white relative bottom-[96px] overflow-hidden px-10 rounded-t-lg">
      <div class="w-full py-6">
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
      </div>
    </div>

  </div>
</template>
