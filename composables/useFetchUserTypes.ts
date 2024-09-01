import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useFetch } from '#imports'
import { useErrorHandler } from './useErrorHandler'
import API_PATHS from '~/utils/paths'
import { type UserType } from '~/utils/types'

export function useFetchUserTypes() {
  const userTypes = ref<UserType[]>([]);
  const { handleError } = useErrorHandler()
  const config = useRuntimeConfig()

  // Function to fetch user types
  const fetchUserTypes = async () => {
    try {
      const { data, error } = await useFetch<UserTypesResponse>(config.public.apiUrl + API_PATHS.USERS.USERTYPE)

      if (error.value) {
        handleError(error.value)
        return
      }

      if (data.value?.status) {
        userTypes.value = data.value.data || [];
      } else {
        handleError(new Error(data.value?.message || 'Failed to load user types'))
      }
    } catch (err) {
      handleError(err)
    }
  }

  // Fetch user types immediately
  fetchUserTypes()

  return {
    userTypes,
    fetchUserTypes
  }
}
