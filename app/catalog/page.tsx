"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { mockCourses, mockProfessors } from "@/lib/mock-data"
import Link from "next/link"
import { Play, Search, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProfessor, setSelectedProfessor] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const filteredCourses = useMemo(() => {
    return mockCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory

      const matchesProfessor = selectedProfessor === "all" || course.professorId === selectedProfessor

      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel

      return matchesSearch && matchesCategory && matchesProfessor && matchesLevel
    })
  }, [searchQuery, selectedCategory, selectedProfessor, selectedLevel])

  const categories = Array.from(new Set(mockCourses.map((course) => course.category)))
  const levels = Array.from(new Set(mockCourses.map((course) => course.level)))

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Catálogo de Cursos</h1>
          <p className="text-lg text-primary-foreground/80">
            Descubre más de {mockCourses.length} cursos de profesionales expertos
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between lg:justify-start mb-4 lg:mb-6">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filtros
              </h3>
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                {showFilters ? "✕" : "▼"}
              </Button>
            </div>

            <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar cursos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div>
                <Label className="font-semibold mb-3 block">Categoría</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las categorías</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Professor Filter */}
              <div>
                <Label className="font-semibold mb-3 block">Profesor</Label>
                <Select value={selectedProfessor} onValueChange={setSelectedProfessor}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los profesores</SelectItem>
                    {mockProfessors.map((professor) => (
                      <SelectItem key={professor.id} value={professor.id}>
                        {professor.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Level Filter */}
              <div>
                <Label className="font-semibold mb-3 block">Nivel</Label>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los niveles</SelectItem>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Reset Button */}
              <Button
                variant="outline"
                className="w-full text-primary bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setSelectedProfessor("all")
                  setSelectedLevel("all")
                }}
              >
                Limpiar Filtros
              </Button>
            </div>
          </div>

          {/* Course Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-muted-foreground">
                {filteredCourses.length} curso{filteredCourses.length !== 1 ? "s" : ""} encontrado
                {filteredCourses.length !== 1 ? "s" : ""}
              </p>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredCourses.map((course) => {
                  const professor = mockProfessors.find((p) => p.id === course.professorId)

                  return (
                    <Card
                      key={course.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                    >
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
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-accent text-accent-foreground">{course.category}</Badge>
                          <span className="text-xs text-muted-foreground">{course.duration} min</span>
                        </div>

                        <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>

                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2 flex-grow">
                          {course.description}
                        </p>

                        <div className="mb-4">
                          <p className="text-xs text-muted-foreground">Profesor</p>
                          <p className="font-medium text-sm">{professor?.name}</p>
                        </div>

                        <div className="flex items-center justify-between border-t border-border pt-4">
                          <span className="text-2xl font-bold text-primary">${course.price}</span>
                          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                            <Link href={`/course/${course.id}`}>Ver Curso</Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No se encontraron cursos con esos filtros.</p>
                <Button
                  variant="outline"
                  className="text-primary bg-transparent"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setSelectedProfessor("all")
                    setSelectedLevel("all")
                  }}
                >
                  Ver todos los cursos
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
