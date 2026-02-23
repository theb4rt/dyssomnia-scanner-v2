import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Globe, Network, Cloud, Radar } from "lucide-react"
import { useAuth } from "@/shared/hooks/use-auth"

const summaryCards = [
  { title: "Web Modules", icon: Globe, value: "4", description: "Gathering, Nikto, Dir Busting, Scripts" },
  { title: "IP Modules", icon: Network, value: "2", description: "Nmap, Templates" },
  { title: "API Modules", icon: Cloud, value: "2", description: "Test, Mapping" },
  { title: "Active Scans", icon: Radar, value: "0", description: "No scans running" },
]

export function DashboardHome() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-mono text-2xl font-bold text-primary">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back, <span className="text-foreground">{user?.name || user?.email || "operator"}</span>
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <Card key={card.title} className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <card.icon className="size-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-mono text-primary">{card.value}</div>
              <p className="text-xs text-muted-foreground">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="font-mono text-primary">System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-mono text-sm text-muted-foreground space-y-1">
            <p>$ dyssomnia --status</p>
            <p className="text-foreground">[*] All systems operational</p>
            <p className="text-foreground">[*] Backend API: connected</p>
            <p className="text-foreground">[*] Task engine: ready</p>
            <p className="text-primary">[+] Ready for scanning</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
