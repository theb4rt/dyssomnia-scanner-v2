import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Map } from "lucide-react"

export function MappingPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-mono text-2xl font-bold text-primary">API Mapping</h1>
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-primary">
            <Map className="size-5" />
            API Mapping
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
