"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { mockCourses, mockProfessors } from "@/lib/mock-data"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"

export default function AdminCoursesPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Gestión de Cursos</h1>
          <p className="text-muted-foreground mt-1">Administra y crea nuevos cursos</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Curso
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Crear Nuevo Curso</DialogTitle>
            </DialogHeader>
            <AdminCourseForm onClose={() => setIsOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Courses Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Profesor</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Estudiantes</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCourses.map((course) => {
              const professor = mockProfessors.find((p) => p.id === course.professorId)
              return (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{professor?.name}</TableCell>
                  <TableCell>
                    <Badge className="bg-accent text-accent-foreground">{course.category}</Badge>
                  </TableCell>
                  <TableCell>${course.price}</TableCell>
                  <TableCell>250+</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/course/${course.id}`}>
                          <Eye className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

function AdminCourseForm({ onClose }: { onClose: () => void }) {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Título del Curso</label>
        <Input placeholder="Ej: Marketing Digital Avanzado" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Descripción</label>
        <Input placeholder="Descripción del curso" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Precio</label>
          <Input type="number" placeholder="199.99" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Duración (min)</label>
          <Input type="number" placeholder="480" />
        </div>
      </div>
      <div className="flex gap-3">
        <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
          Crear Curso
        </Button>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
      </div>
    </form>
  )
}
