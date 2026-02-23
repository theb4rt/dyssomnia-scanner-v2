import { useMutation } from "@tanstack/react-query"
import { useRouter } from "@tanstack/react-router"
import { toast } from "sonner"
import { useAuth } from "@/shared/hooks/use-auth"
import type { LoginRequest } from "../types/auth.types"

export function useLogin() {
  const { login } = useAuth()
  const router = useRouter()

  return useMutation({
    mutationFn: (credentials: LoginRequest) => login(credentials),
    onSuccess: () => {
      toast.success("Welcome back", { description: "You have successfully logged in" })
      router.navigate({ to: "/dashboard" })
    },
    onError: (error: unknown) => {
      const message =
        (error as { data?: { message?: string } })?.data?.message ?? "Login failed"
      toast.error("Error", { description: message })
    },
  })
}
