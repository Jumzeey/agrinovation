import { useQuery } from "@tanstack/vue-query";
import API_PATHS from "~/utils/paths";
import { useErrorHandler } from "~/composables/useErrorHandler";

const fetchInvestors = async (
  params: SearchInvestorData
): Promise<InvestorResponse> => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const query = new URLSearchParams({
    location: params.location ?? "",
    sector: params.sector ?? "",
    scale: params.scale ?? "",
    produce_type: params.type ?? "",
    page: params.page?.toString() ?? "1",
  });

  const response = await fetch(
    `${apiUrl}${API_PATHS.INVESTOR.ALL}?${query.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch investors");
  }

  return response.json();
};

export const useGetInvestors = (params: SearchInvestorData) => {

  const queryKey = ["investors", params];

  const query = useQuery<InvestorResponse, Error>({
    queryKey,
    queryFn: () => fetchInvestors(params),
    staleTime: 0,
  });

  // Watch query status to handle success and error cases
  if (query.isSuccess) {
    const successMessage = "Investors fetched successfully";
    console.log("Fetched data:", successMessage);
  }

  if (query.isError) {
    console.log(query.error); // Handle error and show error toast
  }

  return query;
};
