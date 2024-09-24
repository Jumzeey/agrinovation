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
  const user_id = ref<number>();
  const user_type_id = ref<number>();

  const { getCookie, setCookie } = useCookieUtils();

  token.value = getCookie("authToken");
  userType.value = getCookie("userType");
  user_id.value = Number(getCookie("userId"));
  user_type_id.value = Number(getCookie("userTypeId"));

  const config = useRuntimeConfig();

  const signup = async (credentials: SignUpData): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const { data, error: fetchError } = await useFetch<SignupResponse>(
        config.public.apiUrl + API_PATHS.AUTH.SIGNUP,
        {
          method: "POST",
          body: credentials,
        }
      );
      if (fetchError) {
        console.log(fetchError.value?.data);
      }

      if (data.value?.status) {
        handleSuccess(data.value.message);
        router.push("/auth/verify");
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
     const { data, error: fetchError } = await useFetch<LoginResponse>(
       config.public.apiUrl + API_PATHS.AUTH.LOGIN,
       {
         method: "POST",
         body: credentials,
       }
     );

     if (fetchError && fetchError.value) {
       handleError(fetchError.value?.data);
     } else if (data.value?.status) {
       const response = data.value.data;
       userType.value = response.user_type;
       token.value = response.token;
       user_id.value = response.user_id;
       user_type_id.value = response.user_type_id;
       console.log("user type: ", userType.value);

       // Store the token and userType in cookies
       setCookie("authToken", token.value, {
         path: "/",
       });
       setCookie("userType", userType.value, {
         path: "/dashboard",
       });
       setCookie("userId", user_id.value.toString(), {
         path: "/dashboard",
       });
       setCookie("userTypeId", user_type_id.value?.toString(), {
         path: "/dashboard",
       });

       handleSuccess("Login successful!");

       // Navigate to dashboard
       await router.push("/dashboard");
        window.location.reload();
     } else {
       handleError("Login failed. Please check your credentials.");
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
    setCookie("authToken", null);
    setCookie("userType", null);
    setCookie("userId", null);
    setCookie("userTypeId", null);
    handleSuccess("Logged out successfully");
    router.push("/");
    // window.location.reload();
  };

  return {
    signup,
    login,
    token,
    logout,
    loading,
    user_id,
    user_type_id,
    error,
    userType,
  };
}
