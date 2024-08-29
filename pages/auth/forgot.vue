<template>
    <div class="w-full h-screen flex justify-between">
        <div class="hidden md:w-[45%] lg:w-[45%] lg:flex h-[750px]">
            <img src="../../public/images/login/login.svg" class=" object-cover w-full h-[750px]" alt="">
        </div>

        <div class="w-full md:w-[55%] lg:w-[55%] flex justify-center items-center overflow-hidden px-8 lg:px-[133px]">
            <div class="w-full max-w-lg">
                <div class="mb-5 flex justify-center items-center">
                    <div class="w-[90px]">
                        <NuxtLink to="/" ><img src="../../public/logo/logopng.png" alt=""></NuxtLink>
                    </div>
                    <!-- <div class="w-[90px]">
                        <NuxtLink to="/" ><img src="../../public/logo/logo2.png" alt=""></NuxtLink>
                    </div> -->
                </div>
                
                <div class="mb-[32px]">
                    <h3 class="text-[#1B1818] text-[32px] font-semibold pb-2">Forgot Password?</h3>
                    <div class="flex flex-col lg:flex-row gap-2">
                        <p class="text-[#645D5D] text-sm font-normal">Enter your email to reset your password. New Here</p>
                        <NuxtLink to="/auth/signup" class="text-[#FFA500] text-sm font-semibold">Create an Account</NuxtLink>
                    </div>
                </div>

                <div>
                    <div class="mb-3">
                        <TextInput label="Email address" v-model="email" type="email" border />
                    </div>

                    <div>
                         <ButtonInput :onClick="handleForgotPassword" :disabled="loading">
                                <span v-if="loading">Sending...</span>
                                <span v-else>Send Password Reset Link</span>
                            </ButtonInput>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TextInput from '~/components/inputs/TextInput.vue';
import ButtonInput from '~/components/inputs/ButtonInput.vue';
import { ref } from 'vue';
import { forgotPassword } from '~/composables/forgotPassword';

const email = ref('');
const { forgot, loading } = forgotPassword();

const handleForgotPassword = () => {
    forgot({ email: email.value });
};
</script>