"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

const CourseSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    price: z.coerce.number().min(0),
    duration: z.coerce.number().min(1),
    videoUrl: z.string().url().optional().or(z.literal("")),
})

export async function createCourse(formData: FormData) {
    const session = await auth()
    if (!session?.user || session.user.role !== "professor") {
        throw new Error("Unauthorized")
    }

    const validatedFields = CourseSchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        price: formData.get("price"),
        duration: formData.get("duration"),
        videoUrl: formData.get("videoUrl"),
    })

    if (!validatedFields.success) {
        return { error: "Invalid fields" }
    }

    const { title, description, price, duration, videoUrl } = validatedFields.data

    await prisma.course.create({
        data: {
            title,
            description,
            price,
            duration,
            videoUrl,
            professorId: session.user.id!,
            published: false,
        },
    })

    revalidatePath("/dashboard/professor/courses")
    redirect("/dashboard/professor/courses")
}

export async function toggleCoursePublish(courseId: string, currentState: boolean) {
    const session = await auth()
    if (!session?.user || session.user.role !== "professor") {
        throw new Error("Unauthorized")
    }

    await prisma.course.update({
        where: { id: courseId, professorId: session.user.id! },
        data: { published: !currentState },
    })

    revalidatePath("/dashboard/professor/courses")
}
