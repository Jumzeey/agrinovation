<template>
  <div class="px-0 md:px-[120px] banner bg-custom-gradient h-screen">
    <Header type="home" />
    <Banner />
  </div>

  <div class="section bg-[#FCFAF7] py-12 px-8 md:px-[120px]">

    <div class="flex flex-col text-center justify-center items-center mb-7">
      <div class="py-[4px] px-3 bg-[#FFF6F5] rounded-2xl mb-4">
        <h3 class="text-[#5D421F] text-sm font-medium">Agrinnovation</h3>
      </div>

      <div class="mb-4">
        <h3 class="text-[#101828] text-[24px] md:text-4xl font-semibold">
          Explore Agrinnovation in Lagos
        </h3>
      </div>

      <div>
        <p class="text-[#667085] text-xl font-normal">
          Comprehensive Agricultural Insights
        </p>
      </div>
    </div>

    <div>
      <div class="flex flex-col lg:flex-row justify-between gap-8 mb-16">
        <div class="flex flex-col items-center text-center mb-8 lg:mb-0">
          <div class="flex flex-col items-center w-full">
            <img src="/images/users.svg" class="mb-5 w-10" alt="" />
          </div>
          <h3 class="text-[#101828] text-xl font-medium pb-2">
            Agripreneurs & Outputs
          </h3>
          <p class="text-[#667085] text-base font-normal leading-6">
            Track and manage agricultural activities and outputs from farm to
            market
          </p>
        </div>

        <div class="flex flex-col items-center text-center mb-8 lg:mb-0">
          <div class="flex flex-col items-center w-full">
            <img src="/images/love.svg" class="mb-5 w-10" alt="" />
          </div>
          <h3 class="text-[#101828] text-xl font-medium pb-2">
            Investors & Funding Opportunities
          </h3>
          <p class="text-[#667085] text-base font-normal leading-6">
            Connect with Investors and discover funding opportunities for your
            projects
          </p>
        </div>

        <div class="flex flex-col items-center text-center mb-8 lg:mb-0">
          <div class="flex flex-col items-center w-full">
            <img src="/images/network.svg" class="mb-5 w-10" alt="" />
          </div>
          <h3 class="text-[#101828] text-xl font-medium pb-2">
            Agro-Hubs & Networks
          </h3>
          <p class="text-[#667085] text-base font-normal leading-6">
            Engage with Agro-hubs and expand your agricultural network
          </p>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row justify-between gap-8">
        <div class="flex flex-col items-center text-center">
          <div class="flex flex-col items-center w-full">
            <img src="/images/smile.svg" class="mb-5 w-10" alt="" />
          </div>
          <h3 class="text-[#101828] text-xl font-medium pb-2">
            Research & Innovation
          </h3>
          <p class="text-[#667085] text-base font-normal leading-6">
            Access the latest research and innovations driving the agricultural
            sector
          </p>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="flex flex-col items-center w-full">
            <img src="/images/smile.svg" class="mb-5 w-10" alt="" />
          </div>
          <h3 class="text-[#101828] text-xl font-medium pb-2">
            Job Oppurtunities
          </h3>
          <p class="text-[#667085] text-base font-normal leading-6">
            Access the latest research and innovations driving the agricultural
            sector
          </p>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="flex flex-col items-center w-full">
            <img src="/images/flag.svg" class="mb-5 w-10" alt="" />
          </div>
          <h3 class="text-[#101828] text-xl font-medium pb-2">News & Events</h3>
          <p class="text-[#667085] text-base font-normal leading-6">
            Stay informed with the latest news and updates in the agricultural
            sector
          </p>
        </div>
      </div>
    </div>

  </div>

  <div class="py-12 px-10 md:px-[120px]">
    <OutputChart />
  </div>

  <div class="px-10 md:px-[120px] pb-[120px] py-12">
    <AgroInvestment />
  </div>

  <div class="section pt-12 px-10 md:px-[120px] pb-[120px]">
    <News />
  </div>

  <div class="px-10 md:px-[256px] pb-[63px]">
    <Faq />
  </div>

  <div class="bg-[#FCFAF7] mx-10 md:mx-[120px] py-3 rounded-2xl mb-[120px]">
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
</template>


<script setup lang="ts">

</script>