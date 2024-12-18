import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export function useErrorHandler() {
  const error = ref(null)
  const toast = useToast()

const handleError = (err) => {
  toast.error(err); // Show error toast
};



  const handleSuccess = (message) => {
    toast.success(message) // Show success toast
  }

  return {
    error,
    handleError,
    handleSuccess,
  }
}
