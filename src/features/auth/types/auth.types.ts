import type { IUserProfile } from "@/shared/types/user.types"

export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  access_token: string
  user: IUserProfile
}

export interface RefreshResponse {
  access_token: string
}

export interface AuthState {
  user: IUserProfile | null
  isAuthenticated: boolean
  isLoading: boolean
}
