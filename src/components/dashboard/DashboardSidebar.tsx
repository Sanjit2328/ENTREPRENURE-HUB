
import {
  BarChart3,
  Settings,
  User,
  PieChart,
  LucideIcon,
  BriefcaseIcon,
  Rocket,
  Network,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  icon: LucideIcon;
  href: string;
}

const mainNavItems: NavItem[] = [
  { title: "Overview", icon: BarChart3, href: "/dashboard" },
  { title: "Business Plan", icon: BriefcaseIcon, href: "/dashboard/business-plan" },
  { title: "Analytics", icon: PieChart, href: "/dashboard/analytics" },
  { title: "Network", icon: Network, href: "/dashboard/network" },
  { title: "Growth", icon: Rocket, href: "/dashboard/growth" },
];

const userNavItems: NavItem[] = [
  { title: "Profile", icon: User, href: "/dashboard/profile" },
  { title: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function DashboardSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center gap-2 px-4 py-4">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Entrepreneur Hub</span>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button
                      onClick={() => navigate(item.href)}
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 hover:bg-accent"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>User</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button
                      onClick={() => navigate(item.href)}
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 hover:bg-accent"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
