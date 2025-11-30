"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mockConferences, mockProfessors } from "@/lib/mock-data"
import Link from "next/link"
import { Calendar, Users, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ConferencesPage() {
  const [sortBy, setSortBy] = useState<"date" | "price">("date")

  const sortedConferences = useMemo(() => {
    const sorted = [...mockConferences]
    if (sortBy === "date") {
      sorted.sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime())
    } else if (sortBy === "price") {
      sorted.sort((a, b) => a.price - b.price)
    }
    return sorted
  }, [sortBy])

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Conferencias y Webinars</h1>
          <p className="text-lg text-primary-foreground/80">Eventos exclusivos con expertos de la industria</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sort Options */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted-foreground">
            {sortedConferences.length} conferencia{sortedConferences.length !== 1 ? "s" : ""} disponible
            {sortedConferences.length !== 1 ? "s" : ""}
          </p>
          <div className="flex gap-2">
            <Button
              variant={sortBy === "date" ? "default" : "outline"}
              onClick={() => setSortBy("date")}
              className={sortBy === "date" ? "bg-primary" : "text-primary"}
            >
              Próximas
            </Button>
            <Button
              variant={sortBy === "price" ? "default" : "outline"}
              onClick={() => setSortBy("price")}
              className={sortBy === "price" ? "bg-primary" : "text-primary"}
            >
              Precio
            </Button>
          </div>
        </div>

        {/* Conferences List */}
        <div className="space-y-6">
          {sortedConferences.map((conference) => {
            const professor = mockProfessors.find((p) => p.id === conference.professorId)

            return (
              <Card key={conference.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  {/* Thumbnail */}
                  <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden group">
                    <img
                      src={conference.thumbnailUrl || "/placeholder.svg"}
                      alt={conference.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-accent text-accent-foreground">{conference.category}</Badge>
                        {conference.isLive && <Badge className="bg-red-500 text-white animate-pulse">EN VIVO</Badge>}
                      </div>

                      <h2 className="text-2xl font-bold mb-2">{conference.title}</h2>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{conference.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(conference.scheduledDate).toLocaleDateString("es-ES", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{conference.duration} minutos</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{professor?.name}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                      <span className="text-3xl font-bold text-primary">${conference.price}</span>
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href={`/conference/${conference.id}`}>Registrarse</Link>
                      </Button>
                    </div>
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
