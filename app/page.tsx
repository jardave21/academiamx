import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Play, Users, Calendar, Zap } from "lucide-react"
import { mockCourses, mockConferences, mockProfessors, mockTestimonials } from "@/lib/mock-data"

export default function Home() {
  const featuredCourses = mockCourses.slice(0, 3)
  const upcomingConferences = mockConferences.slice(0, 2)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl bg-accent/20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-accent/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                Educación Premium para Profesionales
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty">
                Accede a cursos y conferencias impartidas por expertos reconocidos. Aprende, crece y domina nuevas
                habilidades profesionales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/catalog">Explorar Catálogo</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/conferences">Ver Conferencias</Link>
                </Button>
              </div>
              <div className="flex gap-6 pt-8">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">+2000 estudiantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm">Contenido actualizado</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src="/online-education-professional.jpg"
                alt="Educación profesional"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">Cursos Destacados</h2>
          <p className="text-muted-foreground text-lg">Seleccionados especialmente para ti</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-video bg-secondary overflow-hidden group">
                <img
                  src={course.thumbnailUrl || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-accent uppercase">{course.category}</span>
                  <span className="text-xs text-muted-foreground">{course.duration} min</span>
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${course.price}</span>
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                    <Link href={`/course/${course.id}`}>Ver Curso</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="text-primary bg-transparent">
            <Link href="/catalog" className="flex items-center gap-2">
              Ver todos los cursos <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Upcoming Conferences */}
      <section className="bg-secondary/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">Próximas Conferencias</h2>
            <p className="text-muted-foreground text-lg">No te pierdas estos eventos exclusivos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {upcomingConferences.map((conference) => (
              <Card key={conference.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 aspect-video md:aspect-auto relative group overflow-hidden">
                    <img
                      src={conference.thumbnailUrl || "/placeholder.svg"}
                      alt={conference.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-muted-foreground">
                          {new Date(conference.scheduledDate).toLocaleDateString("es-ES", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{conference.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{conference.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-2xl font-bold text-primary">${conference.price}</span>
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                        <Link href={`/conference/${conference.id}`}>Registrarse</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/conferences" className="flex items-center gap-2">
                Ver todas las conferencias <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Professors Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">Nuestros Profesores</h2>
          <p className="text-muted-foreground text-lg">Expertos reconocidos en sus campos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mockProfessors.map((professor) => (
            <Card key={professor.id} className="overflow-hidden text-center hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={professor.imageUrl || "/placeholder.svg"}
                  alt={professor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">{professor.name}</h3>
                <p className="text-accent font-semibold text-sm mb-3">{professor.specialty}</p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{professor.bio}</p>
                <Button asChild variant="outline" size="sm" className="w-full text-primary bg-transparent">
                  <Link href={`/professor/${professor.id}`}>Ver Perfil</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-3">Lo que dicen nuestros estudiantes</h2>
            <p className="text-primary-foreground/80 text-lg">Testimonios reales de profesionales</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mockTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-primary-foreground/10 border-primary-foreground/20">
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-accent text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-primary-foreground/90 mb-4 italic">"{testimonial.content}"</p>
                  <p className="font-semibold text-accent">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent/10 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Comienza tu Aprendizaje Hoy</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Únete a miles de profesionales que están transformando su carrera con nuestros cursos y conferencias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/signup">Registrarse Gratis</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-primary bg-transparent">
              <Link href="/catalog">Explorar Contenido</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
