<template>
  <div>
    <div>
      <!-- Header Section -->
      <div class="flex flex-col text-center justify-center items-center mb-10">
        <div class="py-[4px] px-3 bg-[#FFF6F5] rounded-2xl mb-4">
          <h3 class="text-[#5D421F] text-sm font-medium">Agrinnovation</h3>
        </div>
        <div class="mb-4">
          <h3 class="text-[#101828] text-3xl md:text-4xl font-semibold">News and Insights</h3>
        </div>
        <div class="px-0 md:px-[163px]">
          <p class="text-[#667085] text-sm md:text-xl font-normal">
            'It’s no doubt that when a development takes longer to complete, additional costs to integrate and test each
            extra feature creeps up and haunts most of us.
          </p>
        </div>
      </div>

      <div class="flex justify-between border-b border-[#E4E6EF] pb-5">
        <div>
          <h3 class="text-[#101828] text-2xl font-semibold">News</h3>
        </div>
        <div>
          <NuxtLink to="/"
            class="text-sm font-medium bg-[#275927] p-2 rounded text-white hover:bg-[#78BD1F] hover:text-white">
            See more</NuxtLink>
        </div>
      </div>
      <NewsComponent :newsItems="[
        {
          image: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/blog.png?updatedAt=1726330590235',
          tags: '#Fishfarming #Fish',
          title: 'How Lagos State is improving Food supplies',
          description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
          author: 'Olivia Rhye',
          date: '20 Jan 2022'
        },
        {
          image: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/blog.png?updatedAt=1726330590235',
          tags: '#Agriculture #Tech',
          title: 'New Technologies in Farming',
          description: 'Discover how technology is reshaping the agricultural landscape.',
          author: 'John Doe',
          date: '18 Feb 2023'
        },
        {
          image: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/blog.png?updatedAt=1726330590235',
          tags: '#Agriculture #Tech',
          title: 'New Technologies in Farming',
          description: 'Discover how technology is reshaping the agricultural landscape.',
          author: 'John Doe',
          date: '18 Feb 2023'
        },
        {
          image: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/blog.png?updatedAt=1726330590235',
          tags: '#Agriculture #Tech',
          title: 'New Technologies in Farming',
          description: 'Discover how technology is reshaping the agricultural landscape.',
          author: 'John Doe',
          date: '18 Feb 2023'
        }
      ]" />
    </div>
  </div>
</template>
