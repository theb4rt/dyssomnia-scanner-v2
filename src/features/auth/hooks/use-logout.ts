import { useMutation } from "@tanstack/react-query"
import { useRouter } from "@tanstack/react-router"
import { toast } from "sonner"
import { useAuth } from "@/shared/hooks/use-auth"

export function useLogout() {
  const { logout } = useAuth()
  const router = useRouter()

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      toast.success("Goodbye", { description: "You have been logged out" })
      router.navigate({ to: "/login" })
    },
    onError: () => {
      toast.error("Error", { description: "Logout failed" })
    },
  })
}
