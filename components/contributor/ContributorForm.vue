<script setup lang="ts">
import Modal from "../modal/Modal.vue";
import TextInput from "../inputs/TextInput.vue";
import ButtonInput from "../inputs/ButtonInput.vue";

interface Ipermits {
  show: boolean;
}

const props = defineProps<Ipermits>();

const emit = defineEmits<{
  (e: "closeModal"): void;
}>();
</script>

<template>
  <div>
    <Modal
      :shows="show"
      @closeModal="() => emit('closeModal')"
      title="Be a Contributor"
      width="w-11/12 lg:w-1/2 xl:w-1/3 2xl:w-[50%]"
    >
      <template v-slot:content>
        <div class="mt-5">
            <div class="grid grid-cols-2 gap-3 mb-3">
                <div>
                    <TextInput
                        label="First Name"
                        :onChange="console.log"
                        important="*"
                        border
                    />
                </div>

                <div>
                    <TextInput
                        label="Last Name"
                        :onChange="console.log"
                        important="*"
                        border
                    />
                </div>

                <div>
                    <TextInput
                        label="Institution (optional)"
                        :onChange="console.log"
                        important=""
                        border
                    />
                </div>

                <div>
                    <TextInput
                        label="Email"
                        :onChange="console.log"
                        important="*"
                        border
                    />
                </div>

                <div>
                    <TextInput
                        label="Phone Number"
                        :onChange="console.log"
                        important=""
                        border
                    />
                </div>

                <div>
                    <TextInput
                        label="Reason"
                        :onChange="console.log"
                        important="*"
                        border
                    />
                </div>
            </div>

            <div class="grid grid-cols">
                <TextInput
                    label="Your Message"
                    :onChange="console.log"
                    important="*"
                    border
                />
            </div>

            <div class="mt-5">
                <ButtonInput bg="bg-[#275927]" text="text-[#fff]" class="text-sm" :onClick="console.log"> Send </ButtonInput>
            </div>
        </div>
      </template>
    </Modal>
  </div>
</template>
