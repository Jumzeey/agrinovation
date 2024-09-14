<template>
    <div class="w-full h-full flex justify-between">
        <div class="bg-[url('/public/images/login/signup.svg')] bg-cover bg-no-repeat hidden md:w-[45%] lg:w-[45%] lg:flex">
        </div>

        <div class="w-full md:w-[55%] lg:w-[55%] flex justify-center items-center overflow-hidden px-8 lg:px-[133px] pb-12">
            <div class="w-full max-w-lg">
                <div class="mb-5 flex justify-center items-center pt-5">
                    <div class="w-[90px]">
                        <NuxtLink to="/"><img src="../../public/logo/logopng.png" alt=""></NuxtLink>
                    </div>
                </div>

                <div class="mb-[32px]">
                    <h3 class="text-[#1B1818] text-[32px] font-semibold pb-2">Create an Account</h3>
                    <div class="flex gap-2">
                        <p class="text-[#645D5D] text-sm font-normal">Already have an account?</p>
                        <NuxtLink to="/auth/login" class="text-[#FFA500] text-sm font-semibold">Sign in here</NuxtLink>
                    </div>
                </div>

                <div>
                    <div class="mb-3">
                        <SelectInput label="Type" :onChange="handleTypeChange" :selected="'name'" value="name"
                            :name="['name']" :items="userTypes" class="w-full mt-1" important="*" border />
                    </div>

                    <div class="mb-3">
                        <TextInput label="Business name" v-model="businessName" important="*" border />
                    </div>

                    <div class="mb-3">
                        <TextInput label="Email" type="email" v-model="email" important="*" border />
                    </div>

                    <div class="mb-3">
                        <TextInput label="Password" type="password" :show-strength="true" v-model="password" important="*" border />
                    </div>

                    <div class="mb-[32px]">
                        <TextInput label="Confirm Password" type="password" v-model="confirmPassword" border />
                    </div>

                    <div>
                        <ButtonInput :onClick="handleSubmit" :loading="loading">Sign Up</ButtonInput>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import * as pkg from "vue-toastification"
const { useToast } = pkg
import TextInput from '~/components/inputs/TextInput.vue'
import ButtonInput from '~/components/inputs/ButtonInput.vue'
import SelectInput from '~/components/inputs/SelectInput.vue'
import { useAuth } from '~/composables/useAuth'
import { useFetchUserTypes } from '~/composables/useFetchUserTypes'

definePageMeta({
    middleware: 'register'
});

const { signup, loading } = useAuth()

const toast = useToast()
const { userTypes } = useFetchUserTypes()

console.log('types: ', userTypes)

const businessName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const selectedType = ref('')
const selectedUserTypeId = ref<number>()

// Handle type selection change
const handleTypeChange = (name: string) => {
    const selectedTypeObj = userTypes.value?.find(type => type.name === name)
    if (selectedTypeObj) {
        selectedType.value = name
        selectedUserTypeId.value = selectedTypeObj.id
    }
}

// Function to validate form inputs
const validateForm = (): boolean => {
    if (password.value !== confirmPassword.value) {
        toast.error('Passwords do not match')
        return false
    }
    if (email.value && !email.value.includes('@')) {
        toast.error('Invalid email address')
        return false
    }
    if (!businessName.value || !email.value || !password.value || !confirmPassword.value || !selectedType.value) {
        toast.error('Please fill in all fields')
        return false
    }
    return true
}

// Handle form submission
const handleSubmit = async () => {
    if (!selectedUserTypeId.value) {
        toast.error('Please select a user type')
        return
    }
    if (validateForm()) {
        await signup({
            business_name: businessName.value,
            email: email.value,
            password: password.value,
            password_confirmation: confirmPassword.value,
            user_type_id: selectedUserTypeId.value
        })
    }
}
</script>
  