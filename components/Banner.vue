<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ImageOne, ImageThree, ImageTwo } from "./images";

const fadeContainer = ref<HTMLElement | null>(null);

const imagesGroups = {
  groupOne: ImageOne,
  groupTwo: ImageTwo,
  groupThree: ImageThree,
};

const currentImages = ref({
  groupOne: imagesGroups.groupOne.map(image => image.name),
  groupTwo: imagesGroups.groupTwo.map(image => image.name),
  groupThree: imagesGroups.groupThree.map(image => image.name),
});

const imageStates = ref({
  groupOne: imagesGroups.groupOne.map(() => true),
  groupTwo: imagesGroups.groupTwo.map(() => true),
  groupThree: imagesGroups.groupThree.map(() => true),
});

const imageClasses = ref({
  groupOne: imagesGroups.groupOne.map(() => 'zoom-in'),
  groupTwo: imagesGroups.groupTwo.map(() => 'zoom-in'),
  groupThree: imagesGroups.groupThree.map(() => 'zoom-in'),
});

function switchImageState(group: 'groupOne' | 'groupTwo' | 'groupThree') {
  imageStates.value[group] = imageStates.value[group].map(state => !state);
  currentImages.value[group] = currentImages.value[group].map((src, index) =>
    imageStates.value[group][index] ? imagesGroups[group][index].name : imagesGroups[group][index].imageright
  );
  imageClasses.value[group] = imageStates.value[group].map(state =>
    state ? 'zoom-in' : 'zoom-out'
  );
}

function nextImages(group: 'groupOne' | 'groupTwo' | 'groupThree') {
  imagesGroups[group].forEach((_, index) => {
    if (imageStates.value[group][index]) {
      currentImages.value[group][index] = imagesGroups[group][index].name;
      imageClasses.value[group][index] = 'zoom-in';
    } else {
      currentImages.value[group][index] = imagesGroups[group][index].imageright;
      imageClasses.value[group][index] = 'zoom-out';
    }
  });
}

const textOptions = ["Agro-Innovation", "Agro-Opportunities", "Agro-Collaboration"];
const currentText = ref(textOptions[0]);
const nextText = ref("");
const textClass = ref("");

function switchText() {
  const currentIndex = textOptions.indexOf(currentText.value);
  nextText.value = textOptions[(currentIndex + 1) % textOptions.length];
  textClass.value = "slide-up";
  setTimeout(() => {
    currentText.value = nextText.value;
    textClass.value = "slide-down";
  }, 500);
}


onMounted(() => {
  if (fadeContainer.value) {
    fadeContainer.value.classList.add("animate-fadeIn");
  }

  const intervals = {
    groupOneState: setInterval(() => {
      switchImageState('groupOne');
    }, 3000),
    groupTwoState: setInterval(() => {
      switchImageState('groupTwo');
    }, 3000),
    groupThreeState: setInterval(() => {
      switchImageState('groupThree');
    }, 3000),

    groupOneChange: setInterval(() => {
      nextImages('groupOne');
    }, 6000),
    groupTwoChange: setInterval(() => {
      nextImages('groupTwo');
    }, 6000),
    groupThreeChange: setInterval(() => {
      nextImages('groupThree');
    }, 6000),
  };

  setInterval(switchText, 3000);

  onUnmounted(() => {
    Object.values(intervals).forEach(clearInterval);
  });
});
</script>

<template>
  <div class="mt-10">
    <div class="flex justify-between">
      <div
        class="bg-[url('/public/images/bg.svg')] bg-contain bg-no-repeat p-0 m-0 fade-container"
        ref="fadeContainer"
      >
      <div class="text-center sm:text-left text-container">
          <h3
            class="md:text-[50px] text-[32px] px-7 md:px-0 font-bold text-[#291B0A] pb-8 mt-0 pt-0 sm:text-left"
          >
            Driving <span :class="[textClass, 'text-[#76BF20]']" class="transition-transform">{{ currentText }}</span> <br />in
            Lagos State
          </h3>
        </div>
        <div class="text-center sm:text-left">
          <p
            class="text-[#102310] text-base font-medium pb-8 px-7 md:px-0 sm:text-left"
          >
            Discover how agriculture is transforming the landscape. Stay updated
            on insights <br />from the agricultural sector
          </p>
        </div>

        <div
          class="flex max-lg:justify-start max-md:justify-center max-sm:justify-center"
        >
        <NuxtLink to="/auth/signup">
          <button
            class="px-10 py-3 text-[#FFFAFA] bg-[#275927] rounded-md mb-8 hover:cursor-pointer hover:bg-[#78BD1F]"
          >
            Get Started
          </button>
        </NuxtLink>
        </div>

        <div
          class="flex gap-[50px] max-lg:justify-start max-md:justify-center max-sm:justify-center"
        >
          <div class="flex flex-col text-center items-center">
            <img src="/images/healthicons.svg" class="mb-[15px] w-10" alt="" />
            <p class="text-[#291B0A] text-2xl font-semibold">5000</p>
            <span class="text-[#291B0A] text-md font-normal">Agripreneurs</span>
          </div>

          <div class="flex flex-col text-center items-center">
            <img src="/images/streamline.svg" class="mb-[15px] w-10" alt="" />
            <p class="text-[#291B0A] text-2xl font-semibold">5000</p>
            <span class="text-[#291B0A] text-md font-normal">Investors</span>
          </div>

          <div class="flex flex-col text-center items-center">
            <img src="/images/ic_outline.svg" class="mb-[15px] w-10" alt="" />
            <p class="text-[#291B0A] text-2xl font-semibold">5000</p>
            <span class="text-[#291B0A] text-md font-normal">Agro-Hubs</span>
          </div>
        </div>
      </div>

      <div class="hidden md:hidden lg:flex">
        <div class="flex justify-between relative gap-4">
          <div class="w-[140px]">
            <div v-for="(image, index) in currentImages.groupOne" :key="'groupOne-' + index" class="image-container mb-4 rounded-tr-[35px] rounded-bl-[35px]">
              <img :src="image" :class="imageClasses.groupOne[index]" alt="" />
            </div>
          </div>

          <div class="w-[140px] bottom-10 relative">
            <div v-for="(image, index) in currentImages.groupTwo" :key="'groupTwo-' + index" class="image-container mb-4 rounded-tr-[35px] rounded-bl-[35px]">
              <img :src="image" :class="imageClasses.groupTwo[index]" alt="" />
            </div>
          </div>

          <div class="w-[140px] top-10 relative">
            <div v-for="(image, index) in currentImages.groupThree" :key="'groupThree-' + index" class="image-container mb-4 rounded-tr-[35px] rounded-bl-[35px]">
              <img :src="image" :class="imageClasses.groupThree[index]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.fade-container {
  opacity: 0;
}

.image-container {
  overflow: hidden;
}

.zoom-in {
  transform: scale(1);
}

.zoom-out {
  transform: scale(1.2);
}

img {
  transition: transform 0.5s ease-in-out;
}

.text-container {
  position: relative;
  overflow: hidden;
}

.text-container span {
  display: inline-block;
  transition: transform 0.5s ease-in-out;
}

.slide-up {
  transform: translateY(-100%);
}

.slide-down {
  transform: translateY(0);
}

@keyframes slideUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

</style>


