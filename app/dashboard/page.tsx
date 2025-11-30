import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, User } from "lucide-react"

export default async function DashboardPage() {
    const session = await auth()

    if (!session?.user) {
        redirect("/auth/login")
    }

    if (session.user.role === "professor") {
        redirect("/dashboard/professor")
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Mi Aprendizaje</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5" />
                            Mis Cursos
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            Accede a los cursos en los que estás inscrito.
                        </p>
                        <p className="text-sm font-medium">No estás inscrito en ningún curso aún.</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Mi Perfil
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <p className="text-sm"><span className="font-semibold">Nombre:</span> {session.user.name}</p>
                            <p className="text-sm"><span className="font-semibold">Email:</span> {session.user.email}</p>
                            <p className="text-sm"><span className="font-semibold">Rol:</span> Estudiante</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
