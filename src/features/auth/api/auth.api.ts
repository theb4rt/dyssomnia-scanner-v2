import { config } from "@/shared/config"
import type { LoginRequest, LoginResponse, RefreshResponse } from "../types/auth.types"

const AUTH_PREFIX = "/api/v1/auth"

export async function loginApi(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(`${config.apiBaseUrl}${AUTH_PREFIX}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(credentials),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Login failed" }))
    throw { status: response.status, data: error }
  }

  const data = await response.json()
  return data.data
}

export async function refreshTokenApi(): Promise<RefreshResponse> {
  const response = await fetch(`${config.apiBaseUrl}${AUTH_PREFIX}/refresh`, {
    method: "POST",
    credentials: "include",
  })

  if (!response.ok) {
    throw { status: response.status, data: { message: "Refresh failed" } }
  }

  const data = await response.json()
  return data.data
}

export async function logoutApi(): Promise<void> {
  await fetch(`${config.apiBaseUrl}${AUTH_PREFIX}/logout`, {
    method: "POST",
    credentials: "include",
  })
}
