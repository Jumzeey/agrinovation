import { useQuery } from "@tanstack/vue-query";
import API_PATHS from "~/utils/paths";

const fetchProduceTypes = async (): Promise<ProduceTypes[]> => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const response = await fetch(`${apiUrl}${API_PATHS.OTHERS.PRODUCE_TYPES}`);

  if (!response.ok) {
    throw new Error("Failed to fetch produce types");
  }

  const data: produceTypeList = await response.json();

  if (!data.status) {
    throw new Error(data.message);
  }

  return data.data;
};

export const useFetchProduceTypes = () => {
  const queryKey = ["produceTypes"];

  const query = useQuery<ProduceTypes[], Error>({
    queryKey,
    queryFn: fetchProduceTypes,
  });

  // Watch query status to handle success and error cases
  if (query.isSuccess) {
    console.log("Fetched data:", query.data);
  }

  if (query.isError) {
    console.log(query.error);
  }

  return query;
};
