import { ref } from "vue";
import { useErrorHandler } from "./useErrorHandler";
import API_PATHS from "~/utils/paths";

export function userProfile() {
  const { error, handleError, handleSuccess } = useErrorHandler();

  const loading = ref(false);
  const profileData = ref<ProfileResponse | null>(null);

  const profile = async (
    credentials: ProfileData
  ): Promise<ProfileResponse | null> => {
    loading.value = true;
    try {
      const { data, error } = await useFetchInstance<ProfileResponse>(
        API_PATHS.USERS.PROFILE,
        {
          method: "GET",
          params: credentials,
        }
      );

      if (data.value) {
        console.log("the profile response: ", data?.value?.data);
        return data?.value; // Return the profile data
      } else {
        console.log("the error: ", error.value?.message);
        handleError(error.value?.data);
      }
    } catch (error) {
      handleError(error);
    } finally {
      loading.value = false;
    }

    return null; // Return null if no data is available
  };

  return {
    profile,
    profileData,
    error,
    loading,
  };
}
