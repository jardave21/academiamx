"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { mockCourses, mockProfessors } from "@/lib/mock-data"
import { Clock, Users, Award, CheckCircle, Play, Share2, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CoursePageProps {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = mockCourses.find((c) => c.id === params.id)
  const professor = course ? mockProfessors.find((p) => p.id === course.professorId) : null

  if (!course || !professor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Curso no encontrado</h1>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/catalog">Volver al Catálogo</Link>
          </Button>
        </div>
      </div>
    )
  }

  const levelTranslations = {
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado",
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Course Image */}
            <div className="md:col-span-1 order-2 md:order-1">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl relative group">
                <img
                  src={course.thumbnailUrl || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>

            {/* Course Info */}
            <div className="md:col-span-2 order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-accent text-accent-foreground">{course.category}</Badge>
                <Badge variant="outline" className="border-primary-foreground">
                  {levelTranslations[course.level]}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{course.title}</h1>

              <p className="text-lg text-primary-foreground/90 mb-6">{course.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-primary-foreground/20">
                <div>
                  <p className="text-sm text-primary-foreground/70">Duración</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{course.duration} min</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Nivel</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Award className="w-4 h-4" />
                    <span className="font-semibold capitalize">{levelTranslations[course.level]}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Estudiantes</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">500+</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 flex-1">
                  Comprar por ${course.price}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Guardar
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Compartir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="description">Descripción</TabsTrigger>
                <TabsTrigger value="curriculum">Temario</TabsTrigger>
                <TabsTrigger value="profesor">Profesor</TabsTrigger>
              </TabsList>

              {/* Description Tab */}
              <TabsContent value="description" className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Sobre este curso</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <p className="text-muted-foreground">
                    Este curso completo te guiará desde los fundamentos hasta técnicas avanzadas. Aprenderás de un
                    experto reconocido en la industria con años de experiencia práctica.
                  </p>
                </Card>
              </TabsContent>

              {/* Curriculum Tab */}
              <TabsContent value="curriculum" className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-6">Temario del curso</h3>
                  <div className="space-y-4">
                    {course.curriculum.map((topic, index) => (
                      <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-b-0">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Professor Tab */}
              <TabsContent value="profesor">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-6">Sobre el profesor</h3>
                  <div className="flex gap-6">
                    <img
                      src={professor.imageUrl || "/placeholder-user.jpg"}
                      alt={professor.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{professor.name}</h4>
                      <p className="text-accent font-semibold mb-3">{professor.specialty}</p>
                      <p className="text-muted-foreground">{professor.bio}</p>
                      <Button asChild variant="outline" size="sm" className="text-primary mt-4 bg-transparent">
                        <Link href={`/professor/${professor.id}`}>Ver perfil completo</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20">
              <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-secondary">
                <img
                  src={course.thumbnailUrl || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Precio</span>
                  <span className="text-3xl font-bold text-primary">${course.price}</span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duración:</span>
                    <span className="font-medium">{course.duration} minutos</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Nivel:</span>
                    <span className="font-medium capitalize">{levelTranslations[course.level]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Categoría:</span>
                    <span className="font-medium">{course.category}</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 mb-3">
                Comprar Ahora
              </Button>

              <Button variant="outline" size="lg" className="w-full text-primary bg-transparent">
                Añadir al carrito
              </Button>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">
                  Garantía de satisfacción de 30 días o dinero de vuelta
                </p>
                <p className="text-xs text-muted-foreground">Acceso de por vida al contenido</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
