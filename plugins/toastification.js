// plugins/toastification.js

import VueToastification from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueToastification, {
    // You can set global options here
    timeout: 5000,
    position: 'top-right',
    closeOnClick: true,
    pauseOnHover: true,
  })
})
