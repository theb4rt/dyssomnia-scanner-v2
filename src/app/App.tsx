import { RouterProvider } from "@tanstack/react-router"
import { useAuth } from "@/shared/hooks/use-auth"
import { router } from "./router"
import { queryClient, Providers } from "./providers"

function InnerApp() {
  const auth = useAuth()

  if (auth.isLoading) {
    return (
      <div className="flex h-svh items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent mx-auto" />
          <p className="font-mono text-sm text-muted-foreground">
            Initializing...
          </p>
        </div>
      </div>
    )
  }

  return (
    <RouterProvider
      router={router}
      context={{ auth, queryClient }}
    />
  )
}

export function App() {
  return (
    <Providers>
      <InnerApp />
    </Providers>
  )
}
