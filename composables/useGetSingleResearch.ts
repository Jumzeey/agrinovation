import { useQuery } from "@tanstack/vue-query";

const fetchSingleResearch = async (id: string): Promise<ResearchDetails> => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const response = await fetch(`${apiUrl}/research/single?id=${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch research");
  }

  return response.json();
};

export const useGetSingleResearch = (id: string) => {
  const queryKey = ["research", id];

  const query = useQuery<ResearchDetails, Error>({
    queryKey,
    queryFn: () => fetchSingleResearch(id),
    enabled: !!id,
    refetchOnWindowFocus: true,
  });

  // Watch query status to handle success and error cases
  if (query.isSuccess) {
    const successMessage = "Research fetched successfully";
    console.log("Fetched data:", successMessage);
  }

  if (query.isError) {
    console.log(query.error); // Handle error and show error toast
  }

  return query;
};
