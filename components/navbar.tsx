import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { auth } from "@/auth"
import { LogoutButton } from "@/components/auth/logout-button"
import { NavbarClient } from "./navbar-client"

export async function Navbar() {
  const session = await auth()

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Catálogo", href: "/catalog" },
    { label: "Profesores", href: "/professors" },
    { label: "Conferencias", href: "/conferences" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline text-foreground">EduPlatform</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <>
                <Button variant="outline" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <LogoutButton />
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/auth/login">Iniciar Sesión</Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/auth/signup">Registrarse</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavbarClient session={session} navItems={navItems} />
          </div>
        </div>
      </div>
    </nav>
  )
}
