"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

interface HeaderProps {
  title?: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md transition-all">
      <div className="flex items-center gap-3">
        <SidebarTrigger title="Toggle Navigation Sidebar" className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors" />
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
            NK
          </div>
          <span className="hidden sm:inline-block">Nail Kocabay</span>
        </Link>
        {title && (
          <>
            <span className="text-muted-foreground/40 hidden sm:inline-block">/</span>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">{title}</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  )
}
