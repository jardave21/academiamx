import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, Plus, BarChart3 } from "lucide-react"
import { prisma } from "@/lib/prisma"

export default async function ProfessorDashboard() {
    const session = await auth()

    if (!session?.user || session.user.role !== "professor") {
        redirect("/dashboard")
    }

    const courseCount = await prisma.course.count({
        where: { professorId: session.user.id }
    })

    const conferenceCount = await prisma.conference.count({
        where: { professorId: session.user.id }
    })

    return (
        <div className="container mx-auto p-8 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight">Panel de Conferencista</h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Bienvenido, {session.user.name}. Gestiona tu contenido y eventos.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button asChild variant="outline">
                        <Link href="/dashboard/professor/courses/new">
                            <Plus className="mr-2 h-4 w-4" /> Nuevo Curso
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/dashboard/professor/conferences/new">
                            <Plus className="mr-2 h-4 w-4" /> Nueva Conferencia
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Cursos</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{courseCount}</div>
                        <p className="text-xs text-muted-foreground">Cursos creados</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Conferencias</CardTitle>
                        <Video className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{conferenceCount}</div>
                        <p className="text-xs text-muted-foreground">Eventos programados</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Ingresos Estimados</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$0.00</div>
                        <p className="text-xs text-muted-foreground">Próximamente</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Gestión de Cursos
                        </CardTitle>
                        <CardDescription>
                            Administra tus cursos grabados y materiales.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Sube nuevos videos, edita descripciones y controla qué cursos están visibles para los estudiantes.
                        </p>
                        <Button asChild className="w-full">
                            <Link href="/dashboard/professor/courses">Ver Mis Cursos</Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Video className="h-5 w-5 text-primary" />
                            Gestión de Conferencias
                        </CardTitle>
                        <CardDescription>
                            Organiza tus eventos en vivo.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Programa nuevas sesiones, comparte enlaces de reunión y gestiona tu calendario de eventos.
                        </p>
                        <Button asChild className="w-full">
                            <Link href="/dashboard/professor/conferences">Ver Mis Conferencias</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
