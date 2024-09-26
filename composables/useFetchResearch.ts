import { useQuery } from "@tanstack/vue-query";
import API_PATHS from "~/utils/paths";

const fetchResearchers = async (
  params: SearchResearchData
): Promise<ResearchResponse> => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const query = new URLSearchParams({
    search: params.search ?? "",
    page: params.page?.toString() ?? "1",
  });

  const response = await fetch(
    `${apiUrl}${API_PATHS.RESEARCHER.ALL}?${query.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch researches");
  }

  return response.json();
};

export const useGetResearches = (params: SearchResearchData) => {
  const queryKey = ["researches", params];

  const query = useQuery<ResearchResponse, Error>({
    queryKey,
    queryFn: () => fetchResearchers(params),
    staleTime: 0,
  });

  // Watch query status to handle success and error cases
  if (query.isSuccess) {
    const successMessage = "Researches fetched successfully";
    console.log("Fetched data:", successMessage);
  }

  if (query.isError) {
    console.log(query.error);
  }

  return query;
};
