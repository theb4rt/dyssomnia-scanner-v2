import type { ApiResponse } from "@/shared/types/api.types"
import { config } from "@/shared/config"

type GetTokenFn = () => string | null
type RefreshTokenFn = () => Promise<string | null>
type OnAuthFailureFn = () => void

let getToken: GetTokenFn = () => null
let refreshToken: RefreshTokenFn = async () => null
let onAuthFailure: OnAuthFailureFn = () => {}

export function configureApiClient(opts: {
  getToken: GetTokenFn
  refreshToken: RefreshTokenFn
  onAuthFailure: OnAuthFailureFn
}) {
  getToken = opts.getToken
  refreshToken = opts.refreshToken
  onAuthFailure = opts.onAuthFailure
}

async function http<T>(
  baseUrl: string,
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = getToken()
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((options.headers as Record<string, string>) || {}),
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  let response = await fetch(baseUrl + endpoint, {
    ...options,
    headers,
    credentials: "include",
  })

  if (response.status === 401) {
    const newToken = await refreshToken()
    if (newToken) {
      headers["Authorization"] = `Bearer ${newToken}`
      response = await fetch(baseUrl + endpoint, {
        ...options,
        headers,
        credentials: "include",
      })
    } else {
      onAuthFailure()
      throw { status: 401, statusText: "Unauthorized", data: { message: "Session expired" } }
    }
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: response.statusText }))
    throw { status: response.status, statusText: response.statusText, data: errorData }
  }

  const data = await response.json()
  return { data: data.data, status: response.status }
}

export const api = {
  get: <T>(endpoint: string) =>
    http<T>(config.apiBaseUrl, endpoint),

  post: <T>(endpoint: string, body?: unknown) =>
    http<T>(config.apiBaseUrl, endpoint, {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    }),

  put: <T>(endpoint: string, body?: unknown) =>
    http<T>(config.apiBaseUrl, endpoint, {
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    }),

  delete: <T>(endpoint: string) =>
    http<T>(config.apiBaseUrl, endpoint, { method: "DELETE" }),
}

export const taskApi = {
  get: <T>(endpoint: string) =>
    http<T>(config.apiTaskUrl, endpoint),

  post: <T>(endpoint: string, body?: unknown) =>
    http<T>(config.apiTaskUrl, endpoint, {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    }),
}
