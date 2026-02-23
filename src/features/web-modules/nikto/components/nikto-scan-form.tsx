import { useRef, useState } from "react"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Radar } from "lucide-react"
import { useNiktoScan } from "../hooks/use-nikto-scan"

export function NiktoScanForm() {
  const [targetUrl, setTargetUrl] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const timeoutRef = useRef<number>(-1)
  const { mutate: launchScan, isPending } = useNiktoScan()

  function handleChange(value: string) {
    setTargetUrl(value)
    window.clearTimeout(timeoutRef.current)

    if (value.trim().length === 0 || value.includes("http://") || value.includes("https://")) {
      setSuggestions([])
    } else {
      timeoutRef.current = window.setTimeout(() => {
        setSuggestions([`http://${value}`, `https://${value}`])
      }, 500)
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!targetUrl.trim()) return
    launchScan({ host: targetUrl, maxTime: 40 })
  }

  function selectSuggestion(suggestion: string) {
    setTargetUrl(suggestion)
    setSuggestions([])
  }

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-mono text-primary">
          <Radar className="size-5" />
          Nikto Scanner
        </CardTitle>
        <CardDescription>
          Launch a Nikto web vulnerability scan against a target URL
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Input
              value={targetUrl}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="https://example.com"
              className="font-mono"
            />
            {suggestions.length > 0 && (
              <div className="absolute z-10 mt-1 w-full rounded-md border border-border bg-popover p-1 shadow-lg">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => selectSuggestion(suggestion)}
                    className="w-full rounded px-3 py-1.5 text-left text-sm font-mono text-foreground hover:bg-accent"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button type="submit" disabled={isPending || !targetUrl.trim()}>
            {isPending ? "Scanning..." : "Launch Scan"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
