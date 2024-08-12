<script setup lang="ts">
import TextInput from '~/components/inputs/TextInput.vue';
import ButtonInput from '~/components/inputs/ButtonInput.vue';


</script>

<template>
    <div class="w-full h-screen flex flex-col md:flex-row">
        <div class="bg-[url('/public/images/login/login.svg')] bg-cover bg-no-repeat hidden md:flex md:w-[45%] lg:w-[45%] h-full">
        </div>

        <div class="w-full md:w-[55%] flex flex-col justify-center items-center p-8 md:p-16">
            <div class="w-full max-w-lg">
                <div class="mb-5 flex justify-center items-center">
                    <div class="w-[90px]">
                        <NuxtLink to="/" ><img src="../../public/logo/logopng.png" alt=""></NuxtLink>
                    </div>
                    <!-- <div class="w-[90px]">
                        <NuxtLink to="/" ><img src="../../public/logo/logo2.png" alt=""></NuxtLink>
                    </div> -->
                </div>
                <div class="mb-8">
                    <h3 class="text-[#1B1818] text-2xl md:text-3xl font-semibold pb-2">Welcome back!</h3>
                    <div class="flex gap-2">
                        <p class="text-[#645D5D] text-sm font-normal">Don’t have an account?</p>
                        <NuxtLink to="/auth/signup" class="text-[#FFA500] text-sm font-semibold">Create an Account</NuxtLink>
                    </div>
                </div>

                <div>
                    <div class="mb-4">
                        <TextInput label="Email address" :onChange="console.log" border />
                    </div>

                    <div class="mb-4">
                        <TextInput label="Password" type="password" :onChange="console.log" border />
                    </div>

                    <div class="text-end mb-8">
                        <NuxtLink to="/auth/forgot" class="text-[#FFA500] text-sm font-semibold">Forgot password</NuxtLink>
                    </div>

                    <div>
                        <ButtonInput :onClick="console.log">Login</ButtonInput>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>