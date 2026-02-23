import { createFileRoute, redirect } from "@tanstack/react-router"
import { DashboardLayout } from "@/layouts/dashboard/dashboard-layout"

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({ to: "/login" })
    }
  },
  component: DashboardLayout,
})
