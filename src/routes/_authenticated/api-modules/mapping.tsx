import { createFileRoute } from "@tanstack/react-router"
import { MappingPage } from "@/features/api-modules/mapping/components/mapping-page"

export const Route = createFileRoute("/_authenticated/api-modules/mapping")({
  component: MappingPage,
})
