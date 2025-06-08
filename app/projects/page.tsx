"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { Projects } from "@/components/sections/projects"

export default function ProjectsPage() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <main className="flex-1 overflow-auto">
              <Projects />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
} 