export const config = {
  apiBaseUrl: import.meta.env.VITE_API_URL || "http://localhost:8000",
  apiTaskUrl: import.meta.env.VITE_TASK_API_URL || "http://localhost:8001",
} as const
