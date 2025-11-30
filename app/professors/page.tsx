import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { mockProfessors, mockCourses } from "@/lib/mock-data"
import { Mail, BookOpen } from "lucide-react"

export default function ProfessorsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Nuestros Profesores</h1>
          <p className="text-lg text-primary-foreground/80">
            Expertos reconocidos en sus campos compartiendo conocimiento de calidad
          </p>
        </div>
      </section>

      {/* Professors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProfessors.map((professor) => {
            const professorCourses = mockCourses.filter((course) => course.professorId === professor.id)

            return (
              <Card
                key={professor.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Professor Image */}
                <div className="aspect-square bg-secondary overflow-hidden">
                  <img
                    src={professor.imageUrl || "/placeholder-user.jpg"}
                    alt={professor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Professor Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold mb-1">{professor.name}</h2>

                  <p className="text-accent font-semibold text-sm mb-3">{professor.specialty}</p>

                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{professor.bio}</p>

                  {/* Courses Count */}
                  <div className="flex items-center gap-2 mb-6 pb-6 border-b border-border">
                    <BookOpen className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">
                      {professorCourses.length} curso{professorCourses.length !== 1 ? "s" : ""} disponible
                      {professorCourses.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${professor.email}`} className="hover:text-primary transition">
                        {professor.email}
                      </a>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link href={`/professor/${professor.id}`}>Ver Perfil</Link>
                    </Button>
                    <Button asChild variant="outline" className="text-primary bg-transparent">
                      <Link href={`/catalog?professor=${professor.id}`}>Sus Cursos</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
