import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useErrorHandler } from "./useErrorHandler";
import { useCookie, useRuntimeConfig } from "#imports";
import API_PATHS from "~/utils/paths";

// Define types for the login response
interface LoginData {
  email: string;
  password: string;
}

interface LoginResponseData {
  user_id: number;
  user_type_id: number;
  user_type: string;
  status: string;
  token: string;
}

interface LoginResponse {
  status: boolean;
  message: string | null;
  data: LoginResponseData;
}

export function useAuth() {
  const router = useRouter();
  const { handleError, handleSuccess } = useErrorHandler();
  const queryClient = useQueryClient();

 const token = ref<string | null>(useCookie("authToken").value ?? null);
 const userType = ref<string | null>(useCookie("userType").value ?? null);
  const user_id = ref<number | null>(Number(useCookie("userId").value));
  const user_type_id = ref<number | null>(
    Number(useCookie("userTypeId").value)
  );

  const config = useRuntimeConfig();

  // Vue Query Mutation for login
  const loginMutation = useMutation<LoginResponseData, Error, LoginData>({
    mutationFn: async (credentials: LoginData): Promise<LoginResponseData> => {
      const response = await fetch(
        `${config.public.apiUrl}${API_PATHS.AUTH.LOGIN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      const result: LoginResponse = await response.json();
      if (!result.status || !result.data) {
        throw new Error(result.message || "Login failed");
      }

      return result.data;
    },
    onSuccess: (data: LoginResponseData) => {
      // Set the token and user info in cookies
      token.value = data.token;
      userType.value = data.user_type;
      user_id.value = data.user_id;
      user_type_id.value = data.user_type_id;

      useCookie("authToken").value = token.value;
      useCookie("userType").value = userType.value;
      useCookie("userId").value = user_id.value?.toString();
      useCookie("userTypeId").value = user_type_id.value?.toString();

      // Invalidate the user profile query to refetch fresh data
       queryClient.invalidateQueries({
         queryKey: ["userProfile"],
       });

      handleSuccess("Login successful!");
      router.push("/dashboard");
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });

  // Vue Query Mutation for signup
  const signupMutation = useMutation<SignupResponse, Error, SignUpData>({
    mutationFn: async (credentials: SignUpData): Promise<SignupResponse> => {
      const response = await fetch(
        `${config.public.apiUrl}${API_PATHS.AUTH.SIGNUP}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      const result: SignupResponse = await response.json();
      if (!result.status || !result.data) {
        throw new Error(result.message || "SignUp failed");
      }

      // Return the full SignupResponse object, not just result.data
      return result;
    },
    onSuccess: (response: SignupResponse) => {
      const { message, data } = response;

      // Invalidate the user profile query to refetch fresh data
      queryClient.invalidateQueries({
        queryKey: ["userCredentials"],
      });

      handleSuccess(message);
      router.push("/auth/verify");
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });


  const logout = (): void => {
    // Clear token and user data from cookies
    token.value = null;
    userType.value = null;
    useCookie("authToken").value = null;
    useCookie("userType").value = null;
    useCookie("userId").value = null;
    useCookie("userTypeId").value = null;

    handleSuccess("Logged out successfully");
    queryClient.invalidateQueries(); // Invalidate all queries after logout
    router.push("/");
  };

  return {
    login: loginMutation.mutate,
    signup: signupMutation.mutate,
    logout,
    token,
    loading: loginMutation.isPending,
    user_id,
    user_type_id,
    userType,
  };
}
