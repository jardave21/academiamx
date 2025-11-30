"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Film, Users, Settings, LogOut, Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Cursos", href: "/admin/courses", icon: Film },
    { label: "Conferencias", href: "/admin/conferences", icon: Film },
    { label: "Usuarios", href: "/admin/users", icon: Users },
    { label: "Configuración", href: "/admin/settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-40 bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">EduPlatform Admin</h1>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="space-y-4 mt-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 rounded hover:bg-secondary"
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                )
              })}
              <Button variant="ghost" className="w-full justify-start">
                <LogOut className="w-5 h-5 mr-2" />
                Salir
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Layout */}
      <div className="md:flex">
        {/* Sidebar */}
        <aside className="hidden md:flex md:w-64 bg-primary text-primary-foreground flex-col fixed h-screen">
          <div className="p-6 border-b border-primary-foreground/20">
            <h1 className="font-bold text-xl">EduPlatform</h1>
            <p className="text-sm text-primary-foreground/70">Panel de Control</p>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded hover:bg-primary-foreground/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="p-4 border-t border-primary-foreground/20">
            <Button variant="ghost" className="w-full justify-start text-primary-foreground">
              <LogOut className="w-5 h-5 mr-2" />
              Salir
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:ml-64 w-full">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
