import { createFileRoute } from "@tanstack/react-router"
import { ApiTestPage } from "@/features/api-modules/test/components/api-test-page"

export const Route = createFileRoute("/_authenticated/api-modules/test")({
  component: ApiTestPage,
})
