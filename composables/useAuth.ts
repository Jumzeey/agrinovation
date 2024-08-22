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

  // Initialize cookies and retrieve the token immediately
  const tokenCookie = useCookie("authToken", {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  token.value = tokenCookie.value || null;

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
        userType.value = data.value.data.user_type;
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

        // Store the token in the cookie
        tokenCookie.value = token.value;
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
    tokenCookie.value = null; // Clear the token from the cookie
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
