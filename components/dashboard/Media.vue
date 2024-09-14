<template>
  <div>
    <div class="bg-white rounded-lg p-4">
      <div class="border-b flex justify-between items-center pb-3">
        <p>Media</p>
        <button class="py-2 px-3 border border-border_col rounded-md cursor-pointer" @click="openModal">
          <p class="text-priText">Add Media</p>
        </button>
      </div>
      <div class="mt-3">
        <div v-if="profileData?.media?.length > 0">
          <div class="grid grid-cols-3 gap-4">
            <div v-for="(image, index) in displayedImages" :key="index"
              class="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
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

    <Modal :shows="showModal" title="Add Media" width="w-[650px]" :icon="CDN_IMAGES.edit_about_icon"
      @closeModal="closeModal" class="flex flex-col gap-6" :buttonText="'Add'" :onSubmit="handleSubmit"
      :loading="loading">
      <template #content>
        <div class="grid grid-cols-1 gap-6">
          <div>
            <Label for="sector">Media Type</Label>
            <Select v-model="selectedMediaType">
              <SelectTrigger class="w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent class="bg-black text-white">
                <SelectGroup>
                  <SelectLabel>Select Type</SelectLabel>
                  <SelectItem value="file">File</SelectItem>
                  <SelectItem value="link">Link</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div class="grid w-full items-center gap-1.5" v-if="selectedMediaType === 'link'">
            <Label for="link">Media Link</Label>
            <Input id="link" type="text" placeholder="link..." v-model="link" />
          </div>
          <div class="grid w-full items-center gap-1.5" v-if="selectedMediaType === 'file'">
            <Label for="image">Image</Label>
            <Input id="image" type="file" @change="handleFileUpload($event, 'imageFile')" />
          </div>
          <div class="grid w-full items-center gap-1.5">
            <Label for="description">Short Description</Label>
            <Textarea id="description" placeholder="Short description...." v-model="description" />
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}

.aspect-w-16 {
  aspect-ratio: 16 / 9;
}

.aspect-h-9 {
  aspect-ratio: 16 / 9;
}
</style>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { CDN_IMAGES } from "../../assets/cdnImages";
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { updateMediaHandler } from '~/composables/useUpdateMedia';

const { updateMedia, loading } = updateMediaHandler();

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
const link = ref('');
const description = ref('');
const selectedMediaType = ref(null);
const imageFile = ref<File | null>(null);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

const images = computed<Image[]>(() => {
  if (!props?.profileData || !props?.profileData?.media) return [];
  return props.profileData.media.map((media: MediaItem) => ({
    id: media?.id || 0,
    src: media?.image || media?.media_link,
    description: media?.description || "",
  }));
});

const displayedImages = ref<Image[]>(images.value.slice(0, 6));

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

const handleFileUpload = (event: Event, fileKey: 'imageFile') => {
  const target = event.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null;

  if (file && fileKey === 'imageFile') imageFile.value = file;
};

const handleSubmit = async () => {
  if (!props.profileData || !props.profileData.user_type_id) {
    console.error('User type ID is missing or undefined');
    return;
  }
  const formData = new FormData();

  formData.append('user_id', props.profileData.user_id);
  formData.append('description', description.value);
  formData.append('media_link', link.value);
  if (imageFile.value) {
    formData.append('image', imageFile.value);
  }

  await updateMedia(formData);
};
</script>
