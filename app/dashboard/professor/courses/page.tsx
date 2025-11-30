import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toggleCoursePublish } from "./actions"

export default async function CoursesPage() {
    const session = await auth()
    if (!session?.user || session.user.role !== "professor") {
        redirect("/dashboard")
    }

    const courses = await prisma.course.findMany({
        where: { professorId: session.user.id },
        orderBy: { createdAt: "desc" },
    })

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Mis Cursos</h1>
                <Button asChild>
                    <Link href="/dashboard/professor/courses/new">Nuevo Curso</Link>
                </Button>
            </div>

            <div className="grid gap-4">
                {courses.map((course) => (
                    <Card key={course.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-xl font-medium">
                                {course.title}
                            </CardTitle>
                            <Badge variant={course.published ? "default" : "secondary"}>
                                {course.published ? "Publicado" : "Borrador"}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">{course.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold">${course.price}</span>
                                <form
                                    action={async () => {
                                        "use server"
                                        await toggleCoursePublish(course.id, course.published)
                                    }}
                                >
                                    <Button variant="outline" size="sm">
                                        {course.published ? "Desactivar" : "Activar"}
                                    </Button>
                                </form>
                            </div>
                        </CardContent>
                    </Card>
                ))}
                {courses.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                        No tienes cursos registrados.
                    </p>
                )}
            </div>
        </div>
    )
}
