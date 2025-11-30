import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toggleConferencePublish } from "./actions"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export default async function ConferencesPage() {
    const session = await auth()
    if (!session?.user || session.user.role !== "professor") {
        redirect("/dashboard")
    }

    const conferences = await prisma.conference.findMany({
        where: { professorId: session.user.id },
        orderBy: { scheduledDate: "asc" },
    })

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Mis Conferencias</h1>
                <Button asChild>
                    <Link href="/dashboard/professor/conferences/new">Nueva Conferencia</Link>
                </Button>
            </div>

            <div className="grid gap-4">
                {conferences.map((conference) => (
                    <Card key={conference.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-xl font-medium">
                                {conference.title}
                            </CardTitle>
                            <Badge variant={conference.published ? "default" : "secondary"}>
                                {conference.published ? "Publicado" : "Borrador"}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">{conference.description}</p>
                            <div className="flex flex-col gap-2 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span>Fecha:</span>
                                    <span className="font-medium">
                                        {format(new Date(conference.scheduledDate), "PPP p", { locale: es })}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Duración:</span>
                                    <span className="font-medium">{conference.duration} min</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-bold">${conference.price}</span>
                                <form
                                    action={async () => {
                                        "use server"
                                        await toggleConferencePublish(conference.id, conference.published)
                                    }}
                                >
                                    <Button variant="outline" size="sm">
                                        {conference.published ? "Desactivar" : "Activar"}
                                    </Button>
                                </form>
                            </div>
                        </CardContent>
                    </Card>
                ))}
                {conferences.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                        No tienes conferencias registradas.
                    </p>
                )}
            </div>
        </div>
    )
}
