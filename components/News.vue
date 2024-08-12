<template>
  <div>
    <div class="flex flex-col text-center justify-center items-center mb-10">
      <div class="py-[4px] px-3 bg-[#FFF6F5] rounded-2xl mb-4">
        <h3 class="text-[#5D421F] text-sm font-medium">Agrinnovation</h3>
      </div>

      <div class="mb-4">
        <h3 class="text-[#101828] text-3xl md:text-4xl font-semibold">News and Insigths</h3>
      </div>

      <div class="px-0 md:px-[163px]">
        <p class="text-[#667085] text-sm md:text-xl font-normal">
          It’s no doubt that when a development takes longer to complete,
          additional costs tointegrate and test each extra feature creeps up and
          haunts most of us.
        </p>
      </div>
    </div>

    <div>
      <div class="flex justify-between border-b border-[#E4E6EF] pb-5">
        <div>
          <h3 class="text-[#101828] text-2xl font-semibold">News</h3>
        </div>

        <div>
          <NuxtLink to="/" class="text-sm font-medium bg-[#275927] p-2 rounded text-white hover:bg-[#78BD1F] hover:text-white">See more</NuxtLink>
        </div>
      </div>

      <div class="mt-[52px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8 items-center">

        <div class="shadow-md py-3 w-full px-6 blog-card">
          <div class="flex items-center">
            <img src="/images/blog.png" class="mb-6 w-full" alt="Blog image" />
          </div>
          <div class="">
            <span class="text-green-500 pb-3">#Fishfarming #Fish</span>
            <h3 class="text-[#101828] text-2xl font-semibold pb-3">
              <NuxtLink to="/">How Lagos State is improving Food supplies</NuxtLink>
            </h3>
            <p class="text-[#667085] text-sm font-medium text-wrap">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div class="flex items-center mt-7 mb-8">
              <img src="" class="w-6 h-6 rounded-full mr-2" alt="Author" />
              <div class="text-sm">
                <span class="block text-[#101828] font-semibold"
                  >Olivia Rhye</span
                >
                <span class="text-[#667085]">20 Jan 2022</span>
              </div>
            </div>
          </div>
        </div>

        <div class="shadow-md py-3 w-full px-6 blog-card">
          <div class="flex items-center">
            <img src="/images/blog.png" class="mb-6 w-full" alt="Blog image" />
          </div>
          <div class="">
            <span class="text-green-500 pb-3">#Fishfarming #Fish</span>
            <h3 class="text-[#101828] text-2xl font-semibold pb-3">
              <NuxtLink to="/">How Lagos State is improving Food supplies</NuxtLink>
            </h3>
            <p class="text-[#667085] text-sm font-medium text-wrap">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div class="flex items-center mt-7 mb-8">
              <img src="" class="w-6 h-6 rounded-full mr-2" alt="Author" />
              <div class="text-sm">
                <span class="block text-[#101828] font-semibold"
                  >Olivia Rhye</span
                >
                <span class="text-[#667085]">20 Jan 2022</span>
              </div>
            </div>
          </div>
        </div>

        <div class="shadow-md py-3 w-full px-6 blog-card">
          <div class="flex items-center">
            <img src="/images/blog.png" class="mb-6 w-full" alt="Blog image" />
          </div>
          <div class="">
            <span class="text-green-500 pb-3">#Fishfarming #Fish</span>
            <h3 class="text-[#101828] text-2xl font-semibold pb-3">
              <NuxtLink to="/">How Lagos State is improving Food supplies</NuxtLink>
            </h3>
            <p class="text-[#667085] text-sm font-medium text-wrap">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div class="flex items-center mt-7 mb-8">
              <img src="" class="w-6 h-6 rounded-full mr-2" alt="Author" />
              <div class="text-sm">
                <span class="block text-[#101828] font-semibold"
                  >Olivia Rhye</span
                >
                <span class="text-[#667085]">20 Jan 2022</span>
              </div>
            </div>
          </div>
        </div>

        <div class="shadow-md py-3 w-full px-6 blog-card">
          <div class="flex items-center">
            <img src="/images/blog.png" class="mb-6 w-full" alt="Blog image" />
          </div>
          <div class="">
            <span class="text-green-500 pb-3">#Fishfarming #Fish</span>
            <h3 class="text-[#101828] text-2xl font-semibold pb-3">
              <NuxtLink to="/">How Lagos State is improving Food supplies</NuxtLink>
            </h3>
            <p class="text-[#667085] text-sm font-medium text-wrap">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div class="flex items-center mt-7 mb-8">
              <img src="" class="w-6 h-6 rounded-full mr-2" alt="Author" />
              <div class="text-sm">
                <span class="block text-[#101828] font-semibold"
                  >Olivia Rhye</span
                >
                <span class="text-[#667085]">20 Jan 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>

