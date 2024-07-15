<script setup lang="ts">
useHead({
  title: 'Agrinnovation',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test',
  },
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css' }
  ],
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>


<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
