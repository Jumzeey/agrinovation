<template>
  <div class="md:pb-[123px]">
    <nav class="pt-4 px-4 md:px-0">
        <div class="flex items-center justify-between">
            <div class="text-white text-lg font-bold flex items-center gap-2">
                <div class="border-r-2 border-[#FDEE34] pe-2">
                    <NuxtLink to="/" ><img src="../public/logo/logo.svg" alt=""></NuxtLink>
                </div>
                <div>
                    <img src="../public/logo/logo1.svg" alt="">
                </div>
            </div>
            
            <div class="hidden md:flex space-x-4" v-if="props.type === 'home'">
                <NuxtLink to="/agripreneur" class="text-[#291B0A] hover:text-[#291B0A]">Agripreneur</NuxtLink>
                <NuxtLink to="/investor" class="text-[#291B0A] hover:text-[#291B0A]">Investors</NuxtLink>
                <NuxtLink to="/events" class="text-[#291B0A] hover:text-[#291B0A]">Events</NuxtLink>
                <NuxtLink to="/research" class="text-[#291B0A] hover:text-[#291B0A]">Research</NuxtLink>
                <NuxtLink to="/jobs" class="text-[#291B0A] hover:text-[#291B0A]">Jobs</NuxtLink>
                <NuxtLink to="/marketplace" class="text-[#291B0A] hover:text-[#291B0A]">Market Places</NuxtLink>
            </div>

            <div class="hidden md:flex space-x-4" v-else>
                <NuxtLink to="/agripreneur" class="text-white hover:text-[#FBE234]">Agripreneur</NuxtLink>
                <NuxtLink to="/investor" class="text-white hover:text-[#FBE234]">Investors</NuxtLink>
                <NuxtLink to="/events" class="text-white hover:text-[#FBE234]">Events</NuxtLink>
                <NuxtLink to="/research" class="text-white hover:text-[#FBE234]">Research</NuxtLink>
                <NuxtLink to="/jobs" class="text-white hover:text-[#FBE234]">Jobs</NuxtLink>
                <NuxtLink to="/marketplace" class="text-white hover:text-[#FBE234]">Market Places</NuxtLink>
            </div>

            <div class="md:hidden">
                <button @click="toggleMenu" class="text-gray-300 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <div class="hidden md:hidden lg:flex">
                <input type="text" placeholder="Search here" class="w-[321px] rounded-md px-3 p-2">
            </div>

            <div class="hidden md:flex gap-[14px] items-center">
                
                <a href="" class="text-[#291B0A]" v-if="props.type === 'home'">Login</a>
                <a href="" class="text-white" v-else>Login</a>
                <a class="bg-[#275927] p-3 text-white text-base rounded-md px-3 py-2" href="">Sign up</a>
            </div>
        </div>
        <div v-if="menuOpen" class="md:hidden">
            <div class="flex flex-col items-center" v-if="props.type === 'home'">
                <NuxtLink to="/agripreneur" class="text-[#291B0A] hover:text-[#FBE234]">Agripreneur</NuxtLink>
                <NuxtLink to="/investor" class="text-[#291B0A] hover:text-[#FBE234]">Investors</NuxtLink>
                <NuxtLink to="/events" class="text-[#291B0A] hover:text-[#FBE234]">Events</NuxtLink>
                <NuxtLink to="/research" class="text-[#291B0A] hover:text-[#FBE234]">Research</NuxtLink>
                <NuxtLink to="/jobs" class="text-[#291B0A] hover:text-[#FBE234]">Jobs</NuxtLink>
                <NuxtLink to="/marketplace" class="text-[#291B0A] hover:text-[#FBE234]">Market Places</NuxtLink>
            </div>

            <div class="flex flex-col items-center" v-else>
                <NuxtLink to="/agripreneur" class="text-white hover:text-[#FBE234]">Agripreneur</NuxtLink>
                <NuxtLink to="/investor" class="text-white hover:text-[#FBE234]">Investors</NuxtLink>
                <NuxtLink to="/events" class="text-white hover:text-[#FBE234]">Events</NuxtLink>
                <NuxtLink to="/research" class="text-white hover:text-[#FBE234]">Research</NuxtLink>
                <NuxtLink to="/jobs" class="text-white hover:text-[#FBE234]">Jobs</NuxtLink>
                <NuxtLink to="/marketplace" class="text-white hover:text-[#FBE234]">Market Places</NuxtLink>
            </div>
        </div>
    </nav>
</div>
</template>

<script setup lang="ts">

interface IType {
  type: 'home' | 'other'
}

const props = defineProps<IType>()

const menuOpen = ref(false)

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}
</script>
