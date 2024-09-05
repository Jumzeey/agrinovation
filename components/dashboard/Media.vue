<template>
  <div>
    <div class="bg-white rounded-lg p-4">
      <div class="border-b flex justify-between items-center pb-3">
        <div>
          <p>Media</p>
        </div>
        <button class="py-2 px-3 border border-border_col rounded-md  cursor-pointer" @click="openModal">
          <p class="text-priText">Add Media</p>
        </button>
      </div>
      <div>
        <div>
          <div v-if="profileData.media.length > 0">
            <div class="grid grid-cols-3 gap-4 mt-3 overflow-hidden">
              <div v-for="(image, index) in displayedImages" :key="index"
                class="relative w-full h-full rounded-lg overflow-hidden">
                <transition name="fade" mode="out-in">
                  <img :src="image.src" :alt="image.description" :key="image.src" class="object-cover w-full h-full" />
                </transition>
              </div>
            </div>
          </div>
          <div v-else>
            <EmptyState />
          </div>
        </div>
      </div>
    </div>
    <Modal :shows="showModal" title="Add Media" width="w-[650px]" :icon="CDN_IMAGES.edit_about_icon"
      @closeModal="closeModal" class="flex flex-col gap-6" :buttonText="'Add'" :onSubmit="handleSubmit">
      <template #content>
        <div class="grid grid-cols-1 gap-6">
          <div class="grid w-full items-center gap-1.5">
            <Label for="link">Media Link</Label>
            <Input id="link" type="text" placeholder="link..." />
          </div>
          <div class="grid w-full items-center gap-1.5">
            <Label for="description">Short Description</Label>
            <Textarea id="description" placeholder="Short description...." />
          </div>
          <div class="grid w-full items-center gap-1.5">
            <Label for="image">Image</Label>
            <Input id="image" type="file" />
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>
  
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { CDN_IMAGES } from "../../assets/cdnImages";
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const props = defineProps({
  profileData: {
    type: Object,
    required: true,
  },
});

interface Image {
  id: number;
  src: string;
  description: string;
}

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

function handleSubmit() {
  console.log('submityed')
}

const images = computed<Image[]>(() => {
  // Check if profileData and its media are available
  if (!props.profileData?.media) return [];

  // Map the media to the Image type
  return props.profileData?.media?.map((media: MediaItem) => ({
    id: media.id,
    src: media.image,
    description: media.description,
  }));
});

const displayedImages = ref(images.value.slice(0, 6));

console.log('the displayed imagez:', displayedImages.value.length)

// Function to rotate images randomly
const rotateImagesRandomly = () => {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * displayedImages.value.length);
    const randomImageIndex = Math.floor(Math.random() * images.value.length);
    displayedImages.value[randomIndex] = images.value[randomImageIndex];
  }, Math.random() * 4000 + 2000);
};

onMounted(() => {
  rotateImagesRandomly();
});

watch(images, (newImages) => {
  displayedImages.value = newImages.slice(0, 6);
  console.log('Updated displayed images:', displayedImages.value);
});

</script>
  