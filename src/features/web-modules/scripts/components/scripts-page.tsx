import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { FileCode2 } from "lucide-react"

export function ScriptsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-mono text-2xl font-bold text-primary">Scripts</h1>
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-primary">
            <FileCode2 className="size-5" />
            Web Scripts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground font-mono text-sm">
            [*] Module under construction...
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
