<script setup lang="ts">
import MaterialIcon from './icon/MaterialIcon.vue';


</script>

<template>
  <div class="bg-[#17180A]">
  <div class="px-6 sm:px-8 md:px-[120px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pt-16 pb-40 gap-8">
    <div class="mb-10">
      <div class="text-white text-lg font-bold flex items-center gap-2 mb-3">
        <div class="border-r-2 border-[#FDEE34] pe-2 w-[75px]">
          <NuxtLink to="/" >
            <img src="../public/logo/logopng.png" alt="Logo">
          </NuxtLink>
        </div>
        <div class="w-[70px]">
          <NuxtLink to="/" >
            <img src="../public/logo/logo2.png" alt="Logo 2">
          </NuxtLink>
        </div>
      </div>
      <p class="text-[#E6E6E2] pb-4 text-base">
        © Copyright 2024 Agri-Innovation. <br>All rights reserved.
      </p>
      <p class="text-[#E6E6E2] pb-4 text-base flex items-center gap-2">
        <MaterialIcon icon="mail" />
        info@gdmgroup.com.ng
      </p>
      <p class="text-[#E6E6E2] text-base flex items-center gap-2">
        <MaterialIcon icon="call" />
        +234 803 406 9956
      </p>
    </div>
    <div class="mb-10">
      <h3 class="text-[#98A2B3] pb-4">Company</h3>
      <div class="flex flex-col gap-3">
        <a href="#" class="text-gray-300 hover:text-white">About</a>
        <a href="#" class="text-gray-300 hover:text-white">Leadership</a>
        <a href="#" class="text-gray-300 hover:text-white">Blogs</a>
        <a href="#" class="text-gray-300 hover:text-white">Careers</a>
        <a href="#" class="text-gray-300 hover:text-white">Referral Program</a>
        <a href="#" class="text-gray-300 hover:text-white">Community</a>
      </div>
    </div>
    <div class="mb-10">
      <h3 class="text-[#98A2B3] pb-4">Stay Inspired</h3>
      <p class="text-[#E6E6E2] text-sm">
        Get regular insights and news updates from <br>Agri-Innovation
      </p>
    </div>
    <div class="mb-10">
      <h3 class="text-[#98A2B3] pb-4">Follow us</h3>
      <div class="flex gap-2">
        <a href="#" class="text-[#E6E6E2] hover:text-white">
          <MaterialIcon icon="facebook" />
        </a>
      </div>
    </div>
  </div>
</div>

</template>
