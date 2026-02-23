export interface ApiResponse<T> {
  data: T
  status: number
}

export interface ApiError {
  status: number
  statusText: string
  data: {
    message: string
  }
}
