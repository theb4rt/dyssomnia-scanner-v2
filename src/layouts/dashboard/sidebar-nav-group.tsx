import { ChevronRight } from "lucide-react"
import { Link, useRouterState } from "@tanstack/react-router"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/shared/components/ui/sidebar"
import type { NavGroup, NavItem } from "./navigation"

function SingleItem({ item, currentPath }: { item: NavItem; currentPath: string }) {
  const Icon = item.icon
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={currentPath === item.href}
        tooltip={item.label}
      >
        <Link to={item.href}>
          {Icon && <Icon />}
          <span>{item.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

interface SidebarNavGroupProps {
  group: NavGroup
}

export function SidebarNavGroup({ group }: SidebarNavGroupProps) {
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  const isGroupActive = group.items.some((item) => currentPath === item.href)
  const GroupIcon = group.icon

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-mono text-xs uppercase tracking-wider text-sidebar-foreground/50">
        {group.label}
      </SidebarGroupLabel>
      <SidebarMenu>
        {group.items.length === 1 ? (
          <SingleItem item={group.items[0]} currentPath={currentPath} />
        ) : (
          <Collapsible defaultOpen={isGroupActive} className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={group.label}>
                  <GroupIcon />
                  <span>{group.label}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {group.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <SidebarMenuSubItem key={item.href}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={currentPath === item.href}
                        >
                          <Link to={item.href}>
                            {Icon && <Icon className="size-3.5" />}
                            <span>{item.label}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    )
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        )}
      </SidebarMenu>
    </SidebarGroup>
  )
}
