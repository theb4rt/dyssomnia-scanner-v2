import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { ScrollText } from "lucide-react"

export function TemplatesPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-mono text-2xl font-bold text-primary">Templates</h1>
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-primary">
            <ScrollText className="size-5" />
            Nmap Templates
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
