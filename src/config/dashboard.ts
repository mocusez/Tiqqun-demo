import { DashboardConfig } from "~/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
    },
  ],
  sidebarNav: [
    {
      title: "Machines",
      href: "/dashboard",
      icon: "monitor",
    },
    {
      title: "Agents",
      href: "/dashboard/agents",
      icon: "agents",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
