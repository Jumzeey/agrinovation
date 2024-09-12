import { ref } from "vue";
import { useErrorHandler } from "./useErrorHandler";
import API_PATHS from "~/utils/paths";


export function updateProfileHandler() {
  const { error, handleError, handleSuccess } = useErrorHandler();
  const loading = ref(false);

  const updateProfile = async (credentials: UserProfileData): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const { data, error } = await useFetchInstance<any>(
        API_PATHS.USERS.UPDATE_PROFILE,
        {
          method: "POST",
          body: credentials,
        }
      );
      if (error) {
        console.log(error.value?.data);
      }

      if (data.value?.status) {
        handleSuccess(data.value.message);
        window.location.reload();
      } else {
        handleError(error.value?.data);
      }
    } catch (err: any) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };
  return {
    updateProfile,
  };
}