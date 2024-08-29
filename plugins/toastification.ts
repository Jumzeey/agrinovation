import { defineNuxtPlugin } from "#app";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    timeout: 5000,
    position: "top-right", // Updated for better compatibility
    closeOnClick: true,
    pauseOnHover: true,
  });
});
