import { defineNuxtRouteMiddleware, useRouter, useRoute } from '#imports'
import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {
  const { token } = useAuth()
  const router = useRouter()

  if (!token.value && to.path !== '/auth/login') {
    // Redirect to login only if not already on login page
    return router.push('/auth/login')
  }

  if (token.value && to.path === '/auth/login') {
    // Redirect to dashboard if already logged in and trying to access login page
    return router.push('/dashboard')
  }
})
