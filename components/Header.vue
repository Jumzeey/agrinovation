<template>
    <div class="lg:pb-[123px]">
        <nav class="pt-4 px-4 lg:px-0">
            <div class="flex items-center justify-between">
                <div class="text-white text-lg font-bold flex items-center gap-2">
                    <div class="border-r-2 border-[#FDEE34] pe-2 w-[75px]">
                        <NuxtLink to="/"><img src="../public/logo/logopng.png" alt=""></NuxtLink>
                    </div>
                    <div class="w-[70px]">
                        <NuxtLink to="/"><img src="../public/logo/logo2.png" alt=""></NuxtLink>
                    </div>
                </div>

                <div class="hidden lg:flex space-x-4" v-if="props.type === 'home'">
                    <NuxtLink to="/agripreneur" class="text-[#291B0A] hover:text-[#78BD1F]">Agripreneur</NuxtLink>
                    <NuxtLink to="/investor" class="text-[#291B0A] hover:text-[#78BD1F]">Investors</NuxtLink>
                    <NuxtLink to="/events" class="text-[#291B0A] hover:text-[#78BD1F]">Events</NuxtLink>
                    <NuxtLink to="/research" class="text-[#291B0A] hover:text-[#78BD1F]">Research</NuxtLink>
                    <NuxtLink to="/jobs" class="text-[#291B0A] hover:text-[#78BD1F]">Jobs</NuxtLink>
                    <NuxtLink to="/marketplace" class="text-[#291B0A] hover:text-[#78BD1F]">Market Places</NuxtLink>
                </div>

                <div class="hidden lg:flex space-x-4" v-else>
                    <NuxtLink :to="{ path: '/agripreneur' }"
                        :class="{ 'text-[#FBE234]': isActive('/agripreneur'), 'text-white': !isActive('/agripreneur') }">
                        Agripreneur
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/investor' }"
                        :class="{ 'text-[#FBE234]': isActive('/investor'), 'text-white': !isActive('/investor') }">
                        Investors
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/events' }"
                        :class="{ 'text-[#FBE234]': isActive('/events'), 'text-white': !isActive('/events') }">
                        Events
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/research' }"
                        :class="{ 'text-[#FBE234]': isActive('/research'), 'text-white': !isActive('/research') }">
                        Research
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/jobs' }"
                        :class="{ 'text-[#FBE234]': isActive('/jobs'), 'text-white': !isActive('/jobs') }">
                        Jobs
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/marketplace' }"
                        :class="{ 'text-[#FBE234]': isActive('/marketplace'), 'text-white': !isActive('/marketplace') }">
                        Market Places
                    </NuxtLink>
                </div>

                <div class="lg:hidden">
                    <button @click="toggleMenu" class="text-gray-300 focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <div class="hidden lg:hidden">
                    <input type="text" placeholder="Search here" class="w-[321px] rounded-md px-3 p-2">
                </div>

                <div class="hidden lg:flex gap-[14px] items-center" v-if="props.type !== 'dashboard'">
                    <NuxtLink to="/auth/login"
                        class="text-[#291B0A] hover:text-white hover:bg-[#78BD1F] hover:rounded-md hover:px-3 hover:py-2"
                        v-if="props.type === 'home'">Login</NuxtLink>
                    <NuxtLink to="/auth/login" class="text-white" v-else>Login</NuxtLink>
                    <NuxtLink to="/auth/signup"
                        class="bg-[#275927] hover:bg-[#78BD1F] p-3 text-white text-base rounded-md px-3 py-2" href="">Sign
                        up</NuxtLink>
                </div>

                <div class="hidden lg:flex gap-[14px] items-center" v-if="props.type === 'dashboard'">
                    <NuxtLink to="/dashboard" class="text-primary_green hover:text-white">
                        <span class="flex flex-col items-center justify-center space-y-1">
                            <img :src="cdnImages.userIcon" alt="" class="w-5 h-5">
                            <p>Dashboard</p>
                        </span>

                    </NuxtLink>
                    <div @click="logout" class="text-white text-base cursor-pointer">
                        <span class="flex flex-col items-center justify-center space-y-1">
                            <img :src="cdnImages.logout" alt="" class="w-5 h-5">
                            <p>Logout</p>
                        </span>
                    </div>
                </div>
            </div>
            <div v-if="menuOpen" class="lg:hidden">
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
import { useRoute } from 'vue-router'
import { CDN_IMAGES } from '~/assets/cdnImages';
import { useAuth } from '~/composables/useAuth'

interface IType {
    type: 'home' | 'other' | 'dashboard'
}

const props = defineProps<IType>()

const cdnImages = CDN_IMAGES;

const { logout } = useAuth()

const menuOpen = ref(false)
const route = useRoute()

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}

const isActive = (path: string) => {
    return route.path === path
}
</script>
