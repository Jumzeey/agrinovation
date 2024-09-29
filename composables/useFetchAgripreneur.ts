import { useQuery } from "@tanstack/vue-query";
import API_PATHS from "~/utils/paths";

const fetchAgripreneurs = async (
  params: SearchAgripreneurData
): Promise<AgripreneurResponse> => {

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
    `${apiUrl}${API_PATHS.AGRIPRENEUR.ALL}?${query.toString()}`
  );

  if (!response.ok) {
    if (!navigator.onLine) {
      throw new Error("No network connection");
    }
    throw new Error("Failed to fetch agripreneurs");
  }

  return response.json();
};

export const useGetAgripreneur = (params: SearchAgripreneurData) => {

  const queryKey = ["agripreneurs", params];

  const query = useQuery<AgripreneurResponse, Error>({
    queryKey,
    queryFn: () => fetchAgripreneurs(params),
    staleTime: 0,
  });

  // Watch query status to handle success and error cases
  if (query.isSuccess) {
    const successMessage = 'Agripreneurs fetched successfully';
    console.log("Fetched data:", successMessage);
  }

  if (query.isError) {
    console.log(query.error); // Handle error and show error toast
  }

  return query;
};
