<template>
    <div>
        <Label :for="id">{{ label }}</Label>
        <Select :model-value="modelValue" :id="id" @update:modelValue="updateValue">
            <SelectTrigger class="md:w-[150px] w-full">
                <SelectValue :placeholder="placeholder" />
            </SelectTrigger>
            <SelectContent class="bg-black text-white">
                <SelectGroup>
                    <SelectLabel>{{ label }}</SelectLabel>
                    <SelectItem v-for="option in options" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    id: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    modelValue: { type: [String, Number], required: true },
    options: {
        type: Array as () => Array<{ value: string | number, label: string }>,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

// Emit the value back to the parent
const updateValue = (value: string | number) => {
    emit('update:modelValue', value);
};
</script>