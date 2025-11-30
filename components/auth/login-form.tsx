"use client"

import { useActionState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { authenticate } from "@/app/auth/login/actions"

export function LoginForm() {
    const [errorMessage, action, isPending] = useActionState(authenticate, undefined)

    return (
        <Card className="w-full max-w-md p-8 bg-background text-foreground">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">EduPlatform</h1>
                <p className="text-muted-foreground">Inicia sesión en tu cuenta</p>
            </div>

            <form action={action} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Link href="#" className="text-sm text-primary hover:underline">
                        Olvidé mi contraseña
                    </Link>
                </div>

                <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
                    {errorMessage && (
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    )}
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg" disabled={isPending}>
                    {isPending ? "Iniciando sesión..." : "Iniciar Sesión"}
                </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground">
                    ¿No tienes cuenta?{" "}
                    <Link href="/auth/signup" className="text-primary font-semibold hover:underline">
                        Regístrate aquí
                    </Link>
                </p>
            </div>
        </Card>
    )
}
