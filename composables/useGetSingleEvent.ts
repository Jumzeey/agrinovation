import { useQuery } from "@tanstack/vue-query";

const fetchSingleEvent = async (id: string): Promise<EventDetails> => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const response = await fetch(`${apiUrl}/event?id=${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch event");
  }

  return response.json();
};

export const useGetSingleEvent= (id: string) => {

  const queryKey = ["event", id];

  const query = useQuery<EventDetails, Error>({
    queryKey,
    queryFn: () => fetchSingleEvent(id),
    enabled: !!id,
    refetchOnWindowFocus: true,
  });

  // Watch query status to handle success and error cases
  if (query.isSuccess) {
    const successMessage = "Event fetched successfully";
    console.log("Fetched data:", successMessage);
  }

  if (query.isError) {
    console.log(query.error); // Handle error and show error toast
  }

  return query;
};
