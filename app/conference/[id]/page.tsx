"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { mockConferences, mockProfessors } from "@/lib/mock-data"
import { Calendar, Clock, Users, Share2, Heart, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ConferencePageProps {
  params: {
    id: string
  }
}

export default function ConferencePage({ params }: ConferencePageProps) {
  const conference = mockConferences.find((c) => c.id === params.id)
  const professor = conference ? mockProfessors.find((p) => p.id === conference.professorId) : null

  if (!conference || !professor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Conferencia no encontrada</h1>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/conferences">Volver a Conferencias</Link>
          </Button>
        </div>
      </div>
    )
  }

  const conferenceDate = new Date(conference.scheduledDate)
  const isUpcoming = conferenceDate > new Date()

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl bg-accent/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Conference Image */}
            <div className="md:col-span-1 order-2 md:order-1">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src={conference.thumbnailUrl || "/placeholder.svg"}
                  alt={conference.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Conference Info */}
            <div className="md:col-span-2 order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-accent text-accent-foreground">Evento en Vivo</Badge>
                {isUpcoming && <Badge className="bg-green-500 text-white">Próximo</Badge>}
                {conference.isLive && <Badge className="bg-red-500 text-white animate-pulse">EN VIVO AHORA</Badge>}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{conference.title}</h1>

              <p className="text-lg text-primary-foreground/90 mb-8">{conference.description}</p>

              {/* Key Info */}
              <div className="space-y-3 mb-8 py-6 border-y border-primary-foreground/20">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span>
                    {conferenceDate.toLocaleDateString("es-ES", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>
                    {conferenceDate.toLocaleTimeString("es-ES", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    ({conference.duration} minutos)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <span>{professor.name}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 flex-1">
                  Registrarse por ${conference.price}
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
          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Sobre esta Conferencia</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">{conference.description}</p>
              <p className="text-muted-foreground leading-relaxed">
                Únete a esta conferencia exclusiva para aprender directamente de un experto reconocido en la industria.
                Una oportunidad única de networking e intercambio de conocimientos con profesionales de tu área.
              </p>
            </Card>

            {/* What You'll Learn */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Lo que aprenderás</h2>
              <div className="space-y-3">
                {[
                  "Insights clave de la industria",
                  "Estrategias prácticas y aplicables",
                  "Casos de éxito reales",
                  "Oportunidades de networking",
                  "Acceso a materiales exclusivos",
                  "Certificado de asistencia",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Speaker */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">El Conferencista</h2>
              <div className="flex gap-6">
                <img
                  src={professor.imageUrl || "/placeholder-user.jpg"}
                  alt={professor.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-xl mb-1">{professor.name}</h3>
                  <p className="text-accent font-semibold mb-3">{professor.specialty}</p>
                  <p className="text-muted-foreground mb-4">{professor.bio}</p>
                  <Button asChild variant="outline" className="text-primary bg-transparent">
                    <Link href={`/professor/${professor.id}`}>Ver otros eventos</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20">
              <Badge className="mb-4 bg-accent text-accent-foreground">Evento Exclusivo</Badge>

              <div className="space-y-6 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Precio</p>
                  <p className="text-4xl font-bold text-primary">${conference.price}</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Fecha:
                    </span>
                    <span className="font-medium">{conferenceDate.toLocaleDateString("es-ES")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Hora:
                    </span>
                    <span className="font-medium">
                      {conferenceDate.toLocaleTimeString("es-ES", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Duración:
                    </span>
                    <span className="font-medium">{conference.duration} min</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 mb-3">
                Registrarse Ahora
              </Button>

              <Button variant="outline" size="lg" className="w-full text-primary bg-transparent">
                Añadir al carrito
              </Button>

              <div className="mt-6 pt-6 border-t border-border">
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Acceso inmediato
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Garantía de satisfacción
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Acceso de por vida
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
