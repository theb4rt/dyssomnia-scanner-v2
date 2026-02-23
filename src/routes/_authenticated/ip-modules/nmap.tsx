import { createFileRoute } from "@tanstack/react-router"
import { NmapPage } from "@/features/ip-modules/nmap/components/nmap-page"

export const Route = createFileRoute("/_authenticated/ip-modules/nmap")({
  component: NmapPage,
})
