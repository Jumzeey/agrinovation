import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export function useErrorHandler() {
  const error = ref(null)
  const toast = useToast()

  const handleError = (err) => {
  let errorMessage = 'An error occurred';

  if (err && err.response) {
    // Handle the specific structure of your error response
    if (err.response.errors) {
      const errorDetails = err.response.errors;
      errorMessage = Object.values(errorDetails)
        .flat()
        .join(' ');
    } else if (err.response.data && err.response.data.message) {
      errorMessage = err.response.data.message;
    }
  } else if (err && err.message) {
    errorMessage = err.message;
  }

  console.log("Error handled:", err); // Log the entire error object for debugging
  error.value = errorMessage;
  toast.error(errorMessage); // Show error toast
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
