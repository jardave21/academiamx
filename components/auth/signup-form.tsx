"use client"

import { useActionState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { registerUser } from "@/app/auth/signup/actions"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const initialState = {
    message: "",
    errors: {},
}

export function SignupForm() {
    const [state, action, isPending] = useActionState(registerUser, initialState)

    return (
        <Card className="w-full max-w-md p-8 bg-background text-foreground">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">EduPlatform</h1>
                <p className="text-muted-foreground">Crea tu cuenta y comienza</p>
            </div>

            <form action={action} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        required
                    />
                    {state?.errors?.name && (
                        <p className="text-sm text-red-500">{state.errors.name}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                    />
                    {state?.errors?.email && (
                        <p className="text-sm text-red-500">{state.errors.email}</p>
                    )}
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
                    {state?.errors?.password && (
                        <p className="text-sm text-red-500">{state.errors.password}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        required
                    />
                    {state?.errors?.confirmPassword && (
                        <p className="text-sm text-red-500">{state.errors.confirmPassword}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>Quiero registrarme como:</Label>
                    <RadioGroup defaultValue="user" name="role" className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="user" id="user" />
                            <Label htmlFor="user">Estudiante / Usuario</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="professor" id="professor" />
                            <Label htmlFor="professor">Conferencista</Label>
                        </div>
                    </RadioGroup>
                </div>

                {state?.message && (
                    <p className="text-sm text-red-500 text-center">{state.message}</p>
                )}

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 mt-6" size="lg" disabled={isPending}>
                    {isPending ? "Creando cuenta..." : "Crear Cuenta"}
                </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground">
                    ¿Ya tienes cuenta?{" "}
                    <Link href="/auth/login" className="text-primary font-semibold hover:underline">
                        Inicia sesión aquí
                    </Link>
                </p>
            </div>
        </Card>
    )
}
