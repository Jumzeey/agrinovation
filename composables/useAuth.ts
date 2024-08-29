import { ref } from "vue";
import { useRouter } from "vue-router";
import { useErrorHandler } from "./useErrorHandler";
import API_PATHS from "~/utils/paths";
import { useFetch, useRuntimeConfig, useCookie } from "#imports";

export function useAuth() {
  const loading = ref(false);
  const token = ref<string | null>(null);
  const router = useRouter();
  const { error, handleError, handleSuccess } = useErrorHandler();
  const userType = ref<string | null>(null);

  const { getCookie, setCookie } = useCookieUtils();

  token.value = getCookie("authToken");
  userType.value = getCookie("userType");

  const config = useRuntimeConfig();

  const signup = async (userData: Record<string, any>): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const { data, error: fetchError } = await useFetch<SignupResponse>(
        config.public.apiUrl + API_PATHS.AUTH.SIGNUP,
        {
          method: "POST",
          body: userData,
        }
      );
      if (fetchError) {
        console.log(fetchError.value?.data);
      }

      if (data.value?.status) {
        handleSuccess(data.value.message);
        router.push("/auth/login");
      } else {
        handleError(fetchError.value?.data);
      }
    } catch (err: any) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  const login = async (credentials: LoginData): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const { data, error: fetchError } = await useFetch<AuthResponse>(
        config.public.apiUrl + API_PATHS.AUTH.LOGIN,
        {
          method: "POST",
          body: credentials,
        }
      );

      if (data.value?.status) {
        const response = data.value.data;
        userType.value = response.user_type;
        token.value = response.token;
        console.log("user type: ", userType.value);

        // Store the token and userType in cookies
        setCookie("authToken", token.value, {
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        });
        setCookie("userType", userType.value, {
          path: "/dashboard",
          maxAge: 60 * 60 * 24 * 7,
        });
        handleSuccess("Login successful!");

        // Check current route before navigating
        if (router.currentRoute.value.path !== "/dashboard") {
          router.push("/dashboard");
        }
      } else {
        handleError(fetchError.value?.data);
      }
    } catch (err: any) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  const logout = (): void => {
    token.value = null;
    userType.value = null;
    setCookie("authToken", null); // Clear the token from the cookie
    setCookie("userType", null); // Clear the userType from the cookie
    handleSuccess("Logged out successfully");
    router.push("/"); // Redirect to the home page
  };

  return {
    signup,
    login,
    token,
    logout,
    loading,
    error,
    userType, 
  };
}
