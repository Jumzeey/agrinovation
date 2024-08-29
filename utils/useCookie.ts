export function useCookieUtils() {
  const getCookie = (name: string): string | null => {
    return useCookie(name).value || null;
  };

  const setCookie = (
    name: string,
    value: string | null,
    options: { path?: string; maxAge?: number } = {}
  ) => {
    const cookie = useCookie(name, options);
    cookie.value = value;
  };

  return { getCookie, setCookie };
}
