import { Separator } from "@/shared/components/ui/separator"
import { SidebarTrigger } from "@/shared/components/ui/sidebar"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border/50 px-4">
      <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-primary" />
      <Separator orientation="vertical" className="mr-2 !h-4" />
      <div className="flex flex-1 items-center">
        <img
          src="/assets/logos/dyssomnia-logo-blank.png"
          alt="Dyssomnia Scanner"
          className="h-6 opacity-60"
        />
      </div>
      <ThemeToggle />
    </header>
  )
}
