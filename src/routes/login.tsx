import { createFileRoute, redirect } from "@tanstack/react-router"
import { LoginForm } from "@/features/auth/components/login-form"

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: "/dashboard" })
    }
  },
  component: LoginPage,
})

function LoginPage() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4">
      <LoginForm />
    </div>
  )
}
