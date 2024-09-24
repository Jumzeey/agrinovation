import { ref } from "vue";
import { useFetch } from "#imports";
import { useErrorHandler } from "./useErrorHandler";
import API_PATHS from "~/utils/paths";

export function useFetchSectorTypes() {
  const sectorData = ref<SectorResponse["data"] | null>(null);
  const { handleError } = useErrorHandler();
  const config = useRuntimeConfig();

  // Function to fetch user types
  const fetchSectorTypes = async () => {
    try {
      const { data, error } = await useFetch<SectorResponse>(
        config.public.apiUrl + API_PATHS.OTHERS.SECTOR
      );

      if (error.value) {
        handleError(error.value);
        return;
      }

      if (data.value?.status) {
        sectorData.value = data.value.data || [];
        return sectorData.value
      } else {
        handleError(
          new Error(data.value?.message || "Failed to load sector types")
        );
      }
    } catch (err) {
      handleError(err);
    }
  };

  // Fetch user types immediately
  fetchSectorTypes();

  return {
    sectorData,
    fetchSectorTypes,
  };
}
