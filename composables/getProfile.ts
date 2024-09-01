import { ref } from "vue";
import { useErrorHandler } from "./useErrorHandler";
import API_PATHS from "~/utils/paths";
import { useFetch, useRuntimeConfig } from "#imports";

export function userProfile() {
  const { error, handleError, handleSuccess } = useErrorHandler();
  const config = useRuntimeConfig();

  const loading = ref(false);

  const profile = async (credentials: GetProfileData): Promise<void> => {
    loading.value = true;
    try {
      const { data, error, status } = await useFetch<ForgotPasswordResponse>(
        config.public.apiUrl + API_PATHS.AUTH.FORGOT_PASSSWORD,
        {
          method: "POST",
          body: credentials,
        }
      );

      if (data.value) {
        handleSuccess(data.value.message);
      } else {
        handleError(error.value?.data);
      }
    } catch (error) {
      handleError(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    profile,
    error,
    loading,
  };
}
