import { ref } from "vue";
import { useFetch } from "#imports";
import { useErrorHandler } from "./useErrorHandler";
import API_PATHS from "~/utils/paths";

export function useFetchProduceTypes() {
  const produceTypes = ref<any>();
  const { handleError } = useErrorHandler();
  const config = useRuntimeConfig();

  const fetchProduceTypes = async () => {
    try {
      const { data, error } = await useFetch<produceTypeList>(
        config.public.apiUrl + API_PATHS.OTHERS.PRODUCE_TYPES
      );

      if (error.value) {
        handleError(error.value);
        return;
      }

      if (data.value?.status) {
        console.log("produce types: ", data.value);
        produceTypes.value = data.value.data || [];
      } else {
        handleError(
          new Error(data.value?.message || "Failed to load user types")
        );
      }
    } catch (err) {
      handleError(err);
    }
  };

  // Fetch user types immediately
  fetchProduceTypes();

  return {
    produceTypes,
    fetchProduceTypes,
  };
}
