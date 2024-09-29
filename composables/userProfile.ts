import { useQuery } from "@tanstack/vue-query";
import API_PATHS from "~/utils/paths";
import { useErrorHandler } from "./useErrorHandler";
import { useCookie, useRuntimeConfig } from "#imports";
import type { ProfileCredentials } from "~/utils/types";

const fetchUserProfile = async (): Promise<ProfileResponse | null> => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  // Fetch the auth token from the cookie
  const token = useCookie("authToken").value;

  const user_id = useCookie("userId").value;
  const user_type_id = useCookie("userTypeId").value;

  if (!user_id || !user_type_id) {
    throw new Error("User credentials missing");
  }

  const query = new URLSearchParams({
    id: user_id,
    type: user_type_id,
  }).toString();

  const response = await fetch(`${apiUrl}${API_PATHS.USERS.PROFILE}?${query}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (!navigator.onLine) {
      throw new Error("No network connection");
    }
    throw new Error("Failed to fetch profile data");
  }

  const data = await response.json();
  return data?.data || null; // Ensure to return only the data property
};

export const useUserProfile = () => {

  const query = useQuery<ProfileResponse | null, Error>({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
    staleTime: 0,
    enabled: !!useCookie("authToken").value,
    refetchOnWindowFocus: true,
  });

  // Watch query status to handle success and error cases
  if (query.isSuccess) {
    console.log("Profile fetched successfully");
  }

  if (query.isError) {
    console.log(query.error);
  }

  return query;
};
