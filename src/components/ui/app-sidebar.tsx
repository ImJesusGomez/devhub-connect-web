"use client";

import * as React from "react";

import { NavMain } from "@/components/ui/nav-main";
import { NavUser } from "@/components/ui/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TerminalIcon } from "lucide-react";
import { useAuthStore } from "@/store/auth.store";
import { companyData, developerData } from "@/dashboard/data/sidebar.data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = useAuthStore((state) => state.user) || null;
  if (!user) return;

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <TerminalIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.firstName}</span>
                <span className="truncate font-light">{user.lastName}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {user.roles[0].name === "ROLE_COMPANY" ? (
          <>
            <NavMain items={companyData.profiles} category="Perfil" />
            <NavMain items={companyData.joboffers} category="Ofertas Laborales" />
            <NavMain items={companyData.developers} category="Desarrolladores" />
          </>
        ) : (
          <>
            <NavMain items={developerData.profiles} category="Perfil" />
            <NavMain items={developerData.joboffers} category="Ofertas Laborales" />
            <NavMain items={developerData.applications} category="Solicitudes de Empleo" />
          </>
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
