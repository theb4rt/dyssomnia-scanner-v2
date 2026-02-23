import { createContext, useCallback, useEffect, useRef, useState } from "react"
import type { IUserProfile } from "@/shared/types/user.types"
import { configureApiClient } from "@/shared/api/client"
import { decodeJwtPayload } from "@/shared/lib/jwt"
import { loginApi, logoutApi, refreshTokenApi } from "../api/auth.api"
import type { LoginRequest } from "../types/auth.types"

export interface AuthContextValue {
  user: IUserProfile | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginRequest) => Promise<void>
  logout: () => Promise<void>
  getToken: () => string | null
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // TODO: Remove DEV_BYPASS when backend is ready
  const DEV_BYPASS = true

  const tokenRef = useRef<string | null>(DEV_BYPASS ? "dev-token" : null)
  const [user, setUser] = useState<IUserProfile | null>(
    DEV_BYPASS ? { id: "dev", email: "root@localhost", name: "b4rt" } : null
  )
  const [isLoading, setIsLoading] = useState(false)

  const getToken = useCallback(() => tokenRef.current, [])

  const setSession = useCallback((token: string, userProfile?: IUserProfile) => {
    tokenRef.current = token
    if (userProfile) {
      setUser(userProfile)
    } else {
      const payload = decodeJwtPayload(token)
      if (payload) {
        setUser({
          id: String(payload.sub ?? ""),
          email: String(payload.user ?? payload.email ?? ""),
          name: payload.name as string | undefined,
        })
      }
    }
  }, [])

  const clearSession = useCallback(() => {
    tokenRef.current = null
    setUser(null)
  }, [])

  const doRefresh = useCallback(async (): Promise<string | null> => {
    try {
      const { access_token } = await refreshTokenApi()
      setSession(access_token)
      return access_token
    } catch {
      clearSession()
      return null
    }
  }, [setSession, clearSession])

  const login = useCallback(
    async (credentials: LoginRequest) => {
      const { access_token, user: userProfile } = await loginApi(credentials)
      setSession(access_token, userProfile)
    },
    [setSession]
  )

  const logout = useCallback(async () => {
    await logoutApi().catch(() => {})
    clearSession()
  }, [clearSession])

  useEffect(() => {
    configureApiClient({
      getToken,
      refreshToken: doRefresh,
      onAuthFailure: clearSession,
    })
  }, [getToken, doRefresh, clearSession])

  useEffect(() => {
    if (!DEV_BYPASS) {
      doRefresh().finally(() => setIsLoading(false))
    }
  }, [doRefresh, DEV_BYPASS])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
