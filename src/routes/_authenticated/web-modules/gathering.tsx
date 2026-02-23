import { createFileRoute } from "@tanstack/react-router"
import { GatheringPage } from "@/features/web-modules/gathering/components/gathering-page"

export const Route = createFileRoute("/_authenticated/web-modules/gathering")({
  component: GatheringPage,
})
