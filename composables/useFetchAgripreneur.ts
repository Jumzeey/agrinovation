import { ref } from "vue";
import { useErrorHandler } from "./useErrorHandler";
import API_PATHS from "~/utils/paths";

export function useGetAgripreneur() {
  const { error, handleError, handleSuccess } = useErrorHandler();

  const loading = ref(false);
  const agripreneurData = ref<AgripreneurResponse | null>(null);
  const pagination = ref<AgripreneurPagination | null>(null);

  const agripreneur = async (
    credentials: SearchAgripreneurData
  ): Promise<AgripreneurResponse | null> => {
    loading.value = true;

    try {
      const { data, error } = await useFetchInstance<AgripreneurResponse>(
        API_PATHS.AGRIPRENEUR.ALL,
        {
          method: "GET",
          params: credentials,
        }
      );

      if (data.value) {
        agripreneurData.value = data.value;
        pagination.value = data?.value?.pagination || null;

        console.log('pagination data: ', pagination.value)
        handleSuccess("Agripreneurs fetched successfully!");
      } else {
        handleError(error.value);
      }
    } catch (error) {
      console.log(error);
      handleError(error);
    } finally {
      loading.value = false;
    }

    return null;
  };

  return {
    agripreneur,
    agripreneurData,
    pagination,
    loading,
  };
}
