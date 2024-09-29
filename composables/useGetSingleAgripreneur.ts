import { useQuery } from "@tanstack/vue-query";
import API_PATHS from "~/utils/paths";
import { useErrorHandler } from "~/composables/useErrorHandler";

const fetchSingleAgripreneur = async (
  id: string
): Promise<AgripreneurDetails> => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const response = await fetch(`${apiUrl}/agripreneur/single?id=${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch agripreneur");
  }

  return response.json();
};

export const useGetSingleAgripreneur = (id: string) => {

  const queryKey = ["agripreneur", id];

  const query = useQuery<AgripreneurDetails, Error>({
    queryKey,
    queryFn: () => fetchSingleAgripreneur(id),
    enabled: !!id,
    refetchOnWindowFocus: true,
  });

  // Watch query status to handle success and error cases
  if (query.isSuccess) {
    const successMessage = "Agripreneur fetched successfully";
    console.log("Fetched data:", successMessage);
  }

  if (query.isError) {
    console.log(query.error); // Handle error and show error toast
  }

  return query;
};
