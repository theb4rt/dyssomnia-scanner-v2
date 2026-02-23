import { createFileRoute } from "@tanstack/react-router"
import { TemplatesPage } from "@/features/ip-modules/templates/components/templates-page"

export const Route = createFileRoute("/_authenticated/ip-modules/templates")({
  component: TemplatesPage,
})
