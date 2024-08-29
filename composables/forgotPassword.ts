import { ref } from "vue";
import { useRouter } from "vue-router";
import { useErrorHandler } from "./useErrorHandler";
import API_PATHS from "~/utils/paths";
import { useFetch, useRuntimeConfig, useCookie } from "#imports";

export function forgotPassword() {
    const router = useRouter();
    const { error, handleError, handleSuccess } = useErrorHandler();

    const config = useRuntimeConfig();

    const forgot = async (credentials: ForgotPasswordData): Promise<void> => {
        try {
            const { data, error, status } = await useFetch<ForgotPasswordData>(
              config.public.apiUrl + API_PATHS.AUTH.FORGOT_PASSSWORD,
              {
                method: "POST",
                body: credentials,
              }
            );
            
        } catch (error) {
            
        }
    };
}