<script setup lang="ts">
import TextInput from '~/components/inputs/TextInput.vue';
import ButtonInput from '~/components/inputs/ButtonInput.vue';
import SelectInput from '~/components/inputs/SelectInput.vue';

const type = ref([
    {
        id: 1,
        name: "Agripreneur"
    },
    {
        id: 2,
        name: "Hub"
    },
    {
        id: 3,
        name: "Investor"
    },
    {
        id: 4,
        name: "Researcher"
    },
    {
        id: 4,
        name: "Others"
    },
])

</script>

<template>
    <div class="w-full h-full flex justify-between">
        <div class="bg-[url('/public/images/login/signup.svg')] bg-cover bg-no-repeat hidden md:w-[45%] lg:w-[45%] lg:flex">
        </div>

        <div class="w-full md:w-[55%] lg:w-[55%] flex justify-center items-center overflow-hidden px-8 lg:px-[133px] pb-12">
            <div class="w-full max-w-lg">
                <div class="mb-5 flex justify-center items-center pt-5">
                    <div class="w-[90px]">
                        <NuxtLink to="/" ><img src="../../public/logo/logopng.png" alt=""></NuxtLink>
                    </div>
                    <!-- <div class="w-[90px]">
                        <NuxtLink to="/" ><img src="../../public/logo/logo2.png" alt=""></NuxtLink>
                    </div> -->
                </div>

                <div class="mb-[32px]">
                    <h3 class="text-[#1B1818] text-[32px] font-semibold pb-2">Create an Account</h3>
                    <div class="flex gap-2">
                        <p class="text-[#645D5D] text-sm font-normal">Already have account?</p>
                        <NuxtLink to="/auth/login" class="text-[#FFA500] text-sm font-semibold">Sign in here</NuxtLink>
                    </div>
                </div>

                <div>
                    <div class="mb-3">
                        <SelectInput 
                            label="Type"
                            :onChange="console.log"
                            :selected="'name'"
                            value="name"
                            :name="['name']"
                            :items="type"
                            class="w-full mt-1"
                            important="*"
                            border
                        />
                    </div>

                    <div class="mb-3">
                        <TextInput label="Business name" :onChange="console.log" important="*" border />
                    </div>

                    <div class="mb-3">
                        <TextInput label="Email" :onChange="console.log" important="*" border />
                    </div>

                    <div class="mb-3">
                        <TextInput label="Password" type="password" :onChange="console.log" important="*" border />
                    </div>

                    <div class="mb-[32px]">
                        <TextInput label="Confirm Password" type="password" :onChange="console.log" border />
                    </div>

                    <div>
                        <ButtonInput :onClick="console.log">Sign Up</ButtonInput>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>