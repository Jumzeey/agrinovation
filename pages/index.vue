<template>
  <div class="banner bg-custom-gradient h-full md:h-screen lg:h-screen pb-24">
    <div class="mx-0 md:mx-[120px] lg:mx-[120px]">
      <Header type="home" />
      <Banner />
    </div>
  </div>

  <div class="section bg-[url('/public/images/bgleaf.svg')] bg-cover bg-no-repeat py-12">
    <div class="mx-10 lg:mx-[120px]">
      <Explore />
    </div>
  </div>

  <!-- <div class="py-12 px-10 md:px-[120px] bg-white">
    <OutputChart />
  </div> -->

  <div class="px-10 md:px-[120px] pb-[120px] py-12">
    <BubbleChart />
  </div>

  <div class="px-12 md:px-[120px] pb-[120px] py-12">
    <BarChart />
  </div>

  <!-- <div class="py-12 mx-10 lg:mx-[120px] bg-white">
    <OutputChart />
  </div> -->

  <div class="mx-10 lg:mx-[120px] pb-[120px] py-12">
    <AgroInvestment />
  </div>

  <div class="section pt-12 px-10 md:px-[120px] pb-[120px]">
    <News />
  </div>

  <div
    class="bg-[url('/public/images/testimonies.svg')] bg-cover bg-no-repeat px-10 lg:px-[120px] pb-[80px] mb-[120px] py-12">
    <Testimonies />
  </div>

  <div class="section pt-12 mx-10 lg:mx-[120px] pb-[120px]">
    <Gallery />
  </div>

  <div class="mx-10 lg:px-[256px] pb-[63px]">
    <Faq />
  </div>

  <div class="bg-gradient-to-r from-[#275927] to-[#FDED33] mx-10 lg:mx-[120px] py-3 rounded-2xl mb-[120px]">
    <div class="text-center flex flex-col items-center">
      <div class="w-32 py-8">
        <img src="/images/group.svg" class="w-full" alt="" />
      </div>
      <div>
        <h3 class="pb-2 text-white text-xl font-medium">
          Still have questions?
        </h3>
        <p class="text-white text-md lg:text-lg font-normal pb-8">
          Can’t find the answer you’re looking for? Please reach out to our
          friendly team.
        </p>
        <button class="bg-[#275927] text-white rounded-lg py-[10px] px-3 mb-8">
          Get in touch
        </button>
      </div>
    </div>
  </div>
  <div class="">
    <Footer />
  </div>
</template>


<script setup lang="ts">

</script>