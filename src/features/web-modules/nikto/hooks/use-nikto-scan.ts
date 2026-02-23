import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { launchNiktoScan } from "../api/nikto.api"
import type { NiktoScanRequest } from "../types/nikto.types"

export function useNiktoScan() {
  return useMutation({
    mutationFn: (params: NiktoScanRequest) => launchNiktoScan(params),
    onSuccess: () => {
      toast.success("Scan launched", {
        description: "The Nikto scan has started. You will be notified when it completes.",
      })
    },
    onError: (error: unknown) => {
      const message =
        (error as { data?: { message?: string } })?.data?.message ?? "Failed to launch scan"
      toast.error("Scan failed", { description: message })
    },
  })
}
