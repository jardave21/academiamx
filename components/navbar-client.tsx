"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { LogoutButton } from "@/components/auth/logout-button"

export function NavbarClient({ session, navItems }: { session: any, navItems: any[] }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-base font-medium px-2 py-2 hover:bg-secondary rounded"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="border-t border-border pt-4 mt-4 flex flex-col gap-2">
                        {session ? (
                            <>
                                <Button variant="outline" asChild className="w-full bg-transparent">
                                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
                                </Button>
                                <div className="w-full">
                                    <LogoutButton />
                                </div>
                            </>
                        ) : (
                            <>
                                <Button variant="outline" asChild className="w-full bg-transparent">
                                    <Link href="/auth/login" onClick={() => setIsOpen(false)}>Iniciar Sesión</Link>
                                </Button>
                                <Button asChild className="w-full bg-primary">
                                    <Link href="/auth/signup" onClick={() => setIsOpen(false)}>Registrarse</Link>
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
