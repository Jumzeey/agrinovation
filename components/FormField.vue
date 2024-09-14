<template>
    <!-- File Upload -->
    <div v-if="field.type === 'file-upload'" class="mb-4">
        <Label :for="field.id">{{ field.props.label }}</Label>
        <Input :id="field.id" type="file-upload" :accept="field.props.accept" @change="handleChange" />
    </div>

    <!-- File Upload -->
    <div v-else-if="field.type === 'File'" class="mb-4">
        <Label :for="field.id">{{ field.props.label }}</Label>
        <Input :id="field.id" type="file" :accept="field.props.accept" @change="handleChange" />
    </div>

    <!-- Textarea -->
    <div v-else-if="field.type === 'Textarea'" class="mb-4">
        <Label :for="field.props.id">{{ field.props.label }}</Label>
        <Textarea :id="field.props.id" :placeholder="field.props.placeholder" v-model="formDataVariables[field.model]" />
    </div>

    <!-- Select -->
    <div v-else-if="field.type === 'Select'" class="mb-4">
        <Label :for="field.id">{{ field.props.label }}</Label>
        <Select v-model="formDataVariables[field.model]" v-bind="field.props">
            <SelectTrigger class="md:w-[500px] w-full">
                <SelectValue :placeholder="field.props.placeholder" />
            </SelectTrigger>
            <SelectContent class="bg-black text-white">
                <SelectGroup>
                    <SelectLabel>{{ field.props.label }}</SelectLabel>
                    <SelectItem v-for="option in field.props.options" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>

    <!-- Input -->
    <div v-else-if="field.type === 'Input'" class="mb-4">
        <Label :for="field.id">{{ field.props.label }}</Label>
        <Input :id="field.id" v-bind="field.props" v-model="formDataVariables[field.model]" />
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select';

const props = defineProps<{
    field: {
        id: string;
        type: 'file-upload' | 'Textarea' | 'Select' | 'Input' | 'File';
        props: any;
        model: string;
    };
    formDataVariables: Record<string, any>;
}>();

const emit = defineEmits<{
    (e: 'file-upload', event: Event, fileKey: 'cacDocument' | 'businessDocument' | 'businessLogo'): void;
}>();

function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;
    if (file) {
        // Ensure props.field.model is one of the expected keys
        const fileKey = props.field.model as 'cacDocument' | 'businessDocument' | 'businessLogo';
        emit('file-upload', event, fileKey);
    }
}
</script>
