// middleware/auth.ts

import { defineNuxtRouteMiddleware, useRouter } from '#imports'
import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {
  const { userType } = useAuth()
  const router = useRouter()

  if (!userType.value) {
    return router.push('/auth/login')
  }

  // Redirect based on user type
  switch (userType.value) {
    case 'Investor':
    case 'Agripreneur':
    case 'Researcher':
      return router.push('/dashboard')
    default:
      return router.push('/auth/login')
  }
})
