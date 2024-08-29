

<template>
    <div class="w-full h-screen flex flex-col md:flex-row">
        <div
            class="bg-[url('/public/images/login/login.svg')] bg-cover bg-no-repeat hidden md:flex md:w-[45%] lg:w-[45%] h-full">
        </div>

        <div class="w-full md:w-[55%] flex flex-col justify-center items-center p-8 md:p-16">
            <div class="w-full max-w-lg">
                <div class="mb-5 flex justify-center items-center">
                    <div class="w-[90px]">
                        <NuxtLink to="/"><img src="../../public/logo/logopng.png" alt=""></NuxtLink>
                    </div>
                    <!-- <div class="w-[90px]">
                        <NuxtLink to="/" ><img src="../../public/logo/logo2.png" alt=""></NuxtLink>
                    </div> -->
                </div>
                <div class="mb-8">
                    <h3 class="text-[#1B1818] text-2xl md:text-3xl font-semibold pb-2">Welcome back!</h3>
                    <div class="flex gap-2">
                        <p class="text-[#645D5D] text-sm font-normal">Don’t have an account?</p>
                        <NuxtLink to="/auth/signup" class="text-[#FFA500] text-sm font-semibold">Create an Account
                        </NuxtLink>
                    </div>
                </div>

                <div>
                    <div class="mb-4">
                        <TextInput label="Email address" v-model="email" important="*" type="email" border />
                    </div>

                    <div class="mb-4">
                        <TextInput label="Password" type="password" v-model="password" important="*" border />
                    </div>

                    <div class="text-end mb-8">
                        <NuxtLink to="/auth/forgot" class="text-[#FFA500] text-sm font-semibold">Forgot password</NuxtLink>
                    </div>

                    <div>
                        <ButtonInput :onClick="handleLogin" :loading="loading">Login</ButtonInput>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'
import TextInput from '~/components/inputs/TextInput.vue'
import ButtonInput from '~/components/inputs/ButtonInput.vue'
import * as pkg from "vue-toastification"
const { useToast } = pkg


// Using the composable
const { login, loading } = useAuth()

const toast = useToast()

// Local state for form inputs
const email = ref('')
const password = ref('')

// Function to validate form inputs
const validateForm = (): boolean => {
    if (!email.value.includes('@')) {
        toast.error('Invalid email address')
        return false
    }
    if (!email.value || !password.value) {
        toast.error('Please fill in all fields')
        return false
    }
    return true
}

// Login handler
const handleLogin = async () => {
    if (validateForm()) {
        await login({
            email: email.value,
            password: password.value,
        })
    }
}
</script>