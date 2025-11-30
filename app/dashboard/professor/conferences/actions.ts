"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

const ConferenceSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    price: z.coerce.number().min(0),
    duration: z.coerce.number().min(1),
    scheduledDate: z.string().transform((str) => new Date(str)),
    videoUrl: z.string().url().optional().or(z.literal("")),
})

export async function createConference(formData: FormData) {
    const session = await auth()
    if (!session?.user || session.user.role !== "professor") {
        throw new Error("Unauthorized")
    }

    const validatedFields = ConferenceSchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        price: formData.get("price"),
        duration: formData.get("duration"),
        scheduledDate: formData.get("scheduledDate"),
        videoUrl: formData.get("videoUrl"),
    })

    if (!validatedFields.success) {
        return { error: "Invalid fields" }
    }

    const { title, description, price, duration, scheduledDate, videoUrl } = validatedFields.data

    await prisma.conference.create({
        data: {
            title,
            description,
            price,
            duration,
            scheduledDate,
            videoUrl,
            professorId: session.user.id!,
            published: false,
        },
    })

    revalidatePath("/dashboard/professor/conferences")
    redirect("/dashboard/professor/conferences")
}

export async function toggleConferencePublish(conferenceId: string, currentState: boolean) {
    const session = await auth()
    if (!session?.user || session.user.role !== "professor") {
        throw new Error("Unauthorized")
    }

    await prisma.conference.update({
        where: { id: conferenceId, professorId: session.user.id! },
        data: { published: !currentState },
    })

    revalidatePath("/dashboard/professor/conferences")
}
