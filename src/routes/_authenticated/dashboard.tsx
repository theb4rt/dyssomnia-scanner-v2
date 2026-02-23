import { createFileRoute } from "@tanstack/react-router"
import { DashboardHome } from "@/features/dashboard/components/dashboard-home"

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardHome,
})
