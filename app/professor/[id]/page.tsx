"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { mockProfessors, mockCourses, mockConferences } from "@/lib/mock-data"
import { Mail, BookOpen, Video } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProfessorPageProps {
  params: {
    id: string
  }
}

export default function ProfessorDetailPage({ params }: ProfessorPageProps) {
  const professor = mockProfessors.find((p) => p.id === params.id)
  const professorCourses = mockCourses.filter((c) => c.professorId === params.id)
  const professorConferences = mockConferences.filter((c) => c.professorId === params.id)

  if (!professor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Profesor no encontrado</h1>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/professors">Volver a Profesores</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Professor Image */}
            <div className="md:col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={professor.imageUrl || "/placeholder-user.jpg"}
                  alt={professor.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Professor Info */}
            <div className="md:col-span-2">
              <Badge className="bg-accent text-accent-foreground mb-4">{professor.specialty}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{professor.name}</h1>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">{professor.bio}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Cursos</p>
                    <p className="text-2xl font-bold">{professorCourses.length}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Video className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Conferencias</p>
                    <p className="text-2xl font-bold">{professorConferences.length}</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={`mailto:${professor.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Contactar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Courses Section */}
        {professorCourses.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Cursos Impartidos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professorCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-secondary overflow-hidden group">
                    <img
                      src={course.thumbnailUrl || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-accent text-accent-foreground">{course.category}</Badge>
                      <span className="text-xs text-muted-foreground">{course.duration} min</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">${course.price}</span>
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                        <Link href={`/course/${course.id}`}>Ver</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Conferences Section */}
        {professorConferences.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8">Conferencias</h2>
            <div className="space-y-6">
              {professorConferences.map((conference) => (
                <Card key={conference.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 aspect-video md:aspect-auto">
                      <img
                        src={conference.thumbnailUrl || "/placeholder.svg"}
                        alt={conference.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-xl mb-2">{conference.title}</h3>
                        <p className="text-muted-foreground mb-4">{conference.description}</p>
                        <p className="text-sm text-muted-foreground">
                          📅 {new Date(conference.scheduledDate).toLocaleDateString("es-ES")}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <span className="text-2xl font-bold text-primary">${conference.price}</span>
                        <Button asChild className="bg-primary hover:bg-primary/90">
                          <Link href={`/conference/${conference.id}`}>Registrarse</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
