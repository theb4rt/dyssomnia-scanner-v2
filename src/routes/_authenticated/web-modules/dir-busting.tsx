import { createFileRoute } from "@tanstack/react-router"
import { DirBustingPage } from "@/features/web-modules/dir-busting/components/dir-busting-page"

export const Route = createFileRoute("/_authenticated/web-modules/dir-busting")({
  component: DirBustingPage,
})
