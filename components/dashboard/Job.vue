<script setup lang="ts">
import { CDN_IMAGES } from "../../assets/cdnImages";
import ButtonInput from '~/components/inputs/ButtonInput.vue';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { updateJobHandler } from "~/composables/useUpdateJobs"

import { CalendarDate, DateFormatter } from '@internationalized/date'
import { toDate } from 'radix-vue/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const showModal = ref(false);

function openModal() {
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}

const { updateJob, loading } = updateJobHandler();

const props = defineProps({
    profileData: {
        type: Object,
        required: true,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    error: {
        type: Boolean,
        default: false,
    },
    showAction: {
        type: Boolean,
        default: false,
    }
});

const df = new DateFormatter('en-US', {
    dateStyle: 'long',
})

// Function to format date as dd-month-year (e.g., 15-July-2024)
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options).replace(/ /g, '-');
};


const title = ref('')
const salary_min = ref('')
const salary_max = ref('')
const selectedWorkplaceType = ref<string>('')
const selectedJobType = ref<string>('')
const location = ref('')
const description = ref('')
const application_deadline = ref<CalendarDate | null>(null);

const handleSubmit = async () => {
    if (!props.profileData || !props.profileData.user_id) {
        console.error('User type ID is missing or undefined');
        return;
    }
    await updateJob({
        user_id: props.profileData.user_id,
        title: title.value,
        salary_min: salary_min.value,
        salary_max: salary_max.value,
        workplace_type: selectedWorkplaceType.value,
        job_type: selectedJobType.value,
        location: location.value,
        description: description.value,
        application_deadline: application_deadline.value ? application_deadline.value.toString() : '',
    })
};

</script>

<template>
    <div>
        <div class="bg-white rounded-lg pb-12  p-4">
            <div class="border-b flex justify-between items-center  pb-3">
                <div>
                    <p class="">Job Opening</p>
                </div>
                <button v-if="showAction" class="py-2 px-3 border border-border_col rounded-md  cursor-pointer" @click="openModal">
                    <p class="text-priText">Add Job</p>
                </button>
            </div>
            <div>
                <div v-if="loading">Loading job posts...</div>
                <div v-else-if="error">Failed to load job posts. Please try again later.</div>
                <div v-else>
                    <div class="pt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 p-4"
                        v-if="profileData?.job_posts?.length > 0">
                        <div v-for="job in profileData?.job_posts" :key="job.id"
                            class="rounded-2xl p-6 pt-10 bg-white lg:w-[270px] w-full  drop-shadow-lg flex flex-col gap-4">
                            <div class="rounded-3xl bg-white mb-4">
                                <img :src="CDN_IMAGES.job_logo" alt="Job Logo" />
                            </div>
                            <div class="mb-6">
                                <h3 class="pb-2 text-[#261B0D] text-xl font-semibold capitalize">{{ job.title }}</h3>
                                <div class="flex gap-3 items-center pb-2">
                                    <p class="text-[#261B0D] text-sm capitalize">{{ job.workplace_type }}</p> |
                                    <p class="text-[#261B0D] text-sm font-medium capitalize">{{ job.job_type }}</p>
                                </div>
                                <div class=" font-medium capitalize text-[#261B0D] ">{{ job.location }}</div>
                                <p class="text-[#261B0D] text-sm font-medium">
                                    {{ formatDate(job.application_deadline) }}
                                </p>
                            </div>

                            <div>
                                <ButtonInput class="text-sm" bg="bg-[#F4FAF4]" text="text-[#2B612B]">
                                    View more
                                </ButtonInput>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <EmptyState />
                    </div>
                </div>

            </div>
        </div>
        <Modal :shows="showModal" title="Post Job" width="w-[650px]" :icon="CDN_IMAGES.edit_about_icon"
            @closeModal="closeModal" class="flex flex-col gap-6" :buttonText="'Add'" :onSubmit="handleSubmit"
            :loading="loading">
            <template #content>
                <div class="grid grid-cols-2 gap-6">
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="title">Job Title</Label>
                        <Input id="title" type="text" placeholder="title..." v-model="title" />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="min-salary">Minimum Salary</Label>
                        <Input id="min-salary" type="text" placeholder="salary..." v-model="salary_min" />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="max-salary">Maximum Salary</Label>
                        <Input id="max-salary" type="text" placeholder="salary..." v-model="salary_max" />
                    </div>
                    <div>
                        <Label for="sector">Workplace Type</Label>
                        <Select v-model="selectedWorkplaceType">
                            <SelectTrigger class="md:w-[290px] w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Workplace Type</SelectLabel>
                                    <SelectItem value="onsite">
                                        On-site
                                    </SelectItem>
                                    <SelectItem value="remote">
                                        Hybrid
                                    </SelectItem>
                                    <SelectItem value="remote">
                                        Fully remote
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label for="sector">Job Type</Label>
                        <Select v-model="selectedJobType">
                            <SelectTrigger class="md:w-[290px] w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent class="bg-black text-white">
                                <SelectGroup>
                                    <SelectLabel>Job Type</SelectLabel>
                                    <SelectItem value="contract">
                                        Contract
                                    </SelectItem>
                                    <SelectItem value="full time">
                                        FullTime
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="location">Job Location</Label>
                        <Input id="location" type="text" placeholder="location..." v-model="location" />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                        <Label for="location">Application Deadline</Label>
                        <Popover>
                            <PopoverTrigger as-child>
                                <FormControl>
                                    <Button variant="outline" :class="cn(
                                        'w-[240px] ps-3 text-start font-normal',
                                        !application_deadline && 'text-muted-foreground',
                                    )">
                                        <span>{{ application_deadline ?
                                            df.format(toDate(application_deadline))
                                            :
                                            "Pick a date"
                                        }}
                                        </span>
                                        <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
                                    </Button>
                                    <input hidden>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent class="p-0 bg-black text-white">
                                <Calendar v-model="application_deadline" calendar-label="Application Deadline" initial-focus
                                    :min-value="new CalendarDate(1900, 1, 1)" :max-value="new CalendarDate(2099, 12, 31)" />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div class="grid w-full items-center gap-1.5">
                    <Label for="description">Add Description</Label>
                    <Textarea id="description" placeholder="Add description...." v-model="description" />
                </div>
            </template>
        </Modal>
    </div>
</template>

