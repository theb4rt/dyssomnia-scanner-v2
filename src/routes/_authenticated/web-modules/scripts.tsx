import { createFileRoute } from "@tanstack/react-router"
import { ScriptsPage } from "@/features/web-modules/scripts/components/scripts-page"

export const Route = createFileRoute("/_authenticated/web-modules/scripts")({
  component: ScriptsPage,
})
