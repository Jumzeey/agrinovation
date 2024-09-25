import { useQuery } from "@tanstack/vue-query";
import API_PATHS from "~/utils/paths";
import { useErrorHandler } from "~/composables/useErrorHandler";

const fetchSingleInvestor = async (id: string): Promise<InvestorDetails> => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const response = await fetch(`${apiUrl}/investor/single?id=${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch investor");
  }

  return response.json();
};

export const useGetSingleInvestor = (id: string) => {
  const { handleError, handleSuccess } = useErrorHandler();

  const queryKey = ["investor", id];

  const query = useQuery<InvestorDetails, Error>({
    queryKey,
    queryFn: () => fetchSingleInvestor(id),
    enabled: !!id,
    refetchOnWindowFocus: true,
  });

  // Watch query status to handle success and error cases
  if (query.isSuccess) {
    const successMessage = "investor fetched successfully";
    console.log("Fetched data:", successMessage);
  }

  if (query.isError) {
    console.log(query.error); // Handle error and show error toast
  }

  return query;
};
