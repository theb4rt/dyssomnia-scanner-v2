import { taskApi } from "@/shared/api/client"
import type { NiktoScanRequest, NiktoScanResponse } from "../types/nikto.types"

export function launchNiktoScan(params: NiktoScanRequest) {
  return taskApi.post<NiktoScanResponse>("/api/v1/web/nikto", params)
}
