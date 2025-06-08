"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Home, User, FolderOpen, MessageCircle } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
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
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-6">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl hover:scale-105 transition-transform duration-200">
            NK
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-lg">Nail Kocabay</h2>
            <p className="text-sm text-muted-foreground">Front End Developer</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarMenu>
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                className="w-full justify-start hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                <Link href={item.href}>
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 space-y-4">
        <SidebarSeparator />

        <div className="flex justify-center">
          <ThemeToggle />
        </div>

        <div className="flex justify-center space-x-2">
          {socialLinks.map((link) => (
            <Button key={link.title} variant="ghost" size="icon" className="w-8 h-8 hover:bg-accent hover:text-accent-foreground transition-colors duration-200" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.title}>
                <link.icon className="w-4 h-4" />
              </a>
            </Button>
          ))}
        </div>

        <div className="text-center text-xs text-muted-foreground">© 2025 Nail Kocabay</div>
      </SidebarFooter>
    </Sidebar>
  )
}
