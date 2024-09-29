import { useQuery } from "@tanstack/vue-query";
import API_PATHS from "~/utils/paths";

const fetchEvents = async (params: SearchEventData): Promise<EventResponse> => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const query = new URLSearchParams({
    search: params.search ?? "",
    page: params.page?.toString() ?? "1",
  });

  const response = await fetch(
    `${apiUrl}${API_PATHS.EVENT.ALL}?${query.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
};

export const useGetEvents = (params: SearchEventData) => {
  const queryKey = ["events", params];

  const query = useQuery<EventResponse, Error>({
    queryKey,
    queryFn: () => fetchEvents(params),
    staleTime: 0,
  });

  // Watch query status to handle success and error cases
  if (query.isSuccess) {
    const successMessage = "Events fetched successfully";
    console.log("Fetched data:", successMessage);
  }

  if (query.isError) {
    console.log(query.error); // Handle error and show error toast
  }

  return query;
};
