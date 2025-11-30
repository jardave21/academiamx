"use server"

import { z } from "zod"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"

const SignupSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Correo electrónico inválido"),
    password: z.string().min(5, "La contraseña debe tener al menos 5 caracteres"),
    confirmPassword: z.string(),
    role: z.enum(["user", "professor"]).default("user"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
})

export async function registerUser(prevState: any, formData: FormData) {
    const validatedFields = SignupSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
        role: formData.get("role"),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Error en los datos del formulario",
        }
    }

    const { name, email, password, role } = validatedFields.data

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return {
                message: "El correo electrónico ya está registrado",
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role,
            },
        })

    } catch (error) {
        console.error("Registration error:", error)
        return {
            message: "Error al crear la cuenta. Por favor intenta de nuevo.",
        }
    }

    redirect("/auth/login")
}
