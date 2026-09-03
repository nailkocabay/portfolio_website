"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Mail, Home, User, FolderOpen, MessageCircle, Menu, PanelLeftClose, PanelLeft } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigationItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "About",
    icon: User,
    href: "/about",
  },
  {
    title: "Projects",
    icon: FolderOpen,
    href: "/projects",
  },
  {
    title: "Contact",
    icon: MessageCircle,
    href: "/contact",
  },
]

const socialLinks = [
  {
    title: "GitHub",
    icon: Github,
    href: "https://github.com/nailkocabay",
  },
  {
    title: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/nail-kocabay",
  },
  {
    title: "Email",
    icon: Mail,
    href: "mailto:nailkocabay0@gmail.com",
  },
]

export function AppSidebar() {
  const { isMobile, setOpenMobile, toggleSidebar, state } = useSidebar()
  const pathname = usePathname()

  return (
    <React.Fragment>
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-3 left-3 z-50 md:hidden bg-background/80 backdrop-blur border shadow-sm"
          onClick={() => setOpenMobile(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}
      <Sidebar collapsible="icon" className="border-r transition-all duration-300">
        <SidebarHeader className="p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between group-data-[collapsible=icon]:justify-center">
            <div className="flex items-center gap-2.5 group-data-[collapsible=icon]:hidden overflow-hidden">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md shrink-0">
                NK
              </div>
              <div className="truncate">
                <h2 className="font-semibold text-sm truncate leading-tight">Nail Kocabay</h2>
                <p className="text-[11px] text-muted-foreground truncate">AI & Full-Stack Engineer</p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground shrink-0 hover:bg-accent rounded-md transition-colors"
              onClick={toggleSidebar}
              title={state === "collapsed" ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {state === "collapsed" ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
            </Button>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-2 pt-2">
          <SidebarMenu>
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={item.title}
                    className="w-full justify-start hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    <Link href={item.href}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="p-3 space-y-3">
          <SidebarSeparator />

          <div className="flex justify-center group-data-[collapsible=icon]:hidden">
            <ThemeToggle />
          </div>

          <div className="flex flex-col group-data-[collapsible=icon]:items-center items-center space-y-2">
            <div className="flex justify-center space-x-1 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:space-x-0 group-data-[collapsible=icon]:space-y-1">
              {socialLinks.map((link) => (
                <Button key={link.title} variant="ghost" size="icon" className="w-8 h-8 hover:bg-accent hover:text-accent-foreground transition-colors duration-200" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.title} title={link.title}>
                    <link.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>

            <div className="text-center text-[10px] text-muted-foreground group-data-[collapsible=icon]:hidden">
              © 2026 Nail Kocabay
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </React.Fragment>
  )
}
