<script setup lang="ts">
useHead({
  title: 'Agrinnovation',
  meta: [
    { name: 'description', content: 'Agriculture investment platform.' }
  ],
  bodyAttrs: {
    class: 'test',
  },
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined' }
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
