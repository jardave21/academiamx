"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, MapPin } from "lucide-react"
import Link from "next/link"
import { mockConferences, mockProfessors } from "@/lib/mock-data"
import { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  const [selectedMonth, setSelectedMonth] = useState(new Date())

  const upcomingEvents = useMemo(() => {
    return mockConferences.filter((conf) => {
      const confDate = new Date(conf.scheduledDate)
      return confDate.getMonth() === selectedMonth.getMonth() && confDate.getFullYear() === selectedMonth.getFullYear()
    })
  }, [selectedMonth])

  const allUpcoming = mockConferences.sort(
    (a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime(),
  )

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Calendario de Eventos</h1>
          <p className="text-lg text-primary-foreground/80">Descubre todas nuestras próximas conferencias y eventos</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calendar Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20">
              <h3 className="font-bold text-lg mb-6">Próximos Meses</h3>

              <div className="space-y-2">
                {[0, 1, 2, 3].map((offset) => {
                  const date = new Date(selectedMonth)
                  date.setMonth(date.getMonth() + offset)
                  const isSelected =
                    date.getMonth() === selectedMonth.getMonth() && date.getFullYear() === selectedMonth.getFullYear()

                  return (
                    <Button
                      key={offset}
                      variant={isSelected ? "default" : "outline"}
                      className={`w-full justify-start ${isSelected ? "bg-primary" : "text-primary"}`}
                      onClick={() => setSelectedMonth(date)}
                    >
                      {date.toLocaleDateString("es-ES", {
                        month: "long",
                        year: "numeric",
                      })}
                    </Button>
                  )
                })}
              </div>

              {/* Event Count */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Eventos este mes</p>
                <p className="text-3xl font-bold text-accent">{upcomingEvents.length}</p>
              </div>
            </Card>
          </div>

          {/* Events List */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                {selectedMonth.toLocaleDateString("es-ES", {
                  month: "long",
                  year: "numeric",
                })}
              </h3>

              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((conference) => {
                  const professor = mockProfessors.find((p) => p.id === conference.professorId)
                  const confDate = new Date(conference.scheduledDate)

                  return (
                    <Card key={conference.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        {/* Date Highlight */}
                        <div className="md:w-32 bg-accent text-accent-foreground p-6 flex flex-col items-center justify-center md:flex-col">
                          <span className="text-4xl font-bold">{confDate.getDate()}</span>
                          <span className="text-sm uppercase font-semibold">
                            {confDate.toLocaleDateString("es-ES", {
                              month: "short",
                            })}
                          </span>
                        </div>

                        {/* Event Details */}
                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-primary text-primary-foreground">{conference.category}</Badge>
                              {confDate > new Date() && <Badge className="bg-green-500 text-white">Próximo</Badge>}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{conference.title}</h3>
                            <p className="text-muted-foreground mb-4">{conference.description}</p>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>
                                  {confDate.toLocaleTimeString("es-ES", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Virtual</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>{professor?.name}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                            <span className="text-2xl font-bold text-primary">${conference.price}</span>
                            <Button asChild className="bg-primary hover:bg-primary/90">
                              <Link href={`/conference/${conference.id}`}>Más Información</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })
              ) : (
                <Card className="p-12 text-center">
                  <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground mb-4">No hay eventos programados para este mes</p>
                  <Button asChild variant="outline" className="text-primary bg-transparent">
                    <Link href="/conferences">Ver todas las conferencias</Link>
                  </Button>
                </Card>
              )}
            </div>

            {/* All Upcoming Events */}
            <div className="mt-12 pt-12 border-t border-border">
              <h3 className="text-2xl font-bold mb-6">Todos los Próximos Eventos</h3>
              <div className="space-y-4">
                {allUpcoming.slice(0, 5).map((conference) => {
                  const confDate = new Date(conference.scheduledDate)
                  return (
                    <Card key={conference.id} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{conference.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {confDate.toLocaleDateString("es-ES")} a las{" "}
                            {confDate.toLocaleTimeString("es-ES", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                        <Button asChild variant="ghost" size="sm" className="text-primary">
                          <Link href={`/conference/${conference.id}`}>Ver</Link>
                        </Button>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
