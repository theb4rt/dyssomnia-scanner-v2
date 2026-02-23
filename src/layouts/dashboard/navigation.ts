import {
  Cloud,
  FolderSearch,
  Globe,
  LayoutDashboard,
  Network,
  Radar,
  ScrollText,
  FileCode2,
  Map,
  FlaskConical,
  type LucideIcon,
} from "lucide-react"

export interface NavItem {
  label: string
  href: string
  icon?: LucideIcon
}

export interface NavGroup {
  label: string
  icon: LucideIcon
  items: NavItem[]
}

export const navigation: NavGroup[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    items: [
      { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "Web Modules",
    icon: Globe,
    items: [
      { label: "Gathering", href: "/web-modules/gathering", icon: FolderSearch },
      { label: "Scan (Nikto)", href: "/web-modules/nikto", icon: Radar },
      { label: "Dir Busting", href: "/web-modules/dir-busting", icon: ScrollText },
      { label: "Scripts", href: "/web-modules/scripts", icon: FileCode2 },
    ],
  },
  {
    label: "IP Modules",
    icon: Network,
    items: [
      { label: "Nmap", href: "/ip-modules/nmap", icon: Network },
      { label: "Templates", href: "/ip-modules/templates", icon: ScrollText },
    ],
  },
  {
    label: "API Modules",
    icon: Cloud,
    items: [
      { label: "Test", href: "/api-modules/test", icon: FlaskConical },
      { label: "Mapping", href: "/api-modules/mapping", icon: Map },
    ],
  },
]
