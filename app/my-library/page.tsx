"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { mockCourses } from "@/lib/mock-data"
import { Play, Clock, MoreVertical } from "lucide-react"
import { VideoPlayer } from "@/components/video-player"
import { useState } from "react"

export default function MyLibraryPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const userCourses = mockCourses.slice(0, 2)
  const purchaseHistory = [
    {
      id: "1",
      title: "Transformación Digital Completa",
      purchaseDate: "2024-01-15",
      price: 199.99,
    },
    {
      id: "2",
      title: "Marketing Digital Avanzado",
      purchaseDate: "2024-02-10",
      price: 149.99,
    },
  ]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Mi Biblioteca</h1>
          <p className="text-lg text-primary-foreground/80">Accede a todos tus cursos y conferencias compradas</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-xs">
            <TabsTrigger value="courses">Mis Cursos</TabsTrigger>
            <TabsTrigger value="history">Historial</TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6 mt-8">
            {selectedCourse ? (
              <div className="space-y-4">
                <Button variant="outline" onClick={() => setSelectedCourse(null)} className="text-primary">
                  ← Volver a Mis Cursos
                </Button>
                <Card className="p-6">
                  <VideoPlayer
                    src="/sample-video.mp4"
                    title={mockCourses.find((c) => c.id === selectedCourse)?.title || ""}
                    isLocked={false}
                  />
                </Card>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div
                      className="relative aspect-video bg-secondary overflow-hidden group"
                      onClick={() => setSelectedCourse(course.id)}
                    >
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
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration} minutos</span>
                      </div>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link href="#" onClick={() => setSelectedCourse(course.id)}>
                          Continuar Viendo
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="mt-8">
            <div className="space-y-4">
              {purchaseHistory.map((purchase) => (
                <Card key={purchase.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{purchase.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {new Date(purchase.purchaseDate).toLocaleDateString("es-ES")}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-primary">${purchase.price}</span>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
