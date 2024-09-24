import { ref } from "vue";
import { useErrorHandler } from "./useErrorHandler";
import API_PATHS from "~/utils/paths";

export function userGetInvestor() {
  const { error, handleError, handleSuccess } = useErrorHandler();

  const loading = ref(false);
  const investorData = ref<InvestorResponse["data"] | null>(null);

  const investor = async (
    credentials: SearchInvestorData
  ): Promise<any["data"] | null> => {
    loading.value = true;
    try {
      const { data, error } = await useFetchInstance<InvestorResponse>(
        API_PATHS.INVESTOR.ALL,
        {
          method: "GET",
          params: credentials,
        }
      );

      if (data.value) {
        investorData.value = data.value.data;
        handleSuccess("Investors fetched succesfully!");
        return investorData.value;
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
    investor,
    investorData,
    loading,
  };
}
