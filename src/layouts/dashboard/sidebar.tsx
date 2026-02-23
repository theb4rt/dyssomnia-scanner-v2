import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/shared/components/ui/sidebar"
import { navigation } from "./navigation"
import { SidebarNavGroup } from "./sidebar-nav-group"
import { UserMenu } from "./user-menu"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <img
            src="/assets/logos/dyssomnia-logo.svg"
            alt="Dyssomnia"
            className="h-8 w-8 shrink-0"
          />
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-mono text-sm font-bold text-primary">
              Dyssomnia
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              Scanner v2.0
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        {navigation.map((group) => (
          <SidebarNavGroup key={group.label} group={group} />
        ))}
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter>
        <UserMenu />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
