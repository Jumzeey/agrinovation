import { defineNuxtRouteMiddleware, useRouter } from "#imports";
import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to) => {
  const { token } = useAuth();
  const router = useRouter();

  if (
    token.value &&
    (to.path === "/auth/login" || to.path === "/auth/signup")
  ) {
    return router.push("/dashboard");
  }
});
