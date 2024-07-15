<template>
  <div class="md:pb-[123px]">
    <nav class="p-4">
        <div class="container mx-auto flex items-center justify-between">
            <div class="text-white text-lg font-bold">
                <img src="../public/logo/logo.svg" alt="">
            </div>
            <div class="hidden md:flex space-x-4">
                <a href="#" class="text-[#291B0A] hover:text-[#291B0A]">Agripreneur</a>
                <a href="#" class="text-[#291B0A] hover:text-[#291B0A]">Investors</a>
                <a href="#" class="text-[#291B0A] hover:text-[#291B0A]">Agro-Hubs</a>
                <a href="#" class="text-[#291B0A] hover:text-[#291B0A]">Events</a>
                <a href="#" class="text-[#291B0A] hover:text-[#291B0A]">Research</a>
                <a href="#" class="text-[#291B0A] hover:text-[#291B0A]">Jobs</a>
                <a href="#" class="text-[#291B0A] hover:text-[#291B0A]">Market Places</a>
            </div>
            <div class="md:hidden">
                <button id="menu-btn" class="text-gray-300 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <div class="hidden md:flex">
                <input type="text" placeholder="Search here" class="w-[321px] rounded-md px-3 p-2">
            </div>

            <div class="hidden md:flex gap-[14px] items-center">
                <a href="" class="text-[#291B0A]">Login</a>
                <a class="bg-[#275927] p-3 text-white text-base rounded-md px-3 py-2" href="">Sign up</a>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden">
            <a href="#" class="block text-gray-300 hover:text-white py-2">Home</a>
            <a href="#" class="block text-gray-300 hover:text-white py-2">About</a>
            <a href="#" class="block text-gray-300 hover:text-white py-2">Services</a>
            <a href="#" class="block text-gray-300 hover:text-white py-2">Contact</a>
        </div>
    </nav>
</div>
</template>
