"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { Home } from "@/components/sections/home"
import { Header } from "@/components/header"

export default function Portfolio() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex-1 flex flex-col min-w-0">
            <Header title="Home" />
            <main className="flex-1 overflow-auto">
              <Home />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}
