import { useFetch, useCookie, useRuntimeConfig } from "#imports";

export function useFetchInstance<T>(url: string, options: any = {}) {
  const config = useRuntimeConfig();
  const token = useCookie("authToken");

  // Merge default headers with any headers passed in the options
  const headers = {
    Authorization: `Bearer ${token.value}`,
    Accept: "application/json",
    ...options.headers, // Merge with any custom headers
  };

  return useFetch<T>(config.public.apiUrl + url, {
    ...options,
    headers, // Include the headers in the request
  });
}
