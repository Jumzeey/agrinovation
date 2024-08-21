import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useErrorHandler } from './useErrorHandler'
import API_PATHS from '~/utils/paths'
import { useFetch, useRuntimeConfig } from '#imports'

interface SignupResponse {
  status: boolean
  message: string
  data: {
    user_id: number
    user_type: 'Investor' | 'Agripreneur' | 'Researcher'
  }
}

export function useAuth() {
  const loading = ref(false)
  const router = useRouter()
  const { error, handleError, handleSuccess } = useErrorHandler()
  const userType = ref<string | null>(null)

  const config = useRuntimeConfig()

  const signup = async (userData: Record<string, any>): Promise<void> => {
    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await useFetch<SignupResponse>(config.public.apiUrl + API_PATHS.AUTH.SIGNUP, {
        method: 'POST',
        body: userData,
      })
      if (fetchError) {
        console.log(fetchError.value?.data)
      }

      if (data.value?.status) {
        userType.value = data.value.data.user_type
        handleSuccess(data.value.message)
        router.push('/auth/login')
      } else {
        handleError(fetchError.value?.data)
      }
    } catch (err: any) {
      // If there is no fetchError, handle the error directly from the response
      handleError(err)
    } finally {
      loading.value = false
    }
  }

  const login = async (credentials: Record<string, any>): Promise<void> => {
    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await useFetch<{ status: boolean; message: string; user_type: string }>(config.public.apiUrl + API_PATHS.AUTH.LOGIN, {
        method: 'POST',
        body: credentials,
      })

      if (data.value?.status) {
        userType.value = data.value.user_type
        handleSuccess('Login successful!')
        router.push('/dashboard')
      } else {
        handleError(fetchError.value?.data)
      }
    } catch (err: any) {
      // If there is no fetchError, handle the error directly from the response
      handleError(err)
    } finally {
      loading.value = false
    }
  }

  return {
    signup,
    login,
    loading,
    error,
    userType,
  }
}
