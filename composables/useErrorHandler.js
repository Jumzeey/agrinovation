import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export function useErrorHandler() {
  const error = ref(null)
  const toast = useToast()

  const handleError = (err) => {
    let errorMessage = 'An error occurred'

    if (err.response) {
      // Handle the specific structure of your error response
      if (err.errors) {
        // Extract and combine all detailed error messages
        const errorDetails = err.errors
        errorMessage = Object.values(errorDetails)
          .flat()
          .join(' ')
      } else if (err.response.data.message) {
        errorMessage = err.response.data.message
      }
    } else if (err.message) {
      errorMessage = err.message
    }

    error.value = errorMessage
    toast.error(errorMessage) // Show error toast
  }

  const handleSuccess = (message) => {
    toast.success(message) // Show success toast
  }

  return {
    error,
    handleError,
    handleSuccess,
  }
}
