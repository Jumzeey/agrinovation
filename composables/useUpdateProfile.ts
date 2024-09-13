import { ref } from "vue";
import { useErrorHandler } from "./useErrorHandler";
import { useFetch, useCookie, useRuntimeConfig } from "#imports";
import API_PATHS from "~/utils/paths";


export function updateProfileHandler() {
  const { error, handleError, handleSuccess } = useErrorHandler();
  const loading = ref(false);
  const config = useRuntimeConfig();
  const token = useCookie("authToken");

  const updateProfile = async (credentials: FormData): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const { data, error: fetchError } = await useFetch<any>(
        config.public.apiUrl + API_PATHS.USERS.UPDATE_PROFILE,

        {
          method: "POST",
          body: credentials,
          headers: {
            Authorization: `Bearer ${token.value}`
          },
        }
      );

      if (fetchError?.value) {
        console.error("Detailed fetchError:", fetchError.value.data);
        handleError(fetchError?.value?.data);
        return;
      }

      if (data.value?.status) {
        handleSuccess(data.value);
        window.location.reload();
      } else {
        handleError(fetchError.value?.data);
      }
    } catch (err) {
      console.error("Caught error:", err);
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    updateProfile,
  };
}