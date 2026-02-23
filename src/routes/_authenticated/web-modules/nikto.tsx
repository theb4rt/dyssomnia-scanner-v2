import { createFileRoute } from "@tanstack/react-router"
import { NiktoScanForm } from "@/features/web-modules/nikto/components/nikto-scan-form"

export const Route = createFileRoute("/_authenticated/web-modules/nikto")({
  component: NiktoScanForm,
})
