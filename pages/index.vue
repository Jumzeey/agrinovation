<template>
  <div class="px-0 md:px-[120px] banner bg-custom-gradient h-screen">
    <Header type="home" />
    <Banner />
  </div>

  <div class="section bg-[url('/public/images/bgleaf.svg')] bg-cover bg-no-repeat py-12 px-8 md:px-[120px]">
    <Explore />
  </div>

  <div class="py-12 px-10 md:px-[120px] bg-white">
    <OutputChart />
  </div>

  <div class="px-10 md:px-[120px] pb-[120px] py-12">
    <AgroInvestment />
  </div>

  <div class="section pt-12 px-10 md:px-[120px] pb-[120px]">
    <News />
  </div>

  <div class="bg-[url('/public/images/bgleaf.svg')] bg-cover bg-no-repeat px-10 md:px-[120px] pb-[80px] mb-[120px] py-12">
    <Testimonies />
  </div>

  <div class="section pt-12 px-10 md:px-[120px] pb-[120px]">
    <div class="m-auto">
      <div class="text-center mb-12">
        <span class="bg-[#FFF6F5] py-1 px-3 rounded-2xl text-[#5D421F]"
          >Our Gallery</span
        >
        <p class="text-[#101828] text-[36px] font-semibold">Explore Agrinnovation in Lagos</p>
      </div>

      <div class="flex flex-wrap flex-row gap-4 mb-7">
        
        <div class="">
          <img src="../public/images/media/media2.png" class="rounded-2xl" alt="">
        </div>
      
        <div class="">
          <img src="../public/images/media/media2.png" class="rounded-2xl" alt="">
        </div>
      
        <div class="">
          <img src="../public/images/media/media2.png" class="rounded-2xl" alt="">
        </div>
      
        <div class="">
          <img src="../public/images/media/media2.png" class="rounded-2xl" alt="">
        </div>
      
        <div class="">
          <img src="../public/images/media/media2.png" class="rounded-2xl" alt="">
        </div>
      
        <div class="">
          <img src="../public/images/media/media2.png" class="rounded-2xl" alt="">
        </div>
      </div>
    </div>
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