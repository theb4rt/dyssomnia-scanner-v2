import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import type { QueryClient } from "@tanstack/react-query"
import type { AuthContextValue } from "@/features/auth/context/auth-provider"

export interface RouterContext {
  auth: AuthContextValue
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
})
