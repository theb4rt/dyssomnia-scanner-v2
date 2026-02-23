export interface NiktoScanRequest {
  host: string
  maxTime: number
}

export interface NiktoScanResponse {
  taskId: string
  status: string
}
