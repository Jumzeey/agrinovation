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
      <div class="grid grid-cols-3 gap-4 mt-3 overflow-hidden">
        <div v-for="(image, index) in displayedImages" :key="index"
          class="relative w-full h-full rounded-lg overflow-hidden">
          <transition name="fade" mode="out-in">
            <img :src="image.src" :alt="image.alt" :key="image.src" class="object-cover w-full h-full" />
          </transition>
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

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

const handleSubmit = () => {
  console.log('submitted')
}

const images = [
  { src: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868268.svg?updatedAt=1723635165450', alt: 'Image 1' },
  { src: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868269.svg?updatedAt=1723635165255', alt: 'Image 2' },
  { src: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868270.svg?updatedAt=1723635164106', alt: 'Image 3' },
  { src: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868271.svg?updatedAt=1723635163817', alt: 'Image 4' },
  { src: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868269.svg?updatedAt=1723635165255', alt: 'Image 5' },
  { src: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868270.svg?updatedAt=1723635164106', alt: 'Image 6' },
  { src: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868268.svg?updatedAt=1723635165450', alt: 'Image 7' },
  { src: 'https://ik.imagekit.io/bx7bddg8a/Agrinovation/Frame%201618868271.svg?updatedAt=1723635163817', alt: 'Image 8' },
  // Add more images as needed
];

const displayedImages = ref(images.slice(0, 6)); // Display first 6 images

// Function to rotate images randomly
const rotateImagesRandomly = () => {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * displayedImages.value.length);
    const randomImageIndex = Math.floor(Math.random() * images.length);
    displayedImages.value[randomIndex] = images[randomImageIndex];
  }, Math.random() * 4000 + 2000); // Change an image every 2-6 seconds
};

onMounted(() => {
  rotateImagesRandomly();
});
</script>
  