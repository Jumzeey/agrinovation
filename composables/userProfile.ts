import { ref } from "vue";
import { useErrorHandler } from "./useErrorHandler";
import API_PATHS from "~/utils/paths";

export function userProfile() {
  const { error, handleError, handleSuccess } = useErrorHandler();

  const loading = ref(false);
  const profileData = ref<ProfileResponse["data"] | null>(null);

  const profile = async (
    credentials: ProfileData
  ): Promise<ProfileResponse["data"] | null> => {
    loading.value = true;
    console.log('profile creentialts: ', credentials)
    try {
      const { data, error } = await useFetchInstance<ProfileResponse>(
        API_PATHS.USERS.PROFILE,
        {
          method: "GET",
          params: credentials,
        }
      );

      if (data.value) {
        console.log("Profile response:", data.value.data);
        profileData.value = data.value.data;
        return profileData.value;
      } else {
        handleError(error.value);
      }
    } catch (error) {
      console.log(error);
      handleError(error);
    } finally {
      loading.value = false;
    }

    return null; // Return null if no data is available
  };

  return {
    profile,
    profileData,
    loading,
  };
}
