import { useFetch, useCookie, useRuntimeConfig } from "#imports";

export function useFetchInstance<T>(url: string, options: any = {}) {
  const config = useRuntimeConfig();
  const token = useCookie("authToken");

  let headers: Record<string, string> = {
    Authorization: `Bearer ${token.value}`,
    Accept: "application/json",
  };

  const isFormData = options.body instanceof FormData;

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  } else {
    headers["Content-Type"] = "multipart/form-data";
  }

  headers = { ...headers, ...options.headers };

  // Use `useFetch` from Nuxt to make the API request
  const { data, error } = useFetch<T>(config.public.apiUrl + url, {
    ...options,
    headers,
  });
console.log("Final API URL:", config.public.apiUrl + url);

  return {
    data,
    error, // Ensure `error` is properly returned
  };
}
